<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Copy from './Copy.svelte';

	// The first block of `unisic --help`, read here the way OCR would read it.
	const LINES = [
		'Capture:',
		'  --fullscreen    Capture all screens',
		'  --region        Capture a selected region',
		'  --scroll        Capture a scrolling region (long screenshot)',
		'  --window        Capture the active window',
		'  --monitor       Capture the screen under the cursor',
		'  --recapture     Capture the last selected region again',
		'  --measure       Measure a selected region',
		'  --gif           Record a selected region as a GIF'
	];
	const TEXT = LINES.join('\n');
	const QR = 'M4 4.5h7m3 0h1m1 0h1m2 0h1m2 0h7M4 5.5h1m5 0h1m1 0h2m3 0h1m1 0h1m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m2 0h1m1 0h3m1 0h2m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h5m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h3m2 0h3m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M14 11.5h1m1 0h1m2 0h1M4 12.5h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h1m3 0h1m3 0h1m2 0h1M4 13.5h2m3 0h1m1 0h3m1 0h3m2 0h3m5 0h1M4 14.5h3m3 0h4m1 0h1m2 0h1m1 0h2m1 0h2m1 0h3M4 15.5h2m1 0h1m1 0h1m1 0h8m1 0h3m4 0h1M8 16.5h1m1 0h3m1 0h2m2 0h6m1 0h1m1 0h2M5 17.5h2m5 0h2m1 0h1m2 0h1m2 0h2m2 0h1m2 0h1M4 18.5h1m3 0h7m2 0h1m5 0h1m2 0h3M5 19.5h1m1 0h1m1 0h1m3 0h1m1 0h1m8 0h1m2 0h1M4 20.5h1m1 0h7m3 0h1m3 0h6M12 21.5h1m1 0h4m1 0h2m3 0h2m1 0h2M4 22.5h7m3 0h3m1 0h3m1 0h1m1 0h2m1 0h2M4 23.5h1m5 0h1m3 0h1m1 0h3m1 0h1m3 0h2m1 0h2M4 24.5h1m1 0h3m1 0h1m1 0h4m2 0h1m1 0h6m2 0h1M4 25.5h1m1 0h3m1 0h1m2 0h3m2 0h1m4 0h4M4 26.5h1m1 0h3m1 0h1m1 0h3m2 0h1m3 0h1m2 0h1m3 0h1M4 27.5h1m5 0h1m4 0h1m3 0h3m2 0h2m1 0h1M4 28.5h7m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1m3 0h2';

	let shown = $state(false);

	function once(el: HTMLElement) {
		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				shown = true;
				io.disconnect();
			},
			{ rootMargin: '0px 0px -20% 0px' }
		);
		io.observe(el);
		return () => io.disconnect();
	}
</script>

<Chapter
	id="read"
	num="04"
	mode="ocr"
	kicker="OCR and QR"
	title="Copy text out of pixels."
	lede="Select any text on screen and get it back as text. Tesseract does the reading, with Polish and English and automatic language detection. Point Unisic at a QR code or a barcode and zxing-cpp hands you what it encodes."
>
	<div class="grid wrap">
		<div class="ocr panel" data-shown={shown} {@attach once}>
			<div class="bar">
				<span class="label">OCR region</span>
				<span class="count" aria-hidden="true">{shown ? LINES.length : 0} lines</span>
			</div>
			<div class="page">
				<pre>{#each LINES as line, i (i)}<span class="ln" style:--i={i}>{line}</span>
{/each}</pre>
			</div>
			<div class="out">
				<p>Recognized text goes straight to the clipboard.</p>
				<Copy text={TEXT} label="Copy text" />
			</div>
		</div>

		<div class="qr panel" data-shown={shown}>
			<div class="code">
				<svg viewBox="4 4 25 25" shape-rendering="crispEdges" role="img" aria-label="QR code for unisic.app">
					<path d={QR} stroke="currentColor" stroke-width="1" fill="none" />
				</svg>
				<i class="c tl" aria-hidden="true"></i><i class="c tr" aria-hidden="true"></i><i class="c bl" aria-hidden="true"></i><i class="c br" aria-hidden="true"></i>
			</div>
			<p class="label">Decoded</p>
			<a class="decoded" href="https://unisic.app">https://unisic.app</a>
		</div>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s6);
	}
	.ocr {
		display: grid;
		overflow: hidden;
	}
	.bar,
	.out {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--s3);
		padding: var(--s3) var(--s5);
	}
	.bar {
		border-bottom: 1px solid var(--line);
	}
	.out {
		border-top: 1px solid var(--line);
		font-size: var(--t-small);
		color: var(--muted);
	}
	.count {
		font: var(--t-label) var(--font-mono);
		font-variant-numeric: tabular-nums;
		color: var(--mode);
	}
	.page {
		position: relative;
		overflow: hidden;
		background: var(--deep);
	}
	pre {
		margin: 0;
		padding: var(--s5);
		overflow-x: auto;
		font-size: clamp(0.75rem, 0.65rem + 0.4vw, 0.9375rem);
		line-height: 2.1;
	}
	.ln {
		padding: 2px 4px;
		border-radius: 3px;
		box-shadow: 0 0 0 1px var(--mode);
		background: color-mix(in oklab, var(--mode) 14%, transparent);
	}

	.qr {
		display: grid;
		align-content: start;
		justify-items: start;
		gap: var(--s3);
		padding: var(--s5);
	}
	.code {
		position: relative;
		width: min(100%, 240px);
		padding: 18px;
		border-radius: var(--r2);
		background: #fff;
		color: #000;
	}
	.code svg {
		display: block;
		width: 100%;
		height: auto;
	}
	.c {
		position: absolute;
		width: 18px;
		height: 18px;
		border: 0 solid var(--mode);
	}
	.tl { left: -8px; top: -8px; border-width: 2px 0 0 2px; }
	.tr { right: -8px; top: -8px; border-width: 2px 2px 0 0; }
	.bl { left: -8px; bottom: -8px; border-width: 0 0 2px 2px; }
	.br { right: -8px; bottom: -8px; border-width: 0 2px 2px 0; }
	.qr .label {
		margin-top: var(--s3);
	}
	.decoded {
		font-family: var(--font-mono);
		color: var(--mode);
		overflow-wrap: anywhere;
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.6fr 1fr;
			align-items: start;
		}
	}

	@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
		.ln {
			box-shadow: 0 0 0 1px transparent;
			background: transparent;
			transition:
				box-shadow 240ms var(--ease-out) calc(300ms + var(--i) * 110ms),
				background-color 240ms var(--ease-out) calc(300ms + var(--i) * 110ms);
		}
		[data-shown='true'] .ln {
			box-shadow: 0 0 0 1px var(--mode);
			background: color-mix(in oklab, var(--mode) 14%, transparent);
		}
		.decoded {
			opacity: 0;
			transform: translateY(4px);
			transition:
				opacity 300ms var(--ease-out) 900ms,
				transform 300ms var(--ease-out) 900ms;
		}
		[data-shown='true'] .decoded {
			opacity: 1;
			transform: none;
		}
	}
</style>
