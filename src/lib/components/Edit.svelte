<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Overlay from './Overlay.svelte';
	import type { Dictionary } from '#lib/i18n/en.js';

	let { t }: { t: Dictionary } = $props();
</script>

<Chapter
	id="edit"
	mode="measure"
	band
	title={t.edit.title}
	lede={t.edit.lede}
>
	<div class="wrap">
		<Overlay words={t.overlay} />
	</div>
</Chapter>
