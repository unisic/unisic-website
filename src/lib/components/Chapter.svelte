<script lang="ts">
	import type { Snippet } from 'svelte';
	import { track, type Mode } from '#lib/ui.svelte.js';

	let {
		id,
		num,
		mode = 'shot',
		kicker,
		title,
		lede,
		children
	}: { id: string; num: string; mode?: Mode; kicker: string; title: string; lede?: string; children: Snippet } = $props();
</script>

<section {id} class="chapter" data-mode={mode} aria-labelledby="{id}-title" {@attach track(mode)}>
	<header class="head wrap">
		<p class="meta label"><span class="num">{num}</span><span class="rule"></span><span>{kicker}</span></p>
		<h2 id="{id}-title">{title}</h2>
		{#if lede}<p class="lede">{lede}</p>{/if}
	</header>
	{@render children()}
</section>

<style>
	.chapter {
		padding-block: var(--s9) var(--s8);
		scroll-margin-top: 0;
	}
	.head {
		display: grid;
		gap: var(--s5);
		margin-bottom: var(--s7);
	}
	.meta {
		display: flex;
		align-items: center;
		gap: var(--s3);
	}
	.num {
		padding: 2px 7px;
		border-radius: 4px;
		background: var(--mode);
		color: var(--mode-ink);
		font-variant-numeric: tabular-nums;
	}
	.rule {
		flex: 0 1 var(--s9);
		height: 1px;
		background: var(--mode);
		transform-origin: left;
	}
	h2 {
		max-width: 14ch;
		font-size: var(--t-h2);
	}
	.lede {
		max-width: 56ch;
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
	}

	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			h2,
			.lede {
				animation: rise linear both;
				animation-timeline: view();
				animation-range: entry 0% entry 70%;
			}
			.rule {
				animation: grow linear both;
				animation-timeline: view();
				animation-range: entry 10% cover 35%;
			}
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(0.4em);
		}
	}
	@keyframes grow {
		from {
			transform: scaleX(0.05);
		}
	}
</style>
