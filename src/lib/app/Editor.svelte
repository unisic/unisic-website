<script lang="ts">
  import Combo from "./Combo.svelte";
  import Window from "./Window.svelte";
  import Icon from "#lib/components/Icon.svelte";
  import {
    callout,
    chevronDown,
    close,
    contentCopy,
    documentSave,
    documentSend,
    drawArrow,
    drawEllipse,
    drawLine,
    drawRectangle,
    editRedo,
    editUndo,
    measure,
  } from "#lib/icons.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import { TOOLS, type ToolId } from "./tools.ts";

  /*
   * EditorWindow.qml: the tool card, whose sub-bar row is always reserved so
   * picking a tool never moves the image, the image card and the 64px status
   * bar. Pen, the shapes, highlight and step markers draw for real on a
   * 999x754 screenshot, and undo and redo walk the marks, the four shown at
   * first included. The export row is a picture of the bar.
   */
  let { dict }: { dict: Dictionary } = $props();
  const a = $derived(dict.app);
  const e = $derived(dict.editorMockup);

  const W = 999;
  const H = 754;
  const MAX_MARKS = 64;
  const MAX_POINTS = 4000;
  /* Theme.swatches; a step marker on a light one gets dark digits */
  const SWATCHES = ["#FF4757", "#FFD84D", "#2ED573", "#1E90FF", "#C8ACD6", "#FFFFFF", "#17153B"];
  const LIGHT = new Set(["#FFD84D", "#2ED573", "#C8ACD6", "#FFFFFF"]);
  const WIDTHS = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64].map((w) => `${w} px`);
  const SHAPES = [
    { id: "line", icon: drawLine, key: "L" },
    { id: "arrow", icon: drawArrow, key: "A" },
    { id: "measure", icon: measure, key: "M" },
    { id: "rect", icon: drawRectangle, key: "R" },
    { id: "ellipse", icon: drawEllipse, key: "O" },
    { id: "callout", icon: callout, key: "D" },
  ] as const;
  /* ToolCatalog props: which tools show the swatches and the stroke width */
  const STROKE = new Set<ToolId>(["pen", "shapes", "text", "highlight", "magnify", "eyedropper", "step"]);
  const WIDTH = new Set<ToolId>(["pen", "shapes", "highlight", "pixelate", "magnify"]);

  type Shape = (typeof SHAPES)[number]["id"];
  type Mark = { kind: "pen" | "highlight" | "step" | Shape; color: string; w: number; pts: number[]; n?: number };

  let tool = $state<ToolId>("shapes");
  let shape = $state<Shape>("arrow");
  let color = $state(SWATCHES[0]);
  let width = $state("6 px");
  let marks = $state<Mark[]>([
    { kind: "highlight", color: "#FFD84D", w: 6, pts: [62, 144, 478, 196] },
    { kind: "arrow", color: "#FF4757", w: 6, pts: [540, 566, 286, 488] },
    { kind: "step", color: "#FF4757", w: 6, pts: [42, 476], n: 1 },
    { kind: "step", color: "#1E90FF", w: 6, pts: [584, 132], n: 2 },
  ]);
  let undone = $state<Mark[]>([]);
  let draft = $state<Mark | null>(null);
  let shotW = $state(0);

  const kind = $derived<Mark["kind"] | null>(
    tool === "shapes" ? shape : tool === "pen" || tool === "highlight" || tool === "step" ? tool : null,
  );
  const sub = $derived(tool === "shapes" || STROKE.has(tool) || WIDTH.has(tool));
  const zoom = $derived(shotW ? `${Math.round((shotW / W) * 100)}%` : "");

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(v, hi));

  function at(ev: PointerEvent, el: Element) {
    const r = el.getBoundingClientRect();
    return [clamp(((ev.clientX - r.left) / r.width) * W, 0, W), clamp(((ev.clientY - r.top) / r.height) * H, 0, H)];
  }

  function add(m: Mark) {
    marks = [...marks.slice(-(MAX_MARKS - 1)), m];
    undone = [];
  }

  function undo() {
    const m = marks.pop();
    if (m) undone.push(m);
  }

  function redo() {
    const m = undone.pop();
    if (m) marks.push(m);
  }

  function down(ev: PointerEvent & { currentTarget: SVGSVGElement }) {
    if (ev.button !== 0 || !kind) return;
    const p = at(ev, ev.currentTarget);
    if (kind === "step") {
      add({ kind, color, w: 0, pts: p, n: marks.filter((m) => m.kind === "step").length + 1 });
      return;
    }
    ev.currentTarget.setPointerCapture(ev.pointerId);
    draft = { kind, color, w: parseInt(width), pts: kind === "pen" ? p : [...p, ...p] };
  }

  function move(ev: PointerEvent & { currentTarget: SVGSVGElement }) {
    if (!draft) return;
    const [x, y] = at(ev, ev.currentTarget);
    const n = draft.pts.length;
    if (draft.kind !== "pen") {
      draft.pts[2] = x;
      draft.pts[3] = y;
    } else if (n < MAX_POINTS && Math.hypot(x - draft.pts[n - 2], y - draft.pts[n - 1]) >= 3) {
      draft.pts.push(x, y);
    }
  }

  function up() {
    if (!draft) return;
    const [x1, y1, x2, y2] = draft.pts;
    if (draft.kind === "pen" ? draft.pts.length >= 4 : Math.abs(x2 - x1) + Math.abs(y2 - y1) >= 8) add(draft);
    draft = null;
  }

  function key(ev: KeyboardEvent) {
    if (ev.target instanceof HTMLSelectElement) return;
    const k = ev.key.toUpperCase();
    if ((ev.ctrlKey || ev.metaKey) && (k === "Z" || k === "Y")) {
      if (k === "Y" || ev.shiftKey) redo();
      else undo();
    } else if (ev.ctrlKey || ev.metaKey || ev.altKey) {
      return;
    } else {
      const s = SHAPES.find((s) => s.key === k);
      const t = TOOLS.find((t) => t.key && t.key === k);
      if (s) {
        tool = "shapes";
        shape = s.id;
      } else if (t) {
        tool = t.id;
      } else {
        return;
      }
    }
    ev.preventDefault();
  }

  /* the head's base sits back from the tip, so the round cap never pokes out */
  function head(m: Mark) {
    const [x1, y1, x2, y2] = m.pts;
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const len = 14 + m.w * 2.5;
    const p = (d: number) => `${x2 - len * Math.cos(ang + d)},${y2 - len * Math.sin(ang + d)}`;
    return { tip: `${x2},${y2} ${p(0.45)} ${p(-0.45)}`, x: x2 - len * 0.6 * Math.cos(ang), y: y2 - len * 0.6 * Math.sin(ang) };
  }
</script>

{#snippet mark(m: Mark)}
  {@const [x1, y1, x2 = x1, y2 = y1] = m.pts}
  {@const x = Math.min(x1, x2)}
  {@const y = Math.min(y1, y2)}
  {@const w = Math.abs(x2 - x1)}
  {@const h = Math.abs(y2 - y1)}
  {#if m.kind === "pen"}
    <polyline points={m.pts.join(" ")} fill="none" stroke={m.color} stroke-width={m.w} />
  {:else if m.kind === "step"}
    <circle cx={x1} cy={y1} r="20" fill={m.color} />
    <text x={x1} y={y1 + 8} class="step" fill={LIGHT.has(m.color) ? "#17153B" : "#fff"}>{m.n}</text>
  {:else if m.kind === "highlight"}
    <rect {x} {y} width={w} height={h} rx="3" fill={m.color} class="hl" />
  {:else if m.kind === "rect"}
    <rect {x} {y} width={w} height={h} rx="2" fill="none" stroke={m.color} stroke-width={m.w} />
  {:else if m.kind === "ellipse"}
    <ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} fill="none" stroke={m.color} stroke-width={m.w} />
  {:else if m.kind === "callout"}
    <path
      d="M{x} {y}h{w}v{h}H{x + Math.min(56, w / 2)}l-18 22v-22H{x}Z"
      fill="none"
      stroke={m.color}
      stroke-width={m.w}
    />
  {:else if m.kind === "arrow"}
    {@const hd = head(m)}
    <line {x1} {y1} x2={hd.x} y2={hd.y} stroke={m.color} stroke-width={m.w} />
    <polygon points={hd.tip} fill={m.color} stroke={m.color} stroke-width="2" />
  {:else}
    <line {x1} {y1} {x2} {y2} stroke={m.color} stroke-width={m.w} />
    {#if m.kind === "measure"}
      <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 12} class="len" fill={m.color}>{Math.round(Math.hypot(w, h))} px</text>
    {/if}
  {/if}
{/snippet}

<Window title={e.title} label={e.ariaLabel} left>
  <div class="editor">
    <div class="card bar top" role="toolbar" aria-label={a.toolbar} tabindex="-1" onkeydown={key}>
      <div class="tools">
        {#each TOOLS as t (t.id)}
          <button
            type="button"
            class="tool-chip"
            aria-label={a.tools[t.id]}
            aria-pressed={tool === t.id}
            aria-keyshortcuts={t.key || undefined}
            title={t.key ? `${a.tools[t.id]} (${t.key})` : a.tools[t.id]}
            onclick={() => (tool = t.id)}><Icon svg={t.icon} size={20} /></button
          >
        {/each}
        <span class="sep" aria-hidden="true"></span>
        <button type="button" class="tool-chip" aria-label={a.tools.undo} title="{a.tools.undo} (Ctrl+Z)" disabled={!marks.length} onclick={undo}
          ><Icon svg={editUndo} size={20} /></button
        >
        <button type="button" class="tool-chip" aria-label={a.tools.redo} title="{a.tools.redo} (Ctrl+Shift+Z)" disabled={!undone.length} onclick={redo}
          ><Icon svg={editRedo} size={20} /></button
        >
      </div>

      <div class="sub" inert={!sub}>
        {#if tool === "shapes"}
          {#each SHAPES as s (s.id)}
            <button
              type="button"
              class="tool-chip"
              aria-label={a.tools[s.id]}
              aria-pressed={shape === s.id}
              aria-keyshortcuts={s.key}
              title="{a.tools[s.id]} ({s.key})"
              onclick={() => (shape = s.id)}><Icon svg={s.icon} size={20} /></button
            >
          {/each}
          <span class="sep" aria-hidden="true"></span>
        {/if}
        {#if STROKE.has(tool)}
          {#each SWATCHES as c (c)}
            <button type="button" class="dot" style:background={c} aria-label={c} aria-pressed={color === c} onclick={() => (color = c)}
            ></button>
          {/each}
        {/if}
        {#if WIDTH.has(tool)}
          <span class="sep" aria-hidden="true"></span>
          <span class="stroke">{e.stroke}</span>
          <Combo bind:value={width} options={WIDTHS} label={e.stroke} />
        {/if}
      </div>
    </div>

    <div class="card shot-card">
      <div class="shot" bind:clientWidth={shotW}>
        <!-- role=application: a drawing surface that takes its own pointer and key input -->
        <!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
        <svg
          viewBox="0 0 {W} {H}"
          role="application"
          tabindex="0"
          aria-label={e.title}
          class:draw={!!kind}
          onpointerdown={down}
          onpointermove={move}
          onpointerup={up}
          onpointercancel={up}
          onkeydown={key}
        >
          <!-- the screenshot: a web page with Uni on it, in fixed colours
               since it is a picture, not part of the theme -->
          <rect width={W} height={H} fill="#f4f2ee" />
          <rect width={W} height="46" fill="#26262c" />
          <path d="M12 46V18a10 10 0 0 1 10-10h190a10 10 0 0 1 10 10v28z" fill="#f4f2ee" />
          <rect x="28" y="21" width="120" height="12" rx="6" fill="#17171c" opacity="0.5" />
          <rect x="70" y="56" width="560" height="28" rx="14" fill="#e4e1db" />
          <circle cx="86" cy="124" r="14" fill="#17171c" />
          <g fill="#17171c">
            <rect x="110" y="118" width="90" height="12" rx="6" opacity="0.6" />
            <rect x="70" y="150" width="400" height="40" rx="8" />
            <rect x="70" y="202" width="300" height="40" rx="8" />
            <rect x="70" y="272" width="440" height="12" rx="6" opacity="0.35" />
            <rect x="70" y="298" width="400" height="12" rx="6" opacity="0.35" />
            <rect x="70" y="324" width="420" height="12" rx="6" opacity="0.35" />
            <rect x="70" y="350" width="260" height="12" rx="6" opacity="0.35" />
            <rect x="70" y="450" width="190" height="52" rx="26" />
          </g>
          <rect x="106" y="470" width="118" height="12" rx="6" fill="#f4f2ee" />
          <rect x="277" y="451" width="150" height="50" rx="25" fill="none" stroke="#17171c" stroke-width="2" />
          <rect x="307" y="470" width="90" height="12" rx="6" fill="#17171c" opacity="0.7" />
          <image href="/uni.webp" x="610" y="104" width="300" height="507" />
          <g fill="#fff" stroke="#e4e1db" stroke-width="2">
            <rect x="70" y="636" width="270" height="88" rx="14" />
            <rect x="364" y="636" width="270" height="88" rx="14" />
            <rect x="658" y="636" width="270" height="88" rx="14" />
          </g>

          <g class="marks">
            {#each marks as m, i (i)}{@render mark(m)}{/each}
            {#if draft}{@render mark(draft)}{/if}
          </g>
        </svg>
      </div>
    </div>

    <div class="card bar status">
      <p class="size">{W} × {H} px <span class="zoom">{zoom}</span></p>
      <div class="actions" aria-hidden="true">
        <span class="btn btn-tonal btn-compact"><Icon svg={contentCopy} /><span class="label">{e.copy}</span></span>
        <span class="btn btn-filled btn-compact split"
          ><Icon svg={documentSave} /><span class="label">{e.save}</span><span class="cut"></span><Icon svg={chevronDown} /></span
        >
        <span class="btn btn-tonal btn-compact"><Icon svg={documentSend} /><span class="label">{e.upload}</span></span>
        <span class="sep"></span>
        <span class="btn btn-ghost btn-compact more"><span class="label">{e.more}</span><Icon svg={chevronDown} /></span>
        <span class="x"><Icon svg={close} size={16} /></span>
      </div>
    </div>
  </div>
</Window>

<style>
  .editor {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    padding: 0 var(--space-m) var(--space-m);
  }

  /* the bars are lighter(primary, 1.22) to primary, the image card plain primary */
  .bar {
    background: linear-gradient(color-mix(in srgb, var(--primary) 82%, #fff 18%), var(--primary));
    border-radius: var(--radius-l);
  }

  .top {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    padding: 9px var(--space-m);
  }

  .tools,
  .sub {
    display: flex;
    align-items: center;
  }

  .tools {
    flex-wrap: wrap;
    gap: 4px;
  }

  /* one row tall whatever the tool, scrolling sideways when it does not fit */
  .sub {
    gap: 6px;
    height: 44px;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .sub[inert] {
    visibility: hidden;
  }

  .sep {
    flex: none;
    width: 1px;
    height: 30px;
    margin-inline: 6px;
    background: var(--divider);
  }

  /* ColorDot: 26px, a 3px ring on the current one */
  .dot {
    flex: none;
    width: 26px;
    height: 26px;
    border: 1px solid var(--divider);
    border-radius: 50%;
  }

  .dot[aria-pressed="true"] {
    border: 3px solid var(--text);
  }

  .stroke {
    color: var(--text-tertiary);
    font-size: var(--font-s);
  }

  .shot-card {
    padding: var(--space-m);
    background: var(--primary);
  }

  .shot-card::before {
    display: none;
  }

  .shot {
    width: min(100%, 860px);
    margin-inline: auto;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 8px 30px -10px var(--shadow-color);
    touch-action: pan-y pinch-zoom;
    user-select: none;
  }

  svg.draw {
    cursor: crosshair;
  }

  .marks {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hl {
    fill-opacity: 0.45;
    mix-blend-mode: multiply;
  }

  .step,
  .len {
    font-family: var(--font-sans);
    font-weight: 700;
    text-anchor: middle;
  }

  .step {
    font-size: 22px;
  }

  .len {
    font-family: var(--font-mono);
    font-size: 18px;
    paint-order: stroke;
    stroke: #17171c;
    stroke-width: 4px;
  }

  .status {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    min-height: 64px;
    padding: 8px var(--space-m) 8px var(--space-l);
  }

  .size {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-secondary);
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zoom {
    margin-left: var(--space-m);
    color: var(--text);
    font-variant-numeric: tabular-nums;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: var(--space-s);
  }

  .actions .btn {
    cursor: default;
  }

  .split {
    gap: 8px;
    padding-right: 10px;
  }

  .cut {
    width: 1px;
    height: 18px;
    background: currentColor;
    opacity: 0.3;
  }

  .x {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    color: var(--text);
  }

  @container (max-width: 720px) {
    .label,
    .more,
    .actions .sep {
      display: none;
    }

    .actions .btn {
      padding-inline: 10px;
    }
  }

  @container (max-width: 520px) {
    .tool-chip {
      width: 34px;
      height: 34px;
    }

    .shot-card {
      padding: var(--space-s);
    }

    .x {
      display: none;
    }
  }
</style>
