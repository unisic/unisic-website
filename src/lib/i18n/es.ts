import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: capturas de pantalla, grabación y OCR para Linux',
		description:
			'Herramienta gratuita de capturas para Linux. Captura páginas largas, anota, graba con sonido, copia texto con OCR y sube. Sin telemetría ni cuenta.'
	},

	chrome: {
		skip: 'Saltar al contenido',
		nav: 'Principal',
		features: 'Funciones',
		themes: 'Temas',
		compare: 'Comparar',
		docs: 'Docs',
		pause: 'Pausar animaciones',
		install: 'Instalar',
		menu: 'Menú',
		language: 'Idioma',
		footer: {
			label: 'Pie de página',
			mascot: 'Uni, la mascota de Unisic',
			legalHtml:
				'Unisic es software libre bajo la <a href="/docs/introduction/#license">GNU GPL v3</a>. Creado por <a href="https://github.com/DeBondor">@DeBondor</a> y <a href="https://github.com/D3anDark">@D3anDark</a>, inspirado en <a href="https://getsharex.com/">ShareX</a> y <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Proyecto',
			community: 'Comunidad',
			capture: 'Captura',
			record: 'Grabación',
			hotkeys: 'Atajos',
			compared: 'Comparativa',
			install: 'Instalar',
			source: 'Código en GitHub',
			releases: 'Versiones',
			bug: 'Informar de un error',
			docs: 'Documentación',
			kofi: 'Apóyanos en Ko-fi'
		}
	},

	hero: {
		kicker: 'Capturador de pantalla libre y gratuito para Linux',
		title: 'Haz la captura. Unisic se encarga del',
		titleMark: 'resto.',
		lede: 'Captura páginas largas, anótalas, graba con sonido, saca el texto y comparte un enlace.',
		runsOn: 'Funciona en',
		more: 'y más',
		alt: 'La página Capturar de Unisic: las tarjetas Pantalla completa, Región y Ventana con sus atajos, y debajo las opciones de captura.',
		windows: 'Windows 11, experimental',
		download: 'Descargar el instalador',
		linuxPackages: 'Paquetes para Linux',
		windowsNote: 'Se instala para tu usuario, sin permisos de administrador, y se actualiza solo.',
		anyDistro: 'Instala en cualquier distro',
		linuxNote: 'Se instala para tu usuario, sin sudo, y se actualiza solo.',
		packages: 'Paquetes por distro, Nix',
		windowsInstaller: 'Instalador de Windows',
		experimental: 'Experimental',
		facts: ['Sin cuenta', 'Sin telemetría'],
		source: 'Código en GitHub'
	},

	copy: {
		copy: 'Copiar',
		copied: 'Copiado',
		select: 'Selecciónalo',
		done: 'Copiado al portapapeles',
		failed: 'Portapapeles bloqueado, selecciona el texto a mano'
	},

	capture: {
		title: 'Todas las formas de capturar la pantalla.',
		lede: 'Añade un retardo de hasta 60 segundos, con o sin cursor.',
		modes: [
			{ name: 'Pantalla completa', say: 'Todos los monitores en una imagen.' },
			{ name: 'Región', say: 'Arrastra un recuadro y dibuja en él antes de capturar.' },
			{ name: 'Ventana', say: 'La ventana activa, sin nada alrededor.' }
		],
		scroll: 'Una página más larga que tu pantalla',
		scrolling: 'Desplázate hacia abajo para capturar...',
		finish: 'Terminar',
		captionHtml:
			'Ejecuta <code>unisic --scroll</code>, desplázate y pulsa Terminar. Obtienes una sola imagen.'
	},

	edit: {
		title: 'Anótalo antes de la captura, o después.',
		lede: 'Dibuja en la superposición y pulsa Enter. Recorta y retoca después en el editor.'
	},

	overlay: {
		hint: 'Arrastra el marco, elige una herramienta, dibuja y pulsa Capturar.',
		keys: 'Las flechas mueven el marco, Enter captura y Esc restablece.',
		tool: 'Herramienta:',
		headline: 'Selecciona. Dibuja encima. Pulsa',
		headlineMark: 'Enter.',
		label: 'Demo de la superposición de captura',
		toolsLabel: 'Herramientas',
		colorLabel: 'Color',
		tools: {
			select: 'Seleccionar',
			pen: 'Lápiz',
			line: 'Línea',
			arrow: 'Flecha',
			measure: 'Medir',
			rect: 'Rectángulo',
			ellipse: 'Elipse',
			highlight: 'Resaltar',
			blur: 'Desenfocar',
			step: 'Número de paso',
			erase: 'Borrador inteligente'
		},
		colors: ['Rojo', 'Amarillo', 'Verde', 'Azul', 'Lavanda', 'Blanco'],
		undoTitle: 'Deshacer (Ctrl+Z)',
		undo: 'Deshacer',
		capture: 'Capturar'
	},

	record: {
		title: 'Graba la pantalla, con sonido.',
		lede: 'GIF, MP4 o WebM. Sonido del sistema, micrófono y apps en pistas separadas. La repetición instantánea guarda lo que acaba de pasar.',
		alt: 'La página Grabación de pantalla de Unisic: Pantalla, Región o Ventana, formato WebM, velocidad de fotogramas, calidad CRF, audio del sistema, micrófono, audio de aplicaciones y una repetición de 30 segundos.',
		format: 'Formato',
		fps: '{fps} fotogramas por segundo por defecto',
		drawn: 'Dibujado en la grabación',
		effects: [
			{ name: 'Halo del puntero', say: 'facilita ver el cursor' },
			{ name: 'Ondas de clic', say: 'muestran dónde y cuándo hiciste clic' },
			{ name: 'Indicador de teclas', say: 'muestra las teclas que pulsas, desactivado por defecto' }
		]
	},

	read: {
		title: 'Copia el texto de los píxeles.',
		lede: 'Selecciona texto en pantalla y pégalo donde quieras. Tesseract lee inglés y polaco, zxing-cpp decodifica códigos QR y de barras.',
		region: 'Región OCR',
		lines: '{n} líneas',
		out: 'El texto reconocido va directo al portapapeles.',
		copy: 'Copiar texto',
		qr: 'Código QR de unisic.app',
		decoded: 'Decodificado'
	},

	share: {
		title: 'De la captura al enlace con una tecla.',
		lede: 'Cada captura queda en un historial con miniaturas. Al eliminar una, el archivo va a la papelera.',
		steps: ['Captura', 'Copiar imagen', 'Subir', 'Enlace copiado'],
		hosts: 'Sube a donde quieras.',
		customHttp: 'HTTP personalizado',
		sxcu: 'Importar .sxcu',
		history: 'Tu historial en esta página',
		emptyHtml:
			'Aún no hay nada. Pulsa Capturar en la <a href="#edit">demo de arriba</a>.'
	},

	toast: {
		captured: 'Captura de {size}',
		saved: 'Guardado en el historial'
	},

	themes: {
		title: 'Seis temas, siete idiomas.',
		lede: 'Sistema sigue tu modo claro u oscuro y tu color de acento. Elige un tema y esta página también cambia.',
		label: 'Tema de la página',
		system: 'Sistema',
		languages: 'Idiomas de la interfaz',
		languagesText:
			'Inglés, polaco, español, italiano, francés, ruso y alemán. Unisic usa el idioma de tu escritorio salvo que elijas otro.'
	},

	privacy: {
		title: 'Una sola petición, y puedes desactivarla.',
		lede: 'Sin telemetría, sin analíticas, sin cuenta. La única petición automática comprueba en GitHub si hay actualizaciones y no envía nada sobre ti.',
		log: 'Peticiones que Unisic hace por su cuenta',
		when: ['Al iniciar', 'Cada 24 h'],
		none: 'Sin peticiones automáticas. Ajustes sigue teniendo Comprobar ahora.',
		updates: 'Actualizaciones automáticas',
		demo: 'Demo del interruptor de Ajustes',
		uploads: 'Solo se sube algo cuando tú lo pides, y solo al servidor que elegiste.',
		sent: 'Qué se envía exactamente'
	},

	compare: {
		title: 'Cómo se compara.',
		lede: 'De estas herramientas para Linux, solo Unisic tiene las cuatro: captura con desplazamiento, grabación con sonido, OCR y subidas. Cada respuesta se comprobó en el código fuente de la versión indicada.',
		vs: 'Comparar Unisic con',
		caption: 'Comparativa de herramientas de captura, comprobada el 2026-10-26.',
		say: { y: 'Sí', p: 'En parte', n: 'No' },
		rows: [
			{
				feature: 'Dibujar en la superposición de captura',
				notes: ['Enter lo fija en el recorte', '', '', 'Solo lupa y reglas', 'Anota una imagen tomada por otra herramienta', '']
			},
			{ feature: 'Editor de imágenes', notes: ['', 'No abre imágenes existentes', '', '', '', ''] },
			{ feature: 'Captura con desplazamiento', notes: ['', '', '', '', '', ''] },
			{ feature: 'Grabación de GIF', notes: ['', '', '', '', '', ''] },
			{ feature: 'Grabación de vídeo', notes: ['MP4 y WebM', '', 'Solo Wayland', '', '', ''] },
			{ feature: 'Sonido en las grabaciones', notes: ['Sistema, micrófono y por app', '', 'Desde Plasma 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Desde Plasma 6.6', 'Plugin aparte', '', ''] },
			{ feature: 'Lectura de códigos QR', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Destinos de subida propios',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Solo Imgur, desactivado por defecto', 'Menú Compartir de KDE', 'Imgur, FTP, scripts', '', '.sxcu, FTP, SFTP']
			},
			{ feature: 'Historial con miniaturas', notes: ['Eliminar mueve a la papelera', 'Solo subidas a Imgur', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portales, KWin, PipeWire', 'Portal', 'Solo KWin', 'Portal o KWin heredado', 'La captura la hace grim', '']
			},
			{ feature: 'X11', notes: ['Segundo objetivo, sin garantías', 'Portal o X11 heredado', '', '', 'No indicado', ''] },
			{
				feature: 'Plataformas',
				notes: [
					'Linux, Windows\u00a011 (experimental)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty solo anota imágenes de otras herramientas, normalmente de grim. No se comprobó ksnip en Plasma 6. ¿Ves un error? <a href="https://github.com/unisic/unisic/issues">Abre una incidencia</a>.'
	}
} satisfies Dictionary;
