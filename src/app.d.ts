import type { Dictionary } from '#lib/i18n/en.js';
import type { Locale } from '#lib/i18n/locales.js';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			lang: Locale;
			chrome: Dictionary['chrome'];
			copy: Dictionary['copy'];
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
