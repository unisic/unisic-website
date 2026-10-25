<script lang="ts">
	import type { Capture } from '#lib/ui.svelte.js';

	let { cap, width }: { cap: Capture; width: number } = $props();

	const scale = $derived(width / cap.w);

	function mount(el: HTMLElement) {
		const copy = cap.node.cloneNode(true) as HTMLElement;
		copy.style.inset = 'auto';
		copy.style.left = '0';
		copy.style.top = '0';
		copy.style.width = `${cap.sw}px`;
		copy.style.height = `${cap.sh}px`;
		copy.style.transformOrigin = '0 0';
		copy.style.transform = `translate(${-cap.x * scale}px, ${-cap.y * scale}px) scale(${scale})`;
		el.append(copy);
		return () => copy.remove();
	}
</script>

<div class="thumb" style:width="{width}px" style:height="{Math.round(cap.h * scale)}px" inert aria-hidden="true" {@attach mount}></div>

<style>
	.thumb {
		position: relative;
		overflow: hidden;
		border-radius: var(--r1);
		outline: 1px solid oklch(1 0 0 / 0.1);
		background: var(--deep);
		pointer-events: none;
	}
	:global([data-theme='latte']) .thumb {
		outline-color: oklch(0 0 0 / 0.1);
	}
</style>
