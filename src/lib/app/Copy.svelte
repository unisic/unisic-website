<script lang="ts">
  import Icon from "#lib/components/Icon.svelte";
  import { checkmark, contentCopy } from "#lib/icons.ts";

  /*
   * Copies text and shows a checkmark for 2 s. Without the Clipboard API
   * (insecure context) nothing happens and the text stays selectable, and
   * without JS the button stays hidden. Both labels share one grid cell so
   * the swap never resizes the button; the status span speaks the copy,
   * since a label swap on a focused button is not reliably announced.
   */
  let { text, label, copiedLabel }: { text: string; label: string; copiedLabel: string } = $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    copied = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied = false), 2000);
  }

  $effect(() => () => clearTimeout(timer));
</script>

<button type="button" class="btn btn-tonal btn-compact copy" onclick={copy}>
  <Icon svg={copied ? checkmark : contentCopy} />
  <span class="labels"><span class:off={copied}>{label}</span><span class:off={!copied}>{copiedLabel}</span></span>
</button>
<span class="sr-only" role="status">{copied ? copiedLabel : ""}</span>

<style>
  .copy {
    display: none;
    flex: none;
  }

  :global(html[data-js]) .copy {
    display: inline-flex;
  }

  .labels {
    display: grid;
  }

  .labels > span {
    grid-area: 1 / 1;
  }

  .off {
    visibility: hidden;
  }
</style>
