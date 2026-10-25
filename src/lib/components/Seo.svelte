<script lang="ts">
  import type { HeadMeta } from "#lib/i18n/metadata.ts";

  /* The per-page <head>: title, canonical, hreflang and the social cards.
     Sitewide tags (robots, icons, theme) live in app.html. */
  let { meta }: { meta: HeadMeta } = $props();
  const image = "https://unisic.app/social-preview.png";
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" href={meta.canonical} />
  {#each meta.alternates ?? [] as [lang, href] (lang)}
    <link rel="alternate" hreflang={lang} {href} />
  {/each}
  {#if meta.discordEmbed}
    <link rel="discord:component-embed" type="application/json" href={meta.discordEmbed} />
  {/if}
  <meta property="og:title" content={meta.ogTitle} />
  <meta property="og:description" content={meta.ogDescription} />
  <meta property="og:url" content={meta.canonical} />
  <meta property="og:site_name" content="Unisic" />
  {#if meta.ogLocale}<meta property="og:locale" content={meta.ogLocale} />{/if}
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />
  {#if meta.imageAlt}<meta property="og:image:alt" content={meta.imageAlt} />{/if}
  <meta property="og:type" content={meta.ogType} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.ogTitle} />
  <meta name="twitter:description" content={meta.ogDescription} />
  <meta name="twitter:image" content={image} />
  {#if meta.imageAlt}<meta name="twitter:image:alt" content={meta.imageAlt} />{/if}
</svelte:head>
