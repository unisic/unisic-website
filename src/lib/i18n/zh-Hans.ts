import type { Dictionary } from './en.js';

export default {
	meta: {
		title: 'Unisic：适用于 Linux 的截图、录屏和 OCR 工具',
		description:
			'Linux 免费截图工具。可截取长页面、标注、带声音录制、用 OCR 复制文字并上传。无遥测，无需账号。'
	},

	chrome: {
		skip: '跳到正文',
		nav: '主导航',
		features: '功能',
		themes: '主题',
		compare: '对比',
		docs: '文档',
		pause: '暂停动画',
		install: '安装',
		menu: '菜单',
		language: '语言',
		footer: {
			label: '页脚',
			mascot: 'Uni，Unisic 的吉祥物',
			legalHtml:
				'Unisic 是采用 <a href="/docs/introduction/#license">GNU GPL v3</a> 许可的自由软件。由 <a href="https://github.com/DeBondor">@DeBondor</a> 和 <a href="https://github.com/D3anDark">@D3anDark</a> 开发，灵感来自 <a href="https://getsharex.com/">ShareX</a> 和 <a href="https://apps.kde.org/spectacle/">Spectacle</a>。',
			project: '项目',
			community: '社区',
			capture: '截图',
			record: '录制',
			hotkeys: '快捷键',
			compared: '对比',
			install: '安装',
			source: 'GitHub 上的源代码',
			releases: '版本发布',
			bug: '报告问题',
			docs: '文档',
			kofi: '在 Ko-fi 上赞助'
		}
	},

	hero: {
		kicker: '适用于 Linux 的免费开源截图工具',
		title: '你只管截图。之后的一切，',
		titleMark: '交给 Unisic。',
		lede: '截取长页面，加上标注，带声音录制，提取文字，分享链接。',
		runsOn: '运行于',
		more: '以及更多',
		alt: 'Unisic 的截图页面：全屏、区域和窗口三张卡片及其快捷键，下方是截图选项。',
		windows: 'Windows 11，实验性',
		download: '下载安装程序',
		linuxPackages: 'Linux 软件包',
		windowsNote: '为当前用户安装，无需管理员权限，自动更新。',
		anyDistro: '在任意发行版上安装',
		linuxNote: '为当前用户安装，无需 sudo，自动更新。',
		packages: '各发行版软件包、Nix',
		windowsInstaller: 'Windows 安装程序',
		experimental: '实验性',
		facts: ['无需账号', '零遥测'],
		source: 'GitHub 上的源代码'
	},

	copy: {
		copy: '复制',
		copied: '已复制',
		select: '选中文本',
		done: '已复制到剪贴板',
		failed: '剪贴板被阻止，请改为手动选中文本'
	},

	capture: {
		title: '截取屏幕的所有方式。',
		lede: '可设置最长 60 秒的延迟，并选择是否包含鼠标指针。',
		modes: [
			{ name: '全屏', say: '所有显示器合成一张图。' },
			{ name: '区域', say: '拖出一个选框，截图前就能在上面绘制。' },
			{ name: '窗口', say: '只截当前窗口，不含周围内容。' }
		],
		scroll: '比屏幕还长的页面',
		scrolling: '向下滚动以截取……',
		finish: '完成',
		captionHtml:
			'运行 <code>unisic --scroll</code>，滚动页面，按“完成”，得到一张图片。'
	},

	edit: {
		title: '截图前就能标注，截图后也行。',
		lede: '在蒙层上绘制，按 Enter。之后可在编辑器中裁剪和修改。'
	},

	overlay: {
		hint: '拖动选框，选一个工具，绘制，然后按“截图”。',
		keys: '方向键移动选框，Enter 截图，Esc 重置。',
		tool: '工具：',
		headline: '选好区域。画上标注。按下',
		headlineMark: 'Enter。',
		label: '选区蒙层演示',
		toolsLabel: '工具',
		colorLabel: '颜色',
		tools: {
			select: '选择',
			pen: '画笔',
			line: '直线',
			arrow: '箭头',
			measure: '测量',
			rect: '矩形',
			ellipse: '椭圆',
			highlight: '高亮',
			blur: '模糊',
			step: '步骤编号',
			erase: '智能橡皮擦'
		},
		colors: ['红色', '黄色', '绿色', '蓝色', '薰衣草紫', '白色'],
		undoTitle: '撤销（Ctrl+Z）',
		undo: '撤销',
		capture: '截图'
	},

	record: {
		title: '录制屏幕，连同声音。',
		lede: 'GIF、MP4 或 WebM。系统、麦克风和应用的声音各占独立音轨。即时回放会保存刚刚发生的画面。',
		alt: 'Unisic 的录屏页面：屏幕、区域或窗口，WebM 格式，帧率，CRF 质量，系统音频，麦克风，应用音频，以及 30 秒的回放时长。',
		format: '格式',
		fps: '默认每秒 {fps} 帧',
		drawn: '直接绘制在录像中',
		effects: [
			{ name: '指针光圈', say: '让光标一眼就能找到' },
			{ name: '点击波纹', say: '显示你在何时何处点击' },
			{ name: '按键标签', say: '显示你按下的按键，默认关闭' }
		]
	},

	read: {
		title: '从像素中复制文字。',
		lede: '选中屏幕上的文字，就能粘贴到任何地方。Tesseract 识别英语和波兰语，zxing-cpp 解码 QR 码和条形码。',
		region: 'OCR 区域',
		lines: '{n} 行',
		out: '识别出的文字会直接复制到剪贴板。',
		copy: '复制文字',
		qr: 'unisic.app 的 QR 码',
		decoded: '已解码'
	},

	share: {
		title: '一键从截图到链接。',
		lede: '每张截图都会进入带缩略图的历史记录。删除时，文件会移到回收站。',
		steps: ['截图', '复制图片', '上传', '链接已复制'],
		hosts: '上传到任何地方。',
		customHttp: '自定义 HTTP',
		sxcu: '导入 .sxcu',
		history: '你在本页的历史记录',
		emptyHtml:
			'还没有内容。在<a href="#edit">上方的演示</a>中按“截图”。'
	},

	toast: {
		captured: '已截取 {size}',
		saved: '已保存到历史记录'
	},

	themes: {
		title: '六款主题，七种语言。',
		lede: '“系统”主题跟随浅色或深色模式和强调色。选一款主题，本页也会随之切换。',
		label: '页面主题',
		system: '系统',
		languages: '界面语言',
		languagesText:
			'英语、波兰语、西班牙语、意大利语、法语、俄语和德语。Unisic 跟随桌面语言，除非你另选一种。'
	},

	privacy: {
		title: '只有一个请求，而且可以关掉。',
		lede: '无遥测、无统计分析、无需账号。唯一的自动请求是向 GitHub 检查更新，不会发送任何关于你的信息。',
		log: 'Unisic 自行发出的请求',
		when: ['启动后', '每 24 小时'],
		none: '没有自动请求。设置中仍有“立即检查”。',
		updates: '自动更新',
		demo: '设置中开关的演示',
		uploads: '只在你要求时才会上传，而且只会传到你选定的服务。',
		sent: '具体会发送什么'
	},

	compare: {
		title: '横向对比。',
		lede: '在这些 Linux 工具中，只有 Unisic 四项都支持：滚动截图、带声音录制、OCR 和上传。每个答案都已对照所示版本的源代码核实。',
		vs: '对比 Unisic 和',
		caption: '截图工具对比，2026-10-26 核实。',
		say: { y: '支持', p: '部分', n: '不支持' },
		rows: [
			{
				feature: '在选区蒙层上绘制',
				notes: ['按 Enter 合并进截取的画面', '', '', '只有放大镜和标尺', '只标注其他工具截取的图片', '']
			},
			{ feature: '图片编辑器', notes: ['', '无法打开已有图片', '', '', '', ''] },
			{ feature: '滚动截图', notes: ['', '', '', '', '', ''] },
			{ feature: 'GIF 录制', notes: ['', '', '', '', '', ''] },
			{ feature: '视频录制', notes: ['MP4 和 WebM', '', '仅限 Wayland', '', '', ''] },
			{ feature: '录制声音', notes: ['系统、麦克风和单个应用', '', '自 Plasma 6.8 起', '', '', ''] },
			{ feature: 'OCR', notes: ['Tesseract', '', '自 Plasma 6.6 起', '需单独安装插件', '', ''] },
			{ feature: 'QR 码识别', notes: ['zxing-cpp', '', '', '', '', ''] },
			{
				feature: '自定义上传目标',
				notes: ['.sxcu、HTTP、FTP、SFTP', '仅限 Imgur，默认关闭', 'KDE 分享菜单', 'Imgur、FTP、脚本', '', '.sxcu、FTP、SFTP']
			},
			{ feature: '带缩略图的历史记录', notes: ['删除时移到回收站', '仅限 Imgur 上传', '', '', '', ''] },
			{
				feature: 'Wayland',
				notes: ['门户、KWin、PipeWire', '门户', '仅限 KWin', '门户或旧版 KWin', '截图交给 grim 完成', '']
			},
			{ feature: 'X11', notes: ['尽力支持的次要目标', '门户或旧版 X11', '', '', '未说明', ''] },
			{
				feature: '平台',
				notes: [
					'Linux、Windows\u00a011（实验性）',
					'Linux、Windows、macOS',
					'Linux、KDE Plasma',
					'Linux、Windows、macOS',
					'Linux、BSD',
					'Windows'
				]
			}
		],
		footHtml:
			'Satty 只标注其他工具截取的图片，通常来自 grim。ksnip 在 Plasma 6 上的表现未核实。发现错误？请<a href="https://github.com/unisic/unisic/issues">提交 issue</a>。'
	}
} satisfies Dictionary;
