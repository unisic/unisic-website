import { error } from "@sveltejs/kit";
import { getAllDocs, getDoc, getDocSlugs } from "#lib/server/docs.ts";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () => getDocSlugs().map((slug) => ({ slug }));

/* The slug is matched against the known docs before it reaches the
   filesystem, so nothing but a real doc name is ever joined into a path. */
export const load: PageServerLoad = ({ params }) => {
  const all = getAllDocs();
  const i = all.findIndex((doc) => doc.slug === params.slug);
  const doc = i < 0 ? null : getDoc(params.slug);
  if (!doc) error(404, "Not found");
  return { doc, prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
};
