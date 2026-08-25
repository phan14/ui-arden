# Task 04 conversion report

## Scope

- Total React page components: 21.
- Home: 1, maintained in its existing separate workstream.
- Remaining pages audited: 20.
- Static UX Builder targets: 10.
- Service landing targets: 4.
- Dynamic WordPress targets: 5.
- System target: NotFound/404, plus archive, single-post and search template coverage.

## Created

- Route mapping: `SITE_ROUTE_MAPPING.md`.
- Exact rendered source inventory: `PAGES_SOURCE_INVENTORY.md` and machine-readable JSON.
- Fourteen Flatsome-compatible page imports in `wordpress/import/pages/`.
- Content and structure diff reports plus machine-readable validation output.
- Project CPT data-model requirements without installing ACF.
- Dynamic templates: `archive-project.php`, `single-project.php`, `home.php`, `category.php`, `search.php`, `single.php`, `404.php`.
- Shared dynamic template helpers in `inc/template-tags.php`.
- React utility stylesheet for source-faithful imports: `assets/css/react-pages.css`.
- Read-only import and shortcode validators.

## Modified

- `src/pages/CareersPage.tsx`: supplied the already-existing `careersData` to the required `jobs` prop. This fixes the source route crash without changing content.
- Child theme `functions.php`, `inc/template-tags.php`, and `assets/css/arden.css`.

## Validation results

- React TypeScript: PASS (`tsc --noEmit`).
- Child-theme PHP syntax: PASS for every PHP file.
- Flatsome shortcode rendering: PASS for all 14 imports.
- Static/service import semantic text, H1/H2/H3 and CTA labels: PASS.
- Static/service import section, image and form counts: PASS.
- Git whitespace/error check: PASS (line-ending notices only).

## Readiness

Ready to import as individual drafts for visual validation:

- About, Careers, Manufacturing, Policies.
- Services, T-shirt, Shirt, Pants, Jacket.
- Fabric Guide and Techpack Guide.

Content/structure ready but not production-ready until form/interaction binding:

- Contact: form backend not selected.
- Quote: form backend not selected.
- FAQ and pages with React-only tab/accordion controls: static markup is exact, behavior needs a WordPress-native interaction pass.

Dynamic implementation present but requiring WordPress records before content equivalence can be tested:

- News/archive and Single Post.
- Category archive.
- Search results.
- Project CPT archive and Single Project.

## Remaining differences / blockers

- No WordPress pages were bulk-created and no content was written to the database, per task instruction.
- Dynamic production content is unavailable until Posts, categories and Project records are populated.
- Project-specific fields require approval of the documented data model; ACF was not installed.
- React event handlers are not executable inside UX Builder HTML. Exact interactive behavior needs WordPress-native JavaScript or suitable native UX elements after each page's draft validation.
- Global Header Builder and global Footer Block still require the separate visual alignment work already identified during Home comparison.
- Responsive visual comparison at 1440/1024/768/390 must be performed after each import exists as a WordPress draft; it cannot be truthfully completed before database import.

No final ZIP was created for Task 04.
