<script lang="ts">
  import type { Snippet } from "svelte";
  import Icon from "#lib/components/Icon.svelte";
  import { close, minus, windowFrame } from "#lib/icons.ts";

  /* The app's frameless window: a title bar on the background colour, the
     title centred (main window) or on the left (editor), three controls. */
  let {
    title,
    label,
    left = false,
    children,
  }: { title: string; label: string; left?: boolean; children: Snippet } = $props();
</script>

<div class="window" role="group" aria-label={label}>
  <div class="bar" class:left aria-hidden="true">
    <span class="title">{title}</span>
    <span class="controls">
      <Icon svg={minus} size={14} />
      <Icon svg={windowFrame} size={14} />
      <Icon svg={close} size={14} />
    </span>
  </div>
  {@render children()}
</div>

<style>
  .window {
    container-type: inline-size;
    overflow: hidden;
    border: 1px solid var(--divider);
    border-radius: var(--radius-m);
    background: var(--bg);
    box-shadow:
      0 1px 0 var(--edge-light) inset,
      0 30px 80px -30px var(--shadow-color);
  }

  .bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    padding: 0 16px;
    font-size: 15px;
    color: var(--text-secondary);
    user-select: none;
  }

  .bar.left {
    justify-content: flex-start;
    color: var(--text);
    font-weight: 600;
  }

  .controls {
    position: absolute;
    right: 14px;
    display: flex;
    gap: 18px;
    color: var(--text-secondary);
  }
</style>
