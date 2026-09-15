# Task 09 — Corrected Migration Inventory

Date: 2026-08-27. This inventory documents the verified staging state; it does not execute migration.

## Required runtime

| Component | Verified state | Migration treatment |
|---|---|---|
| Flatsome parent | 3.17.7 reported locally; licensed commercial theme | Install licensed copy; do not redistribute it |
| Arden child theme | `flatsome-child` 2.0.1; 21 repository/live files hash-identical | Transfer the directory/package at deployment time |
| PHP templates | 404, Project archive/single, category, home/news, search, Post single | Transfer with child theme |
| CSS/JS/image runtime | Five CSS files, `native-interactions.js`, `arden-logo.svg` | Transfer with child theme |
| Development/audit/import/reference folders | Outside child theme | Do not include in production theme package |

## Database/content

| Item | Verified count/state | Migration note |
|---|---|---|
| Static homepage | ID 48, Published | Preserve/remap deliberately |
| Converted pages | 15, all Draft | Preserve Draft state during migration |
| Published Posts | **1**: default ID 1 `chao-moi-nguoi` | PRE-PUBLICATION CLEANUP REQUIRED; do not silently publish as production content |
| Published Projects | 0 | Empty-state behavior is valid |
| Validation seeds | Post 109 Draft; Project 110 Draft | Do not publish; exclude or preserve as Draft intentionally |
| Validation category | term 3 `task-05-validation` | Remove/rename before launch |
| CF7 definitions | Three total; Arden IDs 173/175 plus default ID 172 | Migrate Arden forms intentionally; decide whether default form 172 is needed |
| Current local URL | `http://localhost/mytest` | Serialized-safe replacement required |
| Indexing | `blog_public=0` | Keep disabled throughout migration and smoke testing |

A full database migration preserves numeric IDs. A selective WordPress export/import may assign new IDs; shortcode, attachment, UX Block, menu, and option references must be checked explicitly rather than assumed to remap automatically.

## Media

| Item | Verified state | Migration note |
|---|---|---|
| Attachments | 21 | Transfer database records and upload files together |
| Upload subdirectory | `uploads/2026/08/` | Preserve relative paths |
| Footer map | attachment 203, `arden-footer-map.jpg`, 400×273 | Verify final ID/reference and rendering |
| Image approvals | Several React/reference images require owner licensing approval | Business/legal review before public launch |

## UX Blocks

Exactly eight Blocks are Published and must be migrated/verified:

| ID | Slug | Name |
|---:|---|---|
| 26 | `arden-trust-bar` | Arden Trust Bar |
| 28 | `arden-factory` | Arden Factory |
| 30 | `arden-process` | Arden Process |
| 33 | `arden-moq-policy` | Arden MOQ Policy |
| 35 | `arden-testimonials` | Arden Testimonials |
| 37 | `arden-faq` | Arden FAQ |
| 39 | `arden-cta` | Arden CTA |
| 59 | `arden-footer` | Arden Footer |

`arden-certifications-bar` and `arden-contact-strip` do not exist in the verified database and are not migration requirements.

## Menus, Header, and Footer

- Primary menu term ID 4 is assigned locally; recreate or verify its production location.
- Flatsome Header Builder/theme modifications live in database options and require post-migration verification.
- Footer is UX Block `arden-footer` ID 59 locally; verify its remapped reference, map image, policy links, and social placeholders.
- Confirm desktop dropdown, mobile off-canvas menu, sticky behavior, logo, and all production-domain URLs.

## Forms

- CF7 6.1.7 is Active.
- Arden Contact 173 and Arden Quote 175 both have `skip_mail: on` and placeholder recipients.
- Production recipient addresses are business inputs; configuring sender/recipient, removing `skip_mail`, spam protection, and delivery testing are deployment work.
- Review the stored sender address; do not assume it is approved for production.

## Plugin inventory/dependencies

| Plugin | Current local state | Production treatment |
|---|---|---|
| Contact Form 7 6.1.7 | Active | Required for current forms |
| Classic Editor 1.7.0 | Active | Optional workflow choice |
| Akismet 5.7.2 | Installed, Inactive | Optional spam-protection choice |
| Hello Dolly | Not present | Nothing to remove from this staging source |
| Rank Math | Not installed | Planned SEO/technical launch dependency; install/configure before publication/indexing, not necessarily before migration |

## Migration scenarios

### Full migration to empty production

Transfer full database, uploads, licensed parent theme, child theme, and required plugins. Run a serialized-safe dry-run and then replacement from localhost to the final HTTPS domain. Preserve `blog_public=0`, Draft statuses, and sample/validation content status until cleanup is owner-approved.

### Selective migration into an existing production site

Do not overwrite the production database. Export/import only approved Arden Pages, eight UX Blocks, required media, menu/settings, and Arden CF7 forms. Resolve IDs and relationships deliberately and verify each reference after import.

## Required migration gate

- [ ] Fresh Task 08.11-final database/uploads/theme backup created and restore-tested.
- [ ] Production backup and rollback access verified.
- [ ] Final HTTPS domain and migration scenario confirmed.
- [ ] Licensed Flatsome parent available.
- [ ] Serialized-safe URL replacement dry-run reviewed.
- [ ] 15 converted pages remain Draft and `blog_public=0` after import.
- [ ] Eight UX Blocks, 21 media records, menu, Header/Footer, and forms verified.
- [ ] Default Published Post ID 1 and validation records explicitly handled before public launch.
- [ ] Rank Math/approved SEO solution configured before publication/indexing.

Migration into a protected non-indexed production staging environment is technically feasible. Public launch is not yet approved.
