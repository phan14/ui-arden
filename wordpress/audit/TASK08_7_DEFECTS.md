# Task 08.7 defects

This is a new defect list generated from the fresh Task 08.7 rerun. Historical Task 08.5 results were not copied forward unless the current evidence reproduced them.

## P0 — 0

No fatal error, data-loss condition, raw shortcode, React runtime dependency, broken migrated image, or production-relevant JavaScript exception reproduced.

## P1 — 4

### T087-001 — Site-wide visual fidelity remains materially below React

- **Page:** all 21 mapped routes, most visible on Policies and other static content pages.
- **Breakpoint:** 1440, 1024, 768, 390.
- **Expected:** React header/footer, typography, colors, spacing, containers, grids, cards, buttons, radii, shadows, and responsive rhythm.
- **Actual:** every route retains computed-style differences. Common differences include heading line-height/letter-spacing/color, body family/size/line-height/color, and button family/size/letter-spacing/background/radius. The fresh Policies screenshots show materially different page density, banner styling, tab/card presentation, CTA section, and footer.
- **Evidence:** `task08_5-full-regression.json`; fresh pairs in `task08_5-screens/`; `TASK08_7_FULL_TEST_MATRIX.md`.
- **Likely root cause:** the scoped adapters fixed grid activation and weight 900, but the complete React design-token/component layer is still not reproduced by Flatsome's rendered components and Header/Footer Builder output.

### T087-002 — Policies content and structure do not match the React source

- **Page:** Policies.
- **Breakpoint:** all four.
- **Expected:** React policy text, active content heading, five policy controls, card layout, and exact CTA presentation.
- **Actual:** text-set similarity is `0.449`; React/WordPress visible H2 counts are 2/1 and primary/button counts are 5/2 at 1440. Native tab behavior and canonical fragments work, but the panel copy and visual structure are from a different policy version.
- **Evidence:** `policies-react.png`, `policies-wp.png`, and the Policies rows in `task08_5-full-regression.json`.
- **Likely root cause:** canonical panel IDs were repaired without synchronizing the React-authoritative `PolicySection` copy/layout into the WordPress Draft.

### T087-003 — Home content/structure inventory remains different

- **Page:** Home.
- **Breakpoint:** all four.
- **Expected:** exact React card, heading, image, and CTA inventory.
- **Actual:** text similarity is `0.948`; at 1440 React/WordPress counts are H3 60/52, images 29/20, and controls 34/44. Section count and H1/H2 counts match, but the detailed inventory does not.
- **Evidence:** Home rows in `task08_5-full-regression.json` and fresh Home screenshot pair.
- **Likely root cause:** WordPress-native/dynamic Home elements do not reproduce all React cards/media and expose additional native controls.

### T087-004 — Native interactive-page content/heading/control structure remains different

- **Page:** T-Shirt Service, FAQ, Quote, Careers; Contact has a form-field count difference.
- **Breakpoint:** all four.
- **Expected:** exact source text, heading hierarchy, control count, and form-field structure, allowing only documented WordPress system wrappers.
- **Actual:** T-Shirt similarity `0.924` and H3 19/14; FAQ similarity `0.870` and H3 11/5; Quote similarity `0.890` with fields 9/16; Careers similarity `0.960` and H3 4/0. Interactions themselves pass.
- **Evidence:** per-route rows in `task08_5-full-regression.json`, `task08_6c-focused.json`, and `task08_7-systems.json`.
- **Likely root cause:** native Tabs/Accordion/CF7 conversions preserve behavior but use different semantic elements/control inventories and, on some pages, omit or duplicate source-visible text.

## P2 — 4

### T087-005 — Dynamic templates are structurally safe but lack approved production content

- **Page:** Projects, Case Study, News, Category, Search.
- **Breakpoint:** all four.
- **Expected:** React sample density when approved real records exist.
- **Actual:** archive/single/results/no-results runtime states pass, but WordPress has no equivalent approved production Posts/Projects to match the populated React samples.
- **Evidence:** dynamic counts in `task08_5-full-regression.json`; 8/8 system-state checks in `task08_7-systems.json`.
- **Likely root cause:** intentionally absent production data; fake records are prohibited.

### T087-006 — CF7 is functional but its visual/field architecture differs

- **Page:** Contact and Quote.
- **Breakpoint:** all four.
- **Expected:** React field/control presentation and exact selector-card structure.
- **Actual:** empty and invalid validation, keyboard-reachable controls, and valid `sent` frontend state pass with mail skipped; the CF7 fields/wrappers and button/card styles remain different.
- **Evidence:** `task08_7-systems.json` and computed-style/field counts in `task08_5-full-regression.json`.
- **Likely root cause:** native CF7 markup and shared form styling do not exactly implement the React form components.

### T087-007 — SEO/business production dependencies remain unavailable

- **Page:** site-wide.
- **Breakpoint:** N/A.
- **Expected:** production metadata owner plus verified business/contact/recipient values before launch.
- **Actual:** Rank Math is not installed; the recipient remains intentionally locked and production business values remain unapproved. `blog_public=0` correctly remains staging-safe.
- **Evidence:** `task08_7-systems.json` and existing production-data audit.
- **Likely root cause:** documented manual production dependency.

### T087-008 — 404 typography remains visually different

- **Page:** real HTTP 404.
- **Breakpoint:** all four.
- **Expected:** React 404 typography and spacing.
- **Actual:** runtime 404 is correct and safe, but H1 font size/line-height/letter-spacing/color differ in the fresh computed-style comparison.
- **Evidence:** 404 rows and screenshot pair in the fresh regression artifacts.
- **Likely root cause:** WordPress system-template typography is still governed by different shared rules.

## P3 — 1

### T087-009 — Expected 404 main-document console resource message

- **Page:** 404.
- **Breakpoint:** all four.
- **Expected/actual:** the invalid route correctly returns HTTP 404; Chromium reports the failed main document as a console resource error.
- **Evidence:** 404 `consoleErrors`/failed response in `task08_5-full-regression.json`.
- **Likely root cause:** standard browser behavior, not a WordPress runtime defect.

## Verified non-defects in this rerun

- 84/84 route/breakpoint combinations passed technical runtime/responsive safety.
- Critical interactions passed in the fresh focused rerun, including menu, tabs, accordions, Fabric filtering, fragments, and CTA route contract.
- Contact and Quote validation/valid frontend flow passed without production mail.
- 10/10 admin destinations returned 200 with no fatal/browser exception.
- All 20 Media Library attachments have dimensions and alt text; no attachment URL uses Unsplash.
- No section-level UX HTML blob was detected.
- All converted Pages remain Draft and `blog_public=0`.

## Task 08.8 disposition

- `T087-001`: PARTIALLY REPAIRED. A generated, scoped unlayered React utility compatibility stylesheet now corrects the underlying Tailwind/Flatsome cascade conflict without unscoped theme impact. Focused safety is 24/24, but remaining computed-style and shared Header/Footer differences prevent closure.
- `T087-002`: OPEN. Exact React policy panel copy and hierarchy have not yet replaced the different Draft 99 policy version.
- `T087-003`: OPEN. The exact 16-section order is confirmed, but detailed H3/image/control inventories still differ.
- `T087-004`: OPEN. Native interactions remain passing, but source-visible heading/control structure is still different on the named pages.
- `T087-005` through `T087-009`: unchanged; no unsafe data fabrication, production configuration, or unrelated refactor was performed.
