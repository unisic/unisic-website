<script lang="ts">
	let readout = $state<HTMLSpanElement>();

	$effect(() => {
		let frame = 0;
		const paint = () => {
			frame = 0;
			if (readout)
				readout.textContent = `${innerWidth} × ${innerHeight}  y ${String(Math.round(scrollY)).padStart(5, '0')}`;
		};
		const queue = () => {
			if (!frame) frame = requestAnimationFrame(paint);
		};
		paint();
		addEventListener('scroll', queue, { passive: true });
		addEventListener('resize', queue, { passive: true });
		return () => {
			removeEventListener('scroll', queue);
			removeEventListener('resize', queue);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="hud" aria-hidden="true">
	<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
	<span class="readout" bind:this={readout}></span>
</div>

<style>
	.hud {
		display: none;
		position: fixed;
		inset: 72px 12px 12px;
		z-index: var(--z-hud);
		pointer-events: none;
	}
	.c {
		position: absolute;
		width: 18px;
		height: 18px;
		border: 0 solid var(--mode);
		opacity: 0.8;
		transition: border-color 300ms ease;
	}
	.tl { left: 0; top: 0; border-width: 2px 0 0 2px; }
	.tr { right: 0; top: 0; border-width: 2px 2px 0 0; }
	.bl { left: 0; bottom: 0; border-width: 0 0 2px 2px; }
	.br { right: 0; bottom: 0; border-width: 0 2px 2px 0; }
	.readout {
		position: absolute;
		left: 26px;
		bottom: -3px;
		font: 11px var(--font-mono);
		font-variant-numeric: tabular-nums;
		white-space: pre;
		color: var(--muted);
	}
	@media (min-width: 720px) {
		.hud {
			display: block;
		}
	}
</style>
