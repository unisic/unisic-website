// The landing page is translated; the docs and the 404 page stay in English.
export const SITE_URL = 'https://unisic.app';

export const LOCALES = [
	{ code: 'en', name: 'English', og: 'en_US' },
	{ code: 'de', name: 'Deutsch', og: 'de_DE' },
	{ code: 'es', name: 'Español', og: 'es_ES' },
	{ code: 'fr', name: 'Français', og: 'fr_FR' },
	{ code: 'it', name: 'Italiano', og: 'it_IT' },
	{ code: 'nl', name: 'Nederlands', og: 'nl_NL' },
	{ code: 'pl', name: 'Polski', og: 'pl_PL' },
	{ code: 'zh-Hant', name: '繁體中文', og: 'zh_TW' },
	{ code: 'zh-Hans', name: '简体中文', og: 'zh_CN' }
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

/** English lives at the root, every other language under its own prefix. */
export const home = (lang: Locale) => (lang === 'en' ? '/' : `/${lang}/`);
