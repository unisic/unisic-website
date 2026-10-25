<script lang="ts">
  import Icon from "./Icon.svelte";
  import { globe } from "#lib/icons.ts";
  import { LANGUAGES } from "#lib/languages.ts";
  import { localeHref } from "#lib/i18n/config.ts";

  /*
   * Nav language picker. Each entry links to that locale's static page
   * ("/" for English, "/de/" ... for the rest), so switching is
   * a plain navigation. Keyboard: Enter/Space opens, Escape closes, outside
   * press dismisses.
   *
   * The menu is always in the markup and hidden with the `hidden` attribute
   * rather than mounted on open: this switcher is the only link to the eight
   * translated pages, and a conditionally rendered menu is one no crawler
   * ever sees. The document listeners exist only while the menu is open.
   */
  let { current, label }: { current: string; label: string } = $props();

  let open = $state(false);
  let root: HTMLDivElement;
  const menuId = $props.id();
  const active = $derived(LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0]);

  $effect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target instanceof Node && root.contains(e.target))) open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") open = false;
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  });
</script>

<div class="root" bind:this={root}>
  <button
    type="button"
    class="trigger"
    aria-haspopup="menu"
    aria-expanded={open}
    aria-controls={menuId}
    aria-label={label}
    onclick={() => (open = !open)}
  >
    <Icon svg={globe} size={17} />
    <span class="current">{active.native}</span>
    <span class="chevron" data-open={open ? "" : undefined} aria-hidden="true"></span>
  </button>

  <ul class="menu" id={menuId} role="menu" hidden={!open}>
    {#each LANGUAGES as lang (lang.code)}
      <li role="none">
        <a
          href={localeHref(lang.code)}
          class="item"
          role="menuitem"
          lang={lang.code}
          hreflang={lang.code}
          aria-current={lang.code === current ? "true" : undefined}
          onclick={() => (open = false)}
        >
          <span class="native">{lang.native}</span>
          <span class="english">{lang.english}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .root {
    position: relative;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 38px;
    padding: 0 12px;
    border-radius: 999px;
    color: var(--text-secondary);
    border: 1px solid var(--divider);
    font-size: 14px;
    font-weight: 600;
    transition:
      color var(--dur-fast) var(--ease-out),
      border-color var(--dur-fast) var(--ease-out);
  }

  .trigger:hover {
    color: var(--text);
    border-color: color-mix(in srgb, var(--text) 30%, transparent);
  }

  .current {
    line-height: 1;
  }

  .chevron {
    width: 8px;
    height: 8px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    transform: translateY(-1px) rotate(45deg);
    transition: transform var(--dur-fast) var(--ease-out);
  }

  .chevron[data-open] {
    transform: translateY(1px) rotate(-135deg);
  }

  .menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: var(--z-menu);
    min-width: 210px;
    max-height: min(70vh, 460px);
    overflow-y: auto;
    margin: 0;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    list-style: none;
    background: var(--surface-top);
    border: 1px solid var(--divider);
    border-radius: var(--radius-l);
    box-shadow: 0 18px 46px var(--shadow-color);
    /* grows from its trigger as it opens. The menu stays in the DOM and
       toggles `hidden`, so @starting-style only fires if `display` itself
       is transitioned with allow-discrete; other engines open instantly. */
    transform-origin: top right;
    transition:
      opacity var(--dur-fast) var(--ease-out),
      transform var(--dur) var(--ease-out),
      display var(--dur) allow-discrete;
  }

  /* `hidden` loses to display: flex above without this. No transition in
     the closed state keeps dismissal instant. */
  .menu[hidden] {
    display: none;
    transition: none;
  }

  @starting-style {
    .menu {
      opacity: 0;
      transform: translateY(-4px) scale(0.98);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .menu {
      transition: none;
    }
  }

  .item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 9px 12px;
    border-radius: var(--radius-m);
    color: var(--text-secondary);
    transition:
      background-color var(--dur-fast) var(--ease-out),
      color var(--dur-fast) var(--ease-out);
  }

  .item:hover {
    background: color-mix(in srgb, var(--text) 8%, transparent);
    color: var(--text);
  }

  .item[aria-current="true"] {
    color: var(--text);
    background: color-mix(in srgb, var(--accent) 16%, transparent);
  }

  .native {
    font-size: 14.5px;
    font-weight: 600;
  }

  .english {
    font-size: 12px;
    color: var(--text-tertiary);
  }

  @media (max-width: 639px) {
    .current {
      display: none;
    }

    .trigger {
      padding: 0 10px;
      gap: 5px;
    }
  }
</style>
