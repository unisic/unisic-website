import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// The installer and the docs are served next to this site but are not built by it.
const external = (path: string) => path === '/install.sh' || path === '/docs' || path.startsWith('/docs/');

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			version: { pollInterval: 0 },
			prerender: {
				handleHttpError: ({ path, message }) => {
					if (external(path)) return;
					throw new Error(message);
				}
			}
		})
	]
});
