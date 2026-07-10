import { Fragment, type ReactNode } from "react";
import styles from "../app/page.module.css";
import { CompositorNotes } from "./CompositorNotes";
import { CopyCommand } from "./CopyCommand";
import { DownloadSection } from "./DownloadSection";
import { FeatureGrid } from "./FeatureGrid";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HotkeyTable } from "./HotkeyTable";
import { Kbd } from "./Kbd";
import { Nav } from "./Nav";
import { OverlayMockup } from "./OverlayMockup";
import { RecordingDemo } from "./RecordingDemo";
import { Reveal } from "./Reveal";
import { ThemeShowcase } from "./ThemeShowcase";
import type { Dictionary } from "../lib/i18n";

/* Split a "{token}" template into text runs and slot nodes, so a translated
   string can carry inline markup (a <Kbd>, <code> or <a>) in whatever order
   the language needs. Unknown tokens are left as literal text. */
function template(str: string, slots: Record<string, ReactNode>): ReactNode[] {
  return str.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part);
    if (m && m[1] in slots) return <Fragment key={i}>{slots[m[1]]}</Fragment>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Landing({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const d = dict.download;
  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skip}
      </a>
      <Nav dict={dict} locale={locale} />
      <main id="main">
        <span id="top" aria-hidden="true" />
        <Hero dict={dict} />

        <section className="section" id="features" aria-labelledby="usp-title">
          <h2 id="usp-title">{dict.usp.title}</h2>
          <p className="section-lede">{dict.usp.lede}</p>
          <Reveal className={styles.uspVisual}>
            <OverlayMockup dict={dict} />
          </Reveal>
        </section>

        <section className="section" aria-labelledby="features-title">
          <h2 id="features-title">{dict.features.title}</h2>
          <p className="section-lede">{dict.features.lede}</p>
          <Reveal>
            <FeatureGrid dict={dict} />
          </Reveal>
        </section>

        <section className="section" id="recording" aria-labelledby="rec-title">
          <Reveal className={styles.recSplit}>
            <div className={styles.recVisual}>
              <RecordingDemo dict={dict} />
            </div>
            <div className={styles.recCopy}>
              <h2 id="rec-title">{dict.recording.title}</h2>
              <p className="section-lede">{dict.recording.lede}</p>
              <p className={styles.recNote}>
                {template(dict.recording.note, {
                  keys: <Kbd keys={["Ctrl", "Esc"]} />,
                })}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section" aria-labelledby="themes-title">
          <h2 id="themes-title">{dict.themes.title}</h2>
          <p className="section-lede">{dict.themes.lede}</p>
          <Reveal>
            <ThemeShowcase dict={dict} />
          </Reveal>
        </section>

        <section
          className={`section ${styles.download}`}
          id="download"
          aria-labelledby="download-title"
        >
          <h2 id="download-title">{d.title}</h2>
          <p className="section-lede">{d.lede}</p>
          <DownloadSection dict={dict} />
          <Reveal>
            <div className={styles.copr}>
              <h3>{d.coprTitle}</h3>
              <CopyCommand
                command={
                  "sudo dnf copr enable deandark/Unisic\nsudo dnf install unisic"
                }
                copyLabel={d.coprCopy}
                copiedLabel={d.coprCopied}
              />
              <p>
                {template(d.coprBody, {
                  code: <code>dnf upgrade</code>,
                  link: (
                    <a href="https://copr.fedorainfracloud.org/coprs/deandark/Unisic/">
                      {d.coprLink}
                    </a>
                  ),
                })}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.updateNotes} data-stagger="">
              <div>
                <h3>{d.appimageTitle}</h3>
                <p>{d.appimageBody}</p>
              </div>
              <div>
                <h3>{d.flatpakTitle}</h3>
                <p>{d.flatpakBody}</p>
              </div>
              <div>
                <h3>{d.debTitle}</h3>
                <p>{d.debBody}</p>
              </div>
            </div>
          </Reveal>
          <p className={styles.earlyAccess}>
            {template(d.earlyAccess, {
              link: (
                <a href="https://github.com/unisic/unisic/issues">
                  {d.earlyAccessLink}
                </a>
              ),
            })}
          </p>
        </section>

        <section className="section" aria-labelledby="reference-title">
          <h2 id="reference-title">{dict.reference.title}</h2>
          <Reveal className={styles.refCols}>
            <HotkeyTable dict={dict} />
            <CompositorNotes dict={dict} />
          </Reveal>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
