# TASK 08.6 SAFE PLAN

## Scope

This document is a pre-fix implementation plan only. It does not modify runtime files, does not modify the WordPress database, does not publish pages, does not enable indexing, and does not change the theme version.

The repository evidence shows that Task 08.5 failed final acceptance with seven P1 defects. The safest path is to fix the root causes in dependency order, validate each phase with focused regression, and only then move to the next phase.

## A. Root-cause grouping for REG-001 through REG-007

### Group 1 — Shared/global CSS and grid design-system conflict

- REG IDs: REG-001, REG-002, REG-010 (P2) partially overlaps this root cause
- React source:
  - `src/pages/AboutPage.tsx`
  - `src/pages/ServicesPage.tsx`
  - `src/pages/ManufacturingPage.tsx`
  - `src/pages/FabricGuidePage.tsx`
  - `src/pages/ShirtServicePage.tsx`
  - `src/pages/JacketServicePage.tsx`
  - `src/pages/PantsServicePage.tsx`
  - shared layouts in `src/components/layout/Container.tsx` and relevant section components
- WordPress implementation:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - WordPress generated Flatsome Row/Column/Section markup
  - imported page drafts in `wordpress/import/pages/*.txt`
- Affected pages:
  - About, Services, Manufacturing, Fabric Guide, Shirt, Jacket, Pants, plus other static pages that inherit the same style layer
- Exact files involved:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - `wordpress/import/pages/about-flatsome.txt`
  - `wordpress/import/pages/services-flatsome.txt`
  - `wordpress/import/pages/manufacturing-flatsome.txt`
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/import/pages/shirt-service-flatsome.txt`
  - `wordpress/import/pages/jacket-service-flatsome.txt`
  - `wordpress/import/pages/pants-service-flatsome.txt`
- WordPress Draft IDs:
  - 81, 82, 84, 85, 86, 87, 100
- Regression risk:
  - High. This is global and affects all pages inheriting the same child theme CSS.

Why this is grouped together:
- The root cause is shared CSS conflict between Flatsome defaults and Arden helper classes, not seven unrelated bugs.
- The same layer drives the grid collapse and a large portion of the typography mismatch.

### Group 2 — Typography and shared design-token mismatch

- REG IDs: REG-002, REG-010 (404 typography mismatch), REG-009 (CF7 presentation differs) partly overlaps this root cause
- React source:
  - all static page components using `font-black`, `text-*`, `tracking-*`, and button/card classes
  - `src/components/ui/Button.tsx`
  - `src/components/ui/SectionHeading.tsx`
  - `src/components/ui/CTASection.tsx`
- WordPress implementation:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - theme-level heading selectors and button/card styling in the generated Flatsome page output
- Affected pages:
  - most converted static pages plus dynamic templates inheriting the same global theme rules
- Exact files involved:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - `wordpress/import/ux-blocks/*.txt` where CTA/button blocks are reused
- WordPress Draft IDs:
  - all static page drafts (81, 82, 83, 84, 85, 86, 87, 95, 96, 97, 98, 99, 100, 101)
- Regression risk:
  - High. Typography overrides affect site-wide heading weight, sizes, spacing, cards, and CTA/button styling.

Why this is grouped together:
- The evidence states heading weight often renders 600 instead of React 900 across pages; this is a global cascade issue, not a page-specific visual bug.
- The same problem explains button/card mismatch and the 404 heading mismatch.

### Group 3 — Stale page content and imported source drift

- REG IDs: REG-003, REG-004, REG-007
- React source:
  - `src/pages/TShirtServicePage.tsx`
  - `src/pages/PoliciesPage.tsx`
  - `src/components/sections/PolicySection.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
  - `src/App.tsx`
  - `src/data/siteData.ts`
- WordPress implementation:
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - `wordpress/import/pages/policies-flatsome.txt`
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - imported WordPress draft pages for service child pages and the policy page
- Affected pages:
  - T-shirt service, Policies, Footer/CTA destinations, and shared service navigation destinations
- Exact files involved:
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - `wordpress/import/pages/policies-flatsome.txt`
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - `wordpress/audit/SITE_ROUTE_MAPPING.md`
  - `wordpress/audit/task08_5-link-crawl.json`
- WordPress Draft IDs:
  - 83, 99, plus relevant shared footer/menu content and page relationship IDs
- Regression risk:
  - Medium to high. This group has both content drift and navigation drift, so it can affect multiple pages even when the underlying global CSS is fixed.

Why this is grouped together:
- These are stale-data defects: the React source is authoritative, but the WordPress imported source and/or the Draft records are lagging behind it.
- Route drift and missing content are both symptoms of stale source synchronization.

### Group 4 — Interaction JS and DOM contract mismatch

- REG IDs: REG-005
- React source:
  - `src/pages/FabricGuidePage.tsx`
- WordPress implementation:
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/js/native-interactions.js`
- Affected pages:
  - Fabric Guide only
- Exact files involved:
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/js/native-interactions.js`
  - `wordpress/flatsome-child/assets/css/arden.css`
- WordPress Draft IDs:
  - 100
- Regression risk:
  - Medium. This is localized but easy to break if the DOM contract is changed without matching the script.

Why this is grouped together:
- The failure is not visual only; it is a DOM-to-JS contract problem.
- The script expects a specific DOM structure that the imported WordPress markup does not currently expose.

### Group 5 — Header/menu configuration and dropdown behavior

- REG IDs: REG-006
- React source:
  - `src/components/layout/Header.tsx`
- WordPress implementation:
  - `wordpress/tools/task08-configure-navigation.php`
  - WordPress menu hierarchy and Flatsome Header Builder state
  - `wordpress/flatsome-child/assets/css/arden.css` header rules
- Affected pages:
  - all pages that render the global Header
- Exact files involved:
  - `wordpress/tools/task08-configure-navigation.php`
  - `wordpress/flatsome-child/assets/css/arden.css`
  - WordPress menu configuration in the live site
- WordPress Draft IDs:
  - N/A for the menu itself; page route context only
- Regression risk:
  - High. Global navigation is central to the site and can affect all pages if broken.

Why this is grouped together:
- This defect is caused by the actual WordPress menu hierarchy and its generated desktop dropdown state, not by a page content issue.

### Group 6 — Route and fragment mapping drift

- REG IDs: REG-007
- React source:
  - `src/App.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
  - `wordpress/audit/SITE_ROUTE_MAPPING.md`
- WordPress implementation:
  - footer and imported pages containing stale anchors and legacy paths
  - `wordpress/audit/task08_5-link-crawl.json`
- Affected pages:
  - Home, Footer, service pages, policy page, page-wide CTA blocks
- Exact files involved:
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - `wordpress/import/pages/*.txt` with stale route targets
  - `wordpress/audit/SITE_ROUTE_MAPPING.md`
- WordPress Draft IDs:
  - 81, 82, 83, 84, 85, 86, 99, and the shared Footer block content
- Regression risk:
  - Medium. Broken links are not fatal, but they degrade navigation and look like a route regression.

## B. Safe fix order and dependency logic

The safe dependency order is:

1. Shared/global CSS and design-system fixes
2. Typography/design-token corrections
3. T-shirt and Policies synchronization
4. Fabric Guide interaction repair
5. Header/menu dropdown repair
6. CTA route cleanup
7. P2/P3 follow-up review

Why this order is safe:

- Design-system and typography issues are global and can distort the appearance of later page fixes; they should be stabilized first.
- T-shirt and Policies are page-specific but they also require correct React-to-WordPress content synchronization; they should be repaired after the shared design layer is stable.
- Fabric Guide JS is dependent on the actual DOM structure and the page-level layout state; it should be fixed after the shared layout is stable and the page source is synchronized.
- Header dropdown is a global navigation issue and should happen after the site-level styling and route network are stable; it affects all routes.
- CTA routes are at the end because they are a verification and cleanup step relative to the route map and actual page existence.

This order prevents false confidence: if global typography or grid styles are wrong, then page-level repairs can appear to work while still failing the visual acceptance matrix.

## C. REG-001 grid/columns: exact CSS/Flatsome conflict

The root issue is a mismatch between:

- generated Flatsome markup (`section`, `row`, `col`), and
- the generic Arden CSS helper layer in `wordpress/flatsome-child/assets/css/arden.css`.

The main conflict patterns are:

1. Generic section and container width rules
   - `.arden-section > .section-content > .row, .arden-container { width: min(calc(100% - 32px), var(--arden-container)); max-width: var(--arden-container); margin-inline: auto; }`
   - This applies a rigid global width constraint on imported rows and containers. It can force a narrower area than the React layout expects, causing layout compression.

2. Grid rules that conflict with the actual Flatsome column model
   - `.arden-content-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }`
   - `.arden-blog-grid, .arden-portfolio-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--arden-space-lg); }`
   - These assumptions are too global for a site that is mostly built from Flatsome Row/Column wrappers.

3. Column interior styling overrides
   - `.arden-services .col > .col-inner, .arden-products .col > .col-inner { display: flex; height: 100%; flex-direction: column; }`
   - `.arden-services .col > .col-inner > .ux-text, .arden-products .col > .col-inner > .ux-text { flex: 1; }`
   - These styles override the normal spacing and height assumptions of the actual generated column wrappers and can create irregular blank areas in multi-column stacks.

4. Card and masonry-like layout rules that are not page-specific
   - `.col.arden-card { overflow: visible; border: 0; ... }`
   - `.col.arden-card > .col-inner { height: 100%; overflow: hidden; padding: 24px; ... }`
   - This broad selector can distort the visual rhythm of imported pages that use repeated card/grid patterns.

5. Responsive media-query behavior
   - The media rules change grid layouts at tablet/mobile breakpoints, but they do so in a generic way rather than with a page-by-page React matching pass.
   - This explains why certain pages look closest to React at some widths but fail badly at others.

### Fix classification

- GLOBAL:
  - Shared section/container width rules
  - general grid/layout helper rules in `arden.css`
  - global media-query grid rules
- SHARED COMPONENT:
  - `.arden-services .col > .col-inner` pattern
  - `.arden-card` and `.arden-card__body` sizing logic
  - Reusable CTA/card blocks in the shared child theme
- PAGE-SCOPED:
  - imported page-specific layout fixes for About, Services, Manufacturing, Fabric Guide, and service details when the section arrangement differs from React

Do not propose broad CSS overrides unless the imported page structure itself is out of alignment with the React source. The safe fix is to correct generated Flatsome structures and limit the CSS scope to the affected shared components before adding page-specific overrides.

## D. REG-002 typography / button / card: why WordPress renders 600 instead of 900

The root issue is selector specificity and an inherited global typography reset.

Evidence from `wordpress/flatsome-child/assets/css/arden.css`:

- `.arden-site :where(h1, h2, h3, h4, h5, h6) { font-family: var(--arden-font-heading) !important; letter-spacing: -.02em; }`
- `.arden-page h1, .arden-page h2, .arden-page h3, .arden-page h4 { color: var(--arden-text); font-family: var(--arden-font-heading) !important; letter-spacing: -.02em; }`
- `.arden-page h1 { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.15; }`
- `.arden-page h2 { font-size: clamp(1.65rem, 3vw, 2.25rem); line-height: 1.2; }`
- `.arden-page h3 { font-size: clamp(.95rem, 1.5vw, 1.15rem); line-height: 1.35; }`

But the React source expects more exact design tokens and stronger typography weights, especially for headings at 900 weight.

What is happening:

- The WordPress CSS sets a strong global heading family and letter spacing, but it does not always enforce the same weight or size as the React source.
- The same global selectors affect all imported headings, and the resulting compute is often near 600 instead of 900 because the base theme or parent container is still setting a lighter button/heading default.
- The child theme is trying to override only a few selectors, but not all the inherited theme weight layers.

Shared design differences to fix in the design system layer:

- font size
- line-height
- letter-spacing
- heading weight
- button radius and min-height
- card padding
- card border radius
- card hover/border color

The correct fix direction is to normalize the design tokens in the shared child-theme CSS rather than applying page-specific patches. Specifically:

- define the global heading weight once in the theme override layer,
- ensure button styling comes from a single design-token set,
- align card components to the same border radius and padding logic,
- preserve the React heading family/weight ratios only where the imported generated markup allows exact control.

## E. REG-003 T-shirt: exact React → WordPress delta

### React source of truth
- `src/pages/TShirtServicePage.tsx`
- `src/data/siteData.ts`

### Current WordPress status
- `wordpress/import/pages/tshirt-service-flatsome.txt`
- WordPress Draft ID 83

### Delta analysis

Missing/incorrect items compared to React:

- missing sections
  - React includes Fabric Options, Size Chart, Print & Embroidery Techniques, Production Process, CTA.
  - The imported page is reduced and does not preserve the full section cadence.
- missing content
  - fabric cards, recommended GSM descriptions, and fabric selection logic are incomplete in the generated draft
- wrong order
  - section order is not matched to the React ordering
- missing cards
  - fabric selection cards are represented as simplified tabs instead of the React card grid
- missing images
  - the React page uses product/technique visuals and layout blocks not fully mapped in the draft
- missing CTA
  - the CTA is present but the full landing flow around it is partial
- missing tabs/selectors
  - the fabric selector and GSM selector are simplified and do not match the React interactive state model
- wrong structure
  - the imported page is a reduced pilot-derived structure rather than the full source component structure

### Synchronization state
- React source: authoritative and complete
- WordPress import source: stale and partial
- WordPress Draft: stale because it was generated from that partial import

Therefore the correct safe fix is: synchronize the WordPress source file from the React source, then sync the Draft from that source, rather than editing Draft content alone.

## F. REG-004 Policies: exact React → WordPress delta

### React source of truth
- `src/pages/PoliciesPage.tsx`
- `src/components/sections/PolicySection.tsx`
- `src/data/siteData.ts`

### Current WordPress status
- `wordpress/import/pages/policies-flatsome.txt`
- WordPress Draft ID 99

### Delta analysis

Missing/incorrect items compared to React:

- missing content
  - React includes richer policy content, deeper legal language, and the full section body for each policy tab
- missing tabs
  - the imported version does not fully preserve the same tab order and state set
- missing controls
  - the generated page uses a reduced tab group and does not match the shared React interface and expected controls
- missing panels
  - policy panels are abbreviated; the WordPress version does not perfectly match the structure and text required by the section component
- incorrect state/interaction
  - the active tab state is present, but it is not synchronized to the full React content and anchor IDs

### Synchronization state
- React source: current and authoritative
- WordPress import source: stale and incomplete
- WordPress Draft: stale and generated from the partial import

The fix must not be a generic tab redesign. It must rebuild or re-sync the policy source from the actual React section component and preserve the exact IDs used by the source, especially the anchor targets used by the footer policy links.

## G. REG-005 Fabric Guide interaction: end-to-end trace

### React behavior
- `src/pages/FabricGuidePage.tsx` keeps local state for:
  - `selectedCategory`
  - `searchQuery`
- It computes `filteredFabrics` against the fabric metadata and filters cards in-place.
- It exposes a searchable and category-filterable array of fabric cards and empty state behavior.

### WordPress DOM
- The imported WordPress content in `wordpress/import/pages/fabric-guide-flatsome.txt` does not fully match the React card/filter structure.
- The actual generated WordPress DOM is different from the expected React contract and does not expose the same DOM hooks used by the interaction script.

### JavaScript behavior
- `wordpress/flatsome-child/assets/js/native-interactions.js` attempts to find `#fabric-grid`, then looks for text inputs and a limited set of button-like elements, then applies filtering logic.
- The script is too generic and is driven by selectors that do not reliably match the imported Flatsome DOM.
- It also assumes a pattern of filter buttons and card containers that the actual imported output does not provide.

### Failure reason
- The root cause is a DOM contract mismatch: the interaction script does not match the real WordPress markup generated from the import.
- The resulting `aria-pressed` and filtering state never actually attaches to the expected controls.

### Minimum safe fix
- Do not rewrite the interaction from scratch.
- Reconcile the imported Fabric Guide markup to the React state model.
- Then bind the existing script to the real cards and active-category controls with the expected ARIA state.
- Maintain the existing empty-state behavior and accessibility expectations.

## H. REG-006 Services dropdown: exact cause classification

This issue is not a page content bug. It is a global menu/Flatsome integration issue.

The likely root cause chain is:

- menu hierarchy exists in the WordPress menu config (`wordpress/tools/task08-configure-navigation.php`),
- the configured menu hierarchy includes a parent item named `Dịch vụ` and eight child items,
- but the desktop dropdown does not open because the required desktop header markup and hover/focus state are not being produced by the current Flatsome Header Builder configuration,
- the CSS layer in `wordpress/flatsome-child/assets/css/arden.css` is present, but it is not enough to create the expected dropdown behavior by itself.

### Exact failure categories

- menu hierarchy: yes, relevant
- Flatsome Header Builder: yes, likely primary driver
- CSS: contributing factor, but not sole root cause
- overflow: possible secondary factor, but not the main failure
- z-index: possible contributor if layering is wrong
- pointer-events: possible contributor if the dropdown area is not receiving pointer events
- hover/focus: yes, the dropdown requires a working hover/focus state
- JavaScript: not the primary root cause, but JS may be needed to satisfy the desktop dropdown state if the builder does not generate it

The correct fix is to keep the existing global WordPress menu and restore the working desktop dropdown state in the Header Builder/markup, not to build a second navigation implementation or duplicate the header menu in a custom runtime layer.

## I. REG-007 CTA routes: complete table

The correct source of truth is `wordpress/audit/SITE_ROUTE_MAPPING.md`.

| PAGE | CTA LABEL | CURRENT TARGET | EXPECTED TARGET | TARGET EXISTS | FRAGMENT EXISTS | FIX REQUIRED |
|---|---|---|---|---|---|---|
| Home | service CTA(s) | `/may-ao-thun/`, `/may-ao-so-mi/`, `/may-quan/` | `/dich-vu/may-ao-thun`, `/dich-vu/may-ao-so-mi`, `/dich-vu/may-quan` | No for legacy paths | N/A | Yes |
| Footer | may áo thun | `/may-ao-thun/` | `/dich-vu/may-ao-thun` | No | N/A | Yes |
| Footer | may áo sơ mi | `/may-ao-so-mi/` | `/dich-vu/may-ao-so-mi` | No | N/A | Yes |
| Footer | may quần | `/may-quan/` | `/dich-vu/may-quan` | No | N/A | Yes |
| Footer | may áo khoác | `/dich-vu/may-ao-khoac` in some cases; may still vary | `/dich-vu/may-ao-khoac` | Yes | N/A | Conditional |
| Policies footer links | `#chinh-sach-bao-mat` etc. | `#...` fragments at policy page | The page contains matching policy section IDs in the React source | Partially yes only if synced | Must verify exact IDs | Yes |
| Shared CTA | `/dich-vu#so-mi` | invalid fragment target | `/dich-vu/may-ao-so-mi` or matching section ID on page | No | No | Yes |
| Shared CTA | `/dich-vu#quan` | invalid fragment target | `/dich-vu/may-quan` or matching section ID on page | No | No | Yes |
| Shared CTA | `/dich-vu#ao-khoac` | invalid fragment target | `/dich-vu/may-ao-khoac` or matching section ID on page | No | No | Yes |
| Shared CTA | `/dich-vu#local-brand` | invalid fragment target | `/dich-vu/may-ao-thun` or a legitimate section ID if it exists | No | No | Yes |
| Case-study CTA | `/du-an/bst-ao-thun-local-brand` | invalid/nonexistent project record | only if an actual project record exists | No | N/A | Yes, after project existence check |

No arbitrary redirects should be introduced. Use the canonical route map only.

## J. P2 and P3 classification

### P2 review

- REG-008 — Dynamic pages cannot visually match populated React samples
  - Classification: B — separate fix required
  - Reason: requires real production content and is not a direct result of P1 root-cause fixes.

- REG-009 — CF7 presentation differs from React form controls
  - Classification: B — separate fix required
  - Reason: global form styling is a separate design-system issue that should be handled after the layout/typography root cause is corrected.

- REG-010 — 404 visual typography mismatch
  - Classification: A — expected to disappear from the P1 root-cause fix
  - Reason: it is a global typography issue and likely resolves once the common heading styling is normalized.

- REG-011 — Rank Math fields are unavailable locally
  - Classification: B — separate fix required
  - Reason: this is a dependency/configuration issue, not a runtime bug in the theme or page structure.

- REG-012 — Production data unresolved
  - Classification: C — acceptable minor difference at this phase
  - Reason: the site is intentionally Draft-only and the production values are explicitly outside the local WordPress implementation scope.

### P3 review

- REG-013 — Quote selector uses native checkbox semantics rather than aria-pressed
  - Classification: C — acceptable minor difference
  - Reason: progressive enhancement only; not a meaningful P1 or P2 blocker.

- REG-014 — expected 404 document logs browser resource error
  - Classification: C — acceptable minor difference
  - Reason: this is expected browser behavior for a valid 404 document.

## K. WordPress synchronization safety requirements

For content defects, the mandatory order is:

1. React source
2. WordPress import/source file
3. WordPress Draft database

Rule:
- Do not patch only the Draft database.
- Do not leave the import file stale.
- Do not patch an imported page in isolation if the source component is still authoritative and complete.

This safety rule is critical for:
- T-shirt service
- Policies
- any footer CTA or route mapping that is stale in imported blocks

## L. Implementation phases

### 08.6B-1 — Global design-system/layout repair
- Files:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - page imports for About, Services, Manufacturing, Fabric Guide
- Draft IDs:
  - 81, 82, 87, 100
- Changes:
  - adjust section/container/row/column width and gutter logic
  - reduce generic layout overrides that clash with Flatsome
  - correct affected responsive stacking behavior
- Regression risk:
  - High across multiple static pages
- Focused pages:
  - About, Services, Manufacturing, Fabric Guide
- Breakpoints:
  - 1440, 1024, 768, 390
- Acceptance gate:
  - no new P0 or P1 defects
  - no horizontal overflow
  - no section collapse on the targeted pages
- Rollback boundary:
  - revert the child-theme CSS layer only; do not touch imported page content yet

### 08.6B-2 — Typography/design-tokens normalization
- Files:
  - `wordpress/flatsome-child/assets/css/arden.css`
- Draft IDs:
  - all static page drafts
- Changes:
  - normalize heading weights, sizes, spacing, button radii, and shared card styling
- Regression risk:
  - High, because all pages inherit typography
- Focused pages:
  - representative pages from the P1 report and 404
- Breakpoints:
  - 1440, 1024, 768, 390
- Acceptance gate:
  - headings compute near the React source weight and size values
  - no new design drift on CTA/button/card components
- Rollback boundary:
  - revert child-theme typography overrides before changing page content

### 08.6B-3 — T-Shirt and Policies source synchronization
- Files:
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - `wordpress/import/pages/policies-flatsome.txt`
  - corresponding Draft content for IDs 83 and 99
- Draft IDs:
  - 83, 99
- Changes:
  - restore full React section ordering and copy from the source components
  - match policy tab IDs, content ordering, and controls to the React source
- Regression risk:
  - Medium
- Focused pages:
  - T-shirt service and Policies
- Breakpoints:
  - 1440, 1024, 768, 390
- Acceptance gate:
  - no missing sections, no missing tabs, no missing CTA, no incorrect anchor targets
- Rollback boundary:
  - revert only the page import and the page Draft for those two pages

### 08.6B-4 — Fabric Guide interaction repair
- Files:
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/js/native-interactions.js`
- Draft IDs:
  - 100
- Changes:
  - fix the DOM contract and bind the filter event to the actual imported markup
  - preserve accessibility state and empty-state behavior
- Regression risk:
  - Medium
- Focused pages:
  - Fabric Guide
- Breakpoints:
  - 1440, 1024, 768, 390
- Acceptance gate:
  - search filters cards
  - category buttons set `aria-pressed`
  - no console error on input/filter interaction
- Rollback boundary:
  - revert only the Fabric Guide import and script changes

### 08.6B-5 — Header dropdown repair
- Files:
  - `wordpress/tools/task08-configure-navigation.php`
  - `wordpress/flatsome-child/assets/css/arden.css`
  - live Header Builder menu in WordPress if the site is running
- Draft IDs:
  - N/A, but global navigation affects all pages
- Changes:
  - correct the service child menu hierarchy
  - restore hover/focus state and desktop dropdown visibility without creating a second nav implementation
- Regression risk:
  - High because it affects the whole site
- Focused pages:
  - Home and route check across static pages
- Breakpoints:
  - 1440 and 1024 for desktop, 768 and 390 for mobile sanity
- Acceptance gate:
  - desktop service dropdown opens and shows the eight child destinations
  - mobile menu remains unaffected
- Rollback boundary:
  - revert menu config and the CSS header layer only

### 08.6B-6 — CTA route validation and cleanup
- Files:
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - affected imported page files sharing stale links
  - `wordpress/audit/SITE_ROUTE_MAPPING.md`
- Draft IDs:
  - 81, 82, 83, 84, 85, 86, 99, and Footer block content
- Changes:
  - update to canonical route paths only
  - remove invalid fragments and stale legacy service URLs
- Regression risk:
  - Medium
- Focused pages:
  - Home, Footer, policy links, service destinations
- Breakpoints:
  - all breakpoints, but mainly route existence checks
- Acceptance gate:
  - all CTA targets resolve to valid routes
  - no broken fragment references
- Rollback boundary:
  - revert the import file or footer block only

## M. Required testing rule after every phase

After every implementation phase later, run focused regression before moving on to the next phase.

A phase fails if it introduces any of the following:

- new P0
- new P1
- content drift
- structure drift
- horizontal overflow
- console error
- PHP/runtime error

This must be treated as a stop/go gate, not a suggestion.

## N. Final decision

NOT SAFE TO EXECUTE TASK 08.6B

## SAFETY RE-EVALUATION — TASK 08.6A.3

The remaining user decisions are applied to the execution plan without changing runtime files, WordPress database content, publication state, indexing, ZIP artifacts, or theme version.

- Local Brand CTA target is approved as `/dich-vu/#local-brand`. Task 08.6B must add a Services-page target element with exactly `id="local-brand"`, without changing the CTA label or surrounding content.
- Unresolved case-study CTA targets are approved to use `/du-an/` until a real Project record exists. No Project slug will be invented and no fake production Project content will be created.
- React Policies content and structure are authoritative for conversion. The page is marked `LEGAL_REVIEW_REQUIRED`; legal text must not be rewritten or removed, the existing content must remain, and the Policies page must not be published automatically.

There are no remaining information or user-decision blockers. Task 08.6B may proceed within the existing phase order and regression gates. These decisions do not authorize publishing, indexing, database mutation outside the approved implementation scope, or automatic legal approval.

SAFE TO EXECUTE TASK 08.6B

## SAFETY RE-EVALUATION — TASK 08.6A.2

Authenticated local WordPress inspection was completed read-only using the shared browser session. Drafts 83, 99, and 100, menu 4, Header Builder dropdown settings, generated desktop menu DOM, Fabric Guide DOM, and relevant computed styles were inspected without saving or submitting any changes.

The WordPress-runtime information blockers are resolved:

- Draft 83 stores the six-section pilot import and renders five sections; it is stale relative to the React T-shirt card/state contract.
- Draft 99 stores the five-tab abbreviated import and renders four sections with none of the five React policy IDs; it is stale relative to React and cannot satisfy policy fragments.
- Draft 100 renders no `#fabric-grid`, `.arden-fabric-card`, or `.arden-fabric-filter`; the existing interaction script exits at its missing root selector.
- Menu 4 has parent item 120 and exactly eight children with the canonical URLs.
- Header Builder dropdown settings are active, and at 1440px the generated Services dropdown becomes visible on hover with eight links, correct pointer events, overflow, and z-index.
- Draft page slugs for the four canonical service routes and Policies/Fabric Guide were confirmed.
- The Project CPT contains no record for `bst-ao-thun-local-brand`.
- Computed WordPress headings at 1440px are weight 600, while the React source expects 900 for the sampled H1/H2/H3 heading utility classes.

Only these user/business decision blockers remain:

1. Approve the destination for the `Gia Công Local Brand` CTA because no authoritative route exists in React or `SITE_ROUTE_MAPPING.md`.
2. Approve a replacement destination for `/du-an/bst-ao-thun-local-brand` because no matching Project CPT exists.
3. Approve the React Policies content and structure for legal synchronization into Draft 99.

No runtime-information blocker remains. Execution must remain paused until the three decisions above are supplied.

NOT SAFE TO EXECUTE TASK 08.6B

## SAFETY RE-EVALUATION

The repository-resolvable portions of the original safety block have been investigated without mutation:

- React source contracts for layout, typography, T-shirt, Policies, Fabric Guide, Header, Footer, and routing are identified.
- The CSS selector-impact matrix is documented with global, shared-component, and page-scoped boundaries.
- The T-shirt and Policies three-way evidence tables identify React as authoritative and the import files as stale/incomplete for behavioral parity.
- The Fabric Guide expected DOM/JS contract and minimum repair are identified.
- The configured Services parent and eight child menu intent are confirmed from the local PHP configuration and Header Builder documentation.
- Canonical targets for the four service routes and policy IDs are confirmed from React and `SITE_ROUTE_MAPPING.md`.

The following blockers remain unresolved:

1. **B-001 / REG-001, REG-002:** authenticated WordPress computed-style and selector-to-generated-DOM inspection is required before changing global CSS.
2. **B-002 / REG-003:** Draft ID 83 content and provenance must be read authenticated to reconcile the six-section import with the historically observed four-section rendered result.
3. **B-003 / REG-004, REG-007:** Draft ID 99 rendered tab controls and exact policy anchor IDs must be read authenticated before synchronization.
4. **B-004 / REG-005:** authenticated Draft 100 DOM must confirm the current rendered selectors before binding the interaction contract.
5. **B-005 / REG-006:** authenticated menu 4, Header Builder settings, and generated desktop dropdown DOM must be inspected to distinguish configuration from CSS/markup behavior.
6. **B-006 / REG-007:** the Local Brand CTA needs an owner-approved destination, and the case-study target needs a confirmed Project CPT record or owner-approved replacement.
7. **B-007:** authenticated read-only WordPress access is unavailable in this session; public Draft previews return 404, REST requests return 401, and admin redirects to login.

Required before execution:

- provide an authenticated read-only browser/session path without sending credentials in chat;
- provide the Local Brand CTA decision;
- confirm the case-study Project record or approve a replacement;
- obtain legal/content approval for any Policies synchronization.

NOT SAFE TO EXECUTE TASK 08.6B

Exact missing information required before execution:
- a confirmed, source-anchored React-to-WordPress mapping for T-shirt service and Policies that includes all missing sections, IDs, and controls
- a verified page-by-page list of the exact DOM differences for About, Services, Manufacturing, and Fabric Guide under the current imported WordPress markup
- a live Header Builder menu state confirmation for the desktop dropdown behavior
- a final route audit confirming all CTA paths and fragments against `SITE_ROUTE_MAPPING.md`
- a signed-off execution scope that keeps the fix sequence to design-system first, then content synchronization, then interaction, then navigation, then link repair

## SAFETY RE-EVALUATION — TASK 08.6A.3

The three user decisions are now applied without changing runtime files, WordPress database content, publication state, indexing, ZIP artifacts, or theme version.

- Local Brand CTA target: `/dich-vu/#local-brand`. During Task 08.6B, the Services page must contain a target element with exactly `id="local-brand"`; the CTA label and surrounding content remain unchanged.
- Missing case-study target: `/du-an/` until a real Project record exists. No Project slug or fake production content will be invented.
- Policies: the current React content and structure are authoritative for conversion, with status `LEGAL_REVIEW_REQUIRED`. Legal text must not be rewritten or removed, existing content must remain, and the Policies page must not be published automatically.

No information or user-decision blockers remain. Task 08.6B may proceed within the documented phase order and regression gates; this does not authorize publication, indexing, or unapproved database mutation.

SAFE TO EXECUTE TASK 08.6B

NOT SAFE TO EXECUTE TASK 08.6B

## FINAL SAFETY RE-EVALUATION — TASK 08.6A.3

The approved user decisions remove the remaining decision blockers:

- Local Brand CTA: `/dich-vu/#local-brand`; Task 08.6B must provide the Services-page target `id="local-brand"` without changing the CTA label or surrounding content.
- Case-study fallback: `/du-an/` until a real Project record exists; no fake Project content or invented slug.
- Policies: React content and structure are authoritative for conversion, with `LEGAL_REVIEW_REQUIRED`; do not rewrite, remove, or auto-publish the page.

No information or user-decision blockers remain. The documented implementation phases and regression gates still apply, and this authorization does not permit publishing, indexing, ZIP creation, theme-version changes, or unapproved database mutation.

SAFE TO EXECUTE TASK 08.6B
