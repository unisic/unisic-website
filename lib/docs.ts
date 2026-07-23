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
import { SITE_URL } from "./site";

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

/*
 * Build-time syntax highlighting. The docs' fences use four languages (sh,
 * ini, nix, kdl), and rendering happens only inside `next build`, so a small
 * hand-rolled line tokenizer covers the whole corpus with zero client JS and
 * zero dependencies. Four token classes only, colored in globals.css:
 * .tok-c comments, .tok-s strings, .tok-v variables/flags, .tok-k command
 * words. Unknown languages fall through unhighlighted.
 */

/* Escape only &, < and > - quotes are safe inside element content. The token
   regexes below run over the escaped text, and none of the entities this
   produces (&amp; &lt; &gt;) contain a quote, #, $ or hyphen, so an entity
   can never be mistaken for a string, comment, variable or flag. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function tokSpan(cls: string, text: string): string {
  return `<span class="tok-${cls}">${text}</span>`;
}

/* Escape a value destined for a double-quoted HTML attribute (link href or
   title). The double quote is always escaped, so a value can never break out
   of its attribute; the ampersand is escaped only when it does not already
   start a valid entity (marked's own pattern), so an href that already reads
   ?a=1&amp;b=2 is left intact instead of double-encoded. Not escapeHtml,
   which is deliberately verbatim for code content. */
function escapeAttr(text: string): string {
  return text
    .replace(/&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Index of a comment marker sitting outside quotes and either at line start
   or after whitespace; -1 when the line has none. The quote tracking keeps a
   # inside a quoted awk script from starting a comment, and the whitespace
   guard keeps the // of https:// out of kdl comments. */
function findCommentStart(line: string, marker: string): number {
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "'" && !inDouble) inSingle = !inSingle;
    else if (ch === '"' && !inSingle) inDouble = !inDouble;
    else if (
      !inSingle &&
      !inDouble &&
      line.startsWith(marker, i) &&
      (i === 0 || /\s/.test(line[i - 1]))
    ) {
      return i;
    }
  }
  return -1;
}

/* Shell. Per line: comment tail, then quoted strings, $variables, --flags,
   and the command word at line start and after sudo / | / && (which is
   &amp;&amp; once escaped). A trailing backslash continues an argument list,
   so the next line starts in argument position, not command position. */
const SH_TOKEN = /"[^"]*"|'[^']*'|\$\{?[A-Za-z_]\w*\}?|&amp;&amp;|\s+|\S+/g;

function highlightSh(escaped: string): string {
  let continued = false;
  return escaped
    .split("\n")
    .map((line) => {
      const commentAt = findCommentStart(line, "#");
      const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
      const comment = commentAt >= 0 ? tokSpan("c", line.slice(commentAt)) : "";
      let expectCmd = !continued;
      continued = code.trimEnd().endsWith("\\");
      const out: string[] = [];
      for (const [tok] of code.matchAll(SH_TOKEN)) {
        if (/^\s/.test(tok)) {
          out.push(tok);
        } else if (tok[0] === '"' || tok[0] === "'") {
          out.push(tokSpan("s", tok));
          expectCmd = false;
        } else if (tok[0] === "$") {
          out.push(tokSpan("v", tok));
        } else if (/^--?[a-z][\w-]*$/.test(tok)) {
          out.push(tokSpan("v", tok));
        } else if (tok === "|" || tok === "&amp;&amp;") {
          out.push(tok);
          expectCmd = true;
        } else if (expectCmd && /^[A-Za-z_]\w*=/.test(tok)) {
          // NAME=value prefix: color the name, stay in command position
          const eq = tok.indexOf("=");
          out.push(tokSpan("v", tok.slice(0, eq)) + tok.slice(eq));
        } else if (expectCmd && /^[\w./~-]+$/.test(tok)) {
          out.push(tokSpan("k", tok));
          expectCmd = tok === "sudo"; // sudo prefixes the real command word
        } else {
          out.push(tok);
          expectCmd = false;
        }
      }
      return out.join("") + comment;
    })
    .join("\n");
}

/* INI: full-line comments, [section] headers as the command class, and the
   key ahead of = as the variable class. */
function highlightIni(escaped: string): string {
  return escaped
    .split("\n")
    .map((line) => {
      if (/^\s*[#;]/.test(line)) return tokSpan("c", line);
      if (/^\s*\[/.test(line)) return tokSpan("k", line);
      const eq = line.indexOf("=");
      if (eq > 0) return tokSpan("v", line.slice(0, eq)) + line.slice(eq);
      return line;
    })
    .join("\n");
}

/* Nix: comments, strings, attribute paths ahead of =, boolean literals. */
const NIX_TOKEN = /"[^"]*"|\s+|[^\s"]+/g;

function highlightNix(escaped: string): string {
  return escaped
    .split("\n")
    .map((line) => {
      const commentAt = findCommentStart(line, "#");
      const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
      const comment = commentAt >= 0 ? tokSpan("c", line.slice(commentAt)) : "";
      const out: string[] = [];
      for (const m of code.matchAll(NIX_TOKEN)) {
        const tok = m[0];
        if (/^\s/.test(tok)) {
          out.push(tok);
          continue;
        }
        if (tok[0] === '"') {
          out.push(tokSpan("s", tok));
          continue;
        }
        const kw = /^(true|false)([;,]?)$/.exec(tok);
        if (kw) {
          out.push(tokSpan("k", kw[1]) + kw[2]);
          continue;
        }
        const after = code.slice((m.index ?? 0) + tok.length);
        if (/^[A-Za-z_][\w.-]*$/.test(tok) && /^\s*=[^=]/.test(after)) {
          out.push(tokSpan("v", tok));
          continue;
        }
        out.push(tok);
      }
      return out.join("") + comment;
    })
    .join("\n");
}

/* KDL: // comments, strings, and node names (line start and after {). */
const KDL_TOKEN = /"[^"]*"|\s+|[^\s"]+/g;

function highlightKdl(escaped: string): string {
  return escaped
    .split("\n")
    .map((line) => {
      const commentAt = findCommentStart(line, "//");
      const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
      const comment = commentAt >= 0 ? tokSpan("c", line.slice(commentAt)) : "";
      let expectNode = true;
      const out: string[] = [];
      for (const [tok] of code.matchAll(KDL_TOKEN)) {
        if (/^\s/.test(tok)) {
          out.push(tok);
        } else if (tok[0] === '"') {
          out.push(tokSpan("s", tok));
          expectNode = false;
        } else if (tok === "{") {
          out.push(tok);
          expectNode = true;
        } else if (expectNode && /^[\w+-]+$/.test(tok)) {
          out.push(tokSpan("k", tok));
          expectNode = false;
        } else {
          out.push(tok);
          expectNode = false;
        }
      }
      return out.join("") + comment;
    })
    .join("\n");
}

const SH_LANGS = new Set(["sh", "bash", "shell", "zsh"]);

function highlightCode(code: string, lang: string): string {
  const escaped = escapeHtml(code);
  if (SH_LANGS.has(lang)) return highlightSh(escaped);
  if (lang === "ini") return highlightIni(escaped);
  if (lang === "nix") return highlightNix(escaped);
  if (lang === "kdl") return highlightKdl(escaped);
  return escaped;
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
        /* Hover anchors on h2/h3 only - the levels the TOC links to. */
        const anchor =
          token.depth === 2 || token.depth === 3
            ? `<a class="heading-anchor" href="#${id}" aria-label="Link to this section">#</a>`
            : "";
        return `<h${token.depth} id="${id}">${inner}${anchor}</h${token.depth}>\n`;
      },
      code(token) {
        /* Highlighted at build time (see above); the fence language also
           becomes a data attribute so the CSS can label the block. */
        const lang = (token.lang ?? "")
          .trim()
          .split(/\s+/)[0]
          .toLowerCase()
          .replace(/[^\w-]/g, "");
        const attr = lang ? ` data-lang="${lang}"` : "";
        return `<pre${attr}><code>${highlightCode(token.text, lang)}</code></pre>\n`;
      },
      blockquote(token) {
        /* GitHub alert syntax: a blockquote whose first line is [!NOTE],
           [!TIP] or [!WARNING] becomes a callout; any other blockquote keeps
           the default rendering. */
        const body = this.parser.parse(token.tokens);
        const m = /^<p>\[!(NOTE|TIP|WARNING)\]\s*/.exec(body);
        if (!m) return false;
        const kind = m[1].toLowerCase();
        const label = m[1][0] + m[1].slice(1).toLowerCase();
        let rest = body.slice(m[0].length);
        if (rest.startsWith("</p>")) rest = rest.slice(4).trimStart();
        else rest = `<p>${rest}`;
        return `<div class="callout callout-${kind}"><p class="callout-label">${label}</p>${rest}</div>\n`;
      },
      link(token) {
        /* External links open in a new tab and get a marker glyph (CSS on
           .ext); internal links keep marked's default rendering. */
        const href = token.href;
        if (!/^https?:\/\//.test(href) || href.startsWith(SITE_URL)) return false;
        const inner = this.parser.parseInline(token.tokens);
        const title = token.title ? ` title="${escapeAttr(token.title)}"` : "";
        return `<a href="${escapeAttr(href)}"${title} target="_blank" rel="noopener noreferrer" class="ext">${inner}</a>`;
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
