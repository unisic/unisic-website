<script lang="ts">
  import Icon from "./Icon.svelte";
  import { SWATCHES } from "#lib/themes.ts";
  import {
    arrow,
    blur,
    callout,
    crop,
    editShapes,
    ellipse,
    eraser,
    eyedropper,
    highlight,
    line,
    magnify,
    measure,
    pen,
    pixelate,
    rectangle,
    redo,
    shapes,
    step,
    text,
    undo,
  } from "#lib/icons.ts";

  /*
   * Static stand-in for the former interactive editor demo. It shows the app's
   * two-row tool card (EditorWindow.qml:347-545) over an abstract capture: the
   * main row exactly as mainRowModel() builds it (the six shape tools collapsed
   * behind one group chip), undo/redo, and below it the sub-bar with the open
   * group's own tools and the fixed 7-color palette (Theme.qml:102). Pure
   * server markup, no client JS. Geometry is shared with EditorMockup so the
   * flagship cell and the hero read as one product. Decorative, hence
   * aria-hidden - the cell's heading and body carry the meaning.
   */

  const TOOLS = [
    editShapes,
    pen,
    shapes,
    text,
    highlight,
    blur,
    pixelate,
    eraser,
    magnify,
    eyedropper,
    step,
    crop,
  ];

  /* the shapes group is open, which is what the sub-bar below expands */
  const ACTIVE = 2;

  /* the open group's tools, Arrow live (ToolCatalog shapes order) */
  const SHAPES = [
    line,
    arrow,
    measure,
    rectangle,
    ellipse,
    callout,
  ];
  const SHAPE_ACTIVE = 1;
</script>

<figure class="preview" aria-hidden="true">
  <div class="stage">
    <div class="canvas">
      <div class="ghostCardA">
        <div class="ghostLines"></div>
      </div>
      <div class="ghostChart"></div>
      <div class="highlightRect"></div>
    </div>

    <div class="toolbar">
      <div class="toolRow">
        {#each TOOLS as icon, i}
          <span class={i === ACTIVE ? "chipActive" : "chip"}>
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

      <!-- the open group's tools plus their props strip (ToolPropsBar.qml) -->
      <div class="subRow">
        {#each SHAPES as icon, i}
          <span class={i === SHAPE_ACTIVE ? "chipActive" : "chip"}>
            <Icon svg={icon} class="chipIcon" />
          </span>
        {/each}
        <span class="vdivider"></span>
        {#each SWATCHES as c, i}
          <span class={i === 1 ? "swatchSelected" : "swatch"} style:background={c}></span>
        {/each}
        <span class="dotBtn">
          <Icon svg={eyedropper} class="dotGlyph" />
        </span>
      </div>
    </div>
  </div>
</figure>

<style>
  /*
   * The floating annotation tool card over an abstract capture. Design canvas
   * is 720 x 300; --u = one design pixel resolved via container queries, so the
   * whole picture scales as one unit and the two-row card always fits its
   * canvas. Card geometry mirrors EditorMockup (chip 32, dot 20, divider 24).
   */

  .preview {
    margin: 0;
    container-type: inline-size;
    width: 100%;
  }

  .stage {
    --u: 0.1389cqi; /* 100cqi / 720 */
    position: relative;
    aspect-ratio: 720 / 300;
  }

  .canvas {
    position: absolute;
    inset: 0;
    border-radius: var(--radius-l);
    border: 1px solid var(--divider);
    overflow: hidden;
    background:
      radial-gradient(90% 130% at 12% 0%, rgba(67, 61, 139, 0.55), transparent 60%),
      radial-gradient(70% 110% at 92% 100%, rgba(46, 35, 108, 0.7), transparent 65%),
      linear-gradient(160deg, var(--wallpaper-hi), var(--wallpaper-lo));
    box-shadow: 0 calc(16 * var(--u)) calc(40 * var(--u)) rgba(0, 0, 0, 0.4);
  }

  /* abstract desktop behind the toolbar, same vocabulary as the mockups */

  .ghostCardA {
    position: absolute;
    left: 6%;
    top: 14%;
    width: 30%;
    height: 62%;
    border-radius: calc(10 * var(--u));
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: calc(14 * var(--u));
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
    top: 15%;
    width: 34%;
    height: 40%;
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

  .highlightRect {
    position: absolute;
    right: 9%;
    bottom: 16%;
    width: 24%;
    height: 12%;
    background: var(--swatch-2);
    opacity: 0.4;
    border-radius: calc(3 * var(--u));
  }

  /* The highlighter stroke draws itself left-to-right once the cell scrolls
     in (Reveal flips data-inview). Static final state under reduced motion. */
  @media (prefers-reduced-motion: no-preference) {
    :global(html[data-js] [data-reveal]) .highlightRect {
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.5s var(--ease-out) 0.35s;
    }

    :global(html[data-js] [data-reveal][data-inview="true"]) .highlightRect {
      transform: scaleX(1);
    }
  }

  /* ---- floating tool card (EditorWindow.qml:347-545) ---- */

  .toolbar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--u));
    padding: calc(9 * var(--u)) calc(12 * var(--u));
    border-radius: calc(18 * var(--u));
    background: linear-gradient(var(--chrome-liter), var(--primary));
    border: 1px solid var(--divider);
    box-shadow: 0 calc(10 * var(--u)) calc(24 * var(--u)) var(--shadow-color);
  }

  .toolRow {
    display: flex;
    align-items: center;
    gap: calc(4 * var(--u));
  }

  /* the sub-bar slot the app always reserves, here holding the active tool's
     color strip (EditorWindow.qml:453-459) */
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
</style>
