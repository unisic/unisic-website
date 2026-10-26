<script lang="ts">
	import { track } from '#lib/ui.svelte.js';
	import Copy from './Copy.svelte';

	const INSTALL = 'curl -fsSL https://unisic.app/install.sh | bash';
</script>

<section class="hero" aria-labelledby="hero-title" {@attach track('shot')}>
	<div class="inner wrap">
		<p class="kicker">Free and open source screenshot tool for Linux Wayland</p>
		<h1 id="hero-title">Take the shot. Unisic handles everything <span class="mark">after.</span></h1>
		<p class="lede">
			Capture a region or a page longer than your screen, mark it up, record it with sound, pull the text out and
			upload a link. All in one free app.
		</p>

		<div class="term panel">
			<img class="uni" src="/img/uni.webp" alt="" width="376" height="568" />
			<p class="bar"><i></i><i></i><i></i><span>Install on any distro</span></p>
			<div class="body">
				<code class="cmd"><span class="prompt" aria-hidden="true">$</span> {INSTALL}</code>
				<Copy text={INSTALL} />
			</div>
			<p class="note">Opens a menu. The default entry puts the self-updating AppImage in ~/.local, without a password.</p>
		</div>

		<div class="foot">
			<ul class="facts">
				{#each ['Free, GPL-3.0', 'No account', 'No telemetry'] as fact (fact)}
					<li><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>{fact}</li>
				{/each}
				<li class="ver">v0.8.8, 2026-10-19</li>
			</ul>
			<p class="more">
				<a href="#install">Distro packages, Nix, Windows</a>
				<a href="https://github.com/unisic/unisic">Source on GitHub</a>
			</p>
		</div>
	</div>
</section>

<style>
	.hero {
		display: grid;
		align-content: center;
		min-height: calc(100svh - 60px);
		margin-top: 60px;
		padding-block: var(--s7) var(--s8);
		background: var(--deep);
	}
	.inner {
		display: grid;
		justify-items: start;
	}

	.kicker {
		margin-bottom: var(--s4);
		font-size: var(--t-lede);
		font-weight: 600;
	}
	h1 {
		max-width: 18ch;
		font-size: clamp(2.75rem, 1.25rem + 4.4vw, 5.75rem);
		font-weight: 760;
		font-stretch: 76%;
		letter-spacing: -0.035em;
		line-height: 0.9;
	}
	.mark {
		color: var(--accent);
		white-space: nowrap;
	}
	.lede {
		max-width: 54ch;
		margin-top: var(--s5);
		font-size: var(--t-lede);
		line-height: 1.45;
		color: var(--muted);
		text-wrap: pretty;
	}

	.term {
		position: relative;
		width: 100%;
		max-width: 960px;
		margin-top: var(--s8);
	}
	.uni {
		position: absolute;
		right: var(--s6);
		bottom: calc(100% - 22px);
		width: 120px;
		pointer-events: none;
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px var(--s4);
		border-bottom: 1px solid var(--line);
		font-size: var(--t-small);
		font-weight: 600;
	}
	.bar i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--line-strong);
	}
	.bar span {
		margin-left: var(--s2);
	}
	.body {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--s4) var(--s5);
		padding: var(--s5) var(--s5) var(--s3);
	}
	.cmd {
		flex: 1 1 24ch;
		min-width: 0;
		font-size: clamp(1rem, 0.6rem + 1.5vw, 1.5rem);
		line-height: 1.4;
		overflow-wrap: break-word;
	}
	.prompt {
		color: var(--success);
		user-select: none;
	}
	.term .body :global(.copy) {
		min-height: 48px;
		padding: 0 var(--s5);
		border-radius: var(--r2);
		background: var(--accent);
		color: var(--on-accent);
		font-size: var(--t-body);
	}
	@media (hover: hover) and (pointer: fine) {
		.term .body :global(.copy:hover) {
			background: color-mix(in oklab, var(--accent) 86%, var(--text));
		}
	}
	.note {
		padding: 0 var(--s5) var(--s5);
		font-size: var(--t-small);
		color: var(--muted);
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--s3) var(--s6);
		width: 100%;
		max-width: 960px;
		margin-top: var(--s4);
		font-size: var(--t-small);
	}
	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s2) var(--s4);
		margin: 0;
		padding: 0;
		list-style: none;
		font-weight: 600;
	}
	.facts li {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.facts .icon {
		width: 16px;
		height: 16px;
		color: var(--success);
	}
	.facts .ver {
		color: var(--muted);
	}
	.more {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s1) var(--s5);
	}
	.more a {
		color: var(--accent);
	}

	@media (max-width: 599px) {
		.uni {
			right: var(--s4);
			width: 80px;
		}
	}
</style>
