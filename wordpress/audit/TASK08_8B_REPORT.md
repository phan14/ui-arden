# Task 08.8B — Semantic and content fidelity closure

## Acceptance result

Task 08.8B closes the known Policies and native semantic/content defects, but it does not close the remaining material shared visual differences. P0 is 0; P1 is 2. The result therefore cannot be marked ready for the final full rerun.

## Policies

- Three-way comparison completed: live React DOM → import source → Draft 99.
- All five React-authoritative titles, paragraphs, list items, labels, order and active-panel heading were restored without paraphrasing.
- Fresh text-set similarity: `1.000`.
- Native five-tab behavior and canonical fragments remain operational.
- Draft 99 remains Draft and `_arden_legal_review_required=1`.
- Content: **PASS**.
- Visible structure: **PASS**. Inactive native panels remain in the DOM for Tabs/ARIA; visible-structure comparison ignores them.

## Home inventory before/after

| Element | React element | WordPress element | Expected | Before | After | Disposition |
|---|---|---|---:|---:|---:|---|
| Sections | 16 authored React sections | 16 UX sections/blocks | 16 | 16 | 16 | PASS |
| H1 | Hero title | Native heading | 1 | 1 | 1 | PASS |
| H2 | Section headings | Native headings | 13 | 13 | 13 | PASS |
| H3 | Static headings plus dynamic Project/Post card titles | Native headings plus approved WordPress loop records | 60 | 52 | 52 | Data-dependent delta retained; no invisible headings or fake records added |
| Images | Static images plus dynamic Project/Post featured images | Media Library elements plus WordPress loops | 29 | 20 | 20 | Nine record-dependent images retained as data dependency; no placeholders/duplicates |
| Controls | React controls | Native Flatsome tabs/sliders/loop controls | 34 | 44 | 44 raw DOM | Native accessibility/slider controls require visible normalization; no visible duplicate identified |

The exact 16-section order remains frozen. Static Home content/structure is intact; the unresolved card/image inventory belongs to Projects/Posts without sufficient approved records and is governed by `DYNAMIC_FIDELITY_POLICY.md`.

## T-Shirt Service

- H1/H2/H3 now match `1/1`, `5/5`, `19/19`.
- Section order, fabric controls, GSM controls, print cards, process headings, native size table and CTA are preserved.
- Interactions remain passing; no interaction logic was rebuilt.
- Content: **PASS by exact converted source review**.
- Visible semantic structure: **PASS**.

## FAQ

- Native Accordion and filtering behavior preserved.
- H1/H2/H3 now match `1/1`, `2/2`, `11/11`.
- Six questions, wording, answers, intro, ask-question block, CTA and order remain sourced from React.
- Visible control headings are semantic H3 elements without duplicate visible text.
- Content: **PASS by exact converted source review**.
- Visible semantic structure: **PASS**.

## Quote

- Contact Form 7 retained.
- Direct DOM comparison confirmed exact visible labels, placeholders, product options, quantity options, fabric options, pattern-status options, six technical choices and submit CTA.
- H1/H2/H3 match `1/1`, `3/3`, `5/5`.
- Raw field delta `9/16` is caused by CF7 checkbox inputs/internal implementation, not missing visible content.
- Visible content: **PASS**.
- Visible structure: **PASS with approved CF7 implementation difference**.

## Careers

- Four and only four React positions remain in the same order.
- Native Accordion behavior is preserved.
- H1/H2/H3 now match `1/1`, `2/2`, `4/4`.
- Job titles are semantic H3 headings without duplicated visible labels.
- Content: **PASS by exact converted source review**.
- Visible semantic structure: **PASS**.

## Header

- Flatsome Header Builder architecture retained.
- Corrected the eight primary menu items to exact React labels/order and restored their URLs.
- Enabled and populated the React-authoritative working-hours/address and Hotline/Zalo top bar.
- Search, CTA, sticky state, desktop Services dropdown and mobile menu remain native.
- Functional status: **PASS**.
- Visual 1:1 status: **PARTIAL**. Logo/header layout is materially closer, but exact icon treatment, dropdown card anatomy and all computed spacing/style parity have not been proven.

## Footer

- Global Footer UX Block architecture retained.
- Existing content uses the converted React business values and remains subject to production-data approval.
- Visual 1:1 status: **FAIL**. The current UX Block still lacks the full React footer map card, badges, policy sublink row, icon treatment and exact spacing/density.

## Typography, color and buttons

- The scoped unlayered React utility compatibility layer remains active and cache-busted without changing theme version.
- Focused computed-style evidence still reports material differences across representative H1/H2/body/button/card samples. Some RGB/OKLCH strings are visually equivalent, but font family, sizing or button/background differences also remain.
- Status: **FAIL**.

## Approved implementation differences and dynamic policy

- `APPROVED_WORDPRESS_DIFFERENCES.md` defines the narrow normalization boundary for CF7, Accordion, Tabs, loop and breadcrumb wrappers.
- `DYNAMIC_FIDELITY_POLICY.md` separates template fidelity from unapproved production record content.
- Missing visible content cannot be normalized away; only hidden/internal/accessibility scaffolding is ignored.

## Focused validation

- Required set captured at 1440, 1024, 768 and 390 px: Home, Policies, T-Shirt, FAQ, Quote, Careers, About, Services, plus Manufacturing and Fabric Guide.
- Technical/runtime safety: `40/40 PASS`.
- Fresh screenshots: `wordpress/audit/task08_8-focused-screens/`.
- Raw results: `wordpress/audit/TASK08_8_FOCUSED_RESULTS.json`.
- Focused visual 1:1: **FAIL**, because Footer and shared computed-style differences remain material.

## Interaction and static validation

- Critical native interactions: `84/84 PASS` after semantic changes.
- PHP lint: PASS.
- TypeScript (`tsc --noEmit`): PASS.
- React production build: PASS.
- Shortcode validation: PASS for all 14 page imports.
- Import validation: completed successfully.
- `git diff --check`: PASS with pre-existing line-ending notices only.
- Source/runtime hash parity: PASS for `functions.php`, `arden.css`, `react-utility-compat.css` and `native-interactions.js`.
- Theme version remains `2.0.1`; all 15 converted Pages remain Draft; `blog_public=0`.

## New/remaining severity

- P0: **0**.
- P1: **2**.
  1. Shared Header/Footer visual fidelity is not yet 1:1; Footer remains materially incomplete.
  2. Representative typography/color/button computed styles still differ materially from React.
- Dynamic production-record absence remains documented and was not replaced with fabricated data.

No publishing, indexing, production mail, deployment, ZIP creation, full 21 × 4 rerun, or Task 09 work was performed.

NOT READY FOR FINAL TASK 08.7 RERUN
