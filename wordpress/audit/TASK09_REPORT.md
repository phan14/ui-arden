# Task 09 — Corrected Production Preparation Report

Date: 2026-08-27  
Branch/checkpoint: `copilot-task08` / `5dc2344c920afa87bdf58b713e1963f3dbc78be9`  
Theme: Arden Flatsome Child 2.0.1  
Authority: `TASK09_CODEX_REAUDIT.md` and `TASK09_1_CORRECTION_LOG.md`

## Verified status

| Area | Status | Evidence-based result |
|---|---|---|
| Task 08.11 integrity | PASS | Final evidence unchanged; recorded 84/84 PASS, P0=0, P1=0 |
| Theme/runtime parity | PASS | 21/21 repository/live child-theme files hash-identical |
| Child-theme package cleanliness | PASS | No debug/local path/React-Vite runtime/test helper/secret dependency found |
| Complete staging runtime cleanliness | NOT LAUNCH-CLEAN | Demo/local values, placeholders, sample Published Post, validation records remain |
| Converted pages | SAFE | 15/15 remain Draft |
| Published content | ACTION REQUIRED | Home 48 plus default Post 1 are Published; Post 1 needs approved cleanup |
| Indexing | SAFE | `blog_public=0`; homepage emits `noindex, nofollow` |
| UX Blocks | VERIFIED | Exactly 8 Published Blocks: IDs 26, 28, 30, 33, 35, 37, 39, 59 |
| Media | VERIFIED BASELINE | 21 attachments; footer map 203; approvals still required for production imagery |
| Redirect readiness | DOCUMENTED | 11 aliases are supported by `App.tsx`; implementation deferred to deployment |

## Plugins

| Plugin | Actual state | Required action |
|---|---|---|
| Contact Form 7 6.1.7 | Active | Configure/test Arden forms 173/175 before their pages launch |
| Classic Editor 1.7.0 | Active | Owner/editorial workflow decision |
| Akismet 5.7.2 | Installed, Inactive | Optional spam-protection decision |
| Hello Dolly | Not present | No removal action for this staging source |
| Rank Math | Not installed | SEO/technical dependency before publication/indexing, not before protected migration |

## Forms

Task 08.11 validated form structure/interactions. Production delivery is not ready:

- Arden Contact 173: placeholder recipient and `skip_mail: on`.
- Arden Quote 175: placeholder recipient and `skip_mail: on`.
- Recipient values require business input; sender/recipient configuration, spam protection, SMTP/mail delivery, and testing are deployment work.
- Default CF7 form 172 also exists and needs an explicit migration/cleanup decision.

## SEO readiness

SEO is not completely unset:

- homepage emits `<title>UI_arden</title>`;
- WordPress core emits a localhost canonical;
- staging emits `noindex, nofollow`.

Production SEO is still not ready: custom titles/descriptions, HTTPS canonicals, OG, schema, sitemap, archive/search rules, and approved social assets are absent or pending. Rank Math is the planned implementation but is not a prerequisite for migration into a non-indexed production staging environment.

## Exact production-data counts

The corrected itemized inventory contains 39 rows:

| Status | Count |
|---|---:|
| BLOCKING PUBLICATION | **16** |
| REQUIRES CONFIRMATION | **22** |
| READY | **1** |

The 16 publication blockers are classified by primary responsibility:

| Class | Count | Scope |
|---|---:|---|
| BUSINESS INPUT | 5 | Favicon asset, OG asset, phone, Zalo, social URLs |
| LEGAL INPUT | 1 | Privacy/data-retention/cookie position |
| SEO/TECHNICAL DEPENDENCY | 7 | SEO solution, titles, descriptions, canonicals, sitemap, schema, OG metadata |
| DEPLOYMENT CONFIGURATION | 2 | CF7 173/175 configuration and delivery testing |
| CONTENT CLEANUP | 1 | Published default Post ID 1 |

The 22 confirmation items are separately documented and are not falsely grouped as business-only inputs.

## Migration readiness

### Technically ready for protected migration

- Task 08.11 accepted code/runtime is intact.
- Full and selective migration procedures are documented.
- Serialized-safe URL replacement and rollback steps are defined.
- Current Draft and non-indexed states can be preserved.
- No code repair is required solely to copy the validated site into production staging.

### Conditions before executing migration

- Take and restore-test a fresh Task 08.11-final staging backup.
- Back up the production target and verify rollback access.
- Confirm final domain/HTTPS, target environment, access, and full-vs-selective scenario.
- Obtain licensed Flatsome parent and required deployment credentials outside Git.

These are deployment gates, not evidence that the site must remain on localhost until every publication input is resolved.

## Publication blockers

Before public launch: resolve applicable business/legal data; clean up sample/validation content; configure/test forms; configure production SEO; implement 11 redirects; verify Header/Footer/media/links; run responsive, visual, interaction, form, and dynamic-route smoke tests.

## Indexing blockers

Keep `blog_public=0` until published content is approved and tested, canonicals use final HTTPS URLs, sitemap contains only intended content, robots/schema/OG are verified, forms deliver correctly, no localhost/mixed content remains, and sample/validation content is excluded.

## Documentation disposition

Task 09.1 corrected baseline facts, counts, SEO wording, plugin state, UX Block inventory, Published sample content, migration/publish order, redirect wording, and runtime-scope wording. No theme, React source, database, plugin state, content status, indexing setting, deployment target, or ZIP was changed.

The site is **ready to proceed with a controlled migration into a protected non-indexed production staging environment**, subject to the backup/access prerequisites above. It is **not ready to publish or enable indexing**.

READY FOR PRODUCTION MIGRATION
