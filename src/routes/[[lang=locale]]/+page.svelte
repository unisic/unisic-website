<script lang="ts">
  import Footer from "#lib/components/Footer.svelte";
  import Icon from "#lib/components/Icon.svelte";
  import Nav from "#lib/components/Nav.svelte";
  import Seo from "#lib/components/Seo.svelte";
  import Copy from "#lib/app/Copy.svelte";
  import Editor from "#lib/app/Editor.svelte";
  import Install from "#lib/app/Install.svelte";
  import MainWindow from "#lib/app/MainWindow.svelte";
  import Overlay from "#lib/app/Overlay.svelte";
  import Window from "#lib/app/Window.svelte";
  import { cameraPhoto, checkmark, download, edit, github, lock, ocr, uploadCloud, viewHistory } from "#lib/icons.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import { landingMeta } from "#lib/i18n/metadata.ts";
  import { INSTALL_COMMAND } from "#lib/site.ts";
  import { THEME_KEY, THEMES } from "#lib/themes.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const dict = $derived(data.dict);

  /* step marker colours from Theme.swatches, number in the ink the editor's
     step tool puts on that colour */
  const STEPS = [
    ["hotkey", "#FF4757", "#FFFFFF"],
    ["mark", "#FFD84D", "#17153B"],
    ["share", "#1E90FF", "#FFFFFF"],
  ] as const;

  const FEATURES = [
    ["editor", edit],
    ["ocr", ocr],
    ["upload", uploadCloud],
    ["history", viewHistory],
    ["silent", cameraPhoto],
    ["yours", lock],
  ] as const;

  const COMPOSITORS = ["plasma", "gnome", "wlroots"] as const;
  const POINTS = ["verify", "noRoot", "free"] as const;

  /* the Linux defaults from the app's HotkeyDefaults.h and Settings.h */
  const KEYS: [keyof Dictionary["hotkeys"]["rows"], string][] = [
    ["full", "Meta+Shift+1"],
    ["region", "Meta+Shift+2"],
    ["window", "Meta+Shift+3"],
    ["ocr", "Meta+Shift+T"],
    ["copyLast", "Meta+Shift+C"],
    ["gif", "Meta+Shift+G"],
    ["video", "Meta+Shift+R"],
    ["replay", "Meta+Shift+I"],
    ["stop", "Ctrl+Esc"],
  ];

  /* `unisic --help` of 0.8.8, verbatim */
  const HELP = `Usage: unisic [OPTION]

Capture:
  --fullscreen                 Capture all screens
  --region                     Capture a selected region
  --scroll                     Capture a scrolling region (long screenshot)
  --window                     Capture the active window
  --monitor                    Capture the screen under the cursor
  --recapture                  Capture the last selected region again
  --measure                    Measure a selected region
  --gif                        Record a selected region as a GIF

Capture options:
  --delay SECONDS              Delay a screenshot by 0 to 60 seconds
  --output PATH                Save a screenshot to PATH; use - for stdout
  --format FORMAT              Use png, jpg, webp, or gif with --output

Other options:
  --export-settings PATH       Export settings without starting the UI
  --import-settings PATH       Import settings without starting the UI
  --hotkey ID                  Run a configured hotkey action
  --tray-only                  Start without showing the main window
  --help                       Show this help and exit
  --version                    Show the version and exit`;

  /* a {token} that holds markup: the text on either side of it */
  function around(template: string, token: string): [string, string] {
    const [before, after = ""] = template.split(`{${token}}`);
    return [before, after];
  }

  const headline = $derived(around(dict.hero.headline, "mark"));
  const hotkeyBody = $derived(around(dict.how.steps.hotkey.body, "keys"));
  const stopNote = $derived(around(dict.recording.note, "keys"));
  const stability = $derived(around(dict.download.stability, "link"));

  /* null is System: no data-theme, so tokens.css follows the desktop's
     light or dark scheme. app.html restores a stored pick before paint. */
  let theme = $state<string | null>(null);
  $effect(() => {
    theme = document.documentElement.dataset.theme ?? null;
  });

  function pick(id: string | null) {
    theme = id;
    const root = document.documentElement;
    if (id) root.dataset.theme = id;
    else delete root.dataset.theme;
    /* blocked storage only means the pick is not kept for the next visit */
    try {
      if (id) localStorage.setItem(THEME_KEY, id);
      else localStorage.removeItem(THEME_KEY);
    } catch {}
  }
</script>

<Seo meta={landingMeta(data.locale, dict)} />

{#snippet keys(combo: string)}
  <span class="keys">{#each combo.split("+") as k, i (i)}<kbd>{k}</kbd>{/each}</span>
{/snippet}

<a href="#main" class="skip-link">{dict.nav.skip}</a>
<Nav {dict} locale={data.locale} />

<main id="main">
  <section class="hero" id="top">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">{dict.hero.eyebrow}</p>
          <h1>{headline[0]}<span class="mark">{dict.hero.headlineMark}</span>{headline[1]}</h1>
          <p class="sub">{dict.hero.sub}</p>
          <div class="cta">
            <a href="#download" class="btn btn-filled"><Icon svg={download} />{dict.nav.download}</a>
            <a href="https://github.com/unisic/unisic" class="btn btn-tonal"><Icon svg={github} />{dict.hero.github}</a>
          </div>
        </div>
        <div class="install">
          <p class="label">{dict.hero.installLabel}</p>
          <div class="cmd card">
            <code><span class="prompt" aria-hidden="true">$ </span>{INSTALL_COMMAND}</code>
            <Copy text={INSTALL_COMMAND} label={dict.hero.copy} copiedLabel={dict.hero.copied} />
          </div>
          <p class="note">{dict.hero.installNote}</p>
          <p class="links">
            <a href="/docs/installation/">{dict.hero.installRead}</a>
            <a href="#download">{dict.hero.otherWays}</a>
          </p>
        </div>
      </div>
      <figure class="shot">
        <MainWindow {dict} />
        <figcaption>{dict.hero.windowHint}</figcaption>
      </figure>
    </div>
  </section>

  <section class="section" id="how">
    <div class="wrap">
      <h2 class="head">{dict.nav.how}</h2>
      <ol class="steps">
        {#each STEPS as [id, bg, ink], i (id)}
          <li class="card step">
            <span class="num" style:background={bg} style:color={ink} aria-hidden="true">{i + 1}</span>
            <h3>{dict.how.steps[id].title}</h3>
            <p>
              {#if id === "hotkey"}{hotkeyBody[0]}{@render keys("Meta+Shift+2")}{hotkeyBody[1]}{:else}{dict.how.steps[id].body}{/if}
            </p>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <header class="head">
        <h2>{dict.usp.title}</h2>
        <p class="lede">{dict.usp.lede}</p>
      </header>
      <Overlay {dict} />
    </div>
  </section>

  <section class="section" id="features">
    <div class="wrap">
      <h2 class="head">{dict.features.title}</h2>
      <Editor {dict} />
      <ul class="grid features">
        {#each FEATURES as [id, svg] (id)}
          <li class="card item">
            <span class="tile" aria-hidden="true"><Icon {svg} size={20} /></span>
            <h3>{dict.features[id].title}</h3>
            <p>{dict.features[id].body}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="wrap split">
      <header class="head">
        <h2>{dict.recording.title}</h2>
        <p class="lede">{dict.recording.lede}</p>
        <p class="lede">{stopNote[0]}{@render keys("Ctrl+Esc")}{stopNote[1]}</p>
      </header>
      <div class="rec" role="img" aria-label={dict.recording.caption}>
        <div class="rec-frame">
          <span class="rec-badge"><span class="dot"></span>REC 0:07</span>
          <img src="/uni.webp" alt="" width="400" height="676" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <h2 class="head">{dict.reference.title}</h2>
      <h3 class="group-title">{dict.compositors.title}</h3>
      <ul class="grid compositors">
        {#each COMPOSITORS as id (id)}
          <li class="card item">
            <h4>{dict.compositors[id].name}</h4>
            <p>{dict.compositors[id].body}</p>
          </li>
        {/each}
      </ul>
      <div class="split ref">
        <div class="card hotkeys">
          <table>
            <caption>{dict.hotkeys.caption}</caption>
            <thead>
              <tr><th scope="col">{dict.hotkeys.action}</th><th scope="col">{dict.hotkeys.shortcut}</th></tr>
            </thead>
            <tbody>
              {#each KEYS as [id, combo] (id)}
                <tr><th scope="row">{dict.hotkeys.rows[id]}</th><td>{@render keys(combo)}</td></tr>
              {/each}
            </tbody>
          </table>
          <p class="note">{dict.hotkeys.note}</p>
        </div>
        <div class="cli">
          <h3>{dict.cli.title}</h3>
          <p class="lede">{dict.cli.lede}</p>
          <Window title="unisic --help" label={dict.cli.title} left>
            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
            <!-- the help scrolls sideways on phones, so the keyboard has to reach it -->
            <pre class="term" tabindex="0"><code><span class="prompt">$</span> unisic --help{"\n"}{HELP}</code></pre>
          </Window>
        </div>
      </div>
    </div>
  </section>

  <section class="section themes">
    <div class="wrap">
      <header class="head">
        <h2>{dict.themes.title}</h2>
        <p class="lede">{dict.themes.lede}</p>
      </header>
      <div class="picker" role="group" aria-label={dict.themes.groupLabel}>
        <button type="button" class="chip" aria-pressed={theme === null} onclick={() => pick(null)}>
          {dict.themes.system}
        </button>
        {#each THEMES as t (t.id)}
          <button type="button" class="chip" aria-pressed={theme === t.id} onclick={() => pick(t.id)}>
            <span class="swatch" aria-hidden="true">
              {#each t.swatch as c, i (i)}<span style:background={c}></span>{/each}
            </span>
            {t.label}
          </button>
        {/each}
      </div>
      <p class="note">{dict.themes.note}</p>
    </div>
  </section>

  <section class="section" id="download">
    <div class="wrap">
      <header class="head">
        <h2>{dict.download.title}</h2>
        <p class="lede">{dict.download.lede}</p>
      </header>
      <ul class="points">
        {#each POINTS as id (id)}
          <li><Icon svg={checkmark} size={18} />{dict.download.points[id]}</li>
        {/each}
      </ul>
      <p class="lede repo">{dict.download.repoLede}</p>
      <Install {dict} />
      <p class="note">
        {stability[0]}<a href="https://github.com/unisic/unisic/issues">{dict.download.stabilityLink}</a>{stability[1]}
      </p>
    </div>
  </section>
</main>

<Footer {dict} />

<style>
  .wrap {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
  }

  .section {
    padding-top: 112px;
  }

  section[id] {
    scroll-margin-top: var(--nav-height);
  }

  .head {
    display: grid;
    gap: 14px;
    max-width: 760px;
    margin-bottom: 36px;
  }

  h1 {
    font-size: clamp(2.5rem, 1.5rem + 3.6vw, 4.25rem);
    letter-spacing: -0.03em;
    line-height: 1.02;
  }

  h2 {
    font-size: clamp(1.875rem, 1.3rem + 1.9vw, 2.75rem);
    letter-spacing: -0.025em;
  }

  h3,
  h4 {
    font-size: var(--font-l);
    line-height: 1.25;
  }

  h4 {
    margin: 0;
    font-weight: 700;
  }

  .lede {
    max-width: 62ch;
    color: var(--text-secondary);
    font-size: 1.0625rem;
  }

  .note {
    margin-top: 14px;
    color: var(--text-secondary);
    font-size: var(--font-s);
  }

  .note a,
  .links a {
    color: var(--text);
    text-decoration: underline;
    text-decoration-color: var(--divider);
    text-underline-offset: 3px;
    transition: text-decoration-color var(--dur-fast) var(--ease-out);
  }

  .note a:hover,
  .links a:hover {
    text-decoration-color: currentColor;
  }

  .prompt {
    color: var(--accent);
  }

  .keys {
    display: inline-flex;
    gap: 3px;
    vertical-align: middle;
  }

  kbd {
    display: inline-grid;
    place-items: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    border: 1px solid var(--divider);
    border-bottom-width: 2px;
    border-radius: var(--radius-s);
    background: var(--surface-hi);
    color: var(--text);
    font: 600 var(--font-s) / 1 var(--font-mono);
  }

  .grid {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 16px;
  }

  .item {
    padding: 22px;
    display: grid;
    gap: 8px;
    align-content: start;
  }

  .item p,
  .step p {
    color: var(--text-secondary);
    font-size: var(--font-m);
  }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }

  /* hero */
  .hero {
    padding-top: 72px;
  }

  /* minmax(0) so the nowrap install command scrolls instead of widening
     the column on phones */
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }

  .mark {
    color: var(--accent);
  }

  .sub {
    max-width: 56ch;
    margin-top: 20px;
    color: var(--text-secondary);
    font-size: 1.125rem;
  }

  .cta {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .install .label {
    margin-bottom: 8px;
    color: var(--text-secondary);
    font-size: var(--font-s);
    font-weight: 600;
  }

  .cmd {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 52px;
    padding: 8px 8px 8px 16px;
    border-radius: var(--radius-m);
  }

  .cmd code {
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    font: 500 var(--font-m) / 1.5 var(--font-mono);
  }

  .links {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    font-size: var(--font-s);
  }

  .shot {
    margin: 56px 0 0;
  }

  figcaption {
    margin-top: 14px;
    text-align: center;
    color: var(--text-secondary);
    font-size: var(--font-s);
  }

  /* how it works */
  .steps {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 16px;
  }

  .step {
    padding: 24px;
    display: grid;
    gap: 10px;
    align-content: start;
  }

  /* the editor's numbered step marker */
  .num {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin-bottom: 6px;
    border-radius: 50%;
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: 1;
  }

  /* features */
  .features {
    margin-top: 16px;
  }

  .tile {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 6px;
    border-radius: var(--radius-m);
    background: var(--accent-wash);
    color: var(--accent);
  }

  /* recording: the app's frame around the recorded region */
  .rec {
    aspect-ratio: 16 / 10;
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid var(--divider);
    border-radius: var(--radius-l);
    background: var(--bg-deep);
  }

  .rec-frame {
    position: relative;
    height: 70%;
    aspect-ratio: 4 / 3;
    display: grid;
    place-items: end center;
    outline: 2px solid var(--accent);
    background: var(--surface);
  }

  .rec-frame img {
    width: auto;
    height: 92%;
  }

  .rec-badge {
    position: absolute;
    left: -2px;
    bottom: calc(100% + 10px);
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 28px;
    padding: 0 12px;
    border-radius: 999px;
    background: var(--rec-badge-bg);
    color: #fff;
    font: 600 var(--font-s) / 1 var(--font-mono);
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--rec-dot);
  }

  @media (prefers-reduced-motion: no-preference) {
    .dot {
      animation: blink 1.4s var(--ease-out) infinite alternate;
    }
  }

  @keyframes blink {
    to {
      opacity: 0.3;
    }
  }

  /* reference */
  .group-title {
    margin-bottom: 16px;
  }

  .ref {
    margin-top: 48px;
    align-items: start;
  }

  .hotkeys {
    padding: 20px 22px 22px;
  }

  table {
    width: 100%;
  }

  caption {
    padding-bottom: 8px;
    text-align: left;
    font-size: var(--font-l);
    font-weight: 700;
  }

  th,
  td {
    padding: 10px 0;
    border-bottom: 1px solid var(--divider);
    text-align: left;
    font-size: var(--font-m);
  }

  thead th {
    color: var(--text-secondary);
    font-size: var(--font-s);
    font-weight: 600;
  }

  tbody th {
    font-weight: 500;
  }

  td,
  thead th:last-child {
    padding-left: 16px;
    text-align: right;
    white-space: nowrap;
  }

  tbody tr:last-child > * {
    border-bottom: 0;
  }

  .cli {
    display: grid;
    gap: 12px;
  }

  .cli .lede {
    margin-bottom: 8px;
  }

  .term {
    margin: 0;
    padding: 18px 20px;
    overflow-x: auto;
    background: var(--bg-deep);
    color: var(--text);
    font: 400 12.5px / 1.6 var(--font-mono);
  }

  /* themes: the chips only work with JS */
  .themes {
    display: none;
  }

  :global(html[data-js]) .themes {
    display: block;
  }

  .picker {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .picker .chip {
    height: 36px;
    padding: 0 14px;
    gap: 8px;
    font-size: var(--font-m);
  }

  .swatch {
    display: inline-flex;
  }

  .swatch span {
    width: 14px;
    height: 14px;
    border: 1px solid var(--divider);
    border-radius: 50%;
  }

  .swatch span + span {
    margin-left: -5px;
  }

  /* download */
  .points {
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 24px;
  }

  .points li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: var(--font-m);
  }

  .points :global(svg) {
    flex: none;
    color: var(--success);
  }

  .repo {
    margin-bottom: 24px;
    font-size: var(--font-m);
  }

  @media (min-width: 640px) {
    .features {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .steps,
    .compositors {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .hero-grid {
      grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
      align-items: end;
      gap: 56px;
    }

    .features {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .split {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      align-items: center;
      gap: 56px;
    }

    .ref {
      grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
      align-items: start;
    }
  }

  @media (max-width: 479px) {
    .section {
      padding-top: 80px;
    }

    .hero {
      padding-top: 48px;
    }
  }
</style>
