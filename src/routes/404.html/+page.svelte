<script lang="ts">
	import ErrorView from '#lib/components/ErrorView.svelte';
</script>

<!-- Prerendered to build/404.html; nginx serves it for every missing path with a 404 status. -->
<ErrorView status={404} />
