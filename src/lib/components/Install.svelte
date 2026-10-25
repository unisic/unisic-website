<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Copy from './Copy.svelte';

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
					say: 'One script with an arrow-key menu. The recommended entry puts the self-updating AppImage in ~/.local without a password. Run it again to update, remove or pick an older version. Every download is checked against its SHA-256.',
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

	let active = $state(0);
	let tabs: HTMLButtonElement[] = [];

	$effect(() => {
		if (/Windows/.test(navigator.userAgent)) active = TABS.length - 1;
	});

	function select(i: number, focus = false) {
		active = i;
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

<Chapter id="install" num="09" mode="shot" kicker="Install" title="Installed in one line.">
	<div class="wrap">
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
	</div>
</Chapter>

<style>
	.box {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: start;
		gap: var(--s5);
		max-width: 72ch;
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
</style>
