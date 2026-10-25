import { error } from '@sveltejs/kit';
import { getAllDocs, getDoc } from '#lib/server/docs.js';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getAllDocs().map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const doc = getDoc(params.slug);
	if (!doc) error(404, 'No such page in the docs');
	const all = getAllDocs();
	const i = all.findIndex((d) => d.slug === doc.slug);
	return { doc, prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
};
