import { getDoc, getDocGroups, getDocSlugs } from "#lib/server/docs.ts";
import type { LayoutServerLoad } from "./$types";

/* The sidebar filter's corpus: page titles plus their h2/h3 headings with
   anchor ids, about 2KB. Rendering every doc per page is ~10 small Markdown
   files at prerender time, so nothing is cached. */
export const load: LayoutServerLoad = () => ({
  groups: getDocGroups(),
  searchIndex: getDocSlugs().flatMap((slug) => {
    const doc = getDoc(slug);
    return doc ? [{ slug, title: doc.title, headings: doc.toc.map(({ id, text }) => ({ id, text })) }] : [];
  }),
});
