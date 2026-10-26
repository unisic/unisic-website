<script lang="ts">
	import Copy from './Copy.svelte';
	import { RELEASED, VERSION, WINDOWS_SETUP } from '#lib/release.js';
	import type { Dictionary } from '#lib/i18n/en.js';

	let { t }: { t: Dictionary } = $props();

	const INSTALL = 'curl -fsSL https://unisic.app/install.sh | bash';
	const PACKAGES = '/docs/installation/#install-from-a-distribution-repository';
	// The compositors named in docs/compositors.md.
	const DESKTOPS = ['KDE Plasma', 'GNOME', 'Hyprland', 'Sway', 'niri', 'Wayfire'];
	// Pen, arrow, rectangle, highlight, blur and step, drawn as in the overlay demo.
	const TOOLS = [
		'M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3',
		'M5 19L19 5M10 5h9v9',
		'M4 6h16v12H4z',
		'M8 15l7-9 4 3-7 9H8zM4 21h16',
		'M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z',
		'M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0M11 9l2-1v8'
	];

	// A Windows visitor gets the installer, not a shell line.
	let windows = $state(false);
	$effect(() => {
		windows = /Windows/.test(navigator.userAgent);
	});
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="inner wrap">
		<div class="copy">
			<p class="kicker">{t.hero.kicker}</p>
			<h1 id="hero-title">{t.hero.title} <span class="mark">{t.hero.titleMark}</span></h1>
			<p class="lede">{t.hero.lede}</p>
			<div class="desks">
				<p class="label">{t.hero.runsOn}</p>
				<ul>
					{#each DESKTOPS as d (d)}<li>{d}</li>{/each}
					<li><a href="/docs/compositors/">{t.hero.more}</a></li>
				</ul>
			</div>
		</div>

		<figure class="shot">
			<img class="uni" src="/img/uni.webp" alt="" width="376" height="568" />
			<div class="screen">
				<img
					class="app"
					src="/img/capture.webp"
					width="1060"
					height="700"
					fetchpriority="high"
					alt={t.hero.alt}
				/>
				<!-- The Region card as the overlay frames it, in the screenshot's own pixels. -->
				<div class="sel" aria-hidden="true">
					<span class="size">250 × 150</span>
					{#each ['nw', 'ne', 'se', 'sw'] as corner (corner)}<i class={corner}></i>{/each}
				</div>
				<div class="tools" aria-hidden="true">
					{#each TOOLS as d, i (d)}
						<span class="tool" class:on={i === 1}><svg class="icon" viewBox="0 0 24 24"><path {d} /></svg></span>
					{/each}
				</div>
			</div>
		</figure>

		<div class="term panel">
			{#if windows}
				<p class="bar"><i></i><i></i><i></i><span>{t.hero.windows}</span></p>
				<div class="body">
					<a class="btn primary get" href={WINDOWS_SETUP}>{@render windowsLogo()}{t.hero.download}</a>
					<a class="other" href={PACKAGES}>{t.hero.linuxPackages}</a>
				</div>
				<p class="note">{t.hero.windowsNote}</p>
			{:else}
				<p class="bar"><i></i><i></i><i></i><span>{t.hero.anyDistro}</span></p>
				<div class="body">
					<code class="cmd"><span class="prompt" aria-hidden="true">$</span> {INSTALL}</code>
					<Copy text={INSTALL} />
				</div>
				<div class="note">
					<p>{t.hero.linuxNote}</p>
					<p class="alt">
						<a class="other" href={PACKAGES}>{t.hero.packages}</a>
						<a class="btn" href={WINDOWS_SETUP}>{@render windowsLogo()}{t.hero.windowsInstaller} <span class="label">{t.hero.experimental}</span></a>
					</p>
				</div>
			{/if}
		</div>

		<div class="foot">
			<ul class="facts">
				{#each t.hero.facts as fact (fact)}
					<li><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>{fact}</li>
				{/each}
				<li class="ver">v{VERSION}, {RELEASED}</li>
			</ul>
			<p class="more">
				<a href="https://github.com/unisic/unisic">{t.hero.source}</a>
			</p>
		</div>
	</div>
</section>

{#snippet windowsLogo()}
	<svg class="win" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h8.5v8.5H3zm9.5 0H21v8.5h-8.5zM3 12.5h8.5V21H3zm9.5 0H21V21h-8.5z" /></svg>
{/snippet}

<style>
	.hero {
		display: grid;
		margin-top: 60px;
		padding-block: var(--s7) var(--s8);
		background: var(--deep);
	}
	/* Phones and tablets: the install box comes right after the pitch, the screenshot last. */
	.inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-areas: 'copy' 'term' 'foot' 'shot';
		align-items: end;
	}
	.copy {
		grid-area: copy;
	}

	.kicker {
		margin-bottom: var(--s4);
		font-size: var(--t-lede);
		font-weight: 600;
	}
	h1 {
		max-width: 18ch;
		font-size: clamp(2.75rem, 1.25rem + 4.4vw, 5.75rem);
		font-weight: 760;
		font-stretch: 76%;
		letter-spacing: -0.035em;
		line-height: 0.9;
	}
	.mark {
		color: var(--accent);
		white-space: nowrap;
	}
	.lede {
		max-width: 54ch;
		margin-top: var(--s5);
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}

	.desks {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--s1) var(--s4);
		margin-top: var(--s6);
	}
	.desks ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0 var(--s4);
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--t-small);
		font-weight: 600;
	}
	.desks a {
		color: var(--accent);
	}

	.shot {
		grid-area: shot;
		position: relative;
		margin: var(--s9) 0 0;
	}
	.screen {
		position: relative;
		overflow: hidden;
		border-radius: var(--r2);
	}
	.app {
		display: block;
		width: 100%;
		border-radius: var(--r2);
		outline: 1px solid oklch(1 0 0 / 0.1);
		outline-offset: -1px;
	}
	/* Percentages of the 1060 × 700 screenshot: the Region card spans 510-760 by 152-302. */
	.sel {
		position: absolute;
		left: 48.1%;
		top: 21.7%;
		width: 23.6%;
		height: 21.4%;
		outline: 1.5px solid var(--accent);
		box-shadow: 0 0 0 100vmax var(--scrim);
	}
	.size {
		position: absolute;
		left: -1px;
		bottom: calc(100% + 5px);
		padding: 1px 6px;
		border-radius: 4px;
		background: var(--accent);
		color: var(--on-accent);
		font: 11px/1.5 var(--font-mono);
		white-space: nowrap;
	}
	.sel i {
		position: absolute;
		width: 8px;
		height: 8px;
		margin: -4px 0 0 -4px;
		border-radius: 2px;
		background: var(--accent);
		box-shadow: 0 0 0 1.5px var(--deep);
	}
	.nw { left: 0; top: 0; }
	.ne { left: 100%; top: 0; }
	.se { left: 100%; top: 100%; }
	.sw { left: 0; top: 100%; }
	.tools {
		position: absolute;
		left: 59.9%;
		top: calc(43.1% + 12px);
		translate: -50% 0;
		display: flex;
		gap: 2px;
		padding: 3px;
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow:
			0 0 0 1px var(--line),
			0 12px 32px -12px rgb(0 0 0 / 0.55);
	}
	.tool {
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		border-radius: var(--r1);
		color: var(--muted);
	}
	.tool .icon {
		width: 15px;
		height: 15px;
	}
	.tool.on {
		background: var(--accent);
		color: var(--on-accent);
	}
	/* The overlay opens once on load: the screen dims around the frame, then the tools rise under it. */
	@media (prefers-reduced-motion: no-preference) {
		.sel {
			animation: open 500ms var(--ease-out) 300ms both;
		}
		.tools {
			animation: rise 400ms var(--ease-out) 700ms both;
		}
	}
	@keyframes open {
		from {
			opacity: 0;
			transform: scale(0.94);
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}
	.win {
		width: 16px;
		height: 16px;
		flex: none;
		fill: currentColor;
	}
	:global([data-theme='latte']) .app {
		outline-color: oklch(0 0 0 / 0.1);
	}
	.uni {
		position: absolute;
		right: var(--s5);
		bottom: calc(100% - 16px);
		width: 72px;
		pointer-events: none;
	}
	.term {
		grid-area: term;
		margin-top: var(--s7);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px var(--s4);
		border-bottom: 1px solid var(--line);
		font-size: var(--t-small);
		font-weight: 600;
	}
	.bar i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--line-strong);
	}
	.bar span {
		margin-left: var(--s2);
	}
	.body {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--s4) var(--s5);
		padding: var(--s5) var(--s5) var(--s3);
	}
	.get {
		min-height: 48px;
		padding-inline: var(--s5);
	}
	.other {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--accent);
	}
	.cmd {
		flex: 1 1 24ch;
		min-width: 0;
		font-size: clamp(1rem, 0.6rem + 1.5vw, 1.5rem);
		line-height: 1.4;
		overflow-wrap: break-word;
	}
	.prompt {
		color: var(--success);
		user-select: none;
	}
	.term .body :global(.copy) {
		min-height: 48px;
		padding: 0 var(--s5);
		border-radius: var(--r2);
		background: var(--accent);
		color: var(--on-accent);
		font-size: var(--t-body);
	}
	@media (hover: hover) and (pointer: fine) {
		.term .body :global(.copy:hover) {
			background: color-mix(in oklab, var(--accent) 86%, var(--text));
		}
	}
	.note {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--s3) var(--s5);
		padding: 0 var(--s5) var(--s5);
		font-size: var(--t-small);
		color: var(--muted);
	}

	.alt {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--s2) var(--s5);
	}

	.foot {
		grid-area: foot;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--s1) var(--s6);
		margin-top: var(--s3);
		font-size: var(--t-small);
	}
	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s2) var(--s4);
		margin: 0;
		padding: 0;
		list-style: none;
		font-weight: 600;
	}
	.facts li {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.facts .icon {
		width: 16px;
		height: 16px;
		color: var(--success);
	}
	.facts .ver {
		color: var(--muted);
	}
	.more {
		display: flex;
		flex-wrap: wrap;
		gap: 0 var(--s5);
	}
	.more a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--accent);
	}

	@media (min-width: 1100px) {
		.inner {
			grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
			grid-template-areas: 'copy shot' 'term term' 'foot foot';
			column-gap: var(--s8);
			align-items: center;
		}
		h1 {
			font-size: min(5rem, 1.25rem + 4.4vw);
		}
		.uni {
			width: 96px;
		}
	}
</style>
