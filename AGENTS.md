# This is NOT the SvelteKit you know

SvelteKit 3 and Svelte 5 (runes). APIs, conventions, and file structure may all differ from your training data. Read the installed types in `node_modules/@sveltejs/kit/types/index.d.ts` and `node_modules/svelte/types/index.d.ts` before writing any code. Heed deprecation notices.

Known differences:

- There is no `$lib` alias. Import with `#lib/...` (package.json `imports`) and the file extension: `#lib/site.ts`, `#lib/components/Nav.svelte`.
- `$app/env`, not `$app/environment`.
- Kit config lives inside `sveltekit({...})` in `vite.config.ts`; there is no `svelte.config.js`.
- The site is fully prerendered by adapter-static into `out/`, which nginx serves (see `Dockerfile`, `nginx.conf`).
