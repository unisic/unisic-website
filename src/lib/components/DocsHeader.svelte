<script lang="ts">
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import { discord, github } from "#lib/icons.ts";
  import { DISCORD_URL } from "#lib/site.ts";

  /* The landing Nav's title bar, with links back into the product page.
     The docs are an English-only section, so no dictionary here. */
</script>

<header class="header">
  <nav class="nav" aria-label="Main">
    <!-- named for the sub-400px layout, where the wordmark is hidden -->
    <a href="/" class="brand" aria-label="Unisic docs">
      <Logo size={28} />
      <span class="wordmark">Unisic</span>
      <span class="badge">docs</span>
    </a>
    <div class="links">
      <a href="/" class="link">Home</a>
      <a href="https://github.com/unisic/unisic" class="icon-link" aria-label="Unisic on GitHub">
        <Icon svg={github} size={20} />
      </a>
      <a href={DISCORD_URL} class="icon-link" aria-label="Unisic on Discord">
        <Icon svg={discord} size={20} />
      </a>
      <a href="/#download" class="btn btn-filled btn-compact">Download</a>
    </div>
  </nav>
</header>

<style>
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

  /* the overlay's size pill, reused as the section tag */
  .badge {
    padding: 2px 8px;
    border-radius: var(--radius-s);
    background: var(--accent);
    color: var(--text-on-accent);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 24px;
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

  @media (max-width: 560px) {
    .link {
      display: none;
    }

    .links {
      gap: 16px;
    }
  }

  @media (max-width: 399px) {
    .wordmark {
      display: none;
    }
  }
</style>
