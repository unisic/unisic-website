/*
 * Docs content layer. Every page under /docs is a Markdown file in
 * content/docs/*.md with front matter (title, description, order, group).
 * Files are read and rendered to HTML at build time — this whole module runs
 * during `next build` only (static export), never in the browser, so Node's
 * fs is fine here. To add or edit a page, touch the Markdown; nothing here
 * needs to change.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked, Marked } from "marked";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

export type DocMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
  group: string;
};

export type TocEntry = { id: string; text: string; depth: number };

export type Doc = DocMeta & { html: string; toc: TocEntry[] };

export type DocGroup = { group: string; docs: DocMeta[] };

/* GitHub-style heading slugger: lowercase, drop punctuation, spaces to
   dashes, and disambiguate repeats with a numeric suffix. A fresh instance
   per document keeps ids stable and local to their page. */
function makeSlugger() {
  const seen = new Map<string, number>();
  return (text: string): string => {
    const base =
      text
        .toLowerCase()
        .trim()
        .replace(/<[^>]*>/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "") || "section";
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}-${n}`;
  };
}

/* Render Markdown to HTML, injecting an id onto every heading so the
   table of contents can link to it. */
function renderMarkdown(md: string): string {
  const slug = makeSlugger();
  const engine = new Marked({
    renderer: {
      heading(token) {
        const id = slug(token.text);
        const inner = this.parser.parseInline(token.tokens);
        return `<h${token.depth} id="${id}">${inner}</h${token.depth}>\n`;
      },
    },
  });
  const html = engine.parse(md) as string;
  // Wrap tables so they can scroll horizontally on narrow screens instead of
  // forcing the page to. marked emits a bare <table> with no attributes.
  return html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>");
}

/* Collect h2/h3 headings for the on-page table of contents. Slugs every
   heading in document order (matching renderMarkdown) so the ids line up,
   even if a stray h1/h4 shifts the disambiguation counters. */
function buildToc(md: string): TocEntry[] {
  const slug = makeSlugger();
  const toc: TocEntry[] = [];
  for (const token of marked.lexer(md)) {
    if (token.type === "heading") {
      const id = slug(token.text);
      if (token.depth === 2 || token.depth === 3) {
        const text = token.text.replace(/[`*_]/g, "");
        toc.push({ id, text, depth: token.depth });
      }
    }
  }
  return toc;
}

function toMeta(slug: string, data: Record<string, unknown>): DocMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    order: Number(data.order ?? 999),
    group: String(data.group ?? ""),
  };
}

/* Every page's metadata, ordered for the sidebar and prev/next nav. */
export function getAllDocs(): DocMeta[] {
  return fs
    .readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(DOCS_DIR, file), "utf8"));
      return toMeta(slug, data);
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getDocSlugs(): string[] {
  return getAllDocs().map((d) => d.slug);
}

/* Sidebar structure: pages bucketed by their `group`, groups in first-seen
   (i.e. order) sequence. */
export function getDocGroups(): DocGroup[] {
  const groups: DocGroup[] = [];
  for (const doc of getAllDocs()) {
    let bucket = groups.find((g) => g.group === doc.group);
    if (!bucket) {
      bucket = { group: doc.group, docs: [] };
      groups.push(bucket);
    }
    bucket.docs.push(doc);
  }
  return groups;
}

/* A single page, rendered. Returns null for an unknown slug so pages can
   404 cleanly. */
export function getDoc(slug: string): Doc | null {
  const file = path.join(DOCS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    ...toMeta(slug, data),
    html: renderMarkdown(content),
    toc: buildToc(content),
  };
}
