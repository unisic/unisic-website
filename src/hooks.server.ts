import type { Handle } from '@sveltejs/kit/hooks';

// Prerendered pages need the right lang before any script runs.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? 'en') });
