<script lang="ts">
  import EditorPreview from "./EditorPreview.svelte";
  import Icon from "./Icon.svelte";
  import { checkmark, image, lock } from "#lib/icons.ts";
  import type { Dictionary } from "#lib/i18n/index.ts";

  /* desktops the capture paths in docs/compositors cover; brand names */
  const DESKTOPS = ["KDE Plasma", "GNOME", "niri", "Sway", "Hyprland"];

  /* Static markup, no client state. The flagship editor cell leads with the
     app's floating annotation toolbar (EditorPreview).

     Four of the six titles link into the docs page that covers that
     feature: the landing page is the only page with inbound authority and
     otherwise reaches /docs through a single nav link. */
  let { dict }: { dict: Dictionary } = $props();
  const f = $derived(dict.features);
</script>

<div class="grid">
  <article class="cell frame editor">
    <EditorPreview />
    <h3 class="title"><a href="/docs/editor/">{f.editor.title}</a></h3>
    <p class="body">{f.editor.body}</p>
  </article>

  <article class="cell frame">
    <div class="visual" aria-hidden="true">
      <span class="link-pill">https://i.example.net/8fx2.png</span>
      <span class="copied-chip"><Icon svg={checkmark} size={13} />{f.upload.copied}</span>
    </div>
    <h3 class="title"><a href="/docs/upload-destinations/">{f.upload.title}</a></h3>
    <p class="body">{f.upload.body}</p>
  </article>

  <article class="cell frame">
    <div class="visual" aria-hidden="true">
      <span class="thumb thumb-a"></span>
      <span class="thumb thumb-b"></span>
      <span class="thumb thumb-c"></span>
      <span class="thumb thumb-d"><Icon svg={image} size={16} /></span>
    </div>
    <h3 class="title">{f.history.title}</h3>
    <p class="body">{f.history.body}</p>
  </article>

  <article class="cell frame">
    <ul class="desktops">
      {#each DESKTOPS as name (name)}<li>{name}</li>{/each}
    </ul>
    <h3 class="title"><a href="/docs/compositors/">{f.silent.title}</a></h3>
    <p class="body">{f.silent.body}</p>
  </article>

  <article class="cell frame">
    <div class="visual" aria-hidden="true">
      <span class="ocr-region">
        <span class="ocr-line"></span>
        <span class="ocr-line short"></span>
      </span>
      <span class="copied-chip"><Icon svg={checkmark} size={13} />{f.upload.copied}</span>
    </div>
    <h3 class="title"><a href="/docs/capture/#copy-text-out-of-a-region-ocr">{f.ocr.title}</a></h3>
    <p class="body">{f.ocr.body}</p>
  </article>

  <article class="cell frame">
    <span class="cell-icon" aria-hidden="true"><Icon svg={lock} size={20} /></span>
    <h3 class="title">{f.yours.title}</h3>
    <p class="body">{f.yours.body}</p>
  </article>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-areas:
      "editor editor upload"
      "editor editor history"
      "silent ocr yours";
    gap: 20px;
  }

  .grid > :nth-child(1) { grid-area: editor; }
  .grid > :nth-child(2) { grid-area: upload; }
  .grid > :nth-child(3) { grid-area: history; }
  .grid > :nth-child(4) { grid-area: silent; }
  .grid > :nth-child(5) { grid-area: ocr; }
  .grid > :nth-child(6) { grid-area: yours; }

  .cell {
    min-width: 0;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: var(--radius-l);
    background: var(--surface);
    border: 1px solid var(--divider);
    --frame-gap: 6px;
    --corner-arm: 14px;
  }

  /* hover selects the card: the crop corners snap in around it, the way
     the overlay frames a region. Opacity only, so nothing reflows. */
  .cell::after {
    opacity: 0;
    transition: opacity var(--dur-fast) var(--ease-out);
  }

  @media (hover: hover) {
    .cell {
      transition: border-color var(--dur-fast) var(--ease-out);
    }

    .cell:hover {
      border-color: color-mix(in srgb, var(--accent) 35%, var(--divider));
    }

    .cell:hover::after {
      opacity: 1;
    }
  }

  .cell:focus-within::after {
    opacity: 1;
  }

  .title {
    font-size: 1.4375rem;
    font-weight: 750;
    letter-spacing: -0.025em;
  }

  /* the global reset drops the underline and inherits the color, so hover
     is the only affordance to add */
  .title a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .body {
    color: var(--ink-2);
    font-size: 1.0625rem;
    line-height: 1.6;
  }

  .editor {
    gap: 12px;
  }

  .editor > :global(:first-child) {
    margin-bottom: 8px;
  }

  .visual {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    margin-bottom: 8px;
  }

  .link-pill {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 32px;
    line-height: 30px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid var(--divider);
    background: var(--bg-deep);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--ink-2);
  }

  .copied-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    height: 32px;
    padding: 0 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--success) 14%, transparent);
    border: 1px solid color-mix(in srgb, var(--success) 35%, transparent);
    color: var(--success);
    font-size: 12.5px;
    font-weight: 650;
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: no-preference) {
    .cell:hover .copied-chip {
      animation: chip-pop 0.4s var(--ease-out);
    }
  }

  @keyframes chip-pop {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
  }

  .thumb {
    width: 44px;
    height: 34px;
    border-radius: var(--radius-s);
    border: 1px solid var(--divider);
  }

  .thumb-a {
    background: linear-gradient(140deg, var(--tertiary), var(--bg-deep));
  }

  .thumb-b {
    background: linear-gradient(200deg, var(--secondary), var(--bg-deep));
  }

  .thumb-c {
    background: linear-gradient(160deg, var(--secondary), var(--primary));
  }

  .thumb-d {
    display: grid;
    place-items: center;
    color: var(--text-tertiary);
    background: var(--bg-deep);
  }

  .desktops {
    margin: 0 0 8px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .desktops li {
    padding: 3px 11px;
    border-radius: 999px;
    border: 1px solid var(--divider);
    background: var(--bg-deep);
    color: var(--ink-2);
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .ocr-region {
    flex: 1;
    min-width: 0;
    height: 34px;
    padding: 7px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px dashed var(--accent);
    border-radius: 4px;
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  .ocr-line {
    height: 6px;
    border-radius: 3px;
    background: var(--text-tertiary);
  }

  .ocr-line.short {
    width: 60%;
  }

  .cell-icon {
    width: 38px;
    height: 38px;
    margin-bottom: 4px;
    display: grid;
    place-items: center;
    border-radius: var(--radius-m);
    background: var(--tertiary);
    color: var(--text);
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        "editor editor"
        "upload history"
        "silent ocr"
        "yours yours";
    }
  }

  @media (max-width: 599px) {
    .grid {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "editor" "upload" "history" "silent" "ocr" "yours";
    }
  }
</style>
