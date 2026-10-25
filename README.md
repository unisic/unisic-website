# unisic.app

The landing page for [Unisic](https://github.com/unisic/unisic), a screenshot and screen-recording app for Linux.

SvelteKit with Svelte 5 and `adapter-static`: the page is prerendered to plain HTML, CSS and a small amount of JS. No analytics, no external requests at runtime, fonts are self-hosted.

## Develop

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run check     # svelte-check, types and a11y warnings
npm run build     # static site in build/
npm run preview   # serve build/ locally
```

## Not built here

The page links to these paths, but this project does not produce them. The deploy has to serve them from elsewhere:

- `/install.sh`, the install script from the Unisic repository
- `/docs/*`, the documentation

Links to them carry `data-sveltekit-reload`, so the router leaves them to the server.

## Layout

- `src/routes/+page.svelte` puts the chapters in order
- `src/lib/components/` holds one component per chapter, plus the shared `Chapter`, `Frame`, `Copy` and `Thumb`
- `src/lib/ui.svelte.ts` holds the shared state: capture mode, OS, the captures shown in Share, and the pause switch
- `src/app.css` holds the tokens and the themes

## Motion

Every looping animation runs only while its section is on screen and stops when the visitor presses pause in the top bar. With `prefers-reduced-motion: reduce` the loops and timers do not start and the page shows each demo in a still state.

## Fonts

Bricolage Grotesque and Departure Mono, both under the SIL Open Font License; the license files are in `static/fonts/`.
