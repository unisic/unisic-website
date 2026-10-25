<script lang="ts">
  import Icon from "./Icon.svelte";
  import { checkmark, copy as copyGlyph } from "#lib/icons.ts";

  /*
   * A shell snippet with a copy-to-clipboard button. The button flips to a
   * checkmark for a beat after a successful copy, then reverts. Falls back
   * silently if the Clipboard API is unavailable (insecure context, old
   * engine): the snippet stays selectable.
   *
   * variant "hero" is the big one-liner card: a prompt glyph, a command that
   * wraps instead of scrolling, and the button beside it.
   * variant "script" is a multi-step script in a terminal well, the button on
   * its title bar: "# " comment lines are dimmed and left out of the copied
   * text (an interactive zsh runs them as commands), each command sits behind
   * a prompt, a caret waits on the last line, and the well grows to the
   * height its parent gives it.
   * The status span announces the copy to screen readers; swapping the
   * button's label alone is not reliably spoken on a focused control.
   */
  let {
    command,
    copyLabel,
    copiedLabel,
    variant,
    title = "",
  }: { command: string; copyLabel: string; copiedLabel: string; variant: "hero" | "script"; title?: string } =
    $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  const hero = $derived(variant === "hero");
  const script = $derived(variant === "script");

  async function copy() {
    try {
      await navigator.clipboard.writeText(
        script ? command.split("\n").filter((l) => l && !l.startsWith("#")).join("\n") : command,
      );
    } catch {
      return;
    }
    copied = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied = false), 2000);
  }

  $effect(() => () => clearTimeout(timer));
</script>

{#snippet button()}
  <button type="button" class="copy" onclick={copy} data-copied={copied ? "" : undefined}>
    <Icon svg={copied ? checkmark : copyGlyph} size={16} class="copy-icon" />
    <span>{copied ? copiedLabel : copyLabel}</span>
  </button>
{/snippet}

<div class:hero class:script class:well={script}>
  {#if hero}<span class="prompt" aria-hidden="true">$</span>{/if}
  {#if script}<div class="well-bar"><span class="well-title">{title}</span>{@render button()}</div>{/if}
  <!-- a continuation line starts with spaces, so only a line's first
       command gets the prompt -->
  <pre class="cmd">{#if script}{#each command.split("\n") as line, i}{i ? "\n" : ""}{#if line.startsWith("#")}<span class="comment">{line}</span>{:else if line && !line.startsWith(" ")}<span class="ps1" aria-hidden="true">$ </span>{line}{:else}{line}{/if}{/each}{"\n\n"}<span class="ps1" aria-hidden="true">$ </span><span class="caret" aria-hidden="true"></span>{:else}{command}{/if}</pre>
  {#if hero}{@render button()}{/if}
  <span class="sr-only" role="status">{copied ? copiedLabel : ""}</span>
</div>

<style>
  .cmd {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.8;
    color: var(--text);
    overflow-x: auto;
  }

  /* a button that does nothing is worse than no button: without JS the
     command stays selectable and the button stays hidden */
  .copy {
    display: none;
    flex: none;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-s);
    font-weight: 650;
    transition:
      color var(--dur-fast) var(--ease-out),
      background-color var(--dur-fast) var(--ease-out),
      border-color var(--dur-fast) var(--ease-out),
      transform var(--dur-fast) var(--ease-out);
  }

  :global(html[data-js]) .copy {
    display: inline-flex;
  }

  .copy:active {
    transform: scale(0.94);
  }

  @media (prefers-reduced-motion: no-preference) {
    .copy[data-copied] :global(.copy-icon) {
      animation: check-pop 0.3s var(--ease-out);
    }
  }

  @keyframes check-pop {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
  }

  /* ---- multi-step script ---- */

  .script {
    flex: 1;
  }

  .script .cmd {
    flex: 1;
    padding: 14px 20px 18px;
  }

  .script .copy {
    height: 30px;
    padding: 0 12px;
    background: var(--surface-hi);
    border-color: var(--divider);
    color: var(--text-secondary);
    font-size: 0.8125rem;
  }

  .script .copy:hover {
    color: var(--text);
    border-color: rgba(243, 240, 250, 0.3);
  }

  /* success beat: the control goes success-green while the checkmark pops
     in (motion gated; the color confirmation alone still lands) */
  .script .copy[data-copied] {
    color: var(--success);
    border-color: color-mix(in srgb, var(--success) 40%, var(--divider));
  }

  /* as the docs highlighter draws comments: text-secondary, since tertiary
     fails AA on this surface. A comment wraps where a command scrolls: a
     wrapped command would read as two */
  .comment {
    color: var(--text-secondary);
    font-style: italic;
    white-space: pre-wrap;
  }

  .ps1 {
    color: var(--accent);
    user-select: none;
  }

  .caret {
    display: inline-block;
    width: 0.6em;
    height: 1.2em;
    vertical-align: text-bottom;
    background: var(--text-secondary);
  }

  /* ---- one-line install card ---- */

  /* the command keeps its one line while it fits beside the button; when it
     does not (narrow card, longer locale label) the button wraps below it */
  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    padding: 10px 10px 10px 22px;
    background: var(--bg-deep);
    border: 1px solid color-mix(in srgb, var(--accent) 40%, var(--divider));
    border-radius: var(--radius-m);
    text-align: left;
  }

  .prompt {
    flex: none;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 1.0625rem;
    font-weight: 700;
    user-select: none;
  }

  /* wraps instead of scrolling: a horizontally scrolling command hides its
     tail from the very people who most need to read it. anywhere breaks the
     long URL; the copied text is unchanged. */
  .hero .cmd {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 0.9375rem;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    overflow: visible;
  }

  .hero .copy {
    min-height: 2.75rem;
    padding: 0 20px;
    background: var(--accent);
    color: var(--text-on-accent);
    margin-left: auto;
  }

  .hero .copy:hover {
    background: var(--accent-bright);
  }

  .hero .copy[data-copied] {
    background: var(--success);
  }

  @media (max-width: 599px) {
    .hero {
      padding: 16px;
    }

    .hero .copy {
      width: 100%;
    }

    .prompt {
      display: none;
    }
  }
</style>
