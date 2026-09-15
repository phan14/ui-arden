# TASK 09.5 — GSC-Based SEO Preservation Report

Audit date: 2026-08-27  
Primary domain: `https://xuongmaygiatot.vn`  
Mode: analysis/documentation only; no production changes.

## Outcome

The GSC export provides enough evidence to design a preservation-first controlled migration, but it does not authorize deployment or destructive URL decisions. The recommended architecture is a protected clone of production with controlled theme/page integration and content/database preservation. A full WordPress/database replacement is rejected.

## GSC evidence

- Date range: 2025-04-25 through 2026-08-24 (filter label: 16 months).
- Daily chart: 487 rows, 1,266 clicks, 67,673 impressions.
- Pages: 132 raw rows normalized into 94 logical URLs; Page-table sum 1,278 clicks / 82,896 impressions.
- Queries: 689 rows; Query-table sum 342 clicks / 32,679 impressions.
- Different dimension totals are reported separately because GSC aggregation/privacy behavior differs.
- Final joined matrix: 138 URLs — 3 CRITICAL, 11 HIGH, 11 MEDIUM, 69 LOW and 44 UNKNOWN.

## Highest-value landing pages

The homepage leads with 613 clicks / 35,100 impressions. Other critical pages are `/xuong-may-quan-ao-so-luong-it-tai-tp-hcm/` (153 base clicks plus high fragment-level impressions) and `/dich-vu-may-mac/thiet-ke-thoi-trang-theo-yeu-cau/` (119/1,777). Eleven additional normalized URLs are HIGH, led by existing service pages and root-level commercial posts. They must retain their exact production URLs.

## Highest-value queries

Top click queries are `xưởng may` (75), `xưởng may quần áo thiết kế số lượng it` (36), `xưởng may gia công tphcm` (33), `xưởng may gia công` (31), `xưởng may thời trang` (24) and `xuong may` (22). Commercial/service intent dominates. The 0.39% CTR on 2,832 impressions for `xưởng may gia công theo yêu cầu` is an improvement opportunity, not a reason to create a duplicate route.

## Posts and products

- Preserve all 55 sitemap posts and their root-level permalinks. At least 26 article-like landing rows have clicks; aggregate evidence is about 420 clicks / 26,234 impressions.
- Preserve all 51 product URLs, `/san-pham/`, product taxonomies and WooCommerce data. Product detail/archive rows contribute 25 clicks / 1,796 impressions in the export; absence for other products is not deletion evidence.
- No post or product rewrite, merge, redirect or deletion occurs in this task.

## Route decisions

- Keep `/` and replace only the design/content selectively after metadata/schema capture.
- Use `/xuongmaygiatot-vn-ve-xuong-may-arden/` for the new About presentation instead of creating a competing `/gioi-thieu/` by default.
- Use `/dich-vu-may-mac/` as the service hub instead of forcing `/dich-vu/`.
- Preserve the high-performing nested service URLs; review new service routes for different intent before creating them.
- Keep `/category/tin-tuc/`; `/tin-tuc/` currently returns 404 and should not replace the archive without a separate approved decision.
- Keep `/lien-he/` exactly.
- Keep the existing policy URL and treat a new policy hub as a different-intent decision.
- No URL is approved for MERGE + 301, 301 REDIRECT or 410 in this task.

## Known production SEO issues

| Issue | SEO impact | GSC evidence | Future recommendation | Priority |
|---|---|---|---|---|
| HTTP homepage returns 200 | Duplicate protocol/crawl surface | No explicit HTTP landing row in export | After server backup, enforce one-hop HTTP→HTTPS and test all variants | High before cutover |
| `/tin-tuc/` is 404; category archive exists | New route conflict/possible soft navigation error | `/category/tin-tuc/`: 2 clicks/163 impressions; pagination also appears | Preserve category archive; decide route only with internal-link/admin review | High |
| `/product-category/ao-thun/` redirects to one product | Semantically unrelated taxonomy redirect risk | No exact GSC row | Export Rank Math redirects and taxonomy/backlink data; replace only after approval | High |
| Sitemap exposes `/blocks/danh-sach-dich-vu/` without metadata | Thin/technical URL in index discovery | No exact GSC row | Review UX Block usage and backlinks; likely noindex/exclude, not 410 without evidence | Medium |

## Architecture recommendation

Choose option C: create an access-controlled, noindex production clone and perform a controlled database/content merge. Preserve the existing database, content IDs, root post permalinks, WooCommerce records, uploads, taxonomies, menus and Rank Math metadata. Integrate the validated Arden child theme and approved new pages as Drafts on the clone. Run URL/SEO parity, redirects, forms, commerce, media and rollback testing before proposing cutover.

Do not perform a full database replacement. Do not use the current local/staging database as the production source of record.

## Remaining evidence before destructive decisions or cutover

- Backlink/referring-domain and linked-page export.
- GSC page-query pairing if available, Indexing/Coverage and sitemap reports.
- Analytics organic landing-page conversions/revenue.
- Authenticated WordPress content/taxonomy/media/menu export.
- Rank Math metadata/schema/redirection export.
- Server/LiteSpeed/CDN redirect and permalink configuration.
- Verified full backup and rollback restoration record.

BACKLINK REVIEW REQUIRED for LOW/UNKNOWN URLs and any future merge, redirect or 410 proposal. This does not block preservation-first migration design; it blocks destructive URL finalization.

No production, DNS, Rank Math, canonical, sitemap, robots, content, redirect or `ardenstyle.vn` change was made.

READY TO DESIGN CONTROLLED MIGRATION
