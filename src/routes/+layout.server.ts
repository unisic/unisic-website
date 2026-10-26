import { dictionaries } from '#lib/server/i18n.js';
import type { LayoutServerLoad } from './$types';

// Topbar, Footer and the copy buttons need their words on every page, the English-only docs included.
export const load: LayoutServerLoad = ({ params }) => {
	const lang = params.lang ?? 'en';
	return { lang, chrome: dictionaries[lang].chrome, copy: dictionaries[lang].copy };
};
