<script lang="ts">
  import Icon from "#lib/components/Icon.svelte";
  import { chevronDown } from "#lib/icons.ts";

  /* UComboBox as a native select, so the list, the keyboard and the screen
     reader announcement come from the platform. */
  let {
    value = $bindable(),
    options,
    label,
    wide = false,
  }: { value: string; options: string[]; label: string; wide?: boolean } = $props();
</script>

<span class="combo" class:wide>
  <select bind:value aria-label={label}>
    {#each options as o (o)}<option value={o}>{o}</option>{/each}
  </select>
  <Icon svg={chevronDown} size={16} />
</span>

<style>
  .combo {
    position: relative;
    display: inline-flex;
    flex: none;
    color: var(--text-secondary);
  }

  select {
    appearance: none;
    width: 128px;
    height: 40px;
    padding: 0 34px 0 14px;
    border: 1px solid var(--divider);
    border-radius: 10px;
    background: var(--surface-hi);
    color: var(--text);
    font: inherit;
    font-size: 15px;
    cursor: pointer;
    transition: background-color var(--dur-fast) var(--ease-out);
  }

  .wide select {
    width: 188px;
  }

  select:hover {
    background: var(--surface-hi-top);
  }

  .combo :global(svg) {
    position: absolute;
    top: 50%;
    right: 12px;
    translate: 0 -50%;
    pointer-events: none;
  }

  @container (max-width: 520px) {
    select,
    .wide select {
      width: 112px;
    }
  }
</style>
