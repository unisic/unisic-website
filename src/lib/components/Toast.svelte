<script lang="ts">
	import { ui } from '#lib/ui.svelte.js';
	import Thumb from './Thumb.svelte';

	const cap = $derived(ui.captures[0]);
	let open = $state(false);

	$effect(() => {
		if (!cap) return;
		open = true;
		const timer = setTimeout(() => (open = false), 4000);
		return () => clearTimeout(timer);
	});
</script>

<div class="toast" data-open={open} role="status" inert={!open}>
	{#if cap}
		<Thumb {cap} width={150} />
		<p>
			<strong>Captured {Math.round(cap.w)} × {Math.round(cap.h)}</strong>
			<a href="#share">Saved to history</a>
		</p>
	{/if}
</div>

<style>
	.toast {
		position: fixed;
		right: var(--s4);
		bottom: var(--s4);
		z-index: var(--z-toast);
		display: flex;
		align-items: center;
		gap: var(--s3);
		max-width: calc(100% - 2 * var(--s4));
		padding: var(--s2) var(--s4) var(--s2) var(--s2);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow:
			0 0 0 1px var(--line),
			0 18px 40px -12px rgb(0 0 0 / 0.5);
		opacity: 0;
		transform: translateY(calc(100% + var(--s4)));
		transition:
			opacity 260ms var(--ease-out),
			transform 260ms var(--ease-out);
	}
	.toast[data-open='true'] {
		opacity: 1;
		transform: none;
	}
	p {
		display: grid;
		gap: 2px;
		font-size: var(--t-small);
	}
	strong {
		font-variant-numeric: tabular-nums;
	}
	a {
		position: relative;
		display: inline-flex;
		align-items: center;
		min-height: 32px;
		color: var(--accent);
	}
	/* The tap area reaches 44px into the toast's own padding without making the toast taller. */
	a::after {
		content: '';
		position: absolute;
		inset: -6px 0;
	}
	@media (prefers-reduced-motion: reduce) {
		.toast {
			transform: none;
			transition-property: opacity;
		}
	}
</style>
