<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const description =
		'Guides for installing, configuring and using Unisic, the open-source screenshot and screen recorder for Linux.';

	// One running number across every group, as the chapters on the landing page count.
	const numbered = $derived.by(() => {
		let n = 0;
		return data.groups.map((g) => ({ ...g, docs: g.docs.map((d) => ({ ...d, n: String(++n).padStart(2, '0') })) }));
	});
</script>

<svelte:head>
	<title>Documentation - Unisic</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://unisic.app/docs/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://unisic.app/docs/" />
	<meta property="og:title" content="Unisic documentation" />
	<meta property="og:description" content={description} />
</svelte:head>

<header class="intro">
	<p class="label">Documentation</p>
	<h1>Everything after the hotkey.</h1>
	<p class="lede">
		Install it, pick what your compositor supports, rebind the keys and point uploads at your own server. Every page is a
		Markdown file in the website repository, so a fix is one pull request.
	</p>
</header>

<div class="groups">
	{#each numbered as g, i (g.group)}
		<section class="group" aria-labelledby="group-{i}">
			<h2 id="group-{i}" class="label">{g.group}</h2>
			<ol>
				{#each g.docs as d (d.slug)}
					<li>
						<a class="card" href="/docs/{d.slug}/">
							<span class="n" aria-hidden="true">{d.n}</span>
							<span class="t">{d.title}</span>
							<span class="d">{d.description}</span>
						</a>
					</li>
				{/each}
			</ol>
		</section>
	{/each}
</div>

<style>
	.intro {
		display: grid;
		gap: var(--s4);
		margin-bottom: var(--s8);
	}
	h1 {
		font-size: var(--t-title);
		text-wrap: balance;
	}
	.lede {
		max-width: 60ch;
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}
	.groups {
		display: grid;
		gap: var(--s7);
	}
	.group {
		display: grid;
		gap: var(--s3);
	}
	ol {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 264px), 1fr));
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: grid;
	}
	.card {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-content: start;
		column-gap: var(--s3);
		row-gap: var(--s1);
		padding: var(--s4) var(--s5) var(--s5) var(--s4);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		text-decoration: none;
		transition: box-shadow 150ms ease;
	}
	.n {
		grid-row: span 2;
		font: var(--t-small) var(--font-mono);
		color: var(--accent);
		font-variant-numeric: tabular-nums;
	}
	.t {
		font-weight: 650;
		font-size: var(--t-body);
	}
	.d {
		font-size: var(--t-small);
		color: var(--muted);
		text-wrap: pretty;
	}
	@media (hover: hover) and (pointer: fine) {
		.card:hover {
			box-shadow: inset 0 0 0 1px var(--line-strong);
		}
	}
</style>
