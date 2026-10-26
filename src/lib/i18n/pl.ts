import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic: zrzuty ekranu, nagrywanie i OCR dla systemu Linux',
		description:
			'W Unisic rysujesz po zaznaczeniu przed zrzutem, nagrywasz GIF-y i wideo, wyciągasz tekst z pikseli i przesyłasz wynik. Dla systemu Linux z Waylandem, bez telemetrii.'
	},

	chrome: {
		skip: 'Przejdź do treści',
		nav: 'Główna',
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
				'Unisic to wolne oprogramowanie na licencji <a href="/docs/introduction/#license">GNU GPL v3</a>. Tworzą go <a href="https://github.com/DeBondor">@DeBondor</a> i <a href="https://github.com/D3anDark">@D3anDark</a>, inspirując się programami <a href="https://getsharex.com/">ShareX</a> i <a href="https://apps.kde.org/spectacle/">Spectacle</a>.',
			project: 'Projekt',
			community: 'Społeczność',
			capture: 'Przechwytywanie',
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
		kicker: 'Darmowy, otwartoźródłowy program do zrzutów ekranu dla systemu Linux z Waylandem',
		title: 'Zrób zrzut. Unisic zajmie się',
		titleMark: 'resztą.',
		lede: 'Zrób zrzut obszaru albo strony dłuższej niż ekran, dorysuj na nim, co trzeba, nagraj ekran z dźwiękiem, wyciągnij tekst i prześlij link. Wszystko w jednym darmowym programie.',
		runsOn: 'Działa w',
		more: 'i innych',
		alt: 'Strona Przechwytywanie w Unisic: karty Pełny ekran, Obszar i Okno ze skrótami, a pod nimi opcje przechwytywania.',
		windows: 'Windows 11, wersja eksperymentalna',
		download: 'Pobierz instalator',
		linuxPackages: 'Pakiety dla systemu Linux',
		windowsNote: 'Instaluje się na twoim koncie, bez uprawnień administratora, aktualizuje się sam.',
		anyDistro: 'Zainstaluj na dowolnej dystrybucji',
		linuxNote: 'Instaluje się na twoim koncie, bez sudo, aktualizuje się sam.',
		packages: 'Pakiety dla dystrybucji, Nix',
		windowsInstaller: 'Instalator dla Windows',
		experimental: 'Eksperymentalny',
		facts: ['Darmowy, GPL-3.0', 'Bez konta', 'Bez telemetrii'],
		source: 'Kod źródłowy na GitHubie'
	},

	copy: {
		copy: 'Kopiuj',
		copied: 'Skopiowano',
		select: 'Zaznacz',
		done: 'Skopiowano do schowka',
		failed: 'Schowek jest zablokowany, zaznacz tekst ręcznie'
	},

	why: {
		title: 'Dlaczego Unisic.',
		ledeHtml:
			'Spośród programów w <a href="#compare">porównaniu</a> wszystkie funkcje mają tylko Unisic i ShareX, a ShareX działa wyłącznie w systemie Windows.',
		see: 'Zobacz',
		points: [
			{
				title: 'Przechwytywanie z przewijaniem',
				text: 'Strona dłuższa niż ekran zapisuje się jako jeden obraz. Flameshot, Spectacle, ksnip i Satty nie mają przechwytywania z przewijaniem.'
			},
			{
				title: 'Nagrywanie z dźwiękiem',
				text: 'Ten sam obszar jako GIF, MP4 albo WebM, z dźwiękiem systemu, mikrofonu albo jednej aplikacji na osobnej ścieżce.'
			},
			{
				title: 'Tekst i kody QR',
				text: 'Skopiuj tekst z dowolnego zrzutu albo wyciągnij link z kodu QR lub kodu kreskowego.'
			},
			{
				title: 'Przesyłanie i historia',
				text: 'Własny serwer przez HTTP, FTP lub SFTP albo plik konfiguracyjny .sxcu z ShareX, a w historii miniatura każdego zrzutu.'
			}
		]
	},

	capture: {
		kicker: 'Przechwytywanie',
		title: 'Wszystkie sposoby na zrzut ekranu.',
		lede: 'Pełny ekran na wszystkich monitorach, obszar z wymiarami na żywo, aktywne okno albo strona dłuższa niż ekran. W razie potrzeby dodaj opóźnienie do 60 sekund i kursor.',
		modes: [
			{ name: 'Pełny ekran', say: 'Wszystkie monitory na jednym obrazie.' },
			{ name: 'Obszar', say: 'Przeciągnij ramkę z wymiarami na żywo i rysuj w niej jeszcze przed zrzutem.' },
			{ name: 'Okno', say: 'Aktywne okno, bez niczego wokół.' }
		],
		scroll: 'Strona dłuższa niż ekran',
		scrolling: 'Przewiń w dół, aby przechwytywać...',
		finish: 'Zakończ',
		captionHtml:
			'Uruchom <code>unisic --scroll</code>, przewiń stronę i naciśnij Zakończ. Fragmenty zostaną sklejone w jeden obraz.'
	},

	edit: {
		kicker: 'Adnotacje i edycja',
		title: 'Rysuj przed zrzutem albo po nim.',
		lede: 'Rysuj strzałki, kształty, rozmycie i numerowane kroki prosto w nakładce przechwytywania, a potem naciśnij Enter, żeby utrwalić je w kadrze. Wypróbuj to poniżej. Dalej możesz pracować w edytorze, który ma kadrowanie, cofanie i powiększanie.'
	},

	overlay: {
		hint: 'Przeciągnij ramkę lub jej uchwyty, wybierz narzędzie i rysuj w środku, a potem naciśnij Przechwyć.',
		keys: 'Strzałki przesuwają ramkę, Enter przechwytuje, Esc resetuje.',
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
			erase: 'Inteligentna gumka'
		},
		colors: ['Czerwony', 'Żółty', 'Zielony', 'Niebieski', 'Lawendowy', 'Biały'],
		undoTitle: 'Cofnij (Ctrl+Z)',
		undo: 'Cofnij',
		capture: 'Przechwyć'
	},

	record: {
		kicker: 'Nagrywanie',
		title: 'Nagrywaj ekran z dźwiękiem.',
		lede: 'Obszar, pełny ekran albo okno, zapisane jako GIF, MP4 lub WebM. Dźwięk systemowy, mikrofon i pojedyncze aplikacje trafiają na osobne ścieżki, a powtórka błyskawiczna zachowuje ostatnie chwile z ekranu.',
		alt: 'Strona Nagrywanie ekranu w Unisic: Ekran, Obszar lub Okno, format WebM, liczba klatek, jakość CRF, dźwięk systemowy, mikrofon, dźwięk aplikacji i długość powtórki 30 sekund.',
		format: 'Format',
		fps: 'Domyślnie {fps} klatek na sekundę',
		drawn: 'Widoczne na nagraniu',
		effects: [
			{ name: 'Poświata kursora', say: 'pomaga znaleźć kursor w pomniejszonym wideo' },
			{ name: 'Fale kliknięć', say: 'pokazują, gdzie i kiedy klikasz' },
			{ name: 'Plakietka klawiszy', say: 'pokazuje naciskane skróty, domyślnie wyłączona' }
		]
	},

	read: {
		kicker: 'OCR i QR',
		title: 'Kopiuj tekst prosto z pikseli.',
		lede: 'Zaznacz dowolny napis na ekranie, a dostaniesz go jako tekst. Odczytem zajmuje się Tesseract, który rozpoznaje polski i angielski, a język wykrywa sam. Wskaż kod QR lub kreskowy, a zxing-cpp poda ci jego zawartość.',
		region: 'Obszar OCR',
		lines: '{n} wierszy',
		out: 'Rozpoznany tekst trafia prosto do schowka.',
		copy: 'Kopiuj tekst',
		qr: 'Kod QR prowadzący do unisic.app',
		decoded: 'Odczytano'
	},

	share: {
		kicker: 'Udostępnianie i historia',
		title: 'Od zrzutu do linku jednym klawiszem.',
		lede: 'Po zrzucie Unisic może skopiować obraz, zapisać go, przesłać i umieścić link w schowku. Każdy zrzut trafia do historii z miniaturami, a usunięcie przenosi plik do kosza, zamiast go kasować.',
		steps: ['Przechwyć', 'Kopiuj obraz', 'Wyślij', 'Link skopiowany'],
		hosts: 'Przesyłaj, gdzie chcesz.',
		customHttp: 'Własny serwer HTTP',
		sxcu: 'Import .sxcu',
		history: 'Twoja historia na tej stronie',
		emptyHtml:
			'Na razie pusto. Zaznacz obszar w <a href="#edit">demo edytora</a> powyżej i naciśnij Przechwyć, a zrzut pojawi się tutaj.'
	},

	toast: {
		captured: 'Przechwycono {size}',
		saved: 'Zapisano w historii'
	},

	themes: {
		kicker: 'Motywy i języki',
		title: 'Twoje kolory, twój język.',
		lede: 'Unisic ma sześć wbudowanych motywów i siódmy, który przejmuje z systemu jasny lub ciemny schemat i kolor akcentu. Wybierz jeden poniżej, a ta strona zmieni wygląd razem z nim.',
		label: 'Motyw strony',
		system: 'Systemowy',
		languages: 'Języki interfejsu',
		languagesText:
			'Angielski, polski, hiszpański, włoski, francuski, rosyjski i niemiecki. Unisic używa języka pulpitu, chyba że wybierzesz inny w Ustawieniach.'
	},

	privacy: {
		kicker: 'Prywatność',
		title: 'Jedno zapytanie, które możesz wyłączyć.',
		lede: 'Bez telemetrii, bez analityki, bez konta. Jedyne zapytanie, które Unisic wysyła sam z siebie, sprawdza na GitHubie, czy jest nowsze wydanie: krótko po uruchomieniu, a potem raz na dobę. Nie wysyła nic o tobie ani o twoich zrzutach.',
		log: 'Zapytania, które Unisic wysyła sam',
		when: ['Po starcie', 'Co 24 h'],
		none: 'Brak automatycznych zapytań. Gdy zechcesz, użyj przycisku Sprawdź teraz w Ustawieniach.',
		updates: 'Automatyczne aktualizacje',
		demo: 'Demo przełącznika z Ustawień',
		uploads: 'Pliki trafiają na serwer tylko wtedy, gdy naciśniesz Wyślij albo włączysz przesyłanie po zrzucie, i tylko do serwisu, który wybierzesz.',
		sent: 'Co dokładnie jest wysyłane'
	},

	compare: {
		kicker: 'Porównanie',
		title: 'Jak wypada na tle innych.',
		lede: 'Sześć programów, te same pytania. Każdą odpowiedź sprawdziliśmy w kodzie źródłowym, README lub informacjach o wydaniu dla wersji podanej w nagłówku, więc ty też możesz to sprawdzić.',
		vs: 'Porównaj Unisic z programem',
		caption: 'Porównanie programów do zrzutów ekranu. Sprawdzone 2026-10-26 w kodzie źródłowym oznaczonych wydań.',
		say: { y: 'Tak', p: 'Częściowo', n: 'Nie' },
		rows: [
			{
				feature: 'Rysowanie na nakładce przechwytywania',
				notes: ['Enter utrwala rysunek w kadrze', '', '', 'Tylko lupa i linijki', 'Rysuje na obrazie z innego narzędzia', '']
			},
			{ feature: 'Edytor obrazów', notes: ['', 'Nie otwiera istniejących obrazów', '', '', '', ''] },
			{ feature: 'Przechwytywanie z przewijaniem', notes: ['', '', '', '', '', ''] },
			{ feature: 'Nagrywanie GIF-ów', notes: ['', '', '', '', '', ''] },
			{ feature: 'Nagrywanie wideo', notes: ['MP4 i WebM', '', 'Tylko Wayland', '', '', ''] },
			{
				feature: 'Dźwięk w nagraniach',
				notes: ['System, mikrofon i pojedyncze aplikacje', '', 'Od wersji Plasma 6.8', '', '', '']
			},
			{ feature: 'OCR', notes: ['Tesseract', '', 'Od wersji Plasma 6.6', 'Osobna wtyczka', '', ''] },
			{ feature: 'Odczyt kodów QR', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: 'Przesyłanie na własne serwery',
				notes: [
					'.sxcu, HTTP, FTP, SFTP',
					'Tylko Imgur, domyślnie wyłączone',
					'Menu Udostępnij z KDE',
					'Imgur, FTP, skrypty',
					'',
					'.sxcu, FTP, SFTP'
				]
			},
			{
				feature: 'Historia z miniaturami',
				notes: ['Usuwanie przenosi do kosza', 'Tylko pliki przesłane na Imgur', '', '', '', '']
			},
			{
				feature: 'Wayland',
				notes: ['Portale, KWin, PipeWire', 'Portal', 'Tylko KWin', 'Portal lub stare API KWin', 'Zrzut robi grim', '']
			},
			{ feature: 'X11', notes: ['Drugi cel, bez gwarancji', 'Portal lub stare API X11', '', '', 'Brak informacji', ''] },
			{
				feature: 'Platformy',
				notes: [
					'Linux, Windows 11 (eksperymentalnie)',
					'Linux, Windows, macOS',
					'Linux, KDE Plasma',
					'Linux, Windows, macOS',
					'Linux, BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty służy tylko do adnotacji: obraz bierze z pliku lub ze standardowego wejścia, zwykle z programu grim. Nie sprawdzaliśmy, jak ksnip działa w środowisku Plasma 6. Widzisz błąd? <a href="https://github.com/unisic/unisic/issues">Zgłoś go</a>.'
	}
} satisfies Dictionary;
