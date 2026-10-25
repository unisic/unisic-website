<script lang="ts">
  import Icon from "./Icon.svelte";
  import { SWATCHES } from "#lib/themes.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import {
    arrow,
    blur,
    checkmark,
    close,
    ellipse,
    highlight,
    pen,
    rectangle,
    select,
    step,
    text,
  } from "#lib/icons.ts";

  /*
   * Faithful static mini-recreation of the selection overlay
   * (unisic/qml/OverlayWindow.qml): a frozen screen dimmed outside the selected
   * region, crosshair guides, a monospace dimension pill, the pre-shot arrow
   * annotation and the floating pill toolbar below the selection. Pure server
   * markup, no client JS. The one-shot open choreography (the region scales
   * open, guides and toolbar settle, then the arrow draws itself) still plays
   * on scroll-in via the Reveal wrapper, and is a no-op under prefers-reduced-
   * motion (the style block below). Corner handles are decorative here.
   */

  const OVERLAY_TOOLS = [
    { icon: select, active: false },
    { icon: pen, active: false },
    { icon: arrow, active: true },
    { icon: rectangle, active: false },
    { icon: ellipse, active: false },
    { icon: text, active: false },
    { icon: highlight, active: false },
    { icon: blur, active: false },
    { icon: step, active: false },
  ];

  let { dict }: { dict: Dictionary } = $props();
  const o = $derived(dict.overlay);
</script>

<figure class="mock">
  <div class="screen">
    <div class="wallpaper" aria-hidden="true">
      <div class="ghostCardA">
        <div class="ghostLines"></div>
      </div>
      <div class="ghostCardB">
        <div class="ghostLines"></div>
      </div>
      <div class="ghostCardC">
        <div class="ghostLines"></div>
      </div>
    </div>

    <div class="guideH" aria-hidden="true"></div>
    <div class="guideV" aria-hidden="true"></div>

    <div class="selection" aria-hidden="true">
      <span class="handleTL"></span>
      <span class="handleTR"></span>
      <span class="handleBL"></span>
      <span class="handleBR"></span>
      <svg class="arrowAnno" viewBox="0 0 200 110">
        <path
          d="M 20 92 C 70 82 110 60 152 28"
          fill="none"
          stroke="var(--swatch-1)"
          stroke-width="5"
          stroke-linecap="round"
          pathLength="1"
        />
        <path
          d="M 122 26 L 152 28 L 138 54"
          fill="none"
          stroke="var(--swatch-1)"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          pathLength="1"
        />
      </svg>
    </div>

    <span class="dimPill" aria-hidden="true">868 × 512</span>

    <div class="toolbar" aria-hidden="true">
      {#each OVERLAY_TOOLS as { icon, active }}
        <span class={active ? "chipActive" : "chip"}>
          <Icon svg={icon} class="chipIcon" />
        </span>
      {/each}
      <span class="vdivider"></span>
      {#each SWATCHES as c, i}
        <span class={i === 0 ? "swatchSelected" : "swatch"} style:background={c}></span>
      {/each}
      <span class="vdivider"></span>
      <span class="captureBtn">
        <Icon svg={checkmark} class="captureIcon" />
        {o.capture}
      </span>
      <span class="chip">
        <Icon svg={close} class="closeIcon" />
      </span>
    </div>
  </div>

  <figcaption class="srOnly">{o.caption}</figcaption>
</figure>

<style>
  /*
   * Design canvas: 1050 x 450 (21/9). --u = one design pixel.
   * Geometry mirrors OverlayWindow.qml: dim outside the selection,
   * 1px #C8ACD6 crosshair guides over a dark underlay, black 80% radius-14
   * monospace dimension pill, floating pill toolbar (h 54, r 27) below.
   */

  .mock {
    margin: 0;
    container-type: inline-size;
    width: 100%;
  }

  .screen {
    --u: 0.09524cqi; /* 100cqi / 1050 */
    --sel-left: 26%;
    --sel-top: 16%;
    --sel-width: 40%;
    --sel-height: 52%;
    aspect-ratio: 21 / 9;
    position: relative;
    border-radius: var(--radius-l);
    border: 1px solid var(--divider);
    overflow: hidden;
    background: var(--bg-deep);
    box-shadow: 0 calc(24 * var(--u)) calc(70 * var(--u)) rgba(0, 0, 0, 0.5);
  }

  .wallpaper {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(70% 110% at 10% 0%, rgba(67, 61, 139, 0.5), transparent 60%),
      radial-gradient(60% 100% at 90% 100%, rgba(46, 35, 108, 0.65), transparent 60%),
      linear-gradient(150deg, var(--wallpaper-hi), var(--wallpaper-lo));
  }

  .ghostCardA,
  .ghostCardB,
  .ghostCardC {
    position: absolute;
    border-radius: calc(12 * var(--u));
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: calc(16 * var(--u));
  }

  .ghostCardA {
    left: 4%;
    top: 14%;
    width: 18%;
    height: 60%;
  }

  .ghostCardB {
    left: 30%;
    top: 24%;
    width: 32%;
    height: 56%;
  }

  .ghostCardC {
    right: 5%;
    top: 12%;
    width: 26%;
    height: 44%;
  }

  .ghostLines {
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.09) 0,
      rgba(255, 255, 255, 0.09) calc(7 * var(--u)),
      transparent calc(7 * var(--u)),
      transparent calc(19 * var(--u))
    );
    border-radius: calc(3 * var(--u));
  }

  /* crosshair guides through the drag corner (OverlayWindow.qml:173-194) */

  .guideH,
  .guideV {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }

  .guideH {
    left: 0;
    right: 0;
    top: calc(var(--sel-top) + var(--sel-height));
    height: 3px;
    background: linear-gradient(
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.35)
    );
  }

  .guideH::after,
  .guideV::after {
    content: "";
    position: absolute;
    background: rgba(200, 172, 214, 0.95);
  }

  .guideH::after {
    left: 0;
    right: 0;
    top: 1px;
    height: 1px;
  }

  .guideV {
    top: 0;
    bottom: 0;
    left: calc(var(--sel-left) + var(--sel-width));
    width: 3px;
    background: rgba(0, 0, 0, 0.35);
  }

  .guideV::after {
    top: 0;
    bottom: 0;
    left: 1px;
    width: 1px;
  }

  /* selection: everything outside is dimmed by the giant box-shadow */

  .selection {
    position: absolute;
    z-index: 1;
    left: var(--sel-left);
    top: var(--sel-top);
    width: var(--sel-width);
    height: var(--sel-height);
    border: calc(1.5 * var(--u)) solid var(--accent);
    box-shadow: 0 0 0 200cqi rgba(11, 9, 33, 0.62);
    transform-origin: top left;
  }

  /* decorative accent corner handles (no longer interactive) */
  .handleTL,
  .handleTR,
  .handleBL,
  .handleBR {
    position: absolute;
    width: calc(9 * var(--u));
    height: calc(9 * var(--u));
    background: var(--accent);
    border-radius: calc(2 * var(--u));
  }

  .handleTL { left: calc(-5 * var(--u)); top: calc(-5 * var(--u)); }
  .handleTR { right: calc(-5 * var(--u)); top: calc(-5 * var(--u)); }
  .handleBL { left: calc(-5 * var(--u)); bottom: calc(-5 * var(--u)); }
  .handleBR { right: calc(-5 * var(--u)); bottom: calc(-5 * var(--u)); }

  .arrowAnno {
    position: absolute;
    left: 12%;
    top: 18%;
    width: 55%;
    height: auto;
  }

  /* dimension pill (OverlayWindow.qml:225-242) */

  .dimPill {
    position: absolute;
    z-index: 3;
    left: var(--sel-left);
    top: calc(var(--sel-top) - (40 * var(--u)));
    height: calc(28 * var(--u));
    display: inline-flex;
    align-items: center;
    padding: 0 calc(12 * var(--u));
    border-radius: calc(14 * var(--u));
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-family: var(--font-mono), monospace;
    font-size: calc(12 * var(--u));
    line-height: 1;
    white-space: nowrap;
  }

  /* floating toolbar (OverlayWindow.qml:302-396) */

  .toolbar {
    position: absolute;
    z-index: 3;
    left: calc(var(--sel-left) + var(--sel-width) / 2);
    top: calc(var(--sel-top) + var(--sel-height) + (16 * var(--u)));
    transform: translateX(-50%);
    height: calc(54 * var(--u));
    display: flex;
    align-items: center;
    gap: calc(5 * var(--u));
    padding: 0 calc(12 * var(--u));
    border-radius: calc(27 * var(--u));
    background: linear-gradient(var(--chrome-litest), var(--primary));
    border: 1px solid var(--divider);
    box-shadow: 0 calc(5 * var(--u)) calc(18 * var(--u)) rgba(0, 0, 0, 0.6);
  }

  /* ToolChip.qml: 40px chip, radius-m, accent fill when active */
  .chip,
  .chipActive {
    width: calc(40 * var(--u));
    height: calc(40 * var(--u));
    border-radius: calc(12 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text);
    flex: none;
  }

  .chipActive {
    background: var(--accent);
    color: var(--text-on-accent);
  }

  .toolbar :global(.chipIcon) {
    width: calc(18 * var(--u));
    height: calc(18 * var(--u));
  }

  /* close: UIconButton iconSize 15 */
  .toolbar :global(.closeIcon) {
    width: calc(15 * var(--u));
    height: calc(15 * var(--u));
  }

  .vdivider {
    width: 1px;
    height: calc(28 * var(--u));
    background: var(--divider);
    flex: none;
  }

  /* ColorDot.qml: 26px dot, 3px white ring + 1.12 scale when selected */
  .swatch,
  .swatchSelected {
    width: calc(26 * var(--u));
    height: calc(26 * var(--u));
    border-radius: 50%;
    flex: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  .swatchSelected {
    border: calc(3 * var(--u)) solid #fff;
    transform: scale(1.12);
  }

  /* UButton.qml compact filled: h34, r17, demibold, soft accent shadow */
  .captureBtn {
    display: inline-flex;
    align-items: center;
    gap: calc(7 * var(--u));
    height: calc(34 * var(--u));
    padding: 0 calc(14 * var(--u));
    border-radius: calc(17 * var(--u));
    background: var(--accent);
    color: var(--text-on-accent);
    font-size: calc(13 * var(--u));
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    flex: none;
    box-shadow: 0 calc(3 * var(--u)) calc(8 * var(--u)) var(--accent-glow-strong);
  }

  .captureBtn :global(.captureIcon) {
    width: calc(16 * var(--u));
    height: calc(16 * var(--u));
  }

  /*
   * One-shot open choreography, mirroring the real flow: the region scales
   * open, then the dimension pill and toolbar appear. Driven by the Reveal
   * wrapper flipping data-inview; static final state under reduced motion.
   */
  @media (prefers-reduced-motion: no-preference) {
    :global(html[data-js] [data-reveal]) .selection {
      transform: scale(0.45);
      opacity: 0;
      transition:
        transform 0.65s var(--ease-out) 0.15s,
        opacity 0.3s var(--ease-out) 0.15s;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .selection {
      transform: none;
      opacity: 1;
    }

    :global(html[data-js] [data-reveal]) .guideH,
    :global(html[data-js] [data-reveal]) .guideV {
      opacity: 0;
      transition: opacity 0.5s var(--ease-out) 0.4s;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .guideH,
    :global(html[data-js] [data-reveal][data-inview="true"]) .guideV {
      opacity: 1;
    }

    :global(html[data-js] [data-reveal]) .dimPill,
    :global(html[data-js] [data-reveal]) .toolbar {
      opacity: 0;
      translate: 0 calc(8 * var(--u));
      transition:
        opacity 0.5s var(--ease-out) 0.75s,
        translate 0.5s var(--ease-out) 0.75s;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .dimPill,
    :global(html[data-js] [data-reveal][data-inview="true"]) .toolbar {
      opacity: 1;
      translate: 0 0;
    }

    /* the pre-shot annotation draws itself once the toolbar has landed */
    :global(html[data-js] [data-reveal]) .arrowAnno path {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .arrowAnno path {
      animation: draw 0.7s var(--ease-out) 1.3s forwards;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .arrowAnno path:nth-child(2) {
      animation-duration: 0.3s;
      animation-delay: 2s;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
</style>
