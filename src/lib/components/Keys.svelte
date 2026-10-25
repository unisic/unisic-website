<script lang="ts">
	import Chapter from './Chapter.svelte';
	import { ui, inview, calm } from '#lib/ui.svelte.js';

	type Row = { action: string; linux: string[]; windows: string[]; cli?: string };

	// Default bindings. Several combos in one list are alternatives.
	const ROWS: Row[] = [
		{ action: 'Full screen', linux: ['Meta+Shift+1'], windows: ['Ctrl+Shift+Print'], cli: '--fullscreen' },
		{ action: 'Region', linux: ['Meta+Shift+2'], windows: ['Print', 'Ctrl+Print'], cli: '--region' },
		{ action: 'Window', linux: ['Meta+Shift+3'], windows: ['Alt+Print'], cli: '--window' },
		{ action: 'Scrolling capture', linux: [], windows: [], cli: '--scroll' },
		{ action: 'Record a GIF', linux: ['Meta+Shift+G'], windows: ['Meta+Shift+G'], cli: '--gif' },
		{ action: 'Record video', linux: ['Meta+Shift+R'], windows: ['Shift+Print'], cli: '--hotkey record-video' },
		{ action: 'OCR a region', linux: ['Meta+Shift+T'], windows: ['Meta+Shift+O'], cli: '--hotkey ocr-region' },
		{ action: 'Copy the last capture', linux: ['Meta+Shift+C'], windows: ['Meta+Shift+L'], cli: '--hotkey copy-last' },
		{ action: 'Instant replay', linux: ['Meta+Shift+I'], windows: ['Meta+Shift+I'], cli: '--hotkey instant-replay' },
		{ action: 'Emergency stop', linux: ['Ctrl+Escape'], windows: ['Ctrl+Alt+Escape'] }
	];
	const NAME: Record<string, Record<string, string>> = {
		linux: { Escape: 'Esc' },
		windows: { Meta: 'Win', Escape: 'Esc' }
	};

	let visible = $state(false);
	let on = $state(0);

	$effect(() => {
		if (!visible || calm.current) return;
		const timer = setInterval(() => (on = (on + 1) % ROWS.length), 1600);
		return () => clearInterval(timer);
	});

	const keys = (combo: string) => combo.split('+').map((k) => NAME[ui.os][k] ?? k);
</script>

<Chapter
	id="keys"
	num="06"
	mode="shot"
	kicker="Hotkeys and CLI"
	title="Keys for everything, flags for scripts."
	lede="Every action has a global shortcut and a command you can bind anywhere else: in your compositor, a launcher or a script. When Unisic is already running, the command is handed to that instance."
>
	<div class="wrap stack">
		<div class="os" role="group" aria-label="Show shortcuts for">
			<button type="button" aria-pressed={ui.os === 'linux'} onclick={() => (ui.os = 'linux')}>Linux</button>
			<button type="button" aria-pressed={ui.os === 'windows'} onclick={() => (ui.os = 'windows')}>Windows</button>
		</div>

		<!-- svelte-ignore a11y_no_noninteractive_tabindex: a scrolling region must take focus so keyboard users can scroll it -->
		<div class="scroller" role="region" aria-labelledby="keys-caption" tabindex="0" {@attach inview((v) => (visible = v))}>
			<table>
				<caption id="keys-caption" class="sr-only">Default hotkeys on {ui.os === 'linux' ? 'Linux' : 'Windows'} and the matching command</caption>
				<thead>
					<tr>
						<th scope="col">Action</th>
						<th scope="col">Hotkey</th>
						<th scope="col">Command</th>
					</tr>
				</thead>
				<tbody>
					{#each ROWS as row, i (row.action)}
						<tr data-on={visible && !calm.current && i === on}>
							<th scope="row">{row.action}</th>
							<td>
								{#each row[ui.os] as combo, c (combo)}
									{#if c}<span class="or">or</span>{/if}
									<span class="combo">
										{#each keys(combo) as k, j (j)}<kbd class="cap">{k}</kbd>{/each}
									</span>
								{:else}
									<span class="none">No default, set one in Settings</span>
								{/each}
							</td>
							<td>
								{#if row.cli}<code>unisic {row.cli}</code>{:else}<span class="none">Hotkey only</span>{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="foot">
			Rebind any shortcut in Settings › Hotkeys. On Linux, <kbd class="cap">Ctrl</kbd>+<kbd class="cap">Esc</kbd> is fixed so a
			stuck recording can always be stopped. More flags, such as <code>--delay</code>, <code>--output -</code> and
			<code>--format webp</code>, are in the
			<a href="/docs/configuration#command-line-interface" data-sveltekit-reload>CLI reference</a>.
		</p>
	</div>
</Chapter>

<style>
	.stack {
		display: grid;
		gap: var(--s5);
	}
	.os {
		display: inline-flex;
		justify-self: start;
		padding: 4px;
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.os button {
		min-width: 104px;
		min-height: 44px;
		padding: 0 var(--s4);
		border: 0;
		border-radius: calc(var(--r3) - 4px);
		background: transparent;
		color: var(--muted);
		font: inherit;
		font-weight: 650;
		cursor: pointer;
		transition:
			background-color 160ms ease,
			color 160ms ease,
			transform 160ms var(--ease-out);
	}
	.os button[aria-pressed='true'] {
		background: var(--mode);
		color: var(--mode-ink);
	}
	.os button:active {
		transform: scale(0.96);
	}
	.os button:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}

	.scroller {
		overflow-x: auto;
		border-radius: var(--r3);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.scroller:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 3px;
	}
	table {
		width: 100%;
		min-width: 640px;
		border-collapse: collapse;
	}
	th,
	td {
		padding: var(--s3) var(--s4);
		text-align: left;
		vertical-align: middle;
	}
	thead th {
		font: var(--t-label) var(--font-mono);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
		border-bottom: 1px solid var(--line-strong);
	}
	tbody tr + tr {
		border-top: 1px solid var(--line);
	}
	tbody tr {
		transition: background-color 200ms ease;
	}
	tbody tr[data-on='true'] {
		background: color-mix(in oklab, var(--mode) 10%, transparent);
	}
	tbody tr[data-on='true'] kbd {
		background: var(--mode);
		color: var(--mode-ink);
		transform: translateY(1px);
	}
	tbody th {
		font-weight: 600;
	}
	td {
		white-space: nowrap;
	}
	.combo {
		display: inline-flex;
		gap: 4px;
	}
	.or {
		margin: 0 var(--s2);
		font-size: var(--t-small);
		color: var(--muted);
	}
	.none {
		font-size: var(--t-small);
		color: var(--muted);
	}
	code {
		font-size: var(--t-small);
	}
	td code {
		color: var(--mode);
	}
	.foot {
		max-width: 70ch;
		font-size: var(--t-small);
		color: var(--muted);
	}
	.foot a {
		color: var(--accent);
	}
</style>
