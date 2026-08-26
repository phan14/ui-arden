# Task 08.7 final rerun — full site acceptance regression

Final result: **FAIL**  
Validation date: 2026-08-26  
Branch: `copilot-task08`  
Checkpoint recorded before testing: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

This was a fresh validation-only rerun. React was not modified, the 15 converted pages were not published, indexing remained disabled, no production email was sent, no production ZIP was created, and Task 09 was not started. Existing completed Footer work was not reverted or redone.

## Gate summary

| Category | Result | Evidence |
|---|---:|---|
| Routes | 21 | Full route inventory rerun |
| Breakpoints | 4 | 1440, 1024, 768, 390 |
| Total combinations | 84 | 21 × 4 |
| Overall | **0/84 PASS** | Every combination fails the strict visual gate |
| HTTP/runtime safety | **84/84 PASS** | No fatal runtime result |
| Responsive safety | **84/84 PASS** | No horizontal overflow or clipping blocker |
| Visual fidelity | **0/84 PASS** | Global Header mismatch plus material component/layout drift |
| Content fidelity | PASS for static routes; N/A for approved record-dependent states | Approved normalization applied narrowly |
| Structure fidelity | PASS for static routes; N/A for approved record-dependent states | Heading/section inventories remeasured |
| Critical interactions | **84/84 PASS** | Fresh focused interaction rerun |
| Forms | **2/2 PASS** | Contact and Quote validation/submission state; no production email |
| Dynamic/system states | **8/8 PASS** | Policy applied without fabricating records |
| WordPress Admin | **10/10 PASS** | Pages, Posts, Projects, UX Blocks, menus, Customizer, Media, CF7, editor, UX Builder |
| Media | PASS | 21 attachments; zero missing alt/dimensions; Footer map ID 203 present |
| Static validation | PASS | PHP lint, TypeScript, React build, shortcode/import validation, `git diff --check` |
| Source/runtime parity | PASS | Eight tracked child-theme runtime assets hash-identical |
| Theme version | PASS | `2.0.1` in source and runtime |
| Draft/indexing safety | PASS | 15 converted pages remain Draft; `blog_public=0` |

## Severity

| Severity | Count |
|---|---:|
| P0 | 0 |
| P1 | 2 |
| P2 | 2 |
| P3 | 1 |

The two P1 findings are acceptance blockers:

1. The WordPress Header topbar still shows Flatsome placeholder content instead of the Arden contact/hours strip from React.
2. Material visual differences remain in component styling and layout. Policies is the clearest example: decorative background, badge/tab/card presentation, spacing/density, and CTA alignment do not match React closely enough for strict 1:1 acceptance.

Details and reproduction scope are in `TASK08_7_FINAL_DEFECTS.md`.

## Home independent check

- Runtime and responsive safety: PASS at all four widths.
- Section inventory: 16/16.
- Primary heading inventory: H1 1/1 and H2 13/13.
- Visible content similarity at 1440 px: approximately 0.948.
- H3, image, and CTA/control counts still differ where WordPress-native rendering and the unresolved global/visual presentation diverge.
- Header: FAIL due to the visible Flatsome placeholder topbar.
- Footer: the completed Task 08.8C Footer work is retained; no Footer regression repair was performed during this test.
- Home final result: FAIL because visual fidelity is acceptance-critical.

## Explicit repaired-page revalidation

Policies, T-Shirt Service, FAQ, Careers, Quote, and Fabric Guide all pass runtime, responsive safety, and the applicable semantic/content checks. Their controls also pass the fresh focused suite. This does not override the visual failure: Policies retains a material 1:1 presentation mismatch, and the shared Header defect affects the site shell.

## Validation executed

- Fresh 21-route × 4-breakpoint regression and screenshots.
- Fresh 84-check interaction suite.
- Fresh Contact and Quote form validation.
- Fresh dynamic/system, accessibility, SEO-safety, media, and UX Builder checks.
- Fresh WordPress Admin acceptance checks (10/10).
- PHP lint: 31 files, 0 failures.
- TypeScript (`tsc --noEmit`): PASS.
- React production build: PASS.
- Shortcode and import validators: PASS.
- `git diff --check`: PASS (line-ending notices only).
- Source/runtime hash parity: PASS for all eight required child-theme files.

Machine-readable evidence: `TASK08_7_FINAL_RESULTS.json`. Full route/breakpoint results: `TASK08_7_FINAL_FULL_TEST_MATRIX.md`.

The strict gate requires P0=0, P1=0, and every acceptance-critical category to pass. P1=2 and visual fidelity fails, so the site cannot proceed to Task 09.

NOT APPROVED FOR TASK 09
