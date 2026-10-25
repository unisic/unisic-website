import type { Dictionary } from "./en.ts";

// Machine-translated (it) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const it: Dictionary = {
  "meta": {
    "title": "Unisic - Screenshot e registrazione schermo su Linux",
    "description": "Strumento open-source di screenshot e registrazione schermo per Linux. Annota prima dello scatto, modifica dopo, registra GIF e video, carica ovunque. Zero telemetria, GPLv3.",
    "ogTitle": "Unisic - Screenshot fatti bene su Linux",
    "ogDescription": "Cattura, annota, modifica, registra e condividi con un solo tasto rapido. Cattura silenziosa su Wayland, registrazione GIF e video, OCR, caricamento istantaneo. Zero telemetria, GPLv3.",
    "ogImageAlt": "Editor di screenshot Unisic su Linux"
  },
  "nav": {
    "docs": "Documentazione",
    "skip": "Vai al contenuto",
    "how": "Come funziona",
    "features": "Funzionalità",
    "github": "Unisic su GitHub",
    "download": "Scarica"
  },
  "hero": {
    "eyebrow": "Screenshot e registrazione dello schermo per Linux",
    "headline": "Cattura, annota e condividi. {mark}",
    "headlineMark": "Un solo tasto rapido.",
    "sub": "Disegna sullo schermo prima dello scatto, registra una GIF o un video e ritrova il link da condividere già negli appunti.",
    "installLabel": "Installa in una riga",
    "copy": "Copia",
    "copied": "Copiato",
    "installNote": "Apre un menu. Ogni download viene verificato con il suo SHA-256 pubblicato.",
    "installRead": "Come funziona l'installer",
    "otherWays": "Altri modi per installare",
    "github": "Vedi su GitHub",
    "windowHint": "Ricostruita dal QML e dai temi dell'app stessa. Esplora la barra laterale."
  },
  "how": {
    "steps": {
      "hotkey": {
        "title": "Premi un tasto rapido",
        "body": "{keys} avvia una cattura di area. Schermo intero e finestra hanno i loro tasti, che puoi cambiare nelle Impostazioni."
      },
      "mark": {
        "title": "Annotalo",
        "body": "Disegna frecce, testo, sfocatura e passaggi numerati direttamente sullo schermo congelato, poi premi Invio. L'editor ha altri strumenti."
      },
      "share": {
        "title": "Condividilo",
        "body": "Salvalo, copialo o caricalo. Dopo il caricamento il link è già negli appunti."
      }
    }
  },
  "usp": {
    "title": "Annota ancora prima di scattare",
    "lede": "L'overlay di selezione è anche una tela. Quello che disegni sullo schermo congelato finisce direttamente nella cattura, senza passare da un editor."
  },
  "overlay": {
    "caption": "L'overlay di selezione di Unisic: uno schermo congelato con una regione selezionata, dimensioni in pixel in tempo reale, una freccia disegnata prima della cattura e una barra degli strumenti fluttuante.",
    "capture": "Cattura"
  },
  "features": {
    "title": "Tutto ciò che viene dopo la scorciatoia",
    "editor": {
      "title": "Un editor completo",
      "body": "Frecce, forme, testo, evidenziatore, sfocatura, pixelatura, passaggi numerati, callout e ritaglio. Annulla, ripeti e ingrandisci quanto vuoi."
    },
    "ocr": {
      "title": "Testo dai pixel",
      "body": "Copia il testo di qualsiasi area direttamente negli appunti. I codici QR e i codici a barre vengono decodificati nel loro contenuto."
    },
    "upload": {
      "title": "Carica ovunque",
      "body": "Il tuo server HTTP, file uploader di ShareX, FTP, SFTP o un host integrato. Il link viene copiato per te.",
      "copied": "Copiato"
    },
    "history": {
      "title": "Cronologia con miniature",
      "body": "Ogni cattura, a una griglia di distanza. L'eliminazione sposta il file nel cestino, mai oltre."
    },
    "silent": {
      "title": "Cattura silenziosa",
      "body": "Nessun flash dell'otturatore, nessun destreggiarsi tra finestre. Percorso nativo KWin su Plasma, portali in tutti gli altri casi."
    },
    "yours": {
      "title": "Nessuna telemetria, nessun account",
      "body": "L'unica richiesta che Unisic fa da solo è il controllo delle nuove versioni. Con licenza GPL-3.0 e sviluppato in aperto."
    }
  },
  "recording": {
    "title": "Registra la stessa area come GIF o video",
    "lede": "Cattura un'area, una finestra o l'intero schermo. Salva una GIF, oppure un MP4 o WebM con audio di sistema, microfono o di una sola app. Il replay istantaneo tiene pronti gli ultimi 30 secondi.",
    "note": "{keys} interrompe sempre una registrazione, indipendentemente da cosa ha il focus.",
    "caption": "Una regione dello schermo in fase di registrazione: Unisic disegna una cornice con il colore d'accento attorno alla regione con un badge REC e un timer del tempo trascorso."
  },
  "themes": {
    "title": "Temi, incluso il tuo",
    "lede": "Scegli una palette qui sotto e guarda l'app indossarla.",
    "groupLabel": "Tema di questa pagina",
    "note": "Ogni chip ridipinge l'intera pagina con quella palette, con i valori forniti dall'app. Il primo segue lo schema chiaro o scuro del desktop.",
    "system": "Sistema"
  },
  "download": {
    "title": "Installa Unisic",
    "lede": "Pensato per Wayland, funziona anche su X11. Scegli come vuoi installarlo.",
    "points": {
      "verify": "Ogni download viene verificato con il suo SHA-256",
      "noRoot": "L'AppImage non richiede root e si aggiorna da sola",
      "free": "Gratuito e open source, GPL-3.0"
    },
    "repoLede": "AppImage è la via consigliata: un solo file, senza root, e si sostituisce da solo quando esce una nuova versione. In alternativa scegli la tua distribuzione: il repository mantiene Unisic aggiornato tramite il gestore di pacchetti; la release include anche pacchetti una tantum .deb, .rpm e Arch che configurano il repository alla prima installazione.",
    "distroListLabel": "Scegli la tua distribuzione o il formato di pacchetto",
    "versionLabel": "Versione",
    "copyCmd": "Copia comandi",
    "copiedCmd": "Copiato",
    "steps": {
      "importKey": "Importa la chiave di firma del repository:",
      "addRepo": "Aggiungi il repository:",
      "refreshRepo": "Aggiorna i repository:",
      "enableRepo": "Abilita il repository COPR:",
      "install": "Installa Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 raggiunge il fine supporto a luglio 2026, quindi meglio scegliere la 26.04. Entrambe richiedono Qt 6.5+, assente nelle versioni più vecchie.",
      "debian": "Richiede Debian 13 (trixie) o più recente per Qt 6.5+.",
      "fedora": "Build per Fedora 43, 44 e Rawhide. Tutte le dipendenze richieste vengono installate con il pacchetto, quindi registrazione, OCR e decodifica dei codici QR funzionano subito.",
      "opensuse": "Durante il refresh zypper chiederà di accettare la chiave di firma del repository.",
      "arch": "Un repository pacman firmato su openSUSE Build Service. Niente AUR.",
      "nix": "Funziona ovunque ci sia Nix, incluso NixOS. Provalo con nix run oppure aggiungi il flake come input per una configurazione dichiarativa; su NixOS abilita xdg.portal e PipeWire.",
      "appimage": "Consigliato. Universale: funziona su qualsiasi distribuzione, non richiede root e non installa nulla nel sistema. Si aggiorna da solo: la nuova release viene scaricata, verificata con lo SHA-256 pubblicato per essa e sostituita sul posto, e Unisic si riavvia quando sei inattivo.",
      "windows": "Sperimentale, per Windows 11 e scritto interamente da un'IA. Il programma di installazione lo installa solo per il tuo utente, senza diritti di amministratore. Nella pagina della release c'è anche uno zip portatile. Si aggiorna da solo, come l'AppImage. Non può ancora registrare una singola finestra."
    },
    "downloadBtn": "Scarica",
    "latest": "Ultima release {tag}",
    "fallbackBtn": "Scaricalo da GitHub Releases",
    "fallbackNote": "Non è stato possibile raggiungere GitHub in questo momento, ma ogni build si trova lì.",
    "allReleases": "Tutte le release e le build precedenti",
    "stability": "Unisic è in beta. Se si comporta male sul tuo desktop, una segnalazione in {link} aiuta.",
    "stabilityLink": "Issue"
  },
  "hotkeys": {
    "caption": "Scorciatoie predefinite",
    "action": "Azione",
    "shortcut": "Scorciatoia",
    "rows": {
      "full": "Cattura schermo intero",
      "region": "Cattura regione",
      "window": "Cattura finestra attiva",
      "gif": "Registra GIF (avvia/interrompi)",
      "video": "Registra video (avvia/interrompi)",
      "ocr": "OCR di una regione (copia il testo)",
      "copyLast": "Copia l'ultima cattura",
      "replay": "Avvia/salva il replay istantaneo",
      "stop": "Interrompi registrazione (fissa)"
    },
    "note": "Tutte le scorciatoie, tranne il tasto di stop fisso, sono modificabili nelle Impostazioni e applicate al sistema immediatamente."
  },
  "reference": {
    "title": "Desktop supportati e tasti rapidi"
  },
  "compositors": {
    "title": "Funziona con il tuo compositor",
    "plasma": {
      "name": "KDE Plasma",
      "body": "Il percorso totalmente silenzioso: KWin ScreenShot2 nativo con scorciatoie KGlobalAccel. Nessun dialogo dei portali."
    },
    "gnome": {
      "name": "GNOME e altri desktop",
      "body": "Catture e registrazione passano attraverso xdg-desktop-portal con PipeWire. Standard, sicuro, senza trucchi."
    },
    "wlroots": {
      "name": "niri e compositor wlroots",
      "body": "Unisic cattura tramite wlr-screencopy con grim, in modo silenzioso e sicuro su più monitor. Associa le scorciatoie nella configurazione del tuo compositor; un'istanza in esecuzione recepisce il comando."
    }
  },
  "mainWindow": {
    "ariaLabel": "La finestra principale di Unisic: una barra laterale con le pagine Cattura, Registra e Modifica sopra una libreria con Cronologia e Server, e la pagina Cattura con le azioni schermo intero, regione e finestra più la griglia delle opzioni di cattura.",
    "nav": {
      "capture": "Cattura",
      "record": "Registra",
      "edit": "Modifica",
      "history": "Cronologia",
      "servers": "Server"
    },
    "library": "Libreria",
    "pageTitle": "Cattura",
    "pageSub": "Gli screenshot arrivano nell'editor, dove puoi annotare, poi salvare, copiare o caricare.",
    "cards": {
      "fullScreen": {
        "title": "Schermo intero",
        "sub": "Tutti i monitor"
      },
      "region": {
        "title": "Regione",
        "sub": "Seleziona + annota dal vivo"
      },
      "window": {
        "title": "Finestra",
        "sub": "Finestra attiva"
      }
    },
    "options": {
      "title": "Opzioni di cattura",
      "delay": "Ritardo di cattura",
      "repeat": "Ripeti l'ultima regione",
      "repeatAction": "Ripeti",
      "server": "Server di caricamento",
      "cursor": "Includi il cursore del mouse",
      "editor": "Apri l'editor",
      "clipboard": "Copia l'immagine negli appunti",
      "disk": "Salva su disco automaticamente",
      "upload": "Carica e copia il link"
    }
  },
  "editorMockup": {
    "ariaLabel": "La finestra dell'editor di Unisic: una scheda strumenti con gli strumenti di annotazione sopra il gruppo forme aperto e le sue opzioni di tratto, uno screenshot annotato con una freccia, un'evidenziazione e passaggi numerati, e le azioni copia, salva e carica.",
    "title": "Editor Unisic",
    "stroke": "Tratto",
    "copy": "Copia",
    "save": "Salva",
    "upload": "Carica",
    "more": "Altro"
  },
  "cli": {
    "title": "Comandalo dal terminale",
    "lede": "Ogni modalità di cattura è un'opzione, quindi una scorciatoia del compositor, uno script o un job cron possono avviarla. Con --output - l'immagine va su stdout."
  },
  "app": {
    "record": {
      "title": "Registrazione dello schermo",
      "gifTitle": "Registrazione GIF",
      "sub": "Registra lo schermo intero, una regione o una singola finestra in un file video.",
      "gifSub": "Registra una regione o uno schermo intero direttamente in un file .gif ottimizzato.",
      "video": "Video",
      "gif": "GIF",
      "screen": "Schermo",
      "region": "Regione",
      "window": "Finestra",
      "pause": "Pausa",
      "stop": "Interrompi",
      "startReplay": "Avvia riproduzione",
      "videoOptions": "Opzioni video",
      "gifOptions": "Opzioni GIF",
      "format": "Formato",
      "frameRate": "Frequenza fotogrammi",
      "quality": "Qualità",
      "qualitySub": "Più alto è più nitido e più pesante. 50% è il valore predefinito equilibrato.",
      "maxDuration": "Durata massima",
      "cursor": "Includi il cursore del mouse",
      "audio": "Audio e riproduzione",
      "systemAudio": "Registra l'audio di sistema",
      "mic": "Registra il microfono",
      "appAudio": "Solo audio dell'applicazione",
      "replayLength": "Durata riproduzione",
      "off": "Spento",
      "refresh": "Aggiorna",
      "noWindowGif": "Non disponibile: la GIF non ha una sorgente a finestra singola",
      "fast": "Veloce / piccolo",
      "balanced": "Bilanciato",
      "best": "Migliore",
      "goodToKnow": "Da sapere",
      "gifNoAudio": "La GIF non ha traccia audio. Per una clip con audio, passa alla modalità Video e registra un MP4 o WebM.",
      "gifSize": "La dimensione del file cresce in fretta con area, frequenza dei fotogrammi e durata. Una piccola regione a 15-30 FPS di solito rende benissimo e resta facile da condividere."
    },
    "edit": {
      "title": "Modifica",
      "sub": "Apri un'immagine o un video che hai già: lo stesso editor e la stessa finestra di taglio delle tue catture.",
      "image": "Modifica un'immagine",
      "imageSub": "Annota, ritaglia, sfoca",
      "video": "Taglia un video",
      "videoSub": "Taglia un inizio e una fine",
      "tip": "Modificare un'immagine non tocca mai l'originale: l'editor salva dove finiscono le tue catture, con un nome nuovo, a meno che non lo sovrascriva tu. Il taglio crea sempre un file nuovo accanto alla sorgente."
    },
    "history": {
      "title": "Cronologia",
      "items": "{n} elementi",
      "search": "Cerca nome o link",
      "clear": "Cancella tutto",
      "all": "Tutto",
      "images": "Immagini",
      "gifs": "GIF",
      "recordings": "Registrazioni",
      "clips": "Clip",
      "starred": "Con stella",
      "uploaded": "Caricate",
      "today": "Oggi",
      "empty": "Ancora niente qui. Le catture e le registrazioni appariranno qui con le miniature."
    },
    "servers": {
      "title": "Server",
      "sub": "Uploader modulari: API HTTP personalizzate più FTP/SFTP tramite curl. Dopo ogni caricamento il link viene copiato negli appunti.",
      "add": "Aggiungi server personalizzato",
      "import": "Importa .sxcu",
      "active": "Server attivo",
      "use": "Usa",
      "needsClientId": "Serve un Client-ID",
      "needsUserKey": "Serve una chiave utente"
    },
    "modes": {
      "shot": "Screenshot",
      "measure": "Misura",
      "ocr": "Leggi testo",
      "gif": "Registra GIF",
      "video": "Registra video"
    },
    "hint": {
      "shot": "Trascina per selezionare · clic per l'intero schermo · Ctrl+trascina per spostare · annota con la barra degli strumenti · Space/Enter o doppio clic per catturare · Esc per annullare",
      "measure": "Trascina per misurare · Tab: distanza/dimensione · Ctrl+C copia le misure · Esc chiude",
      "ocr": "Trascina per selezionare · Ctrl+trascina per spostare · Space/Enter legge il testo · Esc per annullare",
      "gif": "Trascina per selezionare · Ctrl+trascina per spostare · Space/Enter avvia la GIF · Esc per annullare",
      "video": "Trascina per selezionare · Ctrl+trascina per spostare · Space/Enter avvia il video · Esc per annullare"
    },
    "tools": {
      "edit": "Modifica forme",
      "pen": "Penna",
      "shapes": "Forme",
      "text": "Testo",
      "highlight": "Evidenziatore",
      "blur": "Sfocatura",
      "pixelate": "Pixellatura",
      "eraser": "Gomma intelligente",
      "magnify": "Lente d'ingrandimento",
      "eyedropper": "Contagocce",
      "step": "Marcatore di passaggi",
      "crop": "Ritaglia",
      "undo": "Annulla",
      "redo": "Ripeti",
      "line": "Linea",
      "arrow": "Freccia",
      "measure": "Misura",
      "rect": "Rettangolo",
      "ellipse": "Ellisse",
      "callout": "Fumetto"
    },
    "toolbar": "Barra degli strumenti di cattura",
    "cancel": "Annulla"
  },
  "footer": {
    "license": "Gratuito e open source, GPL-3.0",
    "nav": "Piè di pagina",
    "github": "GitHub",
    "releases": "Release",
    "issues": "Issue",
    "licenseLink": "Licenza"
  },
  "notFound": {
    "code": "Errore 404",
    "title": "Pagina non trovata",
    "message": "La pagina che cercavi è stata spostata, rinominata o non è mai esistita. Ti riportiamo su un terreno sicuro.",
    "home": "Torna alla home"
  },
  "languageSwitcher": {
    "label": "Lingua"
  }
};
