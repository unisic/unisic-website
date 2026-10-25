<script lang="ts">
  import type { Attachment } from "svelte/attachments";
  import { checkmark, copy } from "#lib/icons.ts";

  /*
   * The rendered Markdown, plus two client-only upgrades to its code blocks:
   * a copy button on each (only with JS, so no dead control in the static
   * HTML), and tabindex=0 on any that overflow so keyboard users can scroll
   * them (WCAG 2.1.1). `html` is trusted: our own Markdown, rendered at build.
   * The button styles live with the rest of .docs-prose in app.css.
   */
  let { html }: { html: string } = $props();

  const glyph = (inner: string) =>
    `<svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;
  const COPY = glyph(copy);
  const COPIED = glyph(checkmark);

  const upgrade: Attachment<HTMLDivElement> = (root) => {
    const cleanups: (() => void)[] = [];
    for (const pre of root.querySelectorAll("pre")) {
      if (pre.scrollWidth > pre.clientWidth) {
        pre.tabIndex = 0;
        cleanups.push(() => pre.removeAttribute("tabindex"));
      }
      const text = pre.querySelector("code")?.textContent?.replace(/\n$/, "");
      if (!text?.trim()) continue;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "docs-copy";
      button.ariaLabel = "Copy to clipboard";
      button.innerHTML = COPY;

      let timer: ReturnType<typeof setTimeout> | undefined;
      const onclick = async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          /* denied or insecure context: leave the button as it was */
          return;
        }
        clearTimeout(timer);
        button.classList.add("copied");
        button.ariaLabel = "Copied";
        button.innerHTML = COPIED;
        timer = setTimeout(() => {
          button.classList.remove("copied");
          button.ariaLabel = "Copy to clipboard";
          button.innerHTML = COPY;
        }, 2000);
      };

      button.addEventListener("click", onclick);
      pre.classList.add("has-copy");
      pre.append(button);
      cleanups.push(() => {
        button.removeEventListener("click", onclick);
        clearTimeout(timer);
        button.remove();
        pre.classList.remove("has-copy");
      });
    }
    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  };
</script>

<div class="docs-prose" {@attach upgrade}>{@html html}</div>
