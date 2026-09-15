# Task 09 — Corrected Production Baseline

Recorded: 2026-08-27  
Authority: `TASK09_CODEX_REAUDIT.md` and fresh read-only WordPress/repository checks.  
Status: documentation snapshot only; no runtime or database change was made.

## Git and Task 08.11

| Field | Verified value |
|---|---|
| Branch | `copilot-task08` |
| Trusted checkpoint / current HEAD at audit | `5dc2344c920afa87bdf58b713e1963f3dbc78be9` |
| Task 08.11 test baseline SHA | `e3bd6e22d00353ebdc6100b4199cefacea998b8d` |
| Task 08.11 acceptance | 84/84 PASS; P0=0; P1=0; approved for Task 09 |
| Task 08.11 evidence | No tracked worktree difference from checkpoint |

The original ten Antigravity Task 09 documents were untracked at re-audit time. There is no commit after the trusted checkpoint; `git diff checkpoint..HEAD` is empty.

## Theme and local WordPress

| Field | Verified value |
|---|---|
| Active theme | `flatsome-child` |
| Child theme version | `2.0.1` |
| Parent template | `flatsome` (local parent reported as Flatsome 3.17.7) |
| Repository/live theme parity | 21/21 files SHA-256 identical |
| Local URL | `http://localhost/mytest/` |
| Database / prefix | `mytest` / `wp_` |
| `blog_public` | `0` |
| Static front page | Page ID 48, Published |
| Permalink structure | `/%year%/%monthnum%/%day%/%postname%/` |

## Plugin state

| Plugin | Version | Verified state |
|---|---:|---|
| Contact Form 7 | 6.1.7 | Installed and Active |
| Classic Editor | 1.7.0 | Installed and Active |
| Akismet Anti-spam | 5.7.2 | Installed and Inactive |
| Hello Dolly | — | Not present in the plugin directory |
| Rank Math | — | Not installed; no Rank Math option or postmeta rows found |

## Converted pages

All 15 converted pages remain Draft.

| ID | Slug | Status |
|---:|---|---|
| 81 | `gioi-thieu` | Draft |
| 82 | `dich-vu` | Draft |
| 83 | `dich-vu/may-ao-thun` | Draft |
| 84 | `dich-vu/may-ao-so-mi` | Draft |
| 85 | `dich-vu/may-ao-khoac` | Draft |
| 86 | `dich-vu/may-quan` | Draft |
| 87 | `nang-luc-san-xuat` | Draft |
| 95 | `faq` | Draft |
| 96 | `lien-he` | Draft |
| 97 | `bao-gia` | Draft |
| 98 | `tuyen-dung` | Draft |
| 99 | `chinh-sach` | Draft |
| 100 | `bang-vai` | Draft |
| 101 | `huong-dan-techpack` | Draft |
| 111 | `tin-tuc` | Draft |

## Other content state

| ID | Type | Slug | Status | Required handling |
|---:|---|---|---|---|
| 1 | Default WordPress Post | `chao-moi-nguoi` | **Published** | PRE-PUBLICATION CLEANUP REQUIRED: owner must approve deletion, unpublishing, or replacement. |
| 109 | Validation Post | `task05-bai-viet-kiem-thu` | Draft | Never publish as production content. |
| 110 | Validation Project | `task05-du-an-kiem-thu` | Draft | Never publish as production content. |
| term 3 | Validation category | `task-05-validation` | Exists | Remove or rename before public launch. |

Published Posts are therefore **1**, not 0. Published Projects are 0.

## Contact Form 7

Three CF7 definitions are Published: default form ID 172 plus Arden forms 173 and 175. Production pages use the two Arden forms.

| Form | ID | Verified mail state |
|---|---:|---|
| Arden Contact | 173 | `skip_mail: on`; recipient `REQUIRES_PRODUCTION_RECIPIENT` |
| Arden Quote | 175 | `skip_mail: on`; recipient `REQUIRES_PRODUCTION_RECIPIENT` |

No production recipient is active. The stored sender address must also be reviewed before launch.

## UX Blocks

Exactly eight UX Blocks are Published:

| ID | Name | Slug |
|---:|---|---|
| 26 | Arden Trust Bar | `arden-trust-bar` |
| 28 | Arden Factory | `arden-factory` |
| 30 | Arden Process | `arden-process` |
| 33 | Arden MOQ Policy | `arden-moq-policy` |
| 35 | Arden Testimonials | `arden-testimonials` |
| 37 | Arden FAQ | `arden-faq` |
| 39 | Arden CTA | `arden-cta` |
| 59 | Arden Footer | `arden-footer` |

`arden-certifications-bar` and `arden-contact-strip` are not present and must not be described as current Blocks.

## Media and indexing

| Field | Verified value |
|---|---|
| Attachments | 21 |
| Missing alt/dimensions in Task 08.11 audit | 0 / 0 |
| Footer map | Attachment 203, 400×273 |
| Site icon | Not configured (`site_icon=0`) |
| Homepage robots | `noindex, nofollow` |
| Homepage title | `<title>UI_arden</title>` |
| Homepage canonical | Present, but local: `http://localhost/mytest/` |
| Homepage meta description / OpenGraph / JSON-LD | Missing |
| Current sitemap endpoints | 404 while staging remains non-indexed |

## Backup status

The Task 08 preflight backup files exist under `wordpress/backups/task08-preflight-20260826/`. A fresh Task 08.11-final staging snapshot and a verified restore test remain required immediately before migration.
