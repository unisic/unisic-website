<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Frame from './Frame.svelte';
	import { ui, inview } from '#lib/ui.svelte.js';

	const MODES = [
		{ name: 'Full screen', flag: '--fullscreen', note: 'Every monitor in one image, or only the one under the cursor with --monitor.' },
		{ name: 'Region', flag: '--region', note: 'Drag a box and read its size as you go. --recapture grabs the same box again.' },
		{ name: 'Window', flag: '--window', note: 'The active window and nothing around it.' },
		{ name: 'Scrolling', flag: '--scroll', note: 'Scroll down and Unisic stitches one long screenshot.' }
	];
	// Widths of the fake document lines in the scroll demo; 0 is an image block.
	const LINES = [86, 64, 92, 0, 78, 90, 52, 84, 70, 0, 94, 60, 82, 46, 0, 88, 72, 58, 90, 0, 66, 84, 50, 76];

	let run = $state(false);
</script>

{#snippet doc()}
	<div class="doc">
		{#each LINES as w, i (i)}
			{#if w}<i style:width="{w}%"></i>{:else}<b></b>{/if}
		{/each}
	</div>
{/snippet}

<Chapter
	id="capture"
	num="01"
	kicker="Capture"
	title="Every way to grab the screen."
	lede="Full screen across monitors, a region with live dimensions, the active window, or a page longer than your screen. Add a delay of up to 60 seconds and the cursor when you need them."
>
	<div class="grid wrap">
		<div class="shot">
			<Frame
				src="/img/capture.webp"
				width={1060}
				height={700}
				alt="Unisic's Capture page with Full screen, Region and Window cards and the capture options: delay, upload server catbox.moe, cursor, copy to clipboard, save, upload and copy the link."
			/>
		</div>

		<div class="scroll panel" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
			<p class="label">Scrolling capture</p>
			<div class="stage" aria-hidden="true">
				<div class="viewport">
					{@render doc()}
					<div class="banner">
						<span>Scroll down to capture...</span>
						<span class="finish">Finish</span>
					</div>
				</div>
				<div class="arrow"></div>
				<div class="result">{@render doc()}</div>
			</div>
			<p class="caption">
				Start it with <code>unisic --scroll</code>, scroll the page, press Finish. The pieces are stitched into one image.
			</p>
		</div>

		<ul class="modes">
			{#each MODES as m, i (m.name)}
				<li style:--i={i}>
					<h3>{m.name}</h3>
					<code>{m.flag}</code>
					<p>
						{#each m.note.split(/(--[a-z]+)/) as part, i (i)}{#if i % 2}<code>{part}</code>{:else}{part}{/if}{/each}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s7) var(--s6);
	}
	.scroll {
		display: grid;
		align-content: start;
		gap: var(--s4);
		padding: var(--s5);
	}
	.stage {
		display: grid;
		grid-template-columns: 1fr auto 0.42fr;
		align-items: center;
		gap: var(--s3);
	}
	.viewport,
	.result {
		position: relative;
		height: 260px;
		overflow: hidden;
		border-radius: var(--r2);
		background: var(--bg);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.viewport {
		outline: 1.5px solid var(--mode);
		outline-offset: 4px;
	}
	.doc {
		display: grid;
		grid-auto-rows: 1fr;
		align-items: center;
		gap: 6px;
		height: 300%;
		padding: 14px;
	}
	.result .doc {
		height: 100%;
		gap: 2px;
		padding: 6px;
	}
	.doc i {
		height: 6px;
		border-radius: 3px;
		background: color-mix(in oklab, var(--text) 22%, transparent);
	}
	.doc b {
		align-self: stretch;
		grid-row: span 2;
		border-radius: 4px;
		background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 45%, transparent), color-mix(in oklab, var(--secondary) 70%, transparent));
	}
	.result .doc i {
		height: 2px;
	}
	.banner {
		position: absolute;
		inset: auto 10px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--s2);
		padding: 6px 6px 6px 12px;
		border-radius: var(--r2);
		background: color-mix(in oklab, var(--surface) 92%, transparent);
		box-shadow: 0 0 0 1px var(--line);
		font: 12px/1.3 var(--font-mono);
	}
	.finish {
		padding: 5px 10px;
		border-radius: var(--r1);
		background: var(--mode);
		color: var(--mode-ink);
	}
	.arrow {
		width: 22px;
		height: 2px;
		background: var(--muted);
		mask: linear-gradient(90deg, #000 60%, transparent 60%) 0 0 / 6px 2px;
	}
	.caption {
		font-size: var(--t-small);
		color: var(--muted);
	}
	code {
		font-size: 0.92em;
		color: var(--text);
	}

	.modes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--s5);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.modes li {
		display: grid;
		align-content: start;
		gap: var(--s2);
		padding-top: var(--s4);
		border-top: 1px solid var(--line-strong);
	}
	.modes code {
		color: var(--mode);
		font-size: var(--t-small);
	}
	.modes p {
		font-size: var(--t-small);
		color: var(--muted);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.45fr 1fr;
			align-items: start;
		}
		.modes {
			grid-column: 1 / -1;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.viewport .doc {
			animation: scroll 7s var(--ease-in-out) infinite paused;
		}
		.result .doc {
			animation: stitch 7s var(--ease-in-out) infinite paused;
		}
		.finish {
			animation: press 7s ease infinite paused;
		}
		[data-run='true'] .doc,
		[data-run='true'] .finish {
			animation-play-state: running;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.viewport .doc {
			transform: translateY(-33%);
		}
	}
	@keyframes scroll {
		0%,
		12% {
			transform: none;
		}
		76%,
		94% {
			transform: translateY(-66.667%);
		}
		100% {
			transform: none;
		}
	}
	@keyframes stitch {
		0%,
		12% {
			clip-path: inset(0 0 66.667% 0);
		}
		76%,
		94% {
			clip-path: inset(0);
		}
		100% {
			clip-path: inset(0 0 66.667% 0);
		}
	}
	@keyframes press {
		0%,
		78%,
		86%,
		100% {
			transform: none;
			filter: none;
		}
		81% {
			transform: scale(0.94);
			filter: brightness(1.25);
		}
	}
</style>
