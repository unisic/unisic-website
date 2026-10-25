<script lang="ts">
	import { ui } from '#lib/ui.svelte.js';
	import Topbar from '#lib/components/Topbar.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Marquee from '#lib/components/Marquee.svelte';
	import Capture from '#lib/components/Capture.svelte';
	import Edit from '#lib/components/Edit.svelte';
	import Record from '#lib/components/Record.svelte';
	import Read from '#lib/components/Read.svelte';
	import Share from '#lib/components/Share.svelte';
	import Keys from '#lib/components/Keys.svelte';
	import Themes from '#lib/components/Themes.svelte';
	import Platforms from '#lib/components/Platforms.svelte';
	import Privacy from '#lib/components/Privacy.svelte';
	import Compare from '#lib/components/Compare.svelte';
	import Install from '#lib/components/Install.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Toast from '#lib/components/Toast.svelte';

	const description =
		'Unisic draws on the selection before the shot, records GIF and video, reads text out of pixels and uploads the result. A screenshot tool for Linux Wayland with zero telemetry.';
</script>

<svelte:head>
	<title>Unisic: screenshots, recording and OCR for Linux</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://unisic.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://unisic.app/" />
	<meta property="og:title" content="Unisic" />
	<meta property="og:description" content={description} />
</svelte:head>

<div class="page" data-mode={ui.mode}>
	<Topbar />
	<main id="main" tabindex="-1">
		<Hero />
		<Marquee />
		<Capture />
		<Edit />
		<Record />
		<Read />
		<Share />
		<Keys />
		<Themes />
		<Platforms />
		<Privacy />
		<Compare />
		<Install />
	</main>
	<Footer />
	<Toast />
</div>
