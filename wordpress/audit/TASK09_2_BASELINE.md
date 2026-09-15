# Task 09.2 — Preflight Baseline

Recorded: 2026-08-27 (Asia/Bangkok)  
Scope: current local XAMPP staging installation; no production deployment.

## Repository

| Field | Value |
|---|---|
| Branch | `copilot-task08` |
| HEAD | `5dc2344c920afa87bdf58b713e1963f3dbc78be9` |
| Task 08.11 evidence | No tracked difference from HEAD |
| Child-theme runtime | No tracked difference; repository/live parity previously verified 21/21 |
| Existing worktree | Task 09/09.1 documentation untracked; `PRE_PUBLISH_CHECKLIST.md` has the authorized Task 09.1 documentation edit |

## Task 08.11 invariants

| Invariant | Result |
|---|---|
| Active theme/version | `flatsome-child` 2.0.1 — PASS |
| Converted pages | 15/15 Draft — PASS |
| `blog_public` | `0` — PASS |
| Active plugins | Classic Editor 1.7.0; Contact Form 7 6.1.7 |
| Rank Math | Not installed |
| Published sample content | Default Post ID 1 `chao-moi-nguoi` remains Published |
| UX Blocks | 8 Published, per corrected Task 09.1 inventory |

No unexpected Task 08.11 regression was found, so Task 09.2 continued.

## Pre-Task09.2 backup

Location: `wordpress/backups/task09_2-preflight-20260827/`

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `mytest-task09_2-20260827.sql` | 2,105,193 | `0d17cc8510e84248231e8cbaffbd66e0bdae3e6342e8566adc031676c7441356` |
| `uploads-task09_2-20260827.zip` | 1,792,717 | `5e89bbae113824b6d2a39c90d8167e0262a678c4eb1be71ca6388870a36eb1bb` |
| `flatsome-child-live-task09_2-20260827.zip` | 42,333 | `9ba9cf11c03b0b3a42b3ec2d046f068a4e3eb70084ca6debc475a2fabfcdff64` |

Restore verification: **PASS**. The SQL was imported into temporary database `task09_2_restore_check_20260827`; it contained 179 posts, `blog_public=0`, and all 15 converted Draft pages. The temporary database was then removed. Database `mytest` was not altered by this test.

## Safety gate

- No Draft page was published.
- Indexing remains disabled.
- No production mail was sent.
- No plugin was installed/activated/deactivated.
- No redirect was activated.
- No deployment or DNS/domain change occurred.
