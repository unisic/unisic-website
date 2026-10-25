<!--
  Entrance capture, landing pages only: the page opens dimmed under the app's
  region overlay, a selection is dragged out across it with its live size
  readout counting up, a soft shutter flash fires once inside it, and the page
  zooms in to full size as the overlay lifts.

  The head script decides before first paint, so nothing flickers: a fresh
  navigation (not a reload, back/forward or #anchor link), once per tab, and
  never under prefers-reduced-motion. It also hands CSS the readout's start and
  end sizes in px. Svelte inserts the same script with innerHTML on client-side
  navigation, where it does not execute, so moving between pages never replays
  it. Without JS the page simply shows.

  The flash is a single pulse to 20% of the text color, well under the three
  flashes per second WCAG 2.3.1 allows. The page itself stays opaque the whole
  time, so its first paint (and LCP) is not held back.
-->
<svelte:head>
  {@html `<script>try{var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="navigate"&&!location.hash&&matchMedia("(prefers-reduced-motion: no-preference)").matches&&!sessionStorage.getItem("unisic-intro")){sessionStorage.setItem("unisic-intro","1");var d=document.documentElement,w=innerWidth,h=innerHeight;d.style.cssText+=";--intro-w0:"+Math.round(w*.18-16)+";--intro-h0:"+Math.round(h*.24-16)+";--intro-w1:"+(w-32)+";--intro-h1:"+(h-32);d.dataset.intro=""}}catch(e){}<\/script>`}
</svelte:head>

<style>
  /* registered so the readout counts through every integer instead of
     flipping from the start size to the end size halfway */
  @property --intro-w {
    syntax: "<integer>";
    inherits: false;
    initial-value: 0;
  }

  @property --intro-h {
    syntax: "<integer>";
    inherits: false;
    initial-value: 0;
  }

  :global(html[data-intro])::before,
  :global(html[data-intro])::after {
    position: fixed;
    z-index: var(--z-intro);
    pointer-events: none;
  }

  /* the selection, as OverlayWindow.qml draws it: accent border, square
     handles on the corners, everything outside dimmed by the box-shadow */
  :global(html[data-intro])::before {
    content: "";
    border: 1.5px solid var(--accent);
    box-shadow: 0 0 0 100vmax rgba(11, 9, 33, 0.62);
    --h: linear-gradient(var(--accent) 0 0);
    background:
      var(--h) top left / 8px 8px,
      var(--h) top right / 8px 8px,
      var(--h) bottom left / 8px 8px,
      var(--h) bottom right / 8px 8px;
    background-origin: border-box;
    background-repeat: no-repeat;
    animation:
      intro-select 1.2s linear forwards,
      intro-flash 1.2s linear forwards;
  }

  /* the live size readout, riding the dragged corner */
  :global(html[data-intro])::after {
    padding: 3px 9px;
    border-radius: var(--radius-s);
    background: var(--accent);
    color: var(--text-on-accent);
    font: 600 0.8125rem/1.5 var(--font-mono);
    counter-reset: w var(--intro-w) h var(--intro-h);
    content: counter(w) " × " counter(h);
    animation: intro-readout 1.2s linear forwards;
  }

  /* scaled around the first screen, not the middle of the whole page; fill
     backwards only, so no transform outlives the animation and the sticky
     nav and fixed descendants behave normally afterwards */
  :global(html[data-intro] body) {
    transform-origin: 50% 50vh;
    animation: intro-zoom 1.2s linear backwards;
  }

  /* drag from the top-left anchor to the far corner, hold, then lift */
  @keyframes intro-select {
    0% {
      inset: 16px 82% 76% 16px;
      animation-timing-function: var(--ease-out);
    }
    50%,
    58% {
      inset: 16px;
      opacity: 1;
      animation-timing-function: var(--ease-out);
    }
    100% {
      inset: -12px;
      opacity: 0;
      visibility: hidden;
    }
  }

  /* the shutter: the captured region and its border light up once */
  @keyframes intro-flash {
    0%,
    52% {
      background-color: transparent;
      border-color: var(--accent);
    }
    56% {
      background-color: rgba(243, 240, 250, 0.2);
      border-color: var(--text);
      animation-timing-function: var(--ease-out);
    }
    86%,
    100% {
      background-color: transparent;
      border-color: var(--accent);
    }
  }

  @keyframes intro-readout {
    0% {
      right: calc(82% + 10px);
      bottom: calc(76% + 10px);
      --intro-w: var(--intro-w0);
      --intro-h: var(--intro-h0);
      animation-timing-function: var(--ease-out);
    }
    50%,
    58% {
      right: 26px;
      bottom: 26px;
      --intro-w: var(--intro-w1);
      --intro-h: var(--intro-h1);
      opacity: 1;
    }
    70%,
    100% {
      right: 26px;
      bottom: 26px;
      --intro-w: var(--intro-w1);
      --intro-h: var(--intro-h1);
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes intro-zoom {
    0%,
    58% {
      transform: scale(0.93);
      animation-timing-function: var(--ease-out);
    }
  }
</style>
