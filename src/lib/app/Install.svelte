<script lang="ts">
  import Copy from "./Copy.svelte";
  import DistroIcon from "./DistroIcon.svelte";
  import Icon from "#lib/components/Icon.svelte";
  import { DIRECT_ASSETS, DISTROS, type AssetId, type DistroId } from "#lib/distros.ts";
  import { download } from "#lib/icons.ts";
  import { fetchLatestRelease, formatSize, RELEASES_URL, type LatestRelease } from "#lib/releases.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  type ReleaseState = { kind: "pending" } | { kind: "ready"; release: LatestRelease } | { kind: "error" };

  /*
   * Install picker in the app's sidebar look: the AppImage first and
   * preselected, the experimental Windows installer, then the distros. A
   * format offers the latest release's file, fetched once on mount; until
   * it arrives, and without JS, the button opens the release page. A distro
   * shows its steps as one script, with a version switch for Ubuntu and
   * openSUSE that starts on the recommended version and is remembered per
   * distro. Every panel stays mounted in one grid cell, so the card is as
   * tall as its tallest panel and switching never resizes it.
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
  <div class="body card">
    <div class="picker" role="group" aria-label={d.distroListLabel}>
      {#each [...DIRECT_ASSETS, ...DISTROS] as x, i (x.id)}
        {#if i === DIRECT_ASSETS.length}<span class="sep" aria-hidden="true"></span>{/if}
        <button type="button" class="pick" aria-pressed={x.id === sel} onclick={() => (sel = x.id)}>
          <DistroIcon id={x.id} size={18} />
          {x.name}
        </button>
      {/each}
    </div>

    <div class="panels">
      {#each DIRECT_ASSETS as a (a.id)}
        {@const asset = rel.kind === "ready" ? rel.release.assets.find((x) => x.format === a.id) : undefined}
        <div class="panel" inert={a.id !== sel}>
          <h3><DistroIcon id={a.id} size={26} />{a.name}</h3>
          <div class="well file">
            {#if rel.kind === "ready" && asset}
              {@const [before, after] = d.latest.split("{tag}")}
              <p class="latest">{before}<strong>{rel.release.tag}</strong>{after}</p>
              <a href={asset.url} class="btn btn-filled get"><Icon svg={download} />{d.downloadBtn}</a>
              <p class="asset">{asset.name} · {formatSize(asset.size)}</p>
              <a class="more" href={RELEASES_URL}>{d.allReleases}</a>
            {:else}
              <a href={RELEASES_URL} class="btn btn-filled get"><Icon svg={download} />{d.fallbackBtn}</a>
              <p class="asset">{rel.kind === "error" ? d.fallbackNote : a.name}</p>
            {/if}
          </div>
          <p class="note">{d.notes[a.id]}</p>
        </div>
      {/each}

      {#each DISTROS as x (x.id)}
        {@const variant = x.variants?.find((v) => v.id === variantChoice[x.id]) ?? x.variants?.[0]}
        {@const steps = x.steps(variant?.id)}
        <div class="panel" inert={x.id !== sel}>
          <div class="panel-head">
            <h3><DistroIcon id={x.id} size={26} />{x.name}</h3>
            {#if x.variants}
              <div class="variants" role="group" aria-label={d.versionLabel}>
                {#each x.variants as v (v.id)}
                  <button
                    type="button"
                    class="chip"
                    aria-pressed={v.id === variant?.id}
                    onclick={() => (variantChoice[x.id] = v.id)}>{v.label}</button
                  >
                {/each}
              </div>
            {/if}
          </div>
          <div class="well term">
            <div class="term-bar">
              <span>{variant ? `${x.name} ${variant.label}` : x.name}</span>
              <Copy text={steps.map((s) => s.command).join("\n")} label={d.copyCmd} copiedLabel={d.copiedCmd} />
            </div>
            <!-- a continuation line starts with spaces, so only a line's first
                 command gets the prompt -->
            <pre>{#each steps as st, i (i)}{i ? "\n\n" : ""}<span class="comment"># {d.steps[st.key]}</span
                >{#each st.command.split("\n") as line, j (j)}{"\n"}{#if !line.startsWith(" ")}<span
                      class="ps1"
                      aria-hidden="true">$ </span
                    >{/if}{line}{/each}{/each}</pre>
          </div>
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

  .body {
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr);
    gap: 8px;
    padding: 12px;
  }

  .picker {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sep {
    height: 1px;
    margin: 6px 11px;
    background: var(--divider);
  }

  /* the app's sidebar entry: 38px, tertiary fill when current */
  .pick {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 38px;
    padding: 0 11px;
    border-radius: var(--radius-s);
    color: var(--text-secondary);
    font-size: 15px;
    text-align: left;
    white-space: nowrap;
    transition:
      background-color var(--dur-fast) var(--ease-out),
      color var(--dur-fast) var(--ease-out);
  }

  .pick:hover {
    background: var(--secondary);
    color: var(--text);
  }

  .pick[aria-pressed="true"] {
    background: var(--tertiary);
    color: var(--text);
    font-weight: 600;
  }

  .panels {
    display: grid;
    min-width: 0;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--bg);
  }

  .panel {
    grid-area: 1 / 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
    padding: 22px 24px 24px;
  }

  .panel[inert] {
    visibility: hidden;
  }

  .panel-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px 16px;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: var(--font-xl);
    color: var(--text);
  }

  h3 :global(svg) {
    color: var(--accent);
  }

  .variants {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* the well takes whatever height the panel's other content leaves */
  .well {
    flex: 1;
    min-height: 0;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--bg-deep);
  }

  .file {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 28px 20px;
    text-align: center;
  }

  .latest {
    color: var(--text-secondary);
  }

  .latest strong {
    color: var(--text);
    font-family: var(--font-mono);
  }

  .get {
    min-height: 48px;
    padding-inline: 28px;
    font-size: var(--font-l);
  }

  .asset {
    max-width: 100%;
    overflow-wrap: anywhere;
    color: var(--text-tertiary);
    font-family: var(--font-mono);
    font-size: var(--font-s);
  }

  .more {
    color: var(--accent);
    font-size: var(--font-m);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .term {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .term-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 48px;
    padding: 6px 8px 6px 16px;
    border-bottom: 1px solid var(--divider);
    color: var(--text-tertiary);
    font-family: var(--font-mono);
    font-size: var(--font-s);
  }

  pre {
    flex: 1;
    margin: 0;
    padding: 16px;
    overflow-x: auto;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 13.5px;
    line-height: 1.75;
  }

  .comment {
    color: var(--text-tertiary);
  }

  .ps1 {
    color: var(--accent);
    user-select: none;
  }

  .note {
    color: var(--text-secondary);
    font-size: var(--font-m);
  }

  /* a narrow card lists the options as chips above the panel */
  @container (max-width: 640px) {
    .body {
      grid-template-columns: minmax(0, 1fr);
    }

    .picker {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 6px;
    }

    .sep {
      display: none;
    }

    .pick {
      gap: 8px;
      height: 34px;
      padding: 0 12px;
      border: 1px solid var(--divider);
      border-radius: 999px;
      font-size: 13px;
    }

    .panel {
      padding: 18px 16px 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pick {
      transition: none;
    }
  }
</style>
