<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		src,
		alt,
		width,
		height,
		children
	}: { src: string; alt: string; width: number; height: number; children?: Snippet } = $props();

	let w = $state(0);
	let h = $state(0);
	let shown = $state(false);

	function watch(el: HTMLElement) {
		const ro = new ResizeObserver(([entry]) => {
			w = Math.round(entry.contentRect.width);
			h = Math.round(entry.contentRect.height);
		});
		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				shown = true;
				io.disconnect();
			},
			{ rootMargin: '0px 0px -12% 0px' }
		);
		ro.observe(el);
		io.observe(el);
		return () => {
			ro.disconnect();
			io.disconnect();
		};
	}
</script>

<figure class="frame" data-shown={shown} {@attach watch}>
	<div class="clip">
		<img {src} {alt} {width} {height} loading="lazy" decoding="async" />
		{@render children?.()}
	</div>
	<span class="size" aria-hidden="true">{w || width} × {h || height}</span>
	<i class="hd nw"></i><i class="hd ne"></i><i class="hd sw"></i><i class="hd se"></i>
</figure>

<style>
	.frame {
		position: relative;
		margin: 0;
		outline: 1.5px solid var(--mode);
		outline-offset: 6px;
		border-radius: 2px;
		transition: outline-color 300ms ease;
	}
	.clip {
		position: relative;
		overflow: hidden;
		border-radius: 2px;
		background: var(--deep);
	}
	img {
		width: 100%;
		outline: 1px solid oklch(1 0 0 / 0.1);
		outline-offset: -1px;
	}
	:global([data-theme='latte']) img {
		outline-color: oklch(0 0 0 / 0.1);
	}
	.size {
		position: absolute;
		left: -7px;
		top: -36px;
		padding: 2px 7px;
		border-radius: 4px;
		background: var(--mode);
		color: var(--mode-ink);
		font: 12px/1.5 var(--font-mono);
		font-variant-numeric: tabular-nums;
		transition: background-color 300ms ease;
	}
	.hd {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 2px;
		background: var(--mode);
		box-shadow: 0 0 0 1.5px var(--bg);
		transition: background-color 300ms ease;
	}
	.nw { left: -11px; top: -11px; }
	.ne { right: -11px; top: -11px; }
	.sw { left: -11px; bottom: -11px; }
	.se { right: -11px; bottom: -11px; }

	@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
		.clip {
			clip-path: inset(12% 18% round 2px);
			transition: clip-path 800ms var(--ease-out);
		}
		.size,
		.hd {
			opacity: 0;
			transition:
				opacity 300ms var(--ease-out) 500ms,
				background-color 300ms ease;
		}
		[data-shown='true'] .clip {
			clip-path: inset(0 round 2px);
		}
		[data-shown='true'] .size,
		[data-shown='true'] .hd {
			opacity: 1;
		}
	}
</style>
