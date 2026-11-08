import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: Screenshots, Bildschirmaufzeichnung und OCR für Linux',
		description:
			'Kostenloses Screenshot-Tool für Linux. Lange Seiten aufnehmen, beschriften, mit Ton aufzeichnen, Text per OCR kopieren und hochladen. Keine Telemetrie, kein Konto.'
	},

	chrome: {
		skip: 'Zum Inhalt springen',
		nav: 'Hauptnavigation',
		features: 'Funktionen',
		themes: 'Farbschemata',
		compare: 'Vergleich',
		docs: 'Doku',
		pause: 'Animationen anhalten',
		install: 'Installieren',
		menu: 'Menü',
		language: 'Sprache',
		footer: {
			label: 'Fußzeile',
			mascot: 'Uni, das Maskottchen von Unisic',
			legalHtml:
				'Unisic ist freie Software unter der <a href="/docs/introduction/#license">GNU GPL v3</a>. Entwickelt von <a href="https://github.com/DeBondor">@DeBondor</a> und <a href="https://github.com/D3anDark">@D3anDark</a>, inspiriert von <a href="https://getsharex.com/">ShareX</a> und <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Projekt',
			community: 'Community',
			capture: 'Aufnahme',
			record: 'Aufzeichnung',
			hotkeys: 'Tastenkürzel',
			compared: 'Vergleich',
			install: 'Installation',
			source: 'Quellcode auf GitHub',
			releases: 'Releases',
			bug: 'Fehler melden',
			docs: 'Dokumentation',
			kofi: 'Auf Ko-fi unterstützen'
		}
	},

	hero: {
		kicker: 'Kostenloses Open-Source-Screenshot-Tool für Linux',
		title: 'Aufnehmen. Unisic erledigt den',
		titleMark: 'Rest.',
		lede: 'Lange Seiten aufnehmen, beschriften, mit Ton aufzeichnen, Text herausholen und per Link teilen.',
		runsOn: 'Läuft auf',
		more: 'und mehr',
		alt: 'Die Seite Aufnahme in Unisic: Karten für Vollbild, Bereich und Fenster mit ihren Tastenkürzeln, darunter die Aufnahmeoptionen.',
		windows: 'Windows 11, experimentell',
		download: 'Installationsprogramm herunterladen',
		linuxPackages: 'Linux-Pakete',
		windowsNote: 'Installiert für Ihr Benutzerkonto, ohne Administratorrechte, aktualisiert sich selbst.',
		anyDistro: 'Auf jeder Distribution installieren',
		linuxNote: 'Installiert für Ihr Benutzerkonto, ohne sudo, aktualisiert sich selbst.',
		packages: 'Pakete je Distribution, Nix',
		windowsInstaller: 'Windows-Installer',
		experimental: 'Experimentell',
		facts: ['Kein Konto', 'Keine Telemetrie'],
		source: 'Quellcode auf GitHub'
	},

	copy: {
		copy: 'Kopieren',
		copied: 'Kopiert',
		select: 'Auswählen',
		done: 'In die Zwischenablage kopiert',
		failed: 'Zwischenablage gesperrt, wählen Sie den Text stattdessen aus'
	},

	capture: {
		title: 'Alle Wege, den Bildschirm aufzunehmen.',
		lede: 'Mit Verzögerung bis zu 60 Sekunden, mit oder ohne Mauszeiger.',
		modes: [
			{ name: 'Vollbild', say: 'Alle Monitore in einem Bild.' },
			{ name: 'Bereich', say: 'Ziehen Sie einen Rahmen auf und zeichnen Sie vor der Aufnahme darauf.' },
			{ name: 'Fenster', say: 'Das aktive Fenster, sonst nichts.' }
		],
		scroll: 'Eine Seite, länger als Ihr Bildschirm',
		scrolling: 'Nach unten scrollen zum Aufnehmen...',
		finish: 'Fertigstellen',
		captionHtml:
			'Starten Sie <code>unisic --scroll</code>, scrollen Sie, klicken Sie auf Fertigstellen. Heraus kommt ein Bild.'
	},

	edit: {
		title: 'Beschriften Sie vor der Aufnahme oder danach.',
		lede: 'Zeichnen Sie im Overlay und drücken Sie Enter. Zuschneiden und Korrigieren geht später im Editor.'
	},

	overlay: {
		hint: 'Ziehen Sie den Rahmen, wählen Sie ein Werkzeug, zeichnen Sie und klicken Sie auf Aufnahme.',
		keys: 'Pfeiltasten verschieben den Rahmen, Enter nimmt auf, Esc setzt zurück.',
		tool: 'Werkzeug:',
		headline: 'Auswählen. Darauf zeichnen.',
		headlineMark: 'Enter drücken.',
		label: 'Demo des Auswahl-Overlays',
		toolsLabel: 'Werkzeuge',
		colorLabel: 'Farbe',
		tools: {
			select: 'Auswählen',
			pen: 'Stift',
			line: 'Linie',
			arrow: 'Pfeil',
			measure: 'Messen',
			rect: 'Rechteck',
			ellipse: 'Ellipse',
			highlight: 'Marker',
			blur: 'Weichzeichnen',
			step: 'Schrittmarke',
			erase: 'Kluger Radierer'
		},
		colors: ['Rot', 'Gelb', 'Grün', 'Blau', 'Lavendel', 'Weiß'],
		undoTitle: 'Rückgängig (Ctrl+Z)',
		undo: 'Rückgängig',
		capture: 'Aufnahme'
	},

	record: {
		title: 'Den Bildschirm aufzeichnen, mit Ton.',
		lede: 'GIF, MP4 oder WebM. System-, Mikrofon- und App-Ton auf getrennten Spuren. Die Sofortwiedergabe speichert, was gerade passiert ist.',
		alt: 'Die Seite Bildschirmaufnahme in Unisic: Bildschirm, Bereich oder Fenster, Format WebM, Bildrate, CRF-Qualität, Systemton, Mikrofon, Anwendungston und eine Wiedergabelänge von 30 Sekunden.',
		format: 'Format',
		fps: 'Standardmäßig {fps} Bilder pro Sekunde',
		drawn: 'In die Aufzeichnung gezeichnet',
		effects: [
			{ name: 'Zeigerschein', say: 'macht den Mauszeiger leicht auffindbar' },
			{ name: 'Klickwellen', say: 'zeigen, wo und wann Sie geklickt haben' },
			{ name: 'Tastenanzeige', say: 'zeigt die gedrückten Tasten, standardmäßig aus' }
		]
	},

	read: {
		title: 'Text aus Pixeln kopieren.',
		lede: 'Wählen Sie Text auf dem Bildschirm aus und fügen Sie ihn überall ein. Tesseract liest Englisch und Polnisch, zxing-cpp dekodiert QR-Codes und Barcodes.',
		region: 'OCR-Bereich',
		lines: '{n} Zeilen',
		out: 'Erkannter Text landet direkt in der Zwischenablage.',
		copy: 'Text kopieren',
		qr: 'QR-Code für unisic.app',
		decoded: 'Dekodiert'
	},

	share: {
		title: 'Von der Aufnahme zum Link mit einer Taste.',
		lede: 'Jede Aufnahme landet in einem Verlauf mit Vorschaubildern. Beim Löschen wandert die Datei in den Papierkorb.',
		steps: ['Aufnahme', 'Bild kopieren', 'Hochladen', 'Link kopiert'],
		hosts: 'Überall hochladen.',
		customHttp: 'Eigenes HTTP',
		sxcu: '.sxcu-Import',
		history: 'Ihr Verlauf auf dieser Seite',
		emptyHtml:
			'Noch nichts da. Klicken Sie in der <a href="#edit">Demo oben</a> auf Aufnahme.'
	},

	toast: {
		captured: 'Aufgenommen: {size}',
		saved: 'Im Verlauf gespeichert'
	},

	themes: {
		title: 'Sechs Farbschemata, sieben Sprachen.',
		lede: 'System folgt Ihrem hellen oder dunklen Modus und der Akzentfarbe. Wählen Sie ein Schema, und diese Seite wechselt mit.',
		label: 'Farbschema der Seite',
		system: 'System',
		languages: 'Sprachen der Oberfläche',
		languagesText:
			'Englisch, Polnisch, Spanisch, Italienisch, Französisch, Russisch und Deutsch. Unisic folgt der Sprache Ihres Desktops, sofern Sie keine andere wählen.'
	},

	privacy: {
		title: 'Eine Anfrage, und die lässt sich abschalten.',
		lede: 'Keine Telemetrie, keine Analyse, kein Konto. Die einzige automatische Anfrage prüft bei GitHub auf Updates und sendet nichts über Sie.',
		log: 'Anfragen, die Unisic von sich aus stellt',
		when: ['Nach dem Start', 'Alle 24 h'],
		none: 'Keine automatischen Anfragen. In den Einstellungen gibt es weiterhin „Jetzt prüfen“.',
		updates: 'Automatische Aktualisierungen',
		demo: 'Demo des Schalters in den Einstellungen',
		uploads: 'Hochgeladen wird nur auf Ihren Wunsch, und nur zu dem Host, den Sie gewählt haben.',
		sent: 'Was genau gesendet wird'
	},

	compare: {
		title: 'So schneidet es ab.',
		lede: 'Von diesen Linux-Tools hat nur Unisic alle vier: Aufnahme mit Scrollen, Aufzeichnung mit Ton, OCR und Uploads. Jede Antwort ist am Quellcode der angezeigten Version geprüft.',
		vs: 'Unisic vergleichen mit',
		caption: 'Screenshot-Tools im Vergleich, geprüft am 2026-10-26.',
		say: { y: 'Ja', p: 'Teilweise', n: 'Nein' },
		rows: [
			{
				feature: 'Zeichnen im Auswahl-Overlay',
				notes: ['Enter brennt es in den Ausschnitt ein', '', '', 'Nur Lupe und Lineale', 'Beschriftet ein Bild aus einem anderen Tool', '']
			},
			{ feature: 'Bildeditor', notes: ['', 'Kann keine vorhandenen Bilder öffnen', '', '', '', ''] },
			{ feature: 'Aufnahme mit Scrollen', notes: ['', '', '', '', '', ''] },
			{ feature: 'GIF-Aufzeichnung', notes: ['', '', '', '', '', ''] },
			{ feature: 'Videoaufzeichnung', notes: ['MP4 und WebM', '', 'Nur Wayland', '', '', ''] },
			{ feature: 'Ton in Aufzeichnungen', notes: ['System, Mikrofon und je App', '', 'Seit Plasma 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Seit Plasma 6.6', 'Eigenes Plugin', '', ''] },
			{ feature: 'QR-Codes lesen', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Eigene Upload-Ziele',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Nur Imgur, standardmäßig aus', 'Teilen-Menü von KDE', 'Imgur, FTP, Skripte', '', '.sxcu, FTP, SFTP']
			},
			{ feature: 'Verlauf mit Vorschaubildern', notes: ['Löschen verschiebt in den Papierkorb', 'Nur Imgur-Uploads', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portale, KWin, PipeWire', 'Portal', 'Nur KWin', 'Portal oder alte KWin-Schnittstelle', 'Aufnahme übernimmt grim', '']
			},
			{ feature: 'X11', notes: ['Zweitziel, ohne Garantie', 'Portal oder klassisches X11', '', '', 'Nicht angegeben', ''] },
			{
				feature: 'Plattformen',
				notes: [
					'Linux, Windows\u00a011 (experimentell)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty beschriftet nur Bilder aus anderen Tools, meist von grim. ksnip unter Plasma 6 wurde nicht geprüft. Einen Fehler entdeckt? <a href="https://github.com/unisic/unisic/issues">Öffnen Sie ein Issue</a>.'
	}
} satisfies Dictionary;
