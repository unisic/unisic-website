<script lang="ts">
	import { page } from '$app/state';
	import { home } from '#lib/i18n/locales.js';

	const words = $derived(page.data.chrome.footer);
	const root = $derived(home(page.data.lang));
	const groups = $derived([
		{
			title: 'Unisic',
			links: [
				{ href: `${root}#capture`, text: words.capture },
				{ href: `${root}#record`, text: words.record },
				{ href: '/docs/hotkeys/', text: words.hotkeys },
				{ href: `${root}#compare`, text: words.compared },
				{ href: '/docs/installation/', text: words.install }
			]
		},
		{
			title: words.project,
			links: [
				{ href: 'https://github.com/unisic/unisic', text: words.source },
				{ href: 'https://github.com/unisic/unisic/releases/latest', text: words.releases },
				{ href: 'https://github.com/unisic/unisic/issues', text: words.bug },
				{ href: '/docs/', text: words.docs }
			]
		},
		{
			title: words.community,
			links: [
				{ href: 'https://discord.gg/U2Eyw6xQBz', text: 'Discord' },
				{ href: 'https://ko-fi.com/deandark', text: words.kofi }
			]
		}
	]);
</script>

<footer class="foot">
	<div class="wrap grid">
		<div class="sign">
			<img class="uni" src="/img/uni.webp" alt={words.mascot} width="376" height="568" loading="lazy" decoding="async" />
			<p class="legal">{@html words.legalHtml}</p>
		</div>

		<nav class="groups" aria-label={words.label}>
			{#each groups as g (g.title)}
				<div>
					<h3 class="label">{g.title}</h3>
					<ul>
						{#each g.links as l (l.href)}
							<li><a href={l.href}>{l.text}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</div>
</footer>

<style>
	.foot {
		padding-block: var(--s8) var(--s7);
		border-top: 1px solid var(--line);
		background: var(--deep);
	}
	.grid {
		display: grid;
		gap: var(--s7);
	}
	.sign {
		display: flex;
		align-self: start;
		align-items: center;
		gap: var(--s5);
	}
	.uni {
		flex: none;
		width: 72px;
		height: auto;
	}
	.groups {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: var(--s6);
	}
	.groups ul {
		display: grid;
		margin: var(--s3) 0 0;
		padding: 0;
		list-style: none;
	}
	.groups a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--text);
		text-decoration: none;
		transition: color 150ms ease;
	}
	.groups a:focus-visible,
	.legal :global(a:focus-visible) {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
		border-radius: 4px;
	}
	@media (hover: hover) and (pointer: fine) {
		.groups a:hover {
			color: var(--accent);
		}
	}
	.legal {
		max-width: 44ch;
		font-size: var(--t-small);
		color: var(--muted);
		text-wrap: pretty;
	}
	.legal :global(a) {
		color: var(--text);
	}

	@media (min-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1.4fr;
		}
	}
</style>
