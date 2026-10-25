<script lang="ts">
  import Icon from "#lib/components/Icon.svelte";
  import { checkmark, close, editRedo, editUndo, gif, measure, mediaRecord, ocr, region, stop } from "#lib/icons.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import { TOOLS, type ToolId } from "./tools.ts";

  /*
   * The selection overlay of OverlayWindow.qml over a frozen desktop, in a
   * 1280x800 screen space so the size pill reads like real pixels. The
   * scrim is the primary colour at alpha 150, the selection a 1.5px line in
   * the mode colour with eight round handles, the toolbar the primary
   * gradient at radius 27. A screenshot gets the tool row; OCR, GIF and
   * video pick a plain region, so only their start button shows. Starting a
   * GIF or video swaps the overlay for the RecordBorder frame and its REC
   * badge. Drag, the arrow keys, Enter and Esc work as in the app.
   */
  let { dict }: { dict: Dictionary } = $props();
  const a = $derived(dict.app);
  const uid = $props.id();

  const W = 1280;
  const H = 800;
  const MODES = [
    { id: "shot", icon: region },
    { id: "measure", icon: measure },
    { id: "ocr", icon: ocr },
    { id: "gif", icon: gif },
    { id: "video", icon: mediaRecord },
  ] as const;
  type Mode = (typeof MODES)[number]["id"];
  type Rect = { x: number; y: number; w: number; h: number };

  let mode = $state<Mode>("shot");
  let sel = $state<Rect | null>({ x: 470, y: 110, w: 520, h: 360 });
  let tool = $state<ToolId>("pen");
  let rec = $state<number | null>(null);
  let done = $state(false);
  let stageW = $state(0);
  let stageH = $state(0);
  let barW = $state(0);
  let barH = $state(0);
  let drag: { x: number; y: number } | null = null;
  let doneTimer: ReturnType<typeof setTimeout> | undefined;

  const tools = TOOLS.filter((t) => t.id !== "crop");
  const annotate = $derived(mode === "shot");
  const confirmLabel = $derived(mode === "shot" ? dict.overlay.capture : a.modes[mode]);
  const scale = $derived((stageW || 1180) / W);
  const recording = $derived(rec !== null);

  /* one interval while recording, bounded to a minute */
  $effect(() => {
    if (!recording) return;
    const t = setInterval(() => (rec = rec !== null && rec < 59 ? rec + 1 : null), 1000);
    return () => clearInterval(t);
  });
  $effect(() => () => clearTimeout(doneTimer));

  function setMode(m: Mode) {
    mode = m;
    rec = null;
    done = false;
  }

  function confirm() {
    if (!sel || mode === "measure") return;
    if (mode === "gif" || mode === "video") {
      rec = 0;
      return;
    }
    done = true;
    clearTimeout(doneTimer);
    doneTimer = setTimeout(() => (done = false), 1800);
  }

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(v, hi));

  function point(e: PointerEvent, el: HTMLElement) {
    const r = el.getBoundingClientRect();
    return { x: clamp(((e.clientX - r.left) / r.width) * W, 0, W), y: clamp(((e.clientY - r.top) / r.height) * H, 0, H) };
  }

  function down(e: PointerEvent & { currentTarget: HTMLElement }) {
    if (e.button !== 0 || recording) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag = point(e, e.currentTarget);
    sel = { ...drag, w: 0, h: 0 };
    done = false;
  }

  function move(e: PointerEvent & { currentTarget: HTMLElement }) {
    if (!drag) return;
    const p = point(e, e.currentTarget);
    sel = { x: Math.min(drag.x, p.x), y: Math.min(drag.y, p.y), w: Math.abs(p.x - drag.x), h: Math.abs(p.y - drag.y) };
  }

  /* a click (no real drag) takes the whole screen, as clickSelectsAll does */
  function up() {
    if (!drag) return;
    drag = null;
    if (sel && (sel.w < 12 || sel.h < 12)) sel = annotate ? { x: 0, y: 0, w: W, h: H } : null;
  }

  function key(e: KeyboardEvent) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "Escape") {
      if (recording) rec = null;
      else sel = null;
    } else if (e.key === "Enter" || e.key === " ") {
      confirm();
    } else if (sel && !recording && e.key.startsWith("Arrow")) {
      const step = e.shiftKey ? 10 : 1;
      const dx = e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
      const dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
      sel = { ...sel, x: clamp(sel.x + dx, 0, W - sel.w), y: clamp(sel.y + dy, 0, H - sel.h) };
    } else {
      const t = annotate && tools.find((t) => t.key && t.key === e.key.toUpperCase());
      if (!t) return;
      tool = t.id;
    }
    e.preventDefault();
  }

  const pct = (v: number, of: number) => `${(v / of) * 100}%`;

  /* toolbarX/toolbarY of the default "follow the selection" position: under
     the region, above it when there is no room, else on the bottom edge.
     Until the bar is measured it is centred under the region in percent. */
  const barStyle = $derived.by(() => {
    if (!sel) return "";
    const cx = (sel.x + sel.w / 2) / W;
    const bottom = (sel.y + sel.h) / H;
    if (!stageW || !barW) return `left:${cx * 100}%;top:calc(${bottom * 100}% + 10px);--tx:-50%`;
    const x = clamp(cx * stageW - barW / 2, 8, stageW - barW - 8);
    let y = bottom * stageH + 10;
    if (y + barH > stageH - 8) y = (sel.y / H) * stageH - barH - 10;
    if (y < 8) y = stageH - barH - 8;
    return `left:${x}px;top:${y}px`;
  });
  const pillAbove = $derived(!sel || sel.y * scale >= 38);
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
</script>

<div class="overlay" style:--mode="var(--mode-{mode})">
  <div class="modes chips">
    {#each MODES as m (m.id)}
      <button type="button" class="chip" aria-pressed={mode === m.id} onclick={() => setMode(m.id)}
        ><Icon svg={m.icon} />{a.modes[m.id]}</button
      >
    {/each}
  </div>

  <div class="wrap">
    <!-- role=application: a drawing surface that takes its own pointer and key input -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
    <div
      class="stage"
      role="application"
      tabindex="0"
      aria-label={dict.overlay.caption}
      aria-describedby="{uid}-hint"
      bind:clientWidth={stageW}
      bind:clientHeight={stageH}
      onpointerdown={down}
      onpointermove={move}
      onpointerup={up}
      onpointercancel={up}
      onkeydown={key}
    >
      <svg class="desk" viewBox="0 0 {W} {H}" aria-hidden="true">
        <defs>
          <radialGradient id="{uid}-glow" cx="0.78" cy="0.12" r="0.9">
            <stop offset="0" stop-color="var(--accent)" stop-opacity="0.38" />
            <stop offset="1" stop-color="var(--accent)" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width={W} height={H} fill="var(--bg-deep)" />
        <rect width={W} height={H} fill="url(#{uid}-glow)" />

        <!-- a browser window with Uni on the page -->
        <g>
          <rect x="70" y="70" width="700" height="470" rx="12" fill="var(--surface)" stroke="var(--divider)" />
          <path d="M70 82a12 12 0 0 1 12-12h676a12 12 0 0 1 12 12v24H70z" fill="var(--tertiary)" />
          <rect x="230" y="78" width="380" height="20" rx="10" fill="var(--bg-deep)" opacity="0.6" />
          <g fill="var(--text)" opacity="0.14">
            <rect x="110" y="150" width="300" height="26" rx="6" />
            <rect x="110" y="196" width="380" height="12" rx="6" />
            <rect x="110" y="220" width="340" height="12" rx="6" />
            <rect x="110" y="244" width="360" height="12" rx="6" />
            <rect x="110" y="300" width="160" height="40" rx="20" />
            <rect x="110" y="380" width="380" height="12" rx="6" />
            <rect x="110" y="404" width="300" height="12" rx="6" />
          </g>
          <rect x="110" y="300" width="160" height="40" rx="20" fill="var(--accent)" />
          <image href="/uni.webp" x="540" y="128" width="200" height="338" />
        </g>

        <!-- a terminal on top of it -->
        <g>
          <rect x="700" y="330" width="500" height="330" rx="12" fill="#0e0e11" stroke="var(--divider)" />
          <path d="M700 342a12 12 0 0 1 12-12h476a12 12 0 0 1 12 12v22H700z" fill="#2e2e36" />
          <g stroke-width="10" stroke-linecap="round">
            <path d="M730 400h60" stroke="var(--accent)" /><path d="M806 400h170" stroke="#ececef" stroke-opacity=".55" />
            <path d="M730 436h120" stroke="#ececef" stroke-opacity=".3" /><path d="M866 436h160" stroke="#ececef" stroke-opacity=".3" />
            <path d="M730 472h90" stroke="#7bd88f" /><path d="M836 472h230" stroke="#ececef" stroke-opacity=".3" />
            <path d="M730 508h200" stroke="#ececef" stroke-opacity=".3" />
            <path d="M730 544h60" stroke="var(--accent)" /><path d="M806 544h110" stroke="#ffb020" />
            <path d="M730 580h14" stroke="#ececef" />
          </g>
        </g>

        <!-- a panel -->
        <rect y="756" width={W} height="44" fill="#000" opacity="0.45" />
        <g fill="#fff" opacity="0.55">
          {#each [0, 1, 2, 3, 4] as i (i)}<rect x={556 + i * 36} y="766" width="24" height="24" rx="6" />{/each}
        </g>

        <!-- what was drawn on the frozen screen before the shot -->
        <g stroke="#ff4757" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M905 438 772 304" />
          <path d="M772 344v-40h40" />
        </g>
        <circle cx="934" cy="440" r="20" fill="#ff4757" />
        <text x="934" y="448" fill="#fff" font-size="22" font-weight="700" text-anchor="middle" font-family="var(--font-sans)">1</text>

        {#if !recording}
          <path
            class="scrim"
            fill-rule="evenodd"
            d="M0 0H{W}V{H}H0Z{sel ? `M${sel.x} ${sel.y}v${sel.h}h${sel.w}v${-sel.h}Z` : ''}"
          />
          {#if sel}
            <rect class="line" x={sel.x} y={sel.y} width={sel.w} height={sel.h} />
            {#each [[0, 0], [0.5, 0], [1, 0], [0, 0.5], [1, 0.5], [0, 1], [0.5, 1], [1, 1]] as [fx, fy] (`${fx}${fy}`)}
              <circle class="handle" cx={sel.x + fx * sel.w} cy={sel.y + fy * sel.h} r={5 / scale} />
            {/each}
          {/if}
        {:else if sel}
          <rect class="rec-contrast" x={sel.x - 4 / scale} y={sel.y - 4 / scale} width={sel.w + 8 / scale} height={sel.h + 8 / scale} />
          <rect class="rec-frame" x={sel.x - 1.5 / scale} y={sel.y - 1.5 / scale} width={sel.w + 3 / scale} height={sel.h + 3 / scale} style:stroke-width="{3 / scale}" />
          <rect class="rec-contrast" x={sel.x} y={sel.y} width={sel.w} height={sel.h} />
        {/if}
      </svg>

      <span class="badge mode-badge" aria-hidden="true"
        ><Icon svg={MODES.find((m) => m.id === mode)?.icon ?? region} size={15} />{a.modes[mode]}</span
      >

      {#if sel && !recording}
        <span
          class="badge size"
          class:inside={!pillAbove}
          style:left={pct(sel.x, W)}
          style:top={pct(sel.y, H)}
          aria-hidden="true">{Math.round(sel.w)} × {Math.round(sel.h)}</span
        >
        {#if mode === "measure"}
          <span class="measure-tag" style:left={pct(sel.x + sel.w / 2, W)} style:top={pct(sel.y + sel.h, H)} aria-hidden="true"
            >{Math.round(sel.w)} px</span
          >
          <span class="measure-tag v" style:left={pct(sel.x + sel.w, W)} style:top={pct(sel.y + sel.h / 2, H)} aria-hidden="true"
            >{Math.round(sel.h)} px</span
          >
        {/if}
      {/if}

      {#if done && sel}
        <span class="badge toast" style:left={pct(sel.x + sel.w / 2, W)} style:top={pct(sel.y + sel.h / 2, H)} role="status"
          ><Icon svg={checkmark} size={15} />{dict.features.upload.copied}</span
        >
      {/if}

      {#if recording && sel && rec !== null}
        <span class="badge rec" style:left={pct(sel.x, W)} style:top={pct(sel.y, H)} class:inside={!pillAbove}>
          <span class="dot" aria-hidden="true"></span>
          <span class="rec-time">REC {fmt(rec)}</span>
          <span class="rec-sep" aria-hidden="true"></span>
          <button type="button" class="rec-stop" aria-label={a.record.stop} onclick={() => (rec = null)}
            ><Icon svg={stop} size={12} /></button
          >
        </span>
      {/if}

      <p class="hint" id="{uid}-hint" class:off={recording || (sel && mode !== "measure")}>{a.hint[mode]}</p>
    </div>

    {#if sel && !recording && mode !== "measure"}
      <div class="toolbar" style={barStyle} role="toolbar" aria-label={a.toolbar} bind:offsetWidth={barW} bind:offsetHeight={barH}>
        {#if annotate}
          {#each tools as t (t.id)}
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
          <button type="button" class="tool-chip" aria-label={a.tools.undo} title={a.tools.undo} disabled
            ><Icon svg={editUndo} size={20} /></button
          >
          <button type="button" class="tool-chip" aria-label={a.tools.redo} title={a.tools.redo} disabled
            ><Icon svg={editRedo} size={20} /></button
          >
          <span class="sep" aria-hidden="true"></span>
        {/if}
        <button type="button" class="btn btn-filled btn-compact" aria-keyshortcuts="Enter" onclick={confirm}
          ><Icon svg={checkmark} />{confirmLabel}</button
        >
        <button type="button" class="tool-chip" aria-label={a.cancel} title="{a.cancel} (Esc)" aria-keyshortcuts="Escape" onclick={() => (sel = null)}
          ><Icon svg={close} size={15} /></button
        >
      </div>
    {/if}
  </div>
</div>

<style>
  .overlay {
    container-type: inline-size;
  }

  .modes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .modes .chip[aria-pressed="true"] {
    background: var(--mode);
    border-color: var(--mode);
    color: #141418;
  }

  .wrap {
    position: relative;
  }

  .stage {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    box-shadow: 0 30px 80px -30px var(--shadow-color);
    cursor: crosshair;
    touch-action: pan-y pinch-zoom;
    user-select: none;
  }

  .desk {
    width: 100%;
    height: 100%;
  }

  .scrim {
    fill: var(--primary);
    fill-opacity: 0.59;
  }

  .line {
    fill: none;
    stroke: var(--mode);
    stroke-width: 1.5px;
    vector-effect: non-scaling-stroke;
  }

  .handle {
    fill: var(--mode);
    stroke: var(--primary);
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }

  .rec-frame {
    fill: none;
    stroke: var(--accent);
  }

  .rec-contrast {
    fill: none;
    stroke: rgba(0, 0, 0, 0.55);
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }

  /* Theme.recBadgeBg pills: the mode badge, the size, the REC badge */
  .badge {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 28px;
    padding: 0 11px;
    border-radius: 14px;
    background: var(--rec-badge-bg);
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
  }

  .mode-badge {
    top: 12px;
    left: 12px;
    border: 1px solid var(--mode);
    color: var(--mode);
    font-weight: 600;
  }

  .size {
    translate: 0 calc(-100% - 10px);
    font-family: var(--font-mono);
  }

  .size.inside,
  .rec.inside {
    translate: 8px 8px;
  }

  .measure-tag {
    position: absolute;
    padding: 2px 8px;
    border-radius: 10px;
    background: var(--mode);
    color: #141418;
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    translate: -50% 8px;
    pointer-events: none;
  }

  .measure-tag.v {
    translate: 8px -50%;
  }

  .toast {
    gap: 6px;
    height: 34px;
    padding: 0 16px;
    border-radius: 17px;
    font-size: 14px;
    font-weight: 600;
    translate: -50% -50%;
  }

  .toast :global(svg) {
    color: var(--success);
  }

  .rec {
    gap: 6px;
    padding: 0 4px 0 10px;
    font-weight: 700;
    translate: 0 calc(-100% - 8px);
    pointer-events: auto;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--rec-dot);
  }

  .rec-time {
    font-variant-numeric: tabular-nums;
  }

  .rec-sep {
    width: 1px;
    height: 16px;
    background: rgba(255, 255, 255, 0.22);
  }

  .rec-stop {
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: background-color var(--dur-fast) var(--ease-out);
  }

  .rec-stop:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  .hint {
    position: absolute;
    top: 42px;
    left: 50%;
    width: max-content;
    max-width: calc(100% - 32px);
    padding: 9px 20px;
    border: 1px solid var(--divider);
    border-radius: 20px;
    background: color-mix(in srgb, var(--primary) 92%, transparent);
    color: var(--text);
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    translate: -50% 0;
    pointer-events: none;
  }

  .hint.off {
    visibility: hidden;
  }

  .toolbar {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5px;
    max-width: calc(100% - 16px);
    padding: 7px 12px;
    border: 1px solid var(--divider);
    border-radius: 27px;
    background: linear-gradient(color-mix(in srgb, var(--primary) 80%, #fff 20%), var(--primary));
    box-shadow: 0 5px 18px -4px var(--shadow-color);
    translate: var(--tx, 0) 0;
  }

  .sep {
    width: 1px;
    height: 28px;
    margin-inline: 2px;
    background: var(--divider);
  }

  @media (prefers-reduced-motion: no-preference) {
    .dot {
      animation: pulse 1.4s ease-in-out infinite;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.25;
    }
  }

  /* a phone-sized stage has no room for the bar, so it docks under it */
  @container (max-width: 640px) {
    .toolbar {
      position: static;
      max-width: none;
      margin-top: 12px;
      translate: none;
    }

    .tool-chip {
      width: 36px;
      height: 36px;
    }

    .hint {
      top: 48px;
      padding: 6px 12px;
      font-size: 11px;
    }

    .mode-badge {
      top: 8px;
      left: 8px;
    }
  }
</style>
