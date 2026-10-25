<script lang="ts">
  import CompositorNotes from "#lib/components/CompositorNotes.svelte";
  import CopyCommand from "#lib/components/CopyCommand.svelte";
  import DistroIcon from "#lib/components/DistroIcon.svelte";
  import DistroInstall from "#lib/components/DistroInstall.svelte";
  import FeatureGrid from "#lib/components/FeatureGrid.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import Hero from "#lib/components/Hero.svelte";
  import HotkeyTable from "#lib/components/HotkeyTable.svelte";
  import Intro from "#lib/components/Intro.svelte";
  import Icon from "#lib/components/Icon.svelte";
  import Kbd from "#lib/components/Kbd.svelte";
  import Nav from "#lib/components/Nav.svelte";
  import OverlayMockup from "#lib/components/OverlayMockup.svelte";
  import RecordingFrame from "#lib/components/RecordingFrame.svelte";
  import Seo from "#lib/components/Seo.svelte";
  import Steps from "#lib/components/Steps.svelte";
  import T from "#lib/components/T.svelte";
  import ThemeShowcase from "#lib/components/ThemeShowcase.svelte";
  import { DIRECT_ASSETS, DISTROS } from "#lib/distros.ts";
  import { landingMeta } from "#lib/i18n/metadata.ts";
  import { checkmark } from "#lib/icons.ts";
  import { reveal } from "#lib/reveal.ts";
  import { INSTALL_COMMAND } from "#lib/site.ts";
  import type { PageProps } from "./$types";

  /* every package the download picker offers, in the picker's order */
  const PACKAGES = [...DIRECT_ASSETS, ...DISTROS];

  /* Order follows the questions a visitor asks: what is it and how do I get
     it (hero), will it run on my system (packages), what makes it different
     (#how), what else does it do (#features), then the install command again
     at the point of most interest, the details, and the full install band.

     Reveal wraps only the mockups, whose one-shot open choreography is keyed
     off it. Text and controls are never hidden behind a scroll trigger. */
  let { data }: PageProps = $props();
  const dict = $derived(data.dict);
  const d = $derived(dict.download);
</script>

<Seo meta={landingMeta(data.locale, dict)} />
<Intro />

<a href="#main" class="skip-link">{dict.nav.skip}</a>
<Nav {dict} locale={data.locale} />

<main id="main">
  <span id="top" aria-hidden="true"></span>
  <Hero {dict} />

  <div class="packages">
    <p class="packages-label" id="packages-label">{dict.proof.packaged}</p>
    <ul class="packages-list" aria-labelledby="packages-label">
      {#each PACKAGES as p (p.id)}
        <li><DistroIcon id={p.id} size={20} />{p.name}</li>
      {/each}
    </ul>
  </div>

  <section class="section" id="how" aria-labelledby="how-title">
    <div class="section-head">
      <h2 id="how-title">{dict.usp.title}</h2>
      <p class="section-lede">{dict.usp.lede}</p>
    </div>
    <div class="overlay-visual" data-reveal {@attach reveal}>
      <OverlayMockup {dict} />
    </div>
    <Steps {dict} />
  </section>

  <section class="section" id="features" aria-labelledby="features-title">
    <div class="section-head">
      <h2 id="features-title">{dict.features.title}</h2>
    </div>
    <FeatureGrid {dict} />
  </section>

  <!-- the install command again, right after the part of the page that
       does the convincing -->
  <div class="section again">
    <div class="again-card frame">
      <p class="again-label">{dict.hero.installLabel}</p>
      <div class="again-cmd">
        <CopyCommand variant="hero" command={INSTALL_COMMAND} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
      </div>
      <a href="#download" class="again-link">{dict.hero.otherWays}</a>
    </div>
  </div>

  <section class="section" id="recording" aria-labelledby="rec-title">
    <div class="rec-split">
      <div class="rec-copy">
        <h2 id="rec-title">{dict.recording.title}</h2>
        <p class="section-lede">{dict.recording.lede}</p>
        <p class="rec-note">
          <T str={dict.recording.note}>
            {#snippet keys()}<Kbd keys={["Ctrl", "Esc"]} />{/snippet}
          </T>
        </p>
      </div>
      <div class="rec-visual" data-reveal {@attach reveal}>
        <RecordingFrame {dict} />
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="themes-title">
    <div class="section-head">
      <h2 id="themes-title">{dict.themes.title}</h2>
      <p class="section-lede">{dict.themes.lede}</p>
    </div>
    <ThemeShowcase {dict} />
  </section>

  <section class="section" aria-labelledby="reference-title">
    <h2 id="reference-title">{dict.reference.title}</h2>
    <div class="ref-cols">
      <CompositorNotes {dict} />
      <HotkeyTable {dict} />
    </div>
  </section>

  <!-- the conversion moment: a full-bleed accent band with a dark card, the
       one place on the page where the palette inverts -->
  <div class="band pixel-grid">
    <section class="section band-inner" id="download" aria-labelledby="download-title">
      <div class="band-head">
        <h2 id="download-title">{d.title}</h2>
        <p class="section-lede">{d.lede}</p>
        <ul class="points">
          {#each [d.points.verify, d.points.noRoot, d.points.free] as p (p)}
            <li><Icon svg={checkmark} size={20} />{p}</li>
          {/each}
        </ul>
        <!-- Uni, the mascot, gives the thumbs-up from behind the install
             card. Decorative, so hidden from assistive tech. -->
        <img
          src="/uni.webp"
          alt=""
          aria-hidden="true"
          width="400"
          height="676"
          loading="lazy"
          decoding="async"
          class="mascot"
        />
      </div>
      <div class="card">
        <p class="card-label">{dict.hero.installLabel}</p>
        <CopyCommand variant="hero" command={INSTALL_COMMAND} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
        <p class="card-note">
          {dict.hero.installNote}
          <a href="/docs/installation/">{dict.hero.installRead}</a>
        </p>
        <p class="or">{d.or}</p>
        <DistroInstall {dict} />
      </div>
      <p class="beta">
        <T str={d.stability}>
          {#snippet link()}<a href="https://github.com/unisic/unisic/issues">{d.stabilityLink}</a>{/snippet}
        </T>
      </p>
    </section>
  </div>
</main>

<Footer {dict} />

<style>
  /* ---- packages strip under the hero ---- */

  .packages {
    width: calc(100% - 48px);
    max-width: calc(var(--max-width) - 48px);
    margin: 72px auto 0;
    padding-top: 24px;
    border-top: 1px solid var(--divider);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 32px;
  }

  .packages-label {
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
  }

  .packages-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 26px;
  }

  .packages-list li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--ink-2);
    font-size: 0.9375rem;
    font-weight: 600;
  }

  .packages-list :global(svg) {
    flex: none;
    color: var(--text-secondary);
  }

  /* the differentiator visual breaks out wider than the text column on
     large screens. Fixed negative margins behind a min-width gate, never
     100vw math: 1160px content + 2x60px stays inside a 1320px viewport even
     with a scrollbar, so the page never scrolls horizontally. */
  @media (min-width: 1320px) {
    .overlay-visual {
      margin-inline: -60px;
    }
  }

  /* ---- the install command, repeated after the features ---- */

  .again {
    padding-top: 96px;
  }

  .again-card {
    display: grid;
    gap: 14px;
    padding: 24px;
    border-radius: var(--radius-l);
    background: var(--surface);
    border: 1px solid var(--divider);
    --frame-gap: 8px;
    --corner-arm: 18px;
  }

  .again-label {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 750;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }

  .again-cmd {
    min-width: 0;
  }

  .again-link {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    font-weight: 650;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: var(--text-tertiary);
    transition: text-decoration-color var(--dur-fast) var(--ease-out);
  }

  .again-link:hover {
    text-decoration-color: currentColor;
  }

  @media (min-width: 960px) {
    .again-card {
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 28px;
      padding: 18px 28px;
    }
  }

  /* on phones the command box is the card: no second frame around it */
  @media (max-width: 599px) {
    .again-card {
      padding: 0;
      background: none;
      border: 0;
    }

    .again-card::after {
      display: none;
    }
  }

  /* ---- recording ---- */

  .rec-split {
    display: grid;
    grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
    gap: 56px;
    align-items: center;
  }

  .rec-note {
    margin-top: 20px;
    color: var(--ink-2);
    font-size: 1rem;
    line-height: 1.9;
  }

  .ref-cols {
    margin-top: var(--space-lede);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 64px;
    align-items: start;
  }

  @media (max-width: 899px) {
    .rec-split {
      grid-template-columns: minmax(0, 1fr);
      gap: 36px;
    }

    .ref-cols {
      grid-template-columns: minmax(0, 1fr);
      gap: 48px;
    }
  }

  /* ---- install section: a full-bleed accent band with a dark card ---- */

  /* the footer's margin-top is cancelled so the band meets it */
  .band {
    --grid-line: color-mix(in srgb, var(--text-on-accent) 7%, transparent);
    margin-top: var(--space-section);
    margin-bottom: calc(var(--space-section) * -1);
    background-color: var(--accent);
    color: var(--text-on-accent);
  }

  .band-inner {
    padding-top: 88px;
    padding-bottom: 88px;
  }

  /* the selling points beside Uni, who stands behind the card: her bottom
     hangs into it, so the head is only as tall as the part of her above it */
  .band-head {
    --uni-w: 270px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    /* when Uni outgrows the text, the extra height goes above the heading */
    grid-template-rows: 1fr auto auto;
    column-gap: 32px;
    align-items: end;
  }

  .band-head > :not(.mascot) {
    grid-column: 1;
  }

  .band-inner h2,
  .band-inner .section-lede {
    color: var(--text-on-accent);
  }

  .points {
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 1.0625rem;
    font-weight: 600;
  }

  .points li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .points :global(svg) {
    flex: none;
    margin-top: 3px;
  }

  /* in-flow, never absolutely offset, so it cannot widen the scroll area.
     The card hides her from the hips down: the bottom 32% of her height,
     0.54 of her width at 400 x 676 */
  .mascot {
    grid-column: 2;
    grid-row: 1 / span 3;
    display: block;
    width: var(--uni-w);
    height: auto;
    margin: 0 16px calc(var(--uni-w) * -0.54 - 40px) 0;
    pointer-events: none;
    filter: drop-shadow(0 14px 24px color-mix(in srgb, var(--text-on-accent) 30%, transparent));
  }

  .beta {
    margin-top: 18px;
    font-size: 0.9375rem;
  }

  .beta a {
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 650;
  }

  /* focus rings flip with the surface they sit on: dark ink on the band,
     accent inside the card */
  .band :focus-visible {
    outline-color: var(--text-on-accent);
  }

  /* positioned so it paints over Uni, whose drop-shadow filter lifts her
     into the positioned layer */
  .card {
    position: relative;
    padding: 32px;
    border-radius: var(--radius-xl);
    background: var(--bg-deep);
    color: var(--text);
    box-shadow: 0 30px 70px var(--shadow-color);
  }

  .card :focus-visible {
    outline-color: var(--accent);
  }

  .card-label {
    margin-bottom: 12px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--text-secondary);
  }

  .card-note {
    margin-top: 12px;
    color: var(--ink-2);
    font-size: 0.9375rem;
  }

  .card-note a {
    color: var(--text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .or {
    margin: 28px 0 4px;
    display: flex;
    align-items: center;
    gap: 14px;
    color: var(--ink-2);
    font-size: 0.9375rem;
    font-weight: 600;
  }

  .or::before,
  .or::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--divider);
  }

  @media (max-width: 959px) {
    .band-inner {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  }

  /* too narrow to share a row with the text: Uni gets her own, under the
     points, still behind the card */
  @media (max-width: 767px) {
    .band-head {
      --uni-w: 168px;
    }

    .band-head > :not(.mascot) {
      grid-column: 1 / -1;
    }

    .mascot {
      grid-column: 1 / -1;
      grid-row: 4;
      justify-self: end;
      margin-top: 8px;
      margin-right: 8px;
    }
  }

  @media (max-width: 767px) {
    .band {
      margin-top: 80px;
    }
  }

  @media (max-width: 599px) {
    .card {
      padding: 20px;
      border-radius: var(--radius-l);
    }
  }
</style>
