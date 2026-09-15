# TASK 09.4 — XUONGMAYGIATOT.VN Production SEO Preservation Audit

Audit date: 2026-08-27 (Asia/Bangkok)  
Scope: public, read-only inspection of `https://xuongmaygiatot.vn` and comparison with the staged Arden WordPress route plan.  
Excluded: `ardenstyle.vn`, production admin/database access, deployment, redirects, DNS, publishing, and indexing changes.

## Executive result

`xuongmaygiatot.vn` is an established WordPress/WooCommerce site and must not be replaced as a clean installation. Its Rank Math sitemap currently exposes 55 posts, 11 pages, one UX Block URL, 51 product detail URLs, one product archive occurrence, and one local KML resource. The four HTML sitemaps contain 118 unique public HTML URLs; the sitemap image inventory contains 173 entries / 165 unique image URLs.

The public sample and sitemap crawl found the primary content URLs returning HTTP 200 with self-referencing canonicals, index/follow directives, metadata, and Rank Math schema. Existing root-level post URLs and `/san-pham/.../` product URLs are not represented by the staging route plan and therefore must be preserved with the production database/content, not silently dropped.

This audit is not sufficient to authorize a migration design yet. Search Console, Analytics, backlink/landing-page data, WordPress content exports, Rank Math metadata/redirect exports, complete media records, and server redirect rules were not available. Any MERGE, 301, or 410 decision without those records could destroy SEO equity.

## Public production inventory

| Area | Public evidence | Finding |
|---|---:|---|
| WordPress | Generator | WordPress 7.1 |
| SEO plugin | Sitemap/head/redirect headers | Rank Math active |
| Posts | `post-sitemap.xml` | 55 indexed URL entries |
| Pages | `page-sitemap.xml` | 11 indexed URL entries |
| Products | `product-sitemap.xml` | 51 product detail URLs plus `/san-pham/` archive |
| UX Blocks | `blocks-sitemap.xml` | 1 publicly exposed block URL |
| Local SEO | `local-sitemap.xml` | 1 KML resource |
| Sitemap images | XML image entries | 173 entries; 165 unique URLs |
| Categories | sitemap index | No category or product-category sitemap listed |
| Portfolio/projects | sitemap index | No project/portfolio sitemap listed |
| robots.txt | live | General crawl allowed; WordPress/Woo paths restricted; Rank Math sitemap declared |
| Core sitemap | `/wp-sitemap.xml` | Redirects to Rank Math sitemap index |

Counts are public-sitemap counts, not definitive WordPress database counts. Drafts, private records, unattached media, hidden taxonomies, reusable blocks, deleted records, and historical redirects require authenticated exports.

## Metadata, canonical, schema and indexability

- Homepage: 200, self-canonical, index/follow, 136-character description; schema includes `WebSite`, `WebPage`, `SearchAction`, and `ImageObject`.
- `/category/tin-tuc/`: 200, self-canonical, index/follow, description present; schema includes `CollectionPage`, `BreadcrumbList`, `LocalBusiness`, and `WebSite`.
- `/san-pham/`: 200, self-canonical, index/follow, description present; collection/breadcrumb/local-business schema present.
- `/lien-he/`: 200, self-canonical, index/follow, description present; breadcrumb schema present.
- Crawled sitemap content generally has one Rank Math JSON-LD block, internal links, and images. Several post templates did not expose a reliably parsable semantic H1 even though visible headings/content exist; template-level H1 validation is required before cutover.
- Open Graph output is managed in the current Rank Math head and must be exported/preserved per record. Public inspection alone cannot confirm every social image.
- Breadcrumb schema exists on archive/detail samples. Breadcrumb settings and template placement require an authenticated Rank Math/theme export.

## Confirmed production defects or review items

1. `http://xuongmaygiatot.vn/` returns 200 instead of a single permanent redirect to HTTPS. This creates an avoidable protocol duplicate surface. Do not change it until server/CDN and canonical behavior are backed up and a redirect test plan is approved.
2. `www` variants return 301 to the non-www equivalent. HTTPS www correctly targets HTTPS non-www; HTTP www first targets HTTP non-www, leaving the HTTP endpoint live.
3. `/tin-tuc/` currently returns 404. The live indexed news archive is `/category/tin-tuc/`; staging `/tin-tuc/` conflicts with that established route model.
4. `/product-category/ao-thun/` returns a Rank Math 301 to one product (`/san-pham/ao-polo-nam-mau-3/`). This is semantically suspicious and requires redirect-history, GSC, backlink and taxonomy review.
5. `/blocks/danh-sach-dich-vu/` is exposed in the sitemap and returns 200 but lacks title, canonical, robots and schema metadata. It should be reviewed for noindex/sitemap exclusion; no 410 is authorized without traffic/backlink evidence.
6. No category/product-category sitemap is listed despite a publicly indexable news category. Taxonomy inclusion policy needs an authenticated audit.

## Route conflicts with the staged Arden site

| New/staged route | Existing production authority | Safe recommendation |
|---|---|---|
| `/` | `/` | Keep exact URL; selectively replace presentation/content only after backup and metadata capture |
| `/gioi-thieu/` | `/xuongmaygiatot-vn-ve-xuong-may-arden/` | Put the new About content at the established URL; do not publish a duplicate `/gioi-thieu/` by default |
| `/dich-vu/` | `/dich-vu-may-mac/` | Keep the established service hub URL and adapt the staged page to it |
| `/dich-vu/may-ao-thun/` and other new children | five established service/uniform URLs plus overlapping posts | Content-cannibalization review required; do not redirect established pages blindly |
| `/tin-tuc/` | `/category/tin-tuc/` | Keep `/category/tin-tuc/` unless GSC supports a controlled 301; staging `/tin-tuc/` is currently a production 404 |
| `/tin-tuc/<slug>/` | 55 root-level post URLs | Preserve existing root-level permalinks and database records |
| `/chinh-sach/` | `/chinh-sach-si-nguon-hang-quan-ao/` | Preserve the existing policy URL; decide whether the new route is a separate hub only after intent review |
| `/lien-he/` | `/lien-he/` | Keep exact URL and SEO metadata |
| `/du-an/` and project routes | No public project sitemap | New route; confirm no hidden/private legacy CPT conflict in admin |
| `/san-pham/` and 51 product URLs | Existing WooCommerce inventory | Preserve exact URLs and product data; staged build must not remove WooCommerce records |

## Content and subsystem inventory gaps

The following cannot be made complete from public HTML/XML and must be exported read-only before migration design:

- WordPress Pages/Posts/Products/CPTs with IDs, statuses, authors, dates, parents and slugs;
- categories, tags, product categories/attributes and term SEO metadata;
- full Media Library attachment records, alt text, captions, sizes, usage and orphan status;
- registered menus, menu locations, widgets, UX Blocks and Flatsome options;
- Rank Math titles/descriptions, canonical overrides, robots overrides, schema templates, local SEO settings and redirection table;
- `.htaccess`/LiteSpeed/CDN redirects, WordPress `home`/`siteurl`, permalink settings and any host-level rewrite rules;
- Search Console performance/pages/indexing/sitemaps and Analytics organic landing pages/conversions;
- external backlink and referring-domain data.

SEARCH CONSOLE DATA REQUIRED.

## Safest migration method (provisional)

Use selective in-place reconstruction on a production clone, not a fresh-database overwrite:

1. Capture full files/database/server/redirect backups and verify rollback restoration.
2. Clone production to an access-controlled, noindex staging environment.
3. Retain the existing production database, post/product IDs, uploads, authors, taxonomies, WooCommerce data, and Rank Math metadata.
4. Install the licensed Flatsome parent separately; deploy only the reviewed child theme and required first-party assets. Do not commit commercial files/licenses.
5. Import or reconstruct new pages as Drafts and map them to approved existing URLs where an authority already exists.
6. Preserve all 55 root-level post URLs, 51 product URLs, the product archive, existing service pages and local sitemap unless a reviewed row explicitly authorizes another action.
7. Export then reconcile menus, UX Blocks, widgets, forms, media IDs, plugin dependencies and SEO settings on staging.
8. Build a redirect set only after GSC/Analytics/backlink evidence and owner review. Test every redirect for one hop, correct intent, no chains/loops and preserved query/fragment behavior.
9. Re-crawl staging with production URL parity, metadata/schema/media/internal-link comparisons and rollback rehearsal before any cutover proposal.

## Approval blockers

- Missing GSC and Analytics landing-page/query data.
- Missing backlink/referring-domain export.
- Missing authenticated WordPress inventory and database backup manifest.
- Missing Rank Math redirect/metadata/schema export.
- Missing server/CDN/LiteSpeed redirect configuration.
- Unresolved `/product-category/ao-thun/` redirect intent.
- Unresolved category and `/tin-tuc/` archive strategy.
- Unresolved per-page mapping for overlapping service/search-intent content.

No production mutation was made during this audit.

MORE SEO DATA REQUIRED BEFORE MIGRATION DESIGN
