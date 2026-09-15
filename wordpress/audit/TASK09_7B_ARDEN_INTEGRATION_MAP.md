# TASK 09.7B — Arden Integration Map

All actions are plans only. Production-derived staging IDs remain authoritative; local IDs are never reused.

| LOCAL SOURCE | CURRENT STAGING EQUIVALENT | TARGET SLUG | ACTION | CONTENT PRESERVATION | SEO PRESERVATION | MEDIA ACTION | FORM DEPENDENCY | RISK |
|---|---|---|---|---|---|---|---|---|
| Home | `/staging/` | `/` | REPLACE CONTENT KEEP URL | Snapshot old Home and metadata | Keep URL; compare title/meta/schema | Remap imported media | CTA/contact dependencies | HIGH |
| About | `/staging/gioi-thieu/` | `/gioi-thieu/` | REPLACE CONTENT KEEP URL | Snapshot existing page | Preserve existing URL/meta until approved | Reuse/import by checksum | None | HIGH |
| Services hub | `/staging/dich-vu/` | `/dich-vu/` | REPLACE CONTENT KEEP URL | Snapshot existing service content | Preserve URL and relevant SEO | Remap service media | CTA links | HIGH |
| T-shirt service | Existing pages/posts/products overlap | `/dich-vu/may-ao-thun/` | REVIEW REQUIRED | Do not discard existing service assets | Arden GSC/content-intent review required | Import selectively | Quote CTA | HIGH |
| Shirt service | Products/categories overlap | `/dich-vu/may-ao-so-mi/` | REVIEW REQUIRED | Preserve product/taxonomy content | Cannibalization review | Import selectively | Quote CTA | HIGH |
| Pants service | Existing catalog/content unknown | `/dich-vu/may-quan/` | REVIEW REQUIRED | Admin search required | SEO mapping required | Import selectively | Quote CTA | MEDIUM |
| Jacket service | Existing catalog/content unknown | `/dich-vu/may-ao-khoac/` | REVIEW REQUIRED | Admin search required | SEO mapping required | Import selectively | Quote CTA | MEDIUM |
| Fabric Guide | No exact page confirmed | `/bang-vai/` | CREATE NEW | Keep old size/product guidance pages | Unique-intent review | Import with staging IDs | None | MEDIUM |
| Techpack Guide | `/lam-rap-va-may-mau-ao-dich-vu-uy-tin-tai-xuong-may/` overlaps | `/huong-dan-techpack/` | MERGE | Preserve valuable existing copy/URL pending SEO data | Do not redirect without GSC/backlinks | Reuse/remap | Quote CTA | HIGH |
| Manufacturing | `/xuong-may-arden-don-vi-may-thoi-trang-uy-tin/` overlaps | `/nang-luc-san-xuat/` | REVIEW REQUIRED | Preserve existing factory page | Decide keep-old-url vs keep-both using Arden data | Reuse factory media | CTA | HIGH |
| Projects archive | No public equivalent confirmed | `/du-an/` | CREATE NEW | No fabricated records | New archive controls | Import approved media | None | MEDIUM |
| Project single | No public equivalent confirmed | `/du-an/*` | DO NOT IMPORT | Deploy template only | No demo canonical/indexing | Approved project media only | None | LOW |
| Categories | `/tin-tuc/` and product categories | Existing slugs | USE EXISTING | Existing terms/posts/products drive template | Preserve category URLs/meta | Reuse | None | HIGH |
| Search | Existing WordPress search | `?s=` / accepted route | USE EXISTING | Existing records remain searchable | Preserve noindex policy until verified | Reuse | None | LOW |
| FAQ | No exact page confirmed | `/faq/` | CREATE NEW | None displaced | New-page metadata later | Import with staging IDs | None | LOW |
| News/archive/singles | 42 posts and `/tin-tuc/` | Existing root post slugs/archive | USE EXISTING | Never import duplicate posts | Preserve all existing article URLs | Preserve featured images | None | HIGH |
| Quote | `/bao-gia-thiet-ke-va-san-xuat-arden/` | Existing URL initially | MERGE | Snapshot existing quote content/form | Keep current URL pending SEO map | Remap | CF7 Quote | HIGH |
| Contact | `/lien-he/` plus detailed contact page | `/lien-he/` | MERGE | Preserve NAP/forms and both URLs pending intent review | No redirect without evidence | Reuse/remap | CF7 Contact | HIGH |
| Policies | No sitemap equivalent confirmed | `/chinh-sach/` | CREATE NEW | Legal review | New-page metadata later | Minimal | None | MEDIUM |
| Careers | No sitemap equivalent confirmed | `/tuyen-dung/` | CREATE NEW | Owner-approved roles only | New-page metadata later | Import approved media | None | LOW |
| 404 template | Existing 404 | system 404 | REPLACE CONTENT KEEP URL | Keep HTTP 404 behavior | No homepage redirect | Theme assets | None | MEDIUM |

Shared objects: install child theme 2.0.1 only after isolation/backup; import eight UX Blocks with new IDs; merge Header/Footer/menus after snapshots; import 21 Arden attachments by checksum; import CF7 definitions with new IDs and mail lock; retain existing Posts/Products/taxonomies.
