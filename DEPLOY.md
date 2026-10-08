# Sylius Starter: Deploy

Static multi-lang landing page, built with [Astro](https://astro.build).

Live (GitHub Pages project site): [https://jolicode.github.io/sylius-starter/](https://jolicode.github.io/sylius-starter/)

## Prerequisites

- Node.js 20+

## Commands

```bash
npm install     # install dependencies
npm run dev     # http://localhost:4321/
npm run build   # output to dist/ (base path `/`)
npm run preview # http://localhost:4321/ after build
```

Local builds use `ASTRO_BASE=/` by default in `astro.config.mjs`.

To mimic the GitHub Pages project site locally:

```bash
SITE_URL=https://jolicode.github.io ASTRO_BASE=/sylius-starter/ npm run build
npm run preview
# open http://localhost:4321/sylius-starter/
```

## Editing content

| What | Where |
|------|--------|
| Language | `src/i18n/<code>.json` |
| Layout / sections | `src/components/Landing.astro` |
| Styles | `src/styles/global.css` |
| Language switcher | `src/components/LangSwitcher.astro` + `src/i18n/locales.ts` |

To add a language: create `src/i18n/<code>.json`, register it in `src/i18n/locales.ts`, and add `src/pages/<code>/index.astro`.

## GitHub Pages

The workflow [`.github/workflows/website-pages.yml`](../.github/workflows/website-pages.yml) builds and deploys `dist/` on push to `main` when files under `website/` change.

CI sets:

- `SITE_URL=https://jolicode.github.io`
- `ASTRO_BASE=/sylius-starter/`

`public/CNAME` is removed before the CI build so GitHub Pages serves the project URL until a custom domain is configured.

### Custom domain (later)

When moving to `sylius-starter.jolicode.com` at the site root:

1. Add `public/CNAME` with the domain name
2. Update the workflow build env to `SITE_URL=https://sylius-starter.jolicode.com` and `ASTRO_BASE=/`
3. Configure DNS and GitHub Pages custom domain settings

```bash
SITE_URL=https://sylius-starter.jolicode.com ASTRO_BASE=/ npm run build
```
