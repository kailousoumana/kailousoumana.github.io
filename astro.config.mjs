import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site utilisateur GitHub Pages : https://kailousoumana.github.io/
export default defineConfig({
  site: 'https://kailousoumana.github.io',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
