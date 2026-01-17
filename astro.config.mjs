// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",          // Supabase SSR sayfalar için
  adapter: netlify(),        // Netlify adapter
  vite: {
    plugins: [tailwindcss()],
  },
});
