<script lang="ts">
  /* USwitch: an accent track when on, a sunken one when off, a white knob. */
  let { checked = $bindable(false), label }: { checked?: boolean; label: string } = $props();
</script>

<button type="button" class="switch" role="switch" aria-checked={checked} aria-label={label} onclick={() => (checked = !checked)}>
  <span class="knob"></span>
</button>

<style>
  .switch {
    position: relative;
    flex: none;
    width: 50px;
    height: 28px;
    border-radius: 999px;
    border: 1px solid var(--divider);
    background: var(--bg-deep);
    transition: background-color var(--dur) var(--ease-out);
  }

  .switch[aria-checked="true"] {
    border-color: transparent;
    background: var(--accent);
  }

  .knob {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    transition: transform var(--dur) var(--ease-back);
  }

  .switch[aria-checked="true"] .knob {
    transform: translateX(22px);
  }
</style>
