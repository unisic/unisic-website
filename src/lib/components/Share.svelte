<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Thumb from './Thumb.svelte';
	import { ui } from '#lib/ui.svelte.js';

	const STEPS = ['Capture', 'Copy image', 'Upload', 'Link copied'];
	const HOSTS = ['Imgur', 'catbox.moe', 'Litterbox', 'tmpfiles.org', 'vgy.me', 'Buzzheavier', 'Custom HTTP', '.sxcu import', 'FTP', 'SFTP'];
</script>

<Chapter
	id="share"
	num="05"
	kicker="Share and history"
	title="From shot to link in one key."
	lede="After a capture Unisic can copy the image, save it, upload it and put the link on your clipboard. Every capture lands in a history with thumbnails, and deleting one moves the file to the trash instead of erasing it."
>
	<div class="wrap stack">
		<ol class="flow">
			{#each STEPS as step (step)}
				<li><span class="dot" aria-hidden="true"></span>{step}</li>
			{/each}
		</ol>

		<div class="cols">
			<div class="hosts">
				<h3>Upload anywhere.</h3>
				<ul>
					{#each HOSTS as host (host)}<li>{host}</li>{/each}
				</ul>
			</div>

			<section class="live panel" aria-labelledby="live-title">
				<div class="head">
					<h3 id="live-title">Your history on this page</h3>
					<span class="label">{ui.captures.length} / 8</span>
				</div>
				{#if ui.captures.length}
					<ul class="thumbs">
						{#each ui.captures as cap (cap.id)}
							<li><Thumb {cap} width={160} /><span>{Math.round(cap.w)} × {Math.round(cap.h)}</span></li>
						{/each}
					</ul>
				{:else}
					<p class="empty">
						<span>Nothing yet. Drag a selection over the top of this page and press <a href="#main">Capture</a>; it shows up here.</span>
					</p>
				{/if}
			</section>
		</div>
	</div>
</Chapter>

<style>
	.stack {
		display: grid;
		gap: var(--s8);
	}
	.flow {
		position: relative;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.flow li {
		display: grid;
		justify-items: start;
		gap: var(--s3);
		padding-top: var(--s2);
		font-weight: 650;
		font-size: clamp(0.9375rem, 0.8rem + 0.6vw, 1.25rem);
		line-height: 1.2;
	}
	.dot {
		position: relative;
		z-index: 1;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--mode);
		box-shadow: 0 0 0 4px var(--bg);
	}
	.flow::before {
		content: '';
		position: absolute;
		left: 8px;
		right: calc(25% - 8px);
		top: calc(var(--s2) + 7px);
		height: 2px;
		background: var(--mode);
	}

	.cols {
		display: grid;
		gap: var(--s7);
	}
	.hosts {
		display: grid;
		align-content: start;
		gap: var(--s4);
	}
	.hosts ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s2);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.hosts li {
		padding: 6px 12px;
		border-radius: 99px;
		box-shadow: inset 0 0 0 1px var(--line-strong);
		font: var(--t-small) var(--font-mono);
	}

	.live {
		display: grid;
		align-content: start;
		gap: var(--s4);
		min-height: 220px;
		padding: var(--s5);
	}
	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--s3);
	}
	.head h3 {
		font-size: 1.25rem;
	}
	.thumbs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.thumbs li {
		display: grid;
		gap: var(--s1);
		font: 12px var(--font-mono);
		font-variant-numeric: tabular-nums;
		color: var(--muted);
	}
	.empty {
		display: grid;
		place-items: center;
		min-height: 140px;
		padding: var(--s4);
		border-radius: var(--r2);
		outline: 1.5px dashed var(--line-strong);
		outline-offset: -1.5px;
		text-align: center;
		color: var(--muted);
		font-size: var(--t-small);
	}
	.empty a {
		color: var(--accent);
	}

	@media (min-width: 900px) {
		.cols {
			grid-template-columns: 1fr 1.2fr;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		@starting-style {
			.thumbs li:first-child {
				opacity: 0;
				transform: scale(0.94);
			}
		}
		.thumbs li:first-child {
			transition:
				opacity 260ms var(--ease-out),
				transform 260ms var(--ease-out);
		}
	}
</style>
