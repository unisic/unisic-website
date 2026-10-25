<script lang="ts">
	import { flushSync } from 'svelte';
	import Chapter from './Chapter.svelte';
	import { reduced } from '#lib/ui.svelte.js';

	type Theme = { id: string; name: string; bg: string; surface: string; accent: string; text: string };

	// Colors from resources/themes/*.json; Unisic itself is compiled in.
	const THEMES: Theme[] = [
		{ id: 'unisic', name: 'Unisic', bg: '#100E2C', surface: '#1E1B4A', accent: '#C8ACD6', text: '#F3F0FA' },
		{ id: 'latte', name: 'Catppuccin Latte', bg: '#EFF1F5', surface: '#FFFFFF', accent: '#8839EF', text: '#4C4F69' },
		{ id: 'mocha', name: 'Catppuccin Mocha', bg: '#1E1E2E', surface: '#313244', accent: '#CBA6F7', text: '#CDD6F4' },
		{ id: 'dracula', name: 'Dracula', bg: '#282A36', surface: '#343746', accent: '#BD93F9', text: '#F8F8F2' },
		{ id: 'gruvbox', name: 'Gruvbox', bg: '#282828', surface: '#3C3836', accent: '#FABD2F', text: '#EBDBB2' },
		{ id: 'nord', name: 'Nord', bg: '#2E3440', surface: '#3B4252', accent: '#88C0D0', text: '#ECEFF4' }
	];

	let current = $state('unisic');

	$effect(() => {
		current = document.documentElement.dataset.theme ?? 'unisic';
	});

	function pick(id: string, e: MouseEvent & { currentTarget: HTMLElement }) {
		if (id === current) return;
		const apply = () => {
			document.documentElement.dataset.theme = id;
			// Private windows and blocked storage throw here; the theme still applies until the tab closes.
			try {
				localStorage.setItem('unisic-theme', id);
			} catch {}
			flushSync(() => (current = id));
		};
		if (!('startViewTransition' in document) || reduced.current) return apply();

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
	num="06"
	mode="measure"
	kicker="Themes and languages"
	title="Your colors, your language."
	lede="Six themes ship with Unisic, plus one that follows your system's light or dark scheme and accent color. Pick one below and this page switches with it. The interface comes in seven languages and follows your system's."
>
	<div class="picks wrap" role="group" aria-label="Page theme">
		{#each THEMES as t (t.id)}
			<button
				type="button"
				aria-pressed={current === t.id}
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
</Chapter>

<style>
	.picks {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
		gap: var(--s2);
	}
	.picks button {
		display: flex;
		align-items: center;
		gap: var(--s3);
		min-height: 52px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--text);
		font: inherit;
		font-size: var(--t-small);
		font-weight: 600;
		text-align: left;
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
		grid-template-columns: repeat(3, 1fr);
		flex: none;
		width: 36px;
		height: 28px;
		padding: 4px;
		gap: 3px;
		border-radius: 8px;
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
</style>
