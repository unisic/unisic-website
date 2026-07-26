import { DocsHeader } from "../../components/DocsHeader";
import { DocsSidebar } from "../../components/DocsSidebar";
import type { SearchDoc } from "../../components/DocsSearch";
import { Footer } from "../../components/Footer";
import { getDictionary } from "../../lib/i18n";
import { getDoc, getDocGroups, getDocSlugs } from "../../lib/docs";
import styles from "./docs.module.css";

/* Shared chrome for every /docs page: the docs header, a sticky sidebar built
   from the Markdown files' front matter, and the shared site footer. The docs
   are English-only, so the footer just uses the English dictionary (whose
   translated skip label also serves the skip link). */
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = getDocGroups();
  /* Build-time corpus for the sidebar filter: every page's title plus its
     h2/h3 headings with their anchor ids (~2KB for this doc set). */
  const searchIndex: SearchDoc[] = getDocSlugs().flatMap((slug) => {
    const doc = getDoc(slug);
    if (!doc) return [];
    return [
      {
        slug,
        title: doc.title,
        headings: doc.toc.map((entry) => ({ id: entry.id, text: entry.text })),
      },
    ];
  });
  const dict = await getDictionary("en");
  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skip}
      </a>
      <DocsHeader />
      <div className={styles.shell}>
        <DocsSidebar groups={groups} searchIndex={searchIndex} />
        <main id="main" className={styles.main}>
          {children}
        </main>
      </div>
      <Footer dict={dict} />
    </>
  );
}
