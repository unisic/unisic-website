import { DocsHeader } from "../../components/DocsHeader";
import { DocsSidebar } from "../../components/DocsSidebar";
import { Footer } from "../../components/Footer";
import { getDictionary } from "../../lib/i18n";
import { getDocGroups } from "../../lib/docs";
import styles from "./docs.module.css";

/* Shared chrome for every /docs page: the docs header, a sticky sidebar built
   from the Markdown files' front matter, and the shared site footer. The docs
   are English-only, so the footer just uses the English dictionary. */
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = getDocGroups();
  const dict = await getDictionary("en");
  return (
    <>
      <DocsHeader />
      <div className={styles.shell}>
        <DocsSidebar groups={groups} />
        <div className={styles.main}>{children}</div>
      </div>
      <Footer dict={dict} />
    </>
  );
}
