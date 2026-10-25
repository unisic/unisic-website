<script lang="ts">
	// The scrolling capture claim and the closing sentence follow the rows in Compare.svelte.
	const POINTS = [
		{
			href: '#capture',
			title: 'Scrolling capture',
			text: 'A page longer than the screen comes out as one image. Flameshot, Spectacle, ksnip and Satty have no scrolling capture.'
		},
		{
			href: '#record',
			title: 'Recording with sound',
			text: 'The same region as a GIF, MP4 or WebM, with system sound, the microphone or one app on its own track.'
		},
		{
			href: '#read',
			title: 'Text and QR codes',
			text: 'Copy the text out of any capture, or get the link inside a QR code or barcode.'
		},
		{
			href: '#share',
			title: 'Uploads and history',
			text: 'Your own server over HTTP, FTP or SFTP, or a ShareX .sxcu config, and a thumbnail of every capture in the history.'
		}
	];
</script>

<section id="why" class="why wrap" aria-labelledby="why-title">
	<div class="head">
		<h2 id="why-title">Why Unisic.</h2>
		<p>
			Of the six tools in the <a href="#compare">comparison</a>, only Unisic and ShareX have every feature, and ShareX
			runs only on Windows.
		</p>
	</div>
	<ul>
		{#each POINTS as point (point.href)}
			<li>
				<a href={point.href}><strong>{point.title}</strong>{point.text}</a>
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
	.head a {
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
		align-content: start;
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
	@media (hover: hover) and (pointer: fine) {
		li a:hover {
			background: var(--surface-hi);
		}
	}
</style>
