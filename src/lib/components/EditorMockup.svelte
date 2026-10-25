<script lang="ts">
  import Icon from "./Icon.svelte";
  import { SWATCHES } from "#lib/themes.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import {
    arrow,
    blur,
    callout,
    chevronDown,
    close,
    copy,
    crop,
    editShapes,
    ellipse,
    eraser,
    eyedropper,
    highlight,
    line,
    magnify,
    measure,
    minus,
    pen,
    pixelate,
    rectangle,
    redo,
    save,
    send,
    shapes,
    step,
    text,
    undo,
    window as windowGlyph,
  } from "#lib/icons.ts";

  /*
   * Faithful mini-recreation of the real post-capture editor
   * (unisic/qml/EditorWindow.qml): title bar, the two-row tool card (main row
   * per mainRowModel(), then the always-reserved sub-bar showing the open
   * group plus that tool's ToolPropsBar strip), canvas with live annotations,
   * 64px bottom bar. Sized in design units (--u) driven by container queries
   * so it scales as one picture.
   */

  /* mainRowModel(): every editor tool in ToolCatalog order, with the six
     "shapes" tools collapsed into one group chip at the group's first slot. */
  const TOOLS = [
    { icon: editShapes, active: false },
    { icon: pen, active: false },
    { icon: shapes, active: true },
    { icon: text, active: false },
    { icon: highlight, active: false },
    { icon: blur, active: false },
    { icon: pixelate, active: false },
    { icon: eraser, active: false },
    { icon: magnify, active: false },
    { icon: eyedropper, active: false },
    { icon: step, active: false },
    { icon: crop, active: false },
  ];

  /* The open group, in the sub-bar: Arrow is the live tool, which is what the
     canvas below is drawing. */
  const SHAPES = [
    { icon: line, active: false },
    { icon: arrow, active: true },
    { icon: measure, active: false },
    { icon: rectangle, active: false },
    { icon: ellipse, active: false },
    { icon: callout, active: false },
  ];

  let { dict }: { dict: Dictionary } = $props();
  const e = $derived(dict.editorMockup);
</script>

<figure class="mock" role="img" aria-label={e.ariaLabel}>
  <div class="window" aria-hidden="true">
    <div class="titlebar">
      <span class="title">{e.title}</span>
      <span class="winControls">
        <span class="winBtn">
          <Icon svg={minus} class="winGlyph" />
        </span>
        <span class="winBtn">
          <Icon svg={windowGlyph} class="winGlyph" />
        </span>
        <span class="winBtn">
          <Icon svg={close} class="winGlyph" />
        </span>
      </span>
    </div>

    <div class="toolbar">
      <div class="toolRow">
        {#each TOOLS as { icon, active }}
          <span class={active ? "chipActive" : "chip"}>
            <Icon svg={icon} class="chipIcon" />
          </span>
        {/each}
        <span class="vdivider"></span>
        <span class="chip">
          <Icon svg={undo} class="chipIcon" />
        </span>
        <span class="chip">
          <Icon svg={redo} class="chipIcon" />
        </span>
      </div>

      <div class="subRow">
        {#each SHAPES as { icon, active }}
          <span class={active ? "chipActive" : "chip"}>
            <Icon svg={icon} class="chipIcon" />
          </span>
        {/each}
        <span class="vdivider"></span>
        {#each SWATCHES as c, i}
          <span class={i === 0 ? "swatchSelected" : "swatch"} style:background={c}></span>
        {/each}
        <span class="dotBtn">
          <Icon svg={eyedropper} class="dotGlyph" />
        </span>
        <span class="vdivider"></span>
        <span class="propCol">
          <span class="propLabel">{e.stroke}</span>
          <span class="propCombo">
            4 px
            <Icon svg={chevronDown} class="propChevron" />
          </span>
        </span>
      </div>
    </div>

    <div class="canvas">
      <div class="shot">
        <div class="ghostCardA">
          <div class="ghostLines"></div>
        </div>
        <div class="ghostCardB">
          <div class="ghostLines"></div>
        </div>
        <div class="ghostChart"></div>

        <!-- annotations: the product's actual output -->
        <div class="highlightRect"></div>
        <div class="blurRegion"></div>
        <svg class="arrowAnno" viewBox="0 0 200 120">
          <path
            d="M 22 102 C 60 88 96 66 148 34"
            fill="none"
            stroke="var(--swatch-1)"
            stroke-width="5"
            stroke-linecap="round"
            pathLength="1"
          />
          <path
            d="M 118 30 L 148 34 L 132 60"
            fill="none"
            stroke="var(--swatch-1)"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            pathLength="1"
          />
        </svg>
        <span class="stepOne">1</span>
        <span class="stepTwo">2</span>
      </div>
    </div>

    <div class="bottombar">
      <span class="status">1440 × 900 px · 100%</span>
      <span class="actions">
        <span class="tonalBtn">
          <Icon svg={copy} class="btnIcon" />
          {e.copy}
        </span>
        <span class="tonalBtn">
          <Icon svg={save} class="btnIcon" />
          {e.save}
        </span>
        <span class="tonalBtn">
          <Icon svg={send} class="btnIcon" />
          {e.upload}
        </span>
        <span class="vdivider"></span>
        <span class="moreBtn">
          {e.more}
          <Icon svg={chevronDown} class="btnIcon" />
        </span>
        <span class="closeBtn">
          <Icon svg={close} class="btnIcon" />
        </span>
      </span>
    </div>
  </div>
</figure>

<style>
  /*
   * Design canvas: 720 x 450 (16/10). --u = one design pixel, resolved via
   * container queries so the whole window scales as a single picture.
   * Geometry mirrors EditorWindow.qml: 38px title bar on the `background`
   * backdrop, the radius-18 tool card with its main row and its
   * always-reserved sub-bar row (:347-545), the canvas frame, and the 64px
   * bottom bar (:866-960).
   */

  .mock {
    margin: 0;
    container-type: inline-size;
    width: 100%;
  }

  .window {
    --u: 0.1389cqi; /* 100cqi / 720 */
    aspect-ratio: 16 / 10;
    display: flex;
    flex-direction: column;
    border-radius: calc(18 * var(--u));
    background: var(--bg);
    border: 1px solid var(--divider);
    box-shadow:
      0 calc(24 * var(--u)) calc(60 * var(--u)) rgba(0, 0, 0, 0.5),
      inset 0 1px 0 var(--edge-light);
    overflow: hidden;
  }

  /* ---- title bar (EditorWindow.qml:114-174) ---- */

  .titlebar {
    height: calc(38 * var(--u));
    flex: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc(12 * var(--u));
    background: linear-gradient(var(--chrome-lite), var(--primary));
  }

  .title {
    font-size: calc(13 * var(--u));
    font-weight: 600;
    color: var(--text);
    line-height: 1;
  }

  .winControls {
    display: flex;
    gap: calc(6 * var(--u));
  }

  .winBtn {
    width: calc(26 * var(--u));
    height: calc(26 * var(--u));
    border-radius: calc(8 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text-tertiary);
  }

  .winBtn :global(.winGlyph) {
    width: calc(14 * var(--u));
    height: calc(14 * var(--u));
  }

  /* ---- toolbar (EditorWindow.qml:179-308) ---- */

  /* App geometry (ToolChip 40, ColorDot 26, divider 30) at the 0.8 scale
     this 720u-wide window affords: chip 32, dot 20, divider 24. */
  .toolbar {
    flex: none;
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--u));
    margin: calc(10 * var(--u)) calc(10 * var(--u)) 0;
    padding: calc(9 * var(--u)) calc(12 * var(--u));
    border-radius: calc(18 * var(--u));
    background: linear-gradient(var(--chrome-liter), var(--primary));
    border: 1px solid var(--divider);
    box-shadow: 0 calc(4 * var(--u)) calc(12 * var(--u)) var(--shadow-color);
  }

  .toolRow {
    display: flex;
    align-items: center;
    gap: calc(4 * var(--u));
  }

  /* The sub-bar slot is always reserved at one row height, so switching tools
     never shifts the canvas below (EditorWindow.qml:453-459). */
  .subRow {
    height: calc(34 * var(--u));
    display: flex;
    align-items: center;
    gap: calc(6 * var(--u));
  }

  .chip,
  .chipActive {
    width: calc(32 * var(--u));
    height: calc(32 * var(--u));
    border-radius: calc(10 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text);
    flex: none;
  }

  .chip {
    background: transparent;
  }

  .chipActive {
    background: var(--accent);
    color: var(--text-on-accent);
  }

  .toolbar :global(.chipIcon) {
    width: calc(14 * var(--u));
    height: calc(14 * var(--u));
  }

  .vdivider {
    width: 1px;
    height: calc(24 * var(--u));
    background: var(--divider);
    flex: none;
  }

  .swatch,
  .swatchSelected {
    width: calc(20 * var(--u));
    height: calc(20 * var(--u));
    border-radius: 50%;
    flex: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  /* selected dot: accent ring, as ColorDot.qml:32-33 */
  .swatchSelected {
    border: calc(2 * var(--u)) solid var(--accent);
    transform: scale(1.12);
  }

  /* "More colors" (ToolPropsBar.qml:444-453) */
  .dotBtn {
    width: calc(26 * var(--u));
    height: calc(26 * var(--u));
    border-radius: calc(8 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text-secondary);
    flex: none;
  }

  .dotBtn :global(.dotGlyph) {
    width: calc(13 * var(--u));
    height: calc(13 * var(--u));
  }

  /* labelled value combo in the props strip (ToolPropsBar.qml:466-489) */
  .propCol {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(2 * var(--u));
    flex: none;
  }

  .propLabel {
    font-size: calc(9 * var(--u));
    color: var(--text-tertiary);
    line-height: 1;
  }

  .propCombo {
    width: calc(76 * var(--u));
    height: calc(22 * var(--u));
    border-radius: calc(8 * var(--u));
    background: var(--surface-hi);
    border: 1px solid var(--divider);
    padding: 0 calc(5 * var(--u)) 0 calc(8 * var(--u));
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(11 * var(--u));
    line-height: 1;
  }

  .propCombo :global(.propChevron) {
    width: calc(11 * var(--u));
    height: calc(11 * var(--u));
    color: var(--text-secondary);
  }

  /* ---- canvas (EditorWindow.qml:311-492) ---- */

  .canvas {
    flex: 1;
    margin: calc(10 * var(--u));
    border-radius: calc(18 * var(--u));
    background: var(--primary);
    border: 1px solid var(--divider);
    overflow: hidden;
    position: relative;
  }

  /* the screenshot being edited: abstract desktop, not a fake app */
  .shot {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(90% 120% at 15% 0%, rgba(67, 61, 139, 0.55), transparent 60%),
      radial-gradient(70% 100% at 95% 100%, rgba(46, 35, 108, 0.7), transparent 65%),
      linear-gradient(160deg, var(--wallpaper-hi), var(--wallpaper-lo));
  }

  .ghostCardA,
  .ghostCardB {
    position: absolute;
    border-radius: calc(10 * var(--u));
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: calc(14 * var(--u));
  }

  .ghostCardA {
    left: 6%;
    top: 12%;
    width: 34%;
    height: 62%;
  }

  .ghostCardB {
    left: 46%;
    top: 54%;
    width: 30%;
    height: 34%;
  }

  .ghostLines {
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.09) 0,
      rgba(255, 255, 255, 0.09) calc(6 * var(--u)),
      transparent calc(6 * var(--u)),
      transparent calc(16 * var(--u))
    );
    border-radius: calc(3 * var(--u));
  }

  .ghostChart {
    position: absolute;
    right: 7%;
    top: 12%;
    width: 40%;
    height: 34%;
    border-radius: calc(10 * var(--u));
    background:
      linear-gradient(
        to top right,
        transparent 48%,
        rgba(200, 172, 214, 0.25) 49%,
        rgba(200, 172, 214, 0.25) 51%,
        transparent 52%
      ),
      rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.07);
  }

  /* annotations */

  .highlightRect {
    position: absolute;
    right: 9%;
    top: 16%;
    width: 22%;
    height: 12%;
    background: var(--swatch-2);
    opacity: 0.4;
    border-radius: calc(3 * var(--u));
  }

  .blurRegion {
    position: absolute;
    left: 10%;
    top: 46%;
    width: 22%;
    height: 20%;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: calc(6 * var(--u));
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .arrowAnno {
    position: absolute;
    left: 28%;
    top: 22%;
    width: 34%;
    height: auto;
  }

  /* one-shot annotation story on load: arrow draws itself, steps pop in,
     timed after the editor window's hero entrance */
  @media (prefers-reduced-motion: no-preference) {
    .arrowAnno path {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      animation: draw 0.7s var(--ease-out) 1.25s forwards;
    }

    .arrowAnno path:nth-child(2) {
      animation-duration: 0.3s;
      animation-delay: 1.95s;
    }

    /* start at half size, never scale(0): scaling up from nothing renders a
       blurry sub-pixel dot on the first frames */
    .stepOne,
    .stepTwo {
      scale: 0.5;
      opacity: 0;
      animation: pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .stepOne {
      animation-delay: 2.3s;
    }

    .stepTwo {
      animation-delay: 2.45s;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pop {
    to {
      scale: 1;
      opacity: 1;
    }
  }

  .stepOne,
  .stepTwo {
    position: absolute;
    width: calc(24 * var(--u));
    height: calc(24 * var(--u));
    border-radius: 50%;
    background: var(--swatch-1);
    color: #fff;
    display: grid;
    place-items: center;
    font-size: calc(13 * var(--u));
    font-weight: 700;
    font-family: var(--font-sans), sans-serif;
    line-height: 1;
  }

  .stepOne {
    left: 8%;
    top: 40%;
  }

  .stepTwo {
    left: 44%;
    top: 50%;
  }

  /* ---- bottom bar (EditorWindow.qml:495-556) ---- */

  .bottombar {
    height: calc(54 * var(--u));
    flex: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 calc(10 * var(--u)) calc(10 * var(--u));
    padding: 0 calc(16 * var(--u));
    border-radius: calc(18 * var(--u));
    background: linear-gradient(var(--chrome-liter), var(--primary));
    border: 1px solid var(--divider);
  }

  .status {
    font-family: var(--font-mono), monospace;
    font-size: calc(11.5 * var(--u));
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .actions {
    display: flex;
    gap: calc(8 * var(--u));
    align-items: center;
  }

  /* Copy, Save, Upload and More are all UButton variant "tonal" - the bar
     carries no accent fill (EditorWindow.qml:915-948). */
  .tonalBtn,
  .moreBtn {
    display: inline-flex;
    align-items: center;
    gap: calc(6 * var(--u));
    height: calc(32 * var(--u));
    padding: 0 calc(14 * var(--u));
    border-radius: calc(16 * var(--u));
    font-size: calc(12 * var(--u));
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    color: var(--text);
    background: var(--tertiary);
    border: 1px solid var(--divider);
  }

  .closeBtn {
    width: calc(30 * var(--u));
    height: calc(30 * var(--u));
    border-radius: calc(10 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text-secondary);
    flex: none;
  }

  .actions :global(.btnIcon) {
    width: calc(14 * var(--u));
    height: calc(14 * var(--u));
    flex: none;
  }
</style>
