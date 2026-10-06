# InfinitiLabs — F&B & Hospitality

Separate static Astro/TypeScript site prepared for **https://umkm.weareinfiniti.id**. No main-site files or DNS records were changed. No backend, CMS, form, checkout, analytics, or database is needed.

## Local setup

Use Node.js **22.19 or later** (current dependency requirement; an even LTS release is recommended).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Preview: http://127.0.0.1:4321. Build output: `dist/`. The default build is **noindex** with robots disallow; production requires `PUBLIC_SITE_ENV=production` at build time.

```powershell
$env:PUBLIC_SITE_ENV='production'
npm run build
Remove-Item Env:PUBLIC_SITE_ENV
```

## Routes and editing

- `/`: service menu and selection guide.
- `/creator-style-social-content/`, `/signature-product-campaign/`, `/local-awareness-ads/`: static service pages.
- `/privacy/`: actual data collection / external destinations.
- `/robots.txt`, `/sitemap.xml`: generated at build time.

All service names, prices (integer IDR), media/fee split, structured output counts, AI quotas, and seven-row comparisons are in `src/data/services.ts`. Shared contact settings, canonical base, FAQ, workflow, and terms are in `src/data/site.ts`. Shared styling: `src/styles/global.css`. Homepage editorial copy: `src/pages/index.astro`. Shared service layout: `src/pages/[service].astro`.

WhatsApp uses the configured phone with encoded editable tier-specific text. It never sends automatically. Email fallback is available in footer and final CTA. No analytics IDs have been invented. If analytics are later installed, update privacy to match actual collection.

## Verification

With preview running, `node scripts/verify.mjs` checks five routes at 360/390/768/1280/1440px, direct reloads, one H1, images, canonical metadata, internal routes/fragments, all WhatsApp destinations, package structure, WCAG A/AA via axe, keyboard accordions/menu, and reduced motion. It uses installed Microsoft Edge via Playwright. Reports and screenshots are saved under `test-results/`.

See `ASSETS.md` for source/license records. Regenerate WebP assets and social image with `node scripts/prepare-assets.mjs`.

## Deployment and subdomain

Hosting provider and DNS credentials were not supplied. Domain is **not claimed live**. No DNS edits or production deployment have been made. Deploy this folder as a **new project**, never over the root-domain site. Build command `npm run build`, publish directory `dist`, static framework preset Astro. For a review deployment leave `PUBLIC_SITE_ENV` unset; set it to `production` only for the public release.

The output contains directory `index.html` files so direct route loads and refreshes work on standard static hosting. Do not configure an SPA catch-all that replaces service pages with the homepage. Configure host redirect support for trailing slashes if required.

Owner/hosting steps:

1. Select the hosting provider and create a separate project with the build/output settings above.
2. Obtain a preview URL, check all five routes, and keep previews noindex.
3. Add `umkm.weareinfiniti.id` in that project's custom-domain settings.
4. Use the exact DNS record value returned by that provider. Do not guess a CNAME destination. Change only the `umkm` record, preserving root and `www`.
5. Wait for domain verification and a valid TLS certificate. Enable forced HTTPS, preserving path and query string.
6. Set `PUBLIC_SITE_ENV=production`, deploy, then check canonical metadata, robots allow, sitemap, social image, all deep links, and WhatsApp tier selections on the actual HTTPS domain.

Astro reference checked at implementation: https://docs.astro.build/en/install-and-setup/ and https://docs.astro.build/en/guides/deploy/ . Hosting-specific DNS instructions must come from the chosen provider after the project is created.
