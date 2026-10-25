<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Frame from './Frame.svelte';
</script>

<Chapter
	id="edit"
	num="02"
	mode="measure"
	kicker="Annotate and edit"
	title="Mark it up before the shot, or after."
	lede="Draw arrows, shapes, text, blur and numbered steps right in the capture overlay; Enter burns them into the crop. The editor picks up from there: 17 tools, each on one key, with crop, undo and zoom."
>
	<div class="wrap">
		<div class="pic">
			<Frame
				src="/img/editor.webp"
				width={1095}
				height={1048}
				alt="The Unisic editor with a screenshot marked up with a circle, arrows, a callout reading I LOVE LINUX, a measurement of 213 px at minus 11 degrees, pixelated and blurred areas, steps 1 to 3 and a 262 by 118 rectangle, above Copy, Save and Upload buttons."
			/>
		</div>
	</div>
</Chapter>

<style>
	.pic {
		max-width: 720px;
	}
</style>
