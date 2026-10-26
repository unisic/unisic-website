<script lang="ts">
	const GROUPS = [
		{
			title: 'Unisic',
			links: [
				{ href: '/#capture', text: 'Capture' },
				{ href: '/#record', text: 'Record' },
				{ href: '/docs/hotkeys/', text: 'Hotkeys' },
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
</script>

<footer class="foot">
	<div class="wrap grid">
		<div class="sign">
			<img class="uni" src="/img/uni.webp" alt="Uni, the Unisic mascot" width="376" height="568" loading="lazy" decoding="async" />
			<p class="legal">
				Unisic is free software under the
				<a href="/docs/introduction/#license">GNU GPL v3</a>. Built by
				<a href="https://github.com/DeBondor">@DeBondor</a> and <a href="https://github.com/D3anDark">@D3anDark</a>, inspired by
				<a href="https://getsharex.com/">ShareX</a> and <a href="https://apps.kde.org/spectacle/">Spectacle</a>.
			</p>
		</div>

		<nav class="groups" aria-label="Footer">
			{#each GROUPS as g (g.title)}
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
	.legal a:focus-visible {
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
	.legal a {
		color: var(--text);
	}

	@media (min-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1.4fr;
		}
	}
</style>
