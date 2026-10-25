<script lang="ts">
	import { ui, inview } from '#lib/ui.svelte.js';

	const ITEMS = ['Region', 'Full screen', 'Scrolling capture', 'GIF', 'MP4', 'System audio', 'Instant replay', 'OCR', 'QR codes', 'Arrows', 'Blur', 'Step markers', 'Callouts', '.sxcu', 'SFTP', 'History', 'Themes'];

	let run = $state(false);
</script>

<div class="marquee" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
	<div class="row">
		{#each [0, 1] as copy (copy)}
			<ul class="track" aria-hidden={copy === 1 ? 'true' : undefined} aria-label={copy === 0 ? 'What Unisic does' : undefined}>
				{#each ITEMS as item (item)}<li>{item}</li>{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	.marquee {
		padding-block: var(--s5);
		overflow: hidden;
		border-block: 1px solid var(--line);
		background: var(--deep);
	}
	.row {
		display: flex;
		width: max-content;
	}
	.track {
		display: flex;
		flex: none;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		align-items: center;
		gap: var(--s5);
		padding-right: var(--s5);
		font-size: clamp(1.75rem, 1rem + 3vw, 3.5rem);
		font-weight: 700;
		font-stretch: 76%;
		letter-spacing: -0.02em;
		line-height: 1.1;
		white-space: nowrap;
	}
	li::after {
		content: '';
		width: 0.32em;
		height: 0.32em;
		border-radius: 2px;
		background: var(--accent);
		rotate: 45deg;
	}
	li:nth-child(5n + 2)::after {
		background: var(--c-measure);
	}
	li:nth-child(5n + 3)::after {
		background: var(--c-ocr);
	}
	li:nth-child(5n + 4)::after {
		background: var(--c-gif);
	}
	li:nth-child(5n + 5)::after {
		background: var(--c-video);
	}

	@media (prefers-reduced-motion: no-preference) {
		.track {
			animation: slide 120s linear infinite paused;
		}
		[data-run='true'] .track {
			animation-play-state: running;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.row {
			width: auto;
			padding-inline: var(--s4);
		}
		.track {
			flex-wrap: wrap;
			flex: 1;
		}
		.track[aria-hidden='true'] {
			display: none;
		}
	}
	@keyframes slide {
		to {
			transform: translateX(-100%);
		}
	}
</style>
