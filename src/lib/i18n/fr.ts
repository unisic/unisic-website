import type { Dictionary } from './en.js';

export default {
	meta: {
		title: "Unisic : captures d'écran, enregistrement et OCR pour Linux",
		description:
			"Unisic dessine sur la sélection avant la capture, enregistre en GIF et en vidéo, lit le texte des pixels et envoie le résultat. Pour Linux sous Wayland, sans télémétrie."
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
		lede: "Capturez une région ou une longue page, annotez, filmez avec le son, extrayez le texte et partagez un lien. Et c'est gratuit.",
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
		facts: ['Gratuit, GPL-3.0', 'Sans compte', 'Sans télémétrie'],
		source: 'Code source sur GitHub'
	},

	copy: {
		copy: 'Copier',
		copied: 'Copié',
		select: 'Sélectionner',
		done: 'Copié dans le presse-papiers',
		failed: 'Presse-papiers bloqué, sélectionnez le texte à la place'
	},

	why: {
		title: 'Pourquoi Unisic.',
		ledeHtml:
			'Parmi les outils du <a href="#compare">comparatif</a>, seuls Unisic et ShareX ont toutes les fonctions, et ShareX ne tourne que sous Windows.',
		see: 'Voir',
		points: [
			{
				title: 'Capture avec défilement',
				text: "Une page plus longue que l'écran devient une seule image. Flameshot, Spectacle, ksnip et Satty n'ont pas de capture avec défilement."
			},
			{
				title: 'Enregistrement avec le son',
				text: 'La même région en GIF, MP4 ou WebM, avec le son du système, le micro ou une seule application sur sa propre piste.'
			},
			{
				title: 'Texte et codes QR',
				text: "Copiez le texte de n'importe quelle capture, ou récupérez le lien caché dans un code QR ou un code-barres."
			},
			{
				title: 'Envois et historique',
				text: "Votre propre serveur en HTTP, FTP ou SFTP, ou une configuration ShareX .sxcu, et une miniature de chaque capture dans l'historique."
			}
		]
	},

	capture: {
		kicker: 'Capture',
		title: "Toutes les façons de capturer l'écran.",
		lede: "L'écran entier sur tous les moniteurs, une région avec ses dimensions en direct, la fenêtre active ou une page plus longue que votre écran. Ajoutez un délai allant jusqu'à 60 secondes et le curseur quand vous en avez besoin.",
		modes: [
			{ name: 'Plein écran', say: 'Tous les moniteurs en une seule image.' },
			{ name: 'Région', say: 'Tracez un cadre aux dimensions affichées en direct et annotez-le avant la capture.' },
			{ name: 'Fenêtre', say: 'La fenêtre active, rien autour.' }
		],
		scroll: 'Une page plus longue que votre écran',
		scrolling: 'Faites défiler vers le bas pour capturer...',
		finish: 'Terminer',
		captionHtml:
			'Lancez-la avec <code>unisic --scroll</code>, faites défiler la page, appuyez sur Terminer. Les morceaux sont assemblés en une seule image.'
	},

	edit: {
		kicker: 'Annoter et modifier',
		title: 'Annotez avant la capture, ou après.',
		lede: "Dessinez des flèches, des formes, du flou et des étapes numérotées directement dans la surcouche de capture, puis appuyez sur Enter pour les incruster dans la sélection. Essayez ci-dessous. L'éditeur prend ensuite le relais, avec le recadrage, l'annulation et le zoom."
	},

	overlay: {
		hint: "Faites glisser le cadre ou ses poignées, choisissez un outil et dessinez à l'intérieur, puis appuyez sur Capturer.",
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
		kicker: 'Enregistrement',
		title: "Enregistrez l'écran, avec le son.",
		lede: "Une région, l'écran entier ou une fenêtre, en GIF, MP4 ou WebM. Le son du système, le micro et chaque application vont sur des pistes séparées, et la relecture instantanée garde en mémoire les derniers instants à l'écran.",
		alt: "La page Enregistrement d'écran d'Unisic : Écran, Région ou Fenêtre, format WebM, fréquence d'images, qualité CRF, audio système, microphone, audio de l'application et une durée de relecture de 30 secondes.",
		format: 'Format',
		fps: '{fps} images par seconde par défaut',
		drawn: "Incrustés dans l'enregistrement",
		effects: [
			{ name: 'Halo du pointeur', say: 'garde le curseur facile à repérer dans une vidéo réduite' },
			{ name: 'Ondes de clic', say: 'montrent où et quand vous avez cliqué' },
			{ name: 'Badge des touches', say: 'affiche les raccourcis que vous pressez, désactivé par défaut' }
		]
	},

	read: {
		kicker: 'OCR et QR',
		title: 'Extrayez le texte des pixels.',
		lede: "Sélectionnez n'importe quel texte à l'écran et récupérez-le sous forme de texte. Tesseract se charge de la lecture, en polonais et en anglais, avec détection automatique de la langue. Pointez Unisic vers un code QR ou un code-barres et zxing-cpp vous donne son contenu.",
		region: 'Région OCR',
		lines: '{n} lignes',
		out: 'Le texte reconnu va directement dans le presse-papiers.',
		copy: 'Copier le texte',
		qr: 'Code QR vers unisic.app',
		decoded: 'Décodé'
	},

	share: {
		kicker: 'Partage et historique',
		title: 'De la capture au lien en une touche.',
		lede: "Après une capture, Unisic peut copier l'image, l'enregistrer, l'envoyer et mettre le lien dans votre presse-papiers. Chaque capture arrive dans un historique avec miniatures, et en supprimer une déplace le fichier vers la corbeille au lieu de l'effacer.",
		steps: ['Capture', 'Image copiée', 'Envoi', 'Lien copié'],
		hosts: 'Envoyez où vous voulez.',
		customHttp: 'HTTP personnalisé',
		sxcu: 'Import .sxcu',
		history: 'Votre historique sur cette page',
		emptyHtml:
			'Rien pour l\'instant. Tracez une sélection dans la <a href="#edit">démo de l\'éditeur</a> ci-dessus et appuyez sur Capturer. Elle apparaîtra ici.'
	},

	toast: {
		captured: 'Capture de {size}',
		saved: "Ajoutée à l'historique"
	},

	themes: {
		kicker: 'Thèmes et langues',
		title: 'Vos couleurs, votre langue.',
		lede: "Unisic est livré avec six thèmes, plus un qui suit le mode clair ou sombre et la couleur d'accentuation de votre système. Choisissez-en un ci-dessous et cette page change avec lui.",
		label: 'Thème de la page',
		system: 'Système',
		languages: "Langues de l'interface",
		languagesText:
			'Anglais, polonais, espagnol, italien, français, russe et allemand. Unisic suit la langue de votre bureau, sauf si vous en choisissez une dans les Réglages.'
	},

	privacy: {
		kicker: 'Confidentialité',
		title: 'Une seule requête, et vous pouvez la couper.',
		lede: "Pas de télémétrie, pas d'analyse, pas de compte. La seule requête qu'Unisic envoie de lui-même demande à GitHub s'il existe une version plus récente, peu après le démarrage puis une fois par jour. Rien sur vous ni sur vos captures n'est envoyé.",
		log: "Requêtes qu'Unisic envoie de lui-même",
		when: ['Après le démarrage', 'Toutes les 24 h'],
		none: 'Aucune requête automatique. Un bouton Vérifier maintenant reste dans les Réglages si vous en voulez une.',
		updates: 'Mises à jour automatiques',
		demo: "Démo de l'interrupteur des Réglages",
		uploads: "Les envois n'ont lieu que si vous appuyez sur Téléverser ou activez l'envoi après la capture, et seulement vers l'hébergeur que vous avez choisi.",
		sent: 'Ce qui est envoyé exactement'
	},

	compare: {
		kicker: 'Comparatif',
		title: 'Où il se situe face aux autres.',
		lede: "Six outils, les mêmes questions. Chaque réponse a été vérifiée dans le code source, le README ou les notes de version de chaque outil, à la version indiquée en en-tête. Vous pouvez donc vérifier vous aussi.",
		vs: 'Comparer Unisic avec',
		caption: "Comparatif d'outils de capture d'écran. Vérifié le 2026-10-26 sur le code source des versions étiquetées.",
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
			'Satty ne fait qu\'annoter : l\'image vient d\'un fichier ou de l\'entrée standard, en général de grim. Le comportement de ksnip sous Plasma 6 n\'a pas été vérifié. Vous avez repéré une erreur ? <a href="https://github.com/unisic/unisic/issues">Ouvrez un ticket</a>.'
	}
} satisfies Dictionary;
