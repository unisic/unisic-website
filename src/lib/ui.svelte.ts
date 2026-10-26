import type { Attachment } from 'svelte/attachments';
import { MediaQuery } from 'svelte/reactivity';
import { browser } from '$app/env';

export type Mode = 'shot' | 'measure' | 'ocr' | 'gif' | 'video';

/** A frozen copy of the overlay demo stage plus the selection that was cut out of it. */
export type Capture = { id: number; node: HTMLElement; x: number; y: number; w: number; h: number; sw: number; sh: number };

const MAX_CAPTURES = 8;
const THEME_KEY = 'unisic-theme';

export type Theme = { id: string; name: string; bg: string; surface: string; accent: string; text: string };

// Colors from resources/themes/*.json; Unisic itself is compiled in.
export const THEMES: Theme[] = [
	{ id: 'unisic', name: 'Unisic', bg: '#100E2C', surface: '#1E1B4A', accent: '#C8ACD6', text: '#F3F0FA' },
	{ id: 'latte', name: 'Catppuccin Latte', bg: '#EFF1F5', surface: '#FFFFFF', accent: '#8839EF', text: '#4C4F69' },
	{ id: 'mocha', name: 'Catppuccin Mocha', bg: '#1E1E2E', surface: '#313244', accent: '#CBA6F7', text: '#CDD6F4' },
	{ id: 'dracula', name: 'Dracula', bg: '#282A36', surface: '#343746', accent: '#BD93F9', text: '#F8F8F2' },
	{ id: 'gruvbox', name: 'Gruvbox', bg: '#282828', surface: '#3C3836', accent: '#FABD2F', text: '#EBDBB2' },
	{ id: 'nord', name: 'Nord', bg: '#2E3440', surface: '#3B4252', accent: '#88C0D0', text: '#ECEFF4' }
];

const light = new MediaQuery('prefers-color-scheme: light');

function stored() {
	// Private windows and blocked storage throw; the page then follows the system.
	try {
		return localStorage.getItem(THEME_KEY) ?? 'system';
	} catch {
		return 'system';
	}
}

class Ui {
	captures = $state.raw<Capture[]>([]);
	paused = $state(false);
	/** What the visitor picked: a theme id, or 'system' to follow the light or dark scheme. */
	theme = $state(browser ? stored() : 'system');

	/** The theme a pick puts on the page; app.html resolves the same way before the first paint. */
	resolve(id: string) {
		return id === 'system' ? (light.current ? 'latte' : 'unisic') : id;
	}

	get shown() {
		return this.resolve(this.theme);
	}

	setTheme(id: string) {
		this.theme = id;
		document.documentElement.dataset.theme = this.shown;
		try {
			if (id === 'system') localStorage.removeItem(THEME_KEY);
			else localStorage.setItem(THEME_KEY, id);
		} catch {}
	}

	add(capture: Capture) {
		this.captures = [capture, ...this.captures].slice(0, MAX_CAPTURES);
	}
}

export const ui = new Ui();
export const reduced = new MediaQuery('prefers-reduced-motion: reduce');

/** Loops stop when the system asks for less motion or the visitor pauses it. */
export const calm = {
	get current() {
		return reduced.current || ui.paused;
	}
};

/** Reports whether the element is on screen, so loops can stop when it is not. */
export function inview(cb: (visible: boolean) => void, margin = '0px'): Attachment<HTMLElement> {
	return (el) => {
		const io = new IntersectionObserver(([entry]) => cb(entry.isIntersecting), { rootMargin: margin });
		io.observe(el);
		return () => io.disconnect();
	};
}
