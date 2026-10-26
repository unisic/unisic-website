<script lang="ts">
	import Chapter from './Chapter.svelte';
	import Copy from './Copy.svelte';
	import { VERSION, WINDOWS_SETUP, asset } from '#lib/release.js';

	const RELEASES = 'https://github.com/unisic/unisic/releases/latest';
	const OBS = 'https://download.opensuse.org/repositories/home:/unisic';

	type Step = { say?: string; cmd?: string };
	type Tab = { id: string; label: string; steps: Step[]; files?: { name: string; href: string }[] };

	const TABS: Tab[] = [
		{
			id: 'any',
			label: 'Any distro',
			steps: [
				{
					say: 'One script with an arrow-key menu. The recommended entry puts the self-updating AppImage in ~/.local without a password. Run it again to update, remove or pick an older version. Every download is checked against its SHA-256.',
					cmd: 'curl -fsSL https://unisic.app/install.sh | bash'
				},
				{ say: 'Read it before it runs:', cmd: 'curl -fsSLO https://unisic.app/install.sh\nless install.sh && bash install.sh' }
			]
		},
		{
			id: 'fedora',
			label: 'Fedora',
			steps: [
				{ say: 'From COPR, so updates arrive with the rest of the system:', cmd: 'sudo dnf copr enable deandark/Unisic && sudo dnf install unisic' },
				{ say: 'A package downloaded from the release adds the COPR repository by itself:', cmd: 'sudo dnf install ./unisic-*.fedora.x86_64.rpm' }
			],
			files: [{ name: 'Download the .rpm', href: asset('unisic-{v}-1.fedora.x86_64.rpm') }]
		},
		{
			id: 'arch',
			label: 'Arch',
			steps: [
				{
					say: 'A signed pacman repository on the openSUSE Build Service, so updates come with pacman -Syu:',
					cmd: [
						`curl -fsSL 'https://build.opensuse.org/projects/home:unisic/signing_keys/download?kind=gpg' -o /tmp/unisic-obs.key`,
						'sudo pacman-key --add /tmp/unisic-obs.key && sudo pacman-key --lsign-key E5057FCB0F3DF876',
						`printf '\\n[home_unisic_Arch]\\nServer = ${OBS}/Arch/$arch\\n' | sudo tee -a /etc/pacman.conf`,
						'sudo pacman -Syu unisic'
					].join('\n')
				},
				{ say: 'Or the package from the release, which adds the same repository by itself:', cmd: 'sudo pacman -U ./unisic-*-x86_64.pkg.tar.zst' }
			],
			files: [{ name: 'Download the .pkg.tar.zst', href: asset('unisic-{v}-1-x86_64.pkg.tar.zst') }]
		},
		{
			id: 'debian',
			label: 'Debian, Ubuntu',
			steps: [
				{
					say: 'A signed apt repository on the openSUSE Build Service, so updates come with apt upgrade. The first line picks Debian 13, Ubuntu 25.10 or 26.04 from /etc/os-release; on a derivative such as Mint, set REPO=xUbuntu_26.04 by hand.',
					cmd: [
						'. /etc/os-release; [ "$ID" = ubuntu ] && REPO=xUbuntu_$VERSION_ID || REPO=Debian_$VERSION_ID',
						`curl -fsSL "${OBS}/$REPO/Release.key" | gpg --dearmor | sudo tee /etc/apt/keyrings/home_unisic.gpg > /dev/null`,
						`echo "deb [signed-by=/etc/apt/keyrings/home_unisic.gpg] ${OBS}/$REPO/ ./" | sudo tee /etc/apt/sources.list.d/home_unisic.list`,
						'sudo apt update && sudo apt install unisic'
					].join('\n')
				},
				{ say: 'Or the package from the release, which adds the same repository by itself:', cmd: 'sudo apt install ./unisic_*_amd64.deb' }
			],
			files: [{ name: 'Download the .deb', href: asset('unisic_{v}_amd64.deb') }]
		},
		{
			id: 'opensuse',
			label: 'openSUSE',
			steps: [
				{
					say: 'A signed repository on the openSUSE Build Service. Accept its signing key when zypper asks. On Tumbleweed:',
					cmd: `sudo zypper addrepo https://download.opensuse.org/repositories/home:unisic/openSUSE_Tumbleweed/home:unisic.repo\nsudo zypper refresh && sudo zypper install unisic`
				},
				{
					say: 'On Leap 16.0:',
					cmd: `sudo zypper addrepo https://download.opensuse.org/repositories/home:unisic/16.0/home:unisic.repo\nsudo zypper refresh && sudo zypper install unisic`
				}
			]
		},
		{
			id: 'nix',
			label: 'Nix',
			steps: [
				{ say: 'Run it straight from the flake:', cmd: 'nix run github:unisic/unisic' },
				{ say: 'Or install it into your profile:', cmd: 'nix profile add github:unisic/unisic' }
			]
		},
		{
			id: 'appimage',
			label: 'AppImage, Flatpak',
			steps: [
				{ say: 'The AppImage runs on its own and replaces itself when a new version is out. It needs fuse, which every desktop distribution ships:', cmd: 'chmod +x Unisic-*-x86_64.AppImage && ./Unisic-*-x86_64.AppImage' },
				{
					say: 'The Flatpak bundle installs for your user and takes the KDE runtime from Flathub:',
					cmd: 'flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo\nflatpak install --user --bundle ./unisic-*-x86_64.flatpak'
				}
			],
			files: [
				{ name: 'Download the AppImage', href: asset('Unisic-{v}-x86_64.AppImage') },
				{ name: 'Download the Flatpak', href: asset('unisic-{v}-x86_64.flatpak') }
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

<Chapter id="install" kicker="Install" title="Pick your system, copy, paste.">
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

			<div class="bodies">
				{#each TABS as t, i (t.id)}
					<div class="panel-body" id="panel-{t.id}" role="tabpanel" aria-labelledby="tab-{t.id}" hidden={active !== i}>
						{#if t.id === 'windows'}
							<p class="say">
								Experimental. Both files install for your user only, need no administrator rights and update themselves.
								Recording a single window does not work yet.
							</p>
							<div class="files">
								<a class="btn primary" href={WINDOWS_SETUP}>Download the installer</a>
								<a class="btn" href={asset('Unisic-{v}-windows-x86_64-experimental.zip')}>Download the zip</a>
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
										<code>
											{#each s.cmd.split('\n') as line, k (k)}
												<span class="line"><span class="ps" aria-hidden="true">$ </span>{line}</span>
											{/each}
										</code>
										<Copy text={s.cmd} />
									</div>
								{/if}
							{/each}
							{#if t.files}
								<div class="files">
									{#each t.files as f (f.href)}<a class="btn" href={f.href}>{f.name}</a>{/each}
								</div>
							{/if}
						{/if}
					</div>
				{/each}
			</div>

			<p class="all">
				Made for Wayland: KDE Plasma natively, GNOME and wlroots desktops through portals. X11 works as a best-effort
				second target; recording a single window needs Wayland.
				Version {VERSION}. Every file, with checksums: <a href={RELEASES}>GitHub releases</a>. Building from source:
				<a href="/docs/installation/#build-from-source">installation docs</a>.
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
		padding: var(--s5);
		min-width: 0;
	}
	/* One row that scrolls sideways on phones, so the panel never jumps down a line per wrap. */
	.tabs {
		display: flex;
		gap: var(--s1);
		margin-inline: calc(-1 * var(--s5));
		padding: 0 var(--s5) var(--s4);
		overflow-x: auto;
		border-bottom: 1px solid var(--line);
		scrollbar-width: none;
	}
	[role='tab'] {
		flex: none;
		min-height: 44px;
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
	/* Every panel stays laid out in the same cell, so the box is as tall as the longest one and
	   switching tabs never moves what is below it. Hidden panels are invisible, not removed. */
	.bodies {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}
	.panel-body {
		grid-area: 1 / 1;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: start;
		gap: var(--s3);
	}
	.panel-body[hidden] {
		visibility: hidden;
	}
	/* On phones the longest panel is taller than the screen, so its bottom is out of view anyway;
	   reserving its height there would only leave a screen of blank box under the short ones. */
	@media (max-width: 759px) {
		.panel-body[hidden] {
			display: none;
		}
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
	@media (max-width: 759px) {
		.cmd {
			align-items: start;
		}
		.cmd code {
			white-space: pre-wrap;
			overflow-wrap: anywhere;
		}
		.cmd .line + .line {
			margin-top: var(--s2);
		}
	}
	.cmd .line {
		display: block;
	}
	.cmd .ps {
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
