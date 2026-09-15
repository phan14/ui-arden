# TASK 09.7A — Migration Target Correction

Date: 2026-08-27  
Mode: documentation and public read-only preflight only.

## Authoritative correction

The previous Task 09.7 migration-target assumption is:

**SUPERSEDED — WRONG MIGRATION TARGET**

The Arden rebuild target is `ardenstyle.vn`, not `xuongmaygiatot.vn`.

```text
WORKSTREAM A — ARDEN REBUILD
http://localhost/mytest
  → protected staging.ardenstyle.vn (or an explicitly approved hosting staging URL)
  → Arden QA
  → https://ardenstyle.vn

WORKSTREAM B — XUONGMAYGIATOT SEO
https://xuongmaygiatot.vn
  → remains unchanged production
  → no Arden migration, no theme replacement, no redirect, no domain merge
```

No redirect is authorized between the two domains in either direction.

## Historical document disposition

Historical reports are retained. The correction below controls how they may be used.

| Document/group | Incorrect or superseded statement | Correct disposition |
|---|---|---|
| `TASK09_3_REPORT.md` | Target was unknown; later work incorrectly resolved it as `xuongmaygiatot.vn` | Keep as generic preflight history. Resolve its target placeholders to protected Arden staging; note `ardenstyle.vn` is an existing WordPress site, not an empty destination |
| `TASK09_3_MIGRATION_MANIFEST.md` | Scenario was undetermined; full local DB import remained conditionally possible for an empty target | For Arden, use existing-site/selective controlled replacement. Do not overwrite current `ardenstyle.vn` without its own inventory, backup and URL map |
| `TASK09_3_URL_REPLACEMENT_PLAN.md` | Generic `STAGING-HOST` was unresolved | Source remains local `http://localhost/mytest`; future target is the explicitly approved Arden staging URL, never a `xuongmaygiatot.vn` host |
| Task 09.4 files | Correctly audit `xuongmaygiatot.vn`, but their route recommendations were later treated as Arden deployment constraints | Retain as future SEO strategy research for Workstream B only; do not use as Arden migration inventory |
| Task 09.5 files | GSC evidence and the 138-row matrix belong to `xuongmaygiatot.vn` | Retain as Workstream B SEO evidence only; 55 posts/51 products are not Arden deployment requirements |
| `TASK09_6_REPORT.md` | Names `xuongmaygiatot.vn` as primary domain and recommends integrating Arden into its clone | Superseded for execution; architecture target must be re-derived from current `ardenstyle.vn` |
| `TASK09_6_CONTROLLED_MIGRATION_RUNBOOK.md` | Clones/replaces URLs from `xuongmaygiatot.vn` and preserves its WooCommerce/blog corpus for Arden | Do not execute. Its backup/rollback/safety patterns may be reused only after replacing the source inventory with an Arden-specific audited plan |
| `TASK09_6_URL_PROTECTION_LIST.md` | Treats 55 `xuongmaygiatot.vn` posts and 51 products as Arden cutover protection requirements | Workstream B reference only; not an Arden protection list |
| `TASK09_6_ARDEN_PAGE_INTEGRATION_MAP.md` | Maps Arden pages into `xuongmaygiatot.vn` URLs such as `/dich-vu-may-mac/` and its news archive | Do not execute; build a new integration map against current `ardenstyle.vn` URLs and records |
| `TASK09_7_REPORT.md` | Declares production as `xuongmaygiatot.vn`, requests staging for that site and carries 110/55/51 checks | Marked with a superseded banner. Its access blocker is historical and its target/counts are invalid for Arden |

The Task 09.4/09.5 findings remain valid observations about `xuongmaygiatot.vn`; the error was promoting them into the Arden deployment architecture.

## Workstream A — Arden rebuild

### Sources and targets

- Validated build source: `http://localhost/mytest/` and Arden child theme 2.0.1.
- Required staging: `staging.ardenstyle.vn` or another owner-approved, isolated Arden staging environment.
- Final production target: `https://ardenstyle.vn`.
- Current `ardenstyle.vn` must be backed up and audited before replacement because it is an existing indexed WordPress/WooCommerce site.

### Correct staging model

Do not assume a fresh/empty WordPress target. The default safe model is:

1. Capture and restore-test the current `ardenstyle.vn` files, database, uploads, configuration and SEO/redirect state.
2. Clone current `ardenstyle.vn` into protected Arden staging, or create an isolated staging copy using the host’s verified existing-site clone facility.
3. Protect staging with TLS, authentication, noindex, robots controls, no sitemap/GSC submission and outbound mail/payment/webhook suppression.
4. Audit and map existing Arden URLs/records against the validated local 21-route build.
5. Integrate the local Arden theme/pages selectively using staging-generated IDs and serialized-safe URL handling.
6. Preserve or redirect current Arden URLs only through an Arden-specific, evidence-backed decision matrix.
7. Complete visual/runtime/SEO/content/rollback QA before proposing production replacement.

The alternative of replacing the current Arden database is prohibited until evidence proves it safe and every existing record/URL has an approved preservation action.

## Workstream B — XUONGMAYGIATOT SEO

- `xuongmaygiatot.vn` remains the existing production SEO site.
- Do not import Arden Pages, UX Blocks, child theme or local database into it.
- Do not change its theme, content, URL structure, Rank Math settings, products, posts, DNS or indexing.
- Do not redirect it to `ardenstyle.vn`, and do not redirect `ardenstyle.vn` to it.
- Task 09.4/09.5 artifacts may inform a separate future content/SEO improvement project only after explicit authorization.

## Current public Arden production baseline

Read-only inspection on 2026-08-27 found:

| Item | Public result |
|---|---|
| Homepage | HTTP 200; title `Xưởng May Arden | Chuyên May Local Brand & Quần Áo Shop` |
| Platform | WordPress 6.8.8 |
| Theme assets | Flatsome referenced publicly |
| Canonical | Self-canonical `https://ardenstyle.vn/` |
| Robots meta | `follow, index` with large image preview |
| Meta description | Present |
| Structured data | JSON-LD present |
| robots.txt | HTTP 200 |
| Sitemap | Rank Math-style sitemap index; `/wp-sitemap.xml` resolves to it |
| Post sitemap | 42 URLs |
| Page sitemap | 12 URLs |
| Product sitemap | 62 entries, including the current commerce archive where applicable |
| Category sitemap | 1 URL (`/tin-tuc/`) |
| Product-category sitemap | 13 URLs |
| Video sitemap | 3 URLs |
| Local sitemap | 1 KML URL |
| Public plugin assets | WooCommerce, Contact Form 7 and other plugins visible; not a complete active-plugin inventory |

These are sitemap/public-HTML counts, not authenticated WordPress database counts and not yet a final URL migration map.

## What must be preserved from current ardenstyle.vn

Before any replacement, create an Arden-specific inventory containing:

| Layer | Required preservation evidence |
|---|---|
| URLs | Every sitemap URL, internally linked URL, GSC landing URL, redirect source, indexed URL and backlink destination; status/canonical/indexability/title/H1/action mapping |
| Posts/Pages/Products | IDs, slugs, statuses, parents, authors, dates, content, excerpts, taxonomies, featured images, revisions where required and local/new target mapping |
| SEO metadata | Rank Math titles/descriptions, robots/canonical overrides, OG/Twitter fields, schema, breadcrumbs, local SEO and sitemap configuration |
| Media | Attachment IDs, upload paths/URLs, checksums, metadata, alt/captions, dimensions, featured usage and externally linked media |
| Backlinks/search evidence | Arden GSC Pages/Queries/Indexing/Sitemaps plus backlink/referring-domain exports; do not reuse GSC values from `xuongmaygiatot.vn` |
| Redirects | Rank Math redirection export plus `.htaccess`, LiteSpeed/CDN/server redirects, source/status/destination/chain ownership |
| WordPress configuration | Permalink structure, home/siteurl, menus, widgets, UX Blocks, forms, users/roles, scheduled actions and relevant options |
| Commerce | WooCommerce products/categories, orders/customer records if retained, payment/webhook/email settings and product schema/sitemap ownership |
| Files/runtime | Uploads, current themes/plugins/mu-plugins/drop-ins, version/license compatibility, `wp-config`-relevant settings and cache/CDN rules |

No current Arden URL may be deleted, merged, redirected or assigned 410 merely because it is absent from the local React route set. The public baseline already proves substantial existing content, product and taxonomy inventories.

## Correct next-step staging requirements

The following must be supplied or confirmed before a staging write operation:

1. Exact approved staging URL; `staging.ardenstyle.vn` is preferred but not assumed to exist.
2. Confirmation of the hosting provider’s staging method or a separate document root.
3. Separate staging database/name/user and confirmation it cannot write to the Arden production database.
4. Authorized hosting/cPanel/SSH/SFTP/WP-CLI/database access delivered securely, never committed to Git.
5. Current `ardenstyle.vn` database/files/config backup method, external storage/retention and isolated restore-test destination.
6. TLS plus Basic Auth/password/IP restriction and staging noindex/robots enforcement.
7. Safe suppression method for CF7/WooCommerce email, payments, webhooks, analytics, CRM and scheduled side effects.
8. GSC export for the `ardenstyle.vn` property and backlink/referring-domain evidence.
9. Authenticated WordPress/Rank Math/WooCommerce/media/menu/redirect inventory access.
10. Licensed Flatsome and Rank Math Pro access outside Git, if required on staging.
11. Owner for backup, staging, SEO decisions and rollback; later cutover window is not authorized here.

## Immediate next task boundary

The next task may create a protected Arden staging clone only after items 1–7 are explicitly available and current Arden backup restoration is verified. It must first clone/audit `ardenstyle.vn`; it must not connect to or clone `xuongmaygiatot.vn`. Local Arden integration remains a subsequent separately authorized step.

No website, database, production file, DNS, redirect or indexing state was modified during Task 09.7A.

ARDENSTYLE STAGING INFORMATION REQUIRED
