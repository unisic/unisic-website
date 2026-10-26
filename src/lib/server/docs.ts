/*
 * Every page under /docs is a Markdown file in content/docs/*.md with front matter (title, seoTitle,
 * description, order, group). Vite inlines the files at build time and pages are prerendered, so
 * Markdown and the highlighter never reach the browser. To add or edit a page, touch the Markdown.
 */
import { Marked, Renderer, marked } from 'marked';
import { SITE_URL } from '#lib/i18n/locales.js';

export type DocMeta = {
	slug: string;
	/** Nav label: what the sidebar and prev/next show. */
	title: string;
	/** Page heading and <title>; falls back to title. */
	seoTitle: string;
	description: string;
	order: number;
	group: string;
};
export type TocEntry = { id: string; text: string; depth: number };
export type Doc = DocMeta & { html: string; toc: TocEntry[] };
export type DocGroup = { group: string; docs: DocMeta[] };
export type SearchDoc = { slug: string; title: string; headings: { id: string; text: string }[] };

const FILES = import.meta.glob<string>('/content/docs/*.md', { query: '?raw', import: 'default', eager: true });

/* The front matter is flat `key: "string"` or `key: number`, so it is read by hand instead of
   pulling in a YAML parser. Anything else fails the build rather than rendering a wrong page. */
const FRONT = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

function split(file: string, raw: string) {
	const m = FRONT.exec(raw);
	if (!m) throw new Error(`${file}: no front matter`);
	const data: Record<string, string | number> = {};
	for (const line of m[1].split(/\r?\n/)) {
		const kv = /^(\w+):\s*(.+?)\s*$/.exec(line);
		const value = kv && (kv[2].startsWith('"') ? JSON.parse(kv[2]) : Number(kv[2]));
		if (!kv || (typeof value === 'number' && Number.isNaN(value))) {
			throw new Error(`${file}: cannot read front matter line "${line}"`);
		}
		data[kv[1]] = value;
	}
	return { data, content: raw.slice(m[0].length) };
}

const SOURCES = Object.entries(FILES)
	.map(([file, raw]) => {
		const slug = file.slice(file.lastIndexOf('/') + 1, -'.md'.length);
		const { data, content } = split(file, raw);
		const meta: DocMeta = {
			slug,
			title: String(data.title ?? slug),
			seoTitle: String(data.seoTitle ?? data.title ?? slug),
			description: String(data.description ?? ''),
			order: Number(data.order ?? 999),
			group: String(data.group ?? '')
		};
		return { meta, content };
	})
	.sort((a, b) => a.meta.order - b.meta.order || a.meta.title.localeCompare(b.meta.title));

/* GitHub-style heading slugger. A fresh instance per document keeps ids stable and local to their page. */
function makeSlugger() {
	const seen = new Map<string, number>();
	return (text: string): string => {
		const base =
			text
				.toLowerCase()
				.trim()
				.replace(/<[^>]*>/g, '')
				.replace(/[^\w\s-]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-')
				.replace(/^-+|-+$/g, '') || 'section';
		const n = seen.get(base) ?? 0;
		seen.set(base, n + 1);
		return n === 0 ? base : `${base}-${n}`;
	};
}

/*
 * Build-time highlighting for the four fence languages the docs use (sh, ini, nix, kdl). Four token
 * classes, colored in Prose.svelte: .tok-c comments, .tok-s strings, .tok-v variables and flags,
 * .tok-k command words. Unknown languages fall through unhighlighted.
 */

/* Only &, < and > are escaped: quotes are safe in element content, and none of the entities contain
   a quote, #, $ or hyphen, so the token regexes below can never mistake one for a token. */
function escapeHtml(text: string): string {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function tokSpan(cls: string, text: string): string {
	return `<span class="tok-${cls}">${text}</span>`;
}

/* For a double-quoted attribute. An & that already starts an entity is kept, so ?a=1&amp;b=2 is not
   double-encoded. */
function escapeAttr(text: string): string {
	return text
		.replace(/&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/* A comment marker outside quotes, at line start or after whitespace; -1 when there is none. The
   quote tracking keeps a # inside a quoted awk script out, the whitespace guard keeps https:// out. */
function findCommentStart(line: string, marker: string): number {
	let inSingle = false;
	let inDouble = false;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === "'" && !inDouble) inSingle = !inSingle;
		else if (ch === '"' && !inSingle) inDouble = !inDouble;
		else if (!inSingle && !inDouble && line.startsWith(marker, i) && (i === 0 || /\s/.test(line[i - 1]))) {
			return i;
		}
	}
	return -1;
}

/* Command words sit at line start and after sudo, | and && (&amp;&amp; once escaped). A trailing
   backslash continues the argument list, so the next line does not start with a command. */
const SH_TOKEN = /"[^"]*"|'[^']*'|\$\{?[A-Za-z_]\w*\}?|&amp;&amp;|\s+|\S+/g;

function highlightSh(escaped: string): string {
	let continued = false;
	return escaped
		.split('\n')
		.map((line) => {
			const commentAt = findCommentStart(line, '#');
			const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
			const comment = commentAt >= 0 ? tokSpan('c', line.slice(commentAt)) : '';
			let expectCmd = !continued;
			continued = code.trimEnd().endsWith('\\');
			const out: string[] = [];
			for (const [tok] of code.matchAll(SH_TOKEN)) {
				if (/^\s/.test(tok)) {
					out.push(tok);
				} else if (tok[0] === '"' || tok[0] === "'") {
					out.push(tokSpan('s', tok));
					expectCmd = false;
				} else if (tok[0] === '$' || /^--?[a-z][\w-]*$/.test(tok)) {
					out.push(tokSpan('v', tok));
				} else if (tok === '|' || tok === '&amp;&amp;') {
					out.push(tok);
					expectCmd = true;
				} else if (expectCmd && /^[A-Za-z_]\w*=/.test(tok)) {
					// NAME=value prefix: color the name, stay in command position
					const eq = tok.indexOf('=');
					out.push(tokSpan('v', tok.slice(0, eq)) + tok.slice(eq));
				} else if (expectCmd && /^[\w./~-]+$/.test(tok)) {
					out.push(tokSpan('k', tok));
					expectCmd = tok === 'sudo';
				} else {
					out.push(tok);
					expectCmd = false;
				}
			}
			return out.join('') + comment;
		})
		.join('\n');
}

function highlightIni(escaped: string): string {
	return escaped
		.split('\n')
		.map((line) => {
			if (/^\s*[#;]/.test(line)) return tokSpan('c', line);
			if (/^\s*\[/.test(line)) return tokSpan('k', line);
			const eq = line.indexOf('=');
			return eq > 0 ? tokSpan('v', line.slice(0, eq)) + line.slice(eq) : line;
		})
		.join('\n');
}

const WORD_TOKEN = /"[^"]*"|\s+|[^\s"]+/g;

/* Nix: comments, strings, attribute paths ahead of =, boolean literals. */
function highlightNix(escaped: string): string {
	return escaped
		.split('\n')
		.map((line) => {
			const commentAt = findCommentStart(line, '#');
			const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
			const comment = commentAt >= 0 ? tokSpan('c', line.slice(commentAt)) : '';
			const out: string[] = [];
			for (const m of code.matchAll(WORD_TOKEN)) {
				const tok = m[0];
				const kw = /^(true|false)([;,]?)$/.exec(tok);
				const after = code.slice(m.index + tok.length);
				if (/^\s/.test(tok)) out.push(tok);
				else if (tok[0] === '"') out.push(tokSpan('s', tok));
				else if (kw) out.push(tokSpan('k', kw[1]) + kw[2]);
				else if (/^[A-Za-z_][\w.-]*$/.test(tok) && /^\s*=[^=]/.test(after)) out.push(tokSpan('v', tok));
				else out.push(tok);
			}
			return out.join('') + comment;
		})
		.join('\n');
}

/* KDL: // comments, strings, and node names at line start and after {. */
function highlightKdl(escaped: string): string {
	return escaped
		.split('\n')
		.map((line) => {
			const commentAt = findCommentStart(line, '//');
			const code = commentAt >= 0 ? line.slice(0, commentAt) : line;
			const comment = commentAt >= 0 ? tokSpan('c', line.slice(commentAt)) : '';
			let expectNode = true;
			const out: string[] = [];
			for (const [tok] of code.matchAll(WORD_TOKEN)) {
				if (/^\s/.test(tok)) {
					out.push(tok);
				} else if (tok[0] === '"') {
					out.push(tokSpan('s', tok));
					expectNode = false;
				} else if (tok === '{') {
					out.push(tok);
					expectNode = true;
				} else if (expectNode && /^[\w+-]+$/.test(tok)) {
					out.push(tokSpan('k', tok));
					expectNode = false;
				} else {
					out.push(tok);
					expectNode = false;
				}
			}
			return out.join('') + comment;
		})
		.join('\n');
}

const SH_LANGS = new Set(['sh', 'bash', 'shell', 'zsh']);

function highlightCode(code: string, lang: string): string {
	const escaped = escapeHtml(code);
	if (SH_LANGS.has(lang)) return highlightSh(escaped);
	if (lang === 'ini') return highlightIni(escaped);
	if (lang === 'nix') return highlightNix(escaped);
	if (lang === 'kdl') return highlightKdl(escaped);
	return escaped;
}

/* The docs are served as /docs/capture/ (trailingSlash in routes/docs). Markdown is written without
   the slash, so every root-relative page link gets it here. Paths with a file extension and "/" stay. */
function withTrailingSlash(href: string): string {
	if (!href.startsWith('/')) return href;
	const url = new URL(href, SITE_URL);
	if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/';
	return `${url.pathname}${url.search}${url.hash}`;
}

function renderMarkdown(md: string): string {
	const slug = makeSlugger();
	const engine = new Marked({
		renderer: {
			heading(token) {
				const id = slug(token.text);
				const inner = this.parser.parseInline(token.tokens);
				const anchor =
					token.depth === 2 || token.depth === 3
						? `<a class="anchor" href="#${id}" aria-label="Link to this section">#</a>`
						: '';
				return `<h${token.depth} id="${id}">${inner}${anchor}</h${token.depth}>\n`;
			},
			text(token) {
				// A spaced dash or arrow ("Settings -> Hotkeys") never starts a line, and the arrow never splits.
				return Renderer.prototype.text
					.call(this, token)
					.replace(/ -&gt; /g, '\u00a0-\u2060&gt; ')
					.replace(/ - /g, '\u00a0- ');
			},
			codespan(token) {
				/* A short word (a flag, a key combo, a package) stays on one line, so a command breaks only
				   between its words. A long one may also break after / and =, so a path splits between its parts. */
				const words = token.text.split(/(\s+)/).map((w) =>
					!w.trim() ? w : w.length <= 24 ? `<span class="nowrap">${escapeHtml(w)}</span>` : escapeHtml(w).replace(/([/=])(?=.)/g, '$1<wbr>')
				);
				return `<code>${words.join('')}</code>`;
			},
			code(token) {
				const lang = (token.lang ?? '')
					.trim()
					.split(/\s+/)[0]
					.toLowerCase()
					.replace(/[^\w-]/g, '');
				const attr = lang ? ` data-lang="${lang}"` : '';
				return `<pre${attr}><code>${highlightCode(token.text, lang)}</code></pre>\n`;
			},
			blockquote(token) {
				/* GitHub alert syntax: a first line of [!NOTE], [!TIP] or [!WARNING] makes a callout. */
				const body = this.parser.parse(token.tokens);
				const m = /^<p>\[!(NOTE|TIP|WARNING)\]\s*/.exec(body);
				if (!m) return false;
				const label = m[1][0] + m[1].slice(1).toLowerCase();
				let rest = body.slice(m[0].length);
				rest = rest.startsWith('</p>') ? rest.slice(4).trimStart() : `<p>${rest}`;
				return `<div class="callout callout-${m[1].toLowerCase()}"><p class="callout-label">${label}</p>${rest}</div>\n`;
			},
			link(token) {
				token.href = withTrailingSlash(token.href);
				const href = token.href;
				if (!/^https?:\/\//.test(href) || href.startsWith(SITE_URL)) return false;
				const inner = this.parser.parseInline(token.tokens);
				const title = token.title ? ` title="${escapeAttr(token.title)}"` : '';
				return `<a href="${escapeAttr(href)}"${title} target="_blank" rel="noopener noreferrer" class="ext">${inner}<span class="sr-only"> (opens in a new tab)</span></a>`;
			}
		}
	});
	// Tables scroll inside their own box on narrow screens instead of widening the page.
	return (engine.parse(md) as string)
		.replace(/<table>/g, '<div class="table-scroll"><table>')
		.replace(/<\/table>/g, '</table></div>');
}

/* Slugs every heading in document order, as renderMarkdown does, so the ids line up. */
function buildToc(md: string): TocEntry[] {
	const slug = makeSlugger();
	const toc: TocEntry[] = [];
	for (const token of marked.lexer(md)) {
		if (token.type !== 'heading') continue;
		const id = slug(token.text);
		if (token.depth === 2 || token.depth === 3) {
			toc.push({ id, text: token.text.replace(/[`*_]/g, ''), depth: token.depth });
		}
	}
	return toc;
}

export function getAllDocs(): DocMeta[] {
	return SOURCES.map((s) => s.meta);
}

/** Pages bucketed by `group`, groups in first-seen order. */
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

/** Titles plus h2 and h3 headings: the corpus the sidebar filter searches. */
export function getSearchIndex(): SearchDoc[] {
	return SOURCES.map(({ meta, content }) => ({
		slug: meta.slug,
		title: meta.title,
		headings: buildToc(content).map(({ id, text }) => ({ id, text }))
	}));
}

export function getDoc(slug: string): Doc | null {
	const source = SOURCES.find((s) => s.meta.slug === slug);
	if (!source) return null;
	return { ...source.meta, html: renderMarkdown(source.content), toc: buildToc(source.content) };
}
