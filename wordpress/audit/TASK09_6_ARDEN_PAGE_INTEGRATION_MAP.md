# TASK 09.6 — Arden Page Integration Map

The cloned production database is authoritative. Never import local IDs directly. Existing production records are edited only on protected staging after record-level backup; new records receive staging IDs and all media/block/form relationships are remapped.

| Arden component/route | Production authority/target | Decision | Integration rule | SEO/content safeguard |
|---|---|---|---|---|
| Home `/` | Existing front page `/` | REPLACE CONTENT OF EXISTING PAGE WHILE KEEPING URL | Back up existing page/postmeta; apply validated Arden Home UX content to the existing record | Preserve URL, title/description/canonical/schema until approved comparison |
| About `/gioi-thieu` | `/xuongmaygiatot-vn-ve-xuong-may-arden/` | REPLACE CONTENT OF EXISTING PAGE WHILE KEEPING URL | Adapt Arden About content to production record; do not create duplicate default slug | Preserve established URL and metadata |
| Services `/dich-vu` | `/dich-vu-may-mac/` | REPLACE CONTENT OF EXISTING PAGE WHILE KEEPING URL | Adapt Arden Services hub to production record | Preserve hub URL and internal equity |
| T-shirt `/dich-vu/may-ao-thun` | Overlaps existing service/pages/posts | REVIEW REQUIRED | Import as Draft only after query/cannibalization mapping; otherwise merge relevant modules into approved old URL | Never redirect a successful old URL for route consistency |
| Shirt `/dich-vu/may-ao-so-mi` | Overlaps existing product/service content | REVIEW REQUIRED | Draft-only candidate; verify distinct B2B service intent | Protect product and service URLs |
| Pants `/dich-vu/may-quan` | No exact public authority confirmed; thematic overlap exists | REVIEW REQUIRED | Draft-only candidate after admin/content inventory | No publication before cannibalization review |
| Jacket `/dich-vu/may-ao-khoac` | No exact public authority confirmed; thematic overlap exists | REVIEW REQUIRED | Draft-only candidate after admin/content inventory | No publication before cannibalization review |
| Fabric `/bang-vai` | No exact public route confirmed | CREATE NEW PAGE | Import UX content as Draft; remap media IDs | Validate unique intent and canonical before publish |
| Techpack `/huong-dan-techpack` | No exact public route confirmed | CREATE NEW PAGE | Import as Draft with staging ID | Review overlap with “may theo mẫu/theo yêu cầu” posts |
| Manufacturing `/nang-luc-san-xuat` | No exact public route confirmed | CREATE NEW PAGE | Import as Draft; use production media or approved new media | Protect existing factory-intent posts |
| Projects `/du-an` | No public project archive found | CREATE NEW PAGE / CPT ARCHIVE | Register CPT through child theme; import no fabricated production projects | Confirm no hidden legacy CPT slug conflict |
| Case Study `/du-an/*` | Project CPT single template | DO NOT IMPORT CONTENT RECORDS | Deploy template; production-approved Projects only | No local demo record IDs/content |
| Category `/chuyen-muc/*` | Existing categories; news authority `/category/tin-tuc/` | USE EXISTING PRODUCTION PAGE | Let WordPress archive templates display cloned terms/posts | Do not rewrite category bases in this phase |
| Search `/tim-kiem` / `?s=` | Existing WordPress search | USE EXISTING PRODUCTION PAGE | Deploy accepted search template/route compatibility | No indexability change without Rank Math review |
| FAQ `/faq` | No exact production route confirmed | CREATE NEW PAGE | Import as Draft; preserve native accordion behavior | Unique-intent review before publish |
| News `/tin-tuc` and singles | `/category/tin-tuc/`; 55 root-level posts | DO NOT IMPORT | Use existing posts and archive; deploy templates only | Do not create duplicate post copies or `/tin-tuc/<slug>` permalinks |
| Quote `/bao-gia` | No exact production route confirmed | CREATE NEW PAGE | Import as Draft with remapped CF7 form | Mail remains locked on staging |
| Contact `/lien-he` | Existing `/lien-he/` | REPLACE CONTENT OF EXISTING PAGE WHILE KEEPING URL | Back up record; integrate accepted Contact UX and staging form reference | Preserve metadata, URL and NAP until reviewed |
| Policies `/chinh-sach` | Existing `/chinh-sach-si-nguon-hang-quan-ao/` has different/specific intent | KEEP BOTH | Preserve old page; import new policy hub as Draft only after legal/content approval | No old→new redirect |
| Careers `/tuyen-dung` | No exact production route confirmed | CREATE NEW PAGE | Import as Draft with native accordion | Index/publish only after owner content approval |
| 404 | Existing system response/template | REPLACE WITH ARDEN THEME TEMPLATE | Deploy accepted `404.php`; retain HTTP 404 | Never redirect unknown URLs to homepage |

## Shared integration objects

| Object | Handling |
|---|---|
| Eight local UX Blocks | Import selectively as new/remapped staging records; never assume IDs 26/28/30/33/35/37/39/59 |
| Footer | Import the Arden Footer UX Block, remap its new staging ID, then assign through cloned Flatsome settings after snapshot |
| Header Builder | Record cloned production configuration, then apply Arden Header settings manually/repeatably on staging |
| Menus | Preserve cloned menus; create/merge Arden menu items and record old/new assignments; do not replace all menus wholesale |
| CF7 forms | Import approved definitions with staging-generated IDs; keep `skip_mail` or safe recipient; remap page shortcodes |
| Media | Import by file checksum/name manifest; use staging attachment IDs and retain existing uploads/attachment records |
| Theme templates | Deploy child-theme code; templates display existing Posts, Products, taxonomies and search records |

No page is published by this map. Publication and indexing require a later explicit gate.
