# unisic.app

The website for [Unisic](https://github.com/unisic/unisic), a screenshot and screen-recording app for Linux: the landing page and the documentation.

SvelteKit with Svelte 5 and `adapter-static`: every page is prerendered to plain HTML, CSS and a small amount of JS. No analytics, no external requests at runtime, fonts are self-hosted.

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

The install commands fetch `/install.sh`, the script from the Unisic repository. This project does not produce it, so the deploy has to serve it from elsewhere.

## Documentation

Each page is a Markdown file in `content/docs/`, with front matter for its title, description, group and order. `src/lib/server/docs.ts` reads them at build time, renders them with `marked`, highlights the code blocks and collects the table of contents and the filter index. The browser gets the rendered HTML and the filter index (titles and headings), not `marked` or the highlighter.

Pages live at `/docs/<file name>/`, with the trailing slash the old site used. A new file shows up in the sidebar and the overview on the next build.

## Layout

- `src/routes/+page.svelte` puts the chapters in order
- `src/routes/docs/` holds the docs layout with the sidebar and filter, the overview and the page template
- `src/lib/components/` holds one component per chapter, plus the shared `Chapter`, `Frame`, `Copy`, `Thumb` and `Prose`
- `src/lib/ui.svelte.ts` holds the shared state: capture mode, OS, the captures shown in Share, and the pause switch
- `src/app.css` holds the tokens and the themes

## Motion

Every looping animation runs only while its section is on screen and stops when the visitor presses pause in the top bar. With `prefers-reduced-motion: reduce` the loops and timers do not start and the page shows each demo in a still state.

## Fonts

Red Hat Display, Red Hat Text and Red Hat Mono, under the SIL Open Font License; the license file is in `static/fonts/`.
