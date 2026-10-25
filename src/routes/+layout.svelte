<script lang="ts">
  import "../tokens.css";
  import "../app.css";
  import { browser } from "$app/env";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  /* copy-button CSS keys off this; without JS everything stays visible */
  if (browser) document.documentElement.dataset.js = "true";

  /* smooth scrolling is for in-page anchors only: a page change jumps */
  beforeNavigate(({ from, to }) => {
    if (from?.url.pathname !== to?.url.pathname) document.documentElement.style.scrollBehavior = "auto";
  });
  afterNavigate(() => {
    document.documentElement.style.scrollBehavior = "";
  });
</script>

{@render children()}
