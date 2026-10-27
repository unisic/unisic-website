<script lang="ts">
	import Chapter from './Chapter.svelte';
	import { ui, inview } from '#lib/ui.svelte.js';
	import type { Dictionary } from '#lib/i18n/en.js';

	// Linux defaults from the hotkeys docs; every one can be rebound in Settings.
	const KEYS = ['Meta+Shift+1', 'Meta+Shift+2', 'Meta+Shift+3'];

	// Widths of the fake document lines in the scroll demo; 0 is an image block.
	const LINES = [86, 64, 92, 0, 78, 90, 52, 84, 70, 0, 94, 60, 82, 46, 0, 88, 72, 58, 90, 0, 66, 84, 50, 76];

	let run = $state(false);
	let { t }: { t: Dictionary } = $props();
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
	title={t.capture.title}
	lede={t.capture.lede}
>
	<div class="grid wrap">
		<ul class="modes">
			{#each t.capture.modes as m, i (KEYS[i])}
				<li>
					<strong>{m.name}</strong>
					<span>{m.say}</span>
					<kbd class="cap">{KEYS[i]}</kbd>
				</li>
			{/each}
		</ul>

		<div class="scroll panel" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
			<p class="label">{t.capture.scroll}</p>
			<div class="stage" aria-hidden="true">
				<div class="viewport">
					{@render doc()}
					<div class="banner">
						<span>{t.capture.scrolling}</span>
						<span class="finish">{t.capture.finish}</span>
					</div>
				</div>
				<div class="arrow"></div>
				<div class="result">{@render doc()}</div>
			</div>
			<p class="caption">{@html t.capture.captionHtml}</p>
		</div>

	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s7) var(--s6);
	}
	.modes {
		display: grid;
		align-content: start;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.modes li {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: var(--s1) var(--s4);
		padding-block: var(--s4);
		border-bottom: 1px solid var(--line);
	}
	.modes li:first-child {
		padding-top: 0;
	}
	.modes strong {
		font-size: var(--t-h3);
	}
	.modes span {
		grid-column: 1;
		color: var(--muted);
		text-wrap: pretty;
	}
	.modes kbd {
		grid-column: 2;
		grid-row: 1 / span 2;
		align-self: center;
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
		background: color-mix(in oklab, var(--accent) 30%, var(--surface));
	}
	.result .doc i {
		height: 2px;
	}
	.banner {
		position: absolute;
		inset: auto 10px 10px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--s2);
		padding: 6px 6px 6px 12px;
		border-radius: var(--r2);
		background: color-mix(in oklab, var(--surface) 92%, transparent);
		box-shadow: 0 0 0 1px var(--line);
		font: 12px/1.3 var(--font-mono);
	}
	.banner span:first-child {
		min-width: 0;
		text-wrap: pretty;
	}
	.finish {
		margin-left: auto;
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
	.caption :global(code) {
		font-size: 0.92em;
		color: var(--text);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			align-items: start;
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
