import { getAllDocs } from '#lib/server/docs.js';
import { LOCALES, SITE_URL, home } from '#lib/i18n/locales.js';
import type { RequestHandler } from './$types';

export const prerender = true;

// Every URL with the trailing slash the pages serve, so it matches their canonical. No lastmod: a build date
// would claim every page changed on every deploy.
export const GET: RequestHandler = () => {
	const alternates = [
		...LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}${home(l.code)}"/>`),
		`<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/"/>`
	].join('');
	// The docs are English only, so they carry no alternates.
	const urls = [
		...LOCALES.map((l) => `<url><loc>${SITE_URL}${home(l.code)}</loc>${alternates}</url>`),
		...['', ...getAllDocs().map((d) => `${d.slug}/`)].map((path) => `<url><loc>${SITE_URL}/docs/${path}</loc></url>`)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'content-type': 'application/xml' } });
};
