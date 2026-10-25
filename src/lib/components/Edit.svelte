<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Frame from './Frame.svelte';
	import { inview, calm } from '#lib/ui.svelte.js';

	// The editor's tool list and shortcuts, in the order of qml/ToolCatalog.qml.
	const TOOLS = [
		['V', 'Edit shapes'],
		['P', 'Pen'],
		['L', 'Line'],
		['A', 'Arrow'],
		['M', 'Measure'],
		['R', 'Rectangle'],
		['O', 'Ellipse'],
		['D', 'Callout'],
		['T', 'Text'],
		['H', 'Highlight'],
		['B', 'Blur'],
		['X', 'Pixelate'],
		['E', 'Smart eraser'],
		['Z', 'Magnifier'],
		['I', 'Eyedropper'],
		['N', 'Step marker'],
		['C', 'Crop']
	];

	let visible = $state(false);
	let on = $state(0);

	$effect(() => {
		if (!visible || calm.current) return;
		const timer = setInterval(() => (on = (on + 1) % TOOLS.length), 1100);
		return () => clearInterval(timer);
	});
</script>

<Chapter
	id="edit"
	num="02"
	mode="measure"
	kicker="Annotate and edit"
	title="Mark it up before the shot, or after."
	lede="Draw arrows, shapes, text, blur and numbered steps right in the capture overlay; Enter burns them into the crop. Open any capture in the editor later to keep going, with crop, undo, redo and zoom."
>
	<div class="grid wrap">
		<Frame
			src="/img/editor.webp"
			width={1095}
			height={1048}
			alt="The Unisic editor with a screenshot marked up with a circle, arrows, a callout reading I LOVE LINUX, a measurement of 213 px at minus 11 degrees, pixelated and blurred areas, steps 1 to 3 and a 262 by 118 rectangle, above Copy, Save and Upload buttons."
		/>

		<div class="side" {@attach inview((v) => (visible = v))}>
			<h3>17 tools, one key each.</h3>
			<ul class="tools" aria-label="Editor tools and their shortcuts">
				{#each TOOLS as [key, name], i (key)}
					<li data-on={visible && !calm.current && i === on}>
						<kbd class="cap">{key}</kbd>
						<span>{name}</span>
					</li>
				{/each}
			</ul>
			<p class="note">
				Highlight works freehand, as a box, or snapped to the text lines OCR finds. Measure shows length and angle. Crop is
				editor only; the overlay crops by selection.
			</p>
		</div>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s7);
	}
	.side {
		display: grid;
		align-content: start;
		gap: var(--s5);
	}
	.tools {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: var(--s1) var(--s4);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		align-items: center;
		gap: var(--s3);
		padding: 6px 0;
		font-size: var(--t-small);
		color: var(--muted);
		transition: color 160ms ease;
	}
	li[data-on='true'] {
		color: var(--text);
	}
	li[data-on='true'] kbd {
		background: var(--mode);
		color: var(--mode-ink);
		transform: translateY(1px);
		box-shadow: inset 0 -1px 0 rgb(0 0 0 / 0.28);
	}
	.note {
		max-width: 46ch;
		font-size: var(--t-small);
		color: var(--muted);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.2fr 1fr;
			align-items: center;
		}
	}
</style>
