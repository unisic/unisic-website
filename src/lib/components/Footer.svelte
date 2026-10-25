<script lang="ts">
  import Logo from "./Logo.svelte";
  import { DISCORD_URL } from "#lib/site.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* Shared by the landing and docs pages. */
  let { dict }: { dict: Dictionary } = $props();
  const f = $derived(dict.footer);
</script>

<footer class="footer">
  <div class="inner">
    <div class="brand">
      <Logo size={26} />
      <span class="name">Unisic</span>
      <span class="license">{f.license}</span>
    </div>
    <nav class="links" aria-label={f.nav}>
      <a class="link" href="/docs/">{dict.nav.docs}</a>
      <a class="link" href="https://github.com/unisic/unisic">{f.github}</a>
      <a class="link" href="https://github.com/unisic/unisic/releases">{f.releases}</a>
      <a class="link" href="https://github.com/unisic/unisic/issues">{f.issues}</a>
      <a class="link" href={DISCORD_URL}>Discord</a>
      <a class="link" href="https://github.com/unisic/unisic/blob/main/LICENSE">{f.licenseLink}</a>
    </nav>
  </div>
</footer>

<style>
  .footer {
    margin-top: var(--space-section);
    border-top: 1px solid var(--divider);
    background: var(--bg-deep);
  }

  .inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 34px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .name {
    font-family: var(--font-display);
    font-weight: 750;
    letter-spacing: -0.02em;
  }

  .license {
    margin-left: 8px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  .links {
    display: flex;
    gap: 8px 24px;
    flex-wrap: wrap;
  }

  .link {
    color: var(--text-secondary);
    font-size: 14.5px;
    transition: color var(--dur-fast) var(--ease-out);
  }

  .link:hover {
    color: var(--text);
  }
</style>
