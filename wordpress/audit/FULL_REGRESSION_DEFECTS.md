# Full regression defects — first pass

No website defect was fixed during this pass. Test tooling/report files only were added.

## P0 — 0

No fatal, data-loss, security-handler, raw-shortcode or total-runtime blocker was observed.

## P1 — 7

### REG-001 — Native grid/layout collapses against React

- **Page:** About, Services, Shirt, Jacket, Pants, Manufacturing, Fabric Guide; visible to varying degrees on other converted pages
- **Breakpoint:** 1440, 1024, 768, 390
- **Expected:** React multi-column mosaics/cards/grids, compact section rhythm and bounded image cards.
- **Actual:** columns/cards frequently stack or leave large blank areas; images become oversized; full-page height ratios at 1440 include About 1.86×, Services 1.58×, Manufacturing 1.52× and Fabric Guide 2.06× React.
- **Likely cause:** generated Flatsome row/column markup and imported utility classes do not reproduce the React grid rules; competing Flatsome/Tailwind-derived layout selectors.
- **Recommended fix:** repair scoped Arden row/column/card layout rules and element grouping, page by page against React screenshots; do not rebuild content.

### REG-002 — Global typography/button/card styling is materially different

- **Page:** most converted static pages plus dynamic templates
- **Breakpoint:** all four
- **Expected:** source computed font weights/sizes/line heights/colors/radii.
- **Actual:** common page H1/H2 compute at weight 600 instead of React 900; About H2 is 36px instead of 30px; Contact H2 is 36px instead of 16px; buttons/cards frequently use different colors, radii and spacing. Home is the closest exception.
- **Likely cause:** Flatsome heading/button rules override or outrank per-element React utility classes; global theme typography is not scoped precisely enough.
- **Recommended fix:** normalize selector specificity/tokens in the child theme, then re-run computed-style comparison across every page.

### REG-003 — T‑Shirt Service content and structure are incomplete

- **Page:** T‑Shirt Service
- **Breakpoint:** all four
- **Expected:** 6 sections, 19 H3 and 6 primary/button controls matching React.
- **Actual:** 4 sections, 1 H3, 2 controls; text-set similarity 0.444; page height 0.61× React at 1440.
- **Likely cause:** earlier pilot page remained a reduced implementation and was never propagated to the complete Task 06C source structure.
- **Recommended fix:** restore missing native sections/elements from `TShirtServicePage` while preserving current approved content and editability.

### REG-004 — Policies content/structure is incomplete

- **Page:** Policies
- **Breakpoint:** all four
- **Expected:** React policy overview plus complete policy-tab content, 2 H2 and 5 controls.
- **Actual:** rendered text similarity 0.449, 1 H2 and 2 controls.
- **Likely cause:** tab reconstruction contains only part of the source-visible structure/content.
- **Recommended fix:** reconcile every React policy tab/panel and CTA with the native Flatsome tabgroup; retain exact wording.

### REG-005 — Fabric Guide search/filter interaction is not wired

- **Page:** Fabric Guide
- **Breakpoint:** all four
- **Expected:** search filters cards, category filters set active/`aria-pressed`, and unmatched queries produce an empty result.
- **Actual:** test found 0 `.arden-fabric-card` and 0 `.arden-fabric-filter` controls; the existing input has no matching JS hook, so search/filter/empty-result behavior fails.
- **Likely cause:** Task 06C conversion omitted the classes/data contract expected by `native-interactions.js`.
- **Recommended fix:** add scoped hooks to existing native elements and an accessible empty state; no React dependency.

### REG-006 — Desktop Dịch vụ dropdown does not open

- **Page:** global Header
- **Breakpoint:** 1440 and desktop layout at 1024
- **Expected:** hovering/focusing Dịch vụ reveals eight child destinations.
- **Actual:** primary menu contains the eight children and mobile exposes them, but desktop hover yields 0 visible dropdown links.
- **Likely cause:** custom menu hierarchy is present in data but Flatsome desktop dropdown markup/class/state is not being generated or is hidden by Header/CSS configuration.
- **Recommended fix:** inspect menu item classes/Header Builder dropdown settings and restore hover plus keyboard disclosure without changing labels.

### REG-007 — Internal CTA destinations include invalid routes/fragments

- **Page:** Home, Footer and shared CTAs
- **Breakpoint:** all
- **Expected:** WordPress-compatible mapped paths and valid in-page fragments.
- **Actual:** source crawl finds root links `/may-ao-thun/`, `/may-ao-so-mi/`, `/may-quan/` although canonical pages are under `/dich-vu/`; `/dich-vu#so-mi`, `#quan`, `#ao-khoac`, `#local-brand` have no matching IDs; `/du-an/bst-ao-thun-local-brand` has no real matching Project record. Draft targets also return public 404 until intentionally published.
- **Likely cause:** legacy Home/Footer links were not updated after service pages became children; fragment IDs and real Case Study data were never created.
- **Recommended fix:** update only destinations to `SITE_ROUTE_MAPPING.md`, add existing-section IDs where source expects anchors, and replace the case-study target only when a real Project exists.

## P2 — 5

### REG-008 — Dynamic pages cannot visually match populated React samples

- **Page:** Projects, Case Study, News, Category, Search
- **Breakpoint:** all
- **Expected:** source visual density when real records exist.
- **Actual:** WordPress correctly shows real/empty dynamic state, producing 1440 height ratios of 0.37–0.61× React on several templates.
- **Likely cause:** production Posts/Projects are intentionally absent; fake records are prohibited.
- **Recommended fix:** enter approved real content and re-run visual acceptance; do not seed fake production data.

### REG-009 — CF7 presentation differs from React form controls

- **Page:** Contact, Quote
- **Breakpoint:** all
- **Expected:** React blue CTA, card selectors and exact compact typography/radii.
- **Actual:** Contact submit computes amber with 8px radius versus React blue with 12px; CF7 wrapper/control counts differ, though labels and validation pass.
- **Likely cause:** generic Task 07 CF7 styling does not fully mirror per-page React utility styles.
- **Recommended fix:** refine scoped CF7 CSS after P1 layout/typography correction; preserve native validation.

### REG-010 — 404 visual typography mismatch

- **Page:** 404
- **Breakpoint:** all
- **Expected:** React H1 24px at 1440.
- **Actual:** WordPress H1 48px; page otherwise returns the correct HTTP 404 with no overflow.
- **Likely cause:** generic global H1 styling overrides system-template design.
- **Recommended fix:** scope 404 heading typography.

### REG-011 — Rank Math fields are unavailable locally

- **Page:** admin/SEO across all indexable types
- **Breakpoint:** N/A
- **Expected:** title, description, canonical, social and schema ownership fields available for final staging QA.
- **Actual:** Rank Math is not installed; architecture is documented and indexing remains off.
- **Likely cause:** known manual deployment dependency.
- **Recommended fix:** install/configure the official plugin in the next authorized configuration phase, without enabling indexing.

### REG-012 — Production data is still unresolved

- **Page:** Header, Footer, Contact, Quote and shared CTAs
- **Breakpoint:** all
- **Expected:** verified logo, recipient, phone, email, address, hours, social/legal/commercial data.
- **Actual:** `REQUIRES_PRODUCTION_RECIPIENT`, reconstructed logo and demo business data remain; CF7 mail is safely disabled.
- **Likely cause:** owner-supplied production values have not been provided.
- **Recommended fix:** obtain explicit owner approval/data; never guess values.

## P3 — 2

### REG-013 — Quote selector uses native checkbox semantics rather than `aria-pressed`

- **Page:** Quote
- **Breakpoint:** all
- **Expected:** source selectable-card active appearance/pressed state.
- **Actual:** six accessible native CF7 checkboxes work and retain selection, but no `aria-pressed` card layer exists.
- **Likely cause:** intentional progressive degradation during CF7 integration.
- **Recommended fix:** optional vanilla-JS/CSS enhancement over native inputs after major defects.

### REG-014 — Expected 404 document logs a browser resource error

- **Page:** 404
- **Breakpoint:** all
- **Expected/actual:** document correctly returns 404; Chrome logs the failed main resource as an error.
- **Likely cause:** standard browser behavior for the intentionally invalid URL.
- **Recommended fix:** none; exclude the expected document response from production console-error counts.

## Verified non-defects

- 84/84 combinations: expected HTTP, one H1, no horizontal overflow/clipped controls, no broken image, no missing `alt`, no raw shortcode and no React runtime.
- Sticky Header, mobile menu, FAQ/Careers accordion, T‑Shirt/FAQ/Policies tabs, Header search, Quote selection and CF7 telephone validation pass.
- Admin Pages, Posts, Projects, UX Blocks, Menus, Customizer, Media, CF7, editor and UX Builder launch return 200 with no fatal/browser exception.
- All 15 converted Pages remain Draft; `blog_public=0`.

## Task 08.6B execution addendum

This addendum records the partial execution result. The complete 08.5 regression matrix has not been rerun.

| REG | Task 08.6B status | Evidence |
|---|---|---|
| REG-001 | **FOCUSED PASS** | Scoped grid adapter targets the rendered `.arden-react-page .row[class*="grid"]`; About, Services, Manufacturing, and Fabric Guide passed HTTP 200, no horizontal overflow, and CSS Grid checks at 1440/1024/768/390. Full visual screenshot comparison remains pending. |
| REG-002 | **FOCUSED PASS** | Child theme version is 2.0.1; sampled React-derived headings compute at weight 900 across Drafts 83/99/100 at all four widths. Full page computed-style comparison remains pending. |
| REG-003 | **NOT FIXED** | Draft 83 was synchronized from the corrected import and remains Draft, but authenticated rendering still omits the print-card text and does not expose the complete React-equivalent card/section structure. |
| REG-004 | **NOT FIXED** | Draft 99 remains Draft and retains existing policy text, but rendered panels still expose generated Vietnamese IDs rather than the five React IDs because the updated JS is not the served runtime copy. Status remains `LEGAL_REVIEW_REQUIRED`. |
| REG-005 | **NOT FIXED** | Workspace JS contains the confirmed DOM-contract repair, but the served local runtime still returns the old/missing script copy; search, category filtering, combined state, and empty state have not passed runtime validation. |
| REG-006 | **VERIFIED PASS** | Authenticated 1440px inspection showed menu parent 120 with eight children; hover produced `aria-expanded="true"`, eight visible dropdown links, `pointer-events:auto`, `overflow:visible`, and `z-index:9`. No menu/PHP/CSS change was needed. |
| REG-007 | **ROUTE FIX APPLIED** | Home 48, Footer block 59, and Draft 82 were synchronized with canonical service routes; Local Brand uses `/dich-vu/#local-brand` and the Services preview exposes `#local-brand`; case-study CTAs use `/du-an/`. Policy fragment validity remains coupled to REG-004. |

Runtime safety constraints remain intact: no publication, indexing enablement, production deployment, ZIP creation, or theme-version change beyond the required 2.0.1 child-theme bump.
