<script lang="ts">
  import Seo from "#lib/components/Seo.svelte";
  import { absUrl } from "#lib/i18n/metadata.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const TITLE = "Documentation - Unisic";
  const DESCRIPTION =
    "Guides for installing, configuring and using Unisic - the open-source screenshot and screen recorder for Linux.";
</script>

<Seo
  meta={{
    title: TITLE,
    description: DESCRIPTION,
    canonical: absUrl("/docs"),
    ogTitle: TITLE,
    ogDescription: DESCRIPTION,
    ogType: "website",
  }}
/>

<div class="overview">
  <header class="intro">
    <p class="eyebrow">Documentation</p>
    <h1 class="title">Everything after the hotkey</h1>
    <p class="lede">
      How to install Unisic, capture and annotate your screen, record GIFs and video, and send the result wherever it
      belongs. Pick a topic below or use the sidebar.
    </p>
  </header>

  {#each data.groups as group (group.group)}
    <section class="group">
      {#if group.group}
        <h2 class="eyebrow">{group.group}</h2>
      {/if}
      <div class="grid">
        {#each group.docs as doc (doc.slug)}
          <a href="/docs/{doc.slug}/" class="card frame">
            <h3 class="card-title">{doc.title}</h3>
            <p class="card-desc">{doc.description}</p>
            <span class="card-more">Read <span aria-hidden="true">→</span></span>
          </a>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .overview {
    max-width: 760px;
  }

  .intro {
    margin-bottom: var(--space-lede);
  }

  .title {
    font-family: var(--font-display);
    font-size: clamp(2.1rem, 1.5rem + 2.4vw, 3.1rem);
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.05;
    text-wrap: balance;
  }

  .lede {
    margin-top: 18px;
    max-width: 60ch;
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    text-wrap: pretty;
  }

  .group + .group {
    margin-top: 48px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-l);
    background: var(--surface);
    --frame-gap: 6px;
    --corner-arm: 14px;
  }

  /* hover or keyboard focus selects the card: the crop corners snap in,
     opacity only, the same beat as the landing feature grid */
  .card::after {
    opacity: 0;
    transition: opacity var(--dur-fast) var(--ease-out);
  }

  .card:focus-visible::after {
    opacity: 1;
  }

  @media (hover: hover) {
    .card {
      transition: border-color var(--dur-fast) var(--ease-out);
    }

    .card:hover {
      border-color: color-mix(in srgb, var(--accent) 35%, var(--divider));
    }

    .card:hover::after {
      opacity: 1;
    }
  }

  .card-title {
    font-size: 1.0625rem;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  .card-desc {
    flex: 1;
    font-size: 0.9375rem;
    line-height: 1.55;
    color: var(--text-secondary);
  }

  .card-more {
    margin-top: 4px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent-bright);
  }
</style>
