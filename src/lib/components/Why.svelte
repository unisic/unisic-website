<script lang="ts">
	// The scrolling capture claim and the closing sentence follow the rows in Compare.svelte.
	import type { Dictionary } from '#lib/i18n/en.js';

	const HREFS = ['#capture', '#record', '#read', '#share'];

	let { t }: { t: Dictionary } = $props();
</script>

<section id="why" class="why wrap" aria-labelledby="why-title">
	<div class="head">
		<h2 id="why-title">{t.why.title}</h2>
		<p>{@html t.why.ledeHtml}</p>
	</div>
	<ul>
		{#each t.why.points as point, i (HREFS[i])}
			<li>
				<a href={HREFS[i]}>
					<strong>{point.title}</strong>
					{point.text}
					<span class="see">
						{t.why.see}
						<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.why {
		display: grid;
		gap: var(--s6);
		padding-block: var(--s8) var(--s6);
	}
	.head {
		display: grid;
		gap: var(--s4);
		max-width: 60ch;
	}
	h2 {
		font-size: var(--t-title);
	}
	.head p {
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
	}
	.head :global(a) {
		color: var(--accent);
	}
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--s3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li a {
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: var(--s2);
		height: 100%;
		padding: var(--s5);
		border-radius: var(--r3);
		background: var(--surface);
		box-shadow: inset 0 0 0 1px var(--line);
		color: var(--muted);
		font-size: var(--t-small);
		text-decoration: none;
		transition: background-color 150ms ease;
	}
	strong {
		font-size: var(--t-body);
		color: var(--text);
	}
	.see {
		display: inline-flex;
		align-items: center;
		gap: var(--s1);
		margin-top: var(--s2);
		color: var(--accent);
		font-weight: 600;
	}
	.see .icon {
		width: 16px;
		height: 16px;
		transition: transform 160ms var(--ease-out);
	}
	@media (hover: hover) and (pointer: fine) {
		li a:hover {
			background: var(--surface-hi);
		}
		li a:hover .icon {
			transform: translateX(3px);
		}
	}
</style>
