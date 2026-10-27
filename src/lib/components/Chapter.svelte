<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Mode } from '#lib/ui.svelte.js';

	// split puts the lede beside the title on wide screens, band sets the chapter on the deep background.
	// Both exist to break the rhythm of chapters that would otherwise share one shape.
	let {
		id,
		mode = 'shot',
		title,
		lede,
		split = false,
		band = false,
		children
	}: {
		id: string;
		mode?: Mode;
		title: string;
		lede?: string;
		split?: boolean;
		band?: boolean;
		children: Snippet;
	} = $props();
</script>

<section {id} class="chapter" class:band data-mode={mode} aria-labelledby="{id}-title">
	<header class="head wrap" class:split>
		<h2 id="{id}-title">{title}</h2>
		{#if lede}<p class="lede">{lede}</p>{/if}
	</header>
	{@render children()}
</section>

<style>
	.chapter {
		padding-block: var(--s8) var(--s7);
	}
	.band {
		padding-block: var(--s8);
		background: var(--deep);
		border-block: 1px solid var(--line);
	}
	.head {
		display: grid;
		gap: var(--s4);
		margin-bottom: var(--s7);
	}
	h2 {
		max-width: 14ch;
		font-size: var(--t-h2);
		text-wrap: balance;
	}
	.lede {
		max-width: 56ch;
		margin-top: var(--s1);
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}
	@media (min-width: 960px) {
		.split {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			column-gap: var(--s8);
			align-items: end;
		}
		.split .lede {
			margin-top: 0;
		}
	}

	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			h2,
			.lede {
				animation: rise linear both;
				animation-timeline: view();
				animation-range: entry 0% entry 70%;
			}
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(0.4em);
		}
	}
</style>
