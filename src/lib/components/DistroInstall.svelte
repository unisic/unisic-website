<script lang="ts">
  import CopyCommand from "./CopyCommand.svelte";
  import DistroIcon from "./DistroIcon.svelte";
  import { DIRECT_ASSETS, DISTROS, type AssetId, type DistroId } from "#lib/distros.ts";
  import { fetchLatestRelease, formatSize, RELEASES_URL, type LatestRelease } from "#lib/releases.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  type ReleaseState = { kind: "pending" } | { kind: "ready"; release: LatestRelease } | { kind: "error" };

  /*
   * Install picker: a list of buttons (down the side of a wide card, wrapped
   * above the panel on a narrow one), the AppImage direct download first
   * and preselected (the recommended way in), the experimental Windows
   * installer, then the distros. A distro shows its install steps as one
   * script, under a version switch for Ubuntu and openSUSE that starts on
   * the recommended version; each distro remembers its own version choice.
   * A format shows a download button for the latest release, fetched once on
   * mount; until it arrives, and without JS, the button opens the release
   * page. Every switch replays the reveal.
   */
  let { dict }: { dict: Dictionary } = $props();
  const d = $derived(dict.download);

  let sel = $state<DistroId | AssetId>("appimage");
  const variantChoice = $state<Partial<Record<DistroId, string>>>({});
  let rel = $state<ReleaseState>({ kind: "pending" });

  $effect(() => {
    fetchLatestRelease()
      .then((release) => (rel = { kind: "ready", release }))
      .catch(() => (rel = { kind: "error" }));
  });
</script>

<div class="install">
  <p class="lede">{d.repoLede}</p>

  <div class="body">
    <div class="picker" role="group" aria-label={d.distroListLabel}>
      {#each [...DIRECT_ASSETS, ...DISTROS] as x (x.id)}
        <button type="button" class="pill" aria-pressed={x.id === sel} onclick={() => (sel = x.id)}>
          <DistroIcon id={x.id} size={18} />
          {x.name}
        </button>
      {/each}
    </div>

    <!-- every panel stays mounted in one grid cell, so the card is as tall as
         its tallest panel (or the side list) and switching never resizes it;
         the well in each panel (the download box, the script) takes up
         whatever room the panel's own content leaves. inert takes the others
         out of view, focus and the accessibility tree -->
    <div class="panels">
      {#each DIRECT_ASSETS as a (a.id)}
        {@const asset = rel.kind === "ready" ? rel.release.assets.find((x) => x.format === a.id) : undefined}
        <div class="panel" inert={a.id !== sel}>
          <div class="box well">
            <div class="well-bar"><span class="well-title">{a.name}</span></div>
            <div class="box-body">
              <DistroIcon id={a.id} size={44} class="box-icon" />
              {#if rel.kind === "ready" && asset}
                {@const [before, after] = d.latest.split("{tag}")}
                <p>{before}<strong>{rel.release.tag}</strong>{after}</p>
                <a href={asset.url} class="download">
                  <span class="download-label">{d.downloadBtn}</span>
                  <span class="download-hint">{asset.name} · {formatSize(asset.size)}</span>
                </a>
                <p><a href={RELEASES_URL}>{d.allReleases}</a></p>
              {:else}
                <a href={RELEASES_URL} class="download">
                  <span class="download-label">{d.fallbackBtn}</span>
                  <span class="download-hint">{a.name}</span>
                </a>
                {#if rel.kind === "error"}<p>{d.fallbackNote}</p>{/if}
              {/if}
            </div>
          </div>
          <p class="note">{d.notes[a.id]}</p>
        </div>
      {/each}

      {#each DISTROS as x (x.id)}
        {@const variant = x.variants?.find((v) => v.id === variantChoice[x.id]) ?? x.variants?.[0]}
        {@const variantId = variant?.id}
        <div class="panel" inert={x.id !== sel}>
          {#if x.variants}
            <div class="variants" role="group" aria-label={d.versionLabel}>
              <span class="variant-label">{d.versionLabel}</span>
              {#each x.variants as v (v.id)}
                <button
                  type="button"
                  class="variant"
                  aria-pressed={v.id === variantId}
                  onclick={() => (variantChoice[x.id] = v.id)}
                >
                  {v.label}
                </button>
              {/each}
            </div>
          {/if}

          <!-- re-keyed on every version switch, so the reveal replays and a
               copied checkmark never survives a snippet change -->
          {#key variantId}
            <div class="script">
              <CopyCommand
                variant="script"
                title={variant ? `${x.name} ${variant.label}` : x.name}
                command={x.steps(variantId).map((step) => `# ${d.steps[step.key]}\n${step.command}`).join("\n\n")}
                copyLabel={d.copyCmd}
                copiedLabel={d.copiedCmd}
              />
            </div>
          {/key}
          <p class="note">{d.notes[x.id]}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .install {
    container-type: inline-size;
  }

  .lede {
    max-width: 72ch;
    color: var(--ink-2);
    font-size: 1rem;
  }

  .body {
    margin-top: 20px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  /* a wide card lists the options down the side: the panel beside the list
     is at least as tall as it, so the card height is set by the list and
     only the tallest script could add to it */
  @container (min-width: 640px) {
    .body {
      grid-template-columns: 196px minmax(0, 1fr);
    }

    .picker {
      flex-direction: column;
      gap: 6px;
    }
  }

  .picker {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pill,
  .variant {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--divider);
    color: var(--text-secondary);
    font-weight: 600;
    transition:
      color var(--dur-fast) var(--ease-out),
      background-color var(--dur-fast) var(--ease-out),
      border-color var(--dur-fast) var(--ease-out),
      transform var(--dur-fast) var(--ease-out);
  }

  .pill:hover,
  .variant:hover {
    color: var(--text);
    border-color: color-mix(in srgb, var(--text) 30%, transparent);
  }

  .pill:active,
  .variant:active {
    transform: scale(0.97);
  }

  .pill {
    gap: 9px;
    height: 44px;
    padding: 0 18px;
    font-size: 0.9375rem;
  }

  .pill :global(svg) {
    flex: none;
  }

  .pill[aria-pressed="true"] {
    background: var(--accent);
    border-color: transparent;
    color: var(--text-on-accent);
  }

  .variants {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .variant-label {
    margin-right: 4px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
  }

  .variant {
    height: 32px;
    padding: 0 15px;
    font-size: 13.5px;
    font-variant-numeric: tabular-nums;
  }

  .variant[aria-pressed="true"] {
    background: var(--surface-hi);
    border-color: var(--accent);
    color: var(--text);
  }

  /* minmax(0, 1fr): an auto column would grow to the longest snippet line
     instead of letting the snippet scroll */
  .panels {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  .panel {
    grid-area: 1 / 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .panel[inert] {
    visibility: hidden;
  }

  .script {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* a well like the script's, the download centered in it */
  .box {
    flex: 1;
  }

  .box-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 24px;
    color: var(--ink-2);
    font-size: 0.9375rem;
    text-align: center;
  }

  .box-body :global(.box-icon) {
    color: var(--accent);
  }

  .box strong {
    color: var(--text);
    font-family: var(--font-mono);
    font-weight: 600;
  }

  .box p a {
    color: var(--ink-2);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--dur-fast) var(--ease-out);
  }

  .box p a:hover {
    color: var(--text);
  }

  .note {
    color: var(--ink-2);
    font-size: 0.9375rem;
    line-height: 1.55;
  }

  .download {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;
    min-width: 190px;
    height: 62px;
    padding: 0 26px;
    border-radius: 999px;
    background: var(--accent);
    color: var(--text-on-accent);
    text-align: left;
    transition:
      background-color var(--dur-fast) var(--ease-out),
      transform var(--dur-fast) var(--ease-out);
  }

  .download:hover {
    background: var(--accent-bright);
  }

  .download:active {
    transform: scale(0.97);
  }

  .download-label {
    font-weight: 650;
    font-size: 15.5px;
    line-height: 1.1;
  }

  .download-hint {
    font-size: 0.8125rem;
    line-height: 1.1;
  }

  /* the panel (with the version switch when there is one) rises first, then
     the script, then the note. Hidden panels carry no animation, so the one
     that loses inert starts it afresh, as does a {#key} remount */
  @media (prefers-reduced-motion: no-preference) {
    .panel,
    .script,
    .note {
      animation: rise 0.4s var(--ease-out) both;
    }

    .script {
      animation-delay: 0.09s;
    }

    .note {
      animation-delay: 0.18s;
    }

    .panel[inert],
    .panel[inert] .script,
    .panel[inert] .note {
      animation-name: none;
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
  }
</style>
