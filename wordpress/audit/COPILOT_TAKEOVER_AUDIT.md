# Copilot takeover audit

## Repository state understood

- React is the source of truth for content, structure, visual design, typography, responsive behavior, and interactions.
- The WordPress/Flatsome child site is a staged conversion and is not a second design source; it is a generated runtime implementation that must match the React screens and route contracts.
- Current documented state from the Task 08/08.5 audit:
  - WordPress conversion already exists under the Flatsome child theme.
  - 98.4% native UX Builder editability remains at the architecture level.
  - 0 P0, 7 P1, 5 P2, 2 P3 defects remain after the failed acceptance pass.
  - Runtime safety passed, but visual and interaction fidelity still fail on the P1 issues.
  - The current site remains Draft-only and indexing is off.
- The root problem is not a single broken page; several of the defects are caused by global theme CSS and stale imported content that are shared across pages.
- No verified Task 08.6 plan file or execution packet was found in the repo during this audit, so the plan cannot be considered safe or complete.

## React source locations

These are the source pages and shared UI modules that define the expected behavior:

- About: `src/pages/AboutPage.tsx`
- Services: `src/pages/ServicesPage.tsx`
- T-shirt service: `src/pages/TShirtServicePage.tsx`
- Shirt service: `src/pages/ShirtServicePage.tsx`
- Jacket service: `src/pages/JacketServicePage.tsx`
- Pants service: `src/pages/PantsServicePage.tsx`
- Manufacturing: `src/pages/ManufacturingPage.tsx`
- Fabric guide: `src/pages/FabricGuidePage.tsx`
- Policies: `src/pages/PoliciesPage.tsx`
- Header: `src/components/layout/Header.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Shared routing: `src/App.tsx`
- Shared policy tab logic: `src/components/sections/PolicySection.tsx`
- Shared route map: `wordpress/audit/SITE_ROUTE_MAPPING.md`

## WordPress implementation locations

These are the runtime implementations and imported draft sources that currently drive the site:

- Global child-theme styling: `wordpress/flatsome-child/assets/css/arden.css`
- Interaction hooks: `wordpress/flatsome-child/assets/js/native-interactions.js`
- Header/menu configuration script: `wordpress/tools/task08-configure-navigation.php`
- Footer block source: `wordpress/import/ux-blocks/arden-footer.txt`
- Page import files:
  - `wordpress/import/pages/about-flatsome.txt`
  - `wordpress/import/pages/services-flatsome.txt`
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/import/pages/policies-flatsome.txt`
  - `wordpress/import/pages/manufacturing-flatsome.txt`
- Task audit and defect records:
  - `wordpress/audit/FULL_REGRESSION_DEFECTS.md`
  - `wordpress/audit/FULL_TEST_MATRIX.md`
  - `wordpress/audit/TASK08_5_REPORT.md`
  - `wordpress/audit/TASK08_REPORT.md`
  - `wordpress/audit/TASK07_REPORT.md`
  - `wordpress/audit/TASK06C_REPORT.md`
  - `wordpress/audit/UX_BUILDER_EDITABILITY.md`

## Defect-by-defect audit

### REG-001 — Grid/column layouts differ or break on multiple pages

- React source of truth:
  - `src/pages/AboutPage.tsx`
  - `src/pages/ServicesPage.tsx`
  - `src/pages/ManufacturingPage.tsx`
  - `src/pages/FabricGuidePage.tsx`
  - `src/pages/ShirtServicePage.tsx`
  - `src/pages/JacketServicePage.tsx`
  - `src/pages/PantsServicePage.tsx`
- WordPress actual behavior:
  - `wordpress/import/pages/about-flatsome.txt`
  - `wordpress/import/pages/services-flatsome.txt`
  - `wordpress/import/pages/manufacturing-flatsome.txt`
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/css/arden.css`
- Likely root cause:
  - The child theme CSS sets broad section, row, column, and card defaults that are not scoped tightly enough to the React DOM structure.
  - Generated Flatsome rows/columns inherit generic spacing and sizing that do not match the React grid ratios and card assumptions.
  - The imported draft content reproduces the section order but not the exact React grouping and spacing logic, so different pages collapse into stacked or oversized columns.
- Files expected to change:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - the affected page import files for About, Services, Manufacturing, Fabric Guide, and service landing pages
- Cross-page impact:
  - High. This is a global layout defect, and it affects several templates beyond the named pages.
- Task 08.6 safety:
  - Not safe as a broad CSS-only sweep without per-page visual checks. This issue is systemic and must be fixed page-by-page against the React source.

### REG-002 — Typography differs from React

- React source of truth:
  - `src/pages/AboutPage.tsx`
  - `src/pages/ServicesPage.tsx`
  - `src/pages/ContactPage.tsx`
  - `src/pages/QuotePage.tsx`
  - `src/pages/FAQPage.tsx`
  - `src/pages/CareersPage.tsx`
  - other static pages using `font-black`, `tracking-tight`, and heading utilities
- WordPress actual behavior:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - Flatsome base theme heading rules in the installed WordPress theme stack
- Likely root cause:
  - Global heading selectors in the child theme override the React utility hierarchy and the browser computed styles.
  - The current CSS layer is forcing general `h1/h2/h3` weights and sizes that are visually different from the React source and from the design tokens used across the app.
  - This is the classic cascade issue: theme-style selectors are outranking specific per-element utility classes in the generated Flatsome markup.
- Files expected to change:
  - `wordpress/flatsome-child/assets/css/arden.css`
  - any child-theme typography overrides that remain in the Flatsome override layer
- Cross-page impact:
  - Very high. This affects most converted static pages and many dynamic templates because it is a global typography layer.
- Task 08.6 safety:
  - Not safe as an uncontrolled global reset. It must be scoped, measured, and revalidated against computed-style targets from the React pages.

### REG-003 — T-shirt Service is missing React content and structure

- React source of truth:
  - `src/pages/TShirtServicePage.tsx`
  - `src/data/siteData.ts` for size charts, fabrics, and process steps
- WordPress actual behavior:
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - page draft for service landing under the WordPress page tree
- Likely root cause:
  - The earlier pilot draft for this page remained partially converted and never fully propagated to the completed Task 06C source structure.
  - The imported markup is a reduced representation and does not include the full React section stack, headings, controls, and content blocks required by the source page.
- Files expected to change:
  - `wordpress/import/pages/tshirt-service-flatsome.txt`
  - the connected WordPress page draft content for the T-shirt service route
  - possible child-theme CSS if the missing sections require specific classes or spacing
- Cross-page impact:
  - Low in terms of pages, but medium in terms of product route integrity; it is a single service landing page, but its missing structure is visible and affects route fidelity.
- Task 08.6 safety:
  - This is a page-scoped repair and is lower-risk than the global CSS issues, but it still must match the complete React source rather than an earlier draft.

### REG-004 — Policies page is missing content and controls

- React source of truth:
  - `src/pages/PoliciesPage.tsx`
  - `src/components/sections/PolicySection.tsx`
  - `src/data/siteData.ts` for the policy content and section IDs
- WordPress actual behavior:
  - `wordpress/import/pages/policies-flatsome.txt`
  - `wordpress/audit/PAGES_CONTENT_DIFF.md`
- Likely root cause:
  - The native tab reconstruction only includes a partial policy summary and does not reproduce the full React policy content, section order, and control set.
  - The WordPress version lacks the exact section IDs and route-linked anchors used by the React implementation, which prevents expected anchors like `#chinh-sach-bao-mat` and related CTA behavior from working correctly.
- Files expected to change:
  - `wordpress/import/pages/policies-flatsome.txt`
  - `wordpress/flatsome-child/assets/css/arden.css` if the tab styling must be aligned with React behavior
- Cross-page impact:
  - Medium. It affects the policy route itself and the footer policy links as anchor-based destinations.
- Task 08.6 safety:
  - This page can be fixed relatively safely, but it must be done with the exact React tab IDs and content, not a generic tab layout.

### REG-005 — Fabric guide search/filter does not work

- React source of truth:
  - `src/pages/FabricGuidePage.tsx`
- WordPress actual behavior:
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/js/native-interactions.js`
  - `wordpress/flatsome-child/assets/css/arden.css`
- Likely root cause:
  - The imported Flatsome markup does not match the React DOM contract that the page logic expects.
  - The interaction script is generic, looks for the wrong classes and incorrect selectors, and never attaches to the actual imported filter controls.
  - The page has a search input and category controls, but the JavaScript is not wiring the actual exported markup into the expected `aria-pressed` and count/state behavior.
- Files expected to change:
  - `wordpress/flatsome-child/assets/js/native-interactions.js`
  - `wordpress/import/pages/fabric-guide-flatsome.txt`
  - `wordpress/flatsome-child/assets/css/arden.css`
- Cross-page impact:
  - Low to medium, but it is a page-specific interaction and a strong indicator that the generic JS layer is mismatched across other imported pages.
- Task 08.6 safety:
  - Safe only if the real imported Fabric Guide DOM is targeted and not rebuilt from scratch. The existing generic JS is the hazard.

### REG-006 — Desktop Services dropdown does not open

- React source of truth:
  - `src/components/layout/Header.tsx`
- WordPress actual behavior:
  - `wordpress/tools/task08-configure-navigation.php`
  - child theme header CSS in `wordpress/flatsome-child/assets/css/arden.css`
  - the Flatsome header builder/menu configuration in the live WordPress install
- Likely root cause:
  - The menu hierarchy is present in the WordPress menu config, but the desktop dropdown state is not being generated correctly in the Flatsome header configuration.
  - The menu items exist, but the hover or disclosure behavior is missing because the CSS/markup hooks for `menu-item-has-children` and the dropdown container are not matching the expected state.
  - The theme-level header styling contains a dropdown class, but the desktop menu does not actually open in practice due to missing JavaScript or builder state.
- Files expected to change:
  - `wordpress/tools/task08-configure-navigation.php`
  - `wordpress/flatsome-child/assets/css/arden.css`
  - the live Header Builder menu configuration in WordPress admin, if the project is running in site context
- Cross-page impact:
  - High. The header is global and affects navigation across the entire site.
- Task 08.6 safety:
  - Not safe to treat as a single CSS tweak. Header dropdown behavior must be fixed at the WordPress menu/Flatsome integration layer and then rechecked against the React menu contract.

### REG-007 — Internal CTA destinations include invalid routes/fragments

- React source of truth:
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
  - `src/App.tsx`
  - `wordpress/audit/SITE_ROUTE_MAPPING.md`
- WordPress actual behavior:
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - selected import pages with stale links and fragment references
  - the crawl results in `wordpress/audit/task08_5-link-crawl.json`
- Likely root cause:
  - Some footer and CTA links were imported from an old route structure and never reconciled to the current canonical paths.
  - The site still contains stale paths like `/may-ao-thun/` and invalid fragments like `#so-mi`, `#quan`, `#ao-khoac`, `#local-brand` that do not map to the current React or WordPress route set.
  - The link crawl confirms a mismatch between the intended routing and the actual page destination set.
- Files expected to change:
  - `wordpress/import/ux-blocks/arden-footer.txt`
  - any stale page import that still carries legacy service URLs
  - the specific CTA blocks used in the home/footer link set
- Cross-page impact:
  - High. Footer and shared CTA links are used across the site and can affect navigation quality even when page content is otherwise correct.
- Task 08.6 safety:
  - Needs route validation against `SITE_ROUTE_MAPPING.md` before implementation. This is not a content-only cleanup; it is a route correctness task.

## Files expected to change overall

The likely modification set for Task 08.6 is not limited to one page. It spans the global styling and interaction layer plus the stale content blocks:

- `wordpress/flatsome-child/assets/css/arden.css`
- `wordpress/flatsome-child/assets/js/native-interactions.js`
- `wordpress/tools/task08-configure-navigation.php`
- `wordpress/import/ux-blocks/arden-footer.txt`
- `wordpress/import/pages/about-flatsome.txt`
- `wordpress/import/pages/services-flatsome.txt`
- `wordpress/import/pages/manufacturing-flatsome.txt`
- `wordpress/import/pages/fabric-guide-flatsome.txt`
- `wordpress/import/pages/policies-flatsome.txt`
- `wordpress/import/pages/tshirt-service-flatsome.txt`
- any WordPress page draft content tied to the service child pages and Route mapping updates

## Risks

- Global CSS is shared across multiple pages, so a typography or grid fix in one place can affect other page templates.
- The header and footer are global, so route and Menu fixes can change navigation across the entire site.
- The Fabric Guide logic is a generically coded JS hook that currently does not match the actual imported DOM; fixing it without reading the actual rendered structure is likely to produce a brittle patch.
- The T-shirt service and Policies issues are page-specific but must be matched to the full React source, not the earlier pilot or partial content.
- Because no official Task 08.6 plan artifact exists in the repo, any broad execution would effectively be exploratory rather than controlled and evidence-based.

## Is the existing Task 08.6 plan safe?

- Not currently.
- There is no Task 08.6 source file or execution plan in the repo, and the root causes are spread across global theme CSS, stale imported content, menu configuration, and route data.
- The known issues are not isolated; several are cross-page and cross-template. Safe execution requires a page-by-page validation plan against the React source for each defect before any patch is applied.
- Recommended status: do not execute Task 08.6 as-is. First, lock the exact React source references, patch only the stated WordPress runtime surfaces, and re-validate each defect class independently.

## Ready to execute Task 08.6?

No — not in the current state.

The project is understood, the defect roots are identified, and the likely file targets are mapped, but the plan is not yet safe to execute because:

1. The defect set is systemic across global CSS and navigation.
2. Several pages are stale imports rather than exact React matches.
3. There is no verified Task 08.6 implementation plan in the repo.
4. The current state requires controlled, defect-by-defect validation before any production-looking patching begins.

This takeover audit is complete and is intentionally limited to diagnosis only. Runtime files were not modified, no Drafts were published, no indexing was enabled, and no ZIP was created.
