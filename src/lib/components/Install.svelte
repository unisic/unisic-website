<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Copy from './Copy.svelte';
	import { ui, inview, calm } from '#lib/ui.svelte.js';

	const VERSION = '0.8.8';
	const DOWNLOAD = `https://github.com/unisic/unisic/releases/download/v${VERSION}`;
	const RELEASES = 'https://github.com/unisic/unisic/releases/latest';

	type Step = { say?: string; cmd?: string };
	type Tab = { id: string; label: string; steps: Step[]; docs?: boolean };

	const TABS: Tab[] = [
		{
			id: 'any',
			label: 'Any distro',
			steps: [
				{
					say: 'One script with an arrow-key menu. The recommended entry puts the self-updating AppImage in ~/.local and needs no password; the system package entry asks for one. Run it again to update, remove, pick an older version or switch automatic updates. Every download is checked against its SHA-256 and deleted on a mismatch.',
					cmd: 'curl -fsSL https://unisic.app/install.sh | bash'
				},
				{ say: 'Read it before it runs:', cmd: 'curl -fsSLO https://unisic.app/install.sh' },
				{ cmd: 'less install.sh && bash install.sh' }
			]
		},
		{
			id: 'fedora',
			label: 'Fedora',
			steps: [
				{ say: 'From COPR, so updates arrive with the rest of the system:', cmd: 'sudo dnf copr enable deandark/Unisic && sudo dnf install unisic' },
				{ say: 'A package downloaded from the release adds the COPR repository by itself:', cmd: 'sudo dnf install ./unisic-*.fedora.x86_64.rpm' }
			]
		},
		{
			id: 'arch',
			label: 'Arch',
			steps: [
				{ say: 'From the AUR with any helper. unisic-bin repacks the release build, unisic compiles it:', cmd: 'paru -S unisic-bin' },
				{ say: 'Or the package from the release:', cmd: 'sudo pacman -U ./unisic-*-x86_64.pkg.tar.zst' }
			]
		},
		{
			id: 'debian',
			label: 'Debian, Ubuntu',
			steps: [
				{
					say: 'Debian 13 and Ubuntu 25.10 or 26.04. The package from the release adds the signed apt repository, so later versions come with your system updates:',
					cmd: 'sudo apt install ./unisic_*_amd64.deb'
				}
			],
			docs: true
		},
		{
			id: 'opensuse',
			label: 'openSUSE',
			steps: [{ say: 'Tumbleweed and Leap 16.0 get a signed repository from the openSUSE Build Service, home:unisic.' }],
			docs: true
		},
		{
			id: 'nix',
			label: 'Nix',
			steps: [{ say: 'Straight from the flake:', cmd: 'nix run github:unisic/unisic' }]
		},
		{
			id: 'appimage',
			label: 'AppImage, Flatpak',
			steps: [
				{ say: 'The AppImage runs on its own and replaces itself when a new version is out:', cmd: 'chmod +x Unisic-*-x86_64.AppImage && ./Unisic-*-x86_64.AppImage' },
				{ say: 'Where flatpak is installed, the script above offers a Flatpak entry too.' }
			]
		},
		{ id: 'windows', label: 'Windows 11', steps: [] }
	];

	// The install submenu of install.sh, copied from the v0.8.8 script.
	const MENU = [
		['Install or update Unisic          (recommended)', 'No password needed, unless Unisic is already installed system-wide.'],
		['Install the system package        (asks for password)', "Installs Unisic with your system's package manager."],
		['Install the Flatpak version       (sandboxed)', 'Installs Unisic as a Flatpak. No password needed.'],
		['Install a specific (older) version', 'Pick an exact, older version from a list.']
	];
	const PATH = [0, 1, 2, 3, 2, 1];

	let active = $state(0);
	let tabs: HTMLButtonElement[] = [];
	let step = $state(0);
	let visible = $state(false);
	const sel = $derived(PATH[step]);

	$effect(() => {
		if (/Windows/.test(navigator.userAgent)) {
			ui.os = 'windows';
			active = TABS.length - 1;
		}
	});

	$effect(() => {
		if (!visible || calm.current) return;
		const timer = setInterval(() => (step = (step + 1) % PATH.length), 1300);
		return () => clearInterval(timer);
	});

	function select(i: number, focus = false) {
		active = i;
		ui.os = TABS[i].id === 'windows' ? 'windows' : 'linux';
		if (focus) tabs[i].focus();
	}

	function onkeydown(e: KeyboardEvent) {
		const last = TABS.length - 1;
		const next = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: last }[e.key];
		if (next === undefined) return;
		e.preventDefault();
		select(next > last ? 0 : next < 0 ? last : next, true);
	}
</script>

<Chapter id="install" num="11" mode="shot" kicker="Install" title="Installed in one line.">
	<div class="wrap grid">
		<div class="box panel">
			<div class="tabs" role="tablist" aria-label="Install on">
				{#each TABS as t, i (t.id)}
					<button
						bind:this={tabs[i]}
						id="tab-{t.id}"
						type="button"
						role="tab"
						aria-selected={active === i}
						aria-controls="panel-{t.id}"
						tabindex={active === i ? 0 : -1}
						onclick={() => select(i)}
						{onkeydown}>{t.label}</button
					>
				{/each}
			</div>

			{#each TABS as t, i (t.id)}
				<div class="panel-body" id="panel-{t.id}" role="tabpanel" aria-labelledby="tab-{t.id}" hidden={active !== i}>
					{#if t.id === 'windows'}
						<p class="say">
							Experimental. Both files install for your user only, need no administrator rights and update themselves.
							Recording a single window does not work yet.
						</p>
						<div class="files">
							<a class="btn primary" href="{DOWNLOAD}/unisic-{VERSION}-windows-x64-experimental-setup.exe">
								Download the installer
							</a>
							<a class="btn" href="{DOWNLOAD}/Unisic-{VERSION}-windows-x86_64-experimental.zip">Download the zip</a>
						</div>
						<p class="say small">
							The installer adds a Start menu entry and an uninstaller. Unpack the zip anywhere and run
							<code>bin\unisic.exe</code>; keep the folder where it is, since updates start from there.
						</p>
					{:else}
						{#each t.steps as s, j (j)}
							{#if s.say}<p class="say">{s.say}</p>{/if}
							{#if s.cmd}
								<div class="cmd">
									<code><span aria-hidden="true">$ </span>{s.cmd}</code>
									<Copy text={s.cmd} />
								</div>
							{/if}
						{/each}
						{#if t.docs}
							<p class="say small">
								Repository setup, step by step: <a href="/docs/installation/">installation docs</a>.
							</p>
						{/if}
					{/if}
				</div>
			{/each}

			<p class="all">
				Version {VERSION}. Every file, with checksums: <a href={RELEASES}>GitHub releases</a>.
			</p>
		</div>

		<figure class="term" {@attach inview((v) => (visible = v))}>
			<div class="screen" aria-hidden="true">
				<pre class="top">Unisic  installer
<span class="dim">a screenshot & screen-recording app for Linux</span></pre>
				<pre class="status dim">Install or update</pre>
				<ul>
					{#each MENU as [label], i (label)}
						<li class:on={sel === i}><span class="caret">{sel === i ? '>' : ' '}</span> {label}</li>
					{/each}
					<li class="back">{'  Back'}</li>
				</ul>
				<pre class="help dim">{MENU[sel][1]}
Up/Down  move     Enter  choose     q  back</pre>
			</div>
			<figcaption>
				The install menu of install.sh: the recommended entry, the system package, the Flatpak version and an older version.
			</figcaption>
		</figure>
	</div>
</Chapter>

<style>
	.grid {
		display: grid;
		gap: var(--s6);
	}
	.box {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: start;
		gap: var(--s5);
		padding: var(--s5);
		min-width: 0;
	}
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s1);
		padding-bottom: var(--s4);
		border-bottom: 1px solid var(--line);
	}
	[role='tab'] {
		min-height: 40px;
		padding: 0 var(--s3);
		border: 0;
		border-radius: var(--r1);
		background: transparent;
		color: var(--muted);
		font: inherit;
		font-size: var(--t-small);
		font-weight: 600;
		cursor: pointer;
		transition:
			background-color 150ms ease,
			color 150ms ease;
	}
	[role='tab'][aria-selected='true'] {
		background: var(--mode);
		color: var(--mode-ink);
	}
	[role='tab']:focus-visible {
		outline: 2px solid var(--mode);
		outline-offset: 2px;
	}
	@media (hover: hover) and (pointer: fine) {
		[role='tab'][aria-selected='false']:hover {
			color: var(--text);
		}
	}
	.panel-body:not([hidden]) {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--s3);
	}
	.say {
		max-width: 64ch;
		text-wrap: pretty;
	}
	.small {
		font-size: var(--t-small);
		color: var(--muted);
	}
	.cmd {
		display: flex;
		align-items: center;
		gap: var(--s3);
		padding: var(--s2) var(--s2) var(--s2) var(--s4);
		border-radius: var(--r2);
		background: var(--deep);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.cmd code {
		flex: 1;
		min-width: 0;
		overflow-x: auto;
		white-space: nowrap;
		font-size: var(--t-small);
		scrollbar-width: thin;
	}
	.cmd code span {
		margin-inline-end: 1ch;
		color: var(--mode);
		user-select: none;
	}
	.files {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s3);
	}
	a:not(.btn) {
		color: var(--accent);
	}
	.all {
		padding-top: var(--s4);
		border-top: 1px solid var(--line);
		font-size: var(--t-small);
		color: var(--muted);
	}

	.term {
		display: grid;
		gap: var(--s3);
		margin: 0;
		min-width: 0;
	}
	.screen {
		display: grid;
		gap: var(--s3);
		padding: var(--s4);
		overflow-x: auto;
		border-radius: var(--r3);
		background: var(--deep);
		color: var(--text);
		box-shadow: inset 0 0 0 1px var(--line);
		font: 0.8125rem/1.6 var(--font-mono);
	}
	.screen pre {
		margin: 0;
		font: inherit;
	}
	.top {
		font-weight: 700;
	}
	.dim {
		color: var(--muted);
		font-weight: 400;
	}
	.help {
		white-space: pre-wrap;
	}
	.status,
	.help {
		padding-block: var(--s2);
		border-block: 1px solid var(--line);
	}
	.screen ul {
		margin: 0;
		padding: 0;
		list-style: none;
		white-space: pre;
	}
	.screen li {
		padding-inline: 4px;
		border-radius: 3px;
	}
	.screen li.on {
		background: var(--accent);
		color: var(--on-accent);
	}
	.back {
		margin-top: 1.6em;
	}
	figcaption {
		font-size: var(--t-small);
		color: var(--muted);
	}

	@media (min-width: 1040px) {
		.grid {
			grid-template-columns: 1.25fr 1fr;
			align-items: start;
		}
	}
</style>
