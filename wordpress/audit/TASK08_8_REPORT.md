# Task 08.8 report — React to WordPress fidelity repair

## Outcome

Task 08.8 is **NOT READY** for acceptance. The shared CSS cascade defect was repaired safely and verified, but the exact content/structure acceptance criteria remain unmet on Home, Policies, T-Shirt Service, FAQ, Quote, and Careers. Declaring fidelity complete would contradict the fresh focused evidence.

## Completed work

- Captured the pre-repair repository/runtime/draft baseline in `TASK08_8_BASELINE.md`.
- Created the pre-fix classification and repair boundary in `TASK08_8_FIDELITY_INVENTORY.md`.
- Confirmed and froze the React-authoritative Home order of 16 sections in `TASK08_8_HOME_DIFF.md`.
- Added `build-react-utility-compat.cjs`, which extracts the compiled Tailwind utility layer and emits a scoped, unlayered compatibility stylesheet.
- Enqueued `react-utility-compat.css` only for Page content containing `.arden-react-page`, after `react-pages.css`.
- Added scoped React page container, typography inheritance, tracking, and primary button compatibility rules.
- Synchronized only the changed child-theme files to the local WordPress runtime.
- Created and ran the required six-route/four-width focused visual collection. Raw results and screenshots are in `TASK08_8_FOCUSED_RESULTS.json` and `task08_8-focused-screens/`.

## Verification results

| Check | Result |
|---|---:|
| Pilot route/width technical safety | 24/24 PASS |
| Focused native interaction regression | 84/84 PASS |
| PHP syntax, source and runtime `functions.php` | PASS |
| `git diff --check` | PASS, line-ending notices only |
| Full 21-route × 4-width rerun | Not run, as prohibited inside Task 08.8 |
| Draft-state/indexing lock | Preserved: 15 Draft Pages, `blog_public=0` |
| Theme version | Remains `2.0.1`; no policy-based bump needed |

## Focused 1440 px content/structure snapshot

| Route | Similarity | Sections React/WP | H3 React/WP |
|---|---:|---:|---:|
| Home | 0.948 | 16/16 | 60/52 |
| About | 1.000 | 8/8 | 28/28 |
| Services | 1.000 | 6/6 | 19/19 |
| Manufacturing | 1.000 | 8/8 | 30/30 |
| T-Shirt Service | 0.924 | 6/6 | 19/14 |
| Fabric Guide | 1.000 | 5/5 | 10/10 |

No pilot case introduced overflow, clipped controls, broken images, raw shortcode output, React runtime dependency, or browser exception.

## Remaining blockers

1. Policies Draft 99 still contains a different legal-policy version. It must be replaced exactly from `PolicySection.tsx`, retain five native tabs/canonical fragments, and remain marked `LEGAL_REVIEW_REQUIRED`.
2. Home retains exact section count/order but not exact H3, image, or control inventory.
3. T-Shirt Service, FAQ, Quote, and Careers retain native behavior but not exact React heading/control semantics; Contact retains the documented CF7 field-count difference.
4. Shared header/footer and several color/font/background computed values remain different. Some color strings represent visually equivalent RGB/OKLCH values, but screenshot/component parity has not been proven.
5. Dynamic archives still lack approved real production records; fake content remains prohibited.

## Safety and release state

- No Page was published.
- Search indexing remains disabled.
- No production email was sent.
- No deployment or ZIP was produced.
- No Task 09 work was started.

NOT READY
