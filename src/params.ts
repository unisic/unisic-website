import { defineParams } from '@sveltejs/kit/params';
// Kit imports this file with plain Node at build time, so the extension must name the real file.
import { LOCALES } from '#lib/i18n/locales.ts';

const find = (param: string) => LOCALES.find((l) => l.code === param)?.code;

export const params = defineParams({
	/** Every language. */
	lang: find,
	/** A landing page prefix: English is the bare root, so /en/ does not exist. */
	locale: (param) => (param === 'en' ? undefined : find(param))
});
