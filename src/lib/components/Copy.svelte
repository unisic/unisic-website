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

<button class="copy" type="button" onclick={copy}>
	{#each [['idle', label ?? t.copy], ['done', t.copied], ['failed', t.select]] as [s, word] (s)}
		<span class="state" class:on={status === s}>
			<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
				{#if s === 'done'}<path d="m5 12.5 4.5 4.5L19 7.5" />{:else}<rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />{/if}
			</svg>
			{word}
		</span>
	{/each}
</button>
<span class="sr-only" role="status">{status === 'done' ? t.done : status === 'failed' ? t.failed : ''}</span>

<style>
	.copy {
		display: inline-grid;
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
	/* All three states share one cell, so the button keeps the width of the longest and the shown one sits centered. */
	.state {
		grid-area: 1 / 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--s2);
		transition:
			opacity 200ms var(--ease-icon),
			visibility 200ms;
	}
	.state:not(.on) {
		visibility: hidden;
		opacity: 0;
	}
	.state .icon {
		transition:
			scale 200ms var(--ease-icon),
			filter 200ms var(--ease-icon);
	}
	.state:not(.on) .icon {
		scale: 0.25;
		filter: blur(4px);
	}
	@media (prefers-reduced-motion: reduce) {
		.state .icon {
			transition: none;
		}
	}
</style>
