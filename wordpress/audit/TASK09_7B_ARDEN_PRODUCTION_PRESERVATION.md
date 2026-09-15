# TASK 09.7B — Current Arden Production Preservation Inventory

No deletion or replacement is authorized. Counts below are public-sitemap counts pending authenticated inventory.

| Component | Public evidence | Classification | Integration rule |
|---|---|---|---|
| 42 post URLs | Production/staging post sitemaps match | PRESERVE | Keep records, slugs, dates, authors, categories, media and SEO fields |
| 12 page URLs | Page sitemaps match | PRESERVE + REVIEW | Map each against the 21-route build before replacing content |
| 62 product-sitemap entries | Product sitemaps match | PRESERVE | Keep WooCommerce records, URLs, media, taxonomy and schema |
| 1 news category `/tin-tuc/` | Category sitemap | PRESERVE | Use existing archive/permalink unless Arden-specific SEO map approves change |
| 13 product categories | Product-category sitemap | PRESERVE | Keep slugs/term metadata and archive behavior |
| 3 video sitemap URLs | Video sitemap | PRESERVE + REVIEW | Retain embedded media/schema or document approved replacement |
| Local KML | Local sitemap | PRESERVE + REVIEW | Preserve NAP/location data until business verification |
| Media Library/uploads | Images render publicly; authenticated count absent | PRESERVE | Clone files/attachment records; checksum and usage inventory required |
| SEO metadata/schema | Rank Math-style sitemap and JSON-LD publicly present | PRESERVE | Export all settings/meta/redirects before any SEO plugin change |
| Redirects | Not enumerable publicly | REVIEW REQUIRED | Export Rank Math plus server/LiteSpeed/CDN rules |
| Menus/Header/Footer | Render publicly | PRESERVE + REVIEW | Snapshot structure/settings and merge Arden navigation deliberately |
| Contact Form 7 | Public plugin asset present | PRESERVE + REVIEW | Export forms/mail; disable outbound mail before integration |
| Users/roles | Not public | PRESERVE + REVIEW | Authenticated inventory; protect credentials/PII |
| UX/reusable blocks/widgets | Not enumerable publicly | PRESERVE + REVIEW | Export IDs/content/usage and remap imported Arden objects |
| WooCommerce orders/customers/settings | WooCommerce public state present | PRESERVE | Never overwrite with local DB; suppress staging side effects |
| Current theme/plugins | Flatsome and visible plugin set | PRESERVE + REVIEW | Record exact versions/licenses/compatibility in admin/hosting |

## Existing Page URL inventory

```text
/
/ao-thun-dong-phuc-doi-tac-tin-cay-cho-doanh-nghiep/
/lua-chon-size-xuong-may-arden/
/lien-he-tung-muc-chi-tiet-san-pham/
/bao-gia-thiet-ke-va-san-xuat-arden/
/xuong-may-gia-tot-chuyen-si-ao-thun-thiet/
/dich-vu/
/lam-rap-va-may-mau-ao-dich-vu-uy-tin-tai-xuong-may/
/gioi-thieu/
/xuong-may-arden-don-vi-may-thoi-trang-uy-tin/
/cua-hang-xuong-may-arden/
/lien-he/
```

GSC and backlink data for `ardenstyle.vn` are still required before any merge, redirect or removal decision.
