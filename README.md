# portfolio

Tsubasa Yamamoto's portfolio site, built with SvelteKit 2 + Svelte 5 + Vite 5 + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173/
```

## Build

```bash
npm run build      # vite build (static prerender via @sveltejs/adapter-static)
npm run preview    # preview the production build locally
npm run check      # svelte-kit sync && svelte-check
npm run format     # prettier --write .
```

## Deploy

The site is published via GitHub Pages using GitHub Actions
(`.github/workflows/deploy.yml`).

1. Create a repository named `portfolio` on GitHub
   (so the URL becomes `https://<username>.github.io/portfolio/`).
2. Push the contents of this directory to the `main` branch.
3. Open the repository **Settings → Pages** and set
   **Build and deployment → Source** to **GitHub Actions**.
4. Every push to `main` then builds and deploys automatically.

If you switch to a custom domain, update:

- `svelte.config.js` → set `paths.base` to `''`
- add `static/CNAME` containing the domain name

## Structure

```
src/
  routes/                       # SvelteKit routes (+page.svelte, +layout.svelte)
    +page.svelte                # home (Hero / About / Work / Story / Contact)
    tech-selection/+page.svelte # tech rationale page (Aurora WebGL hero)
  lib/
    components/                 # Nav, Footer, Section, FadeIn, TechBadge,
                                # Holographic, Aurora (WebGL background)
    sections/                   # Hero / About / Work / Story / Contact
    data/                       # profile, asgard, techRationale
static/                         # img.png, favicon.svg, .nojekyll
doc/                            # 実績.md (source notes)
```

## Tech notes

- **Static site**: `@sveltejs/adapter-static` with `prerender = true` in the
  root layout, so every route is exported as a static HTML file at build time.
- **WebGL hero on `/tech-selection/`**: a port of ReactBits' Aurora background,
  written in raw WebGL 1 (no `ogl` dependency). Animation pauses when the
  canvas is offscreen via IntersectionObserver, respects
  `prefers-reduced-motion`, and disposes all GL resources + calls
  `WEBGL_lose_context` on unmount.
- **GitHub Pages base path**: `paths.base` is set to `/portfolio` in
  production by `svelte.config.js`. All internal links use `import { base }
  from '$app/paths'`.
