<script lang="ts">
  import "@fontsource-variable/atkinson-hyperlegible-next/index.css";
  /* standard = weight and width axes: the display headings run wide */
  import "@fontsource-variable/mona-sans/standard.css";
  import "@fontsource-variable/jetbrains-mono/index.css";
  import "../tokens.css";
  import "../app.css";
  import bodyFont from "@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2?url";
  import displayFont from "@fontsource-variable/mona-sans/files/mona-sans-latin-standard-normal.woff2?url";
  import { browser } from "$app/env";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  /* reveal and copy-button CSS key off this; without JS everything stays visible */
  if (browser) document.documentElement.dataset.js = "true";

  /* smooth scrolling is for in-page anchors only: a page change jumps */
  beforeNavigate(({ from, to }) => {
    if (from?.url.pathname !== to?.url.pathname) document.documentElement.style.scrollBehavior = "auto";
  });
  afterNavigate(() => {
    document.documentElement.style.scrollBehavior = "";
  });
</script>

<svelte:head>
  <!-- the two latin faces above the fold; mono and latin-ext load on demand -->
  <link rel="preload" href={bodyFont} as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="preload" href={displayFont} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}
