<script lang="ts">
  import CopyCommand from "./CopyCommand.svelte";
  import EditorMockup from "./EditorMockup.svelte";
  import Icon from "./Icon.svelte";
  import MainWindowMockup from "./MainWindowMockup.svelte";
  import T from "./T.svelte";
  import { github } from "#lib/icons.ts";
  import { INSTALL_COMMAND } from "#lib/site.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* The pitch and the one-line install sit in the first screen; the product
     follows as a "selected" stage: the main window inside the capture
     overlay's crop corners with its size readout, the editor landing on top. */
  let { dict }: { dict: Dictionary } = $props();
  const h = $derived(dict.hero);
</script>

<section class="hero">
  <div class="inner">
    <div class="copy">
      <p class="eyebrow">{h.eyebrow}</p>
      <h1 class="headline">
        <T str={h.headline}>{#snippet mark()}<mark class="hl">{h.headlineMark}</mark>{/snippet}</T>
      </h1>
      <p class="sub">{h.sub}</p>

      <div class="install">
        <p class="install-label">{h.installLabel}</p>
        <div class="frame install-frame">
          <CopyCommand variant="hero" command={INSTALL_COMMAND} copyLabel={h.copy} copiedLabel={h.copied} />
        </div>
        <p class="install-note">
          {h.installNote}
          <a href="/docs/installation/">{h.installRead}</a>
        </p>
      </div>

      <div class="ctas">
        <a href="#download" class="btn btn-quiet">{h.otherWays}</a>
        <a href="https://github.com/unisic/unisic" class="btn btn-quiet">
          <Icon svg={github} size={18} />
          {h.github}
        </a>
      </div>
    </div>

    <div class="stage">
      <div class="main-win frame">
        <span class="readout" aria-hidden="true">1060 × 700</span>
        <MainWindowMockup {dict} />
      </div>
      <div class="editor-win">
        <EditorMockup {dict} />
      </div>
    </div>
  </div>
</section>

<style>
  /* full-bleed shell for the backdrop; the content keeps the page width.
     clip, not hidden: the wide-screen stage bleeds past the right edge
     without creating a scroll container that would break the sticky nav */
  .hero {
    position: relative;
    isolation: isolate;
    overflow-x: clip;
  }

  /* pixel grid, fading out from the top centre so it never meets a hard edge */
  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(var(--grid-line) 1px, transparent 1px) center top / var(--grid-size) var(--grid-size),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) center top / var(--grid-size) var(--grid-size);
    mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, #000 35%, transparent 80%);
    pointer-events: none;
  }

  .inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 80px 24px 0;
  }

  .copy {
    max-width: 46rem;
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent-bright);
  }

  /* the page's single display-level heading. em-relative max-width so a
     longer translation wraps to another line instead of overflowing */
  .headline {
    margin-top: 22px;
    max-width: 11em;
    font-size: clamp(2.75rem, 1.4rem + 4.6vw, 5.25rem);
    font-weight: 900;
    font-stretch: 115%;
    letter-spacing: -0.045em;
    line-height: 1;
  }

  /* the pitch's last beat, struck through with the editor's highlighter
     (swatch 2). The stroke is 0.9em, inside the 1em line box: the inline's own
     box is the font's 1.42em content area and would paint over the line
     above, and wrapped lines keep a gap between their strokes. clone gives every wrapped line its own stroke */
  .hl {
    padding: 0 0.12em;
    margin: 0 -0.06em;
    background: linear-gradient(var(--swatch-2) 0 0) left center / 100% 0.9em no-repeat;
    color: var(--text-on-accent);
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .sub {
    margin-top: 24px;
    max-width: 36rem;
    font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.3125rem);
    line-height: 1.55;
    color: var(--ink-2);
  }

  .install {
    margin-top: 40px;
    max-width: 38rem;
  }

  .install-label {
    margin-bottom: 12px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--text-secondary);
  }

  .install-frame {
    --frame-gap: 7px;
    --corner-arm: 14px;
  }

  .install-note {
    margin-top: 14px;
    color: var(--ink-2);
    font-size: 0.9375rem;
  }

  .install-note a {
    color: var(--text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .install-note a:hover {
    color: var(--accent-bright);
  }

  .ctas {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  /* the editor sits in the stage's bottom padding, so nothing extends the
     scrollable area */
  .stage {
    position: relative;
    margin-top: 88px;
    padding-bottom: 15%;
  }

  .main-win {
    width: 80%;
    --frame-gap: 14px;
    --corner-arm: 26px;
  }

  /* the overlay's live size readout, pinned above the top-left corner */
  .readout {
    position: absolute;
    left: -14px;
    bottom: calc(100% + 22px);
    padding: 3px 9px;
    border-radius: var(--radius-s);
    background: var(--accent);
    color: var(--text-on-accent);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .editor-win {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 56%;
    filter: drop-shadow(0 24px 48px var(--shadow-color));
  }

  /* one-shot load-in: the app opens, then the editor lands on top, telling
     the capture-then-edit story */
  @media (prefers-reduced-motion: no-preference) {
    .main-win {
      animation: rise 0.7s var(--ease-out) 0.1s both;
    }

    .editor-win {
      animation: rise 0.7s var(--ease-out) 0.35s both;
    }

    /* after the entrance capture (Intro.svelte) the app opens while the page
       zooms in, instead of under the dimmed overlay */
    :global(html[data-intro]) .main-win {
      animation-delay: 0.75s;
    }

    :global(html[data-intro]) .editor-win {
      animation-delay: 1s;
    }

    /* the marker is drawn across, and the ink turns dark once it is down */
    .hl {
      animation: mark 0.5s var(--ease-out) 0.45s backwards;
    }

    :global(html[data-intro]) .hl {
      animation-delay: 1.15s;
    }
  }

  @keyframes mark {
    from {
      background-size: 0% 0.9em;
      color: var(--text);
    }
    70% {
      background-size: 100% 0.9em;
      color: var(--text);
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
  }

  /* wide screens: the stage moves beside the copy so the product is in the
     first screen, at a fixed size that runs off the right edge rather than
     shrinking into the column */
  @media (min-width: 1280px) {
    .inner {
      display: grid;
      grid-template-columns: minmax(0, 38rem) minmax(0, 1fr);
      column-gap: 56px;
      align-items: center;
    }

    .stage {
      width: 820px;
      margin-top: 0;
      padding-bottom: 18%;
    }

    .main-win {
      width: 100%;
    }

    .editor-win {
      right: auto;
      left: -32px;
      width: 58%;
    }
  }

  @media (max-width: 767px) {
    .inner {
      padding-top: 48px;
    }

    .stage {
      margin-top: 64px;
    }
  }

  /* on phones the 1060px main window would render at a third of its size:
     the editor alone carries the picture, at full width */
  @media (max-width: 599px) {
    .stage {
      padding-bottom: 0;
    }

    .main-win {
      display: none;
    }

    .editor-win {
      position: static;
      width: 100%;
    }
  }
</style>
