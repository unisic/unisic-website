<script lang="ts">
	import { page } from '$app/state';
	import { ui } from '#lib/ui.svelte.js';

	const docs = $derived(page.url.pathname.startsWith('/docs'));
</script>

<header class="bar">
	<div class="inner">
		<a class="brand" href="/#main">
			<img src="/favicon.svg" alt="" width="28" height="28" />
			Unisic
		</a>
		<nav aria-label="Primary">
			<a href="/#capture">Features</a>
			<a href="/#compare">Compare</a>
			<a href="/#install">Install</a>
			<a href="/docs/" aria-current={docs ? 'page' : undefined}>Docs</a>
		</nav>
		<div class="end">
			<button class="pause" type="button" aria-pressed={ui.paused} onclick={() => (ui.paused = !ui.paused)}>
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
					{#if ui.paused}<path d="M8 5.5v13l10-6.5z" />{:else}<path d="M9 5.5v13M15 5.5v13" />{/if}
				</svg>
				<span class="sr-only">Pause animations</span>
			</button>
			<a class="btn primary get" href="/#install">Download</a>
		</div>
	</div>
</header>

<style>
	.bar {
		position: fixed;
		inset: 0 0 auto;
		z-index: var(--z-bar);
		height: 60px;
		background: color-mix(in oklab, var(--bg) 92%, transparent);
		backdrop-filter: blur(14px) saturate(1.3);
		-webkit-backdrop-filter: blur(14px) saturate(1.3);
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
	nav {
		display: none;
		gap: var(--s1);
	}
	nav a {
		display: flex;
		align-items: center;
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
	.end {
		display: flex;
		align-items: center;
		gap: var(--s2);
		margin-left: auto;
	}
	.pause {
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
	.pause:active {
		transform: scale(0.96);
	}
	.pause:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}
	@media (hover: hover) and (pointer: fine) {
		.pause:hover {
			color: var(--text);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.pause {
			display: none;
		}
	}
	.get {
		min-height: 38px;
	}
	@media (min-width: 760px) {
		nav {
			display: flex;
		}
	}
</style>
