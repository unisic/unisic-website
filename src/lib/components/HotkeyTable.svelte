<script lang="ts">
  import { SvelteSet } from "svelte/reactivity";
  import Kbd from "./Kbd.svelte";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* Key combos are fixed data; the action label is pulled from the
     dictionary by id so only the prose translates. */
  const HOTKEY_KEYS: Array<{ id: keyof Dictionary["hotkeys"]["rows"]; keys: string[] }> = [
    { id: "full", keys: ["Meta", "Shift", "1"] },
    { id: "region", keys: ["Meta", "Shift", "2"] },
    { id: "window", keys: ["Meta", "Shift", "3"] },
    { id: "gif", keys: ["Meta", "Shift", "G"] },
    { id: "video", keys: ["Meta", "Shift", "R"] },
    { id: "ocr", keys: ["Meta", "Shift", "T"] },
    { id: "copyLast", keys: ["Meta", "Shift", "C"] },
    { id: "replay", keys: ["Meta", "Shift", "I"] },
    { id: "stop", keys: ["Ctrl", "Esc"] },
  ];

  /* KeyboardEvent to the table's key vocabulary. Letters and digits come
     from e.code so Shift-shifted characters ("!" for 1) still match. */
  function normalize(e: KeyboardEvent): string | null {
    if (e.key === "Control") return "Ctrl";
    if (e.key === "Escape") return "Esc";
    if (e.code === "Space") return "Space";
    if (e.key === "Shift" || e.key === "Meta") return e.key;
    const m = /^(?:Key([A-Z])|Digit([0-9]))$/.exec(e.code);
    return m ? (m[1] ?? m[2]) : null;
  }

  function isEditable(t: EventTarget | null) {
    return (
      t instanceof HTMLElement &&
      (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
    );
  }

  /*
   * Live hotkey table: holding a shortcut on the real keyboard lights up the
   * matching caps and row. Compositor-grabbed combos may never reach the
   * browser; whatever does arrive is reflected. Keys are cleared on window
   * blur, since an OS shortcut (or a real screenshot) can swallow the keyup.
   * The set holds at most the handful of keys the table knows.
   */
  let { dict }: { dict: Dictionary } = $props();
  const h = $derived(dict.hotkeys);
  const pressed = new SvelteSet<string>();

  function down(e: KeyboardEvent) {
    if (e.repeat || isEditable(e.target)) return;
    const k = normalize(e);
    if (k) pressed.add(k);
  }

  function up(e: KeyboardEvent) {
    const k = normalize(e);
    if (k) pressed.delete(k);
  }
</script>

<svelte:window onkeydown={down} onkeyup={up} onblur={() => pressed.clear()} />

<div>
  <h3 class="caption">{h.caption}</h3>
  <table class="table">
    <caption class="sr-only">{h.caption}</caption>
    <thead class="sr-only">
      <tr>
        <th scope="col">{h.action}</th>
        <th scope="col">{h.shortcut}</th>
      </tr>
    </thead>
    <tbody>
      {#each HOTKEY_KEYS as row (row.id)}
        <tr class="row" data-hit={row.keys.every((k) => pressed.has(k)) ? "" : undefined}>
          <td class="action">{h.rows[row.id]}</td>
          <td class="keys"><Kbd keys={row.keys} {pressed} /></td>
        </tr>
      {/each}
    </tbody>
  </table>
  <p class="try-hint">{h.tryHint}</p>
  <p class="note">{h.note}</p>
</div>

<style>
  .table {
    width: 100%;
  }

  .caption {
    font-size: 1.25rem;
    font-weight: 750;
    letter-spacing: -0.015em;
    padding-bottom: 14px;
  }

  .row + .row td {
    border-top: 1px solid var(--divider);
  }

  .action {
    padding: 11px 0;
    color: var(--ink-2);
    transition: color var(--dur-fast) var(--ease-out);
  }

  .row[data-hit] .action {
    color: var(--text);
  }

  .keys {
    padding: 11px 0;
    text-align: right;
  }

  /* only meaningful once the client bundle listens for keys */
  .try-hint {
    display: none;
    margin-top: 14px;
    color: var(--ink-2);
    font-size: 0.9375rem;
  }

  :global(html[data-js]) .try-hint {
    display: block;
  }

  .note {
    margin-top: 6px;
    color: var(--ink-2);
    font-size: 0.9375rem;
  }
</style>
