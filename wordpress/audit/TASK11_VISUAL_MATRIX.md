# Task 11 visual matrix

Fresh evidence was generated in two sets:

- `wordpress/audit/task11-final-144/`: exactly 18 routes × 4 widths × 2 runtimes = 144 fresh PNG screenshots.
- `wordpress/audit/task11-after/`: focused reference/current/side-by-side/overlay/difference evidence for 7 mismatch routes at all four widths (140 PNG plus metrics).

Widths: 1440, 1024, 768, 390. All rows were freshly captured on 2026-09-03; no Task 10 screenshots were reused.

| Route | Runtime | Responsive/overflow | Structural visual | Result |
|---|---|---|---|---|
| `/` | PASS | PASS | Home mobile V1 remains | FAIL |
| `/gioi-thieu` | PASS | PASS | About card/image structure V1 | FAIL |
| `/dich-vu` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/dich-vu/may-ao-thun` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/dich-vu/may-ao-so-mi` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/dich-vu/may-ao-khoac` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/dich-vu/may-quan` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/du-an` | PASS | PASS | Route structure restored; V2 polish remains | REVIEW |
| `/du-an/bst-ao-thun-local-brand` | PASS | PASS | Icon/structure V1 remains | FAIL |
| `/tin-tuc` | PASS | PASS | Route structure restored; V2 polish remains | REVIEW |
| `/bang-vai` | PASS | PASS | Compact 2-column cards restored; V2 icons remain | REVIEW |
| `/huong-dan-techpack` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/lien-he` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/chinh-sach` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/tim-kiem` | PASS | PASS | Grouped reference structure restored; V2 sizing remains | REVIEW |
| `/tuyen-dung` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/faq` | PASS | PASS | No new Task 11 regression observed | PASS |
| `/bao-gia` | PASS | PASS | No new Task 11 regression observed | PASS |

Runtime/overflow assertions for the four modified route families pass in `validate-task11-structural.cjs`. “PASS” here means fresh HTTP/render/overflow observation only; it does not assert pixel-perfect identity or a complete all-route interaction/content regression. Overlay evidence and the mismatch register govern the final gate.
