import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: zrzuty ekranu, nagrywanie i OCR na Linuksa',
		description:
			'Darmowy program do zrzutów ekranu na Linuksa. Długie strony, rysowanie, nagrywanie z dźwiękiem, OCR i wysyłanie. Bez telemetrii i konta.'
	},

	chrome: {
		skip: 'Przejdź do treści',
		nav: 'Nawigacja główna',
		features: 'Funkcje',
		themes: 'Motywy',
		compare: 'Porównanie',
		docs: 'Dokumentacja',
		pause: 'Wstrzymaj animacje',
		install: 'Zainstaluj',
		menu: 'Menu',
		language: 'Język',
		footer: {
			label: 'Stopka',
			mascot: 'Uni, maskotka Unisic',
			legalHtml:
				'Unisic to wolne oprogramowanie na licencji <a href="/docs/introduction/#license">GNU GPL v3</a>. Tworzą go <a href="https://github.com/DeBondor">@DeBondor</a> i <a href="https://github.com/D3anDark">@D3anDark</a>, a inspiracją były <a href="https://getsharex.com/">ShareX</a> i <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Projekt',
			community: 'Społeczność',
			capture: 'Zrzuty ekranu',
			record: 'Nagrywanie',
			hotkeys: 'Skróty klawiszowe',
			compared: 'Porównanie',
			install: 'Instalacja',
			source: 'Kod źródłowy na GitHubie',
			releases: 'Wydania',
			bug: 'Zgłoś błąd',
			docs: 'Dokumentacja',
			kofi: 'Wesprzyj na Ko-fi'
		}
	},

	hero: {
		kicker: 'Darmowy program open source do zrzutów ekranu na Linuksa',
		title: 'Zrób zrzut. Unisic zajmie się',
		titleMark: 'resztą.',
		lede: 'Rób zrzuty długich stron, rysuj na nich, nagrywaj z dźwiękiem, kopiuj tekst i wysyłaj link.',
		runsOn: 'Działa w',
		more: 'i innych',
		alt: 'Strona Przechwytywanie w Unisic: karty Pełny ekran, Obszar i Okno ze skrótami, a pod nimi opcje przechwytywania.',
		windows: 'Windows 11, wersja eksperymentalna',
		download: 'Pobierz instalator',
		linuxPackages: 'Pakiety dla Linuksa',
		windowsNote: 'Bez praw administratora, na twoim koncie. Sam się aktualizuje.',
		anyDistro: 'Zainstaluj na dowolnej dystrybucji',
		linuxNote: 'Bez sudo, na twoim koncie. Sam się aktualizuje.',
		packages: 'Pakiety dla dystrybucji i Nix',
		windowsInstaller: 'Instalator Windows',
		experimental: 'Eksperymentalny',
		facts: ['Bez konta', 'Bez telemetrii'],
		source: 'Kod źródłowy na GitHubie'
	},

	copy: {
		copy: 'Kopiuj',
		copied: 'Skopiowano',
		select: 'Zaznacz',
		done: 'Skopiowano do schowka',
		failed: 'Schowek zablokowany, zaznacz tekst ręcznie'
	},

	capture: {
		title: 'Każdy sposób na zrzut ekranu.',
		lede: 'Dodaj opóźnienie do 60 sekund, z kursorem lub bez.',
		modes: [
			{ name: 'Pełny ekran', say: 'Wszystkie monitory na jednym obrazie.' },
			{ name: 'Obszar', say: 'Przeciągnij ramkę i rysuj w niej przed zrzutem.' },
			{ name: 'Okno', say: 'Aktywne okno i nic poza nim.' }
		],
		scroll: 'Strona dłuższa niż ekran',
		scrolling: 'Przewiń w dół...',
		finish: 'Zakończ',
		captionHtml:
			'Uruchom <code>unisic --scroll</code>, przewiń, naciśnij Zakończ. Dostajesz jeden obraz.'
	},

	edit: {
		title: 'Rysuj przed zrzutem i po nim.',
		lede: 'Rysuj na nakładce, naciśnij Enter. Kadrowanie i poprawki potem w edytorze.'
	},

	overlay: {
		hint: 'Przeciągnij ramkę, wybierz narzędzie, rysuj i naciśnij Przechwyć.',
		keys: 'Strzałki przesuwają ramkę, Enter robi zrzut, Esc resetuje.',
		tool: 'Narzędzie:',
		headline: 'Zaznacz. Narysuj. Naciśnij',
		headlineMark: 'Enter.',
		label: 'Demo nakładki przechwytywania',
		toolsLabel: 'Narzędzia',
		colorLabel: 'Kolor',
		tools: {
			select: 'Zaznacz',
			pen: 'Pióro',
			line: 'Linia',
			arrow: 'Strzałka',
			measure: 'Pomiar',
			rect: 'Prostokąt',
			ellipse: 'Elipsa',
			highlight: 'Zakreślacz',
			blur: 'Rozmycie',
			step: 'Numer kroku',
			erase: 'Sprytna gumka'
		},
		colors: ['Czerwony', 'Żółty', 'Zielony', 'Niebieski', 'Lawendowy', 'Biały'],
		undoTitle: 'Cofnij (Ctrl+Z)',
		undo: 'Cofnij',
		capture: 'Przechwyć'
	},

	record: {
		title: 'Nagrywaj ekran z dźwiękiem.',
		lede: 'GIF, MP4 lub WebM. Dźwięk systemu, mikrofonu i aplikacji na osobnych ścieżkach. Natychmiastowa powtórka zapisze to, co właśnie się stało.',
		alt: 'Strona Nagrywanie ekranu w Unisic: Ekran, Obszar lub Okno, format WebM, liczba klatek, jakość CRF, dźwięk systemowy, mikrofon, dźwięk aplikacji i długość powtórki 30 sekund.',
		format: 'Format',
		fps: 'Domyślnie {fps} klatek na sekundę',
		drawn: 'Widoczne na nagraniu',
		effects: [
			{ name: 'Poświata kursora', say: 'ułatwia dostrzeżenie kursora' },
			{ name: 'Fale kliknięć', say: 'pokazują, gdzie i kiedy klikasz' },
			{ name: 'Wskaźnik klawiszy', say: 'pokazuje naciskane klawisze, domyślnie wyłączony' }
		]
	},

	read: {
		title: 'Kopiuj tekst prosto z pikseli.',
		lede: 'Zaznacz tekst na ekranie i wklej go, gdzie chcesz. Tesseract czyta po polsku i angielsku, zxing-cpp odczytuje kody QR i kreskowe.',
		region: 'Obszar OCR',
		lines: '{n} wierszy',
		out: 'Rozpoznany tekst trafia prosto do schowka.',
		copy: 'Kopiuj tekst',
		qr: 'Kod QR z adresem unisic.app',
		decoded: 'Odczytano'
	},

	share: {
		title: 'Zrzut i link jednym klawiszem.',
		lede: 'Każdy zrzut trafia do historii z miniaturą. Usunięty plik ląduje w koszu.',
		steps: ['Przechwyć', 'Kopiuj obraz', 'Wyślij', 'Link w schowku'],
		hosts: 'Wysyłaj, gdzie chcesz.',
		customHttp: 'Własny serwer HTTP',
		sxcu: 'Import .sxcu',
		history: 'Twoja historia na tej stronie',
		emptyHtml: 'Na razie pusto. Naciśnij Przechwyć w <a href="#edit">demo wyżej</a>.'
	},

	toast: {
		captured: 'Przechwycono {size}',
		saved: 'Zapisano w historii'
	},

	themes: {
		title: 'Sześć motywów, siedem języków.',
		lede: 'Systemowy bierze z pulpitu jasny lub ciemny tryb i kolor akcentu. Wybierz motyw, a ta strona też się zmieni.',
		label: 'Motyw strony',
		system: 'Systemowy',
		languages: 'Języki interfejsu',
		languagesText:
			'Angielski, polski, hiszpański, włoski, francuski, rosyjski i niemiecki. Unisic bierze język z pulpitu, chyba że wybierzesz inny.'
	},

	privacy: {
		title: 'Jedno zapytanie. I to opcjonalne.',
		lede: 'Bez telemetrii, analityki i konta. Jedyne automatyczne zapytanie sprawdza na GitHubie aktualizacje i nie wysyła nic o tobie.',
		log: 'Zapytania, które Unisic wysyła sam',
		when: ['Po starcie', 'Co 24 h'],
		none: 'Brak automatycznych zapytań. W Ustawieniach zostaje Sprawdź teraz.',
		updates: 'Automatyczne aktualizacje',
		demo: 'Demo przełącznika z Ustawień',
		uploads: 'Pliki idą tylko na twoje żądanie i tylko na wybrany serwer.',
		sent: 'Co dokładnie jest wysyłane'
	},

	compare: {
		title: 'Unisic na tle innych.',
		lede: 'Z tych programów na Linuksa wszystkie cztery ma tylko Unisic: zrzuty z przewijaniem, nagrywanie z dźwiękiem, OCR i wysyłanie. Każdą odpowiedź sprawdziliśmy w kodzie wersji z nagłówka.',
		vs: 'Porównaj Unisic z programem',
		caption: 'Programy do zrzutów ekranu, sprawdzone 2026-10-26.',
		say: { y: 'Tak', p: 'Częściowo', n: 'Nie' },
		rows: [
			{
				feature: 'Ry\u00adso\u00adwa\u00adnie przed zrzutem',
				notes: ['Enter utrwala rysunek', '', '', 'Tylko lupa i linijki', 'Rysuje na obrazie z innego programu', '']
			},
			{ feature: 'Edytor obrazów', notes: ['', 'Nie otwiera gotowych plików', '', '', '', ''] },
			{ feature: 'Zrzuty z prze\u00adwi\u00adja\u00adniem', notes: ['', '', '', '', '', ''] },
			{ feature: 'Na\u00adgry\u00adwa\u00adnie do GIF', notes: ['', '', '', '', '', ''] },
			{ feature: 'Na\u00adgry\u00adwa\u00adnie wideo', notes: ['MP4 i WebM', '', 'Tylko Wayland', '', '', ''] },
			{ feature: 'Dźwięk w na\u00adgra\u00adniach', notes: ['System, mikrofon, aplikacje', '', 'Od Plasmy 6.8', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', 'Od Plasmy 6.6', 'Osobna wtyczka', '', ''] },
			{ feature: 'Odczyt kodów QR', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Wy\u00adsy\u00adła\u00adnie na własny serwer',
				notes: ['.sxcu, HTTP, FTP, SFTP', 'Tylko Imgur, domyślnie wyłączone', 'Menu Udostępnij z KDE', 'Imgur, FTP, skrypty', '', '.sxcu, FTP, SFTP']
			},
			{
				feature: 'Historia z mi\u00adnia\u00adtu\u00adra\u00admi',
				notes: ['Usunięte trafiają do kosza', 'Tylko wysłane na Imgur', '', '', '', '']
			},
			{
				feature: 'Wayland',
				notes: ['Portale, KWin, PipeWire', 'Portal', 'Tylko KWin', 'Portal lub stare API KWin', 'Zrzut robi grim', '']
			},
			{ feature: 'X11', notes: ['Drugi cel, bez gwarancji', 'Portal lub stare API X11', '', '', 'Brak informacji', ''] },
			{
				feature: 'Plat\u00adfor\u00admy',
				notes: [
					'Linux, Windows\u00a011 (testowo)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty tylko rysuje na obrazach z innych programów, zwykle z grim. ksnip w Plasmie 6 nie sprawdzaliśmy. Widzisz błąd? <a href="https://github.com/unisic/unisic/issues">Zgłoś go</a>.'
	}
} satisfies Dictionary;
