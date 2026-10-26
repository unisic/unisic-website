<script lang="ts">
	import Chapter from './Chapter.svelte';
	import { inview } from '#lib/ui.svelte.js';
	import { VERSION } from '#lib/release.js';

	type Mark = 'y' | 'p' | 'n';
	type Cell = [Mark, string?] | string;
	type Row = { feature: string; cells: Cell[] };

	const TOOLS = [
		{ name: 'Unisic', version: `v${VERSION}`, href: `https://github.com/unisic/unisic/tree/v${VERSION}` },
		{ name: 'Flameshot', version: 'v14.0.0', href: 'https://github.com/flameshot-org/flameshot/tree/v14.0.0' },
		{ name: 'Spectacle', version: '6.8.1', href: 'https://invent.kde.org/plasma/spectacle/-/tree/v6.8.1' },
		{ name: 'ksnip', version: 'v1.10.1', href: 'https://github.com/ksnip/ksnip/tree/v1.10.1' },
		{ name: 'Satty', version: 'v0.22.0', href: 'https://github.com/Satty-org/Satty/tree/v0.22.0' },
		{ name: 'ShareX', version: 'v21.0.0', href: 'https://github.com/ShareX/ShareX/tree/v21.0.0' }
	];

	// Each value was read from the tool's source, README or release notes for the tag linked in the header.
	const ROWS: Row[] = [
		{ feature: 'Draw on the capture overlay', cells: [['y', 'Enter burns it into the crop'], ['y'], ['y'], ['n', 'Magnifier and rulers only'], ['p', 'Annotates an image taken by another tool'], ['y']] },
		{ feature: 'Image editor', cells: [['y'], ['n', 'Cannot open existing images'], ['y'], ['y'], ['y'], ['y']] },
		{ feature: 'Scrolling capture', cells: [['y'], ['n'], ['n'], ['n'], ['n'], ['y']] },
		{ feature: 'GIF recording', cells: [['y'], ['n'], ['y'], ['n'], ['n'], ['y']] },
		{ feature: 'Video recording', cells: [['y', 'MP4 and WebM'], ['n'], ['y', 'Wayland only'], ['n'], ['n'], ['y']] },
		{ feature: 'Sound in recordings', cells: [['y', 'System, mic and per app'], ['n'], ['y', 'Since Plasma 6.8'], ['n'], ['n'], ['y']] },
		{ feature: 'OCR', cells: [['y', 'Tesseract'], ['n'], ['y', 'Since Plasma 6.6'], ['p', 'Separate plugin'], ['n'], ['y']] },
		{ feature: 'QR code reading', cells: [['y', 'zxing-cpp'], ['n'], ['y'], ['n'], ['n'], ['y']] },
		{ feature: 'Custom upload targets', cells: [['y', '.sxcu, HTTP, FTP, SFTP'], ['n', 'Imgur only, off by default'], ['p', 'KDE Share menu'], ['p', 'Imgur, FTP, scripts'], ['n'], ['y', '.sxcu, FTP, SFTP']] },
		{ feature: 'History with thumbnails', cells: [['y', 'Deleting moves to the trash'], ['p', 'Imgur uploads only'], ['n'], ['n'], ['n'], ['y']] },
		{ feature: 'Wayland', cells: [['y', 'Portals, KWin, PipeWire'], ['y', 'Portal'], ['p', 'KWin only'], ['p', 'Portal or legacy KWin'], ['p', 'Capture left to grim'], ['n']] },
		{ feature: 'X11', cells: [['p', 'Best-effort second target'], ['y', 'Portal or legacy X11'], ['y'], ['y'], 'Not stated', ['n']] },
		{ feature: 'Platforms', cells: ['Linux, Windows 11 (experimental)', 'Linux, Windows, macOS', 'Linux, KDE Plasma', 'Linux, Windows, macOS', 'Linux, BSD', 'Windows'] }
	];
	const SAY: Record<Mark, string> = { y: 'Yes', p: 'Partly', n: 'No' };

	let shown = $state(false);
	// Phones show Unisic beside one other tool, picked here, so the table fits without a sideways scroll.
	let vs = $state(1);
</script>

<Chapter
	id="compare"
	band
	kicker="Compared"
	title="Where it stands among the others."
	lede="Six tools, the same questions. Every answer was checked against the tool's source, README or release notes for the version in the header, so you can check it too."
>
	<div class="wrap">
		<label class="vs">
			Compare Unisic with
			<select bind:value={vs}>
				{#each TOOLS.slice(1) as t, i (t.name)}<option value={i + 1}>{t.name}</option>{/each}
			</select>
		</label>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex: a scrolling region must take focus so keyboard users can scroll it -->
		<div
			class="scroller"
			role="region"
			aria-labelledby="compare-caption"
			tabindex="0"
			data-shown={shown}
			{@attach inview((v) => v && (shown = true), '0px 0px -15% 0px')}
		>
			<table>
				<caption id="compare-caption">Screenshot tools compared. Checked 2026-10-26 against tagged source.</caption>
				<thead>
					<tr>
						<td></td>
						{#each TOOLS as t, i (t.name)}
							<th scope="col" class:us={i === 0} class:off={i > 0 && i !== vs}>
								<a href={t.href}>{t.name}<span>{t.version}</span></a>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each ROWS as row, r (row.feature)}
						<tr style:--r={r}>
							<th scope="row">{row.feature}</th>
							{#each row.cells as cell, i (i)}
								<td class:us={i === 0} class:off={i > 0 && i !== vs}>
									{#if typeof cell === 'string'}
										<span class="text">{cell}</span>
									{:else}
										<span class="mark" data-m={cell[0]}>
											<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
												{#if cell[0] === 'y'}<path d="M5 12.5l4.5 4.5L19 7.5" />{:else if cell[0] === 'p'}<path d="M6 12h12" />{:else}<path d="M7 7l10 10M17 7L7 17" />{/if}
											</svg>
											{SAY[cell[0]]}
										</span>
										{#if cell[1]}<span class="note">{cell[1]}</span>{/if}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="foot">
			Satty only annotates: the image comes from a file or standard input, usually from grim. ksnip's behaviour on Plasma 6
			was not checked. Spot a mistake? <a href="https://github.com/unisic/unisic/issues">Open an issue</a>.
		</p>
	</div>
</Chapter>

<style>
	.scroller {
		overflow-x: auto;
		border-radius: var(--r3);
		background: var(--bg);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.scroller:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 3px;
	}
	table {
		width: 100%;
		min-width: 920px;
		border-collapse: separate;
		border-spacing: 0;
		font-size: var(--t-small);
	}
	caption {
		padding: var(--s4) var(--s5);
		text-align: left;
		font-size: var(--t-label);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
		border-bottom: 1px solid var(--line);
	}
	th,
	td {
		padding: var(--s3) var(--s4);
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid var(--line);
	}
	tbody tr:last-child > * {
		border-bottom: 0;
	}
	thead th {
		vertical-align: bottom;
		font-size: var(--t-body);
	}
	thead a {
		display: grid;
		align-content: end;
		min-height: 44px;
		color: var(--text);
		text-decoration: none;
	}
	thead a span {
		font: 12px var(--font-mono);
		color: var(--muted);
	}
	thead a:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
		border-radius: 4px;
	}
	tbody th {
		position: sticky;
		left: 0;
		z-index: 1;
		min-width: clamp(120px, 30vw, 184px);
		background: var(--bg);
		font-weight: 600;
		box-shadow: 1px 0 0 var(--line);
	}
	thead td {
		position: sticky;
		left: 0;
		z-index: 1;
		background: var(--bg);
		box-shadow: 1px 0 0 var(--line);
	}
	.us {
		background: color-mix(in oklab, var(--text) 4%, var(--bg));
	}
	.mark {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-weight: 600;
		white-space: nowrap;
	}
	.mark .icon {
		width: 16px;
		height: 16px;
	}
	[data-m='y'] .icon {
		color: var(--success);
	}
	[data-m='p'] .icon {
		color: var(--accent);
	}
	[data-m='n'] {
		color: var(--muted);
	}
	[data-m='n'] .icon {
		color: var(--danger);
	}
	.note {
		display: block;
		margin-top: 2px;
		font-size: 0.8125rem;
		color: var(--muted);
		text-wrap: pretty;
	}
	.text {
		color: var(--text);
	}
	.foot {
		max-width: 72ch;
		margin-top: var(--s4);
		font-size: var(--t-small);
		color: var(--muted);
	}
	.foot a {
		color: var(--accent);
	}
	.vs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--s2) var(--s3);
		margin-bottom: var(--s4);
		font-size: var(--t-small);
		font-weight: 600;
	}
	select {
		min-height: 44px;
		padding: 0 var(--s3);
		border: 1px solid var(--line-strong);
		border-radius: var(--r1);
		background: var(--surface);
		color: var(--text);
		font: inherit;
	}
	select:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}

	/* Three columns fit a phone, so the table stops scrolling sideways and its header can stick under the top bar. */
	@media (max-width: 759px) {
		.scroller {
			overflow: visible;
		}
		table {
			min-width: 0;
		}
		.off {
			display: none;
		}
		th,
		td {
			padding: var(--s2) var(--s3);
		}
		thead > tr > * {
			position: sticky;
			top: 60px;
			z-index: 2;
			background: var(--bg);
			box-shadow: 0 1px 0 var(--line);
		}
		thead .us {
			background: color-mix(in oklab, var(--text) 4%, var(--bg));
		}
	}
	@media (min-width: 760px) {
		.vs {
			display: none;
		}
		table {
			table-layout: fixed;
		}
		thead td {
			width: 184px;
		}
	}

	@media (hover: hover) and (pointer: fine) {
		tbody tr:hover > * {
			background-color: var(--surface);
		}
		thead a:hover span {
			color: var(--text);
		}
	}

	@media (scripting: enabled) and (prefers-reduced-motion: no-preference) {
		tbody td {
			opacity: 0;
			transform: translateY(4px);
			transition:
				opacity 280ms var(--ease-out),
				transform 280ms var(--ease-out),
				background-color 150ms ease;
			transition-delay: calc(var(--r) * 45ms + 150ms), calc(var(--r) * 45ms + 150ms), 0ms;
		}
		[data-shown='true'] tbody td {
			opacity: 1;
			transform: none;
		}
	}
</style>
