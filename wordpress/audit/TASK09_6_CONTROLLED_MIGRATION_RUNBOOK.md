# TASK 09.6 — Controlled Migration Runbook

Status: executable design for a later authorized staging task. Nothing in this runbook was executed in Task 09.6.

## 1. Target architecture

```text
xuongmaygiatot.vn (unchanged production)
  └─ full files/database/config clone
       └─ protected STAGING-HOST (auth + noindex + mail lock)
            ├─ preserved production database/content/SEO/WooCommerce
            ├─ licensed Flatsome parent (provided outside Git)
            ├─ Arden child theme 2.0.1
            ├─ selectively integrated Arden Pages/UX Blocks/Header/Footer/CF7
            └─ full legacy + 21-route QA
                 └─ separately authorized controlled cutover
```

## 2. Required inputs and preflight gate

- Owner-approved `STAGING-HOST`, hosting account and isolation method.
- Read-only production inventory access and authorized backup access.
- SSH/SFTP and WP-CLI/database credentials for staging; production write access is not used while cloning design is being reviewed.
- Staging filesystem/database capacity and TLS certificate.
- Licensed Flatsome package/account and legitimate Rank Math Pro package/account outside Git.
- Maintenance/cutover window, decision owner and rollback owner.
- Verified production mail recipients, From-domain and SMTP details kept sealed until production gate.
- Backlink export before any merge/redirect/410 proposal.

Stop if the staging host, ownership, isolation, backups or restore target are ambiguous.

## 3. Preservation inventory

| Component | Classification | Handling |
|---|---|---|
| Core content tables (`posts`, `postmeta`, terms/relationships) | PRESERVE EXACTLY | Clone whole production database; retain IDs and relationships |
| Users/usermeta | PRESERVE + REVIEW | Clone securely; reset/restrict staging access and mail side effects |
| Comments/commentmeta | PRESERVE + REVIEW | Retain if present; block notifications on staging |
| `wp_options` and multisite tables if present | PRESERVE + REVIEW | Clone, then change only staging URL/safety options serialized-safely |
| WooCommerce core/lookup/order/session/action-scheduler tables | PRESERVE EXACTLY | Inventory actual prefixes/HPOS state; retain products/orders/settings; suppress live jobs/payment callbacks |
| Rank Math tables and post/term/user meta | PRESERVE EXACTLY | Export and clone; no bulk overwrite from local |
| Posts, 55 permalinks, categories/tags | PRESERVE EXACTLY | Existing records feed new templates |
| Products, 51 URLs, product taxonomies/reviews | PRESERVE EXACTLY | WooCommerce remains active through staging acceptance |
| Existing Pages | PRESERVE + REVIEW | Back up per record; only mapped pages receive Arden content |
| Media Library and `uploads` | PRESERVE EXACTLY | Clone records/files together; validate checksums and attachment metadata |
| Menus/widgets/UX Blocks/theme mods | MERGE | Snapshot production; selectively merge Arden objects and record ID mapping |
| Existing redirects/permalinks | PRESERVE EXACTLY | Export Rank Math/server rules; activate no new redirects |
| Existing plugins/themes | PRESERVE + REVIEW | Inventory/version/license/security compatibility before changes |
| Arden child theme 2.0.1 | REPLACE WITH ARDEN | Install on staging after parent compatibility check |
| Local demo DB, local IDs and sample records | DO NOT MIGRATE | Never overwrite cloned production data |
| React source, audits, tools, screenshots, backups, Git metadata | DO NOT MIGRATE | Excluded from webroot package |
| Flatsome/Rank Math commercial licenses | USER DECISION REQUIRED | Owner installs/activates through legitimate account; never commit to Git |

Also preserve `.htaccess`, relevant `wp-config.php` values, cron configuration, mu-plugins, drop-ins, PHP/server versions, LiteSpeed/CDN rules and scheduled-action state as separately encrypted configuration evidence.

## 4. Restore point A — original production

**PRECONDITION:** written backup authorization; exact production webroot/database resolved; no mutation planned.  
**BACKUP:** database dump with routines/options as applicable; `wp-content`, uploads, themes/plugins/mu-plugins; config and redirect/server rules; checksums, sizes, timestamps and versions. Store outside public webroot.  
**ACTION:** create backup only and label `A-original-production-UTC_TIMESTAMP`; do not change production.  
**VALIDATION:** restore into an isolated disposable environment; compare table counts, post/product/media counts, critical files and sampled protected URLs.  
**ROLLBACK:** not applicable to read-only capture; if validation fails, discard the invalid artifact and repeat capture without continuing.

## 5. Create protected staging clone

**PRECONDITION:** Restore Point A verified; private staging DNS/TLS/auth/database ready; production remains online.  
**BACKUP:** snapshot empty target and its configuration before overwrite.  
**ACTION:** copy verified production files/database to staging; run one serialized-safe production→staging URL replacement; set staging `home/siteurl`; force `blog_public=0`; disable outbound mail, payments, webhooks, feeds to external systems and production cron side effects.  
**VALIDATION:** noindex response/meta, authentication, no sitemap submission, no production email, correct TLS, no production writes, admin access, database counts and URL scan.  
**ROLLBACK:** restore the empty-target snapshot or discard only the validated staging target; production is untouched.

Use WP-CLI `search-replace --all-tables-with-prefix --precise --recurse-objects --skip-columns=guid` with a dry run first. Review table/row counts. Never use naive SQL replacement. Scan `wp_options`, post/UX content, attachment references, menus, widgets, CF7 and all prefixed plugin tables. Do not rewrite GUID values.

Production→staging replacement template, executed only inside the verified staging database:

```text
wp search-replace 'https://xuongmaygiatot.vn' 'https://STAGING-HOST' --all-tables-with-prefix --precise --recurse-objects --skip-columns=guid --dry-run
wp search-replace 'https://xuongmaygiatot.vn' 'https://STAGING-HOST' --all-tables-with-prefix --precise --recurse-objects --skip-columns=guid
```

For staging→production, do not run a blind all-table replacement against the live database. Either promote the fully synchronized clone as a consistent files/database unit during an approved freeze, then run a dry-run serialized-safe replacement on that offline cutover database, or selectively transport only mapped Arden-origin records and replace their staging references with a serialized-aware migration tool. Record affected tables/rows and attachment/block/form ID mappings before import.

## 6. Restore point B — cloned staging before Arden

**PRECONDITION:** staging clone parity and isolation pass.  
**BACKUP:** staging DB/files/config/redirect inventory and checksum manifest labeled `B-pre-Arden`.  
**ACTION:** no integration before this point exists.  
**VALIDATION:** demonstrate restoration into an isolated target and re-run representative protected URLs.  
**ROLLBACK:** restore B to undo every Arden integration change without touching production.

## 7. Theme and component integration

**PRECONDITION:** B verified; production plugin/theme inventory recorded; Flatsome compatibility reviewed.  
**BACKUP:** B plus per-record exports before editing mapped existing Pages/options.  
**ACTION:** owner supplies licensed Flatsome outside Git. Prefer the production-compatible installed parent when supported; validate against the known 3.17.7 baseline and do not downgrade blindly. Install Arden child 2.0.1, keep inactive until dependencies pass, then activate on staging. Import/remap Arden media, UX Blocks, Pages and CF7 according to the integration map; merge Header/Footer/menus deliberately.  
**VALIDATION:** source/runtime hashes for child assets, parent template resolution, no PHP errors, all block/form/media references resolve, old content counts unchanged.  
**ROLLBACK:** deactivate child theme and restore B/per-record snapshots.

## 8. Blog, WooCommerce, media and SEO behavior

- Blog: deploy archive/single/category/search templates that query existing cloned records. Never import duplicate posts. Confirm the root permalink structure remains effective.
- WooCommerce: keep active. Let Arden/Flatsome templates wrap existing product data only after checkout/account/cart/payment integrations are inventoried. Rank Math remains schema owner; disable duplicate product schema only after rendered comparison.
- Media: retain production uploads/attachments. Add Arden assets through Media Library/import with checksums; never copy local attachment IDs. Record source file→staging attachment ID→usage mappings.
- Rank Math: preserve cloned settings/tables/meta. Install/activate legitimate Pro on staging only if version compatibility and owner license allow. Export before changes. Configure one metadata/schema owner, preserve canonicals/sitemap/breadcrumb/local SEO and keep redirects unchanged until approved.

## 9. Forms and staging side-effect controls

- Keep CF7 `skip_mail: on` or use an allow-listed test mailbox that cannot reach production recipients.
- Disable WooCommerce transactional email, payment capture, stock synchronization, CRM/webhook integrations and external automation on staging.
- Before production enablement, separately verify recipient, domain-aligned From, Reply-To, SMTP authentication, SPF/DKIM/DMARC and test delivery authorization.

## 10. Known SEO defect plan

| Defect | Classification | Staging work | Cutover condition |
|---|---|---|---|
| HTTP serves 200 | FIX AT CUTOVER | Model/test one-hop HTTP/www→HTTPS non-www rules on staging/server fixture | Server backup, full variant crawl and rollback rule ready |
| `/tin-tuc/` 404 vs `/category/tin-tuc/` | FIX DURING STAGING | Keep category archive authoritative; remove staged assumptions/links to `/tin-tuc/` unless separately approved | No redirect is currently approved |
| `/product-category/ao-thun/` → one product | REQUIRES MORE EVIDENCE | Export Rank Math redirect/taxonomy records and test intent | Backlink/admin/owner decision required |
| Public UX Block sitemap URL | REQUIRES MORE EVIDENCE | Inspect block usage and Rank Math post-type settings | Backlink/index evidence before noindex/exclusion; no 410 |

## 11. Restore point C — integrated staging before cutover

**PRECONDITION:** integration complete; no unresolved P0/P1; acceptance run ready.  
**BACKUP:** full staging DB/files/config/checksums/URL map labeled `C-post-Arden-pre-cutover`.  
**ACTION:** freeze staging configuration; record versions, IDs, hashes and approved deltas.  
**VALIDATION:** restore C to an isolated target and execute smoke plus protected-URL checks.  
**ROLLBACK:** restore C for cutover retry; restore B to abandon Arden integration.

## 12. Staging acceptance matrix

The 21 Arden components run at 1440, 1024, 768 and 390 pixels: 84 fresh combinations. Validate expected HTTP status, visible content/structure/visual fidelity, responsive overflow, interactions, Header/Footer, forms, images/assets, console errors and mixed content.

In addition:

- Individually test all 14 CRITICAL/HIGH GSC URLs against production evidence.
- Crawl all 110 protected rows in `TASK09_6_URL_PROTECTION_LIST.md` and all 138 matrix rows.
- Confirm 55/55 posts and 51/51 product URLs, content types, canonicals and intended indexability.
- Compare title, description, robots, canonical, OG, H1, schema types, body/content fingerprints, internal links and image status.
- Validate sitemap membership/counts, robots protection on staging, no sitemap submission, no localhost/staging URL leakage into production-bound data.
- Test WooCommerce archive/product/cart/account/checkout without live payment or mail side effects.
- Test CF7 Contact/Quote validation with mail locked.
- Run PHP lint, child-theme static checks, WordPress debug/error log scan, link crawl, media scan and `git diff --check`.

Gate: P0=0, P1=0; all CRITICAL/HIGH exact-preservation checks PASS; protected URL status/canonical/content parity PASS; 84/84 Arden combinations PASS; forms/commerce/system states PASS or explicitly owner-blocked without production side effects.

## 13. Controlled cutover design — do not execute

1. Approve acceptance evidence, final URL decisions, maintenance window, rollback owner and indexing decision.
2. Freeze production content/orders at the declared scope; record start time.
3. Create and verify a fresh production database/files/config backup.
4. Synchronize only approved deltas. Never replace production with the local database. For active WooCommerce, define order/customer delta handling before freeze.
5. Install/verify licensed parent and child theme; migrate approved staging-generated component records with relationship mapping.
6. Perform serialized-safe staging→production replacement only on imported staging-origin records/tables where required; dry-run first. Do not blanket-rewrite the authoritative production database.
7. Activate the child theme and approved settings; keep indexing decision manual.
8. Activate only separately approved one-hop redirects; none are approved at Task 09.6.
9. Purge WordPress/LiteSpeed/CDN/browser caches; re-save permalinks only if the approved plan requires it.
10. Run critical smoke: homepage, 14 CRITICAL/HIGH URLs, contact/quote, blog archive/posts, products and transactional safeguards.
11. Run canonical/robots/schema/sitemap/mixed-content/internal-link checks.
12. Owner explicitly decides when to lift maintenance/noindex controls. Do not enable automatically.

Rollback triggers: any CRITICAL/HIGH URL changes unexpectedly; widespread 4xx/5xx; wrong canonical/robots; broken product/blog/media data; PHP fatal; checkout/form side effect; redirect chain/loop; unapproved indexing; or recovery time exceeds the approved window.

Rollback action: re-enable maintenance, restore the fresh production files/database/config snapshot as one consistent set, revert DNS/cache only if separately changed, purge caches, then verify protected URLs and data counts. Preserve incident evidence.

### Destructive-operation controls

| Operation | PRECONDITION | BACKUP | ACTION | VALIDATION | ROLLBACK |
|---|---|---|---|---|---|
| Production content/order freeze | Written owner approval, window and responsible person | Fresh A-equivalent snapshot and live counts | Enable only the approved freeze scope | Confirm no untracked writes/orders; timestamp recorded | Remove freeze if cutover has not mutated data |
| Final DB/content synchronization | Staging acceptance and commerce delta policy PASS | Fresh production DB plus C | Synchronize only approved delta set or promote consistent approved clone | Table/record/order counts and protected content parity | Restore fresh production DB/files as one set |
| Production serialized URL replacement | Offline cutover DB, exact old/new hosts, reviewed dry-run | Fresh DB and dry-run log | Serialized-aware replacement; skip GUID; no naive SQL | Zero staging/localhost references; correct home/siteurl and sampled serialization | Restore fresh DB snapshot |
| Child-theme activation/settings assignment | Parent/dependencies compatible and hashes verified | Theme/options/theme-mod snapshots | Activate Arden child and assign approved Header/Footer/menu settings | Front/admin/PHP logs and critical smoke pass | Reactivate prior theme and restore option snapshots |
| Redirect activation | Each redirect separately approved with backlink/GSC evidence | Export Rank Math/server/CDN rules | Add only one-hop relevant rules | Source/destination/status/chain/loop crawl | Restore redirect export/rules |
| Cache purge | Correct origin/config active | Cache configuration snapshot where applicable | Purge WordPress/LiteSpeed/CDN caches | New assets/headers visible; no stale canonical/redirect | Restore configuration; caches themselves are regenerated |
| Indexing-control change | Owner approval after full smoke and canonical/robots review | Pre-change robots/options/SEO export | Change only the approved staging/production index setting | robots/meta/header/sitemap inspection | Restore prior controls immediately |

## 14. Stop conditions

Stop before cloning if backup restoration, staging isolation, credentials, storage, licenses or ownership are unverified. Stop before cutover if backlink-dependent decisions, redirect approvals, commerce delta handling, production mail, acceptance results or rollback rehearsal remain unresolved.

Task 09.6 authorizes no action in this runbook.
