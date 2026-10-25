<script lang="ts">
	import { flushSync } from 'svelte';
	import Chapter from './Chapter.svelte';
	import { inview, reduced, calm } from '#lib/ui.svelte.js';

	type Swatch = { name: string; bg: string; surface: string; accent: string; text: string };
	type Theme = { id: string; file: string; json: Swatch & Record<string, string | boolean> };

	// Copied from resources/themes/*.json; Unisic itself is compiled in.
	const THEMES: Theme[] = [
		{
			id: 'unisic',
			file: 'Built in',
			json: { name: 'Unisic', isDark: true, primary: '#17153B', secondary: '#2E236C', tertiary: '#433D8B', accent: '#C8ACD6', bg: '#100E2C', backgroundDeep: '#0B0921', surface: '#1E1B4A', surfaceHi: '#221F52', text: '#F3F0FA', textOnAccent: '#1B1834', danger: '#FF6B81', success: '#7BD88F' }
		},
		{
			id: 'latte',
			file: 'catppuccin-latte.json',
			json: { name: 'Catppuccin Latte', isDark: false, primary: '#EFF1F5', secondary: '#E6E9EF', tertiary: '#CCD0DA', accent: '#8839EF', bg: '#EFF1F5', surface: '#FFFFFF', surfaceHi: '#E6E9EF', text: '#4C4F69', textOnAccent: '#FFFFFF', danger: '#D20F39', success: '#40A02B' }
		},
		{
			id: 'mocha',
			file: 'catppuccin-mocha.json',
			json: { name: 'Catppuccin Mocha', isDark: true, primary: '#1E1E2E', secondary: '#181825', tertiary: '#45475A', accent: '#CBA6F7', bg: '#1E1E2E', backgroundDeep: '#11111B', surface: '#313244', surfaceHi: '#45475A', text: '#CDD6F4', textOnAccent: '#1E1E2E', danger: '#F38BA8', success: '#A6E3A1' }
		},
		{
			id: 'dracula',
			file: 'dracula.json',
			json: { name: 'Dracula', isDark: true, primary: '#282A36', secondary: '#343746', tertiary: '#44475A', accent: '#BD93F9', bg: '#282A36', backgroundDeep: '#1E202A', surface: '#343746', surfaceHi: '#44475A', text: '#F8F8F2', textOnAccent: '#282A36', danger: '#FF5555', success: '#50FA7B' }
		},
		{
			id: 'gruvbox',
			file: 'gruvbox.json',
			json: { name: 'Gruvbox', isDark: true, primary: '#282828', secondary: '#3C3836', tertiary: '#504945', accent: '#FABD2F', bg: '#282828', backgroundDeep: '#1D2021', surface: '#3C3836', surfaceHi: '#504945', text: '#EBDBB2', textOnAccent: '#282828', danger: '#FB4934', success: '#B8BB26' }
		},
		{
			id: 'nord',
			file: 'nord.json',
			json: { name: 'Nord', isDark: true, primary: '#2E3440', secondary: '#3B4252', tertiary: '#434C5E', accent: '#88C0D0', bg: '#2E3440', backgroundDeep: '#272C36', surface: '#3B4252', surfaceHi: '#434C5E', text: '#ECEFF4', textOnAccent: '#2E3440', danger: '#BF616A', success: '#A3BE8C' }
		}
	];

	// Strings from i18n/unisic_*.ts.
	const LANGS = [
		{ code: 'en', name: 'English', region: 'Region', title: 'Capture a region', full: 'Full screen', gif: 'Record GIF', finish: 'Finish' },
		{ code: 'pl', name: 'Polski', region: 'Obszar', title: 'Przechwyć obszar', full: 'Pełny ekran', gif: 'Nagraj GIF', finish: 'Zakończ' },
		{ code: 'de', name: 'Deutsch', region: 'Bereich', title: 'Einen Bereich aufnehmen', full: 'Vollbild', gif: 'GIF aufnehmen', finish: 'Fertigstellen' },
		{ code: 'es', name: 'Español', region: 'Región', title: 'Capturar una región', full: 'Pantalla completa', gif: 'Grabar GIF', finish: 'Finalizar' },
		{ code: 'fr', name: 'Français', region: 'Région', title: 'Capturer une région', full: 'Écran entier', gif: 'Enregistrer un GIF', finish: 'Terminer' },
		{ code: 'it', name: 'Italiano', region: 'Regione', title: 'Cattura una regione', full: 'Schermo intero', gif: 'Registra GIF', finish: 'Termina' },
		{ code: 'ru', name: 'Русский', region: 'Область', title: 'Снять область', full: 'Весь экран', gif: 'Записать GIF', finish: 'Завершить' }
	];

	let current = $state('unisic');
	let lang = $state(0);
	let manual = $state(false);
	let visible = $state(false);

	const theme = $derived(THEMES.find((t) => t.id === current) ?? THEMES[0]);
	const entries = $derived(Object.entries(theme.json));
	const L = $derived(LANGS[lang]);

	$effect(() => {
		current = document.documentElement.dataset.theme ?? 'unisic';
	});

	$effect(() => {
		if (!visible || manual || calm.current) return;
		const timer = setInterval(() => (lang = (lang + 1) % LANGS.length), 2400);
		return () => clearInterval(timer);
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
	num="07"
	mode="measure"
	kicker="Themes and languages"
	title="Your colors, your language."
	lede="Six themes ship with Unisic, plus one that follows your system's light or dark scheme and accent color. Pick one below and this page switches with it."
>
	<div class="grid wrap">
		<div class="themes">
			<div class="picks" role="group" aria-label="Page theme">
				{#each THEMES as t (t.id)}
					<button
						type="button"
						aria-pressed={current === t.id}
						onclick={(e) => pick(t.id, e)}
						style:--a={t.json.bg}
						style:--b={t.json.surface}
						style:--c={t.json.accent}
						style:--d={t.json.text}
					>
						<span class="chip" aria-hidden="true"><i></i><i></i><i></i></span>
						{t.json.name}
					</button>
				{/each}
			</div>

			<figure class="json panel">
				<figcaption class="label">{theme.file}</figcaption>
				<pre>{'{'}
{#each entries as [key, value], i (key)}  <span class="k">"{key}"</span>: {#if typeof value === 'boolean'}<span class="b">{value}</span>{:else}<span class="s">{#if value.startsWith('#')}<i class="sw" style:background={value}></i>{/if}"{value}"</span>{/if}{i < entries.length - 1 ? ',' : ''}
{/each}{'}'}</pre>
			</figure>
		</div>

		<div class="langs panel" {@attach inview((v) => (visible = v))}>
			<p class="label">Interface language</p>
			<div class="codes" role="group" aria-label="Show the interface in">
				{#each LANGS as l, i (l.code)}
					<button
						type="button"
						lang={l.code}
						aria-pressed={lang === i}
						onclick={() => {
							lang = i;
							manual = true;
						}}>{l.name}</button
					>
				{/each}
			</div>
			<div class="mock" lang={L.code}>
				{#key L.code}
					<div class="swap">
						<span class="tag">{L.region}</span>
						<h3>{L.title}</h3>
						<div class="row">
							<span>{L.full}</span>
							<span>{L.gif}</span>
							<span class="on">{L.finish}</span>
						</div>
					</div>
				{/key}
			</div>
			<p class="note">German, English, French, Italian, Polish, Russian and Spanish. It follows your system language, falls back to English, or uses the one you pick.</p>
		</div>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s6);
	}
	.themes {
		display: grid;
		gap: var(--s5);
	}
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
	.picks button:focus-visible,
	.codes button:focus-visible {
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

	.json {
		margin: 0;
		overflow: hidden;
	}
	figcaption {
		padding: var(--s3) var(--s5);
		border-bottom: 1px solid var(--line);
	}
	pre {
		margin: 0;
		padding: var(--s4) var(--s5);
		overflow-x: auto;
		font-size: 0.8125rem;
		line-height: 1.75;
	}
	.k {
		color: var(--muted);
	}
	.s {
		color: var(--text);
	}
	.b {
		color: var(--accent);
	}
	.sw {
		display: inline-block;
		width: 0.9em;
		height: 0.9em;
		margin-right: 6px;
		vertical-align: -0.1em;
		border-radius: 3px;
		box-shadow: inset 0 0 0 1px oklch(1 0 0 / 0.16);
	}

	.langs {
		display: grid;
		align-content: start;
		gap: var(--s4);
		padding: var(--s5);
	}
	.codes {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s1);
	}
	.codes button {
		min-height: 40px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r1);
		background: transparent;
		color: var(--muted);
		font: inherit;
		font-size: var(--t-small);
		cursor: pointer;
		transition:
			background-color 160ms ease,
			color 160ms ease;
	}
	.codes button[aria-pressed='true'] {
		background: var(--surface-hi);
		color: var(--text);
	}
	.mock {
		display: grid;
		min-height: 196px;
		padding: var(--s5);
		border-radius: var(--r2);
		background: var(--deep);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.swap {
		display: grid;
		align-content: start;
		gap: var(--s3);
	}
	.tag {
		justify-self: start;
		padding: 3px 10px;
		border-radius: 99px;
		background: var(--mode);
		color: var(--mode-ink);
		font: var(--t-label) var(--font-mono);
	}
	.mock h3 {
		font-size: clamp(1.375rem, 1.1rem + 1vw, 1.875rem);
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s2);
	}
	.row span {
		padding: 8px 14px;
		border-radius: var(--r2);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		font-size: var(--t-small);
	}
	.row .on {
		background: var(--accent);
		color: var(--on-accent);
		box-shadow: none;
	}
	.note {
		font-size: var(--t-small);
		color: var(--muted);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.15fr 1fr;
			align-items: start;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.swap {
			animation: swap 320ms var(--ease-out);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.swap {
			animation: fade 200ms ease;
		}
	}
	@keyframes swap {
		from {
			opacity: 0;
			filter: blur(4px);
			transform: translateY(6px);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
	}
</style>
