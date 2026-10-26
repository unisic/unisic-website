import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: capturas de pantalla, grabación y OCR para Linux',
		description:
			'Con Unisic dibujas en la selección antes de capturar, grabas GIF y vídeo, sacas texto de los píxeles y subes el resultado. Capturas para Linux Wayland, sin telemetría.'
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
		kicker: 'Capturador de pantalla gratuito y de código abierto para Linux Wayland',
		title: 'Haz la captura. Unisic se encarga de todo lo que viene',
		titleMark: 'después.',
		lede: 'Captura una región o una página más larga que tu pantalla, anótala, grábala con sonido, saca el texto y súbela para tener un enlace. Todo en una app gratuita.',
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
		windowsInstaller: 'Instalador para Windows',
		experimental: 'Experimental',
		facts: ['Gratis, GPL-3.0', 'Sin cuenta', 'Sin telemetría'],
		source: 'Código en GitHub'
	},

	copy: {
		copy: 'Copiar',
		copied: 'Copiado',
		select: 'Selecciónalo',
		done: 'Copiado al portapapeles',
		failed: 'Portapapeles bloqueado, selecciona el texto a mano'
	},

	why: {
		title: 'Por qué Unisic.',
		ledeHtml:
			'De las herramientas de la <a href="#compare">comparativa</a>, solo Unisic y ShareX tienen todas las funciones, y ShareX solo funciona en Windows.',
		see: 'Míralo',
		points: [
			{
				title: 'Captura con desplazamiento',
				text: 'Una página más larga que la pantalla sale como una sola imagen. Flameshot, Spectacle, ksnip y Satty no tienen captura con desplazamiento.'
			},
			{
				title: 'Grabación con sonido',
				text: 'La misma región como GIF, MP4 o WebM, con el sonido del sistema, el micrófono o una sola app en su propia pista.'
			},
			{
				title: 'Texto y códigos QR',
				text: 'Copia el texto de cualquier captura, o saca el enlace de un código QR o de barras.'
			},
			{
				title: 'Subidas e historial',
				text: 'Tu propio servidor por HTTP, FTP o SFTP, o una configuración .sxcu de ShareX, y una miniatura de cada captura en el historial.'
			}
		]
	},

	capture: {
		kicker: 'Captura',
		title: 'Todas las formas de capturar la pantalla.',
		lede: 'Pantalla completa en todos los monitores, una región con dimensiones en vivo, la ventana activa o una página más larga que tu pantalla. Añade un retardo de hasta 60 segundos y el cursor cuando los necesites.',
		modes: [
			{ name: 'Pantalla completa', say: 'Todos los monitores en una imagen.' },
			{ name: 'Región', say: 'Arrastra un recuadro con dimensiones en vivo y anótalo antes de capturar.' },
			{ name: 'Ventana', say: 'La ventana activa, sin nada alrededor.' }
		],
		scroll: 'Una página más larga que tu pantalla',
		scrolling: 'Desplázate hacia abajo para capturar...',
		finish: 'Terminar',
		captionHtml:
			'Iníciala con <code>unisic --scroll</code>, desplaza la página y pulsa Terminar. Los trozos se unen en una sola imagen.'
	},

	edit: {
		kicker: 'Anotar y editar',
		title: 'Anótalo antes de la captura, o después.',
		lede: 'Dibuja flechas, formas, desenfoque y pasos numerados directamente en la superposición de captura y pulsa Enter para fijarlos en el recorte. Pruébalo abajo. El editor sigue desde ahí, con recorte, deshacer y zoom.'
	},

	overlay: {
		hint: 'Arrastra el marco o sus tiradores, elige una herramienta y dibuja dentro, luego pulsa Capturar.',
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
		kicker: 'Grabación',
		title: 'Graba la pantalla, con sonido.',
		lede: 'Una región, la pantalla completa o una ventana, guardada como GIF, MP4 o WebM. El sonido del sistema, el micrófono y cada app van en pistas separadas, y la repetición instantánea conserva lo último que pasó en pantalla.',
		alt: 'La página Grabación de pantalla de Unisic: Pantalla, Región o Ventana, formato WebM, velocidad de fotogramas, calidad CRF, audio del sistema, micrófono, audio de aplicaciones y una repetición de 30 segundos.',
		format: 'Formato',
		fps: '{fps} fotogramas por segundo por defecto',
		drawn: 'Dibujado en la grabación',
		effects: [
			{ name: 'Halo del puntero', say: 'mantiene el cursor fácil de encontrar en un vídeo reducido' },
			{ name: 'Ondas de clic', say: 'muestran dónde y cuándo hiciste clic' },
			{ name: 'Indicador de teclas', say: 'muestra los atajos que pulsas, desactivado hasta que lo actives' }
		]
	},

	read: {
		kicker: 'OCR y QR',
		title: 'Copia el texto de los píxeles.',
		lede: 'Selecciona cualquier texto en pantalla y recíbelo como texto. Tesseract se encarga de leerlo, en polaco e inglés y con detección automática del idioma. Apunta Unisic a un código QR o de barras y zxing-cpp te da lo que contiene.',
		region: 'Región OCR',
		lines: '{n} líneas',
		out: 'El texto reconocido va directo al portapapeles.',
		copy: 'Copiar texto',
		qr: 'Código QR de unisic.app',
		decoded: 'Decodificado'
	},

	share: {
		kicker: 'Compartir e historial',
		title: 'De la captura al enlace con una tecla.',
		lede: 'Tras una captura, Unisic puede copiar la imagen, guardarla, subirla y poner el enlace en tu portapapeles. Cada captura queda en un historial con miniaturas, y al eliminar una, el archivo va a la papelera en lugar de borrarse.',
		steps: ['Captura', 'Copiar imagen', 'Subir', 'Enlace copiado'],
		hosts: 'Sube a donde quieras.',
		customHttp: 'HTTP personalizado',
		sxcu: 'Importar .sxcu',
		history: 'Tu historial en esta página',
		emptyHtml:
			'Aún no hay nada. Arrastra una selección en la <a href="#edit">demo del editor</a> de arriba y pulsa Capturar; aparecerá aquí.'
	},

	toast: {
		captured: 'Captura de {size}',
		saved: 'Guardado en el historial'
	},

	themes: {
		kicker: 'Temas e idiomas',
		title: 'Tus colores, tu idioma.',
		lede: 'Unisic trae seis temas, más uno que sigue el esquema claro u oscuro y el color de acento de tu sistema. Elige uno abajo y esta página cambia con él.',
		label: 'Tema de la página',
		system: 'Sistema',
		languages: 'Idiomas de la interfaz',
		languagesText:
			'Inglés, polaco, español, italiano, francés, ruso y alemán. Unisic usa el idioma de tu escritorio salvo que elijas otro en Ajustes.'
	},

	privacy: {
		kicker: 'Privacidad',
		title: 'Una sola petición, y puedes desactivarla.',
		lede: 'Sin telemetría, sin analíticas, sin cuenta. La única petición que Unisic hace por su cuenta pregunta a GitHub si hay una versión más reciente, poco después de iniciarse y luego una vez al día. No se envía nada sobre ti ni sobre tus capturas.',
		log: 'Peticiones que Unisic hace por su cuenta',
		when: ['Al iniciar', 'Cada 24 h'],
		none: 'Sin peticiones automáticas. Ajustes mantiene un botón Comprobar ahora para cuando quieras hacer una.',
		updates: 'Actualizaciones automáticas',
		demo: 'Demo del interruptor de Ajustes',
		uploads: 'Solo se sube algo cuando pulsas Subir o activas la subida tras la captura, y solo al servidor que elegiste.',
		sent: 'Qué se envía exactamente'
	},

	compare: {
		kicker: 'Comparativa',
		title: 'Cómo queda frente a las demás.',
		lede: 'Seis herramientas, las mismas preguntas. Cada respuesta se comprobó en el código fuente, el README o las notas de versión de la herramienta, en la versión que indica la cabecera, para que tú también puedas comprobarla.',
		vs: 'Comparar Unisic con',
		caption: 'Comparativa de herramientas de captura. Comprobado el 2026-10-26 en el código fuente etiquetado.',
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
					'Linux, Windows 11 (experimental)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty solo anota: la imagen viene de un archivo o de la entrada estándar, normalmente de grim. No se comprobó cómo se comporta ksnip en Plasma 6. ¿Ves un error? <a href="https://github.com/unisic/unisic/issues">Abre una incidencia</a>.'
	}
} satisfies Dictionary;
