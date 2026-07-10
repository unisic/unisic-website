import styles from "./page.module.css";
import { CompositorNotes } from "../components/CompositorNotes";
import { DownloadSection } from "../components/DownloadSection";
import { FeatureGrid } from "../components/FeatureGrid";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HotkeyTable } from "../components/HotkeyTable";
import { Kbd } from "../components/Kbd";
import { Nav } from "../components/Nav";
import { OverlayMockup } from "../components/OverlayMockup";
import { RecordingDemo } from "../components/RecordingDemo";
import { Reveal } from "../components/Reveal";
import { ThemeShowcase } from "../components/ThemeShowcase";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <span id="top" aria-hidden="true" />
        <Hero />

        <section className="section" id="features" aria-labelledby="usp-title">
          <h2 id="usp-title">Annotate before the shot is even taken</h2>
          <p className="section-lede">
            The selection overlay is a canvas. Draw arrows, text, blur and
            steps on the frozen screen, then press Enter: the annotations are
            burnt into the capture.
          </p>
          <Reveal className={styles.uspVisual}>
            <OverlayMockup />
          </Reveal>
        </section>

        <section className="section" aria-labelledby="features-title">
          <h2 id="features-title">Everything after the hotkey</h2>
          <p className="section-lede">
            Most tools hand you a rectangle of pixels and walk away. Unisic
            covers the rest of the workflow.
          </p>
          <Reveal>
            <FeatureGrid />
          </Reveal>
        </section>

        <section className="section" id="recording" aria-labelledby="rec-title">
          <Reveal className={styles.recSplit}>
            <div className={styles.recVisual}>
              <RecordingDemo />
            </div>
            <div className={styles.recCopy}>
              <h2 id="rec-title">The same region, as GIF or video</h2>
              <p className="section-lede">
                GIF with a two-pass palette for crisp colors, or MP4 and WebM
                through the ScreenCast portal, PipeWire and ffmpeg. Record a
                region, the full screen, or a window.
              </p>
              <p className={styles.recNote}>
                <Kbd keys={["Ctrl", "Esc"]} /> always stops a recording, no
                matter what has focus.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section" aria-labelledby="themes-title">
          <h2 id="themes-title">Nine themes, including yours</h2>
          <p className="section-lede">
            Pick a palette below and watch the app wear it.
          </p>
          <Reveal>
            <ThemeShowcase />
          </Reveal>
        </section>

        <section
          className={`section ${styles.download}`}
          id="download"
          aria-labelledby="download-title"
        >
          <h2 id="download-title">Install Unisic</h2>
          <p className="section-lede">
            Needs a Wayland session with xdg-desktop-portal. Recording also
            wants PipeWire and ffmpeg.
          </p>
          <DownloadSection />
          <Reveal>
            <div className={styles.updateNotes} data-stagger="">
            <div>
              <h3>AppImage</h3>
              <p>
                Ships zsync update info: run AppImageUpdate on the file for a
                differential update.
              </p>
            </div>
            <div>
              <h3>Flatpak</h3>
              <p>
                The bundle is a sideload. Re-download to update until Unisic
                lands on Flathub.
              </p>
            </div>
            <div>
              <h3>deb, rpm, Arch</h3>
              <p>
                Install the new package over the old one. Prefer building from
                source? The README has you covered.
              </p>
            </div>
            </div>
          </Reveal>
          <p className={styles.earlyAccess}>
            Unisic is in early developer access: it works, but expect rough
            edges on exotic compositors. Every report in{" "}
            <a href="https://github.com/unisic/unisic/issues">Issues</a> helps.
          </p>
        </section>

        <section className="section" aria-label="Hotkeys and desktop support">
          <Reveal className={styles.refCols}>
            <HotkeyTable />
            <CompositorNotes />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
