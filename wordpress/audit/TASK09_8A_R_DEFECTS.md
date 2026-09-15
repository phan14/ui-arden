# Task 09.8A-R — Defect Closure

Date: 2026-08-27  
Scope: local React `http://localhost:3000/` and local WordPress `http://localhost/mytest/` only.

## P0 baseline

| Defect | Reproduced before repair | Final result | Resolution |
|---|---:|---:|---|
| `/tim-kiem` returned 404 | Yes | PASS | Added a public native WordPress Search page/template. |
| `/du-an` lacked project records | Yes | PASS | Imported all 6 React projects as published local project records. |
| Case-study route missing | Yes | PASS | Published the canonical project route and rebuilt its native detail template. |
| News missing/default post visible | Yes | PASS | Imported 5 React articles and removed default posts from public presentation. |
| Original article routes returned 404 | Yes | PASS | Restored posts, permalink structure, and rewrite rules. |
| Root-relative CTA links escaped `/mytest/` | Yes | PASS | Rebased frontend links through `home_url()`; final escaped count is 0. |
| Admin/default WordPress presentation exposed | Yes | PASS | Logged-out final checks show 0 admin bars and 0 default posts. |

## P1 baseline

| Defect | Reproduced before repair | Final result | Resolution |
|---|---:|---:|---|
| USP/mobile grid oversized or broken | Yes | PASS | Corrected shared mobile trust-card sizing and override specificity. |
| Hero/typography mismatch | Yes | PASS | Corrected shared badge padding, mobile page banner, and single-post H1 scale. |
| FAQ category controls navigated incorrectly | Yes | PASS | Native tab behavior retains the FAQ route and updates selected state. |
| Contact validation weaker than React | Yes | PASS | Required CF7 controls now also receive native HTML `required`. |
| Quote exposed internal values | Yes | PASS | Repaired local CF7 form definition; internal labels are no longer visible. |

## Final severity count

- P0: 0
- P1: 0
- P2: 0
- P3: 0

Historical defects are retained above because they were independently reproduced. None reproduced in the final run.
