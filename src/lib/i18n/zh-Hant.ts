import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic：適用於 Linux 的截圖、螢幕錄影與 OCR 工具',
		description:
			'Unisic 能在截圖前直接在選取範圍上標註，錄製 GIF 與影片，從像素中辨識文字，並上傳結果。這是一款適用於 Linux Wayland 的截圖工具，零遙測。'
	},

	chrome: {
		skip: '跳至主要內容',
		nav: '主要導覽',
		features: '功能',
		themes: '主題',
		compare: '比較',
		docs: '文件',
		pause: '暫停動畫',
		install: '安裝',
		menu: '選單',
		language: '語言',
		footer: {
			label: '頁尾',
			mascot: 'Uni，Unisic 的吉祥物',
			legalHtml:
				'Unisic 是採用 <a href="/docs/introduction/#license">GNU GPL v3</a> 授權的自由軟體。由 <a href="https://github.com/DeBondor">@DeBondor</a> 與 <a href="https://github.com/D3anDark">@D3anDark</a> 開發，靈感來自 <a href="https://getsharex.com/">ShareX</a> 與 <a href="https://apps.kde.org/spectacle/">Spectacle</a>。',
			project: '專案',
			community: '社群',
			capture: '擷取',
			record: '錄影',
			hotkeys: '快速鍵',
			compared: '比較',
			install: '安裝',
			source: 'GitHub 上的原始碼',
			releases: '版本發布',
			bug: '回報錯誤',
			docs: '說明文件',
			kofi: '在 Ko-fi 上贊助'
		}
	},

	hero: {
		kicker: '適用於 Linux Wayland 的免費開源截圖工具',
		title: '你只管截圖。之後的一切，',
		titleMark: '交給 Unisic。',
		lede: '擷取一塊區域或比螢幕還長的頁面，加上標註，連同聲音一起錄下，取出其中的文字，上傳後取得連結。全都在一個免費的應用程式裡完成。',
		runsOn: '可執行於',
		more: '以及更多',
		alt: 'Unisic 的擷取頁面：全螢幕、區域與視窗三張卡片及其快速鍵，下方是擷取選項。',
		windows: 'Windows 11，實驗性',
		download: '下載安裝程式',
		linuxPackages: 'Linux 套件',
		windowsNote: '只安裝給目前的使用者，不需系統管理員權限，會自動更新。',
		anyDistro: '在任何發行版上安裝',
		linuxNote: '只安裝給目前的使用者，不需 sudo，會自動更新。',
		packages: '各發行版套件、Nix',
		windowsInstaller: 'Windows 安裝程式',
		experimental: '實驗性',
		facts: ['免費，GPL-3.0', '不需帳號', '零遙測'],
		source: 'GitHub 上的原始碼'
	},

	copy: {
		copy: '複製',
		copied: '已複製',
		select: '選取文字',
		done: '已複製到剪貼簿',
		failed: '剪貼簿遭到封鎖，請改為手動選取文字'
	},

	why: {
		title: '為什麼選擇 Unisic？',
		ledeHtml:
			'在<a href="#compare">比較表</a>列出的工具中，只有 Unisic 與 ShareX 具備所有功能，而 ShareX 只能在 Windows 上執行。',
		see: '查看',
		points: [
			{
				title: '捲動擷取',
				text: '比螢幕還長的頁面會輸出成一張完整的圖片。Flameshot、Spectacle、ksnip 與 Satty 都沒有捲動擷取。'
			},
			{
				title: '連同聲音錄影',
				text: '同一塊區域可以錄成 GIF、MP4 或 WebM，並收錄系統聲音、麥克風，或將單一應用程式的聲音錄在獨立音軌上。'
			},
			{
				title: '文字與 QR 碼',
				text: '從任何擷取畫面中複製文字，或讀出 QR 碼、條碼中的連結。'
			},
			{
				title: '上傳與歷史記錄',
				text: '透過 HTTP、FTP 或 SFTP 上傳到你自己的伺服器，或使用 ShareX 的 .sxcu 設定檔。每次擷取都會以縮圖保留在歷史記錄中。'
			}
		]
	},

	capture: {
		kicker: '擷取',
		title: '擷取螢幕的所有方式。',
		lede: '跨多個螢幕的全螢幕、顯示即時尺寸的區域、使用中的視窗，或比螢幕還長的頁面。需要時可以加上最長 60 秒的延遲，也能把滑鼠游標一起擷取下來。',
		modes: [
			{ name: '全螢幕', say: '所有螢幕合成一張圖。' },
			{ name: '區域', say: '拖曳出顯示即時尺寸的選取框，擷取前就能標註。' },
			{ name: '視窗', say: '只擷取使用中的視窗，不含周圍內容。' }
		],
		scroll: '比螢幕還長的頁面',
		scrolling: '向下捲動以擷取……',
		finish: '完成',
		captionHtml:
			'用 <code>unisic --scroll</code> 啟動，捲動頁面，然後按「完成」。各個片段會拼接成一張圖片。'
	},

	edit: {
		kicker: '標註與編輯',
		title: '擷取前就能標註，擷取後也行。',
		lede: '直接在選取覆蓋層上畫箭頭、形狀、模糊和編號步驟，然後按 Enter 把它們合併進擷取的畫面。可以在下方試試看。接著由編輯器接手，提供裁切、復原與縮放。'
	},

	overlay: {
		hint: '拖曳選取框或它的控點，挑選工具在框內繪製，然後按「擷取」。',
		keys: '方向鍵移動選取框，Enter 擷取，Esc 重設。',
		tool: '工具：',
		headline: '選取範圍。畫上標註。按下',
		headlineMark: 'Enter。',
		label: '選取覆蓋層示範',
		toolsLabel: '工具',
		colorLabel: '顏色',
		tools: {
			select: '選取',
			pen: '畫筆',
			line: '直線',
			arrow: '箭頭',
			measure: '測量',
			rect: '矩形',
			ellipse: '橢圓',
			highlight: '螢光筆',
			blur: '模糊',
			step: '步驟編號',
			erase: '智慧橡皮擦'
		},
		colors: ['紅色', '黃色', '綠色', '藍色', '薰衣草紫', '白色'],
		undoTitle: '復原（Ctrl+Z）',
		undo: '復原',
		capture: '擷取'
	},

	record: {
		kicker: '錄影',
		title: '錄製螢幕，連同聲音。',
		lede: '區域、全螢幕或視窗，儲存為 GIF、MP4 或 WebM。系統聲音、麥克風與個別應用程式會錄在不同的音軌上，即時重播則會保留螢幕上最近一段時間的畫面。',
		alt: 'Unisic 的螢幕錄影頁面：螢幕、區域或視窗，WebM 格式，影格率，CRF 品質，系統音訊，麥克風，應用程式音訊，以及 30 秒的重播長度。',
		format: '格式',
		fps: '預設每秒 {fps} 格',
		drawn: '直接繪製在錄影中',
		effects: [
			{ name: '游標光暈', say: '在縮小的影片中也能輕鬆找到游標' },
			{ name: '點擊漣漪', say: '顯示你在何時、何處點擊' },
			{ name: '按鍵標示', say: '顯示你按下的快速鍵，預設為關閉' }
		]
	},

	read: {
		kicker: 'OCR 與 QR',
		title: '從像素中複製文字。',
		lede: '選取螢幕上的任何文字，就能取回純文字。由 Tesseract 負責辨識，支援波蘭文與英文，並可自動偵測語言。將 Unisic 對準 QR 碼或條碼，zxing-cpp 就會給你其中編碼的內容。',
		region: 'OCR 區域',
		lines: '{n} 行',
		out: '辨識出的文字會直接複製到剪貼簿。',
		copy: '複製文字',
		qr: 'unisic.app 的 QR 碼',
		decoded: '已解碼'
	},

	share: {
		kicker: '分享與歷史記錄',
		title: '一鍵從截圖到連結。',
		lede: '擷取後，Unisic 可以複製圖片、儲存圖片、上傳圖片，並把連結放到剪貼簿。每次擷取都會進入附縮圖的歷史記錄，刪除時檔案會移到垃圾桶，而不會直接抹除。',
		steps: ['擷取', '複製圖片', '上傳', '已複製連結'],
		hosts: '上傳到任何地方。',
		customHttp: '自訂 HTTP',
		sxcu: '匯入 .sxcu',
		history: '你在本頁的歷史記錄',
		emptyHtml:
			'目前還沒有內容。在上方的<a href="#edit">編輯器示範</a>中拖曳出選取範圍，然後按「擷取」，結果就會顯示在這裡。'
	},

	toast: {
		captured: '已擷取 {size}',
		saved: '已儲存到歷史記錄'
	},

	themes: {
		kicker: '主題與語言',
		title: '你的配色，你的語言。',
		lede: 'Unisic 內建六種主題，另有一種會跟隨系統的淺色或深色配置與強調色。在下方選擇一種，這個頁面也會跟著切換。',
		label: '頁面主題',
		system: '系統',
		languages: '介面語言',
		languagesText:
			'英文、波蘭文、西班牙文、義大利文、法文、俄文與德文。除非你在「設定」中另外選擇，否則 Unisic 會跟隨桌面的語言。'
	},

	privacy: {
		kicker: '隱私',
		title: '只有一個請求，而且可以關閉。',
		lede: '沒有遙測，沒有分析，不需帳號。Unisic 自行發出的唯一請求，是向 GitHub 查詢是否有新版本：啟動後不久查詢一次，之後每天一次。不會傳送任何關於你或你擷取內容的資訊。',
		log: 'Unisic 自行發出的請求',
		when: ['啟動後', '每 24 小時'],
		none: '沒有自動請求。「設定」中仍保留「立即檢查」按鈕，需要時可以手動檢查。',
		updates: '自動更新',
		demo: '「設定」中開關的示範',
		uploads: '只有在你按下「上傳」或開啟擷取後上傳時才會上傳，而且只會傳到你選擇的服務。',
		sent: '到底會傳送哪些內容'
	},

	compare: {
		kicker: '比較',
		title: '與其他工具相比如何。',
		lede: '六款工具，相同的問題。每個答案都對照了表頭所列版本的原始碼、README 或版本資訊，你也可以自行查證。',
		vs: '比較 Unisic 與',
		caption: '截圖工具比較。2026-10-26 依據各版本標籤的原始碼查證。',
		say: { y: '支援', p: '部分', n: '不支援' },
		rows: [
			{
				feature: '在選取覆蓋層上繪製',
				notes: ['按 Enter 合併進擷取的畫面', '', '', '只有放大鏡與尺規', '只標註其他工具擷取的圖片', '']
			},
			{ feature: '圖片編輯器', notes: ['', '無法開啟既有的圖片', '', '', '', ''] },
			{ feature: '捲動擷取', notes: ['', '', '', '', '', ''] },
			{ feature: 'GIF 錄製', notes: ['', '', '', '', '', ''] },
			{ feature: '影片錄製', notes: ['MP4 與 WebM', '', '僅限 Wayland', '', '', ''] },
			{ feature: '錄製聲音', notes: ['系統、麥克風與個別應用程式', '', '自 Plasma 6.8 起', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', '自 Plasma 6.6 起', '需另外安裝外掛', '', ''] },
			{ feature: 'QR 碼讀取', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: '自訂上傳目標',
				notes: ['.sxcu、HTTP、FTP、SFTP', '僅限 Imgur，預設關閉', 'KDE 分享選單', 'Imgur、FTP、指令碼', '', '.sxcu、FTP、SFTP']
			},
			{ feature: '附縮圖的歷史記錄', notes: ['刪除時移到垃圾桶', '僅限 Imgur 上傳', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['Portal、KWin、PipeWire', 'Portal', '僅限 KWin', 'Portal 或舊版 KWin', '擷取交給 grim 處理', '']
			},
			{ feature: 'X11', notes: ['盡力支援的次要目標', 'Portal 或舊版 X11', '', '', '未說明', ''] },
			{
				feature: '平台',
				notes: [
					'Linux、Windows\u00a011（實驗性）',
					'Linux、Windows、macOS',
					'Linux、KDE Plasma',
					'Linux、Windows、macOS',
					'Linux、BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty 只負責標註：圖片來自檔案或標準輸入，通常來自 grim。ksnip 在 Plasma 6 上的行為未經查證。發現錯誤了嗎？請<a href="https://github.com/unisic/unisic/issues">回報問題</a>。'
	}
} satisfies Dictionary;
