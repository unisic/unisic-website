<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Frame from './Frame.svelte';
	import { ui, inview, reduced, calm } from '#lib/ui.svelte.js';

	const FORMATS = [
		{ id: 'gif', label: 'GIF', fps: 15 },
		{ id: 'mp4', label: 'MP4', fps: 30 },
		{ id: 'webm', label: 'WebM', fps: 30 }
	];
	const KEYS = ['Ctrl+C', 'Ctrl+V', 'Ctrl+S', 'Alt+Tab'];

	let format = $state('webm');
	let visible = $state(false);
	let seconds = $state(0);

	const fps = $derived(FORMATS.find((f) => f.id === format)?.fps ?? 30);
	const clock = $derived(`${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`);
	const keys = $derived(KEYS[Math.floor(seconds / 2) % KEYS.length]);

	$effect(() => {
		if (!visible || calm.current) return;
		const timer = setInterval(() => (seconds = (seconds + 1) % 3600), 1000);
		return () => clearInterval(timer);
	});
</script>

<Chapter
	id="record"
	mode="video"
	split
	kicker="Record"
	title="Record the screen, with sound."
	lede="A region, the full screen or a window, saved as GIF, MP4 or WebM. System sound, the microphone and single apps land on separate tracks, and instant replay keeps the last stretch of the screen."
>
	<div class="grid wrap">
		<div class="media" data-run={visible && !ui.paused} {@attach inview((v) => (visible = v))}>
			<Frame
				src="/img/record.webp"
				width={1060}
				height={700}
				alt="Unisic's Screen recording page: Screen, Region or Window, WebM format, frame rate, CRF quality, system audio, microphone, application audio and a replay length of 30 seconds."
			>
				{#if !reduced.current}
					<div class="fx" aria-hidden="true">
						<span class="ripple one"></span>
						<span class="ripple two"></span>
						<span class="cursor">
							<i class="halo"></i>
							<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6.5 1.5L9 19z" /></svg>
						</span>
						<span class="keys">
							{#each keys.split('+') as k, i (i)}<kbd class="cap">{k}</kbd>{/each}
						</span>
					</div>
				{/if}
				<span class="rec" aria-hidden="true"><i></i>REC {reduced.current ? '' : clock}</span>
			</Frame>
		</div>

		<div class="side">
			<fieldset class="formats">
				<legend class="label">Format</legend>
				{#each FORMATS as f (f.id)}
					<label>
						<input type="radio" name="format" value={f.id} bind:group={format} />
						<span>{f.label}</span>
					</label>
				{/each}
			</fieldset>
			<p class="fps" aria-live="polite"><strong>{fps}</strong> frames per second by default</p>
			<div class="drawn">
				<h3 class="label">Drawn into the recording</h3>
				<ul>
					<li><strong>Pointer halo</strong>keeps the cursor easy to find in a scaled-down video</li>
					<li><strong>Click ripples</strong>show where and when you clicked</li>
					<li><strong>Key badge</strong>shows the shortcuts you press, off until you turn it on</li>
				</ul>
			</div>
		</div>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s7);
	}
	.media {
		position: relative;
	}
	.fx {
		position: absolute;
		inset: 0;
		container-type: size;
		pointer-events: none;
	}
	.cursor,
	.ripple {
		position: absolute;
		left: 0;
		top: 0;
	}
	.cursor {
		width: 22px;
		height: 22px;
		transform: translate(20cqw, 72cqh);
	}
	.cursor svg {
		position: relative;
		width: 22px;
		height: 22px;
		fill: #fff;
		stroke: #000;
		stroke-width: 1.4;
		stroke-linejoin: round;
	}
	.halo {
		position: absolute;
		left: -15px;
		top: -15px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: rgb(255 214 0 / 0.45);
	}
	.ripple {
		width: 44px;
		height: 44px;
		margin: -18px 0 0 -18px;
		border-radius: 50%;
		box-shadow: inset 0 0 0 3px var(--mode);
		opacity: 0;
	}
	.ripple.one {
		transform: translate(46cqw, 38cqh) scale(0.3);
	}
	.ripple.two {
		transform: translate(74cqw, 60cqh) scale(0.3);
	}
	.keys {
		position: absolute;
		left: 50%;
		bottom: 6cqh;
		display: flex;
		gap: 4px;
		padding: 6px;
		border-radius: var(--r2);
		background: rgb(0 0 0 / 0.72);
		translate: -50% 0;
	}
	.rec {
		position: absolute;
		left: 12px;
		top: 8px;
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 4px 9px;
		border-radius: var(--r1);
		background: rgb(0 0 0 / 0.72);
		color: #fff;
		font: 12px/1.4 var(--font-mono);
		font-variant-numeric: tabular-nums;
	}
	.rec i {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--c-video);
	}

	.side {
		display: grid;
		align-content: start;
		gap: var(--s5);
	}
	.formats {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s2);
		margin: 0;
		padding: 0;
		border: 0;
	}
	legend {
		width: 100%;
		margin-bottom: var(--s2);
	}
	.formats label {
		position: relative;
	}
	.formats input {
		position: absolute;
		inset: 0;
		margin: 0;
		opacity: 0;
		cursor: pointer;
	}
	.formats span {
		display: grid;
		place-items: center;
		min-width: 76px;
		min-height: 44px;
		padding: 0 var(--s4);
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		font-weight: 650;
		transition:
			background-color 160ms ease,
			color 160ms ease,
			transform 160ms var(--ease-out);
	}
	/* Page controls take the site accent; the mode color stays inside the demo, where the app uses it. */
	.formats input:checked + span {
		background: var(--accent);
		color: var(--on-accent);
		box-shadow: none;
	}
	.formats input:focus-visible + span {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
	}
	.formats label:active span {
		transform: scale(0.96);
	}
	.fps {
		color: var(--muted);
	}
	.fps strong {
		font-size: var(--t-h3);
		font-variant-numeric: tabular-nums;
		color: var(--text);
	}
	.drawn {
		display: grid;
		gap: var(--s3);
		padding-top: var(--s5);
		border-top: 1px solid var(--line);
	}
	.drawn ul {
		display: grid;
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--t-small);
		color: var(--muted);
	}
	.drawn li strong {
		display: block;
		color: var(--text);
		font-size: var(--t-body);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.45fr 1fr;
			align-items: start;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.cursor {
			animation: path 8s var(--ease-in-out) infinite paused;
		}
		.halo {
			animation: halo 8s ease infinite paused;
		}
		.ripple.one {
			--at: translate(46cqw, 38cqh);
			animation: ripple 8s var(--ease-out) 2.24s infinite paused;
		}
		.ripple.two {
			--at: translate(74cqw, 60cqh);
			animation: ripple 8s var(--ease-out) 4.64s infinite paused;
		}
		.rec i {
			animation: blink 1s steps(2, jump-none) infinite paused;
		}
		[data-run='true'] :is(.cursor, .halo, .ripple, .rec i) {
			animation-play-state: running;
		}
	}
	@keyframes path {
		0% {
			transform: translate(20cqw, 72cqh);
		}
		28% {
			transform: translate(46cqw, 38cqh);
		}
		58% {
			transform: translate(74cqw, 60cqh);
		}
		85% {
			transform: translate(32cqw, 26cqh);
		}
		100% {
			transform: translate(20cqw, 72cqh);
		}
	}
	@keyframes halo {
		0%,
		26%,
		32%,
		56%,
		62%,
		100% {
			transform: none;
		}
		28%,
		58% {
			transform: scale(0.7);
		}
	}
	@keyframes ripple {
		0% {
			opacity: 0.95;
			transform: var(--at) scale(0.3);
		}
		12% {
			opacity: 0;
			transform: var(--at) scale(1.8);
		}
		100% {
			opacity: 0;
			transform: var(--at) scale(1.8);
		}
	}
	@keyframes blink {
		to {
			opacity: 0.2;
		}
	}
</style>
