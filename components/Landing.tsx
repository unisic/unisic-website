import Link from "next/link";
import styles from "../app/page.module.css";
import { CompositorNotes } from "./CompositorNotes";
import { CopyCommand } from "./CopyCommand";
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
import { INSTALL_COMMAND } from "../lib/site";
import { template } from "../lib/template";
import type { Dictionary } from "../lib/i18n";

/* Reveal wraps only the mockups, whose one-shot open choreography is keyed
   off it. Text and controls are never hidden behind a scroll trigger. */
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
      <main id="main">
        <span id="top" aria-hidden="true" />
        <Hero dict={dict} />

        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">{dict.how.title}</h2>
          <p className="section-lede">{dict.how.lede}</p>
          <Steps dict={dict} />
        </section>

        <section className="section" id="annotate" aria-labelledby="usp-title">
          <h2 id="usp-title">{dict.usp.title}</h2>
          <p className="section-lede">{dict.usp.lede}</p>
          <Reveal className={styles.uspVisual}>
            <OverlayMockup dict={dict} />
          </Reveal>
        </section>

        <section className="section" id="features" aria-labelledby="features-title">
          <h2 id="features-title">{dict.features.title}</h2>
          <p className="section-lede">{dict.features.lede}</p>
          <FeatureGrid dict={dict} />
        </section>

        <section className="section" id="recording" aria-labelledby="rec-title">
          <div className={styles.recSplit}>
            <Reveal className={styles.recVisual}>
              <RecordingFrame dict={dict} />
            </Reveal>
            <div className={styles.recCopy}>
              <h2 id="rec-title">{dict.recording.title}</h2>
              <p className="section-lede">{dict.recording.lede}</p>
              <p className={styles.recNote}>
                {template(dict.recording.note, {
                  keys: <Kbd keys={["Ctrl", "Esc"]} />,
                })}
              </p>
            </div>
          </div>
        </section>

        {/* full-bleed wrapper: a quiet radial wash behind the themes section,
            drawn entirely inside the box (see .themesGlow) */}
        <div className={styles.themesGlow}>
          <section className="section" aria-labelledby="themes-title">
            <h2 id="themes-title">{dict.themes.title}</h2>
            <p className="section-lede">{dict.themes.lede}</p>
            <ThemeShowcase dict={dict} />
          </section>
        </div>

        <section className="section" aria-labelledby="reference-title">
          <h2 id="reference-title">{dict.reference.title}</h2>
          <div className={styles.refCols}>
            <HotkeyTable dict={dict} />
            <CompositorNotes dict={dict} />
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
          </section>
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
