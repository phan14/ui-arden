# Task 08.11 — final acceptance gate

Final result: **PASS**  
Validation date: 2026-08-26  
Branch: `copilot-task08`  
Baseline HEAD: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

This was a test-only run. No runtime or React repair was made after the baseline. No page was published, indexing was not enabled, no production email was sent, and no deployment, ZIP, or Task 09 implementation was started.

## Frozen baseline

- Active theme: `flatsome-child`, version `2.0.1`.
- Converted pages: 15/15 Draft.
- `blog_public=0`.
- Active plugins: Classic Editor 1.7.0 and Contact Form 7 6.1.7.
- Source/runtime parity: PASS for `assets/css/arden.css`, `assets/js/native-interactions.js`, `functions.php`, and `style.css`.
- Task 08.10 precondition: `READY FOR FINAL TASK 08.7 RERUN`.
- Existing dirty worktree was recorded and preserved.

## Final numeric summary

| Category | Result |
|---|---:|
| Routes | 21 |
| Breakpoints | 1440, 1024, 768, 390 |
| Combinations | 84 |
| Runtime | **84/84 PASS** |
| Responsive | **84/84 PASS** |
| Visual | **84/84 PASS** |
| Content | **84/84 PASS** |
| Structure | **84/84 PASS** |
| Overall matrix | **84/84 PASS** |
| Critical interactions | **84/84 PASS** |
| Forms | **2/2 PASS** |
| Dynamic states | **8/8 PASS** |
| Admin | **10/10 PASS** |
| Media | **PASS** |
| Source/runtime parity | **PASS** |
| Staging safety | **PASS** |

Dynamic record-dependent cases count as content/structure PASS only after applying `DYNAMIC_FIDELITY_POLICY.md` and separately confirming their 8/8 system states. No production content was fabricated. The intentional 404 response and its matching browser main-document entry are normalized as the expected 404 state, not hidden.

## Historical high-risk verification

### Home

- 16/16 sections.
- H1 1/1 and H2 13/13.
- Header and Footer present at all breakpoints.
- No runtime, overflow, clipping, raw shortcode or broken image defect.

### Header

- Arden working-hours/address/hotline/Zalo topbar is present on applicable widths.
- Default Flatsome placeholder does not appear.
- Desktop and mobile Header layouts pass.
- Services dropdown and mobile navigation pass.

### Policies

- Decorative backgrounds, tab shell, cards, spacing and CTA pass visual inspection.
- Five tabs and five panels pass.
- Canonical fragment navigation passes.

### T-Shirt, FAQ, Careers and Quote

- T-Shirt H3 inventory: 19/19; tabs, process, size table and 390px controls pass.
- FAQ H3 inventory: 11/11; categories, search and accordion pass; 390px controls pass.
- Careers role headings: 4/4; accordion passes.
- Quote semantic content, selectors, CF7 validation/submission state and submit CTA pass; 390px controls pass.

### Fabric Guide and Footer

- Fabric search, category filtering, combined filtering and empty state pass.
- Footer map card, two badges, policy links, icon inventory and responsive spacing pass.

### Design system

Fresh route screenshots confirm the accepted body/navigation/button/heading typography stack, colors, containers, cards and responsive spacing remain intact. No previously repaired global visual defect reproduced.

## Runtime, interactions and forms

- Expected HTTP status on every route, including the intentional 404.
- Page/PHP errors: 0.
- Broken images: 0.
- Raw shortcodes: 0.
- Full-page overflow: 0/84.
- Clipped visible controls: 0/84.
- Interactions: 84/84 PASS.
- Contact and Quote: 2/2 PASS with production recipient locked; no production email sent.

## Dynamic, Admin and Media

- Dynamic/system states: 8/8 PASS.
- WordPress Admin: 10/10 PASS, including Pages, Posts, Project CPT, UX Blocks, menus, Customizer, Media, CF7, page editor and UX Builder.
- Media: 21 attachments, zero missing alt, zero missing dimensions, zero Unsplash dependencies.
- Footer map attachment ID 203 loads locally with alt text and 400×273 dimensions.
- No `/src`, Windows filesystem path, or prohibited external fallback is required by the served candidate.

## Static validation

- PHP lint: PASS (13 child-theme files, 0 failures).
- TypeScript (`tsc --noEmit`): PASS.
- React production build: PASS.
- ESLint: N/A; not configured, and the repository `lint` script runs TypeScript validation.
- Shortcode validation: PASS for all 14 imports.
- Legacy raw import comparator: non-zero for seven documented WordPress-native tab, accordion and form-wrapper transformations. Policy-aware rendered content/structure validation is 84/84 PASS; this normalization follows `APPROVED_WORDPRESS_DIFFERENCES.md`.
- `git diff --check`: PASS with line-ending notices only.

## SEO and staging safety

- `blog_public=0`.
- 15/15 converted pages remain Draft.
- No indexing, publication or deployment occurred.
- Contact/Quote production recipient remains locked.
- Rank Math is not active in this local instance; production metadata/schema configuration remains the documented P2 handoff dependency.

## Severity

- P0: **0**.
- P1: **0**.
- P2: **2**.
- P3: **1**.

Fresh defects and their non-blocking classification are documented in `TASK08_11_DEFECTS.md`. All Task 09 approval-gate categories pass.

APPROVED FOR TASK 09
