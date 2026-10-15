import Link from "next/link";
import styles from "../app/page.module.css";
import { CompositorNotes } from "./CompositorNotes";
import { CopyCommand } from "./CopyCommand";
import { DistroIcon } from "./DistroIcons";
import { DistroInstall } from "./DistroInstall";
import { FeatureGrid } from "./FeatureGrid";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HotkeyTable } from "./HotkeyTable";
import { Kbd } from "./Kbd";
import { Nav } from "./Nav";
import { OverlayMockup } from "./OverlayMockup";
import { RecordingFrame } from "./RecordingFrame";
import { Reveal } from "./Reveal";
import { Steps } from "./Steps";
import { ThemeShowcase } from "./ThemeShowcase";
import { CheckmarkIcon } from "./icons";
import { DIRECT_ASSETS, DISTROS } from "../lib/distros";
import { INSTALL_COMMAND } from "../lib/site";
import { template } from "../lib/template";
import type { Dictionary } from "../lib/i18n";

/* every package the download picker offers, in the picker's order */
const PACKAGES = [...DIRECT_ASSETS, ...DISTROS].map(({ id, name }) => ({ id, name }));

/* recording output formats: file-format names, so not translated */
const FORMATS = ["GIF", "MP4", "WebM"];

/* Reveal wraps only the mockups, whose one-shot open choreography is keyed
   off it. Text and controls are never hidden behind a scroll trigger.

   Order follows the questions a visitor asks: what is it and how do I get
   it (hero), will it run on my system (packages), what makes it different
   (#how), what else does it do (#features), then the install command again
   at the point of most interest, the details, and the full install band. */
export function Landing({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const d = dict.download;
  const points = [d.points.verify, d.points.noRoot, d.points.free];
  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skip}
      </a>
      <Nav dict={dict} locale={locale} />
      <main id="main" className={styles.page}>
        <span id="top" aria-hidden="true" />
        <Hero dict={dict} />

        <div className={styles.proof}>
          <p className={styles.proofLabel} id="packages-label">
            {dict.proof.packaged}
          </p>
          <ul className={styles.proofList} aria-labelledby="packages-label">
            {PACKAGES.map((p) => (
              <li key={p.id}>
                <DistroIcon id={p.id} size={20} />
                {p.name}
              </li>
            ))}
          </ul>
        </div>

        <section className="section" id="how" aria-labelledby="how-title">
          <div className={styles.head}>
            <h2 id="how-title">{dict.usp.title}</h2>
            <p className="section-lede">{dict.usp.lede}</p>
          </div>
          <Reveal className={styles.overlayVisual}>
            <OverlayMockup dict={dict} />
          </Reveal>
          <Steps dict={dict} />
        </section>

        <section className="section" id="features" aria-labelledby="features-title">
          <div className={styles.head}>
            <h2 id="features-title">{dict.features.title}</h2>
            <p className="section-lede">{dict.features.lede}</p>
          </div>
          <FeatureGrid dict={dict} />
        </section>

        {/* the install command again, right after the part of the page
            that does the convincing */}
        <div className={`section ${styles.again}`}>
          <div className={styles.againCard}>
            <p className={styles.againLabel}>{dict.hero.installLabel}</p>
            <div className={styles.againCmd}>
              <CopyCommand
                variant="hero"
                command={INSTALL_COMMAND}
                copyLabel={dict.hero.copy}
                copiedLabel={dict.hero.copied}
              />
            </div>
            <a href="#download" className={styles.againLink}>
              {dict.hero.otherWays}
            </a>
          </div>
        </div>

        <section className="section" id="recording" aria-labelledby="rec-title">
          <div className={styles.recSplit}>
            <div className={styles.recCopy}>
              <h2 id="rec-title">{dict.recording.title}</h2>
              <p className="section-lede">{dict.recording.lede}</p>
              <ul className={styles.formats}>
                {FORMATS.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={styles.recNote}>
                {template(dict.recording.note, {
                  keys: <Kbd keys={["Ctrl", "Esc"]} />,
                })}
              </p>
            </div>
            <Reveal className={styles.recVisual}>
              <RecordingFrame dict={dict} />
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="themes-title">
          <div className={styles.head}>
            <h2 id="themes-title">{dict.themes.title}</h2>
            <p className="section-lede">{dict.themes.lede}</p>
          </div>
          <ThemeShowcase dict={dict} />
        </section>

        <section className="section" aria-labelledby="reference-title">
          <h2 id="reference-title">{dict.reference.title}</h2>
          <div className={styles.refCols}>
            <CompositorNotes dict={dict} />
            <HotkeyTable dict={dict} />
          </div>
        </section>

        {/* the conversion moment: a full-bleed accent band with a dark card,
            the one place on the page where the palette inverts */}
        <div className={styles.band}>
          <section
            className={`section ${styles.bandInner}`}
            id="download"
            aria-labelledby="download-title"
          >
            <div className={styles.bandCopy}>
              <h2 id="download-title">{d.title}</h2>
              <p className="section-lede">{d.lede}</p>
              <ul className={styles.points}>
                {points.map((p) => (
                  <li key={p}>
                    <CheckmarkIcon size={20} />
                    {p}
                  </li>
                ))}
              </ul>
              {/* Uni, the mascot, gives the thumbs-up next to the install
                  card. Decorative, so hidden from assistive tech. Plain <img>
                  is deliberate: the static export runs images unoptimized,
                  so next/image would add weight and no gain. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uni.webp"
                alt=""
                aria-hidden="true"
                width={400}
                height={676}
                loading="lazy"
                decoding="async"
                className={styles.mascot}
              />
            </div>
            <div className={styles.bandSide}>
              <div className={styles.card}>
                <p className={styles.cardLabel}>{dict.hero.installLabel}</p>
                <CopyCommand
                  variant="hero"
                  command={INSTALL_COMMAND}
                  copyLabel={dict.hero.copy}
                  copiedLabel={dict.hero.copied}
                />
                <p className={styles.cardNote}>
                  {dict.hero.installNote}{" "}
                  <Link href="/docs/installation/">{dict.hero.installRead}</Link>
                </p>
                <p className={styles.or}>{d.or}</p>
                <DistroInstall dict={dict} />
              </div>
              <p className={styles.beta}>
                {template(d.stability, {
                  link: (
                    <a href="https://github.com/unisic/unisic/issues">
                      {d.stabilityLink}
                    </a>
                  ),
                })}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
