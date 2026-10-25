<script lang="ts">
  import Footer from "#lib/components/Footer.svelte";
  import Nav from "#lib/components/Nav.svelte";
  import { DEFAULT_LOCALE } from "#lib/i18n/config.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const nf = $derived(data.dict.notFound);
</script>

<svelte:head>
  <title>{nf.title} - Unisic</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<a href="#main" class="skip-link">{data.dict.nav.skip}</a>
<Nav dict={data.dict} locale={DEFAULT_LOCALE} base="/" />

<main id="main">
  <div class="wrap">
    <p class="code">{nf.code}</p>
    <h1 class="title">{nf.title}</h1>
    <p class="message">{nf.message}</p>
    <a href="/" class="btn btn-filled">{nf.home}</a>
  </div>
</main>

<Footer dict={data.dict} />

<style>
  /* fills the viewport between Nav and Footer so a missing route still
     wears the site chrome */
  .wrap {
    max-width: var(--max-width);
    min-height: 72vh;
    margin: 0 auto;
    padding: 96px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    text-align: center;
  }

  .code {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent);
  }

  .title {
    font-size: clamp(2.25rem, 1.2rem + 3.4vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .message {
    max-width: 46ch;
    color: var(--text-secondary);
    font-size: 1.0625rem;
  }

  .btn {
    margin-top: 14px;
  }
</style>
