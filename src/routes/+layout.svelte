<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const description =
		'Unisic draws on the selection before the shot, records GIF and video, reads text out of pixels and uploads the result. A screenshot tool for Linux Wayland with zero telemetry.';
</script>

<svelte:head>
	<title>Unisic: screenshots, recording and OCR for Linux</title>
	<meta name="description" content={description} />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<meta name="theme-color" content="#100e2c" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://unisic.app/" />
	<meta property="og:title" content="Unisic" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://unisic.app/img/og.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="640" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
