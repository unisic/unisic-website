<script lang="ts">
  import type { TocEntry } from "#lib/server/docs.ts";

  /*
   * "On this page" rail with scroll-spy. One IntersectionObserver watches
   * the h2/h3 targets; the band is the top third of the viewport below the
   * sticky header (-88px top, -66% bottom), and the active entry is the
   * first heading inside it in document order. When none is inside (a long
   * section between headings) the last active one holds. The doc page keys
   * this component on the slug, so each doc gets a fresh observer.
   */
  let { toc }: { toc: TocEntry[] } = $props();

  let activeId = $state<string>();

  $effect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = toc.find((item) => visible.has(item.id));
        if (first) activeId = first.id;
      },
      { rootMargin: "-88px 0px -66% 0px" },
    );
    for (const item of toc) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  });
</script>

<aside class="toc" aria-label="On this page">
  <p class="title">On this page</p>
  <ul class="list">
    {#each toc as item (item.id)}
      <li>
        <a
          href="#{item.id}"
          class="link"
          class:sub={item.depth === 3}
          aria-current={activeId === item.id ? "true" : undefined}>{item.text}</a
        >
      </li>
    {/each}
  </ul>
</aside>

<style>
  .toc {
    position: sticky;
    top: calc(var(--nav-height) + 24px);
    max-height: calc(100vh - var(--nav-height) - 48px);
    overflow-y: auto;
    scrollbar-width: thin;
  }

  .title {
    margin-bottom: 12px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.02em;
    color: var(--text-secondary);
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-left: 1px solid var(--divider);
  }

  .link {
    display: block;
    margin-left: -1px;
    padding: 5px 0 5px 14px;
    border-left: 1px solid transparent;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.4;
    transition:
      color var(--dur-fast) var(--ease-out),
      border-color var(--dur-fast) var(--ease-out);
  }

  .link:hover {
    color: var(--text);
  }

  .link.sub {
    padding-left: 26px;
  }

  .link[aria-current] {
    color: var(--accent-hover);
    border-left-color: var(--accent);
  }

  /* the doc page's inline <details> list takes over below this width */
  @media (max-width: 1100px) {
    .toc {
      display: none;
    }
  }
</style>
