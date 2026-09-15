# Task 11.2C — safe audit artifact cleanup plan

## Safety baseline

- Branch: `copilot-task08`
- HEAD: `5dc2344c920afa87bdf58b713e1963f3dbc78be9`
- `git diff --check`: PASS; CRLF notices only
- Existing dirty worktree is preserved.

## Before sizes

| Path | Size |
|---|---:|
| Repository total | 5,236,375,572 bytes / 4,993.80 MiB |
| `wordpress/` | 3,016,374,597 bytes / 2,876.64 MiB |
| `wordpress/audit/` | 3,002,958,757 bytes / 2,863.84 MiB |
| `wordpress/deploy/` | 143,713 bytes / 0.14 MiB |
| `wordpress/flatsome-child/` | 236,720 bytes / 0.23 MiB |

## Reviewed deletion set — DELETE SAFE

All entries below are generated screenshots, overlays, diff/contact sheets or reproducible audit captures. Their final Markdown reports remain.

| Path | Type | Size MiB | Classification | Reason |
|---|---|---:|---|---|
| `wordpress/audit/task11-before/` | generated captures | 530.07 | DELETE SAFE | superseded pre-fix batch |
| `wordpress/audit/task11-after/` | generated captures | 506.73 | DELETE SAFE | superseded intermediate batch |
| `wordpress/audit/task11-11_1-before/` | generated captures | 503.10 | DELETE SAFE | superseded baseline batch |
| `wordpress/audit/task11-11_1-case/` | generated captures | 376.25 | DELETE SAFE | superseded case-study batch |
| `wordpress/audit/ui-1to1-after-shared-20260829/` | generated visual audit | 102.30 | DELETE SAFE | reproducible older comparison |
| `wordpress/audit/task11-final-144/` | generated 144 batch | 100.57 | DELETE SAFE | superseded; reports retained |
| `wordpress/audit/ui-1to1-20260829/` | generated visual audit | 96.20 | DELETE SAFE | reproducible older comparison |
| `wordpress/audit/task11_1-final-144/` | generated 144 batch | 95.36 | DELETE SAFE | superseded full batch |
| `wordpress/audit/task09_8a_r-screens/` | generated screenshots | 95.13 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task08_11-screens/` | generated screenshots | 89.98 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task08_7-final2-screens/` | generated screenshots | 89.68 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task08_5-screens/` | generated screenshots | 24.74 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task08_9-screens/` | generated screenshots | 22.03 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task11_2-targeted/` | generated raw captures | 17.85 | DELETE SAFE | representative Task 11.2 baseline retained in human-review package |
| `wordpress/audit/task08_8-focused-screens/` | generated screenshots | 15.56 | DELETE SAFE | older reproducible validation |
| `wordpress/audit/task11_1-sections/` | generated section captures | 13.35 | DELETE SAFE | superseded; human-review subset retained |
| `wordpress/audit/task08_10-screens/` | generated screenshots | 3.40 | DELETE SAFE | older reproducible validation |

Proposed deletion: **2,812,599,857 bytes / 2,682.30 MiB**, 1,781 files in 17 explicit directories.

Estimated after size: repository **2,311.49 MiB**; `wordpress/audit/` **181.54 MiB**.

## KEEP

- Current authoritative Task 11.2 reports: `TASK11_2_REPORT.md`, `TASK11_2_VISUAL_MISMATCHES.md`, `TASK11_2_VISUAL_MATRIX.md`, `TASK11_2_CODE_REVIEW.md`, `TASK11_2_ICON_INVENTORY.md`.
- `task11_2-human-review/` as the minimum retained Task 11.2 baseline.
- `task11_1-human-review/` as a representative completed-task set.
- Current Task 11.3A reports and `task11_3a-home-review/` because they describe the active unresolved Home blocker.
- All Markdown/CSV/JSON audit reports, source-of-truth documentation, deployment documentation and required test scripts.

## ARCHIVE OPTIONAL — retained

All packages in `wordpress/deploy/`, including the newest verified package and older ZIPs. None will be deleted in this task.

## DO NOT TOUCH

`wordpress/flatsome-child/`, React source/runtime, `.git/`, `.gitignore`, package configuration, skill configuration, required scripts/assets/fonts/images, databases, uploads, WordPress runtime, staging and production.

## `.gitignore`

No change planned. Narrow ignore patterns could still conceal evidence intentionally retained for current reviews; generated-image retention should remain an explicit task-level decision.

## Actual result

Cleanup completed against the 17 explicit reviewed directories.

| Result | Value |
|---|---:|
| Repository after | 2,423,743,254 bytes / 2,311.46 MiB |
| `wordpress/` after | 203,742,279 bytes / 194.30 MiB |
| `wordpress/audit/` after | 190,364,748 bytes / 181.55 MiB |
| `wordpress/deploy/` after | 143,713 bytes / 0.14 MiB |
| `wordpress/flatsome-child/` after | 236,720 bytes / 0.23 MiB |
| Space reclaimed | 2,812,632,318 bytes / 2,682.34 MiB repository-measured |
| Planned generated payload removed | 2,812,599,857 bytes / 2,682.30 MiB |
| Generated files deleted | 1,781 |
| Directories deleted | 17 |

The post-cleanup figures were measured immediately before the final report edit, so the report's own few bytes are excluded. The small difference between planned payload and whole-repository delta is filesystem/report churn during measurement. The one-use cleanup script was removed after execution and is not retained.

Retained generated evidence directories:

- `task11_1-human-review/` — 49.04 MiB
- `task11_2-human-review/` — 22.98 MiB
- `task11_3a-home-review/` — 47.39 MiB

All Task 11.2 authoritative Markdown reports remain. All deployment ZIPs remain unchanged and classified ARCHIVE OPTIONAL except the newest verified package, which remains KEEP.

Verification:

- `wordpress/flatsome-child/style.css`: exists
- `wordpress/flatsome-child/functions.php`: exists
- `wordpress/flatsome-child/assets/`: exists
- Task 11.2 required reports and baseline: exist
- Current Task 11.3A human evidence: exists
- `git diff --check`: PASS; CRLF notices only
- `.gitignore`: unchanged
- Runtime/source files deleted by this cleanup: 0

TASK 11.2C PASS — SAFE GENERATED ARTIFACTS CLEANED
