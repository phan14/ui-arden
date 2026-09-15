# Task 09.3 — Backup and Source-State Record

Date: 2026-08-27  
Migration status: **NOT STARTED — migration-critical target inputs are missing.**

## Repository/source baseline

| Field | Recorded value |
|---|---|
| Branch | `copilot-task08` |
| Git HEAD | `5dc2344c920afa87bdf58b713e1963f3dbc78be9` |
| Active child theme | `flatsome-child` 2.0.1 |
| WordPress / PHP | WordPress 7.1 / PHP 8.2.4 locally |
| Local site/home | `http://localhost/mytest` |
| Database | `mytest`, prefix `wp_` |
| Indexing | `blog_public=0` |
| Converted pages | 15/15 Draft |
| Published sample Post | ID 1 `chao-moi-nguoi` remains Published |
| UX Blocks | 8 Published |
| Active plugins | Contact Form 7 6.1.7; Classic Editor 1.7.0 |
| Installed inactive plugin | Akismet 5.7.2 |
| Rank Math | Not installed |
| CF7 safety | Forms 173/175 retain `skip_mail: on` and placeholder recipients |

## Local staging backup

The restore-tested Task 09.2 preflight backup remains current because no WordPress runtime/database/plugin/content mutation occurred afterward.

Location: `wordpress/backups/task09_2-preflight-20260827/`

| Artifact | Bytes | SHA-256 | Verification |
|---|---:|---|---|
| `mytest-task09_2-20260827.sql` | 2,105,193 | `0d17cc8510e84248231e8cbaffbd66e0bdae3e6342e8566adc031676c7441356` | Restore test PASS |
| `uploads-task09_2-20260827.zip` | 1,792,717 | `5e89bbae113824b6d2a39c90d8167e0262a678c4eb1be71ca6388870a36eb1bb` | Non-zero; readable archive |
| `flatsome-child-live-task09_2-20260827.zip` | 42,333 | `9ba9cf11c03b0b3a42b3ec2d046f068a4e3eb70084ca6debc475a2fabfcdff64` | Non-zero; readable archive |

The SQL restore test used isolated temporary database `task09_2_restore_check_20260827`, confirmed 179 posts, `blog_public=0`, and 15 converted Draft pages, then removed the temporary database.

## Licensed parent theme source

Local archive is available outside the repository:

- Path: `D:\000008\flatsome-3.17.7\flatsome-3.17.7-full\flatsome-3.17.7.zip`
- Bytes: 6,129,426
- SHA-256: `71324ce55473aa9bbcdc0d3938b4dfc25bd80353161e90579bfc069b715a8fe7`

Availability of this file does not prove a production-domain license/activation entitlement. The archive must not be committed or redistributed.

## Production-target backup

| Requirement | Status |
|---|---|
| Target identified | MISSING |
| WordPress/hosting access | MISSING |
| Database access | MISSING / depends on migration scenario |
| Existing-data determination | MISSING |
| Production database backup | NOT POSSIBLE YET |
| Production uploads/themes backup | NOT POSSIBLE YET |
| Restore/rollback owner and access | MISSING |

No production backup or mutation was attempted. A target backup is mandatory before migration if a target exists, even when believed to be empty.
