# TASK 09.4 — High-Value and High-Risk URL Register

The tiers below describe migration/SEO loss risk, not measured traffic. Traffic value is unknown until Search Console, Analytics and backlink exports are supplied.

## CRITICAL

| URL / group | Reason | Required handling |
|---|---|---|
| `https://xuongmaygiatot.vn/` | Primary brand/domain entry and schema root | KEEP EXACT URL |
| `/san-pham/` | Existing indexed WooCommerce archive | KEEP EXACT URL |
| All 51 `/san-pham/<product>/` URLs | Indexed product inventory absent from staged route plan | KEEP EXACT URL and records |
| All 55 root-level post URLs | Indexed content/permalink corpus absent from staged route plan | KEEP EXACT URL and records |
| `/dich-vu-may-mac/` | Existing service hub conflicts with new `/dich-vu/` | KEEP URL + REWRITE CONTENT only after review |
| `/category/tin-tuc/` | Existing indexable archive; new `/tin-tuc/` is 404 | KEEP EXACT URL pending evidence |
| `robots.txt`, `sitemap_index.xml`, local KML | Crawl discovery and local SEO systems | Preserve behavior and validate after clone |

## HIGH

| URL | Reason | Required handling |
|---|---|---|
| `/xuongmaygiatot-vn-ve-xuong-may-arden/` | Established About URL; conflicts with new `/gioi-thieu/` | KEEP URL + REWRITE CONTENT |
| `/lien-he/` | Existing contact/conversion URL matching staged route | KEEP EXACT URL |
| `/xuong-may-dong-phuc-gia-re-xuong-may-arden/` | Commercial-intent standalone page | KEEP; overlap review |
| `/dich-vu-may-mac/dich-vu-may-dong-phuc-gia-tot-xuong-may-adren/` | Existing service URL | KEEP; overlap review |
| `/dich-vu-may-mac/xuong-may-xuong-gia-cong-gia-tot/` | Existing service URL | KEEP; overlap review |
| `/dich-vu-may-mac/thiet-ke-thoi-trang-theo-yeu-cau/` | Existing service URL | KEEP; overlap review |
| `/dich-vu-may-mac/si-quan-ao-gia-tot/` | Existing service URL | KEEP; overlap review |
| `/chinh-sach-si-nguon-hang-quan-ao/` | Existing indexed policy/commercial page | KEEP; new policy-hub intent review |

## MEDIUM

| URL / group | Reason | Required handling |
|---|---|---|
| New staged informational routes with no confirmed legacy equivalent | Useful additions, but no established production authority confirmed | Publish only after cannibalization and internal-link review |
| Rank Math local KML URL | Local entity discovery | Preserve and revalidate coordinates/NAP |

## UNKNOWN / REVIEW REQUIRED

| URL / group | Why unknown | Required evidence |
|---|---|---|
| Each individual post and product | Public indexability is known; clicks, impressions, revenue and backlinks are not | GSC, Analytics, backlink/export data |
| `/blocks/danh-sach-dich-vu/` | Sitemap-exposed technical content with missing metadata | GSC/index coverage/backlinks plus UX Block usage |
| `/product-category/ao-thun/` | Rank Math redirects it to one individual product | Redirect export, taxonomy inventory, GSC/backlinks |
| Other categories/tags/product taxonomies | Not listed in public sitemap | Authenticated term/export and index coverage |
| Project/portfolio records | No public sitemap found | Authenticated CPT inventory |
| Historical/deleted URLs | Not discoverable from current sitemap alone | GSC pages, logs, redirect table and backlink crawl |

SEARCH CONSOLE DATA REQUIRED.
