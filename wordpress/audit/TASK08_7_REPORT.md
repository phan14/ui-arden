# Task 08.7 full regression report

## Result

- Routes tested: **21/21**.
- Breakpoints: **1440, 1024, 768, 390**.
- Route/breakpoint combinations: **84**.
- Overall matrix PASS: **0**.
- Overall matrix FAIL: **84**.
- Technical runtime/responsive safety: **84/84 PASS**.
- Current defects: **P0 0, P1 4, P2 4, P3 1**.
- Theme version: **2.0.1**.

The overall cells fail because visual acceptance is materially below the React source across the site. This does not negate the improved runtime and interaction results.

## Visual status — FAIL

Fresh screenshots and computed styles were generated for every route. Broad drift remains in Header/Footer presentation, typography details, section rhythm, native controls, cards, buttons, and page density. Policies provides the clearest reproduction: the React and WordPress screenshots are materially different in the banner, tab/card system, CTA, and footer.

## Content status — FAIL

Exact/near-exact content passed for About, Services, Shirt, Jacket, Pants, Manufacturing, Fabric Guide, Techpack Guide, and Contact. It failed the strict source gate for Home, T-Shirt, FAQ, Quote, Careers, and Policies. Policies similarity is approximately `0.449`; Home is `0.948`.

Therefore the required statement `NO UNAPPROVED CONTENT DIFFERENCE` cannot be issued.

## Structure status — FAIL

Section counts are generally stable, but strict heading/card/control/image/form inventories still differ. Key 1440 examples:

- Home: H3 60/52, images 29/20, controls 34/44.
- T-Shirt: H3 19/14 and controls 6/2.
- FAQ: H3 11/5.
- Policies: H2 2/1 and controls 5/2.
- Quote: fields 9/16 due to the CF7/native selector architecture.

The required statement `NO UNAPPROVED STRUCTURE DIFFERENCE` cannot be issued.

## Interaction status — PASS

The interactions were rerun rather than inherited:

- desktop Services dropdown and sticky Header;
- mobile menu open/close;
- FAQ and Careers accordions;
- T-Shirt, FAQ, and Policies tabs;
- Fabric Guide search, category, combined filter, empty state, and `aria-pressed`;
- Quote checkbox selection;
- Header search;
- canonical Policies fragments and `/dich-vu/#local-brand`.

The current-selector focused suite passed **84/84**. The older Task 08.5 interaction script still reports Fabric/telephone failures because its selectors and wait interval predate the 08.6C DOM contract; the current focused/system tests prove the runtime behavior directly.

## Forms status — PASS WITH PRODUCTION RECIPIENT LOCK

Contact and Quote were independently rerun:

- empty submission shows invalid fields;
- invalid email is rejected;
- required name/telephone validation works;
- all controls are keyboard reachable;
- valid frontend submission reaches CF7 `sent` state;
- production mail remains disabled/locked, so no production email was sent.

Visual/form-structure parity remains P2.

## Dynamic WordPress templates — PASS FOR AVAILABLE DATA STATES

Eight states passed HTTP/H1/raw-shortcode/overflow/console checks:

- Posts archive, category, and single;
- Projects archive and Draft Project preview;
- search results and no-results;
- real HTTP 404.

Populated React visual parity remains blocked by absent approved production records; no fake content was created.

## UX Builder and admin — PASS

- Representative UX Builder launch: PASS.
- No section-level UX HTML blob was detected in imported pages.
- Pages, Posts, Projects, UX Blocks, Menus, Header/Footer Customizer, Media, CF7, editor, and UX Builder launch: **10/10 PASS**.
- Rank Math fields are unavailable because Rank Math is not installed.

## Runtime and responsive safety — PASS

All 84 combinations had the expected HTTP response, one H1, no raw shortcode, no React runtime, no broken image, no missing alt, no horizontal overflow, and no clipped controls. The intentional 404 main-document browser message is excluded from production-relevant runtime errors.

## Font/color status — FAIL

Weight 900 now computes correctly on the focused React-derived headings, but exact style comparison still finds material differences in heading line-height/letter-spacing/color, body font metrics/color, and button/card typography, background, and radius across the route set.

## Links and CTA status — PASS WITH DRAFT-AWARE ROUTING

- `/dich-vu/#local-brand` exists in the Services Draft.
- The approved missing-case-study fallback points to `/du-an/`.
- No legacy root service path, `.tsx`, `/src/`, Windows path, localhost asset dependency, or unresolved case-study slug exists in runtime import sources.
- Public pretty URLs for Draft Pages correctly remain unavailable until deliberate publication; target objects were validated through authenticated previews rather than treated as broken production routes.
- Intentional `#` UI controls/social placeholders are not counted as production CTAs.

## Media — PASS

All **20** migrated attachments (IDs 140–159) have local Media Library URLs, dimensions, and alt text. No migrated attachment URL uses Unsplash and no rendered image was broken.

## Accessibility — PARTIAL PASS

One-H1, image alt, keyboard interaction, tab/panel roles, accordion behavior, form labels/keyboard access, and reduced-motion support passed the automated checks. Exact heading hierarchy fails on the pages listed under structure regression, so accessibility cannot receive an unconditional site-wide PASS.

## SEO technical safety — STAGING SAFE / PRODUCTION NOT READY

- `blog_public=0`.
- All converted Pages remain Draft.
- No indexing or publication drift occurred.
- Rank Math is absent, so production metadata/schema ownership is not ready.
- No duplicate custom schema was introduced during this task.

## Static validation — PASS WITH RECORDED CONTENT DIFFS

- PHP lint: PASS.
- TypeScript `tsc --noEmit`: PASS.
- ESLint: N/A; no ESLint configuration/script exists.
- Shortcode validator: 14/14 imports PASS.
- Page import validator executed and honestly records the content/structure failures in its JSON/Markdown artifacts.
- `git diff --check`: PASS; only Windows LF/CRLF normalization notices were emitted.

## Performance sanity

All routes completed the screenshot/runtime crawl without production-relevant failed assets or browser exceptions. No formal Lighthouse/Core Web Vitals acceptance was requested or inferred from this local run.

## Deployment recommendation

Do not deploy, publish, enable indexing, or create the production ZIP. Resolve the four P1 groups—especially the site-wide visual layer and Policies source mismatch—then rerun this full matrix again from scratch.

NOT APPROVED FOR TASK 09
