<script lang="ts">
	import { page } from '$app/state';
	import { ui } from '#lib/ui.svelte.js';

	const docs = $derived(page.url.pathname.startsWith('/docs'));

	let menu: HTMLElement;

	// On phones the nav is a popover; a picked link should close it, not leave it over the page.
	function close() {
		if (menu.matches(':popover-open')) menu.hidePopover();
	}
</script>

<header class="bar">
	<div class="inner">
		<a class="brand" href="/#main">
			<img src="/favicon.svg" alt="" width="28" height="28" />
			Unisic
		</a>
		<nav id="site-nav" aria-label="Primary" popover bind:this={menu}>
			<a href="/#capture" onclick={close}>Features</a>
			<a href="/#themes" onclick={close}><span class="dot" aria-hidden="true"></span>Themes</a>
			<a href="/#compare" onclick={close}>Compare</a>
			<a href="/docs/" onclick={close} aria-current={docs ? 'page' : undefined}>Docs</a>
		</nav>
		<div class="end">
			<button class="pause" type="button" title="Pause animations" aria-pressed={ui.paused} onclick={() => (ui.paused = !ui.paused)}>
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
					{#if ui.paused}<path d="M8 5.5v13l10-6.5z" />{:else}<path d="M9 5.5v13M15 5.5v13" />{/if}
				</svg>
				<span class="sr-only">Pause animations</span>
			</button>
			<a class="btn primary" href="/docs/installation/">Install</a>
			<button class="toggle" type="button" popovertarget="site-nav">
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
				<span class="sr-only">Menu</span>
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
		gap: var(--s5);
		width: var(--wrap);
		height: 100%;
		margin-inline: auto;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: var(--s2);
		min-height: 44px;
		font-weight: 700;
		font-stretch: 80%;
		font-size: 1.25rem;
		letter-spacing: -0.01em;
		text-decoration: none;
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
	.end {
		display: flex;
		align-items: center;
		gap: var(--s4);
		margin-left: auto;
	}
	.pause,
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
	.toggle:active {
		transform: scale(0.96);
	}
	.pause:focus-visible,
	.toggle:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}
	@media (hover: hover) and (pointer: fine) {
		.pause:hover,
		.toggle:hover {
			color: var(--text);
		}
	}
	.toggle {
		margin-left: calc(-1 * var(--s2));
	}
	@media (prefers-reduced-motion: reduce) {
		.pause {
			display: none;
		}
	}
	@media (min-width: 760px) {
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
