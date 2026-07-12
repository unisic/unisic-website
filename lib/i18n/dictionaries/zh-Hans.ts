import { type Dictionary } from "./en";

// Machine-translated (zh-Hans) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const zhHans: Dictionary = {
  "meta": {
    "title": "Unisic — 在 Linux Wayland 上把截图做对",
    "description": "面向 Linux Wayland 的开源截图与录屏工具。截图前先标注，截图后可再编辑，录制 GIF 和视频，上传到任何地方。零遥测，GPLv3。",
    "ogTitle": "Unisic — 在 Linux Wayland 上把截图做对",
    "ogDescription": "静默截图、截图前标注、12 种工具的编辑器、GIF 与视频录制、即时上传。零遥测，GPLv3。",
    "ogImageAlt": "运行在 Linux Wayland 上的 Unisic 截图编辑器"
  },
  "nav": {
    "docs": "文档",
    "skip": "跳到正文",
    "features": "功能",
    "recording": "录制",
    "github": "GitHub 上的 Unisic",
    "download": "下载"
  },
  "hero": {
    "headline": "在 Linux Wayland 上把截图做对。",
    "sub": "静默截图、截图前标注、12 种工具的编辑器、GIF 与视频录制、即时上传。零遥测。GPLv3。",
    "download": "下载",
    "github": "在 GitHub 查看"
  },
  "usp": {
    "title": "在按下截图前就完成标注",
    "lede": "选区蒙层就是一块画布。在冻结的画面上绘制箭头、文字、模糊和步骤标记，然后按 Enter：标注即被烙入截图。"
  },
  "overlay": {
    "caption": "Unisic 选区蒙层：冻结的屏幕上有一块选定区域、实时像素尺寸、一个在截图前绘制的箭头，以及一个浮动工具栏。",
    "capture": "截图"
  },
  "features": {
    "title": "热键之后的一切",
    "lede": "大多数工具只丢给你一块矩形像素就撒手不管。Unisic 覆盖了工作流的其余部分。",
    "editor": {
      "title": "真正的编辑器，而非裁剪框",
      "body": "十二种工具，包括高亮、像素化、智能橡皮擦、编号步骤和裁剪。撤销、重做、缩放，全部在图像像素空间中进行。"
    },
    "upload": {
      "title": "上传到任何地方",
      "body": "自定义 HTTP 目标、导入 ShareX 上传器、FTP 与 SFTP、内置托管服务。链接会直接落入你的剪贴板。",
      "copied": "已复制"
    },
    "history": {
      "title": "带缩略图的历史记录",
      "body": "每一张截图，都在一个网格之内。删除会把文件移入回收站，绝不越过它。"
    },
    "silent": {
      "title": "静默截图",
      "body": "没有快门闪光，无需切换窗口。在 Plasma 上走原生 KWin 路径，其他环境则使用门户。"
    },
    "yours": {
      "title": "完全属于你",
      "body": "零遥测、无需账户、绝不回传。以 GPL-3.0 授权，开放开发。"
    }
  },
  "recording": {
    "title": "同一区域，可存为 GIF 或视频",
    "lede": "GIF 采用两遍调色板以获得清晰色彩，或通过 ScreenCast 门户、PipeWire 和 ffmpeg 导出 MP4 与 WebM。可录制某个区域、整个屏幕或某个窗口。",
    "note": "无论焦点在哪里，{keys}始终能停止录制。",
    "caption": "正在录制一块屏幕区域：Unisic 在该区域周围绘制一个强调色边框，配有 REC 标记和已录时长计时器。"
  },
  "themes": {
    "title": "九种主题，包括你自己的",
    "lede": "在下方选择一种配色，看应用换上它。",
    "groupLabel": "在应用窗口中预览主题",
    "reset": "重置为 Unisic",
    "note": "每个色块都会实时重绘上方的窗口。第九种主题就是你的系统：它会跟随桌面的浅色或深色方案和强调色。",
    "system": "系统",
    "systemLabel": "系统 — 跟随你桌面的浅色或深色方案；此处无法预览",
    "previewLabel": "{theme}主题下的 Unisic 主窗口"
  },
  "download": {
    "title": "安装 Unisic",
    "lede": "需要带 xdg-desktop-portal 的 Wayland 会话。录制还需要 PipeWire 和 ffmpeg。",
    "repoLede": "选择你的发行版——软件仓库会通过包管理器让 Unisic 保持最新。AppImage 和 Flatpak 为直接下载。",
    "distroListLabel": "选择发行版或软件包格式",
    "versionLabel": "版本",
    "copyCmd": "复制命令",
    "copiedCmd": "已复制",
    "steps": {
      "importKey": "导入软件仓库签名密钥：",
      "addRepo": "添加软件仓库：",
      "refreshRepo": "刷新软件仓库：",
      "enableRepo": "启用 COPR 仓库：",
      "install": "安装 Unisic："
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 将于 2026 年 7 月结束支持——建议选择 26.04。两者都需要 Qt 6.5+，更早的版本不提供。",
      "debian": "因需要 Qt 6.5+，要求 Debian 13（trixie）或更新版本。",
      "fedora": "提供面向 Fedora 43、44 和 Rawhide 的构建。COPR 构建会一并安装可选依赖，因此录制、OCR 和背景移除开箱即用。",
      "opensuse": "刷新时 zypper 会请求你接受该软件仓库的签名密钥。",
      "arch": "openSUSE Build Service 上的已签名 pacman 仓库——无需 AUR。",
      "appimage": "通用格式——可在任何发行版上运行。应用会自动更新：下载新的 AppImage 并原地替换，空闲时重启。",
      "flatpak": "旁加载捆绑包——需重新下载以更新（有新版本时应用会提醒你），直到 Unisic 上架 Flathub。"
    },
    "downloadBtn": "下载",
    "checking": "正在检查最新版本",
    "latest": "最新版本 {tag}",
    "fallbackBtn": "从 GitHub Releases 获取",
    "fallbackNote": "刚才没能连上 GitHub，但每个构建版本都在那里。",
    "allReleases": "全部版本与更早的构建",
    "earlyAccess": "Unisic 处于早期开发者预览阶段：它能用，但在小众合成器上可能有些粗糙之处。{link}中的每一份反馈都有帮助。",
    "earlyAccessLink": "问题反馈"
  },
  "hotkeys": {
    "caption": "默认热键",
    "action": "操作",
    "shortcut": "快捷键",
    "rows": {
      "full": "截取整个屏幕",
      "region": "截取区域",
      "window": "截取当前窗口",
      "gif": "录制 GIF（区域）",
      "video": "录制视频（区域）",
      "stop": "停止录制（固定）"
    },
    "tryHint": "这张表是实时的：在键盘上按住某个快捷键，对应的键帽就会亮起。",
    "note": "除固定的停止键外，其余都可在设置中修改，并立即应用到系统。"
  },
  "reference": {
    "title": "参考"
  },
  "compositors": {
    "title": "与你的合成器协同工作",
    "plasma": {
      "name": "KDE Plasma",
      "body": "完全静默的路径：原生 KWin ScreenShot2 搭配 KGlobalAccel 热键。完全没有门户对话框。"
    },
    "gnome": {
      "name": "GNOME 及其他桌面",
      "body": "截图与录制都经由 xdg-desktop-portal 和 PipeWire。标准、安全、不耍花招。"
    },
    "wlroots": {
      "name": "niri 与 wlroots 合成器",
      "body": "Unisic 通过 grim 经 wlr-screencopy 截图，静默且对多显示器安全。在你的合成器配置中绑定热键；正在运行的实例会接收该命令。"
    }
  },
  "mainWindow": {
    "ariaLabel": "Unisic 主窗口：侧边栏包含截图、录制、GIF、历史记录、目标位置和设置页面，截图页面提供整屏、区域和窗口操作以及截图后的开关选项。",
    "nav": {
      "capture": "截图",
      "record": "录制",
      "gif": "GIF",
      "history": "历史记录",
      "destinations": "目标位置",
      "settings": "设置"
    },
    "pageTitle": "截图",
    "pageSub": "截图会落入编辑器，你可以在其中标注，然后保存、复制或上传。",
    "cards": {
      "fullScreen": {
        "title": "整个屏幕",
        "sub": "所有显示器"
      },
      "region": {
        "title": "区域",
        "sub": "实时选择 + 标注"
      },
      "window": {
        "title": "窗口",
        "sub": "当前窗口"
      }
    },
    "afterCapture": "截图之后",
    "toggles": {
      "editor": "打开编辑器",
      "clipboard": "复制图像到剪贴板",
      "disk": "自动保存到磁盘",
      "upload": "上传并复制链接"
    }
  },
  "editorMockup": {
    "ariaLabel": "Unisic 编辑器窗口：工具栏含十二种标注工具，一张标注了箭头、高亮和编号步骤的截图，以及复制、保存和上传操作。",
    "title": "Unisic 编辑器",
    "copy": "复制",
    "save": "保存",
    "upload": "上传"
  },
  "footer": {
    "license": "自由开源，GPL-3.0",
    "nav": "页脚",
    "github": "GitHub",
    "releases": "版本发布",
    "issues": "问题反馈",
    "licenseLink": "许可证"
  },
  "notFound": {
    "code": "错误 404",
    "title": "页面未找到",
    "message": "你要找的页面已经移动、改名，或从未存在。让我们带你回到稳妥的地方。",
    "home": "返回首页"
  },
  "languageSwitcher": {
    "label": "语言"
  }
};
