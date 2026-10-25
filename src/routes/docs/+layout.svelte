<script lang="ts">
  import DocsHeader from "#lib/components/DocsHeader.svelte";
  import DocsSidebar from "#lib/components/DocsSidebar.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<a href="#main" class="skip-link">{data.dict.nav.skip}</a>
<DocsHeader />

<div class="shell">
  <DocsSidebar groups={data.groups} searchIndex={data.searchIndex} />
  <main id="main" class="main">{@render children()}</main>
</div>

<Footer dict={data.dict} />

<style>
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
