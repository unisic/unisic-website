<script lang="ts">
  import Icon from "./Icon.svelte";
  import Logo from "./Logo.svelte";
  import type { Dictionary } from "#lib/i18n/index.ts";
  import {
    camera,
    chevronDown,
    close,
    configure,
    folderCloud,
    history,
    minus,
    monitor,
    pen,
    record,
    region,
    repeat,
    window as windowGlyph,
  } from "#lib/icons.ts";

  /*
   * Faithful mini-recreation of the main window (unisic/qml/Main.qml,
   * 1060x700): 38px title bar, 224px sidebar flat on the backdrop with two
   * labelled groups (Main.qml:294-329) and the app card at the bottom
   * (:333-...), and the Capture page (CapturePage.qml) on the rounded content
   * card: header, three 140px radius-26 tiles with hotkey chips, then the
   * "Capture options" grid of USettingRow cells.
   */

  let { dict }: { dict: Dictionary } = $props();
  const m = $derived(dict.mainWindow);

  const nav = $derived([
    { icon: camera, label: m.nav.capture, active: true },
    { icon: record, label: m.nav.record, active: false },
    { icon: pen, label: m.nav.edit, active: false },
  ]);

  const library = $derived([
    { icon: history, label: m.nav.history },
    { icon: folderCloud, label: m.nav.servers },
  ]);

  const cards = $derived([
    { icon: monitor, title: m.cards.fullScreen.title, sub: m.cards.fullScreen.sub, keys: "Meta+Shift+1" },
    { icon: region, title: m.cards.region.title, sub: m.cards.region.sub, keys: "Meta+Shift+2" },
    { icon: windowGlyph, title: m.cards.window.title, sub: m.cards.window.sub, keys: "Meta+Shift+3" },
  ]);

  /* Same eight cells in the same order as CapturePage.qml's toggleFlow, so
     the two-column wrap lands on the same pairs the app shows. */
  const toggles = $derived([
    { label: m.options.cursor, on: true },
    { label: m.options.editor, on: true },
    { label: m.options.clipboard, on: true },
    { label: m.options.disk, on: true },
    { label: m.options.upload, on: false },
  ]);
</script>

<figure class="mock" role="img" aria-label={m.ariaLabel}>
  <div class="window" aria-hidden="true">
    <div class="titlebar">
      <span class="title">Unisic</span>
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
        <span class="groupLabel">Unisic</span>
        {#each nav as { icon, label, active }}
          <span class={active ? "navItemActive" : "navItem"}>
            <Icon svg={icon} class="navIcon" />
            {label}
          </span>
        {/each}

        <span class="groupLabelGap">{m.library}</span>
        {#each library as { icon, label }}
          <span class="navItem">
            <Icon svg={icon} class="navIcon" />
            {label}
          </span>
        {/each}

        <div class="appCard">
          <span class="appIcon">
            <Logo />
          </span>
          <span class="appText">
            <span class="appName">Unisic</span>
            <span class="appVersion">v0.8</span>
          </span>
          <span class="gearBtn">
            <Icon svg={configure} class="gearGlyph" />
          </span>
        </div>
      </div>

      <div class="content">
        <span class="glow"></span>
        <div class="page">
          <span class="pageTitle">{m.pageTitle}</span>
          <span class="pageSub">{m.pageSub}</span>

          <div class="cardRow">
            {#each cards as { icon, title, sub, keys }}
              <span class="card">
                <Icon svg={icon} class="cardIcon" />
                <span class="cardTitle">{title}</span>
                <span class="cardSub">{sub}</span>
                <span class="cardChip">{keys}</span>
              </span>
            {/each}
          </div>

          <span class="sectionTitle">{m.options.title}</span>

          <div class="optionGrid">
            <span class="optRow">
              <span class="optLabel">{m.options.delay}</span>
              <span class="comboShort">
                200 ms
                <Icon svg={chevronDown} class="comboChevron" />
              </span>
            </span>

            <span class="optRow">
              <span class="optLabel">{m.options.repeat}</span>
              <span class="tonalBtn">
                <Icon svg={repeat} class="btnGlyph" />
                {m.options.repeatAction}
              </span>
            </span>

            <span class="optRow">
              <span class="optLabel">{m.options.server}</span>
              <span class="comboWide">
                catbox.moe
                <Icon svg={chevronDown} class="comboChevron" />
              </span>
            </span>

            {#each toggles as { label, on }}
              <span class="optRow">
                <span class="optLabel">{label}</span>
                <span class={on ? "switchOn" : "switchOff"}>
                  <span class="knob"></span>
                </span>
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</figure>

<style>
  /*
   * Design canvas: 1060 x 700 (Main.qml:10-13). --u = one design pixel.
   * Flat backgroundDeep backdrop (Main.qml:213-216) carrying a 38px title bar
   * and a 224px sidebar with no chrome of its own; the page rides a rounded
   * `background` card inset by spacingM (Main.qml:674-709) with the accent glow
   * bleeding 230px down from its top edge. Capture page per CapturePage.qml,
   * rows per unisic-kit USettingRow (56px, radiusM, surface + divider).
   */

  .mock {
    margin: 0;
    container-type: inline-size;
    width: 100%;
  }

  .window {
    --u: 0.09434cqi; /* 100cqi / 1060 */
    aspect-ratio: 1060 / 700;
    display: flex;
    flex-direction: column;
    border-radius: calc(18 * var(--u));
    background: var(--bg-deep);
    border: 1px solid var(--divider);
    box-shadow:
      0 calc(28 * var(--u)) calc(70 * var(--u)) rgba(0, 0, 0, 0.55),
      inset 0 1px 0 var(--edge-light);
    overflow: hidden;
  }

  /* ---- title bar (Main.qml:218-276) ---- */

  .titlebar {
    height: calc(38 * var(--u));
    flex: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: calc(7 * var(--u));
  }

  .title {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: calc(14 * var(--u));
    font-weight: 600;
    color: var(--text);
    line-height: 1;
  }

  .winControls {
    display: flex;
    gap: calc(1 * var(--u));
  }

  .winBtn {
    width: calc(30 * var(--u));
    height: calc(30 * var(--u));
    border-radius: calc(8 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text-tertiary);
  }

  .winBtn :global(.winGlyph) {
    width: calc(14 * var(--u));
    height: calc(14 * var(--u));
  }

  /* ---- sidebar (Main.qml:279-440) ---- */

  .body {
    flex: 1;
    display: flex;
    min-height: 0;
  }

  .sidebar {
    width: calc(224 * var(--u));
    flex: none;
    padding: calc(12 * var(--u));
    display: flex;
    flex-direction: column;
    gap: calc(4 * var(--u));
  }

  /* Section headers, like the app-name row in a music player (Main.qml:302). */
  .groupLabel,
  .groupLabelGap {
    padding-left: calc(11 * var(--u));
    font-size: calc(12 * var(--u));
    font-weight: 600;
    color: var(--text-tertiary);
    line-height: calc(21 * var(--u));
  }

  /* The spacer Item between the two groups (Main.qml:315). */
  .groupLabelGap {
    margin-top: calc(12 * var(--u));
  }

  /* SidebarItem.qml: 38px, radiusS, 11px inset, 17px icon, 10px gap */
  .navItem,
  .navItemActive {
    height: calc(38 * var(--u));
    flex: none;
    border-radius: calc(8 * var(--u));
    display: flex;
    align-items: center;
    gap: calc(10 * var(--u));
    padding-left: calc(11 * var(--u));
    font-size: calc(14 * var(--u));
    line-height: 1;
    color: var(--text-secondary);
  }

  .navItemActive {
    background: var(--tertiary);
    color: var(--text);
    font-weight: 600;
  }

  .sidebar :global(.navIcon) {
    width: calc(17 * var(--u));
    height: calc(17 * var(--u));
    flex: none;
  }

  /* App card at the bottom: identity + version left, Settings gear right
     (Main.qml:333-434). */
  .appCard {
    margin-top: auto;
    height: calc(56 * var(--u));
    flex: none;
    border-radius: calc(12 * var(--u));
    background: var(--surface);
    border: 1px solid var(--divider);
    display: flex;
    align-items: center;
    padding: 0 calc(8 * var(--u)) 0 calc(11 * var(--u));
    gap: calc(10 * var(--u));
  }

  .appIcon :global(svg) {
    width: calc(32 * var(--u));
    height: calc(32 * var(--u));
  }

  .appText {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: calc(1 * var(--u));
  }

  .appName {
    font-size: calc(14 * var(--u));
    font-weight: 600;
    line-height: 1.3;
  }

  .appVersion {
    font-size: calc(12 * var(--u));
    color: var(--text-tertiary);
    line-height: 1.3;
  }

  .gearBtn {
    width: calc(30 * var(--u));
    height: calc(30 * var(--u));
    flex: none;
    border-radius: calc(8 * var(--u));
    display: grid;
    place-items: center;
    color: var(--text-secondary);
  }

  .gearBtn :global(.gearGlyph) {
    width: calc(17 * var(--u));
    height: calc(17 * var(--u));
  }

  /* ---- content card (Main.qml:674-709) ---- */

  .content {
    flex: 1;
    min-width: 0;
    margin: calc(12 * var(--u)) calc(12 * var(--u)) calc(12 * var(--u)) 0;
    border-radius: calc(18 * var(--u));
    background: var(--bg);
    border: 1px solid var(--edge-light);
    position: relative;
    overflow: hidden;
  }

  /* accent wash bleeding down from the card's top edge */
  .glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(230 * var(--u));
    background: linear-gradient(rgba(200, 172, 214, 0.14), rgba(200, 172, 214, 0));
    border-radius: calc(17 * var(--u)) calc(17 * var(--u)) 0 0;
  }

  /* ---- Capture page (CapturePage.qml) ---- */

  .page {
    position: relative;
    height: 100%;
    padding: calc(32 * var(--u));
    display: flex;
    flex-direction: column;
  }

  .pageTitle {
    font-size: calc(28 * var(--u));
    font-weight: 700;
    line-height: 1.3;
  }

  .pageSub {
    margin-top: calc(3 * var(--u));
    font-size: calc(14 * var(--u));
    color: var(--text-secondary);
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cardRow {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(20 * var(--u));
    margin-top: calc(12 * var(--u));
  }

  .card {
    height: calc(140 * var(--u));
    border-radius: calc(26 * var(--u));
    background: linear-gradient(var(--surface-top), var(--surface-bottom));
    border: 1px solid var(--divider);
    box-shadow: 0 calc(4 * var(--u)) calc(14 * var(--u)) var(--shadow-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(8 * var(--u));
  }

  .card :global(.cardIcon) {
    width: calc(40 * var(--u));
    height: calc(40 * var(--u));
    color: var(--text);
  }

  .cardTitle {
    font-size: calc(17 * var(--u));
    font-weight: 600;
    line-height: 1;
  }

  .cardSub {
    font-size: calc(12 * var(--u));
    color: var(--text-secondary);
    line-height: 1;
  }

  .cardChip {
    height: calc(22 * var(--u));
    padding: 0 calc(9 * var(--u));
    border-radius: calc(11 * var(--u));
    background: var(--primary);
    color: var(--accent);
    font-family: var(--font-mono), monospace;
    font-size: calc(11 * var(--u));
    display: inline-flex;
    align-items: center;
  }

  /* ---- "Capture options" grid (CapturePage.qml:221-303) ---- */

  .sectionTitle {
    margin-top: calc(18 * var(--u)); /* spacingM + the header's 6px topPadding */
    font-size: calc(17 * var(--u));
    font-weight: 700;
    line-height: 1.3;
  }

  .optionGrid {
    margin-top: calc(12 * var(--u));
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(12 * var(--u));
  }

  /* USettingRow.qml: 40px head + 16px padding, radiusM, surface + divider */
  .optRow {
    height: calc(56 * var(--u));
    border-radius: calc(12 * var(--u));
    background: var(--surface);
    border: 1px solid var(--divider);
    padding: 0 calc(12 * var(--u));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(12 * var(--u));
  }

  .optLabel {
    font-size: calc(14 * var(--u));
    color: var(--text);
    line-height: 1.3;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* UComboBox.qml / UValueCombo.qml: 40px, radiusM, surfaceHi, 14px inset */
  .comboShort,
  .comboWide {
    height: calc(40 * var(--u));
    flex: none;
    border-radius: calc(12 * var(--u));
    background: var(--surface-hi);
    border: 1px solid var(--divider);
    padding: 0 calc(10 * var(--u)) 0 calc(14 * var(--u));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(8 * var(--u));
    font-size: calc(14 * var(--u));
    line-height: 1;
  }

  .comboShort {
    width: calc(130 * var(--u));
  }

  .comboWide {
    width: calc(190 * var(--u));
  }

  .optionGrid :global(.comboChevron) {
    width: calc(16 * var(--u));
    height: calc(16 * var(--u));
    flex: none;
    color: var(--text-secondary);
  }

  /* UButton.qml, variant "tonal" + compact: 34px pill on tertiary */
  .tonalBtn {
    height: calc(34 * var(--u));
    flex: none;
    border-radius: calc(17 * var(--u));
    background: var(--tertiary);
    border: 1px solid var(--divider);
    padding: 0 calc(14 * var(--u));
    display: flex;
    align-items: center;
    gap: calc(7 * var(--u));
    font-size: calc(14 * var(--u));
    font-weight: 600;
    line-height: 1;
  }

  .tonalBtn :global(.btnGlyph) {
    width: calc(16 * var(--u));
    height: calc(16 * var(--u));
    flex: none;
  }

  /* USwitch.qml: 50x30 track, radius 15, 24px always-white gradient knob */
  .switchOn,
  .switchOff {
    width: calc(50 * var(--u));
    height: calc(30 * var(--u));
    border-radius: calc(15 * var(--u));
    flex: none;
    position: relative;
  }

  .switchOn {
    background: var(--accent);
  }

  .switchOff {
    background: var(--surface-hi);
    border: 1px solid var(--divider);
  }

  .knob {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(24 * var(--u));
    height: calc(24 * var(--u));
    border-radius: 50%;
    background: linear-gradient(#ffffff, #ddd6ec);
  }

  .switchOn .knob {
    right: calc(3 * var(--u));
  }

  .switchOff .knob {
    left: calc(3 * var(--u));
  }
</style>
