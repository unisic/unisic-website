import type { Dictionary } from './en.js';

export default {
	meta: {
		title: "Unisic : captures d'écran, enregistrement et OCR pour Linux",
		description:
			"Outil de capture d'écran gratuit pour Linux. Capturez de longues pages, annotez, filmez avec le son, copiez le texte par OCR et envoyez. Sans télémétrie, sans compte."
	},

	chrome: {
		skip: 'Aller au contenu',
		nav: 'Principale',
		features: 'Fonctions',
		themes: 'Thèmes',
		compare: 'Comparatif',
		docs: 'Documentation',
		pause: 'Suspendre les animations',
		install: 'Installer',
		menu: 'Menu',
		language: 'Langue',
		footer: {
			label: 'Pied de page',
			mascot: "Uni, la mascotte d'Unisic",
			legalHtml:
				'Unisic est un logiciel libre sous licence <a href="/docs/introduction/#license">GNU GPL v3</a>. Développé par <a href="https://github.com/DeBondor">@DeBondor</a> et <a href="https://github.com/D3anDark">@D3anDark</a>, inspiré de <a href="https://getsharex.com/">ShareX</a> et de <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Projet',
			community: 'Communauté',
			capture: 'Capture',
			record: 'Enregistrement',
			hotkeys: 'Raccourcis',
			compared: 'Comparatif',
			install: 'Installation',
			source: 'Code source sur GitHub',
			releases: 'Versions',
			bug: 'Signaler un bug',
			docs: 'Documentation',
			kofi: 'Soutenir sur Ko-fi'
		}
	},

	hero: {
		kicker: "Capture d'écran libre et gratuite pour Linux",
		title: "Capturez. Unisic s'occupe",
		titleMark: 'du reste.',
		lede: 'Capturez de longues pages, annotez, filmez avec le son, extrayez le texte et partagez un lien.',
		runsOn: 'Fonctionne sur',
		more: 'et plus encore',
		alt: "La page Capture d'Unisic : les cartes Plein écran, Région et Fenêtre avec leurs raccourcis, et les options de capture en dessous.",
		windows: 'Windows 11, expérimental',
		download: "Télécharger l'installateur",
		linuxPackages: 'Paquets Linux',
		windowsNote: "S'installe sur votre compte, sans droits d'administrateur, se met à jour tout seul.",
		anyDistro: "Installer sur n'importe quelle distribution",
		linuxNote: "S'installe sur votre compte, sans sudo, se met à jour tout seul.",
		packages: 'Paquets par distribution, Nix',
		windowsInstaller: 'Installateur Windows',
		experimental: 'Expérimental',
		facts: ['Sans compte', 'Sans télémétrie'],
		source: 'Code source sur GitHub'
	},

	copy: {
		copy: 'Copier',
		copied: 'Copié',
		select: 'Sélectionner',
		done: 'Copié dans le presse-papiers',
		failed: 'Presse-papiers bloqué, sélectionnez le texte à la place'
	},

	capture: {
		title: "Toutes les façons de capturer l'écran.",
		lede: "Ajoutez un délai jusqu'à 60 secondes, avec ou sans le curseur.",
		modes: [
			{ name: 'Plein écran', say: 'Tous les moniteurs en une seule image.' },
			{ name: 'Région', say: 'Tracez un cadre et dessinez dessus avant la capture.' },
			{ name: 'Fenêtre', say: 'La fenêtre active, rien autour.' }
		],
		scroll: 'Une page plus longue que votre écran',
		scrolling: 'Faites défiler vers le bas pour capturer...',
		finish: 'Terminer',
		captionHtml:
			'Lancez <code>unisic --scroll</code>, faites défiler, appuyez sur Terminer. Vous obtenez une seule image.'
	},

	edit: {
		title: 'Annotez avant la capture, ou après.',
		lede: "Dessinez dans la surcouche, appuyez sur Enter. Recadrez et retouchez ensuite dans l'éditeur."
	},

	overlay: {
		hint: 'Faites glisser le cadre, choisissez un outil, dessinez, puis appuyez sur Capturer.',
		keys: 'Les flèches déplacent le cadre, Enter capture, Esc réinitialise.',
		tool: 'Outil :',
		headline: 'Sélectionnez. Dessinez. Appuyez sur',
		headlineMark: 'Enter.',
		label: 'Démo de la surcouche de capture',
		toolsLabel: 'Outils',
		colorLabel: 'Couleur',
		tools: {
			select: 'Sélectionner',
			pen: 'Crayon',
			line: 'Ligne',
			arrow: 'Flèche',
			measure: 'Mesurer',
			rect: 'Rectangle',
			ellipse: 'Ellipse',
			highlight: 'Surligner',
			blur: 'Flou',
			step: "Numéro d'étape",
			erase: 'Gomme intelligente'
		},
		colors: ['Rouge', 'Jaune', 'Vert', 'Bleu', 'Lavande', 'Blanc'],
		undoTitle: 'Annuler (Ctrl+Z)',
		undo: 'Annuler',
		capture: 'Capturer'
	},

	record: {
		title: "Enregistrez l'écran, avec le son.",
		lede: 'GIF, MP4 ou WebM. Son du système, du micro et des applications sur des pistes séparées. La relecture instantanée garde ce qui vient de se passer.',
		alt: "La page Enregistrement d'écran d'Unisic : Écran, Région ou Fenêtre, format WebM, fréquence d'images, qualité CRF, audio système, microphone, audio de l'application et une durée de relecture de 30 secondes.",
		format: 'Format',
		fps: '{fps} images par seconde par défaut',
		drawn: "Incrustés dans l'enregistrement",
		effects: [
			{ name: 'Halo du pointeur', say: 'rend le curseur facile à repérer' },
			{ name: 'Ondes de clic', say: 'montrent où et quand vous avez cliqué' },
			{ name: 'Badge des touches', say: 'affiche les touches que vous pressez, désactivé par défaut' }
		]
	},

	read: {
		title: 'Extrayez le texte des pixels.',
		lede: "Sélectionnez du texte à l'écran et collez-le où vous voulez. Tesseract lit l'anglais et le polonais, zxing-cpp décode les codes QR et les codes-barres.",
		region: 'Région OCR',
		lines: '{n} lignes',
		out: 'Le texte reconnu va directement dans le presse-papiers.',
		copy: 'Copier le texte',
		qr: 'Code QR vers unisic.app',
		decoded: 'Décodé'
	},

	share: {
		title: 'De la capture au lien en une touche.',
		lede: 'Chaque capture arrive dans un historique avec miniatures. En supprimer une déplace le fichier vers la corbeille.',
		steps: ['Capture', 'Image copiée', 'Envoi', 'Lien copié'],
		hosts: 'Envoyez où vous voulez.',
		customHttp: 'HTTP personnalisé',
		sxcu: 'Import .sxcu',
		history: 'Votre historique sur cette page',
		emptyHtml:
			'Rien pour l\'instant. Appuyez sur Capturer dans la <a href="#edit">démo ci-dessus</a>.'
	},

	toast: {
		captured: 'Capture de {size}',
		saved: "Ajoutée à l'historique"
	},

	themes: {
		title: 'Six thèmes, sept langues.',
		lede: "Système suit votre mode clair ou sombre et votre couleur d'accentuation. Choisissez un thème et cette page change aussi.",
		label: 'Thème de la page',
		system: 'Système',
		languages: "Langues de l'interface",
		languagesText:
			'Anglais, polonais, espagnol, italien, français, russe et allemand. Unisic suit la langue de votre bureau, sauf si vous en choisissez une.'
	},

	privacy: {
		title: 'Une seule requête, et vous pouvez la couper.',
		lede: "Pas de télémétrie, pas d'analyse, pas de compte. La seule requête automatique vérifie les mises à jour sur GitHub et n'envoie rien sur vous.",
		log: "Requêtes qu'Unisic envoie de lui-même",
		when: ['Après le démarrage', 'Toutes les 24 h'],
		none: 'Aucune requête automatique. Les Réglages gardent Vérifier maintenant.',
		updates: 'Mises à jour automatiques',
		demo: "Démo de l'interrupteur des Réglages",
		uploads: "Les envois n'ont lieu qu'à votre demande, et seulement vers l'hébergeur que vous avez choisi.",
		sent: 'Ce qui est envoyé exactement'
	},

	compare: {
		title: 'Comment il se compare.',
		lede: 'Parmi ces outils Linux, seul Unisic réunit les quatre : capture avec défilement, enregistrement avec le son, OCR et envois. Chaque réponse est vérifiée dans le code source de la version indiquée.',
		vs: 'Comparer Unisic avec',
		caption: "Comparatif d'outils de capture d'écran, vérifié le 2026-10-26.",
		say: { y: 'Oui', p: 'En partie', n: 'Non' },
		rows: [
			{
				feature: 'Dessin sur la surcouche de capture',
				notes: [
					"Enter l'incruste dans la sélection",
					'',
					'',
					'Loupe et règles seulement',
					'Annote une image prise par un autre outil',
					''
				]
			},
			{ feature: "Éditeur d'images", notes: ['', "N'ouvre pas les images existantes", '', '', '', ''] },
			{ feature: 'Capture avec défilement', notes: ['', '', '', '', '', ''] },
			{ feature: 'Enregistrement GIF', notes: ['', '', '', '', '', ''] },
			{ feature: 'Enregistrement vidéo', notes: ['MP4 et WebM', '', 'Wayland seulement', '', '', ''] },
			{
				feature: 'Son dans les enregistrements',
				notes: ['Système, micro et par application', '', 'Depuis Plasma 6.8', '', '', '']
			},
			{ feature: 'OCR', notes: ['Tesseract', '', 'Depuis Plasma 6.6', 'Extension séparée', '', ''] },
			{ feature: 'Lecture des codes QR', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: "Destinations d'envoi personnalisées",
				notes: [
					'.sxcu, HTTP, FTP, SFTP',
					'Imgur seulement, désactivé par défaut',
					'Menu Partager de KDE',
					'Imgur, FTP, scripts',
					'',
					'.sxcu, FTP, SFTP'
				]
			},
			{
				feature: 'Historique avec miniatures',
				notes: ['Supprimer envoie à la corbeille', 'Envois Imgur seulement', '', '', '', '']
			},
			{
				feature: 'Wayland',
				notes: ['Portails, KWin, PipeWire', 'Portail', 'KWin seulement', 'Portail ou ancienne API KWin', 'Capture confiée à grim', '']
			},
			{ feature: 'X11', notes: ['Seconde cible, sans garantie', 'Portail ou ancienne API X11', '', '', 'Non précisé', ''] },
			{
				feature: 'Plateformes',
				notes: [
					'Linux, Windows\u00a011 (expérimental)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty ne fait qu\'annoter des images venues d\'autres outils, en général grim. ksnip sous Plasma 6 n\'a pas été vérifié. Vous avez repéré une erreur ? <a href="https://github.com/unisic/unisic/issues">Ouvrez un ticket</a>.'
	}
} satisfies Dictionary;
