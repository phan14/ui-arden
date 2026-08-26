# Task 08.5 — full regression acceptance report

## Scope and totals

- Routes tested: **21/21** from `SITE_ROUTE_MAPPING.md`.
- Breakpoints per route: **1440, 1024, 768, 390**.
- Breakpoint combinations: **84**.
- React/WordPress 1440 screenshots: **42** (21 pairs), plus computed-style/DOM comparison at all 84 combinations.
- Overall acceptance combinations: **2 PASS / 82 FAIL**. This strict overall count requires Visual, Content, Structure, Interaction and Runtime all to pass or be N/A.
- Runtime/responsive-safety combinations: **84/84 PASS**.
- Defects: **P0 0 · P1 7 · P2 5 · P3 2**.

## Status by area

- **Content:** FAIL. Most static pages retain source text, but T‑Shirt similarity is 0.444 and Policies 0.449 with material missing rendered content. Dynamic sample-record differences are N/A because fake production Posts/Projects are prohibited.
- **Structure:** FAIL. T‑Shirt is 4 vs 6 sections and 1 vs 19 H3; Policies and several visual grids do not reproduce source structure/presentation.
- **Visual:** FAIL. Multi-column/grid collapse and large spacing/image-scale differences affect multiple pages. Computed typography shows widespread 600 vs source 900 heading weight and page-specific size/control mismatches.
- **Interaction:** FAIL. 10 of 12 targeted interaction groups pass; desktop Dịch vụ dropdown and Fabric Guide search/filter fail.
- **Responsive technical safety:** PASS for overflow/clipping/broken images at 84/84; visual responsive fidelity still FAIL because grid/stacking is incorrect.
- **Forms:** functional PASS. Contact and Quote empty/required/invalid email/invalid telephone/safe success/keyboard/mobile paths pass without production mail. Visual form fidelity is P2. Recipient remains `REQUIRES_PRODUCTION_RECIPIENT`.
- **Navigation/links:** FAIL. Mobile menu, sticky Header and search dropdown pass; desktop service dropdown fails. Source crawl found wrong root service paths, missing fragment targets and an unavailable case-study destination. Public Draft routes intentionally remain unavailable until publication.
- **Media:** PASS. No broken image, missing alt, Unsplash fallback or React asset dependency was found; migrated files have metadata and the largest audited local image is about 254 KB.
- **Dynamic templates:** functional PASS for archive/category/single previews/search/404 and empty states. Visual population is pending real Posts/Projects and is classified P2, not replaced by fake records.
- **UX Builder editability:** PASS at architecture level. All 14 page import files pass shortcode validation; native/hybrid structure remains intact; WordPress editor and UX Builder launch return 200. Missing T‑Shirt/Policies source structure is still P1 despite being editable.
- **WordPress Admin:** PASS 10/10 tested areas: Pages, Posts, Projects, UX Blocks, Menus, Customizer, Media, CF7, Page editor and UX Builder launch; no fatal or browser exception.
- **Console/server:** PASS after excluding the expected main-document 404 console entry. No production-relevant JS exception, failed asset, PHP fatal, warning or notice was observed during the matrix/admin pass. PHP lint PASS; TypeScript PASS.
- **Accessibility:** conditional PASS for one H1, alt, labels, keyboard-tested menus/accordions/tabs/forms, native checkbox semantics and reduced-motion CSS. Visual hierarchy/contrast must be rechecked after P1 styling fixes; Quote card-style `aria-pressed` enhancement is P3.
- **SEO technical readiness:** conditional FAIL. Schema ownership/no duplicate theme schema and staging noindex are correct (`blog_public=0`), but Rank Math is absent and production fields cannot receive final acceptance yet.
- **Performance sanity:** PASS with limitations. No React runtime, small native JS, controlled fonts, responsive attachment metadata/lazy loading and no oversized multi-megabyte media. Incorrect layout may affect CLS/visual performance and must be retested after repair; no production Lighthouse/CWV claim is made.
- **Placeholder/draft safety:** PASS for safety, not production completeness. All 15 converted Pages remain Draft, indexing is disabled, theme runtime has no localhost/Windows/`/src/` dependency. Recipient/logo/business values remain documented manual gates.

## Evidence

- `FULL_REGRESSION_DEFECTS.md`
- `FULL_TEST_MATRIX.md`
- `task08_5-full-regression.json`
- `task08_5-interactions.json`
- `task08_5-admin.json`
- `task08_5-screens/`
- Existing `TASK08_ROUTE_TEST.md`, media/SEO/accessibility/performance audits and Draft plan

## Deployment recommendation

The site is technically stable but does **not** meet React 1:1 acceptance. The seven P1 defects must be corrected and the complete matrix re-run before migration handoff proceeds. No site code/content/configuration defect was changed during this first-pass test; no Draft was published, indexing was not enabled, no deployment occurred and no ZIP was created.

# NOT APPROVED FOR TASK 09

Required P1 fixes: REG-001 through REG-007 in `FULL_REGRESSION_DEFECTS.md`.
