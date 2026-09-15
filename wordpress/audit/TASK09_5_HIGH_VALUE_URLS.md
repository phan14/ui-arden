# TASK 09.5 — GSC-Based High-Value URLs

## Classification method

These transparent bands are for migration triage, not revenue claims:

- CRITICAL: at least 100 clicks or 10,000 impressions.
- HIGH: at least 20 clicks or 1,000 impressions.
- MEDIUM: at least 5 clicks or 250 impressions.
- LOW: present in GSC below those bands.
- UNKNOWN: absent from the Page export.

CRITICAL/HIGH URLs default to exact preservation. LOW/UNKNOWN URLs are also preserved unless later backlink, content and index evidence supports an explicit reviewed action.

## CRITICAL

| URL | Clicks | Impressions | CTR | Position | Type | Recommendation | Reason |
|---|---:|---:|---:|---:|---|---|---|
| `/` | 613 | 35,100 | 1.75% | 14.07 | Page | KEEP URL + REWRITE | Primary landing page and largest search footprint |
| `/xuong-may-quan-ao-so-luong-it-tai-tp-hcm/` | 153 | 11,577 normalized | 1.32% | 10.09 | Post | KEEP EXACT URL | Base URL plus GSC fragment rows; strong commercial intent |
| `/dich-vu-may-mac/thiet-ke-thoi-trang-theo-yeu-cau/` | 119 | 1,777 | 6.70% | 13.10 | Page | KEEP EXACT URL | High-click service landing page |

The second row uses normalized totals: the base URL and six fragment variants refer to the same document.

## HIGH

| URL | Clicks | Impressions | CTR | Position | Type | Recommendation |
|---|---:|---:|---:|---:|---|---|
| `/dich-vu-may-mac/xuong-may-xuong-gia-cong-gia-tot/` | 47 | 4,699 | 1.00% | 20.50 | Page | KEEP EXACT URL + improve content/title after capture |
| `/top-10-xuong-may-uy-tin-co-danh-gia-tot/` | 46 | 3,120 normalized | 1.47% | 9.06 | Post | KEEP EXACT URL |
| `/dich-vu-may-theo-mau-tu-a-z-giai-phap-tiet-kiem/` | 38 normalized | 1,010 normalized | 3.76% | 7.64 | Post | KEEP EXACT URL |
| `/xuong-may-quan-ao-the-thao-5-buoc-dat-may/` | 27 | 826 normalized | 3.27% | 19.08 | Post | KEEP EXACT URL |
| `/xuong-may-gia-cong-uy-tin-tai-tp-hcm-4-tieu-chi/` | 25 | 2,307 normalized | 1.08% | 31.47 | Post | KEEP EXACT URL + improve content |
| `/xuong-may-gia-cong-gia-re-uy-tin/` | 23 | 1,009 normalized | 2.28% | 14.61 | Post | KEEP EXACT URL |
| `/xuong-may-gia-cong-theo-yeu-cau-gia-re/` | 22 | 6,287 normalized | 0.35% | 19.40 | Post | KEEP EXACT URL + improve CTR/content |
| `/dich-vu-may-mac/si-quan-ao-gia-tot/` | 21 | 3,799 | 0.55% | 34.49 | Page | KEEP EXACT URL + review intent/content |
| `/tim-hieu-danh-sach-xuong-may-o-vn/` | 20 | 688 | 2.91% | 7.66 | Post | KEEP EXACT URL |
| `/xuong-may-gia-cong/` | 19 | 1,482 | 1.28% | 16.69 | Post | KEEP EXACT URL + improve content |
| `/https-xuongmaygiatot-vn-da-ngam-den-mac-mau-gi/` | 0 | 1,595 | 0% | 60.74 | Post | KEEP pending content/backlink review; do not delete due malformed slug |

## MEDIUM highlights

Medium evidence includes `/lien-he/` (19/868), the Dazy shirt product (12/255), the long textile-industry post (8/315), `/xuong-may-nhan-may-gap-tp-hcm/` (8/415), and `/gia-cong-trong-nuoc-thay-vi-nhap-hang-trung-quoc/` (5/301). Exact metrics and all remaining URLs are in the final matrix.

## Posts and products

- Existing article-like landing rows: 46; 26 have at least one click; aggregate Page-table evidence is about 420 clicks / 26,234 impressions. Preserve the 55 sitemap posts and their root-level permalinks.
- Product detail/archive GSC rows: 23; aggregate evidence is 25 clicks / 1,796 impressions. At least three product pages have material click/impression evidence. Preserve all 51 product records/URLs because absence from this export is not removal evidence.

BACKLINK REVIEW REQUIRED for every proposed merge, redirect or removal, especially LOW/UNKNOWN URLs.
