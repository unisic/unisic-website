import { en, type Dictionary } from '#lib/i18n/en.js';
import de from '#lib/i18n/de.js';
import es from '#lib/i18n/es.js';
import fr from '#lib/i18n/fr.js';
import it from '#lib/i18n/it.js';
import nl from '#lib/i18n/nl.js';
import pl from '#lib/i18n/pl.js';
import zhHans from '#lib/i18n/zh-Hans.js';
import zhHant from '#lib/i18n/zh-Hant.js';
import type { Locale } from '#lib/i18n/locales.js';

export const dictionaries: Record<Locale, Dictionary> = { en, de, es, fr, it, nl, pl, 'zh-Hans': zhHans, 'zh-Hant': zhHant };
