import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: zrzuty ekranu, nagrywanie i OCR na Linuksa',
		description:
			'Unisic pozwala rysować na zaznaczeniu przed zrzutem, nagrywa GIF-y i wideo, odczytuje tekst z obrazu i wysyła wynik na serwer. Program do zrzutów ekranu na Linuksa z Waylandem, bez telemetrii.'
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
		kicker: 'Darmowy program do zrzutów ekranu na Linuksa',
		title: 'Zrób zrzut. Unisic zajmie się',
		titleMark: 'resztą.',
		lede: 'Zaznacz obszar albo długą stronę, dorysuj strzałki, nagraj ekran z dźwiękiem, skopiuj tekst i wyślij link. Wszystko w jednym programie.',
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
		facts: ['Darmowy, GPL-3.0', 'Bez konta', 'Bez telemetrii'],
		source: 'Kod źródłowy na GitHubie'
	},

	copy: {
		copy: 'Kopiuj',
		copied: 'Skopiowano',
		select: 'Zaznacz',
		done: 'Skopiowano do schowka',
		failed: 'Schowek zablokowany, zaznacz tekst ręcznie'
	},

	why: {
		title: 'Dlaczego Unisic.',
		ledeHtml:
			'Z programów w <a href="#compare">porównaniu</a> wszystkie te funkcje mają tylko Unisic i ShareX. ShareX działa tylko na Windowsie.',
		see: 'Zobacz',
		points: [
			{
				title: 'Zrzuty z przewijaniem',
				text: 'Strona dłuższa niż ekran trafia do jednego obrazu. Flameshot, Spectacle, ksnip i Satty tego nie potrafią.'
			},
			{
				title: 'Nagrywanie z dźwiękiem',
				text: 'Ten sam obszar jako GIF, MP4 lub WebM. Dźwięk systemu, mikrofon albo jedna aplikacja na osobnej ścieżce.'
			},
			{
				title: 'Tekst i kody QR',
				text: 'Skopiuj tekst z dowolnego zrzutu albo odczytaj link z kodu QR lub kreskowego.'
			},
			{
				title: 'Wysyłanie i historia',
				text: 'Własny serwer przez HTTP, FTP lub SFTP albo konfiguracja .sxcu z ShareX. W historii miniatura każdego zrzutu.'
			}
		]
	},

	capture: {
		kicker: 'Zrzuty ekranu',
		title: 'Każdy sposób na zrzut ekranu.',
		lede: 'Pełny ekran na wszystkich monitorach, obszar z wymiarami na żywo, aktywne okno albo strona dłuższa niż ekran. Gdy trzeba, dodaj kursor i opóźnienie do 60 sekund.',
		modes: [
			{ name: 'Pełny ekran', say: 'Wszystkie monitory na jednym obrazie.' },
			{ name: 'Obszar', say: 'Ramka z wymiarami na żywo. Rysujesz w niej przed zrzutem.' },
			{ name: 'Okno', say: 'Aktywne okno i nic poza nim.' }
		],
		scroll: 'Strona dłuższa niż ekran',
		scrolling: 'Przewiń w dół...',
		finish: 'Zakończ',
		captionHtml:
			'Uruchom <code>unisic --scroll</code>, przewiń stronę i naciśnij Zakończ. Unisic sklei fragmenty w jeden obraz.'
	},

	edit: {
		kicker: 'Adnotacje i edycja',
		title: 'Rysuj przed zrzutem i po nim.',
		lede: 'Strzałki, kształty, rozmycie i numerowane kroki rysujesz od razu na nakładce, a Enter utrwala je w zrzucie. Wypróbuj poniżej. Resztę zrobisz w edytorze: kadrowanie, cofanie, powiększanie.'
	},

	overlay: {
		hint: 'Przeciągnij ramkę lub jej uchwyty, wybierz narzędzie i rysuj w środku. Potem naciśnij Przechwyć.',
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
		kicker: 'Nagrywanie',
		title: 'Nagrywaj ekran z dźwiękiem.',
		lede: 'Obszar, pełny ekran lub okno jako GIF, MP4 albo WebM. Dźwięk systemu, mikrofon i pojedyncze aplikacje trafiają na osobne ścieżki. Natychmiastowa powtórka zachowuje ostatnie chwile z ekranu.',
		alt: 'Strona Nagrywanie ekranu w Unisic: Ekran, Obszar lub Okno, format WebM, liczba klatek, jakość CRF, dźwięk systemowy, mikrofon, dźwięk aplikacji i długość powtórki 30 sekund.',
		format: 'Format',
		fps: 'Domyślnie {fps} klatek na sekundę',
		drawn: 'Widoczne na nagraniu',
		effects: [
			{ name: 'Poświata kursora', say: 'ułatwia znalezienie kursora w pomniejszonym wideo' },
			{ name: 'Fale kliknięć', say: 'pokazują, gdzie i kiedy klikasz' },
			{ name: 'Wskaźnik klawiszy', say: 'pokazuje naciskane skróty, domyślnie wyłączony' }
		]
	},

	read: {
		kicker: 'OCR i QR',
		title: 'Kopiuj tekst prosto z pikseli.',
		lede: 'Zaznacz napis na ekranie i skopiuj go jako tekst. Tesseract czyta po polsku i angielsku, a język rozpoznaje sam. Wskaż kod QR lub kreskowy, a zxing-cpp odczyta jego zawartość.',
		region: 'Obszar OCR',
		lines: '{n} wierszy',
		out: 'Rozpoznany tekst trafia prosto do schowka.',
		copy: 'Kopiuj tekst',
		qr: 'Kod QR z adresem unisic.app',
		decoded: 'Odczytano'
	},

	share: {
		kicker: 'Udostępnianie i historia',
		title: 'Zrzut i link jednym klawiszem.',
		lede: 'Po zrzucie Unisic może skopiować obraz, zapisać go, wysłać na serwer i skopiować link. Każdy zrzut trafia do historii z miniaturą, a usunięty plik ląduje w koszu.',
		steps: ['Przechwyć', 'Kopiuj obraz', 'Wyślij', 'Link w schowku'],
		hosts: 'Wysyłaj, gdzie chcesz.',
		customHttp: 'Własny serwer HTTP',
		sxcu: 'Import .sxcu',
		history: 'Twoja historia na tej stronie',
		emptyHtml: 'Na razie pusto. Zaznacz obszar w <a href="#edit">demo</a> wyżej i naciśnij Przechwyć.'
	},

	toast: {
		captured: 'Przechwycono {size}',
		saved: 'Zapisano w historii'
	},

	themes: {
		kicker: 'Motywy i języki',
		title: 'Twoje kolory, twój język.',
		lede: 'Sześć motywów w zestawie i siódmy, który bierze z systemu jasny lub ciemny tryb i kolor akcentu. Wybierz jeden poniżej, a ta strona też się zmieni.',
		label: 'Motyw strony',
		system: 'Systemowy',
		languages: 'Języki interfejsu',
		languagesText:
			'Angielski, polski, hiszpański, włoski, francuski, rosyjski i niemiecki. Unisic bierze język z pulpitu, chyba że wybierzesz inny w Ustawieniach.'
	},

	privacy: {
		kicker: 'Prywatność',
		title: 'Jedno zapytanie. I to opcjonalne.',
		lede: 'Bez telemetrii, analityki i konta. Unisic sam z siebie pyta tylko GitHuba, czy jest nowsza wersja: chwilę po starcie, potem raz na dobę. Nie wysyła nic o tobie ani o twoich zrzutach.',
		log: 'Zapytania, które Unisic wysyła sam',
		when: ['Po starcie', 'Co 24 h'],
		none: 'Brak automatycznych zapytań. W Ustawieniach zostaje przycisk Sprawdź teraz.',
		updates: 'Automatyczne aktualizacje',
		demo: 'Demo przełącznika z Ustawień',
		uploads: 'Pliki wysyłasz tylko ty: przyciskiem Wyślij albo opcją wysyłania po zrzucie, i tylko na wybrany serwer.',
		sent: 'Co dokładnie jest wysyłane'
	},

	compare: {
		kicker: 'Porównanie',
		title: 'Jak wypada na tle innych.',
		lede: 'Sześć programów, te same pytania. Każdą odpowiedź sprawdziliśmy w kodzie, README albo opisie wydania wersji z nagłówka, więc ty też możesz.',
		vs: 'Porównaj Unisic z programem',
		caption: 'Programy do zrzutów ekranu. Sprawdzone 2026-10-26 w kodzie oznaczonych wydań.',
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
			'Satty tylko rysuje: obraz bierze z pliku lub standardowego wejścia, zwykle z grim. Działania ksnip w Plasmie 6 nie sprawdzaliśmy. Widzisz błąd? <a href="https://github.com/unisic/unisic/issues">Zgłoś go</a>.'
	}
} satisfies Dictionary;
