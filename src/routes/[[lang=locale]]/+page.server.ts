import { dictionaries } from '#lib/server/i18n.js';
import type { PageServerLoad } from './$types';

export const trailingSlash = 'always';

export const load: PageServerLoad = ({ params }) => ({ t: dictionaries[params.lang ?? 'en'] });
