<script lang="ts" module>
  export type SearchDoc = { slug: string; title: string; headings: { id: string; text: string }[] };
</script>

<script lang="ts">
  import type { Attachment } from "svelte/attachments";

  /*
   * Sidebar filter: a plain substring match over the corpus the docs layout
   * builds at prerender time (titles plus h2/h3 headings), no search
   * dependency. While `query` is non-empty the sidebar swaps its nav list for
   * these results. The input is server-rendered disabled, so it reserves its
   * space and stays honestly inert without JS; `live` enables it on the
   * client and wires "/" to focus it (desktop only: below 860px it sits in
   * the collapsed menu, where focus() is a no-op). Escape clears it.
   */
  let { index, query = $bindable(""), onnavigate }: { index: SearchDoc[]; query?: string; onnavigate: () => void } =
    $props();

  type Result = { href: string; text: string; crumb?: string };

  const q = $derived(query.trim().toLowerCase());
  const results = $derived.by(() => {
    const out: Result[] = [];
    if (!q) return out;
    for (const doc of index) {
      if (doc.title.toLowerCase().includes(q)) out.push({ href: `/docs/${doc.slug}/`, text: doc.title });
      for (const h of doc.headings) {
        if (h.text.toLowerCase().includes(q)) {
          out.push({ href: `/docs/${doc.slug}/#${h.id}`, text: h.text, crumb: doc.title });
        }
      }
    }
    return out;
  });

  const live: Attachment<HTMLInputElement> = (input) => {
    input.disabled = false;
    const onkeydown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      if (window.matchMedia("(max-width: 860px)").matches) return;
      /* never steal "/" from another text field */
      const el = document.activeElement;
      if (el instanceof HTMLElement && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
        return;
      }
      event.preventDefault();
      input.focus();
    };
    window.addEventListener("keydown", onkeydown);
    return () => window.removeEventListener("keydown", onkeydown);
  };

  function pick() {
    query = "";
    onnavigate();
  }
</script>

<div class="field">
  <input
    type="search"
    class="input"
    placeholder="Filter docs"
    aria-label="Filter docs"
    disabled
    bind:value={query}
    onkeydown={(event) => {
      if (event.key === "Escape") query = "";
    }}
    {@attach live}
  />
  <kbd class="hint" aria-hidden="true">/</kbd>
</div>

<!-- announce the outcome so screen-reader users hear the list change -->
<span class="sr-only" role="status">
  {q ? (results.length > 0 ? `${results.length} result${results.length === 1 ? "" : "s"}` : "No matches") : ""}
</span>

{#if q}
  {#if results.length > 0}
    <ul class="results">
      {#each results as result (result.href)}
        <li>
          <a href={result.href} class="link" onclick={pick}>
            {#if result.crumb}<span class="crumb">{result.crumb}</span>{/if}
            {result.text}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="empty">No matches</p>
  {/if}
{/if}

<style>
  .field {
    position: relative;
    margin-bottom: 12px;
  }

  .input {
    width: 100%;
    height: 40px;
    padding: 0 36px 0 12px;
    border: 1px solid var(--divider);
    border-radius: var(--radius-s);
    background: var(--bg-deep);
    color: var(--text);
    font: inherit;
    font-size: 14px;
    transition: border-color var(--dur-fast) var(--ease-out);
  }

  .input::placeholder {
    color: var(--text-tertiary);
  }

  .input:hover {
    border-color: color-mix(in srgb, var(--text) 22%, transparent);
  }

  .input:focus-visible {
    border-color: var(--accent);
  }

  /* server-rendered but inert until the client enables it; dimmed so no-JS
     visitors read it as unavailable */
  .input:disabled {
    opacity: 0.55;
    cursor: default;
  }

  .hint {
    position: absolute;
    top: 50%;
    right: 10px;
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    translate: 0 -50%;
    border: 1px solid var(--divider);
    border-radius: 5px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    pointer-events: none;
  }

  /* the shortcut only exists on desktop, with JS, before typing */
  .input:disabled + .hint,
  .input:focus + .hint,
  .input:not(:placeholder-shown) + .hint {
    display: none;
  }

  @media (max-width: 860px) {
    .hint {
      display: none;
    }
  }

  .results {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .crumb {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--text-secondary);
  }

  .empty {
    padding: 7px 12px;
    font-size: 14px;
    color: var(--text-secondary);
  }
</style>
