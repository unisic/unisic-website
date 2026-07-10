import Link from "next/link";
import styles from "./not-found.module.css";
import heroStyles from "../components/Hero.module.css";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { getDictionary } from "../lib/i18n";
import { DEFAULT_LOCALE } from "../lib/i18n/config";

export default async function NotFound() {
  const dict = await getDictionary(DEFAULT_LOCALE);
  const nf = dict.notFound;
  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skip}
      </a>
      <Nav dict={dict} locale={DEFAULT_LOCALE} />
      <main id="main">
        <div className={styles.wrap}>
          <p className={styles.code}>{nf.code}</p>
          <h1 className={styles.title}>{nf.title}</h1>
          <p className={styles.message}>{nf.message}</p>
          <Link href="/" className={`${heroStyles.primary} ${styles.home} shine`}>
            {nf.home}
          </Link>
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
