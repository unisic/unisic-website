import type { Attachment } from 'svelte/attachments';
import { MediaQuery } from 'svelte/reactivity';

export type Mode = 'shot' | 'measure' | 'ocr' | 'gif' | 'video';

export const MODE_LABEL: Record<Mode, string> = {
	shot: 'Screenshot',
	measure: 'Measure',
	ocr: 'OCR',
	gif: 'GIF',
	video: 'Recording'
};

/** A frozen copy of the hero stage plus the selection that was cut out of it. */
export type Capture = { id: number; node: HTMLElement; x: number; y: number; w: number; h: number; sw: number; sh: number };

const MAX_CAPTURES = 8;

class Ui {
	mode = $state<Mode>('shot');
	captures = $state.raw<Capture[]>([]);
	paused = $state(false);

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

/** Sets the page-wide capture mode while the element crosses the middle of the viewport. */
export function track(mode: Mode): Attachment<HTMLElement> {
	return (el) => {
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) ui.mode = mode;
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);
		io.observe(el);
		return () => io.disconnect();
	};
}

/** Reports whether the element is on screen, so loops can stop when it is not. */
export function inview(cb: (visible: boolean) => void, margin = '0px'): Attachment<HTMLElement> {
	return (el) => {
		const io = new IntersectionObserver(([entry]) => cb(entry.isIntersecting), { rootMargin: margin });
		io.observe(el);
		return () => io.disconnect();
	};
}
