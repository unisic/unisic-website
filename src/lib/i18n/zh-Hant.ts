import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic：適用於 Linux 的截圖、螢幕錄影與 OCR 工具',
		description:
			'Linux 免費截圖工具。可擷取長頁面、標註、連同聲音錄影、用 OCR 複製文字並上傳。無遙測，不需帳號。'
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
		kicker: '適用於 Linux 的免費開源截圖工具',
		title: '你只管截圖。之後的一切，',
		titleMark: '交給 Unisic。',
		lede: '擷取長頁面，加上標註，連同聲音錄影，取出文字，分享連結。',
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
		facts: ['不需帳號', '零遙測'],
		source: 'GitHub 上的原始碼'
	},

	copy: {
		copy: '複製',
		copied: '已複製',
		select: '選取文字',
		done: '已複製到剪貼簿',
		failed: '剪貼簿遭到封鎖，請改為手動選取文字'
	},

	capture: {
		title: '擷取螢幕的所有方式。',
		lede: '可設定最長 60 秒的延遲，並選擇是否包含滑鼠游標。',
		modes: [
			{ name: '全螢幕', say: '所有螢幕合成一張圖。' },
			{ name: '區域', say: '拖曳出選取框，擷取前就能在上面繪製。' },
			{ name: '視窗', say: '只擷取使用中的視窗，不含周圍內容。' }
		],
		scroll: '比螢幕還長的頁面',
		scrolling: '向下捲動以擷取……',
		finish: '完成',
		captionHtml:
			'執行 <code>unisic --scroll</code>，捲動頁面，按「完成」，就會得到一張圖片。'
	},

	edit: {
		title: '擷取前就能標註，擷取後也行。',
		lede: '在覆蓋層上繪製，按 Enter。之後可在編輯器中裁切與修改。'
	},

	overlay: {
		hint: '拖曳選取框，挑選工具，繪製，然後按「擷取」。',
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
		title: '錄製螢幕，連同聲音。',
		lede: 'GIF、MP4 或 WebM。系統、麥克風與應用程式的聲音各自錄在獨立音軌。即時重播會儲存剛剛發生的畫面。',
		alt: 'Unisic 的螢幕錄影頁面：螢幕、區域或視窗，WebM 格式，影格率，CRF 品質，系統音訊，麥克風，應用程式音訊，以及 30 秒的重播長度。',
		format: '格式',
		fps: '預設每秒 {fps} 格',
		drawn: '直接繪製在錄影中',
		effects: [
			{ name: '游標光暈', say: '讓游標一眼就能找到' },
			{ name: '點擊漣漪', say: '顯示你在何時、何處點擊' },
			{ name: '按鍵標示', say: '顯示你按下的按鍵，預設為關閉' }
		]
	},

	read: {
		title: '從像素中複製文字。',
		lede: '選取螢幕上的文字，就能貼到任何地方。Tesseract 辨識英文與波蘭文，zxing-cpp 解碼 QR 碼與條碼。',
		region: 'OCR 區域',
		lines: '{n} 行',
		out: '辨識出的文字會直接複製到剪貼簿。',
		copy: '複製文字',
		qr: 'unisic.app 的 QR 碼',
		decoded: '已解碼'
	},

	share: {
		title: '一鍵從截圖到連結。',
		lede: '每次擷取都會進入附縮圖的歷史記錄。刪除時，檔案會移到垃圾桶。',
		steps: ['擷取', '複製圖片', '上傳', '已複製連結'],
		hosts: '上傳到任何地方。',
		customHttp: '自訂 HTTP',
		sxcu: '匯入 .sxcu',
		history: '你在本頁的歷史記錄',
		emptyHtml:
			'目前還沒有內容。在<a href="#edit">上方的示範</a>中按「擷取」。'
	},

	toast: {
		captured: '已擷取 {size}',
		saved: '已儲存到歷史記錄'
	},

	themes: {
		title: '六種主題，七種語言。',
		lede: '「系統」主題會跟隨淺色或深色模式與強調色。選擇一種主題，這個頁面也會跟著切換。',
		label: '頁面主題',
		system: '系統',
		languages: '介面語言',
		languagesText:
			'英文、波蘭文、西班牙文、義大利文、法文、俄文與德文。Unisic 跟隨桌面語言，除非你另外選擇。'
	},

	privacy: {
		title: '只有一個請求，而且可以關閉。',
		lede: '沒有遙測，沒有分析，不需帳號。唯一的自動請求是向 GitHub 檢查更新，不會傳送任何關於你的資訊。',
		log: 'Unisic 自行發出的請求',
		when: ['啟動後', '每 24 小時'],
		none: '沒有自動請求。「設定」中仍有「立即檢查」。',
		updates: '自動更新',
		demo: '「設定」中開關的示範',
		uploads: '只在你要求時才會上傳，而且只會傳到你選擇的服務。',
		sent: '到底會傳送哪些內容'
	},

	compare: {
		title: '橫向比較。',
		lede: '在這些 Linux 工具中，只有 Unisic 四項都支援：捲動擷取、連同聲音錄影、OCR 與上傳。每個答案都已對照所示版本的原始碼查證。',
		vs: '比較 Unisic 與',
		caption: '截圖工具比較，2026-10-26 查證。',
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
			'Satty 只標註其他工具擷取的圖片，通常來自 grim。ksnip 在 Plasma 6 上的行為未經查證。發現錯誤了嗎？請<a href="https://github.com/unisic/unisic/issues">回報問題</a>。'
	}
} satisfies Dictionary;
