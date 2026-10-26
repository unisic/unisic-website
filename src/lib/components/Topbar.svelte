<script lang="ts">
	import { page } from '$app/state';
	import { ui } from '#lib/ui.svelte.js';
	import { LOCALES, home } from '#lib/i18n/locales.js';

	const docs = $derived(page.url.pathname.startsWith('/docs'));
	const words = $derived(page.data.chrome);
	const root = $derived(home(page.data.lang));
	// Only the landing page is translated, so only it offers the other languages.
	const landing = $derived(page.route.id === '/[[lang=locale]]');

	let menu: HTMLElement;

	// On phones the nav is a popover; a picked link should close it, not leave it over the page.
	function close() {
		if (menu.matches(':popover-open')) menu.hidePopover();
	}
</script>

<header class="bar">
	<div class="inner">
		<a class="brand" href="{root}#main">
			<img src="/favicon.svg" alt="" width="28" height="28" />
			<span class="name">Unisic</span>
		</a>
		<nav id="site-nav" aria-label={words.nav} popover bind:this={menu}>
			<a href="{root}#capture" onclick={close}>{words.features}</a>
			<a href="{root}#themes" onclick={close}><span class="dot" aria-hidden="true"></span>{words.themes}</a>
			<a href="{root}#compare" onclick={close}>{words.compare}</a>
			<a href="/docs/" onclick={close} aria-current={docs ? 'page' : undefined}>{words.docs}</a>
		</nav>
		<div class="end">
			<button class="pause" type="button" title={words.pause} aria-pressed={ui.paused} onclick={() => (ui.paused = !ui.paused)}>
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
					{#if ui.paused}<path d="M8 5.5v13l10-6.5z" />{:else}<path d="M9 5.5v13M15 5.5v13" />{/if}
				</svg>
				<span class="sr-only">{words.pause}</span>
			</button>
			{#if landing}
				<button class="lang" type="button" popovertarget="lang-menu" title={words.language}>
					<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
					<span class="sr-only">{words.language}</span>
				</button>
				<!-- Full reloads: the overlay demo measures its headline once, on mount. -->
				<ul id="lang-menu" popover data-sveltekit-reload>
					{#each LOCALES as l (l.code)}
						<li>
							<a href={home(l.code)} hreflang={l.code} lang={l.code} aria-current={l.code === page.data.lang ? 'page' : undefined}>{l.name}</a>
						</li>
					{/each}
				</ul>
			{/if}
			<a class="btn primary" href="/docs/installation/">{words.install}</a>
			<button class="toggle" type="button" popovertarget="site-nav">
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
				<span class="sr-only">{words.menu}</span>
			</button>
		</div>
	</div>
</header>

<style>
	.bar {
		position: fixed;
		inset: 0 0 auto;
		z-index: var(--z-bar);
		height: 60px;
		background: var(--bg);
		border-bottom: 1px solid var(--line);
	}
	.inner {
		display: flex;
		align-items: center;
		gap: var(--s3);
		width: var(--wrap);
		height: 100%;
		margin-inline: auto;
	}
	/* 86px is the logo plus the word. The brand gives way before the controls do, and once it is narrower
	   than that the word goes (the container query below) instead of running into the pause button. */
	.brand {
		flex: 0 1 86px;
		min-width: 28px;
		container-type: inline-size;
		display: flex;
		align-items: center;
		gap: var(--s2);
		min-height: 44px;
		font-weight: 700;
		font-size: 1.25rem;
		letter-spacing: -0.01em;
		text-decoration: none;
	}
	@container (max-width: 85px) {
		.name {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
		}
	}
	/* Phones: the popover drops under the bar as a full-width sheet. */
	nav {
		position: fixed;
		inset: 60px 0 auto;
		width: auto;
		margin: 0;
		padding: var(--s2) var(--s4) var(--s4);
		border: 0;
		border-bottom: 1px solid var(--line);
		background: var(--bg);
		color: var(--text);
	}
	nav:popover-open {
		display: grid;
	}
	nav a {
		display: flex;
		align-items: center;
		gap: var(--s2);
		min-height: 44px;
		padding: 0 var(--s3);
		border-radius: var(--r1);
		color: var(--muted);
		font-size: var(--t-small);
		font-weight: 560;
		text-decoration: none;
		transition: color 150ms ease;
	}
	nav a[aria-current='page'] {
		color: var(--text);
		box-shadow: inset 0 -2px 0 var(--accent);
		border-radius: 0;
	}
	@media (hover: hover) and (pointer: fine) {
		nav a:hover {
			color: var(--text);
		}
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: inset 0 0 0 1px var(--line-strong);
	}
	/* Phones fit five controls in 360px, so the gaps stay tight until the nav moves into the bar. */
	.end {
		display: flex;
		align-items: center;
		gap: var(--s2);
		margin-left: auto;
	}
	.end .btn {
		padding-inline: var(--s3);
	}
	/* Under 360px the longest install labels (de, nl) need the last few pixels. */
	@media (max-width: 359px) {
		.end {
			gap: var(--s1);
		}
	}
	.pause,
	.lang,
	.toggle {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 0;
		border-radius: var(--r2);
		background: transparent;
		color: var(--muted);
		cursor: pointer;
		transition:
			color 150ms ease,
			background-color 150ms ease,
			transform 160ms var(--ease-out);
	}
	.pause[aria-pressed='true'] {
		background: var(--surface-hi);
		color: var(--text);
	}
	.pause:active,
	.lang:active,
	.toggle:active {
		transform: scale(0.96);
	}
	.pause:focus-visible,
	.lang:focus-visible,
	.toggle:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}
	@media (hover: hover) and (pointer: fine) {
		.pause:hover,
		.lang:hover,
		.toggle:hover {
			color: var(--text);
		}
	}
	/* Hangs under the bar at the right edge of the page column. */
	#lang-menu {
		inset: 60px max(var(--s4), (100% - 1240px) / 2) auto auto;
		min-width: 180px;
		margin: var(--s1) 0 0;
		padding: var(--s1);
		border: 1px solid var(--line);
		border-radius: var(--r2);
		background: var(--surface);
		color: var(--text);
		list-style: none;
	}
	#lang-menu a {
		display: flex;
		align-items: center;
		min-height: 44px;
		padding: 0 var(--s3);
		border-radius: var(--r1);
		color: var(--muted);
		font-size: var(--t-small);
		font-weight: 560;
		text-decoration: none;
		transition:
			color 150ms ease,
			background-color 150ms ease;
	}
	#lang-menu a[aria-current='page'] {
		color: var(--text);
		background: var(--surface-hi);
	}
	@media (hover: hover) and (pointer: fine) {
		#lang-menu a:hover {
			color: var(--text);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.pause {
			display: none;
		}
	}
	@media (min-width: 760px) {
		.inner {
			gap: var(--s5);
		}
		.end {
			gap: var(--s4);
		}
		.end .btn {
			padding-inline: var(--s4);
		}
		nav {
			display: flex;
			position: static;
			gap: var(--s1);
			padding: 0;
			border: 0;
			background: transparent;
			overflow: visible;
		}
		.toggle {
			display: none;
		}
	}
</style>
