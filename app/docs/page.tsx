import type { Metadata } from "next";
import Link from "next/link";
import styles from "./docs.module.css";
import { getDocGroups } from "../../lib/docs";
import { SITE_URL } from "../../lib/site";

const TITLE = "Documentation — Unisic";
const DESCRIPTION =
  "Guides for installing, configuring and using Unisic — the open-source screenshot and screen recorder for Linux.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/docs" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/docs",
    siteName: "Unisic",
    images: [{ url: "/social-preview.png", width: 1200, height: 630 }],
  },
};

export default function DocsIndex() {
  const groups = getDocGroups();
  return (
    <article>
      <div className={styles.overview}>
        <p className={styles.eyebrow}>Documentation</p>
        <h1 className={styles.overviewTitle}>Everything after the hotkey</h1>
        <p className={styles.overviewLede}>
          How to install Unisic, capture and annotate your screen, record GIFs
          and video, and send the result wherever it belongs. Pick a topic
          below or use the sidebar.
        </p>
      </div>
      {groups.map((group) => (
        <section key={group.group || "root"} className={styles.overviewGroup}>
          {group.group && (
            <h2 className={styles.overviewGroupTitle}>{group.group}</h2>
          )}
          <div className={styles.cardGrid}>
            {group.docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className={styles.card}
              >
                <h3 className={styles.cardTitle}>{doc.title}</h3>
                <p className={styles.cardDesc}>{doc.description}</p>
                <span className={styles.cardArrow}>Read →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
