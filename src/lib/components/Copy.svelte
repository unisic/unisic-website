<script lang="ts">
	import { page } from '$app/state';

	const t = $derived(page.data.copy);
	let { text, label }: { text: string; label?: string } = $props();

	let status = $state<'idle' | 'done' | 'failed'>('idle');
	let timer: ReturnType<typeof setTimeout> | undefined;

	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
			status = 'done';
		} catch {
			status = 'failed';
		}
		clearTimeout(timer);
		timer = setTimeout(() => (status = 'idle'), 1800);
	}

	$effect(() => () => clearTimeout(timer));
</script>

<button class="copy" type="button" onclick={copy} data-state={status}>
	<span class="glyphs" aria-hidden="true">
		<svg class="icon a" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>
		<svg class="icon b" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
	</span>
	<span class="txt">
		{#each [['idle', label ?? t.copy], ['done', t.copied], ['failed', t.select]] as [s, word] (s)}
			<span class:on={status === s}>{word}</span>
		{/each}
	</span>
</button>
<span class="sr-only" role="status">{status === 'done' ? t.done : status === 'failed' ? t.failed : ''}</span>

<style>
	.copy {
		display: inline-flex;
		align-items: center;
		gap: var(--s2);
		min-height: 36px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r1);
		background: color-mix(in oklab, var(--text) 10%, transparent);
		color: var(--text);
		font: inherit;
		font-size: var(--t-small);
		font-weight: 600;
		cursor: pointer;
		position: relative;
		transition:
			transform 160ms var(--ease-out),
			background-color 160ms ease;
	}
	.copy::before {
		content: '';
		position: absolute;
		inset: -4px;
	}
	.copy:active {
		transform: scale(0.96);
	}
	@media (hover: hover) and (pointer: fine) {
		.copy:hover {
			background: color-mix(in oklab, var(--text) 18%, transparent);
		}
	}
	.glyphs {
		position: relative;
		display: grid;
		width: 18px;
		height: 18px;
	}
	.glyphs .icon {
		grid-area: 1 / 1;
		transition:
			opacity 200ms var(--ease-icon),
			scale 200ms var(--ease-icon),
			filter 200ms var(--ease-icon);
	}
	.b {
		opacity: 0;
		scale: 0.25;
		filter: blur(4px);
		color: var(--success);
	}
	[data-state='done'] .a {
		opacity: 0;
		scale: 0.25;
		filter: blur(4px);
	}
	[data-state='done'] .b {
		opacity: 1;
		scale: 1;
		filter: blur(0);
	}
	/* All three labels share one cell, so the button keeps the width of the longest. */
	.txt {
		display: grid;
		text-align: start;
	}
	.txt span {
		grid-area: 1 / 1;
	}
	.txt span:not(.on) {
		visibility: hidden;
	}
	@media (prefers-reduced-motion: reduce) {
		.glyphs .icon {
			transition-property: opacity;
		}
	}
</style>
