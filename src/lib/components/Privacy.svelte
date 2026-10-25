<script lang="ts">
	import Chapter from './Chapter.svelte';

	const URL = 'https://api.github.com/repos/unisic/unisic/releases/latest';

	let updates = $state(true);
</script>

<Chapter
	id="privacy"
	num="07"
	mode="ocr"
	kicker="Privacy"
	title="One request, and you can turn it off."
	lede="No telemetry, no analytics, no account. The only request Unisic makes on its own asks GitHub whether there is a newer release, shortly after it starts and once a day after that. Nothing about you or your captures is sent."
>
	<div class="grid wrap">
		<div class="wire panel" data-on={updates}>
			<div class="ends" aria-hidden="true">
				<span class="node">Unisic</span>
				<span class="line"></span>
				<span class="node">api.github.com</span>
			</div>

			<ol class="log" aria-label="Requests Unisic makes on its own">
				{#if updates}
					<li><span class="when">After start</span><code>GET {URL}</code><span class="ok">200</span></li>
					<li><span class="when">Every 24 h</span><code>GET {URL}</code><span class="ok">200</span></li>
				{:else}
					<li class="none"><span class="when">Always</span>0 automatic requests</li>
				{/if}
			</ol>

			<button class="switch" type="button" role="switch" aria-checked={updates} onclick={() => (updates = !updates)}>
				<span class="track" aria-hidden="true"><i></i></span>
				Automatic updates
			</button>
		</div>

		<div class="side">
			<p>
				Uploads happen only when you press Upload or turn on upload after capture, and only to the host you picked.
			</p>
			<a href="/docs/introduction/#privacy">What exactly is sent</a>
		</div>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s6);
	}
	.wire {
		display: grid;
		gap: var(--s5);
		padding: var(--s5);
	}
	.ends {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: var(--s3);
	}
	.node {
		padding: 8px 12px;
		border-radius: var(--r2);
		background: var(--surface-hi);
		box-shadow: inset 0 0 0 1px var(--line);
		font: var(--t-small) var(--font-mono);
	}
	.line {
		position: relative;
		height: 2px;
		background: var(--line-strong);
		transition: opacity 200ms ease;
	}
	[data-on='false'] .line {
		opacity: 0.35;
	}
	.log {
		display: grid;
		gap: var(--s2);
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 0.8125rem;
	}
	.log li {
		display: grid;
		grid-template-columns: 7.5em 1fr auto;
		align-items: baseline;
		gap: var(--s3);
		padding: var(--s2) var(--s3);
		border-radius: var(--r1);
		background: var(--deep);
	}
	.log code {
		overflow-wrap: anywhere;
	}
	.when {
		font-size: var(--t-label);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--muted);
	}
	.ok {
		font-family: var(--font-mono);
		color: var(--success);
	}
	.none {
		grid-template-columns: 7.5em 1fr;
		color: var(--success);
	}

	.switch {
		display: inline-flex;
		align-items: center;
		justify-self: start;
		gap: var(--s3);
		min-height: 44px;
		padding: 0 var(--s2) 0 0;
		border: 0;
		background: transparent;
		color: var(--text);
		font: inherit;
		font-weight: 600;
		cursor: pointer;
	}
	.switch .track {
		position: relative;
		width: 44px;
		height: 26px;
		border-radius: 99px;
		background: var(--surface-hi);
		box-shadow: inset 0 0 0 1px var(--line-strong);
		transition: background-color 180ms ease;
	}
	.switch .track i {
		position: absolute;
		left: 3px;
		top: 3px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--text);
		transition: transform 180ms var(--ease-out);
	}
	.switch[aria-checked='true'] .track {
		background: var(--mode);
		box-shadow: none;
	}
	.switch[aria-checked='true'] .track i {
		background: var(--mode-ink);
		transform: translateX(18px);
	}
	.switch:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 3px;
		border-radius: var(--r1);
	}
	.switch:active .track i {
		scale: 0.96;
	}

	.side {
		display: grid;
		align-content: start;
		justify-items: start;
		gap: var(--s4);
		color: var(--muted);
	}
	.side a {
		color: var(--accent);
		font-weight: 600;
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1.4fr 1fr;
			align-items: start;
		}
	}
</style>
