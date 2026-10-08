import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://sylius-starter.github.io';
// Default `/` for local dev and preview. GitHub Pages project sites set ASTRO_BASE in CI
// (see .github/workflows/website-pages.yml). Custom domain later: ASTRO_BASE=/.
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site,
  base,
  outDir: 'dist',
});
