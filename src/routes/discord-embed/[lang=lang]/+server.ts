import { dictionaries } from '#lib/server/i18n.js';
import { LOCALES, SITE_URL, home } from '#lib/i18n/locales.js';
import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;
export const entries: EntryGenerator = () => LOCALES.map(({ code }) => ({ lang: code }));

const button = (label: string, url: string) => ({ type: 2, style: 5, label, url });

// The payload the landing page's discord:component-embed link points at, one static file per language.
export const GET: RequestHandler = ({ params }) => {
	const t = dictionaries[params.lang];
	const page = SITE_URL + home(params.lang);
	const body = JSON.stringify({
		component: {
			type: 17,
			accent_color: 0xc8acd6,
			components: [
				{
					type: 9,
					components: [
						{ type: 10, content: `## [${t.meta.title}](${page})` },
						{ type: 10, content: `** **\n${t.meta.description}` }
					],
					accessory: { type: 11, media: { url: `${SITE_URL}/apple-icon.png` } }
				},
				{ type: 14, divider: true, spacing: 2 },
				{ type: 12, items: [{ media: { url: `${SITE_URL}/img/og.jpg` } }] },
				{ type: 14, divider: true, spacing: 1 },
				{
					type: 1,
					components: [
						button(t.chrome.install, `${SITE_URL}/docs/installation/`),
						button(t.chrome.docs, `${SITE_URL}/docs/`),
						button('GitHub', 'https://github.com/unisic/unisic'),
						button('Discord', 'https://discord.gg/U2Eyw6xQBz')
					]
				}
			]
		}
	});
	// Discord drops an oversized payload instead of falling back, so a long translation fails the build.
	const bytes = new TextEncoder().encode(body).length;
	if (bytes > 3000) throw new Error(`Discord embed for ${params.lang} is ${bytes} bytes, limit 3000`);
	return new Response(body, { headers: { 'content-type': 'application/json' } });
};
