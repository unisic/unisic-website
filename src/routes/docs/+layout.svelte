<script lang="ts">
  import DocsHeader from "#lib/components/DocsHeader.svelte";
  import DocsSidebar from "#lib/components/DocsSidebar.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<a href="#main" class="skip-link">{data.dict.nav.skip}</a>
<DocsHeader />

<div class="docs">
  <div class="shell">
    <DocsSidebar groups={data.groups} searchIndex={data.searchIndex} />
    <main id="main" class="main">{@render children()}</main>
  </div>
</div>

<Footer dict={data.dict} />

<style>
  /* the landing hero's pixel grid, as a faint band under the header that
     fades out before the prose starts */
  .docs {
    position: relative;
    isolation: isolate;
  }

  .docs::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 380px;
    z-index: -1;
    background:
      linear-gradient(var(--grid-line) 1px, transparent 1px) center top / var(--grid-size) var(--grid-size),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) center top / var(--grid-size) var(--grid-size);
    mask-image: linear-gradient(#000 20%, transparent);
    opacity: 0.6;
    pointer-events: none;
  }

  .shell {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 48px 24px 0;
    display: grid;
    grid-template-columns: 236px minmax(0, 1fr);
    gap: 56px;
    align-items: start;
  }

  .main {
    min-width: 0;
  }

  @media (max-width: 860px) {
    .shell {
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
      padding-top: 24px;
    }
  }
</style>
