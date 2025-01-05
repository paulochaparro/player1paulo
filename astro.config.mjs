// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://player1paulo.com",
  integrations: [sitemap()],
});
