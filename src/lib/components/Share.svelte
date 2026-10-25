<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Frame from './Frame.svelte';
	import Thumb from './Thumb.svelte';
	import { ui, inview } from '#lib/ui.svelte.js';

	const STEPS = ['Capture', 'Copy image', 'Upload', 'Link copied'];
	const HOSTS = ['Imgur', 'catbox.moe', 'Litterbox', 'tmpfiles.org', 'vgy.me', 'Buzzheavier', 'Custom HTTP', '.sxcu import', 'FTP', 'SFTP'];

	let run = $state(false);
</script>

<Chapter
	id="share"
	num="05"
	kicker="Share and history"
	title="From shot to link in one key."
	lede="After a capture Unisic can copy the image, save it, upload it and put the link on your clipboard. Every capture lands in a history with thumbnails, and deleting one moves the file to the trash instead of erasing it."
>
	<div class="wrap stack">
		<ol class="flow" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
			{#each STEPS as step, i (step)}
				<li style:--i={i}><span class="dot" aria-hidden="true"></span>{step}</li>
			{/each}
		</ol>

		<div class="cols">
			<div class="hosts">
				<h3>Upload anywhere.</h3>
				<ul>
					{#each HOSTS as host (host)}<li>{host}</li>{/each}
				</ul>
				<p>Import a ShareX <code>.sxcu</code> file or describe your own HTTP endpoint.</p>
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

		<Frame
			src="/img/history.webp"
			width={1060}
			height={700}
			alt="Unisic's History page: a grid of capture thumbnails with All, Images, GIFs, Recordings, Clips, Starred and Uploaded filters."
		/>
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
	.flow::before,
	.flow::after {
		content: '';
		position: absolute;
		left: 8px;
		right: calc(25% - 8px);
		top: calc(var(--s2) + 7px);
		height: 2px;
		background: var(--line-strong);
	}
	.flow::after {
		background: var(--mode);
		transform-origin: left;
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
	.hosts p {
		color: var(--muted);
		font-size: var(--t-small);
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
		.flow::after {
			animation: fill 4.8s var(--ease-in-out) infinite paused;
		}
		.dot {
			animation: lit 4.8s ease infinite backwards paused;
			animation-delay: calc(var(--i) * 1.2s);
		}
		[data-run='true']::after,
		[data-run='true'] .dot {
			animation-play-state: running;
		}
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
	@keyframes fill {
		0% {
			transform: scaleX(0);
		}
		75%,
		90% {
			transform: scaleX(1);
		}
		100% {
			transform: scaleX(1);
			opacity: 0;
		}
	}
	@keyframes lit {
		0%,
		24%,
		100% {
			background: var(--line-strong);
			transform: none;
		}
		4%,
		16% {
			background: var(--mode);
			transform: scale(1.35);
		}
	}
</style>
