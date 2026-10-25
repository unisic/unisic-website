<script lang="ts">
	import { mount, unmount } from 'svelte';
	import Copy from './Copy.svelte';

	let { html }: { html: string } = $props();

	/* Code blocks get a copy button once the page runs; without scripting the text is still selectable.
	   A box that overflows sideways takes focus so the keyboard can scroll it. */
	function enhance(root: HTMLElement) {
		for (const box of root.querySelectorAll<HTMLElement>('pre > code, .table-scroll')) {
			if (box.scrollWidth > box.clientWidth) box.tabIndex = 0;
		}
		const buttons = [...root.querySelectorAll('pre')].map((pre) =>
			mount(Copy, { target: pre, props: { text: (pre.textContent ?? '').replace(/\n+$/, '') } })
		);
		return () => buttons.forEach((b) => unmount(b));
	}
</script>

{#key html}
	<div class="prose" {@attach enhance}>
		<!-- Rendered at build time from the repository's own Markdown. -->
		{@html html}
	</div>
{/key}

<style>
	.prose {
		max-width: 72ch;
		color: var(--text);
	}
	.prose :global(:where(p, ul, ol, pre, hr, .table-scroll, .callout)) {
		margin: 0 0 var(--s4);
	}
	.prose :global(h2) {
		margin: var(--s7) 0 var(--s4);
		padding-top: var(--s5);
		border-top: 1px solid var(--line);
		font-size: var(--t-h3);
		line-height: 1.1;
		letter-spacing: -0.01em;
	}
	.prose :global(h3) {
		margin: var(--s6) 0 var(--s3);
		font-size: 1.1875rem;
		font-weight: 680;
		font-stretch: 85%;
		line-height: 1.2;
		letter-spacing: -0.005em;
	}
	.prose :global(.anchor) {
		margin-left: 0.35em;
		color: var(--muted);
		font-weight: 500;
		text-decoration: none;
		opacity: 0;
		transition: opacity 150ms ease;
	}
	.prose :global(.anchor:focus-visible) {
		opacity: 1;
	}
	@media (hover: hover) and (pointer: fine) {
		.prose :global(:is(h2, h3):hover .anchor) {
			opacity: 1;
		}
	}
	@media (hover: none) {
		.prose :global(.anchor) {
			opacity: 0.6;
		}
	}

	.prose :global(a:not(.anchor)) {
		color: var(--accent);
	}
	.prose :global(.ext::after) {
		content: '';
		display: inline-block;
		width: 0.7em;
		height: 0.7em;
		margin-left: 0.2em;
		background: currentColor;
		mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17 17 7M9 7h8v8'/%3E%3C/svg%3E")
			center / contain no-repeat;
	}
	.prose :global(strong) {
		font-weight: 650;
	}
	.prose :global(:is(ul, ol)) {
		padding-left: 1.25em;
	}
	.prose :global(li + li) {
		margin-top: var(--s2);
	}
	.prose :global(li::marker) {
		color: var(--muted);
	}
	.prose :global(hr) {
		height: 1px;
		margin-block: var(--s6);
		border: 0;
		background: var(--line);
	}

	.prose :global(:not(pre) > code) {
		padding: 0.1em 0.35em;
		border-radius: 4px;
		background: var(--surface-hi);
		box-shadow: inset 0 0 0 1px var(--line);
		font-size: 0.85em;
		overflow-wrap: anywhere;
	}
	.prose :global(pre) {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: center;
		border-radius: var(--r2);
		background: var(--deep);
		box-shadow: inset 0 0 0 1px var(--line);
		font-size: var(--t-small);
		line-height: 1.6;
	}
	.prose :global(pre::before) {
		content: attr(data-lang);
		grid-area: 1 / 1;
		padding: var(--s2) var(--s4);
		font: var(--t-label) var(--font-mono);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.prose :global(pre > .copy) {
		grid-area: 1 / 2;
		margin: var(--s1);
	}
	.prose :global(pre > code) {
		grid-area: 2 / 1 / 3 / -1;
		padding: var(--s3) var(--s4) var(--s4);
		overflow-x: auto;
		border-top: 1px solid var(--line);
		scrollbar-width: thin;
	}
	.prose :global(.tok-c) {
		color: var(--muted);
	}
	.prose :global(.tok-s) {
		color: color-mix(in oklab, var(--success) 75%, var(--text));
	}
	.prose :global(.tok-v) {
		color: color-mix(in oklab, var(--accent) 60%, var(--text));
	}
	.prose :global(.tok-k) {
		color: var(--accent);
	}

	.prose :global(.table-scroll) {
		overflow-x: auto;
		border-radius: var(--r2);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--t-small);
	}
	.prose :global(:is(th, td)) {
		padding: var(--s2) var(--s3);
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid var(--line);
	}
	.prose :global(tr:last-child > td) {
		border-bottom: 0;
	}
	.prose :global(th) {
		font-weight: 650;
		white-space: nowrap;
	}

	.prose :global(.callout) {
		--tone: var(--accent);
		padding: var(--s4) var(--s5);
		border-radius: var(--r2);
		background: color-mix(in oklab, var(--tone) 8%, var(--surface));
		box-shadow:
			inset 3px 0 0 var(--tone),
			inset 0 0 0 1px color-mix(in oklab, var(--tone) 26%, transparent);
	}
	.prose :global(.callout-tip) {
		--tone: var(--success);
	}
	.prose :global(.callout-warning) {
		--tone: var(--danger);
	}
	.prose :global(.callout > p) {
		margin: 0;
	}
	.prose :global(.callout > p + p) {
		margin-top: var(--s2);
	}
	.prose :global(.callout-label) {
		display: flex;
		align-items: center;
		gap: var(--s2);
		font: var(--t-label) var(--font-mono);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.prose :global(.callout-label::before) {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 2px;
		background: var(--tone);
	}
</style>
