import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../docs.module.css";
import { DocsProse } from "../../../components/DocsProse";
import { DocsToc } from "../../../components/DocsToc";
import { getAllDocs, getDoc, getDocSlugs } from "../../../lib/docs";
import { SITE_URL } from "../../../lib/site";

/* One static page per Markdown file; unknown slugs 404 at build. */
export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};
  const title = `${doc.title} — Unisic Docs`;
  return {
    title,
    description: doc.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/docs/${slug}` },
    openGraph: {
      title,
      description: doc.description,
      type: "article",
      url: `/docs/${slug}`,
      siteName: "Unisic",
      images: [{ url: "/social-preview.png", width: 1200, height: 630 }],
    },
  };
}

export default async function DocPage({ params }: Params) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const all = getAllDocs();
  const index = all.findIndex((d) => d.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  return (
    <div className={`${styles.docPage} ${styles.segmentTop}`}>
      <article className={styles.articleCol}>
        <header className={styles.articleHeader}>
          {doc.group && (
            <p className={styles.kicker}>
              <Link href="/docs" className={styles.kickerLink}>
                Docs
              </Link>
              <span aria-hidden="true" className={styles.kickerSep}>
                /
              </span>
              {doc.group}
            </p>
          )}
          <h1 className={styles.docTitle}>{doc.title}</h1>
          {doc.description && <p className={styles.docDesc}>{doc.description}</p>}
        </header>

        {/* Below 1100px the sticky TOC rail is hidden, so long pages keep a
            jump affordance as a native disclosure: zero JS, zero motion. */}
        {doc.toc.length > 0 && (
          <details className={styles.tocMobile}>
            <summary>On this page</summary>
            <ul className={styles.tocList}>
              {doc.toc.map((entry) => (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    className={
                      entry.depth === 3
                        ? `${styles.tocLink} ${styles.tocLinkSub}`
                        : styles.tocLink
                    }
                  >
                    {entry.text}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}

        <DocsProse html={doc.html} />

        <a
          href={`https://github.com/unisic/unisic-website/edit/main/content/docs/${slug}.md`}
          className={styles.editLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub
        </a>

        <nav className={styles.prevNext} aria-label="Pagination">
          {prev ? (
            <Link href={`/docs/${prev.slug}`} className={styles.prevNextLink}>
              <span className={styles.pnDir}>← Previous</span>
              <span className={styles.pnTitle}>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/docs/${next.slug}`}
              className={`${styles.prevNextLink} ${styles.pnNext}`}
            >
              <span className={styles.pnDir}>Next →</span>
              <span className={styles.pnTitle}>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>

      {doc.toc.length > 0 && <DocsToc toc={doc.toc} />}
    </div>
  );
}
