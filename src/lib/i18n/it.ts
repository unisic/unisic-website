import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: screenshot, registrazione e OCR per Linux',
		description:
			'Strumento gratuito per screenshot su Linux. Cattura pagine lunghe, annota, registra con audio, copia il testo con OCR e carica. Niente telemetria, niente account.'
	},

	chrome: {
		skip: 'Vai al contenuto',
		nav: 'Principale',
		features: 'Funzioni',
		themes: 'Temi',
		compare: 'Confronto',
		docs: 'Docs',
		pause: 'Metti in pausa le animazioni',
		install: 'Installa',
		menu: 'Menu',
		language: 'Lingua',
		footer: {
			label: 'Piè di pagina',
			mascot: 'Uni, la mascotte di Unisic',
			legalHtml:
				'Unisic è software libero con licenza <a href="/docs/introduction/#license">GNU GPL v3</a>. Creato da <a href="https://github.com/DeBondor">@DeBondor</a> e <a href="https://github.com/D3anDark">@D3anDark</a>, ispirato a <a href="https://getsharex.com/">ShareX</a> e <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Progetto',
			community: 'Comunità',
			capture: 'Cattura',
			record: 'Registrazione',
			hotkeys: 'Scorciatoie',
			compared: 'Confronto',
			install: 'Installa',
			source: 'Codice su GitHub',
			releases: 'Release',
			bug: 'Segnala un bug',
			docs: 'Documentazione',
			kofi: 'Sostienici su Ko-fi'
		}
	},

	hero: {
		kicker: 'Screenshot per Linux, gratuito e open source',
		title: 'Fai lo screenshot. Unisic pensa al',
		titleMark: 'resto.',
		lede: 'Cattura pagine lunghe, annotale, registra con audio, estrai il testo e condividi un link.',
		runsOn: 'Funziona su',
		more: 'e altri',
		alt: 'La pagina Cattura di Unisic: le schede Schermo intero, Regione e Finestra con le loro scorciatoie e, sotto, le opzioni di cattura.',
		windows: 'Windows 11, sperimentale',
		download: "Scarica l'installer",
		linuxPackages: 'Pacchetti Linux',
		windowsNote: 'Si installa per il tuo utente, senza diritti di amministratore, e si aggiorna da solo.',
		anyDistro: 'Installa su qualsiasi distro',
		linuxNote: 'Si installa per il tuo utente, senza sudo, e si aggiorna da solo.',
		packages: 'Pacchetti per distro, Nix',
		windowsInstaller: 'Installer per Windows',
		experimental: 'Sperimentale',
		facts: ['Nessun account', 'Nessuna telemetria'],
		source: 'Codice su GitHub'
	},

	copy: {
		copy: 'Copia',
		copied: 'Copiato',
		select: 'Selezionalo',
		done: 'Copiato negli appunti',
		failed: 'Appunti bloccati, seleziona il testo a mano'
	},

	capture: {
		title: 'Ogni modo per catturare lo schermo.',
		lede: 'Aggiungi un ritardo fino a 60 secondi, con o senza cursore.',
		modes: [
			{ name: 'Schermo intero', say: 'Tutti i monitor in una sola immagine.' },
			{ name: 'Regione', say: 'Trascina un riquadro e disegnaci sopra prima dello scatto.' },
			{ name: 'Finestra', say: 'La finestra attiva, senza niente intorno.' }
		],
		scroll: 'Una pagina più lunga dello schermo',
		scrolling: 'Scorri in basso per catturare...',
		finish: 'Fine',
		captionHtml:
			'Esegui <code>unisic --scroll</code>, scorri e premi Fine. Ottieni una sola immagine.'
	},

	edit: {
		title: 'Annotalo prima dello scatto, o dopo.',
		lede: "Disegna nell'overlay e premi Enter. Ritaglia e correggi dopo nell'editor."
	},

	overlay: {
		hint: 'Trascina la cornice, scegli uno strumento, disegna, poi premi Cattura.',
		keys: 'Le frecce spostano la cornice, Enter cattura, Esc azzera.',
		tool: 'Strumento:',
		headline: 'Seleziona. Disegnaci sopra. Premi',
		headlineMark: 'Enter.',
		label: "Demo dell'overlay di cattura",
		toolsLabel: 'Strumenti',
		colorLabel: 'Colore',
		tools: {
			select: 'Seleziona',
			pen: 'Penna',
			line: 'Linea',
			arrow: 'Freccia',
			measure: 'Misura',
			rect: 'Rettangolo',
			ellipse: 'Ellisse',
			highlight: 'Evidenzia',
			blur: 'Sfoca',
			step: 'Numero di passaggio',
			erase: 'Gomma intelligente'
		},
		colors: ['Rosso', 'Giallo', 'Verde', 'Blu', 'Lavanda', 'Bianco'],
		undoTitle: 'Annulla (Ctrl+Z)',
		undo: 'Annulla',
		capture: 'Cattura'
	},

	record: {
		title: "Registra lo schermo, con l'audio.",
		lede: 'GIF, MP4 o WebM. Audio di sistema, microfono e app su tracce separate. Il replay istantaneo salva quello che è appena successo.',
		alt: 'La pagina Registrazione schermo di Unisic: Schermo, Regione o Finestra, formato WebM, frame rate, qualità CRF, audio di sistema, microfono, audio delle applicazioni e un replay di 30 secondi.',
		format: 'Formato',
		fps: '{fps} fotogrammi al secondo per impostazione predefinita',
		drawn: 'Disegnato nella registrazione',
		effects: [
			{ name: 'Alone del puntatore', say: 'rende il cursore facile da individuare' },
			{ name: 'Onde al clic', say: 'mostrano dove e quando hai cliccato' },
			{ name: 'Badge dei tasti', say: 'mostra i tasti che premi, spento di default' }
		]
	},

	read: {
		title: 'Copia il testo dai pixel.',
		lede: 'Seleziona il testo sullo schermo e incollalo dove vuoi. Tesseract legge inglese e polacco, zxing-cpp decodifica codici QR e codici a barre.',
		region: 'Regione OCR',
		lines: '{n} righe',
		out: 'Il testo riconosciuto va dritto negli appunti.',
		copy: 'Copia il testo',
		qr: 'Codice QR per unisic.app',
		decoded: 'Decodificato'
	},

	share: {
		title: 'Dallo scatto al link con un tasto.',
		lede: 'Ogni cattura finisce in una cronologia con miniature. Eliminarne una sposta il file nel cestino.',
		steps: ['Cattura', 'Copia immagine', 'Carica', 'Link copiato'],
		hosts: 'Carica dove vuoi.',
		customHttp: 'HTTP personalizzato',
		sxcu: 'Importa .sxcu',
		history: 'La tua cronologia su questa pagina',
		emptyHtml:
			'Ancora niente. Premi Cattura nella <a href="#edit">demo qui sopra</a>.'
	},

	toast: {
		captured: 'Cattura di {size}',
		saved: 'Salvato nella cronologia'
	},

	themes: {
		title: 'Sei temi, sette lingue.',
		lede: "Sistema segue la modalità chiara o scura e il colore d'accento. Scegli un tema e anche questa pagina cambia.",
		label: 'Tema della pagina',
		system: 'Sistema',
		languages: "Lingue dell'interfaccia",
		languagesText:
			"Inglese, polacco, spagnolo, italiano, francese, russo e tedesco. Unisic usa la lingua del desktop, a meno che tu non ne scelga un'altra."
	},

	privacy: {
		title: 'Una sola richiesta, e puoi disattivarla.',
		lede: "Nessuna telemetria, nessuna analisi, nessun account. L'unica richiesta automatica controlla su GitHub gli aggiornamenti e non invia nulla su di te.",
		log: 'Richieste che Unisic fa da solo',
		when: ["Dopo l'avvio", 'Ogni 24 h'],
		none: 'Nessuna richiesta automatica. Le Impostazioni hanno ancora Controlla ora.',
		updates: 'Aggiornamenti automatici',
		demo: "Demo dell'interruttore nelle Impostazioni",
		uploads: "I caricamenti avvengono solo quando lo chiedi, e solo verso l'host che hai scelto.",
		sent: 'Cosa viene inviato esattamente'
	},

	compare: {
		title: 'Come si confronta.',
		lede: 'Tra questi strumenti Linux, solo Unisic le ha tutte e quattro: cattura a scorrimento, registrazione con audio, OCR e caricamenti. Ogni risposta è verificata sul codice sorgente della versione indicata.',
		vs: 'Confronta Unisic con',
		caption: 'Strumenti per screenshot a confronto, verificati il 2026-10-26.',
		say: { y: 'Sì', p: 'In parte', n: 'No' },
		rows: [
			{
				feature: "Disegno sull'overlay di cattura",
				notes: ['Enter lo fissa nel ritaglio', '', '', 'Solo lente e righelli', "Annota un'immagine presa da un altro strumento", '']
			},
			{ feature: 'Editor di immagini', notes: ['', 'Non apre immagini esistenti', '', '', '', ''] },
			{ feature: 'Cattura a scorrimento', notes: ['', '', '', '', '', ''] },
			{ feature: 'Registrazione GIF', notes: ['', '', '', '', '', ''] },
			{ feature: 'Registrazione video', notes: ['MP4 e WebM', '', 'Solo Wayland', '', '', ''] },
			{ feature: 'Audio nelle registrazioni', notes: ['Sistema, microfono e per app', '', 'Da Plasma 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Da Plasma 6.6', 'Plugin separato', '', ''] },
			{ feature: 'Lettura dei codici QR', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Destinazioni di caricamento personalizzate',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Solo Imgur, disattivato di default', 'Menu Condividi di KDE', 'Imgur, FTP, script', '', '.sxcu, FTP, SFTP']
			},
			{ feature: 'Cronologia con miniature', notes: ['Eliminare sposta nel cestino', 'Solo caricamenti su Imgur', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portali, KWin, PipeWire', 'Portale', 'Solo KWin', 'Portale o KWin legacy', 'Cattura affidata a grim', '']
			},
			{ feature: 'X11', notes: ['Secondo obiettivo, senza garanzie', 'Portale o X11 legacy', '', '', 'Non dichiarato', ''] },
			{
				feature: 'Piattaforme',
				notes: [
					'Linux, Windows\u00a011 (sperimentale)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty annota soltanto immagini di altri strumenti, di solito grim. ksnip su Plasma 6 non è stato verificato. Hai trovato un errore? <a href="https://github.com/unisic/unisic/issues">Apri una segnalazione</a>.'
	}
} satisfies Dictionary;
