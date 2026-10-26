<script lang="ts">
	import { flushSync } from 'svelte';
	import Chapter from './Chapter.svelte';
	import { THEMES, reduced, ui } from '#lib/ui.svelte.js';

	const [dark, light] = THEMES;

	function pick(id: string, e: MouseEvent & { currentTarget: HTMLElement }) {
		if (id === ui.theme) return;
		const apply = () => flushSync(() => ui.setTheme(id));
		// System can resolve to the theme already on screen; nothing to animate then.
		if (!('startViewTransition' in document) || reduced.current || ui.resolve(id) === ui.shown) return apply();

		let x = e.clientX;
		let y = e.clientY;
		if (e.detail === 0) {
			const r = e.currentTarget.getBoundingClientRect();
			x = r.left + r.width / 2;
			y = r.top + r.height / 2;
		}
		const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
		document
			.startViewTransition(apply)
			.ready.then(() => {
				document.documentElement.animate(
					{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
					{ duration: 560, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', pseudoElement: '::view-transition-new(root)' }
				);
			})
			.catch(() => {
				// Skipped because another transition started or the tab is hidden; apply() has already run.
			});
	}
</script>

<Chapter
	id="themes"
	kicker="Themes and languages"
	title="Your colors, your language."
	lede="Six themes ship with Unisic, plus one that follows your system's light or dark scheme and accent color. Pick one below and this page switches with it."
>
	<div class="picks wrap" role="group" aria-label="Page theme">
		<button
			type="button"
			class="system"
			aria-pressed={ui.theme === 'system'}
			onclick={(e) => pick('system', e)}
			style:--a={dark.bg}
			style:--b={dark.surface}
			style:--c={light.bg}
			style:--d={light.accent}
		>
			<span class="chip" aria-hidden="true"><i></i><i></i><i></i></span>
			System
		</button>
		{#each THEMES as t (t.id)}
			<button
				type="button"
				aria-pressed={ui.theme === t.id}
				onclick={(e) => pick(t.id, e)}
				style:--a={t.bg}
				style:--b={t.surface}
				style:--c={t.accent}
				style:--d={t.text}
			>
				<span class="chip" aria-hidden="true"><i></i><i></i><i></i></span>
				{t.name}
			</button>
		{/each}
	</div>
	<p class="langs wrap">
		<span class="label">Interface languages</span>
		English, Polish, Spanish, Italian, French, Russian and German. Unisic follows your desktop's language unless you pick
		one in Settings.
	</p>
</Chapter>

<style>
	.picks {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
		gap: var(--s2);
	}
	.picks button {
		display: grid;
		align-content: start;
		gap: var(--s3);
		padding: var(--s3);
		border: 0;
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		font: inherit;
		font-size: var(--t-small);
		font-weight: 600;
		text-align: left;
		text-wrap: balance;
		cursor: pointer;
		transition:
			box-shadow 160ms ease,
			transform 160ms var(--ease-out);
	}
	.picks button[aria-pressed='true'] {
		box-shadow: inset 0 0 0 2px var(--mode);
	}
	.picks button:active {
		transform: scale(0.96);
	}
	.picks button:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}
	.chip {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		height: 44px;
		padding: 6px;
		gap: 4px;
		border-radius: var(--r1);
		background: var(--a);
		box-shadow: inset 0 0 0 1px oklch(1 0 0 / 0.12);
	}
	.chip i {
		border-radius: 2px;
		background: var(--b);
	}
	.chip i:nth-child(2) {
		background: var(--c);
	}
	.chip i:nth-child(3) {
		background: var(--d);
	}
	.system .chip {
		background: linear-gradient(135deg, var(--a) 50%, var(--c) 50%);
	}
	.langs {
		display: grid;
		gap: var(--s2);
		margin-top: var(--s6);
		color: var(--muted);
		text-wrap: pretty;
	}
</style>
