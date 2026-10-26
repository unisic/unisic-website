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

/** Turns every space the pattern matches into a no-break space, through the whole dictionary. */
const glue = <T>(v: T, re: RegExp): T =>
	typeof v === 'string'
		? (v.replace(re, ' ') as T)
		: Array.isArray(v)
			? (v.map((x) => glue(x, re)) as T)
			: v && typeof v === 'object'
				? (Object.fromEntries(Object.entries(v).map(([k, x]) => [k, glue(x, re)])) as T)
				: v;

export const dictionaries: Record<Locale, Dictionary> = {
	en,
	de,
	es,
	// French typesetting: a line never starts with : ; ! ? or a closing guillemet.
	fr: glue(fr, / (?=[:;!?»])|(?<=«) /g),
	it,
	nl,
	// Polish typesetting: a one-letter word (i, w, z, a, o, u) never ends a line.
	pl: glue(pl, /(?<=(?:^|[\s>(])[aiouwzAIOUWZ]) /g),
	'zh-Hans': zhHans,
	'zh-Hant': zhHant
};
