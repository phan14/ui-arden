# TASK 09.7B — Local and Remote Baseline

Validation time: 2026-08-27  
Mode: read-only validation; no Arden integration.

## Local baseline

| Field | Value |
|---|---|
| Branch | `copilot-task08` |
| HEAD | `5dc2344c920afa87bdf58b713e1963f3dbc78be9` |
| Child theme | Arden Flatsome Child 2.0.1 |
| Task 08.11 | `APPROVED FOR TASK 09` |
| Accepted local content | Home plus 15 converted Draft Pages, dynamic templates, eight UX Blocks, two CF7 forms, 21 media attachments |
| Local indexing/mail state | `blog_public=0`; converted pages Draft; CF7 production recipient locked per Task 08.11 |

The worktree was already dirty with the existing Task 09 documentation and checklist changes. Those changes were preserved. No local runtime, React source, WordPress database, status or theme activation was changed in Task 09.7B.

## Remote endpoints

| Endpoint | Result |
|---|---|
| `https://ardenstyle.vn/` | 200, HTTPS, WordPress 6.8.8, index/follow |
| `https://ardenstyle.vn/staging/` | 200, HTTPS, remains under `/staging/`, noindex/nofollow |
| `/staging/wp-admin/` | Reachable and redirects to `/staging/wp-login.php` without a loop |
| `/staging/wp-login.php` | 200, WordPress login, noindex/nofollow/noarchive |

Public frontend validation shows no localhost reference. Credentials were not available or exposed.
