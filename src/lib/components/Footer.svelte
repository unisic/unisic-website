<script lang="ts">
	import { ui, inview } from '#lib/ui.svelte.js';

	const GROUPS = [
		{
			title: 'Unisic',
			links: [
				{ href: '/#capture', text: 'Capture' },
				{ href: '/#record', text: 'Record' },
				{ href: '/#keys', text: 'Hotkeys' },
				{ href: '/#compare', text: 'Compared' },
				{ href: '/#install', text: 'Install' }
			]
		},
		{
			title: 'Project',
			links: [
				{ href: 'https://github.com/unisic/unisic', text: 'Source on GitHub' },
				{ href: 'https://github.com/unisic/unisic/releases/latest', text: 'Releases' },
				{ href: 'https://github.com/unisic/unisic/issues', text: 'Report a bug' },
				{ href: '/docs/', text: 'Documentation' }
			]
		},
		{
			title: 'Community',
			links: [
				{ href: 'https://discord.gg/U2Eyw6xQBz', text: 'Discord' },
				{ href: 'https://ko-fi.com/deandark', text: 'Support on Ko-fi' }
			]
		}
	];

	let run = $state(false);
</script>

<footer class="foot" data-run={run && !ui.paused} {@attach inview((v) => (run = v))}>
	<div class="wrap grid">
		<div class="sign">
			<img class="uni" src="/img/uni.webp" alt="Uni, the Unisic mascot" width="376" height="568" loading="lazy" decoding="async" />
			<p class="quote">Uni approves this capture.</p>
		</div>

		<nav class="groups" aria-label="Footer">
			{#each GROUPS as g (g.title)}
				<div>
					<h2 class="label">{g.title}</h2>
					<ul>
						{#each g.links as l (l.href)}
							<li><a href={l.href}>{l.text}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>

		<p class="legal">
			Unisic is free software under the
			<a href="/docs/introduction/#license">GNU GPL v3</a>. Built by
			<a href="https://github.com/DeBondor">@DeBondor</a> and <a href="https://github.com/D3anDark">@D3anDark</a>, inspired by
			<a href="https://getsharex.com/">ShareX</a> and <a href="https://apps.kde.org/spectacle/">Spectacle</a>.
		</p>
	</div>
</footer>

<style>
	.foot {
		padding-block: var(--s9) var(--s7);
		border-top: 1px solid var(--line);
		background: var(--deep);
	}
	.grid {
		display: grid;
		gap: var(--s7);
	}
	.sign {
		display: flex;
		align-items: flex-end;
		gap: var(--s5);
	}
	.uni {
		width: 96px;
		height: auto;
	}
	.quote {
		margin-bottom: var(--s4);
		font: italic 600 clamp(1.25rem, 1rem + 1vw, 1.75rem) / 1.2 var(--font-display);
		text-wrap: balance;
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
		min-height: 40px;
		color: var(--muted);
		text-decoration: none;
		transition: color 150ms ease;
	}
	.groups a:focus-visible,
	.legal a:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
		border-radius: 4px;
	}
	@media (hover: hover) and (pointer: fine) {
		.groups a:hover {
			color: var(--text);
		}
	}
	.legal {
		max-width: 72ch;
		padding-top: var(--s5);
		border-top: 1px solid var(--line);
		font-size: var(--t-small);
		color: var(--muted);
	}
	.legal a {
		color: var(--text);
	}

	@media (min-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1.4fr;
		}
		.legal {
			grid-column: 1 / -1;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.uni {
			animation: float 5s var(--ease-in-out) infinite alternate paused;
		}
		[data-run='true'] .uni {
			animation-play-state: running;
		}
	}
	@keyframes float {
		from {
			transform: translateY(0) rotate(-2deg);
		}
		to {
			transform: translateY(-10px) rotate(2deg);
		}
	}
</style>
