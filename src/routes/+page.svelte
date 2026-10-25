<script lang="ts">
	import { ui } from '#lib/ui.svelte.js';
	import Topbar from '#lib/components/Topbar.svelte';
	import Hud from '#lib/components/Hud.svelte';
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
</script>

<div class="page" data-mode={ui.mode}>
	<a class="skip" href="#main">Skip to content</a>
	<Topbar />
	<Hud />
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
	main:focus {
		outline: none;
	}
</style>
