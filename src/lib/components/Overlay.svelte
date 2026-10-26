<script lang="ts">
	import { onMount } from 'svelte';
	import { ui, reduced } from '#lib/ui.svelte.js';

	type Tool =
		| 'select'
		| 'pen'
		| 'line'
		| 'arrow'
		| 'measure'
		| 'rect'
		| 'ellipse'
		| 'highlight'
		| 'blur'
		| 'step'
		| 'erase';
	type Rect = { x: number; y: number; w: number; h: number };
	type Shape = {
		id: number;
		kind: Exclude<Tool, 'select'>;
		color: string;
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		/** Pen path data and its point count. */
		d?: string;
		n?: number;
		draw?: boolean;
		/** The smart eraser's patch, as an image. */
		fill?: string;
	};
	type Drag =
		| { type: 'move' | 'new' | 'resize'; ox: number; oy: number; start: Rect; edge: string }
		| { type: 'draw' };

	const TOOLS: { id: Tool; key: string; label: string; d: string }[] = [
		{ id: 'select', key: 'V', label: 'Select', d: 'M6 3l12 9-5.5 1.2L10 19z' },
		{ id: 'pen', key: 'P', label: 'Pen', d: 'M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3' },
		{ id: 'line', key: 'L', label: 'Line', d: 'M5 19L19 5' },
		{ id: 'arrow', key: 'A', label: 'Arrow', d: 'M5 19L19 5M10 5h9v9' },
		{ id: 'measure', key: 'M', label: 'Measure', d: 'M3 17L17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2' },
		{ id: 'rect', key: 'R', label: 'Rectangle', d: 'M4 6h16v12H4z' },
		{ id: 'ellipse', key: 'O', label: 'Ellipse', d: 'M3 12a9 6 0 1 0 18 0a9 6 0 1 0-18 0' },
		{ id: 'highlight', key: 'H', label: 'Highlight', d: 'M8 15l7-9 4 3-7 9H8zM4 21h16' },
		{ id: 'blur', key: 'B', label: 'Blur', d: 'M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z' },
		{ id: 'step', key: 'N', label: 'Step number', d: 'M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0M11 9l2-1v8' },
		{ id: 'erase', key: 'E', label: 'Smart eraser', d: 'M4 15l9-9 6 6-7 7H8zM14 20h6' }
	];
	const COLORS: [string, string][] = [
		['#FF4757', 'Red'],
		['#FFD84D', 'Yellow'],
		['#2ED573', 'Green'],
		['#1E90FF', 'Blue'],
		['#C8ACD6', 'Lavender'],
		['#FFFFFF', 'White']
	];
	const COMMAND = 'unisic --region';
	const TASKBAR = 40;
	const MAX_SHAPES = 60;
	const MAX_POINTS = 2000;
	const MAX_HISTORY = 40;
	const MIN = 24;
	// The app caps its patch at 192 samples a side. The patch is smooth, so 64 upscaled looks the
	// same here at a ninth of the work.
	const ERASE_MAX = 64;

	let stage: HTMLDivElement;
	let overlay = $state<HTMLDivElement>();
	let shot: HTMLDivElement;
	let desk: HTMLDivElement;
	let headline: HTMLParagraphElement;
	let mark: HTMLSpanElement;
	let vline = $state<HTMLDivElement>();
	let hline = $state<HTMLDivElement>();
	let coord = $state<HTMLSpanElement>();

	let W = $state(0);
	let H = $state(0);
	let sel = $state<Rect>({ x: 0, y: 0, w: 0, h: 0 });
	let ready = $state(false);
	let tool = $state<Tool>('select');
	let color = $state(COLORS[0][0]);
	let shapes = $state.raw<Shape[]>([]);
	let past = $state.raw<Shape[][]>([]);
	let draft = $state.raw<Shape | null>(null);
	let flash = $state(0);
	let hovering = $state(false);
	let now = $state<Date | null>(null);
	let drag: Drag | null = null;
	let origin = { left: 0, top: 0 };
	let touched = false;
	let uid = 0;
	let captures = 0;
	let clean: ImageData | null = null;
	let canvas: HTMLCanvasElement | undefined;

	const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), Math.max(lo, hi));
	const norm = (x1: number, y1: number, x2: number, y2: number): Rect => ({
		x: Math.min(x1, x2),
		y: Math.min(y1, y2),
		w: Math.abs(x2 - x1),
		h: Math.abs(y2 - y1)
	});
	const fit = (r: Rect): Rect => {
		const w = Math.min(r.w, W);
		const h = Math.min(r.h, H);
		return { x: clamp(r.x, 0, W - w), y: clamp(r.y, 0, H - h), w, h };
	};
	const box = (s: Shape): Rect =>
		s.kind === 'step' ? { x: s.x1 - 14, y: s.y1 - 14, w: 28, h: 28 } : norm(s.x1, s.y1, s.x2, s.y2);

	function relative(el: Element): Rect {
		const s = stage.getBoundingClientRect();
		const r = el.getBoundingClientRect();
		return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
	}

	// The capture as the eraser sees it: every surface on the desk, without its text and icons.
	// The app samples the real pixels and outvotes the text with medians. A page can't read its
	// own pixels, so the surfaces are painted into a canvas instead and the text stays out.
	function surfaces(): ImageData | null {
		const c = document.createElement('canvas');
		c.width = Math.max(1, Math.round(W));
		c.height = Math.max(1, Math.round(H));
		const g = c.getContext('2d', { willReadFrequently: true });
		if (!g) return null;
		for (const el of [desk, ...desk.querySelectorAll('*')]) {
			const css = getComputedStyle(el);
			const r = relative(el);
			if (css.backgroundColor === 'rgba(0, 0, 0, 0)' || !r.w || !r.h) continue;
			g.fillStyle = css.backgroundColor;
			g.beginPath();
			g.roundRect(r.x, r.y, r.w, r.h, Math.min(parseFloat(css.borderTopLeftRadius) || 0, r.w / 2, r.h / 2));
			g.fill();
		}
		return g.getImageData(0, 0, c.width, c.height);
	}

	// AnnotationCanvas::smartErasePatch: sample just outside the rectangle, vote out whatever
	// isn't background, then fill with a Coons patch through the four edges.
	function patch(img: ImageData, b: Rect, fast: boolean): string {
		type RGB = number[];
		const { data, width: iw, height: ih } = img;
		const x0 = Math.floor(b.x);
		const y0 = Math.floor(b.y);
		const x1 = Math.max(x0, Math.ceil(b.x + b.w) - 1);
		const y1 = Math.max(y0, Math.ceil(b.y + b.h) - 1);
		const rw = x1 - x0 + 1;
		const rh = y1 - y0 + 1;
		const gw = clamp(rw, 2, ERASE_MAX);
		const gh = clamp(rh, 2, ERASE_MAX);
		const median = (v: number[]) => v.sort((p, q) => p - q)[v.length >> 1];

		// One sample is the per-channel median of a window 3 rows out and 5 along the edge.
		const edge = (x: number, y: number, nx: number, ny: number): RGB => {
			const ch: number[][] = [[], [], []];
			for (let d = 1; d <= (fast ? 1 : 3); d++)
				for (let t = -2; t <= 2; t++) {
					const sx = clamp(x + nx * d + (nx ? 0 : t), 0, iw - 1);
					const sy = clamp(y + ny * d + (ny ? 0 : t), 0, ih - 1);
					for (let k = 0; k < 3; k++) ch[k].push(data[(sy * iw + sx) * 4 + k]);
				}
			return ch.map(median);
		};
		const top: RGB[] = [];
		const bottom: RGB[] = [];
		const left: RGB[] = [];
		const right: RGB[] = [];
		for (let i = 0; i < gw; i++) {
			const x = x0 + Math.floor(((i + 0.5) * rw) / gw);
			top.push(edge(x, y0, 0, -1));
			bottom.push(edge(x, y1, 0, 1));
		}
		for (let j = 0; j < gh; j++) {
			const y = y0 + Math.floor(((j + 0.5) * rh) / gh);
			left.push(edge(x0, y, -1, 0));
			right.push(edge(x1, y, 1, 0));
		}

		// The ring is mostly background: samples far from its median are the object being erased,
		// rebuilt from the inliers on either side of them.
		const strips = [top, bottom, left, right];
		const ring = strips.flat();
		const med = [0, 1, 2].map((k) => median(ring.map((c) => c[k])));
		const dev = (c: RGB) => Math.max(...c.map((v, k) => Math.abs(v - med[k])));
		const thr = Math.max(24, 3 * 1.4826 * median(ring.map(dev)));
		for (const a of strips) {
			const ok = a.map((c) => dev(c) <= thr);
			if (!ok.includes(true)) {
				a.fill(med);
				continue;
			}
			for (let i = 0; i < a.length; i++) {
				if (ok[i]) continue;
				let end = i;
				while (end < a.length && !ok[end]) end++;
				const lo = i - 1;
				const hi = end < a.length ? end : -1;
				for (let g = i; g < end; g++) {
					const t = (g - lo) / (hi - lo);
					a[g] = lo < 0 ? a[hi] : hi < 0 ? a[lo] : a[lo].map((v, k) => Math.round((1 - t) * v + t * a[hi][k]));
				}
				i = end;
			}
		}

		// Coons patch, clamped to the four samples each pixel interpolates so it can't overshoot.
		const avg = (p: RGB, q: RGB) => p.map((v, k) => (v + q[k]) >> 1);
		const c00 = avg(top[0], left[0]);
		const c10 = avg(top[gw - 1], right[0]);
		const c01 = avg(bottom[0], left[gh - 1]);
		const c11 = avg(bottom[gw - 1], right[gh - 1]);
		const out = new ImageData(gw, gh);
		for (let j = 0; j < gh; j++) {
			const v = (j + 0.5) / gh;
			for (let i = 0; i < gw; i++) {
				const u = (i + 0.5) / gw;
				const o = (j * gw + i) * 4;
				for (let k = 0; k < 3; k++) {
					const l = left[j][k];
					const r = right[j][k];
					const t = top[i][k];
					const d = bottom[i][k];
					const bi = (1 - u) * (1 - v) * c00[k] + u * (1 - v) * c10[k] + (1 - u) * v * c01[k] + u * v * c11[k];
					const value = Math.round((1 - u) * l + u * r + (1 - v) * t + v * d - bi);
					out.data[o + k] = clamp(value, Math.min(l, r, t, d), Math.max(l, r, t, d));
				}
				out.data[o + 3] = 255;
			}
		}
		canvas ??= document.createElement('canvas');
		canvas.width = gw;
		canvas.height = gh;
		canvas.getContext('2d')?.putImageData(out, 0, 0);
		return canvas.toDataURL();
	}

	function home(): Rect {
		const r = relative(headline);
		const pad = 32;
		return fit({ x: r.x - pad, y: r.y - pad, w: r.w + pad * 2, h: r.h + pad * 2 });
	}

	function demo(draw: boolean): Shape[] {
		const m = relative(mark);
		const tipX = m.x + m.w + 10;
		const tipY = m.y + m.h * 0.7;
		// The step marker sits under the highlight, inside the frame's padding, so it covers no letters.
		const stepY = m.y + m.h * 0.92 + 16;
		return [
			{ id: ++uid, kind: 'highlight', color: '#FFD84D', x1: m.x - 6, y1: m.y + m.h * 0.2, x2: m.x + m.w + 4, y2: m.y + m.h * 0.92, draw },
			{ id: ++uid, kind: 'arrow', color: '#FF4757', x1: clamp(tipX + 120, 0, W - 12), y1: clamp(tipY + 84, 0, H - 72), x2: tipX, y2: tipY, draw },
			{ id: ++uid, kind: 'step', color: '#FF4757', x1: m.x + 14, y1: stepY, x2: m.x + 14, y2: stepY, n: 1, draw }
		];
	}

	function commit(next: Shape[]) {
		past = [...past, shapes].slice(-MAX_HISTORY);
		shapes = next.slice(-MAX_SHAPES);
	}

	function undo() {
		if (!past.length) return;
		shapes = past[past.length - 1];
		past = past.slice(0, -1);
	}

	function reset() {
		touched = false;
		sel = home();
		if (shapes.length) commit([]);
	}

	function capture() {
		if (sel.w < MIN || sel.h < MIN) return;
		const node = shot.cloneNode(true) as HTMLElement;
		ui.add({ id: ++captures, node, ...sel, sw: W, sh: H });
		if (!reduced.current) flash++;
	}

	function local(e: PointerEvent) {
		return { x: clamp(e.clientX - origin.left, 0, W), y: clamp(e.clientY - origin.top, 0, H) };
	}

	function down(e: PointerEvent) {
		if (drag || e.button !== 0 || !overlay) return;
		const target = e.target as HTMLElement;
		if (target.closest('.tools')) return;
		e.preventDefault();
		overlay.focus({ preventScroll: true });
		const r = stage.getBoundingClientRect();
		origin = { left: r.left, top: r.top };
		const p = local(e);
		const edge = target.closest<HTMLElement>('[data-edge]')?.dataset.edge;
		touched = true;

		if (edge) drag = { type: 'resize', ox: p.x, oy: p.y, start: sel, edge };
		else if (tool === 'select') {
			const inside = p.x >= sel.x && p.x <= sel.x + sel.w && p.y >= sel.y && p.y <= sel.y + sel.h;
			drag = { type: inside ? 'move' : 'new', ox: p.x, oy: p.y, start: sel, edge: '' };
		} else if (tool === 'step') {
			const n = shapes.filter((s) => s.kind === 'step').length + 1;
			commit([...shapes, { id: ++uid, kind: 'step', color, x1: p.x, y1: p.y, x2: p.x, y2: p.y, n }]);
			return;
		} else {
			if (tool === 'erase') clean = surfaces();
			drag = { type: 'draw' };
			draft = { id: ++uid, kind: tool, color, x1: p.x, y1: p.y, x2: p.x, y2: p.y, d: `M${p.x} ${p.y}`, n: 1 };
		}
		overlay.setPointerCapture(e.pointerId);
	}

	function move(e: PointerEvent) {
		if (e.pointerType === 'mouse') cross(e);
		if (!drag) return;
		const p = local(e);
		if (drag.type === 'move') {
			const s = drag.start;
			sel = { ...s, x: clamp(s.x + p.x - drag.ox, 0, W - s.w), y: clamp(s.y + p.y - drag.oy, 0, H - s.h) };
		} else if (drag.type === 'new') {
			sel = norm(drag.ox, drag.oy, p.x, p.y);
		} else if (drag.type === 'resize') {
			const s = drag.start;
			sel = norm(
				drag.edge.includes('w') ? p.x : s.x,
				drag.edge.includes('n') ? p.y : s.y,
				drag.edge.includes('e') ? p.x : s.x + s.w,
				drag.edge.includes('s') ? p.y : s.y + s.h
			);
		} else if (draft) {
			if (draft.kind !== 'pen') {
				const next = { ...draft, x2: p.x, y2: p.y };
				if (next.kind === 'erase' && clean) next.fill = patch(clean, box(next), true);
				draft = next;
			} else if ((draft.n ?? 0) < MAX_POINTS)
				draft = {
					...draft,
					d: `${draft.d}L${p.x} ${p.y}`,
					n: (draft.n ?? 0) + 1,
					x1: Math.min(draft.x1, p.x),
					y1: Math.min(draft.y1, p.y),
					x2: Math.max(draft.x2, p.x),
					y2: Math.max(draft.y2, p.y)
				};
		}
	}

	function up() {
		if (!drag) return;
		if ((drag.type === 'new' || drag.type === 'resize') && (sel.w < MIN || sel.h < MIN)) sel = drag.start;
		if (draft) {
			const big = draft.kind === 'pen' ? (draft.n ?? 0) > 2 : Math.hypot(draft.x2 - draft.x1, draft.y2 - draft.y1) > 4;
			if (big) commit([...shapes, draft.kind === 'erase' && clean ? { ...draft, fill: patch(clean, box(draft), false) } : draft]);
			draft = null;
			clean = null;
		}
		drag = null;
	}

	function key(e: KeyboardEvent) {
		const onButton = (e.target as HTMLElement).closest('button');
		const mod = e.ctrlKey || e.metaKey;
		if (mod && e.key.toLowerCase() === 'z') {
			e.preventDefault();
			undo();
			return;
		}
		if (mod || e.altKey) return;
		if (e.key === 'Enter' && !onButton) {
			e.preventDefault();
			capture();
		} else if (e.key === 'Escape') {
			reset();
		} else if (e.key.startsWith('Arrow') && !onButton) {
			e.preventDefault();
			const k = e.shiftKey ? 10 : 1;
			const dx = e.key === 'ArrowLeft' ? -k : e.key === 'ArrowRight' ? k : 0;
			const dy = e.key === 'ArrowUp' ? -k : e.key === 'ArrowDown' ? k : 0;
			touched = true;
			sel = fit({ ...sel, x: sel.x + dx, y: sel.y + dy });
		} else {
			const t = TOOLS.find((t) => t.key === e.key.toUpperCase());
			if (t) tool = t.id;
		}
	}

	let crossFrame = 0;
	let cx = 0;
	let cy = 0;
	function cross(e: PointerEvent) {
		cx = e.clientX;
		cy = e.clientY;
		if (!crossFrame) crossFrame = requestAnimationFrame(paintCross);
	}
	function paintCross() {
		crossFrame = 0;
		if (!vline || !hline || !coord) return;
		const r = stage.getBoundingClientRect();
		const x = Math.round(cx - r.left);
		const y = Math.round(cy - r.top);
		// The label flips to the other side of the cursor near the right edge and above the taskbar.
		const lx = x + 14 + coord.offsetWidth > r.width ? x - 14 - coord.offsetWidth : x + 14;
		const ly = y + 14 + coord.offsetHeight > r.height - TASKBAR ? y - 14 - coord.offsetHeight : y + 14;
		vline.style.transform = `translateX(${x}px)`;
		hline.style.transform = `translateY(${y}px)`;
		coord.style.transform = `translate(${lx}px, ${ly}px)`;
		coord.textContent = `${x}, ${y}`;
	}

	function head(s: Shape) {
		const a = Math.atan2(s.y2 - s.y1, s.x2 - s.x1);
		const L = 18;
		return [a - 0.45, a + 0.45].reduce(
			(pts, b) => `${pts} ${s.x2 - L * Math.cos(b)},${s.y2 - L * Math.sin(b)}`,
			`${s.x2},${s.y2}`
		);
	}

	onMount(() => {
		let frame = 0;
		let gone = false;
		const timers: ReturnType<typeof setTimeout>[] = [];
		const ro = new ResizeObserver(() => {
			if (stage.clientWidth === W && stage.clientHeight === H) return;
			W = stage.clientWidth;
			H = stage.clientHeight;
			if (!ready) return;
			if (touched) sel = fit(sel);
			else {
				sel = home();
				shapes = demo(false);
				past = [];
			}
		});

		// A patch is baked from the colours around it, so a theme switch bakes every one again.
		const themes = new MutationObserver(() => {
			const img = surfaces();
			if (!img) return;
			const fills = new Map<number, string>();
			const again = (list: Shape[]) =>
				list.map((s) => {
					if (s.kind !== 'erase') return s;
					if (!fills.has(s.id)) fills.set(s.id, patch(img, box(s), false));
					return { ...s, fill: fills.get(s.id) };
				});
			shapes = again(shapes);
			past = past.map(again);
		});
		themes.observe(document.documentElement, { attributeFilter: ['data-theme'] });

		now = new Date();
		const clock = setInterval(() => (now = new Date()), 10_000);

		document.fonts.ready.then(() => {
			if (gone) return;
			W = stage.clientWidth;
			H = stage.clientHeight;
			ro.observe(stage);
			const target = home();
			ready = true;
			if (reduced.current) {
				sel = target;
				shapes = demo(false);
				return;
			}
			const t0 = performance.now();
			const mx = target.x + target.w / 2;
			const my = target.y + target.h / 2;
			const grow = (t: number) => {
				if (touched) return;
				const k = Math.min(1, (t - t0) / 900);
				const e = 1 - (1 - k) ** 4;
				sel = { x: mx - (target.w * e) / 2, y: my - (target.h * e) / 2, w: target.w * e, h: target.h * e };
				if (k < 1) frame = requestAnimationFrame(grow);
				else
					demo(true).forEach((s, i) =>
						timers.push(setTimeout(() => !touched && commit([...shapes, s]), 200 + i * 420))
					);
			};
			frame = requestAnimationFrame(grow);
		});

		return () => {
			gone = true;
			ro.disconnect();
			themes.disconnect();
			clearInterval(clock);
			cancelAnimationFrame(frame);
			cancelAnimationFrame(crossFrame);
			timers.forEach(clearTimeout);
		};
	});

	const time = $derived(now?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) ?? '');
	const shown = $derived(draft ? [...shapes, draft] : shapes);
</script>

<p id="overlay-hint" class="hint">
	Drag the frame or its handles, pick a tool and draw inside it, then press Capture.
	<span class="keys">Arrow keys move the frame, Enter captures, Esc resets.</span>
	<span class="now">Tool: <strong>{TOOLS.find((t) => t.id === tool)?.label}</strong></span>
</p>

<div class="stage" bind:this={stage}>
	<div class="shot" bind:this={shot}>
		<div class="desk" bind:this={desk}>
			<p class="headline" bind:this={headline}>Select it. Draw on it. Press <span class="mark" bind:this={mark}>Enter.</span></p>

			<div class="win" aria-hidden="true">
				<div class="win-bar"><i></i><i></i><i></i><span>~ fish</span></div>
				<p class="win-body"><span class="prompt">&gt;</span> {COMMAND}<span class="caret"></span></p>
			</div>

			<div class="taskbar" aria-hidden="true">
				<span class="app">
					<svg viewBox="0 0 24 24" class="logo"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="5.5" /></svg>
					Unisic
				</span>
				<span class="tray">
					<svg class="icon" viewBox="0 0 24 24"><path d="M4 10h3l5-4v12l-5-4H4zM16 9a4 4 0 0 1 0 6" /></svg>
					<svg class="icon" viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0M12 19.5h.01" /></svg>
					<span class="time">{time}</span>
				</span>
			</div>
		</div>

		<div class="blurs">
			{#each shown as s (s.id)}
				{#if s.kind === 'blur'}
					{@const b = box(s)}
					<div class="blur" style:transform="translate({b.x}px, {b.y}px)" style:width="{b.w}px" style:height="{b.h}px"></div>
				{/if}
			{/each}
		</div>

		<svg class="ink" aria-hidden="true">
			{#each shown as s (s.id)}
				{#if s.kind === 'pen'}
					<path d={s.d} stroke={s.color} />
				{:else if s.kind === 'line'}
					<line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={s.color} />
				{:else if s.kind === 'arrow'}
					<line class:draw={s.draw} pathLength={s.draw ? 1 : undefined} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={s.color} />
					<polygon class:pop={s.draw} style:--d="380ms" points={head(s)} fill={s.color} stroke={s.color} />
				{:else if s.kind === 'measure'}
					{@const len = Math.round(Math.hypot(s.x2 - s.x1, s.y2 - s.y1))}
					<line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={s.color} stroke-dasharray="2 6" />
					<circle cx={s.x1} cy={s.y1} r="4" fill={s.color} />
					<circle cx={s.x2} cy={s.y2} r="4" fill={s.color} />
					<text class="len" x={(s.x1 + s.x2) / 2 + 10} y={(s.y1 + s.y2) / 2 - 10}>{len} px</text>
				{:else if s.kind === 'rect'}
					{@const b = box(s)}
					<rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3" stroke={s.color} />
				{:else if s.kind === 'ellipse'}
					{@const b = box(s)}
					<ellipse cx={b.x + b.w / 2} cy={b.y + b.h / 2} rx={b.w / 2} ry={b.h / 2} stroke={s.color} />
				{:else if s.kind === 'highlight'}
					{@const b = box(s)}
					<rect class:sweep={s.draw} class="hl" x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill={s.color} />
				{:else if s.kind === 'step'}
					<g class:pop={s.draw}>
						<circle cx={s.x1} cy={s.y1} r="14" fill={s.color} />
						<text class="num" x={s.x1} y={s.y1}>{s.n}</text>
					</g>
				{:else if s.kind === 'erase' && s.fill}
					{@const b = box(s)}
					<image href={s.fill} x={b.x} y={b.y} width={b.w} height={b.h} preserveAspectRatio="none" />
				{/if}
				{#if (s.kind === 'blur' || s.kind === 'erase') && s === draft}
					{@const b = box(s)}
					<rect x={b.x} y={b.y} width={b.w} height={b.h} stroke={s.color} stroke-dasharray="6 6" stroke-width="1.5" />
				{/if}
			{/each}
		</svg>
	</div>

	{#if ready}
		<!-- role="application" is a focusable widget that owns its keys; the lint counts it as static -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
		<div
			class="overlay"
			bind:this={overlay}
			role="application"
			aria-label="Capture overlay demo"
			aria-describedby="overlay-hint"
			tabindex="0"
			data-tool={tool}
			onpointerdown={down}
			onpointermove={move}
			onpointerup={up}
			onpointercancel={up}
			onpointerenter={(e) => (hovering = e.pointerType === 'mouse')}
			onpointerleave={() => (hovering = false)}
			onkeydown={key}
		>
			<div class="cross" class:on={hovering} aria-hidden="true">
				<div class="v" bind:this={vline}></div>
				<div class="h" bind:this={hline}></div>
				<span class="xy" bind:this={coord}></span>
			</div>

			<div
				class="frame"
				style:transform="translate({sel.x}px, {sel.y}px)"
				style:width="{sel.w}px"
				style:height="{sel.h}px"
			>
				<span class="size" class:inside={sel.y < 30}>{Math.round(sel.w)} × {Math.round(sel.h)}</span>
				{#each ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'] as edge (edge)}
					<span class="handle {edge}" data-edge={edge}></span>
				{/each}
				{#key flash}
					{#if flash}<span class="flash"></span>{/if}
				{/key}
			</div>

			<div class="tools">
				<div class="group" role="group" aria-label="Tools">
					{#each TOOLS as t (t.id)}
						<button type="button" class="tool" aria-pressed={tool === t.id} title="{t.label} ({t.key})" onclick={() => (tool = t.id)}>
							<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d={t.d} /></svg>
							<span class="sr-only">{t.label}</span>
						</button>
					{/each}
				</div>
				<div class="group" role="group" aria-label="Color">
					{#each COLORS as [c, name] (c)}
						<button type="button" class="swatch" aria-pressed={color === c} aria-label={name} style:--c={c} onclick={() => (color = c)}></button>
					{/each}
				</div>
				<div class="group">
					<button type="button" class="tool" title="Undo (Ctrl+Z)" disabled={!past.length} onclick={undo}>
						<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3" /></svg>
						<span class="sr-only">Undo</span>
					</button>
					<button type="button" class="shoot" onclick={capture}>
						Capture <kbd>Enter</kbd>
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.stage {
		position: relative;
		height: clamp(460px, 52vw, min(680px, 100svh - 96px));
		overflow: hidden;
		isolation: isolate;
		contain: layout paint;
		container-type: inline-size;
		border-radius: var(--r3);
		box-shadow:
			0 0 0 1px var(--line),
			0 24px 60px -30px rgb(0 0 0 / 0.6);
	}

	.shot,
	.desk {
		position: absolute;
		inset: 0;
	}

	.desk {
		display: grid;
		align-content: center;
		padding: var(--s6) clamp(var(--s4), 6cqi, var(--s9)) var(--s10);
		background: var(--deep);
	}

	.headline {
		justify-self: start;
		max-width: 12ch;
		font: 760 clamp(2.25rem, 7cqi, 5.5rem) / 0.88 var(--font-display);
		font-stretch: 76%;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}
	.mark {
		color: var(--accent);
		white-space: nowrap;
	}

	.win {
		display: none;
		position: absolute;
		right: clamp(var(--s5), 6vw, var(--s9));
		bottom: 128px;
		width: 380px;
		border-radius: var(--r2);
		background: color-mix(in oklab, var(--surface) 92%, transparent);
		box-shadow:
			0 0 0 1px var(--line),
			0 24px 60px -20px rgb(0 0 0 / 0.6);
		font-family: var(--font-mono);
		font-size: var(--t-small);
	}
	.win-bar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px var(--s3);
		border-bottom: 1px solid var(--line);
		color: var(--muted);
	}
	.win-bar i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--line-strong);
	}
	.win-bar span {
		margin-left: var(--s2);
	}
	.win-body {
		min-height: 5.5em;
		padding: var(--s3) var(--s4);
		white-space: pre-wrap;
		word-break: break-all;
	}
	.prompt {
		color: var(--success);
		user-select: none;
	}
	.caret {
		display: inline-block;
		width: 0.6em;
		height: 1.1em;
		margin-left: 2px;
		vertical-align: text-bottom;
		background: var(--accent);
	}
	@container (min-width: 1000px) {
		.win {
			display: block;
		}
	}

	.taskbar {
		position: absolute;
		inset: auto 0 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		padding: 0 var(--s4);
		background: color-mix(in oklab, var(--deep) 78%, transparent);
		border-top: 1px solid var(--line);
		font-size: var(--t-small);
	}
	.app,
	.tray {
		display: flex;
		align-items: center;
		gap: var(--s2);
	}
	.app {
		padding: 4px var(--s3) 4px 6px;
		border-radius: var(--r1);
		background: color-mix(in oklab, var(--text) 8%, transparent);
	}
	.logo {
		width: 18px;
		height: 18px;
	}
	.logo rect {
		fill: var(--tertiary);
	}
	.logo circle {
		fill: none;
		stroke: var(--accent);
		stroke-width: 2.5;
	}
	.tray {
		gap: var(--s3);
		color: var(--muted);
	}
	.tray .icon {
		width: 16px;
		height: 16px;
	}
	.time {
		min-width: 5ch;
		color: var(--text);
		font-variant-numeric: tabular-nums;
	}

	.blurs,
	.ink {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.blur {
		position: absolute;
		left: 0;
		top: 0;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	.ink {
		overflow: visible;
		fill: none;
		stroke-width: 4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.hl {
		opacity: 0.38;
	}
	.num {
		fill: #fff;
		stroke: none;
		font: 700 15px/1 var(--font-display);
		text-anchor: middle;
		dominant-baseline: central;
	}
	.len {
		fill: #fff;
		stroke: rgb(0 0 0 / 0.6);
		stroke-width: 4;
		paint-order: stroke;
		font: 13px var(--font-mono);
	}
	@media (prefers-reduced-motion: no-preference) {
		.draw {
			stroke-dasharray: 1;
			stroke-dashoffset: 1;
			animation: draw 520ms var(--ease-out) forwards;
		}
		.pop {
			transform-box: fill-box;
			transform-origin: center;
			animation: pop 260ms var(--ease-out) var(--d, 0ms) both;
		}
		.sweep {
			transform-box: fill-box;
			transform-origin: left center;
			animation: sweep 420ms var(--ease-out) both;
		}
	}
	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes pop {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
	}
	@keyframes sweep {
		from {
			transform: scaleX(0.04);
		}
	}

	.overlay {
		position: absolute;
		inset: 0;
		z-index: var(--z-frame);
		cursor: crosshair;
		touch-action: pan-y;
		user-select: none;
		-webkit-user-select: none;
	}
	.overlay:not([data-tool='select']) {
		touch-action: none;
	}
	.overlay:focus-visible {
		outline-offset: -4px;
		border-radius: 0;
	}

	.cross {
		position: absolute;
		inset: 0;
		opacity: 0;
		pointer-events: none;
	}
	.cross.on {
		opacity: 1;
	}
	.cross .v,
	.cross .h {
		position: absolute;
		left: 0;
		top: 0;
		background: color-mix(in oklab, var(--mode) 55%, transparent);
	}
	.cross .v {
		width: 1px;
		height: 100%;
	}
	.cross .h {
		width: 100%;
		height: 1px;
	}
	.xy {
		position: absolute;
		left: 0;
		top: 0;
		padding: 2px 6px;
		border-radius: 4px;
		background: rgb(0 0 0 / 0.66);
		color: #fff;
		font: 12px var(--font-mono);
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	.frame {
		position: absolute;
		left: 0;
		top: 0;
		outline: 1.5px solid var(--mode);
		box-shadow: 0 0 0 100vmax var(--scrim);
		cursor: move;
		touch-action: none;
		transition: outline-color 300ms ease;
	}
	.overlay:not([data-tool='select']) .frame {
		cursor: crosshair;
	}
	.size {
		position: absolute;
		left: -1px;
		bottom: calc(100% + 6px);
		padding: 2px 7px;
		border-radius: 4px;
		background: var(--mode);
		color: var(--mode-ink);
		font: 12px/1.5 var(--font-mono);
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
		transition: background-color 300ms ease;
	}
	.size.inside {
		bottom: auto;
		top: 6px;
		left: auto;
		right: 6px;
	}
	.handle {
		position: absolute;
		width: 10px;
		height: 10px;
		margin: -5px 0 0 -5px;
		border-radius: 2px;
		background: var(--mode);
		box-shadow: 0 0 0 1.5px var(--deep);
		transition: background-color 300ms ease;
	}
	.handle::before {
		content: '';
		position: absolute;
		inset: -9px;
	}
	@media (pointer: coarse) {
		.handle::before {
			inset: -17px;
		}
	}
	.nw { left: 0; top: 0; cursor: nwse-resize; }
	.n { left: 50%; top: 0; cursor: ns-resize; }
	.ne { left: 100%; top: 0; cursor: nesw-resize; }
	.e { left: 100%; top: 50%; cursor: ew-resize; }
	.se { left: 100%; top: 100%; cursor: nwse-resize; }
	.s { left: 50%; top: 100%; cursor: ns-resize; }
	.sw { left: 0; top: 100%; cursor: nesw-resize; }
	.w { left: 0; top: 50%; cursor: ew-resize; }

	.flash {
		position: absolute;
		inset: 0;
		background: #fff;
		opacity: 0;
		pointer-events: none;
		animation: flash 420ms var(--ease-out);
	}
	@keyframes flash {
		from {
			opacity: 0.75;
		}
	}

	.tools {
		position: absolute;
		left: 50%;
		bottom: 56px;
		translate: -50% 0;
		display: flex;
		gap: var(--s1);
		max-width: calc(100% - 2 * var(--s4));
		padding: var(--s1);
		overflow-x: auto;
		overscroll-behavior-x: contain;
		scrollbar-width: none;
		border-radius: var(--r3);
		background: color-mix(in oklab, var(--surface) 94%, transparent);
		box-shadow:
			0 0 0 1px var(--line),
			0 16px 40px -12px rgb(0 0 0 / 0.55);
		cursor: default;
		touch-action: pan-x;
		z-index: var(--z-tools);
	}
	.group {
		display: flex;
		align-items: center;
		gap: 2px;
		flex: none;
	}
	.group + .group {
		padding-left: var(--s1);
		border-left: 1px solid var(--line);
	}
	.tool {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 0;
		border-radius: var(--r2);
		background: transparent;
		color: var(--muted);
		cursor: pointer;
		transition:
			transform 160ms var(--ease-out),
			background-color 150ms ease,
			color 150ms ease;
	}
	.tool:active:not(:disabled) {
		transform: scale(0.96);
	}
	.tool[aria-pressed='true'] {
		background: var(--mode);
		color: var(--mode-ink);
	}
	.tool:disabled {
		opacity: 0.4;
		cursor: default;
	}
	@media (hover: hover) and (pointer: fine) {
		.tool:not([aria-pressed='true']):not(:disabled):hover {
			background: color-mix(in oklab, var(--text) 10%, transparent);
			color: var(--text);
		}
	}
	.swatch {
		position: relative;
		width: 28px;
		height: 40px;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}
	.swatch::after {
		content: '';
		position: absolute;
		inset: 50% auto auto 50%;
		width: 18px;
		height: 18px;
		translate: -50% -50%;
		border-radius: 50%;
		background: var(--c);
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.25);
		transition: box-shadow 150ms ease;
	}
	.swatch[aria-pressed='true']::after {
		box-shadow:
			0 0 0 2px var(--surface),
			0 0 0 4px var(--c);
	}
	.shoot {
		display: flex;
		align-items: center;
		gap: var(--s2);
		height: 40px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r2);
		background: var(--accent);
		color: var(--on-accent);
		font: 600 var(--t-small) var(--font-display);
		cursor: pointer;
		white-space: nowrap;
		transition: transform 160ms var(--ease-out);
	}
	.shoot:active {
		transform: scale(0.96);
	}
	.shoot kbd {
		padding: 0 5px;
		border-radius: 4px;
		background: color-mix(in oklab, var(--on-accent) 14%, transparent);
		font-size: 11px;
	}
	@media (pointer: coarse) {
		.tool,
		.shoot,
		.swatch {
			height: 44px;
		}
		.tool {
			width: 44px;
		}
	}

	.hint {
		max-width: 72ch;
		margin-bottom: var(--s4);
		font-size: var(--t-small);
		color: var(--muted);
		text-wrap: pretty;
	}
	.now {
		white-space: nowrap;
	}
	.now strong {
		color: var(--text);
	}
	@media (pointer: coarse) {
		.keys {
			display: none;
		}
	}
	/* Phones: every tool, color and the Capture button stay on screen in three rows, and the stage
	   grows so the toolbar clears the headline. */
	@media (max-width: 759px) {
		.stage {
			height: 540px;
		}
	}
	@container (max-width: 719px) {
		.taskbar .app {
			display: none;
		}
		.desk {
			padding-bottom: 220px;
		}
		.tools {
			flex-wrap: wrap;
			justify-content: center;
			width: calc(100% - 2 * var(--s4));
			overflow: visible;
		}
		.group {
			flex-wrap: wrap;
			justify-content: center;
			flex: 0 1 auto;
		}
		.group:first-child {
			flex-basis: 100%;
		}
		.group:nth-child(2) {
			padding-left: 0;
			border-left: 0;
		}
		.shoot {
			padding: 0 var(--s3);
		}
		.shoot kbd {
			display: none;
		}
	}
</style>
