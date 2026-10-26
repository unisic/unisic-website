import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: screenshot, registrazione e OCR per Linux',
		description:
			'Con Unisic disegni sulla selezione prima di scattare, registri GIF e video, estrai testo dai pixel e carichi il risultato. Screenshot per Linux Wayland, zero telemetria.'
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
		kicker: 'Screenshot per Linux Wayland, gratuito e open source',
		title: 'Fai lo screenshot. Unisic pensa al',
		titleMark: 'resto.',
		lede: 'Cattura una regione o una pagina lunga, annotala, registrala con audio, estrai il testo e condividila con un link. Tutto in una sola app gratuita.',
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
		facts: ['Gratuito, GPL-3.0', 'Nessun account', 'Nessuna telemetria'],
		source: 'Codice su GitHub'
	},

	copy: {
		copy: 'Copia',
		copied: 'Copiato',
		select: 'Selezionalo',
		done: 'Copiato negli appunti',
		failed: 'Appunti bloccati, seleziona il testo a mano'
	},

	why: {
		title: 'Perché Unisic.',
		ledeHtml:
			'Tra gli strumenti del <a href="#compare">confronto</a>, solo Unisic e ShareX hanno tutte le funzioni, e ShareX funziona solo su Windows.',
		see: 'Guarda',
		points: [
			{
				title: 'Cattura a scorrimento',
				text: 'Una pagina più lunga dello schermo diventa una sola immagine. Flameshot, Spectacle, ksnip e Satty non hanno la cattura a scorrimento.'
			},
			{
				title: 'Registrazione con audio',
				text: "La stessa regione come GIF, MP4 o WebM, con l'audio di sistema, il microfono o una singola app su una traccia a sé."
			},
			{
				title: 'Testo e codici QR',
				text: 'Copia il testo da qualsiasi cattura, o ricava il link contenuto in un codice QR o in un codice a barre.'
			},
			{
				title: 'Caricamenti e cronologia',
				text: 'Il tuo server via HTTP, FTP o SFTP, o una configurazione .sxcu di ShareX, e una miniatura di ogni cattura nella cronologia.'
			}
		]
	},

	capture: {
		kicker: 'Cattura',
		title: 'Ogni modo per catturare lo schermo.',
		lede: 'Schermo intero su tutti i monitor, una regione con le dimensioni in tempo reale, la finestra attiva o una pagina più lunga dello schermo. Aggiungi un ritardo fino a 60 secondi e il cursore quando ti servono.',
		modes: [
			{ name: 'Schermo intero', say: 'Tutti i monitor in una sola immagine.' },
			{ name: 'Regione', say: 'Trascina un riquadro con le dimensioni in tempo reale e annotalo prima dello scatto.' },
			{ name: 'Finestra', say: 'La finestra attiva, senza niente intorno.' }
		],
		scroll: 'Una pagina più lunga dello schermo',
		scrolling: 'Scorri in basso per catturare...',
		finish: 'Fine',
		captionHtml:
			'Avviala con <code>unisic --scroll</code>, scorri la pagina e premi Fine. I pezzi vengono uniti in una sola immagine.'
	},

	edit: {
		kicker: 'Annota e modifica',
		title: 'Annotalo prima dello scatto, o dopo.',
		lede: "Disegna frecce, forme, sfocature e passaggi numerati direttamente nell'overlay di cattura, poi premi Enter per fissarli nel ritaglio. Provalo qui sotto. L'editor riprende da lì, con ritaglio, annulla e zoom."
	},

	overlay: {
		hint: 'Trascina la cornice o le sue maniglie, scegli uno strumento e disegnaci dentro, poi premi Cattura.',
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
		kicker: 'Registrazione',
		title: "Registra lo schermo, con l'audio.",
		lede: "Una regione, lo schermo intero o una finestra, salvati come GIF, MP4 o WebM. L'audio di sistema, il microfono e le singole app finiscono su tracce separate, e il replay istantaneo conserva gli ultimi istanti sullo schermo.",
		alt: 'La pagina Registrazione schermo di Unisic: Schermo, Regione o Finestra, formato WebM, frame rate, qualità CRF, audio di sistema, microfono, audio delle applicazioni e un replay di 30 secondi.',
		format: 'Formato',
		fps: '{fps} fotogrammi al secondo per impostazione predefinita',
		drawn: 'Disegnato nella registrazione',
		effects: [
			{ name: 'Alone del puntatore', say: 'rende il cursore facile da trovare in un video ridimensionato' },
			{ name: 'Onde al clic', say: 'mostrano dove e quando hai cliccato' },
			{ name: 'Badge dei tasti', say: 'mostra le scorciatoie che premi, spento finché non lo attivi' }
		]
	},

	read: {
		kicker: 'OCR e QR',
		title: 'Copia il testo dai pixel.',
		lede: 'Seleziona qualsiasi testo sullo schermo e riottienilo come testo. La lettura la fa Tesseract, in polacco e inglese e con il rilevamento automatico della lingua. Punta Unisic su un codice QR o un codice a barre e zxing-cpp ti restituisce il contenuto.',
		region: 'Regione OCR',
		lines: '{n} righe',
		out: 'Il testo riconosciuto va dritto negli appunti.',
		copy: 'Copia il testo',
		qr: 'Codice QR per unisic.app',
		decoded: 'Decodificato'
	},

	share: {
		kicker: 'Condivisione e cronologia',
		title: 'Dallo scatto al link con un tasto.',
		lede: "Dopo una cattura Unisic può copiare l'immagine, salvarla, caricarla e mettere il link negli appunti. Ogni cattura finisce in una cronologia con miniature, ed eliminarne una sposta il file nel cestino invece di cancellarlo.",
		steps: ['Cattura', 'Copia immagine', 'Carica', 'Link copiato'],
		hosts: 'Carica dove vuoi.',
		customHttp: 'HTTP personalizzato',
		sxcu: 'Importa .sxcu',
		history: 'La tua cronologia su questa pagina',
		emptyHtml:
			'Ancora niente. Trascina una selezione nella <a href="#edit">demo dell\'editor</a> qui sopra e premi Cattura; comparirà qui.'
	},

	toast: {
		captured: 'Cattura di {size}',
		saved: 'Salvato nella cronologia'
	},

	themes: {
		kicker: 'Temi e lingue',
		title: 'I tuoi colori, la tua lingua.',
		lede: "Unisic include sei temi, più uno che segue lo schema chiaro o scuro e il colore d'accento del sistema. Scegline uno qui sotto e questa pagina cambia insieme a lui.",
		label: 'Tema della pagina',
		system: 'Sistema',
		languages: "Lingue dell'interfaccia",
		languagesText:
			'Inglese, polacco, spagnolo, italiano, francese, russo e tedesco. Unisic usa la lingua del desktop, a meno che tu non ne scelga una nelle Impostazioni.'
	},

	privacy: {
		kicker: 'Privacy',
		title: 'Una sola richiesta, e puoi disattivarla.',
		lede: "Nessuna telemetria, nessuna analisi, nessun account. L'unica richiesta che Unisic fa da solo chiede a GitHub se c'è una release più recente, poco dopo l'avvio e poi una volta al giorno. Non viene inviato nulla su di te o sulle tue catture.",
		log: 'Richieste che Unisic fa da solo',
		when: ["Dopo l'avvio", 'Ogni 24 h'],
		none: 'Nessuna richiesta automatica. Nelle Impostazioni resta un pulsante Controlla ora per quando ne vuoi una.',
		updates: 'Aggiornamenti automatici',
		demo: "Demo dell'interruttore nelle Impostazioni",
		uploads: "I caricamenti avvengono solo quando premi Carica o attivi il caricamento dopo la cattura, e solo verso l'host che hai scelto.",
		sent: 'Cosa viene inviato esattamente'
	},

	compare: {
		kicker: 'Confronto',
		title: 'Come si colloca rispetto agli altri.',
		lede: "Sei strumenti, le stesse domande. Ogni risposta è stata verificata sul codice sorgente, sul README o sulle note di rilascio dello strumento per la versione indicata nell'intestazione, così puoi verificarla anche tu.",
		vs: 'Confronta Unisic con',
		caption: 'Strumenti per screenshot a confronto. Verificato il 2026-10-26 sul codice sorgente delle versioni taggate.',
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
			'Satty si limita ad annotare: l\'immagine arriva da un file o dallo standard input, di solito da grim. Il comportamento di ksnip su Plasma 6 non è stato verificato. Hai trovato un errore? <a href="https://github.com/unisic/unisic/issues">Apri una segnalazione</a>.'
	}
} satisfies Dictionary;
