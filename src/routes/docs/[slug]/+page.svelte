<script lang="ts">
  import DocsProse from "#lib/components/DocsProse.svelte";
  import DocsToc from "#lib/components/DocsToc.svelte";
  import Seo from "#lib/components/Seo.svelte";
  import { absUrl } from "#lib/i18n/metadata.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const doc = $derived(data.doc);

  /* " - Unisic", not " - Unisic Docs": the extra word spends 5 of the ~60
     characters a results page shows on something the URL already says. */
  const title = $derived(`${doc.seoTitle} - Unisic`);

  /* The last crumb carries no item: it is the current page, per Google's
     BreadcrumbList spec. `<` is escaped so no string can close the tag. */
  const breadcrumbs = $derived(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Unisic", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Documentation", item: absUrl("/docs") },
        { "@type": "ListItem", position: 3, name: doc.title },
      ],
    }).replaceAll("<", "\\u003c"),
  );
</script>

<Seo
  meta={{
    title,
    description: doc.description,
    canonical: absUrl(`/docs/${doc.slug}`),
    ogTitle: title,
    ogDescription: doc.description,
    ogType: "article",
  }}
/>

<svelte:head>
  {@html `<script type="application/ld+json">${breadcrumbs}<\/script>`}
</svelte:head>

<!-- keyed so each doc mounts fresh: the TOC observer, the copy buttons and
     the scroll-spy state all belong to one document -->
{#key doc.slug}
  <div class="page">
    <article class="article">
      <header class="head">
        {#if doc.group}
          <p class="kicker">
            <a href="/docs/" class="kicker-link">Docs</a>
            <span aria-hidden="true">/</span>
            {doc.group}
          </p>
        {/if}
        <h1 class="title">{doc.seoTitle}</h1>
        <p class="desc">{doc.description}</p>
      </header>

      {#if doc.toc.length > 0}
        <details class="toc-mobile">
          <summary>On this page</summary>
          <ul>
            {#each doc.toc as item (item.id)}
              <li><a href="#{item.id}" class:sub={item.depth === 3}>{item.text}</a></li>
            {/each}
          </ul>
        </details>
      {/if}

      <DocsProse html={doc.html} />

      <a
        class="edit"
        href="https://github.com/unisic/unisic-website/edit/main/content/docs/{doc.slug}.md"
        target="_blank"
        rel="noopener noreferrer">Edit this page on GitHub</a
      >

      <nav class="pager" aria-label="Pagination">
        {#if data.prev}
          <a href="/docs/{data.prev.slug}/" class="pager-link">
            <span class="pager-dir">← Previous</span>
            <span class="pager-title">{data.prev.title}</span>
          </a>
        {/if}
        {#if data.next}
          <a href="/docs/{data.next.slug}/" class="pager-link next">
            <span class="pager-dir">Next →</span>
            <span class="pager-title">{data.next.title}</span>
          </a>
        {/if}
      </nav>
    </article>

    {#if doc.toc.length > 0}
      <DocsToc toc={doc.toc} />
    {/if}
  </div>
{/key}

<style>
  .page {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 200px;
    gap: 48px;
    align-items: start;
  }

  .article {
    min-width: 0;
    max-width: 680px;
  }

  .head {
    margin-bottom: 32px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--divider);
  }

  .kicker {
    display: flex;
    gap: 8px;
    margin-bottom: 14px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    letter-spacing: 0.02em;
    color: var(--accent);
  }

  .kicker-link {
    color: var(--text-secondary);
    transition: color var(--dur-fast) var(--ease-out);
  }

  .kicker-link:hover {
    color: var(--text);
  }

  .title {
    font-size: clamp(1.9rem, 1.4rem + 2vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.08;
  }

  .desc {
    margin-top: 14px;
    max-width: 60ch;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .toc-mobile {
    display: none;
    margin-bottom: 28px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
  }

  .toc-mobile summary {
    padding: 12px 16px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--text-secondary);
    cursor: pointer;
  }

  .toc-mobile ul {
    margin: 0;
    padding: 0 16px 12px;
    list-style: none;
  }

  .toc-mobile a {
    display: block;
    padding: 6px 0;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .toc-mobile a:hover {
    color: var(--text);
  }

  .toc-mobile a.sub {
    padding-left: 14px;
  }

  .edit {
    display: inline-block;
    margin-top: 48px;
    font-size: 14px;
    color: var(--text-secondary);
    transition: color var(--dur-fast) var(--ease-out);
  }

  .edit:hover {
    color: var(--accent-hover);
  }

  .pager {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 24px;
    padding-top: 32px;
    border-top: 1px solid var(--divider);
  }

  .pager-link {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 48%;
    padding: 14px 18px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--surface);
    transition: border-color var(--dur-fast) var(--ease-out);
  }

  .pager-link:hover {
    border-color: color-mix(in srgb, var(--accent) 35%, var(--divider));
  }

  .pager-link.next {
    margin-left: auto;
    text-align: right;
  }

  .pager-dir {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .pager-title {
    font-weight: 650;
  }

  @media (max-width: 1100px) {
    .page {
      grid-template-columns: minmax(0, 1fr);
    }

    .toc-mobile {
      display: block;
    }
  }

  @media (max-width: 560px) {
    .pager {
      flex-direction: column;
    }

    .pager-link {
      max-width: none;
    }

    .pager-link.next {
      margin-left: 0;
    }
  }
</style>
