# Task 08.10 — fix final 390px mobile P1 defects

Result: **PASS**  
Validation date: 2026-08-26  
Branch: `copilot-task08`  
Starting HEAD: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

Task 08.10 changed only scoped mobile CSS for the three FINAL2 failures. React and user-facing content were not modified. No page was published, indexing remains disabled, and no deployment, production ZIP, or Task 09 work occurred.

## Exact root causes

### T-Shirt Service

The native Flatsome tab navigation was a non-wrapping flex row with `overflow-x:auto`. Its tab anchors retained intrinsic widths plus `padding: 8px 16px`. At 390px:

- `VẢI CÁ SẤU COTTON / POLY` ended at x=402.11px;
- `VẢI INTERLOCK / CHÂN CUA` started at x=415.11px and ended at x=521.27px;
- `300 GSM` ended at x=440.84px.

The page itself did not horizontally scroll, but these interactive controls were outside the visible safe area.

### FAQ

The same Flatsome flex/intrinsic-width behavior affected `.arden-faq-tabs > .nav`. The final `HỢP ĐỒNG & THANH TOÁN` control ended at x=421.52px in a 390px viewport.

### Quote

`.arden-cf7-form--quote` was a 358px CSS Grid, but each direct `<p>` grid item retained the default grid-item `min-width:auto`. Long `<select>` option content established a 399.45px min-content width, so labels, inputs, selects, textarea and submit inherited geometry from x=16px to x=415.45px. The issue was grid min-content sizing, not a missing global page overflow rule.

Raw before-fix DOM/computed evidence is stored as three sequential JSON records in `task08_10-mobile-diagnostics.jsonl`.

## CSS changes

All rules are inside `@media (max-width: 480px)` in `assets/css/arden.css`.

- `.arden-react-page :is(.arden-fabric-tabs, .arden-gsm-tabs, .arden-faq-tabs) > .nav`
  - changes the mobile control shell from intrinsic flex/scroll sizing to a bounded grid;
  - keeps width/max-width at 100% and removes internal overflow.
- `.arden-fabric-tabs > .nav` and `.arden-faq-tabs > .nav`
  - use five equal `minmax(0, 1fr)` columns, matching the React mobile control row.
- `.arden-gsm-tabs > .nav`
  - uses six equal `minmax(0, 1fr)` columns.
- The scoped tab `<li>`/`<a>` rules set `min-width:0`, bounded width, compact React-like padding/type, centered wrapping labels and `overflow-wrap:anywhere`.
- `.arden-cf7-form--quote` and its scoped grid items/wrappers/controls set `width:100%`, `max-width:100%`, `min-width:0` and `box-sizing:border-box`.
- The scoped Quote submit rule uses compact mobile padding, type size and tracking so its unchanged label remains fully visible.

No `!important` declaration was added.

## Focused responsive result

| Page | 390 | 768 | 1024 | 1440 |
|---|---:|---:|---:|---:|
| T-Shirt Service | PASS | PASS | PASS | PASS |
| FAQ | PASS | PASS | PASS | PASS |
| Quote | PASS | PASS | PASS | PASS |

Fresh focused result: **12/12 PASS**.

At 390px for all three pages:

- `innerWidth=390`;
- `document.documentElement.scrollWidth=390`;
- clipped interactive controls: 0;
- broken images: 0;
- raw shortcode: 0;
- runtime/page errors: 0.

Evidence: `task08_10-focused.json` and `task08_10-screens/`.

## Interaction regression

- T-Shirt material and GSM controls: PASS.
- FAQ categories/search/accordion: PASS.
- Quote selectors: PASS.
- Quote form validation and successful non-production submission state: PASS.
- Complete focused interaction suite: **84/84 PASS**.
- Forms/system rerun: **2/2 forms PASS**, **8/8 dynamic states PASS**.

Runtime: **PASS**.  
Responsive: **PASS**.  
Interactions: **PASS**.

## Static validation

- PHP lint: PASS (13 child-theme PHP files, 0 failures).
- TypeScript (`tsc --noEmit`): PASS.
- React production build: PASS.
- Shortcode validation: PASS for all 14 imports.
- Legacy raw import comparator: non-zero for seven previously documented WordPress-native tab/accordion/form transformations; policy-aware runtime content and structure remain PASS.
- `git diff --check`: PASS (line-ending notices only).
- Workspace/runtime `arden.css` hash parity: PASS.

## Severity

- P0: **0**.
- P1: **0**.
- Remaining P2: **2** — production record population and production SEO/business verification.
- Remaining P3: **1** — expected invalid-route main-document diagnostic entry.

T-Shirt 390 = PASS  
FAQ 390 = PASS  
Quote 390 = PASS  
No overflow = PASS  
Interactions = PASS  
Runtime = PASS  
768/1024/1440 smoke = PASS

READY FOR FINAL TASK 08.7 RERUN
