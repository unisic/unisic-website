<script lang="ts">
	import Prose from '#lib/components/Prose.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const doc = $derived(data.doc);
	const url = $derived(`https://unisic.app/docs/${doc.slug}/`);
	// Inside a <script> element, "<" would let a value close the tag; JSON allows it escaped.
	const ld = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Unisic', item: 'https://unisic.app/' },
				{ '@type': 'ListItem', position: 2, name: 'Docs', item: 'https://unisic.app/docs/' },
				{ '@type': 'ListItem', position: 3, name: doc.title, item: url }
			]
		}).replace(/</g, '\\u003c')
	);

	let active = $state('');

	/* The entry for the last heading above the upper third of the viewport is lit. Recomputed at most
	   once a frame while scrolling: one getBoundingClientRect per heading, a few dozen at most. */
	$effect(() => {
		const els = doc.toc.map((t) => document.getElementById(t.id)).filter((el) => el !== null);
		let frame = 0;
		const update = () => {
			frame = 0;
			const line = innerHeight / 3;
			active = els.findLast((el) => el.getBoundingClientRect().top < line)?.id ?? '';
		};
		const onscroll = () => {
			frame ||= requestAnimationFrame(update);
		};
		update();
		addEventListener('scroll', onscroll, { passive: true });
		return () => {
			removeEventListener('scroll', onscroll);
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:head>
	<title>{doc.seoTitle} - Unisic</title>
	<meta name="description" content={doc.description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={doc.seoTitle} />
	<meta property="og:description" content={doc.description} />
	{@html `<script type="application/ld+json">${ld}</script>`}
</svelte:head>

{#snippet toc()}
	<ul>
		{#each doc.toc as t (t.id)}
			<li class:sub={t.depth === 3}>
				<a href="#{t.id}" aria-current={active === t.id ? 'true' : undefined}>{t.text}</a>
			</li>
		{/each}
	</ul>
{/snippet}

<div class="page" class:rail={doc.toc.length > 0}>
	<article>
		<header class="head">
			<p class="label">Docs <span aria-hidden="true">/</span> {doc.group}</p>
			<h1>{doc.seoTitle}</h1>
			<p class="lede">{doc.description}</p>
		</header>

		{#if doc.toc.length}
			<details class="toc-m">
				<summary>On this page</summary>
				{@render toc()}
			</details>
		{/if}

		<Prose html={doc.html} />

		<footer class="end">
			<a class="edit" href="https://github.com/unisic/unisic-website/edit/main/content/docs/{doc.slug}.md">
				Edit this page on GitHub
			</a>
			{#if data.prev || data.next}
				<nav class="pager" aria-label="Previous and next page">
					{#if data.prev}
						<a class="prev" href="/docs/{data.prev.slug}/" rel="prev">
							<span class="label">Previous</span>{data.prev.title}
						</a>
					{/if}
					{#if data.next}
						<a class="next" href="/docs/{data.next.slug}/" rel="next">
							<span class="label">Next</span>{data.next.title}
						</a>
					{/if}
				</nav>
			{/if}
		</footer>
	</article>

	{#if doc.toc.length}
		<nav class="toc" aria-labelledby="toc-title">
			<p id="toc-title" class="label">On this page</p>
			{@render toc()}
		</nav>
	{/if}
</div>

<style>
	.page {
		display: grid;
		gap: var(--s7);
	}
	article {
		min-width: 0;
	}
	.head {
		display: grid;
		gap: var(--s4);
		margin-bottom: var(--s6);
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

	ul {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li a {
		display: block;
		padding: var(--s1) var(--s3);
		border-radius: var(--r1);
		color: var(--muted);
		font-size: var(--t-small);
		text-decoration: none;
		text-wrap: pretty;
		transition: color 150ms ease;
	}
	.sub a {
		padding-left: var(--s6);
	}
	li a[aria-current='true'] {
		color: var(--text);
		box-shadow: inset 2px 0 0 var(--accent);
	}
	@media (hover: hover) and (pointer: fine) {
		li a:hover {
			color: var(--text);
		}
	}

	.toc-m {
		margin-bottom: var(--s6);
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.toc-m summary {
		padding: var(--s3) var(--s4);
		font-weight: 600;
		cursor: pointer;
	}
	.toc-m ul {
		padding: 0 var(--s2) var(--s3);
	}

	.toc {
		display: none;
	}

	.end {
		display: grid;
		gap: var(--s5);
		max-width: 72ch;
		margin-top: var(--s8);
		padding-top: var(--s5);
		border-top: 1px solid var(--line);
	}
	.edit {
		justify-self: start;
		color: var(--accent);
		font-size: var(--t-small);
	}
	.pager {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
		gap: var(--s3);
	}
	.pager a {
		display: grid;
		gap: var(--s1);
		padding: var(--s4) var(--s5);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		font-weight: 650;
		text-decoration: none;
		transition: box-shadow 150ms ease;
	}
	.next {
		grid-column: -2;
		text-align: end;
	}
	@media (hover: hover) and (pointer: fine) {
		.pager a:hover {
			box-shadow: inset 0 0 0 1px var(--line-strong);
		}
	}

	@media (min-width: 1100px) {
		.rail {
			grid-template-columns: minmax(0, 1fr) 208px;
			gap: var(--s8);
		}
		.toc-m {
			display: none;
		}
		.toc {
			position: sticky;
			top: calc(60px + var(--s5));
			align-self: start;
			display: grid;
			gap: var(--s3);
			max-height: calc(100dvh - 60px - var(--s6));
			overflow-y: auto;
			scrollbar-width: thin;
		}
		.toc .label {
			padding-inline: var(--s3);
		}
	}
</style>
