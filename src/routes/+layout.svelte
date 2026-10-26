<script lang="ts">
	import '../app.css';
	import { ui } from '#lib/ui.svelte.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Keeps the System pick in step when the desktop flips between light and dark.
	$effect(() => {
		document.documentElement.dataset.theme = ui.shown;
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-icon.png" />
	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="theme-color" content="#100e2c" />
	<meta property="og:image" content="https://unisic.app/img/og.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="640" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>
{@render children()}

<style>
	.skip {
		position: fixed;
		left: var(--s4);
		top: var(--s3);
		z-index: var(--z-toast);
		padding: var(--s2) var(--s4);
		border-radius: var(--r2);
		background: var(--accent);
		color: var(--on-accent);
		font-weight: 600;
		transform: translateY(-200%);
	}
	.skip:focus-visible {
		transform: none;
	}
</style>
