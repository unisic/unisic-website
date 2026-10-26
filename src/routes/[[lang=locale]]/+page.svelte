<script lang="ts">
	import Topbar from '#lib/components/Topbar.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Why from '#lib/components/Why.svelte';
	import Capture from '#lib/components/Capture.svelte';
	import Edit from '#lib/components/Edit.svelte';
	import Record from '#lib/components/Record.svelte';
	import Read from '#lib/components/Read.svelte';
	import Share from '#lib/components/Share.svelte';
	import Themes from '#lib/components/Themes.svelte';
	import Privacy from '#lib/components/Privacy.svelte';
	import Compare from '#lib/components/Compare.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Toast from '#lib/components/Toast.svelte';
	import { LOCALES, SITE_URL, home } from '#lib/i18n/locales.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const t = $derived(data.t);
	const url = $derived(SITE_URL + home(data.lang));
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<link rel="canonical" href={url} />
	{#each LOCALES as l (l.code)}
		<link rel="alternate" hreflang={l.code} href={SITE_URL + home(l.code)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE_URL}/" />
	<link rel="discord:component-embed" type="application/json" href="{SITE_URL}/discord-embed/{data.lang}" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content="Unisic" />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:locale" content={LOCALES.find((l) => l.code === data.lang)?.og} />
</svelte:head>

<div class="page" data-mode>
	<Topbar />
	<main id="main" tabindex="-1">
		<Hero {t} />
		<Why {t} />
		<Capture {t} />
		<Edit {t} />
		<Record {t} />
		<Read {t} />
		<Share {t} />
		<Themes {t} />
		<Privacy {t} />
		<Compare {t} />
	</main>
	<Footer />
	<Toast {t} />
</div>
