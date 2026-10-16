# Sylius Starter: Deploy

Static multi-lang landing page, built with [Astro](https://astro.build).

Live (GitHub Pages organization site): [https://sylius-starter.github.io/](https://sylius-starter.github.io/)

## Prerequisites

- Node.js 22.12+ (required by Astro)

## Commands

```bash
npm install     # install dependencies
npm run dev     # http://localhost:4321/
npm run build   # output to dist/
npm run preview # http://localhost:4321/ after build
```

`astro.config.mjs` defaults to `SITE_URL=https://sylius-starter.github.io` and `ASTRO_BASE=/`, so local and CI builds need no extra variables.

## Editing content

| What | Where |
|------|--------|
| Copy (per language) | `src/i18n/<code>.json` |
| Layout / sections | `src/components/Landing.astro` |
| Styles | `src/styles/global.css` |
| Fonts, `<head>` | `src/layouts/Layout.astro` |
| Language switcher | `src/components/LangSwitcher.astro` + `src/i18n/locales.ts` |

To add a language: create `src/i18n/<code>.json`, register it in `src/i18n/locales.ts`, and add `src/pages/<code>/index.astro`.

The root `/` page redirects to the visitor's browser language (English by default).

## GitHub Pages

The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site with `withastro/action` and deploys `dist/` with `actions/deploy-pages` on every push to `main` (or manually via *Run workflow*).

In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**. With "Deploy from a branch", GitHub also runs its default Jekyll build on the raw sources, which fails on the `.astro` files.

`public/CNAME` contains `sylius-starter.github.io`.

### Custom domain (later)

To serve the site from a custom domain at the root:

1. Replace the content of `public/CNAME` with the domain name
2. Change the `site` default in `astro.config.mjs` (or set `SITE_URL` in the workflow) to the new URL, so canonical and `hreflang` links are correct
3. Configure DNS and the custom domain in GitHub Pages settings

Only set `ASTRO_BASE` if the site is ever served from a sub-path.
