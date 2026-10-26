import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: screenshots, schermopnames en OCR voor Linux',
		description:
			'Unisic tekent op de selectie vóór de screenshot, neemt GIF en video op, leest tekst uit pixels en uploadt. Een screenshottool voor Linux Wayland zonder telemetrie.'
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
		kicker: 'Gratis en open source screenshottool voor Linux Wayland',
		title: 'Maak de screenshot. Unisic doet de',
		titleMark: 'rest.',
		lede: 'Leg een gebied of een pagina langer dan je scherm vast, annoteer het, neem het op met geluid, haal de tekst eruit en upload het als link. Alles in één gratis app.',
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
		windowsInstaller: 'Windows-installatieprogramma',
		experimental: 'Experimenteel',
		facts: ['Gratis, GPL-3.0', 'Geen account', 'Geen telemetrie'],
		source: 'Broncode op GitHub'
	},

	copy: {
		copy: 'Kopiëren',
		copied: 'Gekopieerd',
		select: 'Selecteren',
		done: 'Naar klembord gekopieerd',
		failed: 'Klembord geblokkeerd, selecteer de tekst zelf'
	},

	why: {
		title: 'Waarom Unisic.',
		ledeHtml:
			'Van de tools in de <a href="#compare">vergelijking</a> hebben alleen Unisic en ShareX elke functie, en ShareX draait alleen op Windows.',
		see: 'Bekijken',
		points: [
			{
				title: 'Scrollend vastleggen',
				text: 'Een pagina die langer is dan het scherm wordt één afbeelding. Flameshot, Spectacle, ksnip en Satty kunnen niet scrollend vastleggen.'
			},
			{
				title: 'Opnemen met geluid',
				text: 'Hetzelfde gebied als GIF, MP4 of WebM, met systeemgeluid, de microfoon of één app op een eigen spoor.'
			},
			{
				title: 'Tekst en QR-codes',
				text: 'Kopieer de tekst uit elke screenshot, of haal de link uit een QR-code of streepjescode.'
			},
			{
				title: 'Uploads en geschiedenis',
				text: 'Je eigen server via HTTP, FTP of SFTP, of een .sxcu-configuratie van ShareX, en een miniatuur van elke screenshot in de geschiedenis.'
			}
		]
	},

	capture: {
		kicker: 'Vastleggen',
		title: 'Elke manier om het scherm vast te leggen.',
		lede: 'Volledig scherm over alle monitoren, een gebied met live afmetingen, het actieve venster, of een pagina die langer is dan je scherm. Voeg een vertraging tot 60 seconden en de muisaanwijzer toe als je ze nodig hebt.',
		modes: [
			{ name: 'Volledig scherm', say: 'Alle monitoren in één afbeelding.' },
			{ name: 'Gebied', say: 'Trek een kader met live afmetingen en annoteer het vóór de screenshot.' },
			{ name: 'Venster', say: 'Het actieve venster, verder niets.' }
		],
		scroll: 'Een pagina langer dan je scherm',
		scrolling: 'Scroll omlaag om vast te leggen...',
		finish: 'Voltooien',
		captionHtml:
			'Start het met <code>unisic --scroll</code>, scroll door de pagina en druk op Voltooien. De stukken worden samengevoegd tot één afbeelding.'
	},

	edit: {
		kicker: 'Annoteren en bewerken',
		title: 'Annoteer vóór de screenshot, of erna.',
		lede: 'Teken pijlen, vormen, vervaging en genummerde stappen direct in de selectie-overlay en druk dan op Enter om ze in de uitsnede te branden. Probeer het hieronder. De editor gaat daarna verder, met bijsnijden, ongedaan maken en zoomen.'
	},

	overlay: {
		hint: 'Sleep het kader of de grepen, kies een gereedschap en teken erin, en druk dan op Vastleggen.',
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
		kicker: 'Opnemen',
		title: 'Neem het scherm op, met geluid.',
		lede: 'Een gebied, het volledige scherm of een venster, opgeslagen als GIF, MP4 of WebM. Systeemgeluid, de microfoon en losse apps komen op aparte sporen, en instant replay bewaart het laatste stuk van je scherm.',
		alt: 'De pagina Schermopname van Unisic: Scherm, Gebied of Venster, WebM-formaat, framerate, CRF-kwaliteit, systeemgeluid, microfoon, app-geluid en een replay-lengte van 30 seconden.',
		format: 'Formaat',
		fps: 'Standaard {fps} beelden per seconde',
		drawn: 'In de opname getekend',
		effects: [
			{ name: 'Aanwijzerhalo', say: 'houdt de cursor goed vindbaar in een verkleinde video' },
			{ name: 'Klikgolven', say: 'tonen waar en wanneer je klikte' },
			{ name: 'Toetsenbadge', say: 'toont de sneltoetsen die je indrukt, uit tot je hem aanzet' }
		]
	},

	read: {
		kicker: 'OCR en QR',
		title: 'Kopieer tekst uit pixels.',
		lede: 'Selecteer tekst op je scherm en krijg die terug als tekst. Tesseract doet het lezen, met Pools en Engels en automatische taalherkenning. Richt Unisic op een QR-code of streepjescode en zxing-cpp geeft je wat erin staat.',
		region: 'OCR-gebied',
		lines: '{n} regels',
		out: 'Herkende tekst gaat direct naar het klembord.',
		copy: 'Tekst kopiëren',
		qr: 'QR-code voor unisic.app',
		decoded: 'Gedecodeerd'
	},

	share: {
		kicker: 'Delen en geschiedenis',
		title: 'Van screenshot naar link met één toets.',
		lede: 'Na het vastleggen kan Unisic de afbeelding kopiëren, opslaan, uploaden en de link op je klembord zetten. Elke screenshot komt in een geschiedenis met miniaturen, en verwijderen verplaatst het bestand naar de prullenbak in plaats van het te wissen.',
		steps: ['Vastleggen', 'Beeld kopiëren', 'Uploaden', 'Link gekopieerd'],
		hosts: 'Overal uploaden.',
		customHttp: 'Eigen HTTP',
		sxcu: '.sxcu-import',
		history: 'Je geschiedenis op deze pagina',
		emptyHtml:
			'Nog niets. Trek boven in de <a href="#edit">editordemo</a> een selectie en druk op Vastleggen. Het resultaat verschijnt hier.'
	},

	toast: {
		captured: 'Vastgelegd: {size}',
		saved: 'Opgeslagen in geschiedenis'
	},

	themes: {
		kicker: "Thema's en talen",
		title: 'Jouw kleuren, jouw taal.',
		lede: "Unisic heeft zes thema's, plus één dat het lichte of donkere schema en de accentkleur van je systeem volgt. Kies er hieronder een en deze pagina wisselt mee.",
		label: 'Paginathema',
		system: 'Systeem',
		languages: 'Talen van de interface',
		languagesText:
			'Engels, Pools, Spaans, Italiaans, Frans, Russisch en Duits. Unisic volgt de taal van je bureaublad, tenzij je er een kiest in Instellingen.'
	},

	privacy: {
		kicker: 'Privacy',
		title: 'Eén verzoek, en dat kun je uitzetten.',
		lede: 'Geen telemetrie, geen analytics, geen account. Het enige verzoek dat Unisic uit zichzelf doet, vraagt GitHub of er een nieuwere release is, kort na het starten en daarna één keer per dag. Er wordt niets over jou of je screenshots verzonden.',
		log: 'Verzoeken die Unisic uit zichzelf doet',
		when: ['Na het starten', 'Elke 24 u'],
		none: 'Geen automatische verzoeken. In Instellingen blijft een knop Nu controleren voor als je er een wilt.',
		updates: 'Automatische updates',
		demo: 'Demo van de schakelaar in Instellingen',
		uploads: 'Uploaden gebeurt alleen als je op Uploaden drukt of uploaden na het vastleggen aanzet, en alleen naar de host die je hebt gekozen.',
		sent: 'Wat er precies wordt verzonden'
	},

	compare: {
		kicker: 'Vergelijking',
		title: 'Hoe het zich verhoudt tot de rest.',
		lede: 'Zes tools, dezelfde vragen. Elk antwoord is gecontroleerd aan de hand van de broncode, README of releasenotes van de tool voor de versie in de kop, zodat jij het ook kunt nagaan.',
		vs: 'Vergelijk Unisic met',
		caption: 'Screenshottools vergeleken. Gecontroleerd op 2026-10-26 aan de hand van getagde broncode.',
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
					'Linux, Windows 11 (experimenteel)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty annoteert alleen: de afbeelding komt uit een bestand of standaardinvoer, meestal van grim. Het gedrag van ksnip op Plasma 6 is niet gecontroleerd. Fout gezien? <a href="https://github.com/unisic/unisic/issues">Open een issue</a>.'
	}
} satisfies Dictionary;
