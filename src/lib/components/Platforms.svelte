<script lang="ts">
	import Chapter from './Chapter.svelte';
	import { inview } from '#lib/ui.svelte.js';

	type State = 'yes' | 'part' | 'no';
	type Platform = { name: string; status: string; body: string; checks: [State, string][]; quote?: string };

	// From the README's platform sections.
	const PLATFORMS: Platform[] = [
		{
			name: 'Linux, Wayland',
			status: 'Primary',
			body: 'Built on xdg-desktop-portal, KWin ScreenShot2 and PipeWire, nothing else. This is where Unisic is used every day.',
			checks: [
				['yes', 'Screenshots, overlay and editor'],
				['yes', 'GIF and video with sound'],
				['yes', 'Single-window recording'],
				['yes', 'Silent capture on KDE Plasma'],
				['part', 'GNOME and wlroots go through portal dialogs']
			]
		},
		{
			name: 'Linux, X11',
			status: 'Best effort',
			body: 'A second target, checked by walking through the features once on one desktop. Recording reads frames with XShm, so it works without a portal backend.',
			checks: [
				['yes', 'Screenshots, overlay and editor'],
				['yes', 'OCR, history and uploads'],
				['yes', 'Recording through XShm'],
				['yes', 'Hotkeys through XGrabKey'],
				['no', 'Single-window recording']
			]
		},
		{
			name: 'Windows 11',
			status: 'Experimental',
			body: 'A preview, checked by hand rather than used every day. Installs per user with no administrator rights and updates itself.',
			checks: [
				['yes', 'Screenshots, overlay and editor'],
				['yes', 'OCR, tray and hotkeys'],
				['yes', 'GIF and video of a screen or region'],
				['yes', 'Per-app sound on Windows 10 2004 or later'],
				['no', 'Single-window recording, not yet']
			],
			quote: 'The Windows port is written entirely by AI.'
		}
	];
	const SAY: Record<State, string> = { yes: 'Works', part: 'Partly', no: 'Not available' };

	let shown = $state(false);
</script>

<Chapter
	id="platforms"
	num="08"
	mode="video"
	kicker="Platforms"
	title="Wayland first, the rest honestly labelled."
>
	<ul class="cards wrap" data-shown={shown} {@attach inview((v) => v && (shown = true), '0px 0px -15% 0px')}>
		{#each PLATFORMS as p, c (p.name)}
			<li class="card panel" style:--c={c}>
				<div class="top">
					<h3>{p.name}</h3>
					<span class="status" data-s={c}>{p.status}</span>
				</div>
				<p class="body">{p.body}</p>
				<ul class="checks">
					{#each p.checks as [state, text], i (text)}
						<li data-state={state} style:--i={i}>
							<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
								{#if state === 'yes'}<path d="M5 12.5l4.5 4.5L19 7.5" />{:else if state === 'part'}<path d="M6 12h12" />{:else}<path d="M7 7l10 10M17 7L7 17" />{/if}
							</svg>
							<span class="sr-only">{SAY[state]}:</span>
							{text}
						</li>
					{/each}
				</ul>
				{#if p.quote}
					<blockquote cite="https://github.com/unisic/unisic#readme">
						<p>"{p.quote}"</p>
						<footer>From the <a href="https://github.com/unisic/unisic#readme">README</a></footer>
					</blockquote>
				{/if}
			</li>
		{/each}
	</ul>
	<p class="more wrap">
		Which desktop takes which path, and what each one asks you to confirm:
		<a href="/docs/compositors" data-sveltekit-reload>compositor support</a>.
	</p>
</Chapter>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
		gap: var(--s4);
		margin-block: 0;
		padding: 0;
		list-style: none;
	}
	.card {
		display: grid;
		align-content: start;
		gap: var(--s4);
		padding: var(--s5);
	}
	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--s2);
	}
	.top h3 {
		font-size: 1.375rem;
	}
	.status {
		padding: 3px 10px;
		border-radius: 99px;
		font: var(--t-label) var(--font-mono);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		box-shadow: inset 0 0 0 1px currentColor;
	}
	.status[data-s='0'] {
		color: var(--success);
	}
	.status[data-s='1'] {
		color: var(--accent);
	}
	.status[data-s='2'] {
		color: var(--c-gif);
	}
	.body {
		font-size: var(--t-small);
		color: var(--muted);
	}
	.checks {
		display: grid;
		gap: var(--s2);
		margin: 0;
		padding: var(--s4) 0 0;
		border-top: 1px solid var(--line);
		list-style: none;
	}
	.checks li {
		display: flex;
		align-items: flex-start;
		gap: var(--s2);
		font-size: var(--t-small);
	}
	.checks .icon {
		margin-top: 2px;
		color: var(--success);
	}
	[data-state='part'] .icon {
		color: var(--accent);
	}
	[data-state='no'] {
		color: var(--muted);
	}
	[data-state='no'] .icon {
		color: var(--danger);
	}
	blockquote {
		margin: 0;
		padding-left: var(--s4);
		border-left: 2px solid var(--c-gif);
	}
	blockquote p {
		font-weight: 600;
	}
	blockquote footer {
		margin-top: var(--s1);
		font-size: var(--t-small);
		color: var(--muted);
	}
	a {
		color: var(--accent);
	}
	.more {
		margin-top: var(--s5);
		font-size: var(--t-small);
		color: var(--muted);
	}

	@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
		.checks li {
			opacity: 0;
			transform: translateX(-6px);
			transition:
				opacity 260ms var(--ease-out),
				transform 260ms var(--ease-out);
			transition-delay: calc(var(--c) * 120ms + var(--i) * 70ms + 200ms);
		}
		[data-shown='true'] .checks li {
			opacity: 1;
			transform: none;
		}
	}
</style>
