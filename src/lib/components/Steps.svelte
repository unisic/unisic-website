<script lang="ts">
  import Kbd from "./Kbd.svelte";
  import T from "./T.svelte";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* Three numbered captions under the overlay picture. The ol keeps its list
     semantics (role="list" restores them where list-style: none strips
     them) so a screen reader announces "list, 3 items" and each position. */
  let { dict }: { dict: Dictionary } = $props();
  const s = $derived(dict.how.steps);
</script>

<ol class="steps" role="list">
  <li class="step">
    <span class="num" aria-hidden="true">1</span>
    <h3 class="title">{s.hotkey.title}</h3>
    <p class="body">
      <T str={s.hotkey.body}>{#snippet keys()}<Kbd keys={["Meta", "Shift", "2"]} />{/snippet}</T>
    </p>
  </li>
  <li class="step">
    <span class="num" aria-hidden="true">2</span>
    <h3 class="title">{s.mark.title}</h3>
    <p class="body">{s.mark.body}</p>
  </li>
  <li class="step">
    <span class="num" aria-hidden="true">3</span>
    <h3 class="title">{s.share.title}</h3>
    <p class="body">{s.share.body}</p>
  </li>
</ol>

<style>
  .steps {
    margin: 48px 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
  }

  /* a hairline with the step's badge pinned on its start */
  .step {
    position: relative;
    min-width: 0;
    padding-top: 34px;
    background: linear-gradient(var(--divider) 0 0) top left / 100% 1px no-repeat;
  }

  /* the editor's numbered-step badge (swatch 1, white figure, as the app
     draws it); 19px bold is large text, so white on red clears 3:1. The
     ring in the page color cuts the hairline around it */
  .num {
    position: absolute;
    top: -18px;
    left: 0;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--swatch-1);
    box-shadow: 0 0 0 5px var(--bg);
    color: #fff;
    font-family: var(--font-display);
    font-size: 1.1875rem;
    font-weight: 800;
    line-height: 1;
  }

  .title {
    margin-top: 10px;
    font-size: 1.375rem;
    font-weight: 750;
    letter-spacing: -0.025em;
  }

  .body {
    margin-top: 8px;
    color: var(--ink-2);
    line-height: 1.65;
  }

  @media (max-width: 899px) {
    .steps {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
</style>
