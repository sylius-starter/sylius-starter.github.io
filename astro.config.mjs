import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://sylius-starter.github.io';
// Served at the root of https://sylius-starter.github.io (organization site).
// Set ASTRO_BASE only if the site is ever served from a sub-path.
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site,
  base,
  outDir: 'dist',
});
