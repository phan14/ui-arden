# Task 09.1 — Documentation Correction Log

Date: 2026-08-27  
Authority: `TASK09_CODEX_REAUDIT.md`  
Scope: documentation only. No child-theme/runtime file, React source, WordPress database, plugin state, post status, indexing setting, deployment target, or ZIP was changed.

| # | Original claim | Corrected claim | Evidence/source | Affected files |
|---:|---|---|---|---|
| 1 | Task 09 changes existed after Task 08.11 checkpoint | HEAD equals checkpoint; ten original Task 09 files were untracked and no post-checkpoint commit/diff existed | Git branch/HEAD/status/diff in Codex re-audit | `TASK09_BASELINE.md`, `TASK09_REPORT.md` |
| 2 | Active/inactive plugins included Hello Dolly | CF7 6.1.7 and Classic Editor 1.7.0 Active; Akismet 5.7.2 installed/inactive; Hello Dolly absent; Rank Math absent | WordPress bootstrap and plugin-directory inspection | Baseline, Migration Inventory, Report, Deployment Runbook |
| 3 | Nine current UX Blocks, including certifications/contact-strip | Exactly eight Published Blocks: IDs 26, 28, 30, 33, 35, 37, 39, 59; certifications/contact-strip absent; footer is the eighth | Direct `wp_posts` query | Baseline, Migration Inventory, Report |
| 4 | Published Posts = 0 | Default Post ID 1 `chao-moi-nguoi` is Published; validation Post 109 remains Draft | Direct `wp_posts` query | Baseline, Migration Inventory, Publish Plan, Report, pre-publish checklist, Runbook |
| 5 | No publication, without scope | No converted-page publication: 15/15 remain Draft; site-wide there is one default Published Post plus Published system content | Direct status query | Baseline, Publish Plan, Report |
| 6 | Two CF7 forms exist | Three definitions exist; Arden forms 173/175 are the two production-page forms and default 172 needs a migration decision | Direct `wp_posts` query | Baseline, Migration Inventory, Publish Plan, Report |
| 7 | 9 Blocking / 18 Confirmation / 2 Ready | Correct itemized inventory is 39 rows: 16 Blocking Publication, 22 Requires Confirmation, 1 Ready | Recount of every production-data row plus sample Post cleanup item | Production Data, Report |
| 8 | Remaining blockers are exclusively business inputs | Blockers split into Business Input (5), Legal Input (1), SEO/Technical (7), Deployment Configuration (2), Content Cleanup (1) | Codex reclassification | Production Data, Publish Plan, Report |
| 9 | Rank Math is a business/human or migration blocker | Rank Math is absent and is an SEO/technical dependency for launch/indexing, not a prerequisite for protected migration | Plugin/options/postmeta checks and migration reasoning | SEO Readiness, Production Data, Migration Inventory, Publish Plan, Report, Runbook |
| 10 | All SEO metadata/state is unset | Homepage has a default title, localhost core canonical, and `noindex,nofollow`; meta description, OG, JSON-LD, production metadata, and sitemap remain missing/pending | Live homepage head plus sitemap requests | SEO Readiness, Baseline, Report |
| 11 | Canonical is entirely missing | A core canonical exists but points to localhost; production HTTPS canonical configuration is missing | Live homepage head | SEO Readiness, Production Data, Report |
| 12 | Robots is unset | `blog_public=0` is active and homepage emits `noindex,nofollow` | WordPress option and live head | SEO Readiness, Baseline, Report |
| 13 | Runtime is globally CLEAN | Child-theme package source is clean; complete WordPress staging runtime still contains local/demo/placeholders/sample records requiring pre-publication cleanup | Theme scan, DB/runtime scan | Runtime Cleanup, Report |
| 14 | Only two task-origin code comments exist | Task 05 plus Task 08.9/08.10 provenance comments exist; they are harmless production rules | Theme source scan | Runtime Cleanup, Report |
| 15 | Theme contains no React artifact/reference | No React/Vite runtime dependency exists, but compiled React-derived compatibility filenames/classes/comments do exist | Theme inventory/source scan | Runtime Cleanup |
| 16 | Selective import automatically remaps all IDs | Full DB migration preserves IDs; selective import may assign new IDs and all numeric/content relationships require explicit verification | WordPress migration behavior and re-audit | Migration Inventory |
| 17 | All 10 React aliases | There are 11 authoritative aliases, each supported by `src/App.tsx`; implementation is deferred | `src/App.tsx`, `SITE_ROUTE_MAPPING.md` | Route Plan, Deployment Runbook, Publish Plan, Report |
| 18 | `/tim-kiem -> /?s=` needs no qualification | Redirect must preserve intended query semantics and explicitly test empty-search behavior | Route behavior analysis in re-audit | Route Plan, Deployment Runbook |
| 19 | `NOT READY FOR PRODUCTION MIGRATION` | Technically ready for controlled migration into protected non-indexed staging, but not ready for publication or indexing | Intact Task 08.11 baseline, documented backup/migration steps, outstanding launch blockers | Migration Inventory, SEO Readiness, Publish Plan, Report, Runbook |
| 20 | Existing preflight backup is implicitly verified last-known-good | It exists as a historical snapshot; restore validity remains unverified until a restore test passes | Repository inventory and re-audit limitation | Backup Plan |

## Files corrected

- `wordpress/audit/TASK09_BASELINE.md`
- `wordpress/audit/TASK09_PRODUCTION_DATA.md`
- `wordpress/audit/TASK09_SEO_READINESS.md`
- `wordpress/audit/TASK09_MIGRATION_INVENTORY.md`
- `wordpress/audit/TASK09_BACKUP_PLAN.md`
- `wordpress/audit/TASK09_RUNTIME_CLEANUP.md`
- `wordpress/audit/TASK09_ROUTE_PLAN.md`
- `wordpress/audit/TASK09_PUBLISH_PLAN.md`
- `wordpress/TASK09_DEPLOYMENT_RUNBOOK.md`
- `wordpress/audit/TASK09_REPORT.md`
- `wordpress/PRE_PUBLISH_CHECKLIST.md` (sample-content safety additions only)

`TASK09_CODEX_REAUDIT.md` and all Task 08.11 evidence remain unchanged.
