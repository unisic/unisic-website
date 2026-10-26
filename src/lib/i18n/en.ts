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
			'Unisic draws on the selection before the shot, records GIF and video, reads text out of pixels and uploads the result. A screenshot tool for Linux Wayland with zero telemetry.'
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
		kicker: 'Free and open source screenshot tool for Linux Wayland',
		title: 'Take the shot. Unisic handles everything',
		titleMark: 'after.',
		lede: 'Capture a region or a page longer than your screen, mark it up, record it with sound, pull the text out and upload a link. All in one free app.',
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
		facts: ['Free, GPL-3.0', 'No account', 'No telemetry'],
		source: 'Source on GitHub'
	},

	copy: {
		copy: 'Copy',
		copied: 'Copied',
		select: 'Select it',
		done: 'Copied to clipboard',
		failed: 'Clipboard blocked, select the text instead'
	},

	why: {
		title: 'Why Unisic.',
		ledeHtml:
			'Of the tools in the <a href="#compare">comparison</a>, only Unisic and ShareX have every feature, and ShareX runs only on Windows.',
		see: 'See it',
		// Why.svelte HREFS
		points: [
			{
				title: 'Scrolling capture',
				text: 'A page longer than the screen comes out as one image. Flameshot, Spectacle, ksnip and Satty have no scrolling capture.'
			},
			{
				title: 'Recording with sound',
				text: 'The same region as a GIF, MP4 or WebM, with system sound, the microphone or one app on its own track.'
			},
			{
				title: 'Text and QR codes',
				text: 'Copy the text out of any capture, or get the link inside a QR code or barcode.'
			},
			{
				title: 'Uploads and history',
				text: 'Your own server over HTTP, FTP or SFTP, or a ShareX .sxcu config, and a thumbnail of every capture in the history.'
			}
		]
	},

	capture: {
		kicker: 'Capture',
		title: 'Every way to grab the screen.',
		lede: 'Full screen across monitors, a region with live dimensions, the active window, or a page longer than your screen. Add a delay of up to 60 seconds and the cursor when you need them.',
		// Capture.svelte KEYS
		modes: [
			{ name: 'Full screen', say: 'All monitors in one image.' },
			{ name: 'Region', say: 'Drag a box with live dimensions and mark it up before the shot.' },
			{ name: 'Window', say: 'The active window, nothing around it.' }
		],
		scroll: 'A page longer than your screen',
		scrolling: 'Scroll down to capture...',
		finish: 'Finish',
		captionHtml:
			'Start it with <code>unisic --scroll</code>, scroll the page, press Finish. The pieces are stitched into one image.'
	},

	edit: {
		kicker: 'Annotate and edit',
		title: 'Mark it up before the shot, or after.',
		lede: 'Draw arrows, shapes, blur and numbered steps right in the capture overlay, then press Enter to burn them into the crop. Try it below. The editor picks up from there, with crop, undo and zoom.'
	},

	overlay: {
		hint: 'Drag the frame or its handles, pick a tool and draw inside it, then press Capture.',
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
		kicker: 'Record',
		title: 'Record the screen, with sound.',
		lede: 'A region, the full screen or a window, saved as GIF, MP4 or WebM. System sound, the microphone and single apps land on separate tracks, and instant replay keeps the last stretch of the screen.',
		alt: "Unisic's Screen recording page: Screen, Region or Window, WebM format, frame rate, CRF quality, system audio, microphone, application audio and a replay length of 30 seconds.",
		format: 'Format',
		fps: '{fps} frames per second by default',
		drawn: 'Drawn into the recording',
		effects: [
			{ name: 'Pointer halo', say: 'keeps the cursor easy to find in a scaled-down video' },
			{ name: 'Click ripples', say: 'show where and when you clicked' },
			{ name: 'Key badge', say: 'shows the shortcuts you press, off until you turn it on' }
		]
	},

	read: {
		kicker: 'OCR and QR',
		title: 'Copy text out of pixels.',
		lede: 'Select any text on screen and get it back as text. Tesseract does the reading, with Polish and English and automatic language detection. Point Unisic at a QR code or a barcode and zxing-cpp hands you what it encodes.',
		region: 'OCR region',
		lines: '{n} lines',
		out: 'Recognized text goes straight to the clipboard.',
		copy: 'Copy text',
		qr: 'QR code for unisic.app',
		decoded: 'Decoded'
	},

	share: {
		kicker: 'Share and history',
		title: 'From shot to link in one key.',
		lede: 'After a capture Unisic can copy the image, save it, upload it and put the link on your clipboard. Every capture lands in a history with thumbnails, and deleting one moves the file to the trash instead of erasing it.',
		steps: ['Capture', 'Copy image', 'Upload', 'Link copied'],
		hosts: 'Upload anywhere.',
		customHttp: 'Custom HTTP',
		sxcu: '.sxcu import',
		history: 'Your history on this page',
		emptyHtml:
			'Nothing yet. Drag a selection in the <a href="#edit">editor demo</a> above and press Capture; it shows up here.'
	},

	toast: {
		captured: 'Captured {size}',
		saved: 'Saved to history'
	},

	themes: {
		kicker: 'Themes and languages',
		title: 'Your colors, your language.',
		lede: "Six themes ship with Unisic, plus one that follows your system's light or dark scheme and accent color. Pick one below and this page switches with it.",
		label: 'Page theme',
		system: 'System',
		languages: 'Interface languages',
		languagesText:
			"English, Polish, Spanish, Italian, French, Russian and German. Unisic follows your desktop's language unless you pick one in Settings."
	},

	privacy: {
		kicker: 'Privacy',
		title: 'One request, and you can turn it off.',
		lede: 'No telemetry, no analytics, no account. The only request Unisic makes on its own asks GitHub whether there is a newer release, shortly after it starts and once a day after that. Nothing about you or your captures is sent.',
		log: 'Requests Unisic makes on its own',
		when: ['After start', 'Every 24 h'],
		none: 'No automatic requests. Settings keeps a Check now button for when you want one.',
		updates: 'Automatic updates',
		demo: 'Demo of the switch in Settings',
		uploads: 'Uploads happen only when you press Upload or turn on upload after capture, and only to the host you picked.',
		sent: 'What exactly is sent'
	},

	compare: {
		kicker: 'Compared',
		title: 'Where it stands among the others.',
		lede: "Six tools, the same questions. Every answer was checked against the tool's source, README or release notes for the version in the header, so you can check it too.",
		vs: 'Compare Unisic with',
		caption: 'Screenshot tools compared. Checked 2026-10-26 against tagged source.',
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
					'Linux, Windows 11 (experimental)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty only annotates: the image comes from a file or standard input, usually from grim. ksnip\'s behaviour on Plasma 6 was not checked. Spot a mistake? <a href="https://github.com/unisic/unisic/issues">Open an issue</a>.'
	}
};

/* Every translation must match this shape; values widen to string, so different copy still fits. */
export type Dictionary = typeof en;
