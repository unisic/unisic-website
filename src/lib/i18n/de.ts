import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: Screenshots, Bildschirmaufzeichnung und OCR für Linux',
		description:
			'Unisic beschriftet die Auswahl vor der Aufnahme, zeichnet GIF und Video auf, liest Text aus Pixeln und lädt hoch. Screenshot-Tool für Linux Wayland ohne Telemetrie.'
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
		kicker: 'Kostenloses Open-Source-Screenshot-Tool für Linux Wayland',
		title: 'Machen Sie die Aufnahme. Unisic erledigt alles',
		titleMark: 'Weitere.',
		lede: 'Nehmen Sie einen Bereich auf oder eine Seite, die länger ist als Ihr Bildschirm, beschriften Sie sie, zeichnen Sie sie mit Ton auf, holen Sie den Text heraus und teilen Sie sie per Link. Alles in einer kostenlosen App.',
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
		windowsInstaller: 'Windows-Installationsprogramm',
		experimental: 'Experimentell',
		facts: ['Kostenlos, GPL-3.0', 'Kein Konto', 'Keine Telemetrie'],
		source: 'Quellcode auf GitHub'
	},

	copy: {
		copy: 'Kopieren',
		copied: 'Kopiert',
		select: 'Auswählen',
		done: 'In die Zwischenablage kopiert',
		failed: 'Zwischenablage gesperrt, wählen Sie den Text stattdessen aus'
	},

	why: {
		title: 'Warum Unisic.',
		ledeHtml:
			'Von den Tools im <a href="#compare">Vergleich</a> haben nur Unisic und ShareX alle Funktionen, und ShareX läuft nur unter Windows.',
		see: 'Ansehen',
		points: [
			{
				title: 'Aufnahme mit Scrollen',
				text: 'Eine Seite, die länger ist als der Bildschirm, wird zu einem Bild. Flameshot, Spectacle, ksnip und Satty bieten keine Aufnahme mit Scrollen.'
			},
			{
				title: 'Aufzeichnung mit Ton',
				text: 'Derselbe Bereich als GIF, MP4 oder WebM, mit Systemton, Mikrofon oder einer einzelnen App auf eigener Spur.'
			},
			{
				title: 'Text und QR-Codes',
				text: 'Kopieren Sie den Text aus jeder Aufnahme oder holen Sie den Link aus einem QR-Code oder Barcode.'
			},
			{
				title: 'Uploads und Verlauf',
				text: 'Ihr eigener Server über HTTP, FTP oder SFTP oder eine .sxcu-Konfiguration von ShareX, dazu ein Vorschaubild jeder Aufnahme im Verlauf.'
			}
		]
	},

	capture: {
		kicker: 'Aufnahme',
		title: 'Alle Wege, den Bildschirm aufzunehmen.',
		lede: 'Vollbild über alle Monitore, ein Bereich mit Live-Maßen, das aktive Fenster oder eine Seite, die länger ist als Ihr Bildschirm. Bei Bedarf kommen eine Verzögerung von bis zu 60 Sekunden und der Mauszeiger dazu.',
		modes: [
			{ name: 'Vollbild', say: 'Alle Monitore in einem Bild.' },
			{ name: 'Bereich', say: 'Ziehen Sie einen Rahmen mit Live-Maßen auf und beschriften Sie ihn vor der Aufnahme.' },
			{ name: 'Fenster', say: 'Das aktive Fenster, sonst nichts.' }
		],
		scroll: 'Eine Seite, länger als Ihr Bildschirm',
		scrolling: 'Nach unten scrollen zum Aufnehmen...',
		finish: 'Fertigstellen',
		captionHtml:
			'Starten Sie mit <code>unisic --scroll</code>, scrollen Sie die Seite und klicken Sie auf Fertigstellen. Die Teile werden zu einem Bild zusammengefügt.'
	},

	edit: {
		kicker: 'Beschriften und bearbeiten',
		title: 'Beschriften Sie vor der Aufnahme oder danach.',
		lede: 'Zeichnen Sie Pfeile, Formen, Weichzeichner und nummerierte Schritte direkt im Auswahl-Overlay und drücken Sie dann Enter, um sie in den Ausschnitt einzubrennen. Probieren Sie es unten aus. Der Editor macht dort weiter, mit Zuschneiden, Rückgängig und Zoom.'
	},

	overlay: {
		hint: 'Ziehen Sie den Rahmen oder seine Griffe, wählen Sie ein Werkzeug und zeichnen Sie darin, dann klicken Sie auf Aufnahme.',
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
		kicker: 'Aufzeichnung',
		title: 'Den Bildschirm aufzeichnen, mit Ton.',
		lede: 'Ein Bereich, der ganze Bildschirm oder ein Fenster, gespeichert als GIF, MP4 oder WebM. Systemton, Mikrofon und einzelne Apps landen auf getrennten Spuren, und die Sofortwiedergabe hält fest, was zuletzt auf dem Bildschirm passiert ist.',
		alt: 'Die Seite Bildschirmaufnahme in Unisic: Bildschirm, Bereich oder Fenster, Format WebM, Bildrate, CRF-Qualität, Systemton, Mikrofon, Anwendungston und eine Wiedergabelänge von 30 Sekunden.',
		format: 'Format',
		fps: 'Standardmäßig {fps} Bilder pro Sekunde',
		drawn: 'In die Aufzeichnung gezeichnet',
		effects: [
			{ name: 'Zeigerschein', say: 'hält den Mauszeiger auch in einem verkleinerten Video gut auffindbar' },
			{ name: 'Klickwellen', say: 'zeigen, wo und wann Sie geklickt haben' },
			{ name: 'Tastenanzeige', say: 'zeigt die Tastenkürzel, die Sie drücken, und bleibt aus, bis Sie sie einschalten' }
		]
	},

	read: {
		kicker: 'OCR und QR',
		title: 'Text aus Pixeln kopieren.',
		lede: 'Wählen Sie Text auf dem Bildschirm aus und erhalten Sie ihn als Text zurück. Das Lesen übernimmt Tesseract, mit Polnisch, Englisch und automatischer Spracherkennung. Richten Sie Unisic auf einen QR-Code oder Barcode, und zxing-cpp liefert Ihnen den Inhalt.',
		region: 'OCR-Bereich',
		lines: '{n} Zeilen',
		out: 'Erkannter Text landet direkt in der Zwischenablage.',
		copy: 'Text kopieren',
		qr: 'QR-Code für unisic.app',
		decoded: 'Dekodiert'
	},

	share: {
		kicker: 'Teilen und Verlauf',
		title: 'Von der Aufnahme zum Link mit einer Taste.',
		lede: 'Nach einer Aufnahme kann Unisic das Bild kopieren, speichern, hochladen und den Link in Ihre Zwischenablage legen. Jede Aufnahme landet in einem Verlauf mit Vorschaubildern, und beim Löschen wandert die Datei in den Papierkorb, statt endgültig gelöscht zu werden.',
		steps: ['Aufnahme', 'Bild kopieren', 'Hochladen', 'Link kopiert'],
		hosts: 'Überall hochladen.',
		customHttp: 'Eigenes HTTP',
		sxcu: '.sxcu-Import',
		history: 'Ihr Verlauf auf dieser Seite',
		emptyHtml:
			'Noch nichts da. Ziehen Sie oben in der <a href="#edit">Editor-Demo</a> eine Auswahl auf und klicken Sie auf Aufnahme. Das Ergebnis erscheint hier.'
	},

	toast: {
		captured: 'Aufgenommen: {size}',
		saved: 'Im Verlauf gespeichert'
	},

	themes: {
		kicker: 'Farbschemata und Sprachen',
		title: 'Ihre Farben, Ihre Sprache.',
		lede: 'Unisic bringt sechs Farbschemata mit, dazu eines, das dem hellen oder dunklen Schema und der Akzentfarbe Ihres Systems folgt. Wählen Sie unten eines aus, und diese Seite wechselt mit.',
		label: 'Farbschema der Seite',
		system: 'System',
		languages: 'Sprachen der Oberfläche',
		languagesText:
			'Englisch, Polnisch, Spanisch, Italienisch, Französisch, Russisch und Deutsch. Unisic folgt der Sprache Ihres Desktops, sofern Sie in den Einstellungen keine andere wählen.'
	},

	privacy: {
		kicker: 'Datenschutz',
		title: 'Eine Anfrage, und die lässt sich abschalten.',
		lede: 'Keine Telemetrie, keine Analyse, kein Konto. Die einzige Anfrage, die Unisic von sich aus stellt, fragt bei GitHub nach, ob es eine neuere Version gibt, kurz nach dem Start und danach einmal am Tag. Nichts über Sie oder Ihre Aufnahmen wird gesendet.',
		log: 'Anfragen, die Unisic von sich aus stellt',
		when: ['Nach dem Start', 'Alle 24 h'],
		none: 'Keine automatischen Anfragen. Für eine Prüfung von Hand gibt es in den Einstellungen die Schaltfläche „Jetzt prüfen“.',
		updates: 'Automatische Aktualisierungen',
		demo: 'Demo des Schalters in den Einstellungen',
		uploads: 'Hochgeladen wird nur, wenn Sie auf Hochladen klicken oder das Hochladen nach der Aufnahme einschalten, und nur zu dem Host, den Sie gewählt haben.',
		sent: 'Was genau gesendet wird'
	},

	compare: {
		kicker: 'Vergleich',
		title: 'Wie es im Vergleich abschneidet.',
		lede: 'Sechs Tools, dieselben Fragen. Jede Antwort wurde anhand von Quellcode, README oder Versionshinweisen des Tools für die Version im Tabellenkopf geprüft, damit Sie sie selbst nachprüfen können.',
		vs: 'Unisic vergleichen mit',
		caption: 'Screenshot-Tools im Vergleich. Geprüft am 2026-10-26 anhand des Quellcodes der getaggten Versionen.',
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
					'Linux, Windows 11 (experimentell)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty beschriftet nur: Das Bild kommt aus einer Datei oder der Standardeingabe, meist von grim. Das Verhalten von ksnip unter Plasma 6 wurde nicht geprüft. Einen Fehler entdeckt? <a href="https://github.com/unisic/unisic/issues">Öffnen Sie ein Issue</a>.'
	}
} satisfies Dictionary;
