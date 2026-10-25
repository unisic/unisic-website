<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import Topbar from '#lib/components/Topbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const LIMIT = 20;

	let open = $state(false);
	let query = $state('');

	type Hit = { href: string; title: string; heading?: string };

	const hits = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		const out: Hit[] = [];
		for (const d of data.index) {
			if (d.title.toLowerCase().includes(q)) out.push({ href: `/docs/${d.slug}/`, title: d.title });
			for (const h of d.headings) {
				if (h.text.toLowerCase().includes(q)) out.push({ href: `/docs/${d.slug}/#${h.id}`, title: d.title, heading: h.text });
			}
		}
		return out;
	});

	afterNavigate(() => {
		open = false;
		query = '';
	});

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && query) {
			e.preventDefault();
			query = '';
		}
	}
</script>

<div class="docs" data-mode="shot">
	<Topbar />
	<div class="wrap shell">
		<aside class="side" data-open={open}>
			<button class="menu" type="button" aria-expanded={open} aria-controls="docs-nav" onclick={() => (open = !open)}>
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
				Menu
			</button>
			<div class="body" id="docs-nav">
				<div class="filter">
					<label class="label" for="docs-filter">Filter the docs</label>
					<input id="docs-filter" type="search" autocomplete="off" spellcheck="false" placeholder="Hotkeys, OCR, SFTP" bind:value={query} {onkeydown} />
					<p class="sr-only" role="status">
						{query.trim() ? `${hits.length} ${hits.length === 1 ? 'match' : 'matches'}` : ''}
					</p>
				</div>
				{#if query.trim()}
					{#if hits.length}
						<ul class="hits">
							{#each hits.slice(0, LIMIT) as h (h.href)}
								<li>
									<a href={h.href}>
										{#if h.heading}<span class="in">{h.title}</span>{h.heading}{:else}{h.title}{/if}
									</a>
								</li>
							{/each}
						</ul>
						{#if hits.length > LIMIT}<p class="more">{hits.length - LIMIT} more. Type a longer word to narrow it down.</p>{/if}
					{:else}
						<p class="more">Nothing matches "{query.trim()}".</p>
					{/if}
				{:else}
					<nav aria-label="Documentation">
						<a class="overview" href="/docs/" aria-current={page.url.pathname === '/docs/' ? 'page' : undefined}>Overview</a>
						{#each data.groups as g (g.group)}
							<p class="label group">{g.group}</p>
							<ul>
								{#each g.docs as d (d.slug)}
									<li>
										<a href="/docs/{d.slug}/" aria-current={page.url.pathname === `/docs/${d.slug}/` ? 'page' : undefined}>{d.title}</a>
									</li>
								{/each}
							</ul>
						{/each}
					</nav>
				{/if}
			</div>
		</aside>
		<main id="main" tabindex="-1">
			{@render children()}
		</main>
	</div>
	<Footer />
</div>

<style>
	.shell {
		display: grid;
		gap: var(--s6);
		padding-top: calc(60px + var(--s5));
		padding-bottom: var(--s9);
	}
	main {
		min-width: 0;
	}

	.menu {
		display: none;
		align-items: center;
		gap: var(--s2);
		min-height: 44px;
		padding: 0 var(--s4);
		border: 0;
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		font: inherit;
		font-weight: 600;
		cursor: pointer;
		transition: transform 160ms var(--ease-out);
	}
	.menu:active {
		transform: scale(0.96);
	}
	.menu .icon {
		width: 18px;
		height: 18px;
	}
	.body {
		display: grid;
		gap: var(--s5);
		align-content: start;
	}

	.filter {
		display: grid;
		gap: var(--s2);
	}
	input {
		width: 100%;
		min-height: 44px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r2);
		background: var(--deep);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		font: inherit;
		font-size: var(--t-small);
		transition: box-shadow 150ms ease;
	}
	input::placeholder {
		color: var(--muted);
	}
	input:focus-visible {
		outline: none;
		box-shadow: inset 0 0 0 2px var(--accent);
	}

	nav,
	.hits {
		display: grid;
		gap: var(--s1);
	}
	ul {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.group {
		margin: var(--s4) 0 var(--s1);
		padding-inline: var(--s3);
	}
	nav a,
	.hits a {
		display: block;
		padding: var(--s2) var(--s3);
		border-radius: var(--r1);
		color: var(--muted);
		font-size: var(--t-small);
		text-decoration: none;
		text-wrap: pretty;
		transition:
			background-color 150ms ease,
			color 150ms ease;
	}
	nav a[aria-current='page'] {
		background: color-mix(in oklab, var(--accent) 14%, transparent);
		color: var(--text);
		box-shadow: inset 2px 0 0 var(--accent);
	}
	.hits a {
		color: var(--text);
	}
	.in {
		display: block;
		font-size: var(--t-label);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.more {
		padding-inline: var(--s3);
		font-size: var(--t-small);
		color: var(--muted);
	}
	@media (hover: hover) and (pointer: fine) {
		nav a:hover,
		.hits a:hover {
			background: var(--surface);
			color: var(--text);
		}
	}

	@media (scripting: none) {
		.filter {
			display: none;
		}
	}
	@media (max-width: 899px) and (scripting: enabled) {
		.menu {
			display: inline-flex;
		}
		.side[data-open='false'] .body {
			display: none;
		}
		.side[data-open='true'] .body {
			margin-top: var(--s4);
		}
	}
	@media (min-width: 900px) {
		.shell {
			grid-template-columns: 232px minmax(0, 1fr);
			gap: var(--s8);
			padding-top: calc(60px + var(--s7));
		}
		.side {
			position: sticky;
			top: calc(60px + var(--s5));
			align-self: start;
			max-height: calc(100dvh - 60px - var(--s6));
			overflow-y: auto;
			overscroll-behavior: contain;
			scrollbar-width: thin;
			padding-right: var(--s2);
		}
	}
</style>
