# Verification — 6 October 2026

Brand/package revision: supplied logo integrated unchanged, white/yellow/black palette applied, package positioning and parent-site link added throughout. Build/typecheck and all 25 responsive checks plus axe scans passed again after this revision. Performance figures below were measured before this visual revision and have not been remeasured.

Video-reference revision: each service page now includes an official TikTok creator-profile embed and the selected Instagram embed in a horizontal gallery. Privacy copy reflects third-party embeds. Source accounts are disclosed as cross-industry references. Build and responsive checks not yet rerun for this revision.

- Astro static build and typecheck: passed without errors, warnings, or hints.
- Five HTML pages emitted. Direct loads and refreshes tested for every route.
- 25 route/viewport combinations: 360, 390, 768, 1280, 1440px; no horizontal overflow.
- Two tiers and exactly seven comparison rows per service; tier WhatsApp destinations and encoded service names checked.
- Internal page/fragment links, images, canonical URLs, one H1 per page, keyboard menu/FAQ, Escape key, and reduced motion checked.
- Axe WCAG A/AA scans on all pages and mobile homepage passed. Reports: `test-results/verification.json`.
- Lighthouse simulated mobile on local preview: homepage performance **98**, LCP **2.41s**, CLS **0**; ads performance **99**, LCP **1.96s**, CLS **0**. Lab measurements are not a production guarantee; repeat against deployed HTTPS origin.
- Lighthouse accessibility homepage 100; ads 99 identified a row-header ARIA issue, subsequently corrected from heading elements to spans and covered by final axe best-practice checks.
- Lighthouse SEO 69 reflects intentional preview `noindex`/robots disallow. Production requires `PUBLIC_SITE_ENV=production` and a fresh deployment check.
- Lighthouse was used temporarily and removed from project dependencies after capturing HTML/JSON reports. The permanent verification script uses Playwright and axe.

Remaining external dependency: choose hosting, create a new project, add the exact provider-specified `umkm` DNS record, and verify TLS/production indexing. Root-domain content and DNS have not been modified.
