<script lang="ts">
	import Topbar from '#lib/components/Topbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<!-- Prerendered to build/404.html; nginx serves it for every missing path with a 404 status. -->
<svelte:head>
	<title>Page not found - Unisic</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Topbar />
<main id="main" tabindex="-1" class="wrap">
	<p class="label">Error 404</p>
	<h1>Page not found</h1>
	<p class="lede">The page you were after has moved, been renamed, or never existed.</p>
	<div class="go">
		<a class="btn primary" href="/">Back to home</a>
		<a class="btn" href="/docs/">Documentation</a>
	</div>
</main>
<Footer />

<style>
	main {
		display: grid;
		justify-items: start;
		gap: var(--s4);
		padding-block: calc(60px + var(--s9)) var(--s9);
	}
	.label {
		color: var(--accent);
	}
	h1 {
		font-size: var(--t-title);
		text-wrap: balance;
	}
	.lede {
		max-width: 48ch;
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}
	.go {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s3);
		margin-top: var(--s4);
	}
</style>
