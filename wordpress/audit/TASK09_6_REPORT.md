# TASK 09.6 — Controlled Migration Architecture Report

Date: 2026-08-27  
Primary domain: `https://xuongmaygiatot.vn`  
Mode: design/preflight only.

## Recommended architecture

Create an authenticated, noindex clone of the complete production WordPress site, then integrate Arden selectively into that clone. Production remains the source of truth for database IDs, content, uploads, WooCommerce, taxonomies, redirects and Rank Math metadata. The local Task 08.11 database is not a replacement source.

The design rejects a fresh/empty WordPress replacement and rejects a blanket production database import. The later cutover must synchronize only reviewed integration deltas after a content/order freeze and verified rollback point.

## Preservation scope

- Preserve the complete production database, including core relationships, users/comments where relevant, actual WooCommerce/HPOS/action-scheduler tables and Rank Math tables/meta.
- Preserve uploads, attachment records, media URLs, featured images, themes/plugins inventory, mu-plugins/drop-ins and server/configuration evidence.
- Preserve posts, pages, categories, products, product taxonomies, menus, widgets, UX Blocks, redirects, permalinks, canonicals, schema and SEO metadata.
- Merge only the approved Arden Page/UX Block/Header/Footer/menu/form objects.
- Exclude local IDs/demo records, React development files, audits/tools/backups, Git metadata and commercial license files.

## Protected SEO URLs

`TASK09_6_URL_PROTECTION_LIST.md` contains 110 unique explicit rows: all 14 CRITICAL/HIGH URLs plus every one of 55 Posts and 51 Products, with overlaps deduplicated. All 138 Task 09.5 matrix URLs remain within the staging crawl. No URL is approved for deletion, 410, merge or redirect.

## Arden integration

The homepage, About, Services hub and Contact design are applied to their mapped existing production records while retaining authoritative URLs. New Fabric, Techpack, Manufacturing, FAQ, Quote, Policies/Careers candidates enter as Drafts with staging IDs. Four new service routes remain review-required because they overlap established search intent. Existing Blog/Category/Search content is displayed by the Arden templates rather than imported or duplicated. Project templates may be installed, but no demo Project data is promoted.

## Blog and WooCommerce

All 55 posts retain IDs, root permalinks, dates, authors, taxonomies, media and Rank Math fields. All 51 products and the shop/taxonomy ecosystem remain protected; WooCommerce stays active through acceptance. Existing production content drives Arden/Flatsome templates. Commerce mail, payments, webhooks and automation are suppressed on staging.

## Media and theme

Production Media Library records/files remain intact. Arden media is imported by manifest/checksum, assigned new staging attachment IDs and remapped; no local attachment ID is trusted. The licensed Flatsome parent is supplied outside Git. Arden child theme 2.0.1 is installed only after compatibility review; 3.17.7 is the validated baseline, not an instruction to downgrade a production parent blindly. Header Builder, Footer block and menus are merged after option snapshots.

## Rank Math and SEO ownership

Clone and export existing Rank Math tables/settings/postmeta/termmeta/redirections first. Rank Math remains the single metadata/schema owner. Do not overwrite production SEO settings from local. Canonical, schema, breadcrumbs, sitemap, local SEO and redirect behavior are compared before/after on staging. Legitimate Pro installation/licensing is handled by the owner outside Git.

## Known defects

- HTTP 200 duplicate: model on staging; fix only at authorized cutover after server backup.
- `/tin-tuc/` conflict: keep `/category/tin-tuc/` authoritative; correct staged navigation on staging without activating a redirect.
- Product-category redirect: more redirect/taxonomy/backlink evidence required.
- Public UX Block URL: usage/index/backlink evidence required before noindex/sitemap action.

## Security and forms

Staging requires TLS, authentication, `blog_public=0`, noindex/robots protection, no GSC/sitemap submission, and isolation from production mail/payment/webhook/cron side effects. CF7 stays `skip_mail` or uses an allow-listed safe test recipient. Production mail requires a later recipient, From/Reply-To, SMTP and SPF/DKIM/DMARC gate.

## Backups and rollback

Three restore points are mandatory and restoration-tested:

- A: original production files/database/configuration.
- B: validated staging clone before Arden integration.
- C: integrated staging after acceptance and before cutover.

Cutover also requires a fresh production snapshot after freeze. Any CRITICAL/HIGH URL, canonical/indexing, PHP, content/product, form/payment or redirect failure triggers rollback of the consistent files/database/config set.

## Acceptance gate

- 21 Arden routes/components × four breakpoints = 84/84 PASS.
- 14 CRITICAL/HIGH URLs individually PASS.
- 110 protected URL rows and all 138 matrix rows crawled.
- 55/55 posts and 51/51 products preserve path/status/content/SEO intent.
- P0=0 and P1=0; no localhost, mixed content, broken media, raw shortcode, PHP/console or critical interaction defect.
- Forms/commerce pass without live side effects; canonical/schema/sitemap/robots/internal links pass.
- Restore Points A/B/C and rollback rehearsal pass.

## Remaining user inputs

- Staging hostname/environment, access-control method and TLS.
- Hosting/SSH/SFTP/WP-CLI/database access for the next authorized clone task.
- Backup storage location/retention and restore-test target.
- Licensed Flatsome and Rank Math Pro installation access outside Git.
- Maintenance window, content/order freeze policy, rollback owner and recovery-time limit.
- Verified production form recipient/SMTP details for a later production gate.

## Remaining technical blockers before cutover

- Authenticated production plugin/table/content/media/Rank Math/redirect inventory.
- Backlink export for any future destructive URL decision.
- WooCommerce order/customer/payment/webhook delta synchronization policy.
- Server/LiteSpeed/CDN redirect configuration and HTTP→HTTPS rule approval.
- Final decisions for overlapping service routes, product-category redirect and UX Block indexability.

These are execution/cutover inputs, not blockers to creating a read-only-derived protected staging clone in the next separately authorized task. Task 09.6 made no production, DNS, redirect, indexing, mail or `ardenstyle.vn` change.

READY TO CREATE PROTECTED STAGING CLONE
