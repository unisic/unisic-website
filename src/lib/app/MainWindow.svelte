<script lang="ts">
  import Icon from "#lib/components/Icon.svelte";
  import Logo from "#lib/components/Logo.svelte";
  import Combo from "./Combo.svelte";
  import Switch from "./Switch.svelte";
  import Window from "./Window.svelte";
  import { interpolate, type Dictionary } from "#lib/i18n/index.ts";
  import {
    cameraPhoto,
    configure,
    cut,
    edit,
    folderCloud,
    folderOpen,
    gif as gifGlyph,
    globe,
    listAdd,
    lock,
    magnify,
    mediaRecord,
    mediaRepeat,
    monitor,
    pause,
    play,
    region,
    star,
    stop,
    viewHistory,
    windowFrame,
  } from "#lib/icons.ts";

  /*
   * The main window, page for page: the sidebar and the five pages of
   * unisic/qml/pages, with the app's strings, defaults and built-in servers.
   * All pages share one grid cell, so the window is as tall as the tallest
   * page and switching never resizes it; inert takes the hidden ones out of
   * focus and the accessibility tree.
   */
  let { dict }: { dict: Dictionary } = $props();
  const mw = $derived(dict.mainWindow);
  const a = $derived(dict.app);

  type Page = "capture" | "record" | "edit" | "history" | "servers";
  const NAV: { id: Page; icon: string }[][] = [
    [
      { id: "capture", icon: cameraPhoto },
      { id: "record", icon: mediaRecord },
      { id: "edit", icon: edit },
    ],
    [
      { id: "history", icon: viewHistory },
      { id: "servers", icon: folderCloud },
    ],
  ];
  let page = $state<Page>("capture");

  const SERVERS = [
    { name: "catbox.moe", url: "https://catbox.moe/user/api.php" },
    { name: "Imgur (anonymous)", url: "https://api.imgur.com/3/image", needs: "clientId" },
    { name: "uguu.se (48h)", url: "https://uguu.se/upload" },
    { name: "litterbox (72h)", url: "https://litterbox.catbox.moe/resources/internals/api.php" },
    { name: "tmpfiles.org (1h)", url: "https://tmpfiles.org/api/v1/upload" },
    { name: "buzzheavier.com", url: "https://w.buzzheavier.com/%file%", curl: true },
    { name: "vgy.me", url: "https://vgy.me/upload", needs: "userKey" },
  ];
  const SERVER_NAMES = SERVERS.map((s) => s.name);
  let server = $state("catbox.moe");

  /* capture */
  let delay = $state("200 ms");
  const toggles = $state({ cursor: true, editor: false, clipboard: true, disk: true, upload: false });
  const TOGGLES = ["cursor", "editor", "clipboard", "disk", "upload"] as const;

  /* record */
  let gifMode = $state(false);
  let source = $state<"screen" | "region" | "window">("screen");
  let format = $state("mp4");
  let fps = $state("30 FPS");
  let gifFps = $state("15 FPS");
  let quality = $state(50);
  let gifQuality = $state("");
  let maxDuration = $state("0 s");
  let recCursor = $state(true);
  let systemAudio = $state(true);
  let mic = $state(false);
  let appAudio = $state("");
  let replayLength = $state("30 s");
  const FPS = ["15 FPS", "30 FPS", "45 FPS", "60 FPS"];
  const DURATIONS = ["0 s", "10 s", "30 s", "60 s"];
  $effect.pre(() => {
    if (gifMode && source === "window") source = "screen";
  });

  /* history */
  type Kind = "image" | "gif" | "recording" | "clip";
  const SHOTS: { name: string; meta: string; kind: Kind; thumb: string; starred?: boolean; uploaded?: boolean }[] = [
    { name: "Unisic_2026-10-24_17-16-04.png", meta: "17:16 · 1280×800 · 214 KiB", kind: "image", thumb: "desk", uploaded: true },
    { name: "Unisic_2026-10-24_17-15-36.png", meta: "17:15 · 400×676 · 119 KiB", kind: "image", thumb: "uni", starred: true },
    { name: "Unisic_2026-10-24_17-12-05.gif", meta: "17:12 · 720×420 · 1.8 MiB", kind: "gif", thumb: "term", uploaded: true },
    { name: "Unisic_2026-10-24_17-11-24.mp4", meta: "17:11 · 1920×1080 · 8.4 MiB", kind: "recording", thumb: "desk" },
    { name: "Unisic_2026-10-24_17-10-49.mp4", meta: "17:10 · 1920×1080 · 5.1 MiB", kind: "clip", thumb: "term", starred: true },
  ];
  const FILTERS = ["all", "images", "gifs", "recordings", "clips"] as const;
  const FILTER_KIND: Record<(typeof FILTERS)[number], Kind | null> = {
    all: null,
    images: "image",
    gifs: "gif",
    recordings: "recording",
    clips: "clip",
  };
  let filter = $state<(typeof FILTERS)[number]>("all");
  let starredOnly = $state(false);
  let uploadedOnly = $state(false);
  let query = $state("");
  let cleared = $state(false);
  const shots = $derived(
    cleared
      ? []
      : SHOTS.filter(
          (s) =>
            (!FILTER_KIND[filter] || s.kind === FILTER_KIND[filter]) &&
            (!starredOnly || s.starred) &&
            (!uploadedOnly || s.uploaded) &&
            s.name.toLowerCase().includes(query.trim().toLowerCase()),
        ),
  );
</script>

{#snippet tile(icon: string, title: string, sub: string, keys?: string)}
  <div class="tile">
    <Icon svg={icon} size={32} />
    <strong>{title}</strong>
    <span>{sub}</span>
    {#if keys}<kbd>{keys}</kbd>{/if}
  </div>
{/snippet}

{#snippet thumb(kind: string)}
  {#if kind === "uni"}
    <img src="/uni.webp" alt="" width="400" height="676" loading="lazy" decoding="async" />
  {:else if kind === "term"}
    <svg viewBox="0 0 160 100" aria-hidden="true">
      <rect width="160" height="100" fill="#0e0e11" />
      <g stroke-width="5" stroke-linecap="round">
        <path d="M12 16h40" stroke="var(--accent)" /><path d="M58 16h56" stroke="#ececef" stroke-opacity=".5" />
        <path d="M12 30h24" stroke="#7bd88f" /><path d="M42 30h80" stroke="#ececef" stroke-opacity=".3" />
        <path d="M12 44h64" stroke="#ececef" stroke-opacity=".5" /><path d="M12 58h30" stroke="#ffb020" />
        <path d="M48 58h44" stroke="#ececef" stroke-opacity=".3" /><path d="M12 72h52" stroke="var(--accent)" />
        <path d="M12 86h8" stroke="#ececef" />
      </g>
    </svg>
  {:else}
    <svg viewBox="0 0 160 100" aria-hidden="true">
      <rect width="160" height="100" fill="var(--accent-wash)" />
      <rect x="14" y="14" width="92" height="62" rx="5" fill="var(--surface)" />
      <rect x="14" y="14" width="92" height="10" rx="5" fill="var(--tertiary)" />
      <rect x="62" y="38" width="84" height="50" rx="5" fill="var(--surface-hi)" stroke="var(--accent)" stroke-width="2" />
      <path d="M72 52h40M72 62h56M72 72h30" stroke="var(--text-tertiary)" stroke-width="4" stroke-linecap="round" />
    </svg>
  {/if}
{/snippet}

<Window title="Unisic" label={mw.ariaLabel}>
  <div class="body">
    <nav class="side" aria-label="Unisic">
      {#each NAV as group, g (g)}
        <p class="group" aria-hidden="true">{g ? mw.library : "Unisic"}</p>
        <ul>
          {#each group as item (item.id)}
            <li>
              <button
                type="button"
                class="nav"
                aria-current={page === item.id ? "page" : undefined}
                onclick={() => (page = item.id)}
              >
                <Icon svg={item.icon} size={17} />
                <span class="nav-label">{mw.nav[item.id]}</span>
              </button>
            </li>
          {/each}
        </ul>
      {/each}
      <div class="about" aria-hidden="true">
        <Logo size={30} />
        <span class="about-text"><strong>Unisic</strong><span>v0.8.8 · GPL-3.0</span></span>
        <Icon svg={configure} size={16} />
      </div>
    </nav>

    <div class="pages">
      <!-- capture -->
      <div class="page" inert={page !== "capture"}>
        <h3>{mw.pageTitle}</h3>
        <p class="sub">{mw.pageSub}</p>
        <div class="tiles">
          {@render tile(monitor, mw.cards.fullScreen.title, mw.cards.fullScreen.sub, "Meta+Shift+1")}
          {@render tile(region, mw.cards.region.title, mw.cards.region.sub, "Meta+Shift+2")}
          {@render tile(windowFrame, mw.cards.window.title, mw.cards.window.sub, "Meta+Shift+3")}
        </div>
        <h4>{mw.options.title}</h4>
        <div class="rows two">
          <label class="row">
            <span class="row-label">{mw.options.delay}</span>
            <Combo bind:value={delay} options={["0 ms", "200 ms", "500 ms", "1000 ms", "3000 ms"]} label={mw.options.delay} />
          </label>
          <div class="row">
            <span class="row-label">{mw.options.repeat}</span>
            <button type="button" class="btn btn-tonal btn-compact"><Icon svg={mediaRepeat} />{mw.options.repeatAction}</button>
          </div>
          <label class="row">
            <span class="row-label">{mw.options.server}</span>
            <Combo bind:value={server} options={SERVER_NAMES} label={mw.options.server} wide />
          </label>
          {#each TOGGLES as t (t)}
            <label class="row">
              <span class="row-label">{mw.options[t]}</span>
              <Switch bind:checked={toggles[t]} label={mw.options[t]} />
            </label>
          {/each}
        </div>
      </div>

      <!-- record -->
      <div class="page" inert={page !== "record"}>
        <div class="head">
          <div>
            <h3>{gifMode ? a.record.gifTitle : a.record.title}</h3>
            <p class="sub">{gifMode ? a.record.gifSub : a.record.sub}</p>
          </div>
          <div class="chips">
            <button type="button" class="chip" aria-pressed={!gifMode} onclick={() => (gifMode = false)}
              ><Icon svg={mediaRecord} />{a.record.video}</button
            >
            <button type="button" class="chip" aria-pressed={gifMode} onclick={() => (gifMode = true)}
              ><Icon svg={gifGlyph} />{a.record.gif}</button
            >
          </div>
        </div>
        <div class="actions">
          {#each [["screen", monitor], ["region", region], ["window", windowFrame]] as const as [id, icon] (id)}
            <button
              type="button"
              class="btn btn-compact {source === id ? 'btn-filled' : 'btn-tonal'}"
              aria-pressed={source === id}
              disabled={gifMode && id === "window"}
              title={gifMode && id === "window" ? a.record.noWindowGif : undefined}
              onclick={() => (source = id)}><Icon svg={icon} />{a.record[id]}</button
            >
          {/each}
          <button type="button" class="btn btn-tonal btn-compact" disabled><Icon svg={pause} />{a.record.pause}</button>
          <button type="button" class="btn btn-compact danger" disabled><Icon svg={stop} />{a.record.stop}</button>
          <button type="button" class="btn btn-tonal btn-compact" disabled={gifMode}
            ><Icon svg={mediaRecord} />{a.record.startReplay}</button
          >
        </div>
        <div class="cols">
          <div>
            <h4>{gifMode ? a.record.gifOptions : a.record.videoOptions}</h4>
            <div class="rows">
              {#if !gifMode}
                <label class="row">
                  <span class="row-label">{a.record.format}</span>
                  <Combo bind:value={format} options={["mp4", "webm"]} label={a.record.format} />
                </label>
              {/if}
              <label class="row">
                <span class="row-label">{a.record.frameRate}</span>
                {#if gifMode}
                  <Combo bind:value={gifFps} options={FPS} label={a.record.frameRate} />
                {:else}
                  <Combo bind:value={fps} options={FPS} label={a.record.frameRate} />
                {/if}
              </label>
              {#if gifMode}
                <label class="row">
                  <span class="row-label">{a.record.quality}</span>
                  <Combo
                    bind:value={() => gifQuality || a.record.balanced, (v) => (gifQuality = v)}
                    options={[a.record.fast, a.record.balanced, a.record.best]}
                    label={a.record.quality}
                    wide
                  />
                </label>
              {:else}
                <label class="row tall">
                  <span class="row-label">{a.record.quality} <output>{quality}%</output></span>
                  <input type="range" min="0" max="100" step="5" bind:value={quality} style:--fill="{quality}%" />
                  <span class="row-sub">{a.record.qualitySub}</span>
                </label>
              {/if}
              <label class="row">
                <span class="row-label">{a.record.maxDuration}</span>
                <Combo bind:value={maxDuration} options={DURATIONS} label={a.record.maxDuration} />
              </label>
              {#if !gifMode}
                <label class="row">
                  <span class="row-label">{a.record.cursor}</span>
                  <Switch bind:checked={recCursor} label={a.record.cursor} />
                </label>
              {/if}
            </div>
          </div>
          <div>
            <h4>{gifMode ? a.record.goodToKnow : a.record.audio}</h4>
            {#if gifMode}
              <div class="note">
                <p>{a.record.gifNoAudio}</p>
                <p>{a.record.gifSize}</p>
              </div>
            {:else}
              <div class="rows">
                <label class="row">
                  <span class="row-label">{a.record.systemAudio}</span>
                  <Switch bind:checked={systemAudio} label={a.record.systemAudio} />
                </label>
                <label class="row">
                  <span class="row-label">{a.record.mic}</span>
                  <Switch bind:checked={mic} label={a.record.mic} />
                </label>
                <div class="row">
                  <span class="row-label">{a.record.appAudio}</span>
                  <Combo
                    bind:value={() => appAudio || a.record.off, (v) => (appAudio = v)}
                    options={[a.record.off]}
                    label={a.record.appAudio}
                  />
                  <button type="button" class="btn btn-tonal btn-compact">{a.record.refresh}</button>
                </div>
                <label class="row">
                  <span class="row-label">{a.record.replayLength}</span>
                  <Combo bind:value={replayLength} options={["15 s", "30 s", "60 s", "120 s"]} label={a.record.replayLength} />
                </label>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- edit -->
      <div class="page" inert={page !== "edit"}>
        <h3>{a.edit.title}</h3>
        <p class="sub">{a.edit.sub}</p>
        <div class="tiles">
          {@render tile(edit, a.edit.image, a.edit.imageSub)}
          {@render tile(cut, a.edit.video, a.edit.videoSub)}
        </div>
        <h4>{a.record.goodToKnow}</h4>
        <div class="note"><p>{a.edit.tip}</p></div>
      </div>

      <!-- history -->
      <div class="page" inert={page !== "history"}>
        <div class="head">
          <h3>{a.history.title} <small>{interpolate(a.history.items, { n: String(shots.length) })}</small></h3>
          <div class="tools">
            <span class="search">
              <Icon svg={magnify} size={16} />
              <input type="search" bind:value={query} placeholder={a.history.search} aria-label={a.history.search} />
            </span>
            <button type="button" class="btn btn-tonal btn-compact" disabled={cleared} onclick={() => (cleared = true)}
              >{a.history.clear}</button
            >
          </div>
        </div>
        <div class="chips filters">
          {#each FILTERS as f (f)}
            <button type="button" class="chip" aria-pressed={filter === f} onclick={() => (filter = f)}>{a.history[f]}</button>
          {/each}
          <span class="sep" aria-hidden="true"></span>
          <button type="button" class="chip" aria-pressed={starredOnly} onclick={() => (starredOnly = !starredOnly)}
            ><Icon svg={star} />{a.history.starred}</button
          >
          <button type="button" class="chip" aria-pressed={uploadedOnly} onclick={() => (uploadedOnly = !uploadedOnly)}
            ><Icon svg={globe} />{a.history.uploaded}</button
          >
        </div>
        {#if shots.length}
          <ul class="grid">
            {#each shots as s (s.name)}
              <li class="shot">
                {#if s === SHOTS[0]}<span class="today">{a.history.today}</span>{/if}
                <div class="thumb">
                  {@render thumb(s.thumb)}
                  {#if s.kind === "gif"}<span class="badge">GIF</span>{/if}
                  {#if s.kind === "recording" || s.kind === "clip"}<span class="playing"><Icon svg={play} size={18} /></span>{/if}
                </div>
                <span class="file">{s.name}</span>
                <span class="meta">{s.meta}</span>
              </li>
            {/each}
          </ul>
        {:else}
          <p class="empty">{a.history.empty}</p>
        {/if}
      </div>

      <!-- servers -->
      <div class="page" inert={page !== "servers"}>
        <div class="head">
          <h3>{a.servers.title}</h3>
          <div class="tools">
            <a class="btn btn-filled btn-compact" href="/docs/upload-destinations/"><Icon svg={listAdd} />{a.servers.add}</a>
            <a class="btn btn-tonal btn-compact" href="/docs/upload-destinations/"><Icon svg={folderOpen} />{a.servers.import}</a>
          </div>
        </div>
        <p class="sub">{a.servers.sub}</p>
        <label class="row active">
          <span class="row-label">{a.servers.active}</span>
          <Combo bind:value={server} options={SERVER_NAMES} label={a.servers.active} wide />
        </label>
        <ul class="servers">
          {#each SERVERS as s (s.name)}
            <li class="server" class:on={server === s.name}>
              <Icon svg={s.curl ? lock : globe} size={22} />
              <span class="server-text">
                <span class="server-name"
                  >{s.name}{#if s.needs}<span class="needs"
                      >{s.needs === "clientId" ? a.servers.needsClientId : a.servers.needsUserKey}</span
                    >{/if}</span
                >
                <span class="server-url">{s.url}</span>
              </span>
              {#if server !== s.name}
                <button type="button" class="btn btn-ghost btn-compact" onclick={() => (server = s.name)}>{a.servers.use}</button>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</Window>

<style>
  .body {
    display: grid;
    grid-template-columns: 212px minmax(0, 1fr);
    padding: 0 12px 12px 0;
  }

  /* ---- sidebar ---- */

  .side {
    display: flex;
    flex-direction: column;
    padding: 4px 12px 0;
  }

  .group {
    margin: 12px 0 6px;
    padding-left: 11px;
    font-size: 13px;
    color: var(--text-tertiary);
  }

  .side ul {
    display: grid;
    gap: 4px;
    margin: 0 0 8px;
    padding: 0;
    list-style: none;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 38px;
    padding: 0 11px;
    border-radius: var(--radius-s);
    color: var(--text-secondary);
    font-size: 15px;
    text-align: left;
    transition:
      background-color var(--dur-fast) var(--ease-out),
      color var(--dur-fast) var(--ease-out);
  }

  .nav:hover {
    background: var(--secondary);
    color: var(--text);
  }

  .nav[aria-current="page"] {
    background: var(--tertiary);
    color: var(--text);
    font-weight: 600;
  }

  .about {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    padding: 10px 12px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
    color: var(--text-secondary);
  }

  .about-text {
    display: grid;
    flex: 1;
    min-width: 0;
    font-size: 12px;
    line-height: 1.35;
  }

  .about-text strong {
    color: var(--text);
    font-size: 15px;
  }

  /* ---- page card ---- */

  .pages {
    display: grid;
    border: 1px solid var(--divider);
    border-radius: var(--radius-l);
    background: linear-gradient(var(--surface-top), var(--surface-bottom));
    box-shadow: 0 5px 18px -6px var(--shadow-color);
  }

  .page {
    grid-area: 1 / 1;
    min-width: 0;
    padding: 30px 32px 32px;
  }

  .page[inert] {
    visibility: hidden;
  }

  h3 {
    font-size: 28px;
    line-height: 1.2;
  }

  h3 small {
    margin-left: 8px;
    font-size: 13px;
    font-weight: 400;
    color: var(--text-tertiary);
  }

  h4 {
    margin: 26px 0 12px;
    font-size: 18px;
  }

  .sub {
    margin-top: 6px;
    color: var(--text-secondary);
    font-size: 15px;
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px 20px;
  }

  .tools,
  .chips,
  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  /* ---- capture tiles ---- */

  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
    margin-top: 22px;
  }

  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 12px 12px 14px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-l);
    background: linear-gradient(var(--surface-hi-top), var(--surface));
    color: var(--text);
    text-align: center;
    transition: border-color var(--dur-fast) var(--ease-out);
  }

  .tile:hover {
    border-color: color-mix(in srgb, var(--accent) 45%, transparent);
  }

  .tile strong {
    margin-top: 6px;
    font-size: 18px;
  }

  .tile span {
    font-size: 13px;
    color: var(--text-secondary);
  }

  kbd {
    margin-top: 6px;
    padding: 2px 8px;
    border-radius: 6px;
    background: var(--bg-deep);
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  /* ---- setting rows ---- */

  .rows {
    display: grid;
    gap: 8px;
  }

  .rows.two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 56px;
    padding: 7px 12px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
  }

  .row-label {
    flex: 1;
    min-width: 0;
    font-size: 15px;
  }

  .row.tall {
    flex-wrap: wrap;
    padding-block: 12px;
  }

  .row.tall .row-label {
    flex-basis: 100%;
  }

  .row-sub {
    font-size: 13px;
    color: var(--text-secondary);
  }

  output {
    margin-left: 4px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 13px;
  }

  input[type="range"] {
    flex-basis: 100%;
    height: 22px;
    margin: 2px 0;
    accent-color: var(--accent);
    cursor: pointer;
  }

  .active {
    margin-top: 20px;
  }

  .note {
    display: grid;
    gap: 6px;
    padding: 12px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
    font-size: 13px;
    color: var(--text-secondary);
  }

  /* ---- record ---- */

  .actions {
    margin-top: 16px;
  }

  .btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .danger {
    background: color-mix(in srgb, var(--danger) 35%, var(--tertiary));
    color: var(--text);
  }

  .cols {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .cols h4 {
    margin-top: 20px;
  }

  /* ---- history ---- */

  .search {
    position: relative;
    display: inline-flex;
    align-items: center;
    color: var(--text-tertiary);
  }

  .search :global(svg) {
    position: absolute;
    left: 12px;
    pointer-events: none;
  }

  .search input {
    width: 200px;
    height: 38px;
    padding: 0 12px 0 36px;
    border: 1px solid var(--divider);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text);
    font: inherit;
    font-size: 14px;
  }

  .search input::placeholder {
    color: var(--text-tertiary);
  }

  .filters {
    margin-top: 18px;
  }

  .sep {
    width: 1px;
    height: 20px;
    margin-inline: 2px;
    background: var(--divider);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 14px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .shot {
    position: relative;
    display: grid;
    gap: 2px;
    padding: 7px 7px 10px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
  }

  .thumb {
    position: relative;
    display: grid;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    margin-bottom: 6px;
    border-radius: 6px;
    background: var(--accent-wash);
  }

  .thumb > :global(svg),
  .thumb img {
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
  }

  .thumb img {
    object-fit: contain;
  }

  .badge,
  .playing {
    position: absolute;
    display: grid;
    place-items: center;
    background: var(--rec-badge-bg);
    color: #fff;
  }

  .badge {
    right: 6px;
    bottom: 6px;
    padding: 1px 6px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
  }

  .playing {
    inset: 50% auto auto 50%;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    translate: -50% -50%;
  }

  .today {
    position: absolute;
    top: -11px;
    left: 50%;
    z-index: 1;
    padding: 1px 10px;
    border: 1px solid var(--divider);
    border-radius: 999px;
    background: var(--tertiary);
    font-size: 12px;
    font-weight: 600;
    translate: -50% 0;
  }

  .file {
    overflow: hidden;
    padding-inline: 2px;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .meta {
    padding-inline: 2px;
    font-size: 12px;
    color: var(--text-tertiary);
  }

  .empty {
    margin-top: 40px;
    color: var(--text-secondary);
    text-align: center;
  }

  /* ---- servers ---- */

  .servers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 8px;
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
  }

  .server {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 64px;
    padding: 8px 12px 8px 16px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
    color: var(--accent);
  }

  .server.on {
    border-color: var(--accent);
  }

  .server-text {
    display: grid;
    flex: 1;
    min-width: 0;
  }

  .server-name {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 8px;
    color: var(--text);
    font-weight: 600;
  }

  .needs {
    padding: 0 6px;
    border: 1px solid color-mix(in srgb, var(--danger) 50%, transparent);
    border-radius: 9px;
    background: color-mix(in srgb, var(--danger) 18%, transparent);
    color: var(--danger);
    font-size: 10px;
  }

  .server-url {
    overflow: hidden;
    font-size: 12px;
    color: var(--text-tertiary);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ---- narrower windows: the sidebar becomes a rail of icons ---- */

  @container (max-width: 900px) {
    .cols,
    .rows.two {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @container (max-width: 720px) {
    .body {
      grid-template-columns: 56px minmax(0, 1fr);
      padding: 0 8px 8px 0;
    }

    .side {
      padding: 4px 8px 0;
    }

    .group,
    .about-text,
    .about :global(svg:last-child) {
      display: none;
    }

    .side ul + .group + ul {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid var(--divider);
    }

    .nav {
      justify-content: center;
      padding: 0;
    }

    .nav-label {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .about {
      justify-content: center;
      padding: 6px 0;
      border: 0;
      background: none;
    }

    .page {
      padding: 20px 16px 20px;
    }

    h3 {
      font-size: 24px;
    }

    .search input {
      width: 160px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nav,
    .tile {
      transition: none;
    }
  }
</style>
