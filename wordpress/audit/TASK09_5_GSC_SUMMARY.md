# TASK 09.5 — GSC Export Validation and Summary

## Export validation

| Item | Value |
|---|---:|
| Search type | Web |
| UI filter description | 16 months |
| Actual first daily row | 2025-04-25 |
| Actual last daily row | 2026-08-24 |
| Daily rows | 487 |
| Raw Page rows | 132 |
| Normalized Page URLs | 94 |
| Query rows | 689 |
| Daily total clicks | 1,266 |
| Daily total impressions | 67,673 |
| Page-table clicks | 1,278 |
| Page-table impressions | 82,896 |
| Query-table clicks | 342 |
| Query-table impressions | 32,679 |

The Page and Query sums must not be treated as alternate site totals. Search Console dimensions can be limited, privacy-filtered and aggregated differently. The daily chart is the appropriate export-level total; Page/Query tables are used for relative landing-page/query evidence.

## Source headers

- Page: `Trang hàng đầu`, `Lượt nhấp`, `Lượt hiển thị`, `CTR`, `Vị trí`.
- Query: `Truy vấn phổ biến nhất`, `Lượt nhấp`, `Lượt hiển thị`, `CTR`, `Vị trí`.
- Date chart: `Ngày`, `Lượt nhấp`, `Lượt hiển thị`, `CTR`, `Vị trí`.
- Filters: `Bộ lọc`, `Giá trị`.

## Normalization policy

- Normalize scheme to HTTPS and host to non-www for comparison only; this does not change production.
- Lowercase the production path and normalize a missing directory trailing slash.
- Remove fragments because they address sections of the same server document.
- Remove known tracking parameters (`utm_*`, `gclid`, `fbclid`, `msclkid`).
- Retain unknown query parameters because they may identify a genuinely different indexed state.
- Sum clicks and impressions for merged variants; recompute CTR; calculate impression-weighted average position.
- Do not infer that absence from GSC means zero SEO value.

Normalized evidence is stored in `TASK09_5_GSC_NORMALIZED_PAGES.csv`. The source ZIP remains external and was not modified or committed.

## Coverage caveats

The export supplies aggregate Page and aggregate Query tables, not a page-query pair table. Therefore no query is attributed to a particular landing page. Conversion, backlink and revenue data are absent.
