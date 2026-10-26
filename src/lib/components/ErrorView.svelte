<script lang="ts">
	import Topbar from '#lib/components/Topbar.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { status }: { status: number } = $props();
	const missing = $derived(status === 404);
</script>

<!-- English only, like the docs. 404.html prerenders it for nginx, +error.svelte shows it in preview and after client navigation. -->
<svelte:head>
	<title>{missing ? 'Page not found' : 'Something went wrong'} - Unisic</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Topbar />
<main id="main" tabindex="-1" class="wrap">
	<div class="copy">
		<p class="label">{missing ? 'Page not found' : `Error ${status}`}</p>
		<h1>{missing ? 'Nothing here to capture.' : 'This page failed to load.'}</h1>
		<p class="lede">
			{missing
				? 'The page you were after has moved, been renamed, or never existed.'
				: 'Something broke on the way. Reload it, or start again from the home page.'}
		</p>
		<div class="go">
			{#if missing}
				<a class="btn primary" href="/">Back to home</a>
				<a class="btn" href="/docs/">Documentation</a>
			{:else}
				<button class="btn primary" type="button" onclick={() => location.reload()}>Reload</button>
				<a class="btn" href="/">Back to home</a>
			{/if}
		</div>
	</div>

	<!-- The capture overlay over an empty screen: the frame holds the status, Uni sits on its edge. -->
	<figure class="stage panel" aria-hidden="true">
		<div class="sel">
			<span class="size">{status} × {status}</span>
			{#each ['nw', 'ne', 'se', 'sw'] as corner (corner)}<i class={corner}></i>{/each}
			<b>{status}</b>
			<img class="uni" src="/img/uni.webp" alt="" width="376" height="568" />
		</div>
	</figure>
</main>
<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-items: center;
		gap: var(--s8);
		padding-block: calc(60px + var(--s8)) var(--s9);
	}
	.copy {
		display: grid;
		justify-items: start;
		gap: var(--s4);
	}
	.label {
		color: var(--accent);
	}
	h1 {
		max-width: 14ch;
		font-size: var(--t-title);
	}
	.lede {
		max-width: 40ch;
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

	.stage {
		position: relative;
		overflow: hidden;
		margin: 0;
		aspect-ratio: 4 / 3;
		container-type: inline-size;
	}
	/* Sits low enough that Uni and the size label fit above it inside the dimmed screen. */
	.sel {
		position: absolute;
		left: 22%;
		top: 38%;
		width: 56%;
		height: 42%;
		display: grid;
		place-items: center;
		outline: 1.5px solid var(--accent);
		box-shadow: 0 0 0 100vmax var(--scrim);
	}
	b {
		font-family: var(--font-display);
		font-size: 22cqi;
		font-weight: 760;
		letter-spacing: -0.035em;
		line-height: 1;
		font-variant-numeric: tabular-nums;
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
		box-shadow: 0 0 0 1.5px var(--surface);
	}
	.nw { left: 0; top: 0; }
	.ne { left: 100%; top: 0; }
	.se { left: 100%; top: 100%; }
	.sw { left: 0; top: 100%; }
	.uni {
		position: absolute;
		right: 12%;
		bottom: calc(100% - 12px);
		width: 14cqi;
		pointer-events: none;
	}

	/* The overlay opens once: the screen dims around the frame. */
	@media (prefers-reduced-motion: no-preference) {
		.sel {
			animation: open 500ms var(--ease-out) 200ms both;
		}
	}
	@keyframes open {
		from {
			opacity: 0;
			transform: scale(0.94);
		}
	}

	@media (min-width: 900px) {
		main {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
			gap: var(--s9);
			min-height: calc(100svh - 60px);
		}
	}
</style>
