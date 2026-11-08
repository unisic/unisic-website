import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: screenshots, schermopnames en OCR voor Linux',
		description:
			"Gratis screenshottool voor Linux. Lange pagina's vastleggen, annoteren, opnemen met geluid, tekst kopiëren met OCR en uploaden. Geen telemetrie, geen account."
	},

	chrome: {
		skip: 'Ga naar inhoud',
		nav: 'Hoofdmenu',
		features: 'Functies',
		themes: "Thema's",
		compare: 'Vergelijking',
		docs: 'Docs',
		pause: 'Animaties pauzeren',
		install: 'Installeren',
		menu: 'Menu',
		language: 'Taal',
		footer: {
			label: 'Voettekst',
			mascot: 'Uni, de mascotte van Unisic',
			legalHtml:
				'Unisic is vrije software onder de <a href="/docs/introduction/#license">GNU GPL v3</a>. Gemaakt door <a href="https://github.com/DeBondor">@DeBondor</a> en <a href="https://github.com/D3anDark">@D3anDark</a>, geïnspireerd door <a href="https://getsharex.com/">ShareX</a> en <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Project',
			community: 'Community',
			capture: 'Vastleggen',
			record: 'Opnemen',
			hotkeys: 'Sneltoetsen',
			compared: 'Vergelijking',
			install: 'Installatie',
			source: 'Broncode op GitHub',
			releases: 'Releases',
			bug: 'Bug melden',
			docs: 'Documentatie',
			kofi: 'Steun op Ko-fi'
		}
	},

	hero: {
		kicker: 'Gratis en open source screenshottool voor Linux',
		title: 'Maak de screenshot. Unisic doet de',
		titleMark: 'rest.',
		lede: "Leg lange pagina's vast, annoteer ze, neem op met geluid, haal de tekst eruit en deel een link.",
		runsOn: 'Draait op',
		more: 'en meer',
		alt: 'De pagina Vastleggen van Unisic: kaarten voor Volledig scherm, Gebied en Venster met hun sneltoetsen, en daaronder de opties voor vastleggen.',
		windows: 'Windows 11, experimenteel',
		download: 'Download het installatieprogramma',
		linuxPackages: 'Linux-pakketten',
		windowsNote: 'Installeert voor jouw gebruiker, zonder beheerdersrechten, werkt zichzelf bij.',
		anyDistro: 'Installeren op elke distributie',
		linuxNote: 'Installeert voor jouw gebruiker, zonder sudo, werkt zichzelf bij.',
		packages: 'Pakketten per distributie, Nix',
		windowsInstaller: 'Windows-installer',
		experimental: 'Experimenteel',
		facts: ['Geen account', 'Geen telemetrie'],
		source: 'Broncode op GitHub'
	},

	copy: {
		copy: 'Kopiëren',
		copied: 'Gekopieerd',
		select: 'Selecteren',
		done: 'Naar klembord gekopieerd',
		failed: 'Klembord geblokkeerd, selecteer de tekst zelf'
	},

	capture: {
		title: 'Elke manier om het scherm vast te leggen.',
		lede: 'Voeg een vertraging tot 60 seconden toe, met of zonder muisaanwijzer.',
		modes: [
			{ name: 'Volledig scherm', say: 'Alle monitoren in één afbeelding.' },
			{ name: 'Gebied', say: 'Trek een kader en teken erop vóór de screenshot.' },
			{ name: 'Venster', say: 'Het actieve venster, verder niets.' }
		],
		scroll: 'Een pagina langer dan je scherm',
		scrolling: 'Scroll omlaag om vast te leggen...',
		finish: 'Voltooien',
		captionHtml:
			'Voer <code>unisic --scroll</code> uit, scroll en druk op Voltooien. Je krijgt één afbeelding.'
	},

	edit: {
		title: 'Annoteer vóór de screenshot, of erna.',
		lede: 'Teken in de overlay en druk op Enter. Snijd bij en verfijn later in de editor.'
	},

	overlay: {
		hint: 'Sleep het kader, kies een gereedschap, teken en druk op Vastleggen.',
		keys: 'Pijltjestoetsen verplaatsen het kader, Enter legt vast, Esc zet terug.',
		tool: 'Gereedschap:',
		headline: 'Selecteer het. Teken erop. Druk op',
		headlineMark: 'Enter.',
		label: 'Demo van de selectie-overlay',
		toolsLabel: 'Gereedschappen',
		colorLabel: 'Kleur',
		tools: {
			select: 'Selecteren',
			pen: 'Pen',
			line: 'Lijn',
			arrow: 'Pijl',
			measure: 'Meten',
			rect: 'Rechthoek',
			ellipse: 'Ellips',
			highlight: 'Markeerstift',
			blur: 'Vervagen',
			step: 'Stapnummer',
			erase: 'Slimme gum'
		},
		colors: ['Rood', 'Geel', 'Groen', 'Blauw', 'Lavendel', 'Wit'],
		undoTitle: 'Ongedaan maken (Ctrl+Z)',
		undo: 'Ongedaan maken',
		capture: 'Vastleggen'
	},

	record: {
		title: 'Neem het scherm op, met geluid.',
		lede: 'GIF, MP4 of WebM. Systeem-, microfoon- en appgeluid op aparte sporen. Instant replay bewaart wat net gebeurde.',
		alt: 'De pagina Schermopname van Unisic: Scherm, Gebied of Venster, WebM-formaat, framerate, CRF-kwaliteit, systeemgeluid, microfoon, app-geluid en een replay-lengte van 30 seconden.',
		format: 'Formaat',
		fps: 'Standaard {fps} beelden per seconde',
		drawn: 'In de opname getekend',
		effects: [
			{ name: 'Aanwijzerhalo', say: 'maakt de cursor makkelijk te vinden' },
			{ name: 'Klikgolven', say: 'tonen waar en wanneer je klikte' },
			{ name: 'Toetsenbadge', say: 'toont de toetsen die je indrukt, standaard uit' }
		]
	},

	read: {
		title: 'Kopieer tekst uit pixels.',
		lede: 'Selecteer tekst op het scherm en plak die overal. Tesseract leest Engels en Pools, zxing-cpp decodeert QR-codes en streepjescodes.',
		region: 'OCR-gebied',
		lines: '{n} regels',
		out: 'Herkende tekst gaat direct naar het klembord.',
		copy: 'Tekst kopiëren',
		qr: 'QR-code voor unisic.app',
		decoded: 'Gedecodeerd'
	},

	share: {
		title: 'Van screenshot naar link met één toets.',
		lede: 'Elke screenshot komt in een geschiedenis met miniaturen. Verwijderen verplaatst het bestand naar de prullenbak.',
		steps: ['Vastleggen', 'Beeld kopiëren', 'Uploaden', 'Link gekopieerd'],
		hosts: 'Overal uploaden.',
		customHttp: 'Eigen HTTP',
		sxcu: '.sxcu-import',
		history: 'Je geschiedenis op deze pagina',
		emptyHtml:
			'Nog niets. Druk op Vastleggen in de <a href="#edit">demo hierboven</a>.'
	},

	toast: {
		captured: 'Vastgelegd: {size}',
		saved: 'Opgeslagen in geschiedenis'
	},

	themes: {
		title: "Zes thema's, zeven talen.",
		lede: 'Systeem volgt je lichte of donkere modus en accentkleur. Kies een thema en deze pagina wisselt mee.',
		label: 'Paginathema',
		system: 'Systeem',
		languages: 'Talen van de interface',
		languagesText:
			'Engels, Pools, Spaans, Italiaans, Frans, Russisch en Duits. Unisic volgt de taal van je bureaublad, tenzij je er een kiest.'
	},

	privacy: {
		title: 'Eén verzoek, en dat kun je uitzetten.',
		lede: 'Geen telemetrie, geen analytics, geen account. Het ene automatische verzoek zoekt op GitHub naar updates en verstuurt niets over jou.',
		log: 'Verzoeken die Unisic uit zichzelf doet',
		when: ['Na het starten', 'Elke 24 u'],
		none: 'Geen automatische verzoeken. In Instellingen staat nog steeds Nu controleren.',
		updates: 'Automatische updates',
		demo: 'Demo van de schakelaar in Instellingen',
		uploads: 'Uploaden gebeurt alleen als jij erom vraagt, en alleen naar de host die je hebt gekozen.',
		sent: 'Wat er precies wordt verzonden'
	},

	compare: {
		title: 'Hoe het zich verhoudt.',
		lede: 'Van deze Linux-tools heeft alleen Unisic alle vier: scrollend vastleggen, opnemen met geluid, OCR en uploads. Elk antwoord is gecontroleerd aan de broncode van de getoonde versie.',
		vs: 'Vergelijk Unisic met',
		caption: 'Screenshottools vergeleken, gecontroleerd op 2026-10-26.',
		say: { y: 'Ja', p: 'Deels', n: 'Nee' },
		rows: [
			{
				feature: 'Tekenen op de selectie-overlay',
				notes: ['Enter brandt het in de uitsnede', '', '', 'Alleen loep en linialen', 'Annoteert een afbeelding van een andere tool', '']
			},
			{ feature: 'Afbeeldingseditor', notes: ['', 'Kan geen bestaande afbeeldingen openen', '', '', '', ''] },
			{ feature: 'Scrollend vastleggen', notes: ['', '', '', '', '', ''] },
			{ feature: 'GIF-opname', notes: ['', '', '', '', '', ''] },
			{ feature: 'Video-opname', notes: ['MP4 en WebM', '', 'Alleen Wayland', '', '', ''] },
			{ feature: 'Geluid in opnames', notes: ['Systeem, microfoon en per app', '', 'Sinds Plasma 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Sinds Plasma 6.6', 'Aparte plug-in', '', ''] },
			{ feature: 'QR-codes lezen', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Eigen uploadbestemmingen',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Alleen Imgur, standaard uit', 'Deelmenu van KDE', 'Imgur, FTP, scripts', '', '.sxcu, FTP, SFTP']
			},
			{ feature: 'Geschiedenis met miniaturen', notes: ['Verwijderen gaat naar de prullenbak', 'Alleen Imgur-uploads', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portals, KWin, PipeWire', 'Portal', 'Alleen KWin', 'Portal of oude KWin-interface', 'Vastleggen via grim', '']
			},
			{ feature: 'X11', notes: ['Tweede doel, zonder garantie', 'Portal of klassiek X11', '', '', 'Niet vermeld', ''] },
			{
				feature: 'Platformen',
				notes: [
					'Linux, Windows\u00a011 (experimenteel)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty annoteert alleen afbeeldingen van andere tools, meestal grim. ksnip op Plasma 6 is niet gecontroleerd. Fout gezien? <a href="https://github.com/unisic/unisic/issues">Open een issue</a>.'
	}
} satisfies Dictionary;
