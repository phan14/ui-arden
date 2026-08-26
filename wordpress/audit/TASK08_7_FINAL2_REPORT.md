# Task 08.7 FINAL2 — post-Task-08.9 acceptance regression

Final result: **FAIL**  
Validation date: 2026-08-26  
Branch: `copilot-task08`  
Baseline HEAD: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

This was a fresh validation-only run. No UI/runtime repair was made after failures were discovered. React was not modified; no Draft was published; indexing was not enabled; no production email, deployment, ZIP, or Task 09 action occurred.

## Baseline

- Theme: `flatsome-child` version `2.0.1`.
- Converted pages: 15/15 remain Draft.
- `blog_public=0`.
- Workspace/runtime SHA-256 parity: PASS for all eight required child-theme assets.
- `TASK08_9_REPORT.md` ended with `READY FOR FINAL TASK 08.7 RERUN`.
- The pre-existing dirty worktree was recorded and preserved.

## Acceptance summary

| Category | Result | Fresh evidence |
|---|---:|---|
| Routes | 21 | Full mapped route set |
| Breakpoints | 4 | 1440, 1024, 768, 390 |
| Total combinations | 84 | Fresh screenshots/data for every combination |
| Overall | **81/84 PASS** | Three mobile cases fail strict acceptance |
| HTTP/runtime | **84/84 PASS** | Expected status, no page errors, broken images or raw shortcodes |
| Responsive safety | **81/84 PASS** | T-Shirt, FAQ and Quote fail at 390px |
| Visual fidelity | **81/84 PASS** | Same three clipped-control cases fail |
| Content fidelity | PASS for static routes; N/A for approved dynamic record states | Narrow policy normalization only |
| Structure fidelity | PASS for static routes; N/A for approved dynamic record states | Native wrappers normalized narrowly |
| Critical interactions | **84/84 PASS** | Fresh interaction run |
| Forms | **2/2 PASS** | Contact and Quote validation/success state; production recipient locked |
| Dynamic states | **8/8 PASS** | Posts, Projects, Search and 404 states |
| Admin | **10/10 PASS** | Including UX Builder, UX Blocks, CPT, Media, menus and forms |
| Media | PASS | 21 attachments; no missing alt/dimensions; Footer map ID 203 present |
| Static validation | Partial | All required checks pass except legacy raw import comparator; details below |

## Repaired-area regression

- Header topbar/Header Builder: PASS; Arden hours/address/hotline/Zalo inventory appears and Flatsome default copy is absent.
- Services dropdown and mobile navigation: PASS.
- Home inventory: 16/16 sections, H1 1/1, H2 13/13; runtime safe at all four widths.
- Policies: visual background/tabs/cards/CTA retained; five tabs and canonical fragments PASS.
- T-Shirt: content and tabs/process behavior PASS, but 390px responsive geometry FAILS.
- FAQ: content and accordion/search behavior PASS, but category controls FAIL at 390px.
- Careers: PASS.
- Quote: selectors and form behavior PASS, but form controls/submit CTA FAIL at 390px.
- Fabric Guide search, filter, combined filter and empty state: PASS.
- Footer map, badges and policy links: PASS.
- Body/navigation/button/heading typography and color stack: retained without a reproduced desktop blocker.

## Severity

| Severity | Count |
|---|---:|
| P0 | 0 |
| P1 | 3 |
| P2 | 2 |
| P3 | 1 |

The three P1 defects are fresh 390px responsive failures on T-Shirt Service, FAQ and Quote. Full details are in `TASK08_7_FINAL2_DEFECTS.md`.

## Static validation

- PHP lint: PASS (13 child-theme PHP files, 0 failures).
- TypeScript (`tsc --noEmit`): PASS.
- React production build: PASS.
- ESLint: N/A; no ESLint script/configuration exists and repository `lint` runs TypeScript.
- Shortcode validation: PASS for all 14 imports.
- Legacy raw import comparator: non-zero for seven already known WordPress-native transformations (tabs, accordions, and form wrappers). Policy-aware runtime content/structure validation remains PASS; this result is disclosed and not used to conceal the three responsive failures.
- `git diff --check`: PASS; line-ending notices only.
- Source/runtime parity: PASS.

## Evidence

- Machine result: `TASK08_7_FINAL2_RESULTS.json`.
- Full matrix: `TASK08_7_FINAL2_FULL_TEST_MATRIX.md`.
- Raw run: `task08_7-final2-raw-regression.json`.
- Screenshots: `task08_7-final2-screens/`.
- Fresh interactions: `task08_6c-focused.json`.
- Fresh systems/forms/media: `task08_7-systems.json`.
- Fresh admin: `task08_5-admin.json`.

The approval gate requires P0=0, P1=0, and all visual/responsive acceptance categories to pass. P1=3 and three combinations fail visual/responsive safety, so Task 09 remains blocked.

NOT APPROVED FOR TASK 09
