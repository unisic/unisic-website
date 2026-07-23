"use client";

import { useEffect, useRef } from "react";

/*
 * Renders the build-time Markdown HTML and progressively enhances every code
 * block with a copy-to-clipboard button. The button is added from the client
 * bundle after mount, so no-JS visitors still get selectable commands; it just
 * copies the block's text and flips to a checkmark for a beat. Mirrors the
 * landing CopyCommand behavior, but works over arbitrary rendered <pre> blocks.
 */
const ICON =
  '<svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
const COPY_SVG = `${ICON}<rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M4 16 V5 A1 1 0 0 1 5 4 H15"></path></g></svg>`;
const CHECK_SVG = `${ICON}<path d="M5 12 L10 17 L19 7"></path></g></svg>`;

export function DocsProse({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const cleanups: Array<() => void> = [];

    root.querySelectorAll("pre").forEach((pre) => {
      // Overflowing blocks scroll horizontally; without a tabindex a <pre>
      // can never take focus, so keyboard users could not scroll them
      // (WCAG 2.1.1). The global :focus-visible outline covers the ring.
      if (pre.scrollWidth > pre.clientWidth) {
        pre.tabIndex = 0;
        cleanups.push(() => pre.removeAttribute("tabindex"));
      }

      const code = pre.querySelector("code") ?? pre;
      const text = (code.textContent ?? "").replace(/\n+$/, "");
      if (!text.trim()) return;

      pre.classList.add("has-copy");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "docs-copy";
      button.setAttribute("aria-label", "Copy to clipboard");
      button.innerHTML = COPY_SVG;

      let timer: ReturnType<typeof setTimeout> | null = null;
      const onClick = async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          return; // no clipboard access (insecure context); leave text to select
        }
        button.classList.add("copied");
        button.setAttribute("aria-label", "Copied");
        button.innerHTML = CHECK_SVG;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          button.classList.remove("copied");
          button.setAttribute("aria-label", "Copy to clipboard");
          button.innerHTML = COPY_SVG;
        }, 2000);
      };

      button.addEventListener("click", onClick);
      pre.appendChild(button);
      cleanups.push(() => {
        button.removeEventListener("click", onClick);
        if (timer) clearTimeout(timer);
        button.remove();
        pre.classList.remove("has-copy");
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [html]);

  return (
    <div
      className="docs-prose"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
