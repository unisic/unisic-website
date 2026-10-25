<script lang="ts">
  import type { Dictionary } from "#lib/i18n/index.ts";

  let { dict }: { dict: Dictionary } = $props();
  const c = $derived(dict.compositors);
</script>

<div>
  <h3 class="title">{c.title}</h3>
  <dl class="list">
    {#each [c.plasma, c.gnome, c.wlroots] as item (item.name)}
      <div class="item">
        <dt class="name">{item.name}</dt>
        <dd class="body">{item.body}</dd>
      </div>
    {/each}
  </dl>
</div>

<style>
  .title {
    font-size: 1.25rem;
    font-weight: 750;
    letter-spacing: -0.015em;
    padding-bottom: 14px;
  }

  .list {
    margin: 0;
  }

  .item {
    padding: 12px 0;
  }

  .item + .item {
    border-top: 1px solid var(--divider);
  }

  .name {
    font-weight: 650;
    font-size: 1.0625rem;
  }

  .body {
    margin: 4px 0 0;
    color: var(--ink-2);
    line-height: 1.6;
  }
</style>
