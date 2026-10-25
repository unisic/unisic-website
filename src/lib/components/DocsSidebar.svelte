<script lang="ts">
  import { page } from "$app/state";
  import DocsSearch, { type SearchDoc } from "./DocsSearch.svelte";
  import type { DocGroup } from "#lib/server/docs.ts";

  /*
   * Docs navigation: a sticky aside on desktop, folded into a disclosure
   * behind the Menu button on narrow screens; any link tap closes it. While
   * the filter has a query, its results replace the nav list. The current
   * page wears the crop corners, the overlay's "this is selected" mark.
   *
   * The collapsed mobile state keys off html[data-js] (stamped by the root
   * layout), so without JS the nav renders expanded and the Menu button,
   * which could never reopen it, stays hidden.
   */
  let { groups, searchIndex }: { groups: DocGroup[]; searchIndex: SearchDoc[] } = $props();

  let open = $state(false);
  let query = $state("");
  const close = () => (open = false);
</script>

{#snippet link(href: string, label: string)}
  {@const current = page.url.pathname === href}
  <a {href} class="link" class:frame={current} aria-current={current ? "page" : undefined} onclick={close}>{label}</a>
{/snippet}

<aside class="sidebar">
  <button type="button" class="toggle" aria-expanded={open} aria-controls="docs-nav" onclick={() => (open = !open)}>
    <span class="bars" aria-hidden="true"></span>
    Menu
  </button>
  <nav id="docs-nav" class="nav" data-open={open || undefined} aria-label="Documentation">
    <DocsSearch index={searchIndex} bind:query onnavigate={close} />
    {#if !query.trim()}
      {@render link("/docs/", "Overview")}
      {#each groups as group (group.group)}
        {#if group.group}<p class="group-title">{group.group}</p>{/if}
        <ul class="list">
          {#each group.docs as doc (doc.slug)}
            <li>{@render link(`/docs/${doc.slug}/`, doc.title)}</li>
          {/each}
        </ul>
      {/each}
    {/if}
  </nav>
</aside>

<style>
  .sidebar {
    position: sticky;
    top: calc(var(--nav-height) + 24px);
    /* long result lists stay reachable inside the sticky rail. overflow clips
       to the padding box, so the 6px padding (cancelled by the margin) keeps
       the 4px focus ring and the active link's corners from being sheared */
    max-height: calc(100vh - var(--nav-height) - 48px);
    overflow-y: auto;
    padding: 6px;
    margin: -6px;
    scrollbar-width: thin;
  }

  .toggle {
    display: none;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-s);
    background: var(--surface);
    font-size: 15px;
    font-weight: 600;
    transition: transform var(--dur-fast) var(--ease-out);
  }

  .toggle:active {
    transform: scale(0.98);
  }

  .bars,
  .bars::before,
  .bars::after {
    width: 16px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
  }

  .bars {
    position: relative;
  }

  .bars::before,
  .bars::after {
    content: "";
    position: absolute;
    left: 0;
  }

  .bars::before {
    top: -5px;
  }

  .bars::after {
    top: 5px;
  }

  /* open: the middle bar fades, the outer two fold into an X */
  [aria-expanded="true"] .bars {
    background: transparent;
  }

  [aria-expanded="true"] .bars::before {
    top: 0;
    transform: rotate(45deg);
  }

  [aria-expanded="true"] .bars::after {
    top: 0;
    transform: rotate(-45deg);
  }

  @media (prefers-reduced-motion: no-preference) {
    .bars,
    .bars::before,
    .bars::after {
      transition:
        transform var(--dur-fast) var(--ease-out),
        top var(--dur-fast) var(--ease-out),
        background-color var(--dur-fast) var(--ease-out);
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .group-title {
    margin: 22px 0 6px;
    padding-left: 12px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    /* secondary, not tertiary: 12px text needs the AA contrast */
    color: var(--text-secondary);
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* :global so DocsSearch's result links share the row style */
  .nav :global(.link) {
    display: block;
    padding: 7px 12px;
    border-radius: var(--radius-s);
    color: var(--text-secondary);
    font-size: 14.5px;
    line-height: 1.35;
    transition:
      color var(--dur-fast) var(--ease-out),
      background-color var(--dur-fast) var(--ease-out);
  }

  .nav :global(.link:hover) {
    color: var(--text);
    background: var(--surface);
  }

  .link.frame,
  .link.frame:hover {
    color: var(--text);
    background: var(--surface-hi);
    --frame-gap: 0px;
    --corner-arm: 7px;
  }

  @media (max-width: 860px) {
    .sidebar {
      position: static;
      max-height: none;
      overflow: visible;
      padding: 0;
      margin: 0 0 20px;
    }

    :global(html[data-js]) .toggle {
      display: inline-flex;
    }

    .nav {
      padding: 14px 4px 8px;
    }

    /* collapsed via max-height rather than display so the panel can ease
       open; visibility keeps the closed links out of the tab order */
    :global(html[data-js]) .nav {
      visibility: hidden;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

    :global(html[data-js]) .nav[data-open] {
      visibility: visible;
      overflow-y: auto;
      max-height: 70vh;
      opacity: 1;
      padding-top: 14px;
      padding-bottom: 8px;
    }

    .group-title {
      margin-top: 14px;
    }
  }

  /* entrance only: the transition sits on the open state, so opening eases
     in and dismissal is instant, right for a nav list */
  @media (max-width: 860px) and (prefers-reduced-motion: no-preference) {
    :global(html[data-js]) .nav[data-open] {
      transition:
        max-height var(--dur) var(--ease-out),
        opacity var(--dur) var(--ease-out),
        padding var(--dur) var(--ease-out);
    }
  }
</style>
