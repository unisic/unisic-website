<script lang="ts">
	import Topbar from '#lib/components/Topbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { MAX_BYTES, MAX_FILES, merge, parseStats, review, sample, utc, weeks, years, type Counter, type Days } from '#lib/stats.js';

	const description =
		'Drop the unisic.stats file Unisic keeps for an activity chart of your screenshots and a review of your year. Read in your browser, never uploaded.';

	const CELL = 11;
	const STEP = 14;
	const LEFT = 30;
	const TOP = 18;
	const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const num = new Intl.NumberFormat('en');
	const avg = new Intl.NumberFormat('en', { maximumFractionDigits: 1 });
	const day = new Intl.DateTimeFormat('en', { timeZone: 'UTC', month: 'long', day: 'numeric' });
	const fullDay = new Intl.DateTimeFormat('en', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

	let days = $state.raw<Days>(new Map());
	let loaded = $state.raw<{ name: string; counter: Counter }[]>([]);
	let year = $state(0);
	let error = $state('');
	let dragging = $state(false);
	let tip = $state<{ key: string; count: number; x: number; y: number } | null>(null);

	const allYears = $derived(years(days));
	const cols = $derived(weeks(days, year));
	const r = $derived(review(days, year));
	const months = $derived(
		cols.flatMap((col, i) => {
			const first = col.find((c) => c?.key.endsWith('-01'));
			return first ? [{ i, name: MONTHS[+first.key.slice(5, 7) - 1].slice(0, 3) }] : [];
		})
	);
	const change = $derived.by(() => {
		if (r.previous === null) return '';
		const pct = Math.round(((r.total - r.previous) / r.previous) * 100);
		if (pct === 0) return `The same as ${year - 1}`;
		return `${pct > 0 ? 'Up' : 'Down'} ${Math.abs(pct)}% on ${year - 1} (${num.format(r.previous)})`;
	});

	const shots = (n: number) => `${num.format(n)} ${n === 1 ? 'screenshot' : 'screenshots'}`;
	const date = (key: string) => day.format(utc(key));

	function show(d: Days) {
		days = d;
		year = years(d)[0];
	}

	// Each drop adds to the files already shown; the sample is replaced by the first real one.
	async function load(list: File[]) {
		if (!list.length) return;
		error = list.length > MAX_FILES - loaded.length ? `Up to ${MAX_FILES} files at a time. Start over to drop others.` : '';
		const added: typeof loaded = [];
		for (const file of list.slice(0, MAX_FILES - loaded.length)) {
			try {
				if (file.size > MAX_BYTES) throw new Error('This file is too large to be unisic.stats.');
				const counter = await parseStats(await file.text(), new Date());
				if (!counter.days.size) throw new Error('This file has no screenshots in it yet. Take one in Unisic and drop it again.');
				added.push({ name: file.name, counter });
			} catch (e) {
				error = `${file.name}: ${e instanceof Error ? e.message : 'This file could not be read.'}`;
			}
		}
		if (!added.length) return;
		loaded = [...loaded, ...added].slice(0, MAX_FILES);
		show(merge(loaded.map((f) => f.counter)));
	}

	function ondrop(e: DragEvent) {
		e.preventDefault();
		dragging = false;
		load([...(e.dataTransfer?.files ?? [])]);
	}

	function over(e: PointerEvent) {
		const t = e.target as SVGElement;
		const key = t.dataset?.key;
		if (!key) {
			tip = null;
			return;
		}
		const box = t.getBoundingClientRect();
		tip = { key, count: days.get(key) ?? 0, x: box.left + box.width / 2, y: box.top };
	}
</script>

<svelte:head>
	<title>Screenshot statistics - Unisic</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://unisic.app/stats/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://unisic.app/stats/" />
	<meta property="og:title" content="Unisic screenshot statistics" />
	<meta property="og:description" content={description} />
</svelte:head>

<svelte:window onscroll={() => (tip = null)} />

<Topbar />
<main id="main" tabindex="-1" class="wrap">
	<header class="intro">
		<p class="label">Statistics</p>
		<h1>Your screenshots, day by day.</h1>
		<p class="lede">
			Unisic counts the screenshots you take in a small file named <code>unisic.stats</code>: dates and numbers, no file
			names and no images. Drop it here for an activity chart and a review of your year.
		</p>
	</header>

	<section
		class="drop"
		class:dragging
		aria-labelledby="drop-title"
		ondragover={(e) => {
			e.preventDefault();
			dragging = true;
		}}
		ondragleave={() => (dragging = false)}
		{ondrop}
	>
		<h2 id="drop-title" class="sr-only">Open your statistics file</h2>
		<p class="hint">Drop <code>unisic.stats</code> here, or</p>
		<div class="actions">
			<input
				id="stats-file"
				class="sr-only"
				type="file"
				accept=".stats,application/json"
				multiple
				onchange={(e) => {
					const list = [...(e.currentTarget.files ?? [])];
					e.currentTarget.value = '';
					load(list);
				}}
			/>
			<label class="btn primary" for="stats-file">{loaded.length ? 'Add another file' : 'Choose the file'}</label>
			<button
				class="btn"
				type="button"
				onclick={() => {
					loaded = [];
					error = '';
					show(sample(new Date()));
				}}>Try sample data</button
			>
			{#if days.size}
				<button
					class="btn"
					type="button"
					onclick={() => {
						loaded = [];
						error = '';
						days = new Map();
					}}>Start over</button
				>
			{/if}
		</div>
		<p class="where">
			In Unisic 0.8.9 or newer, open Settings, General, Statistics and press the folder button: it shows the file. On
			Linux it lives at <code>~/.local/share/Unisic/unisic/unisic.stats</code>. Kept one from an older install or
			another computer? Drop it too: separate files add up, and copies of the same file count once.
		</p>
		<p class="private">
			<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
			The file is read by this page, in your browser. Nothing is uploaded and nothing is kept: close the tab and it is gone.
		</p>
		<p class="error" role="alert">{error}</p>
	</section>

	{#if days.size}
		<section class="year" aria-labelledby="year-title">
			<div class="head">
				<div>
					<p class="label">{loaded.length ? `From ${[...new Set(loaded.map((f) => f.name))].join(', ')}` : 'Sample data, made up'}</p>
					<h2 id="year-title">{shots(r.total)} in {year}</h2>
				</div>
				{#if allYears.length > 1}
					<div class="years" role="group" aria-label="Year">
						{#each allYears as y (y)}
							<button type="button" aria-pressed={y === year} onclick={() => (year = y)}>{y}</button>
						{/each}
					</div>
				{/if}
			</div>

			<div class="panel chart">
				<div class="scroll">
					<svg
						viewBox="0 0 {LEFT + cols.length * STEP} {TOP + 7 * STEP}"
						role="img"
						aria-label="Activity chart: {shots(r.total)} on {r.activeDays} days in {year}. The months table below has the same numbers."
						onpointerover={over}
						onpointerleave={() => (tip = null)}
					>
						{#each months as m (m.i)}
							<text class="axis" x={LEFT + m.i * STEP} y={TOP - 6}>{m.name}</text>
						{/each}
						{#each [0, 2, 4] as d (d)}
							<text class="axis" x="0" y={TOP + d * STEP + CELL - 1}>{WEEKDAYS[d].slice(0, 3)}</text>
						{/each}
						{#each cols as col, i (i)}
							{#each col as c, d (d)}
								{#if c}
									<rect
										class="l{c.level}"
										data-key={c.key}
										x={LEFT + i * STEP}
										y={TOP + d * STEP}
										width={CELL}
										height={CELL}
										rx="2"
									/>
								{/if}
							{/each}
						{/each}
					</svg>
				</div>
				<div class="legend" aria-hidden="true">
					Less
					{#each [0, 1, 2, 3, 4] as l (l)}<svg viewBox="0 0 11 11"><rect class="l{l}" width="11" height="11" rx="2" /></svg>{/each}
					More
				</div>
			</div>

			<ul class="wrapped">
				<li class="card big">
					<span class="label">Screenshots</span>
					<strong>{num.format(r.total)}</strong>
					<span class="d">{change || `Your first year in this file`}</span>
				</li>
				<li class="card">
					<span class="label">Active days</span>
					<strong>{num.format(r.activeDays)}</strong>
					<span class="d">{avg.format(r.perActiveDay)} a day when you took any</span>
				</li>
				{#if r.busiest}
					<li class="card">
						<span class="label">Busiest day</span>
						<strong>{date(r.busiest.key)}</strong>
						<span class="d">{shots(r.busiest.count)}</span>
					</li>
				{/if}
				{#if r.streak}
					<li class="card">
						<span class="label">Longest streak</span>
						<strong>{r.streak.length} {r.streak.length === 1 ? 'day' : 'days'}</strong>
						<span class="d">{r.streak.length === 1 ? date(r.streak.from) : `${date(r.streak.from)} to ${date(r.streak.to)}`}</span>
					</li>
				{/if}
				{#if r.bestMonth}
					<li class="card">
						<span class="label">Best month</span>
						<strong>{MONTHS[r.bestMonth.month]}</strong>
						<span class="d">{shots(r.bestMonth.count)}</span>
					</li>
				{/if}
				{#if r.weekday}
					<li class="card">
						<span class="label">Favorite weekday</span>
						<strong>{WEEKDAYS[r.weekday.day]}</strong>
						<span class="d">{Math.round((r.weekday.count / r.total) * 100)}% of the year's screenshots</span>
					</li>
				{/if}
			</ul>

			<details>
				<summary>Months as a table</summary>
				<table>
					<caption class="sr-only">Screenshots per month in {year}</caption>
					<thead><tr><th scope="col">Month</th><th scope="col">Screenshots</th></tr></thead>
					<tbody>
						{#each r.months as n, m (m)}
							<tr><th scope="row">{MONTHS[m]}</th><td>{num.format(n)}</td></tr>
						{/each}
					</tbody>
				</table>
			</details>
		</section>
	{/if}
</main>
<Footer />

{#if tip}
	<p class="tip" style:left="{tip.x}px" style:top="{tip.y}px">
		<strong>{shots(tip.count)}</strong>
		{fullDay.format(utc(tip.key))}
	</p>
{/if}

<style>
	main {
		display: grid;
		gap: var(--s7);
		padding-top: calc(60px + var(--s7));
		padding-bottom: var(--s9);
	}
	.intro {
		display: grid;
		gap: var(--s4);
	}
	h1 {
		font-size: var(--t-title);
		text-wrap: balance;
	}
	.lede {
		max-width: 60ch;
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}
	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.drop {
		display: grid;
		gap: var(--s3);
		justify-items: start;
		padding: var(--s6);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		transition: box-shadow 150ms ease;
	}
	.drop.dragging {
		box-shadow: inset 0 0 0 2px var(--accent);
	}
	.hint {
		font-weight: 600;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s3);
	}
	input:focus-visible + label {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}
	.where,
	.private {
		max-width: 64ch;
		font-size: var(--t-small);
		color: var(--muted);
		text-wrap: pretty;
	}
	.private {
		display: flex;
		gap: var(--s2);
		align-items: start;
	}
	.private .icon {
		margin-top: 1px;
		color: var(--accent);
	}
	.error {
		color: var(--danger);
		font-size: var(--t-small);
		font-weight: 600;
	}
	.error:empty {
		display: none;
	}

	.year {
		display: grid;
		gap: var(--s5);
	}
	.head {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s4);
		align-items: end;
		justify-content: space-between;
	}
	h2 {
		font-size: var(--t-h3);
	}
	.years {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s1);
		padding: var(--s1);
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.years button {
		min-height: 36px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r1);
		background: transparent;
		color: var(--muted);
		font: inherit;
		font-weight: 600;
		font-size: var(--t-small);
		font-variant-numeric: tabular-nums;
		cursor: pointer;
		transition:
			background-color 150ms ease,
			color 150ms ease;
	}
	.years button[aria-pressed='true'] {
		background: var(--accent);
		color: var(--on-accent);
	}
	.years button:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.chart {
		display: grid;
		gap: var(--s3);
		padding: var(--s5);
	}
	.scroll {
		overflow-x: auto;
		scrollbar-width: thin;
	}
	.scroll svg {
		display: block;
		width: 100%;
		min-width: 640px;
	}
	.axis {
		fill: var(--muted);
		font-size: 9px;
	}
	.l0 {
		fill: color-mix(in oklab, var(--text) 9%, var(--surface));
	}
	.l1 {
		fill: color-mix(in oklab, var(--accent) 32%, var(--surface));
	}
	.l2 {
		fill: color-mix(in oklab, var(--accent) 55%, var(--surface));
	}
	.l3 {
		fill: color-mix(in oklab, var(--accent) 78%, var(--surface));
	}
	.l4 {
		fill: var(--accent);
	}
	.legend {
		display: flex;
		gap: 3px;
		align-items: center;
		justify-self: end;
		font-size: var(--t-label);
		color: var(--muted);
	}
	.legend svg {
		width: 11px;
		height: 11px;
	}
	.legend svg:first-of-type {
		margin-left: var(--s1);
	}
	.legend svg:last-of-type {
		margin-right: var(--s1);
	}

	.wrapped {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.card {
		display: grid;
		align-content: start;
		gap: var(--s1);
		padding: var(--s4) var(--s5) var(--s5);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.card strong {
		font-size: var(--t-h3);
		font-weight: 650;
		font-variant-numeric: tabular-nums;
		text-wrap: balance;
	}
	.card.big {
		background: color-mix(in oklab, var(--accent) 14%, var(--surface));
	}
	.card.big strong {
		font-size: var(--t-h2);
		color: var(--accent);
	}
	.d {
		font-size: var(--t-small);
		color: var(--muted);
		text-wrap: pretty;
	}

	summary {
		cursor: pointer;
		font-weight: 600;
		font-size: var(--t-small);
		color: var(--muted);
	}
	summary:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}
	table {
		margin-top: var(--s3);
		border-collapse: collapse;
		font-size: var(--t-small);
		font-variant-numeric: tabular-nums;
	}
	th,
	td {
		padding: var(--s1) var(--s5) var(--s1) 0;
		text-align: left;
		border-bottom: 1px solid var(--line);
	}
	td {
		text-align: right;
	}

	.tip {
		position: fixed;
		z-index: var(--z-toast);
		display: grid;
		padding: var(--s2) var(--s3);
		border-radius: var(--r2);
		background: var(--surface-hi);
		box-shadow:
			inset 0 0 0 1px var(--line),
			0 8px 24px -8px rgb(0 0 0 / 0.5);
		font-size: var(--t-small);
		color: var(--muted);
		white-space: nowrap;
		pointer-events: none;
		transform: translate(-50%, calc(-100% - 6px));
	}
	.tip strong {
		color: var(--text);
	}
</style>
