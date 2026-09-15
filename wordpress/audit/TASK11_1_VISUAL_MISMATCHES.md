# Task 11.1 visual mismatch register

Date: 2026-09-03. Evidence: `task11_1-final-144/` and `task11_1-human-review/`.

| ID | Route/group | Severity | Measured evidence | Verdict |
|---|---|---:|---|---|
| 11.1-01 | Home mobile | V1 | At 390px WordPress remains 1,639px taller. Section deltas are non-uniform; hero/cards/metrics and later component inventories still differ visibly. | OPEN |
| 11.1-02 | About geometry | V2 | Reduced from +2,755px to +155px at 1440 and from +892px to +210px at 390. Image mosaic/card layout is substantially restored, but typography and section rhythm remain visible. | REVIEW |
| 11.1-03 | Case Study | V2 | Structure, sidebar, process grid and SVGs restored; final full-page deltas are -201px at 1440 and -89px at 390. Text/card intrinsic sizes remain different. | REVIEW |
| 11.1-04 | UX Builder icon inventory | V1 | Case Study now uses centralized SVGs, but Home/About/Fabric still omit many semantic Lucide icons compared with React. CSS cannot reproduce missing SVG paths. | OPEN |
| 11.1-05 | Search | V2 | +185px desktop / +575px mobile; grouped structure remains correct. | OPEN, no waiver |
| 11.1-06 | Fabric Guide | V2 | -46px desktop / +357px mobile; compact cards remain correct, decoration/icons differ. | OPEN, no waiver |
| 11.1-07 | News | V2 | +56px desktop / +361px mobile; featured/sidebar structure remains correct. | OPEN, no waiver |
| 11.1-08 | Projects | V2 | -293px desktop / +35px mobile; filters/cards remain correct but desktop density differs. | OPEN, no waiver |

Final counts: **V0 = 0, V1 = 2, V2 = 6**. No V2 waiver is granted because image-level differences remain implementation differences rather than browser-only variance.
