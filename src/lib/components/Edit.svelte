<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Overlay from './Overlay.svelte';
</script>

<Chapter
	id="edit"
	mode="measure"
	band
	kicker="Annotate and edit"
	title="Mark it up before the shot, or after."
	lede="Draw arrows, shapes, blur and numbered steps right in the capture overlay, then press Enter to burn them into the crop. Try it below. The editor picks up from there, with crop, undo and zoom."
>
	<div class="wrap">
		<Overlay />
	</div>
</Chapter>
