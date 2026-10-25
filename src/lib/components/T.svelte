<script lang="ts">
  import type { Snippet } from "svelte";

  /* Splits a "{token}" template into text runs and snippet slots, so a
     translated string can carry inline markup (a <Kbd>, <code> or <a>) in
     whatever order the language needs. Unknown tokens stay literal text. */
  let { str, ...slots }: { str: string; [token: string]: Snippet | string } = $props();
</script>

{#each str.split(/(\{\w+\})/) as part}{@const slot = slots[/^\{(\w+)\}$/.exec(part)?.[1] ?? ""]}{#if typeof slot === "function"}{@render slot()}{:else}{part}{/if}{/each}
