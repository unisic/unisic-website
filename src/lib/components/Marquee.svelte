<script lang="ts">
	import { ui, inview } from '#lib/ui.svelte.js';

	const LABELS = ['Capture and record', 'Edit and share'];
	const ROWS = [
		['Region', 'Full screen', 'Active window', 'Scrolling capture', 'GIF', 'MP4', 'WebM', 'System audio', 'Instant replay', 'OCR', 'QR codes'],
		['Arrows', 'Blur', 'Pixelate', 'Step markers', 'Callouts', 'Magnifier', 'Imgur', 'catbox.moe', '.sxcu', 'FTP', 'SFTP', 'History', 'Themes']
	];

	let run = $state(false);
</script>

<div class="marquee" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
	{#each ROWS as row, r (r)}
		<div class="row" class:back={r === 1}>
			{#each [0, 1] as copy (copy)}
				<ul class="track" aria-hidden={copy === 1 ? 'true' : undefined} aria-label={copy === 0 ? LABELS[r] : undefined}>
					{#each row as item (item)}<li>{item}</li>{/each}
				</ul>
			{/each}
		</div>
	{/each}
</div>

<style>
	.marquee {
		display: grid;
		gap: var(--s2);
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
	.back li {
		font: 400 clamp(1rem, 0.8rem + 0.8vw, 1.375rem) var(--font-mono);
		letter-spacing: 0;
		color: var(--muted);
	}
	.back li::after {
		width: 6px;
		height: 6px;
	}

	@media (prefers-reduced-motion: no-preference) {
		.track {
			animation: slide 70s linear infinite paused;
		}
		.back .track {
			animation-duration: 55s;
			animation-direction: reverse;
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
