/*
 * Every word of the landing page, and the shape every translation must match. Brand names, hotkeys,
 * file formats, commands and URLs stay in the components. Tokens in braces ({n}, {size}, {fps}) are
 * filled at render. Keys ending in Html are rendered as HTML: keep their tags and attributes as they are.
 * Arrays line up with data in the component named in the comment above them: keep their length and order.
 */
export const en = {
	meta: {
		title: 'Unisic: screenshots, recording and OCR for Linux',
		description:
			'Free screenshot tool for Linux. Capture long pages, annotate, record with sound, copy text with OCR and upload. No telemetry, no account.'
	},

	// Topbar, Footer and the skip link, also shown on the English-only docs.
	chrome: {
		skip: 'Skip to content',
		nav: 'Primary',
		features: 'Features',
		themes: 'Themes',
		compare: 'Compare',
		docs: 'Docs',
		pause: 'Pause animations',
		install: 'Install',
		menu: 'Menu',
		language: 'Language',
		footer: {
			label: 'Footer',
			mascot: 'Uni, the Unisic mascot',
			legalHtml:
				'Unisic is free software under the <a href="/docs/introduction/#license">GNU GPL v3</a>. Built by <a href="https://github.com/DeBondor">@DeBondor</a> and <a href="https://github.com/D3anDark">@D3anDark</a>, inspired by <a href="https://getsharex.com/">ShareX</a> and <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Project',
			community: 'Community',
			capture: 'Capture',
			record: 'Record',
			hotkeys: 'Hotkeys',
			compared: 'Compared',
			install: 'Install',
			source: 'Source on GitHub',
			releases: 'Releases',
			bug: 'Report a bug',
			docs: 'Documentation',
			kofi: 'Support on Ko-fi'
		}
	},

	hero: {
		kicker: 'Free and open source screenshot tool for Linux',
		title: 'Take the shot. Unisic handles everything',
		titleMark: 'after.',
		lede: 'Capture long pages, mark them up, record with sound, pull out the text and share a link.',
		runsOn: 'Runs on',
		more: 'and more',
		alt: "Unisic's Capture page: Full screen, Region and Window cards with their shortcuts, and the capture options below.",
		windows: 'Windows 11, experimental',
		download: 'Download the installer',
		linuxPackages: 'Linux packages',
		windowsNote: 'Installs for your user, no administrator rights, updates itself.',
		anyDistro: 'Install on any distro',
		linuxNote: 'Installs for your user, no sudo, updates itself.',
		packages: 'Per-distro packages, Nix',
		windowsInstaller: 'Windows installer',
		experimental: 'Experimental',
		facts: ['No account', 'No telemetry'],
		source: 'Source on GitHub'
	},

	copy: {
		copy: 'Copy',
		copied: 'Copied',
		select: 'Select it',
		done: 'Copied to clipboard',
		failed: 'Clipboard blocked, select the text instead'
	},

	capture: {
		title: 'Every way to grab the screen.',
		lede: 'Add a delay of up to 60 seconds, with or without the cursor.',
		// Capture.svelte KEYS
		modes: [
			{ name: 'Full screen', say: 'All monitors in one image.' },
			{ name: 'Region', say: 'Drag a box and draw on it before the shot.' },
			{ name: 'Window', say: 'The active window, nothing around it.' }
		],
		scroll: 'A page longer than your screen',
		scrolling: 'Scroll down to capture...',
		finish: 'Finish',
		captionHtml:
			'Run <code>unisic --scroll</code>, scroll, press Finish. You get one image.'
	},

	edit: {
		title: 'Mark it up before the shot, or after.',
		lede: 'Draw in the overlay, press Enter. Crop and fix later in the editor.'
	},

	overlay: {
		hint: 'Drag the frame, pick a tool, draw, then press Capture.',
		keys: 'Arrow keys move the frame, Enter captures, Esc resets.',
		tool: 'Tool:',
		// The demo arrow points at the end of headlineMark, so keep it last.
		headline: 'Select it. Draw on it. Press',
		headlineMark: 'Enter.',
		label: 'Capture overlay demo',
		toolsLabel: 'Tools',
		colorLabel: 'Color',
		tools: {
			select: 'Select',
			pen: 'Pen',
			line: 'Line',
			arrow: 'Arrow',
			measure: 'Measure',
			rect: 'Rectangle',
			ellipse: 'Ellipse',
			highlight: 'Highlight',
			blur: 'Blur',
			step: 'Step number',
			erase: 'Smart eraser'
		},
		// Overlay.svelte COLORS
		colors: ['Red', 'Yellow', 'Green', 'Blue', 'Lavender', 'White'],
		undoTitle: 'Undo (Ctrl+Z)',
		undo: 'Undo',
		capture: 'Capture'
	},

	record: {
		title: 'Record the screen, with sound.',
		lede: 'GIF, MP4 or WebM. System, mic and app audio on separate tracks. Instant replay saves what just happened.',
		alt: "Unisic's Screen recording page: Screen, Region or Window, WebM format, frame rate, CRF quality, system audio, microphone, application audio and a replay length of 30 seconds.",
		format: 'Format',
		fps: '{fps} frames per second by default',
		drawn: 'Drawn into the recording',
		effects: [
			{ name: 'Pointer halo', say: 'keeps the cursor easy to spot' },
			{ name: 'Click ripples', say: 'show where and when you clicked' },
			{ name: 'Key badge', say: 'shows the keys you press, off by default' }
		]
	},

	read: {
		title: 'Copy text out of pixels.',
		lede: 'Select text on screen and paste it anywhere. Tesseract reads English and Polish, zxing-cpp decodes QR codes and barcodes.',
		region: 'OCR region',
		lines: '{n} lines',
		out: 'Recognized text goes straight to the clipboard.',
		copy: 'Copy text',
		qr: 'QR code for unisic.app',
		decoded: 'Decoded'
	},

	share: {
		title: 'From shot to link in one key.',
		lede: 'Every capture lands in a history with thumbnails. Deleting one moves the file to the trash.',
		steps: ['Capture', 'Copy image', 'Upload', 'Link copied'],
		hosts: 'Upload anywhere.',
		customHttp: 'Custom HTTP',
		sxcu: '.sxcu import',
		history: 'Your history on this page',
		emptyHtml:
			'Nothing yet. Press Capture in the <a href="#edit">demo above</a>.'
	},

	toast: {
		captured: 'Captured {size}',
		saved: 'Saved to history'
	},

	themes: {
		title: 'Six themes, seven languages.',
		lede: 'System follows your light or dark mode and accent color. Pick a theme and this page switches too.',
		label: 'Page theme',
		system: 'System',
		languages: 'Interface languages',
		languagesText:
			'English, Polish, Spanish, Italian, French, Russian and German. Unisic follows your desktop language unless you pick one.'
	},

	privacy: {
		title: 'One request, and you can turn it off.',
		lede: 'No telemetry, no analytics, no account. The one automatic request checks GitHub for updates and sends nothing about you.',
		log: 'Requests Unisic makes on its own',
		when: ['After start', 'Every 24 h'],
		none: 'No automatic requests. Settings still has Check now.',
		updates: 'Automatic updates',
		demo: 'Demo of the switch in Settings',
		uploads: 'Uploads happen only when you ask, and only to the host you picked.',
		sent: 'What exactly is sent'
	},

	compare: {
		title: 'How it compares.',
		// No other Linux column in Compare.svelte MARKS has a yes in all four rows.
		lede: 'Of these Linux tools, only Unisic has all four: scrolling capture, recording with sound, OCR and uploads. Every answer is checked against the source of the version shown.',
		vs: 'Compare Unisic with',
		caption: 'Screenshot tools compared, checked 2026-10-26.',
		say: { y: 'Yes', p: 'Partly', n: 'No' },
		// Compare.svelte MARKS: one note per tool (Unisic, Flameshot, Spectacle, ksnip, Satty, ShareX), '' for none.
		rows: [
			{
				feature: 'Draw on the capture overlay',
				notes: ['Enter burns it into the crop', '', '', 'Magnifier and rulers only', 'Annotates an image taken by another tool', '']
			},
			{ feature: 'Image editor', notes: ['', 'Cannot open existing images', '', '', '', ''] },
			{ feature: 'Scrolling capture', notes: ['', '', '', '', '', ''] },
			{ feature: 'GIF recording', notes: ['', '', '', '', '', ''] },
			{ feature: 'Video recording', notes: ['MP4 and WebM', '', 'Wayland only', '', '', ''] },
			{ feature: 'Sound in recordings', notes: ['System, mic and per app', '', 'Since Plasma 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Since Plasma 6.6', 'Separate plugin', '', ''] },
			{ feature: 'QR code reading', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Custom upload targets',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Imgur only, off by default', 'KDE Share menu', 'Imgur, FTP, scripts', '', '.sxcu, FTP, SFTP']
			},
			{ feature: 'History with thumbnails', notes: ['Deleting moves to the trash', 'Imgur uploads only', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portals, KWin, PipeWire', 'Portal', 'KWin only', 'Portal or legacy KWin', 'Capture left to grim', '']
			},
			{ feature: 'X11', notes: ['Best-effort second target', 'Portal or legacy X11', '', '', 'Not stated', ''] },
			{
				feature: 'Platforms',
				notes: [
					'Linux, Windows\u00a011 (experimental)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty only annotates images from other tools, usually grim. ksnip on Plasma 6 was not checked. Spot a mistake? <a href="https://github.com/unisic/unisic/issues">Open an issue</a>.'
	}
};

/* Every translation must match this shape; values widen to string, so different copy still fits. */
export type Dictionary = typeof en;
