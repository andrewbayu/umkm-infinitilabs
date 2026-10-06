# Verification — 6 October 2026

Brand/package revision: supplied logo integrated unchanged, white/yellow/black palette applied, package positioning and parent-site link added throughout. Build/typecheck and all 25 responsive checks plus axe scans passed again after this revision. Performance figures below were measured before this visual revision and have not been remeasured.

Campaign visual revision — 7 October 2026: replaced scenery with three generated photo-composite campaign posters and three creator selfie concept stills. Added hero key visuals, per-content horizontal dummy portfolio galleries, and section illustrations. Removed TikTok creator-profile and Instagram embeds; retained only the supplied individual Instagram post link. Build/typecheck passed with zero diagnostics. All 25 viewport/route checks and desktop/mobile axe scans passed. Additional gallery check verified five individual samples per service, keyboard horizontal scrolling, and no account embeds. Desktop hero, mobile layout, and gallery screenshots inspected. Earlier Lighthouse figures below have not been remeasured for these assets.



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

## Direct Indonesian copy — 7 October 2026

Rewrote homepage, service names and descriptions, pricing features, captions, WhatsApp messages, navigation, FAQ, terms, simulation explanations, privacy, metadata, and text inside all three generated campaign posters. Prices, media/fee amounts, service slugs, tier names, monthly counts, AI limits, and seven-row comparisons were compared programmatically against the prior commit and remain unchanged. Build/typecheck passed with zero diagnostics; 25 route/viewport checks, WCAG desktop/mobile scans, keyboard interactions, internal links, and WhatsApp checks passed. Final optimized poster assets and homepage layout were also checked after rebuilding.

## SaaS package UI — 7 October 2026

Rebuilt the UI with Inter headings, white surfaces, yellow accents, rounded cards, and a homepage service selector. Shared TierCard renders two monthly plans per service, output counts, SoW, three-month minimum and calculated contract value with monthly payment disclosure. Service pricing now follows the hero navigation. Existing imagery, main copy, prices and deliverables are unchanged. Keyboard tab selection, contract disclosure, two tiers, Output and SoW were verified in addition to 25 responsive route checks and WCAG scans. Screenshots inspected on desktop and mobile. Performance was not remeasured.
