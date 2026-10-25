import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { SITE_URL } from "./src/lib/site.ts";

export default defineConfig({
  plugins: [
    sveltekit({
      // out/ is what the Dockerfile copies into nginx
      adapter: adapter({ pages: "out", assets: "out" }),
      paths: {
        // absolute asset URLs, so 404.html works when nginx serves it at any depth
        relative: false,
        origin: SITE_URL,
      },
    }),
  ],
});
