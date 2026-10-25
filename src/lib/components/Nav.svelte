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
      <Logo size={30} />
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
      <a href="{base}#download" class="cta" aria-label={dict.nav.download}>
        <span class="cta-label">{dict.nav.download}</span>
        <Icon svg={download} size={18} class="cta-icon" />
      </a>
    </div>
  </nav>
  <span class="progress" aria-hidden="true"></span>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: var(--z-nav);
    background: color-mix(in srgb, var(--bg) 82%, transparent);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
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
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 750;
    letter-spacing: -0.02em;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .link,
  .icon-link {
    color: var(--text-secondary);
    font-size: 15px;
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

  .cta {
    display: inline-flex;
    align-items: center;
    height: 38px;
    padding: 0 20px;
    border-radius: 999px;
    background: var(--accent);
    color: var(--text-on-accent);
    font-weight: 650;
    font-size: 15px;
    transition:
      transform var(--dur-fast) var(--ease-out),
      background-color var(--dur-fast) var(--ease-out);
  }

  .cta:hover {
    background: var(--accent-bright);
  }

  .cta:active {
    transform: scale(0.96);
  }

  /* scroll progress along the nav's bottom edge: a scroll-driven
     animation, simply absent in engines without animation-timeline */
  .progress {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    transform-origin: 0 50%;
    transform: scaleX(0);
    background: linear-gradient(90deg, var(--tertiary), var(--accent));
    pointer-events: none;
  }

  @supports (animation-timeline: scroll()) {
    .progress {
      display: block;
      animation: nav-progress linear both;
      animation-timeline: scroll(root block);
    }
  }

  @keyframes nav-progress {
    to {
      transform: scaleX(1);
    }
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

    .cta {
      padding: 0 16px;
    }
  }

  .cta :global(.cta-icon) {
    display: none;
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
      width: 38px;
      padding: 0;
      justify-content: center;
    }

    .cta :global(.cta-icon) {
      display: block;
    }
  }
</style>
