import { getDocGroups, getSearchIndex } from '#lib/server/docs.js';
import type { LayoutServerLoad } from './$types';

// The old site and its nginx config serve /docs/capture/, so the URLs keep their slash.
export const trailingSlash = 'always';

export const load: LayoutServerLoad = () => ({ groups: getDocGroups(), index: getSearchIndex() });
