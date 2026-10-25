<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  /* `svg` is one of the glyph strings from icons.ts, trusted build-time markup. */
  let { svg, size = 24, ...rest }: { svg: string; size?: number } & SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false"
  {...rest}
>
  {@html svg}
</svg>
