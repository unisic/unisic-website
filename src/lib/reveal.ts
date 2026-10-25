import type { Attachment } from "svelte/attachments";

/*
 * The page's only scroll machinery: flips data-inview once when the element
 * enters the viewport. All animation lives in CSS, gated behind
 * prefers-reduced-motion (app.css), so with JS disabled or reduced motion
 * the content simply renders in its final state.
 *
 * One observer serves every revealed element, created on first use; each
 * element leaves it the moment it flips, so its target set only shrinks.
 * data-js is stamped by the root layout, from the client bundle itself: the
 * reveal-hidden styles must only engage once the code that un-hides the
 * content is provably running.
 */
let observer: IntersectionObserver | undefined;

export const reveal: Attachment<HTMLElement> = (el) => {
  observer ??= new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-inview", "true");
        self.unobserve(entry.target);
      }
    },
    { threshold: 0.18 },
  );
  observer.observe(el);
  return () => observer?.unobserve(el);
};
