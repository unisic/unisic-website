<script lang="ts">
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import { discord, github } from "#lib/icons.ts";
  import { DISCORD_URL } from "#lib/site.ts";

  /* The landing Nav's sticky glass bar, with links back into the marketing
     site. The docs are an English-only section, so no dictionary here. */
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
      <a href="/#download" class="cta">Download</a>
    </div>
  </nav>
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

  /* the hero's selection readout, reused as the section tag */
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

  @media (max-width: 560px) {
    .link {
      display: none;
    }

    .links {
      gap: 16px;
    }

    .cta {
      padding: 0 16px;
    }
  }

  @media (max-width: 399px) {
    .wordmark {
      display: none;
    }
  }
</style>
