<script lang="ts">
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import { discord, download, github } from "#lib/icons.ts";
  import { DISCORD_URL } from "#lib/site.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* base "/" points the section anchors at the landing page, for the 404
     page that nginx serves at any path */
  let { dict, locale, base = "" }: { dict: Dictionary; locale: string; base?: string } = $props();
</script>

<header class="header">
  <nav class="nav" aria-label="Main">
    <!-- aria-label keeps the brand link named below 480px, where the
         wordmark is hidden and the logo svg is aria-hidden -->
    <a href="{base}#top" class="brand" aria-label="Unisic">
      <Logo size={28} />
      <span class="wordmark">Unisic</span>
    </a>
    <div class="links">
      <a href="{base}#how" class="link">{dict.nav.how}</a>
      <a href="{base}#features" class="link">{dict.nav.features}</a>
      <a href="/docs/" class="link link-docs">{dict.nav.docs}</a>
      <a href="https://github.com/unisic/unisic" class="icon-link" aria-label={dict.nav.github}>
        <Icon svg={github} size={20} />
      </a>
      <!-- "Discord" is a brand name, so it stays out of the dictionary -->
      <a href={DISCORD_URL} class="icon-link" aria-label="Discord">
        <Icon svg={discord} size={20} />
      </a>
      <LanguageSwitcher current={locale} label={dict.languageSwitcher.label} />
      <a href="{base}#download" class="btn btn-filled btn-compact cta" aria-label={dict.nav.download}>
        <Icon svg={download} />
        <span class="cta-label">{dict.nav.download}</span>
      </a>
    </div>
  </nav>
</header>

<style>
  /* the app's title bar: the background colour, a divider under it */
  .header {
    position: sticky;
    top: 0;
    z-index: var(--z-nav);
    background: var(--bg);
    border-bottom: 1px solid var(--divider);
  }

  .nav {
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .wordmark {
    font-size: var(--font-l);
    font-weight: 700;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .link,
  .icon-link {
    color: var(--text-secondary);
    font-size: var(--font-m);
    transition: color var(--dur-fast) var(--ease-out);
  }

  .link:hover,
  .icon-link:hover {
    color: var(--text);
  }

  .icon-link {
    display: grid;
    place-items: center;
  }

  @media (max-width: 767px) {
    .link {
      display: none;
    }

    /* the anchor links can go on phones, but Docs is the site's only other
       page and the footer must not be the sole path to it */
    .link-docs {
      display: inline;
    }

    .links {
      gap: 14px;
    }
  }

  /* below ~480px the longest translated labels (de, fr) would overflow the
     row: the logo alone carries the brand, Download shrinks to its arrow,
     and GitHub and Discord stay in the footer */
  @media (max-width: 479px) {
    .wordmark,
    .icon-link,
    .cta-label {
      display: none;
    }

    .cta {
      width: 34px;
      padding: 0;
    }
  }
</style>
