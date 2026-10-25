<script lang="ts">
  import Icon from "./Icon.svelte";
  import { THEMES } from "#lib/themes.ts";
  import { interpolate, type Dictionary } from "#lib/i18n/index.ts";
  import {
    camera,
    close,
    minus,
    monitor,
    pen,
    record,
    region,
    window as windowGlyph,
  } from "#lib/icons.ts";

  /*
   * Interactive theme picker: each chip repaints only the miniature main
   * window below with the real palette values from Theme.qml - the rest of
   * the landing page keeps its own "unisic" skin. "Unisic" is the default.
   * The palette values feed the preview through the local --p-* vars set on
   * the figure, so nothing leaks onto <html> and the surrounding page never
   * changes theme.
   */
  const RADIO_COUNT = THEMES.length;

  let { dict }: { dict: Dictionary } = $props();
  const tx = $derived(dict.themes);
  let active = $state(0);
  const t = $derived(THEMES[active]);

  // Roving tabindex across the palette radios.
  const chipRefs = $state<HTMLButtonElement[]>([]);

  function onChipKeyDown(e: KeyboardEvent, i: number) {
    let next: number;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (i + 1) % RADIO_COUNT;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (i - 1 + RADIO_COUNT) % RADIO_COUNT;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = RADIO_COUNT - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    chipRefs[next]?.focus();
    active = next;
  }
</script>

<div class="showcase">
  <div class="chips">
    <!-- display: contents wrapper keeps the radiogroup semantics on the
         8 real palettes only; the System chip below sits outside it -->
    <div class="chipGroup" role="radiogroup" aria-label={tx.groupLabel} data-stagger="">
      {#each THEMES as theme, i (theme.name)}
        <button
          type="button"
          bind:this={chipRefs[i]}
          class={i === active ? "chipActive" : "chip"}
          role="radio"
          aria-checked={i === active}
          tabindex={i === active ? 0 : -1}
          onclick={() => (active = i)}
          onkeydown={(e) => onChipKeyDown(e, i)}
        >
          <span class="trio" aria-hidden="true">
            <span style:background={theme.bg}></span>
            <span style:background={theme.surface}></span>
            <span style:background={theme.accent}></span>
          </span>
          {theme.label}
        </button>
      {/each}
    </div>
    <!-- the ninth theme: follows the desktop scheme, so it cannot be
         previewed here and is not part of the radio interaction -->
    <span class="chip chipSystem" aria-label={tx.systemLabel}>
      <span class="trio trioAuto" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
      {tx.system}
    </span>
  </div>

  <figure
    class="previewFrame"
    role="img"
    aria-label={interpolate(tx.previewLabel, { theme: t.label })}
    style:--p-primary={t.primary}
    style:--p-tertiary={t.tertiary}
    style:--p-accent={t.accent}
    style:--p-bg={t.bg}
    style:--p-surface={t.surface}
    style:--p-text={t.text}
    style:--p-text-on-accent={t.textOnAccent}
  >
    <div class="preview" aria-hidden="true">
      <div class="titlebar">
        <span class="titleText">Unisic</span>
        <span class="winControls">
          <span class="winBtn">
            <Icon svg={minus} class="winGlyph" />
          </span>
          <span class="winBtn">
            <Icon svg={windowGlyph} class="winGlyph" />
          </span>
          <span class="winBtn">
            <Icon svg={close} class="winGlyph" />
          </span>
        </span>
      </div>
      <div class="body">
        <div class="sidebar">
          <span class="navActive">
            <Icon svg={camera} class="navIcon" />
            Capture
          </span>
          <span class="nav">
            <Icon svg={record} class="navIcon" />
            Record
          </span>
          <span class="nav">
            <Icon svg={pen} class="navIcon" />
            Edit
          </span>
        </div>
        <div class="content">
          <span class="pageTitle">Capture</span>
          <div class="cards">
            <span class="card">
              <Icon svg={monitor} class="cardIcon" />
              Full screen
            </span>
            <span class="card">
              <Icon svg={region} class="cardIcon" />
              Region
            </span>
            <span class="card">
              <Icon svg={windowGlyph} class="cardIcon" />
              Window
            </span>
          </div>
          <!-- one capture-option row: the accent lives in the switch,
               as it does on the real Capture page -->
          <span class="optRow">
            Open the editor
            <span class="switchOn">
              <span class="knob"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </figure>

  <p class="note">{tx.note}</p>
</div>

<style>
  .showcase {
    margin-top: var(--space-lede);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  /* layout-transparent: the radiogroup wraps only the 8 selectable palettes
     (the System chip stays outside its semantics) while .chips keeps laying
     out all nine pills as one flow */
  .chipGroup {
    display: contents;
  }

  .chip,
  .chipActive {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    height: 40px;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface);
    border: 1px solid var(--divider);
    cursor: pointer;
    /* the active ring is a box-shadow, so it must ride the same transition
       as the border it doubles, or it pops in one frame late */
    box-shadow: 0 0 0 0 transparent;
    transition:
      border-color var(--dur-fast) var(--ease-out),
      color var(--dur-fast) var(--ease-out),
      transform var(--dur-fast) var(--ease-out),
      box-shadow var(--dur-fast) var(--ease-out);
  }

  .chip:hover {
    color: var(--text);
    border-color: rgba(243, 240, 250, 0.3);
  }

  .chip:active,
  .chipActive:active {
    transform: scale(0.96);
  }

  .chipActive {
    color: var(--text);
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent);
  }

  .trio {
    display: inline-flex;
    gap: 3px;
  }

  .trio > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(128, 128, 128, 0.45);
  }

  /* The ninth "System" chip: not a real palette, so it can't be selected or
     previewed - a dashed pill plus a light/split/dark swatch reads as "auto". */
  .chipSystem {
    cursor: default;
    border-style: dashed;
  }

  .chipSystem:hover {
    color: var(--text-secondary);
    border-color: var(--divider);
  }

  .chipSystem:active {
    transform: none;
  }

  .trioAuto > span:nth-child(1) {
    background: #f4f5f7;
  }

  .trioAuto > span:nth-child(2) {
    background: linear-gradient(135deg, #f4f5f7 0 50%, #17153b 50% 100%);
  }

  .trioAuto > span:nth-child(3) {
    background: #17153b;
  }

  /* ---- recolorable mini window ---- */

  .previewFrame {
    margin: 24px 0 0;
    container-type: inline-size;
    max-width: 720px;
  }

  .preview {
    --u: 0.15873cqi; /* 100cqi / 630 design px */
    aspect-ratio: 630 / 300;
    display: flex;
    flex-direction: column;
    border-radius: calc(16 * var(--u));
    background: var(--p-bg);
    border: 1px solid var(--divider);
    box-shadow: 0 calc(18 * var(--u)) calc(46 * var(--u)) rgba(0, 0, 0, 0.45);
    overflow: hidden;
    transition: background var(--dur) var(--ease-out);
  }

  .titlebar {
    height: calc(34 * var(--u));
    flex: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc(14 * var(--u));
    background: var(--p-primary);
    color: var(--p-text);
    transition:
      background var(--dur) var(--ease-out),
      color var(--dur) var(--ease-out);
  }

  .titleText {
    font-size: calc(13 * var(--u));
    font-weight: 600;
    line-height: 1;
  }

  .winControls {
    display: flex;
    gap: calc(3 * var(--u));
  }

  .winBtn {
    width: calc(22 * var(--u));
    height: calc(22 * var(--u));
    border-radius: calc(6 * var(--u));
    display: grid;
    place-items: center;
    color: var(--p-text);
    opacity: 0.55;
    /* keep the window buttons inside the uniform 220ms theme crossfade */
    transition: color var(--dur) var(--ease-out);
  }

  .winBtn :global(.winGlyph) {
    width: calc(11 * var(--u));
    height: calc(11 * var(--u));
  }

  .body {
    flex: 1;
    display: flex;
    min-height: 0;
  }

  .sidebar {
    width: calc(170 * var(--u));
    flex: none;
    background: var(--p-primary);
    padding: calc(12 * var(--u)) calc(10 * var(--u));
    display: flex;
    flex-direction: column;
    gap: calc(4 * var(--u));
    transition: background var(--dur) var(--ease-out);
  }

  .nav,
  .navActive {
    height: calc(36 * var(--u));
    border-radius: calc(10 * var(--u));
    display: flex;
    align-items: center;
    gap: calc(10 * var(--u));
    padding-left: calc(12 * var(--u));
    font-size: calc(13 * var(--u));
    line-height: 1;
    color: var(--p-text);
    transition:
      background var(--dur) var(--ease-out),
      color var(--dur) var(--ease-out);
  }

  .nav {
    opacity: 0.62;
  }

  .navActive {
    background: var(--p-tertiary);
    font-weight: 600;
  }

  .sidebar :global(.navIcon) {
    width: calc(16 * var(--u));
    height: calc(16 * var(--u));
    flex: none;
  }

  .content {
    flex: 1;
    min-width: 0;
    padding: calc(18 * var(--u)) calc(22 * var(--u));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .pageTitle {
    font-size: calc(21 * var(--u));
    font-weight: 700;
    color: var(--p-text);
    line-height: 1.2;
    transition: color var(--dur) var(--ease-out);
  }

  .cards {
    display: flex;
    gap: calc(10 * var(--u));
    margin-top: calc(14 * var(--u));
  }

  .card {
    width: calc(128 * var(--u));
    height: calc(84 * var(--u));
    border-radius: calc(16 * var(--u));
    background: var(--p-surface);
    color: var(--p-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(8 * var(--u));
    font-size: calc(13 * var(--u));
    font-weight: 600;
    line-height: 1;
    border: 1px solid rgba(128, 128, 128, 0.22);
    transition:
      background var(--dur) var(--ease-out),
      color var(--dur) var(--ease-out);
  }

  .card :global(.cardIcon) {
    width: calc(24 * var(--u));
    height: calc(24 * var(--u));
  }

  /* one USettingRow with its USwitch on: on the real Capture page the accent
     shows up in the switch track, not in a button (USwitch.qml:19-33) */
  .optRow {
    margin-top: calc(10 * var(--u));
    width: calc(404 * var(--u));
    height: calc(40 * var(--u));
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc(12 * var(--u));
    border-radius: calc(12 * var(--u));
    background: var(--p-surface);
    color: var(--p-text);
    border: 1px solid rgba(128, 128, 128, 0.22);
    font-size: calc(12.5 * var(--u));
    line-height: 1;
    transition:
      background var(--dur) var(--ease-out),
      color var(--dur) var(--ease-out);
  }

  .switchOn {
    width: calc(38 * var(--u));
    height: calc(23 * var(--u));
    border-radius: calc(11.5 * var(--u));
    background: var(--p-accent);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 calc(2.5 * var(--u));
    flex: none;
    transition: background var(--dur) var(--ease-out);
  }

  .knob {
    width: calc(18 * var(--u));
    height: calc(18 * var(--u));
    border-radius: 50%;
    background: linear-gradient(#fdfdff, #d9d7e4);
  }

  .note {
    margin-top: 20px;
    color: var(--ink-2);
    font-size: 0.9375rem;
  }

  /* Desktop split: the palettes wrap in a block beside the preview, so the
     section stays about one preview tall. Below 900px they stack. */
  @media (min-width: 900px) {
    .showcase {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
      column-gap: 48px;
      align-items: start;
    }

    .chips {
      align-content: flex-start;
    }

    .previewFrame {
      margin-top: 0;
    }

    .note {
      grid-column: 1 / -1;
    }
  }
</style>
