# Task 09 — Permalink / Route Production Plan

Date: 2026-08-26. Routes validated in Task 08.11 at 84/84 PASS.

---

## Current Permalink Structure

`/%year%/%monthnum%/%day%/%postname%/`

This is the WordPress default date-based permalink structure. Confirm with the business owner before
migration whether this should remain or be changed to /%postname%/ for cleaner SEO-friendly URLs.

IMPORTANT: Permalink structure must be decided BEFORE publication. Changing it after indexing begins
will break existing indexed URLs and require 301 redirects for all previously indexed pages.

RECOMMENDATION: For a garment factory B2B site, /%postname%/ is typically preferable as it produces
cleaner URLs without date segments. Discuss with owner before migration.

---

## Static Pages

| ID | Slug | WordPress URL | Status |
|---:|---|---|---|
| 48 | / | https://production-domain/ | Published (static homepage) |
| 81 | gioi-thieu | /gioi-thieu/ | Draft |
| 82 | dich-vu | /dich-vu/ | Draft |
| 83 | dich-vu/may-ao-thun | /dich-vu/may-ao-thun/ | Draft (child of 82) |
| 84 | dich-vu/may-ao-so-mi | /dich-vu/may-ao-so-mi/ | Draft (child of 82) |
| 85 | dich-vu/may-ao-khoac | /dich-vu/may-ao-khoac/ | Draft (child of 82) |
| 86 | dich-vu/may-quan | /dich-vu/may-quan/ | Draft (child of 82) |
| 87 | nang-luc-san-xuat | /nang-luc-san-xuat/ | Draft |
| 95 | faq | /faq/ | Draft |
| 96 | lien-he | /lien-he/ | Draft |
| 97 | bao-gia | /bao-gia/ | Draft |
| 98 | tuyen-dung | /tuyen-dung/ | Draft |
| 99 | chinh-sach | /chinh-sach/ | Draft |
| 100 | bang-vai | /bang-vai/ | Draft |
| 101 | huong-dan-techpack | /huong-dan-techpack/ | Draft |
| 111 | tin-tuc | /tin-tuc/ | Draft (Posts page target) |

Note: Service sub-pages 83-86 are child pages of Services (82). Their slugs produce
/dich-vu/may-ao-thun/ etc. which match the React source routes exactly.

---

## Dynamic / System Routes

| Route pattern | WordPress mechanism | Template | Task 08.11 status |
|---|---|---|---|
| /du-an/ | Project CPT archive (has_archive=true, slug=du-an) | archive-project.php | PASS |
| /du-an/<slug> | Project CPT single | single-project.php | PASS (validated with seed) |
| /tin-tuc/ | Posts archive / static Posts page | page-tin-tuc.php + home.php | PASS |
| /tin-tuc/<slug> | Single post | single.php | PASS |
| /chuyen-muc/<slug> | Category archive | category.php | PASS (validated with seed) |
| /?s=<query> | WordPress search | search.php | PASS |
| unmatched | 404 | 404.php | PASS (intentional 404 validated) |

---

## Policy Fragment Anchors

The Policies page (ID 99, slug chinh-sach) uses Flatsome native tab anchors for five policy sections:

| Fragment | Policy tab |
|---|---|
| #chinh-sach-bao-mat | Privacy policy |
| #chinh-sach-bao-hanh | Warranty policy |
| #chinh-sach-van-chuyen | Shipping policy |
| #chinh-sach-doi-tra | Returns policy |
| #dieu-khoan-su-dung | Terms of use |

Fragment navigation validated in Task 08.11. These are Flatsome native tabs, not custom JS.

---

## 11 Verified React Alias Redirects — Deferred Implementation

The React source defines alias routes that must be handled by 301 redirects on production.
Do NOT create duplicate WordPress pages for these aliases. `src/App.tsx` is the authoritative
source; `SITE_ROUTE_MAPPING.md` independently records the same mapping. Implementation is deferred
until deployment/configuration and no redirect is created by this document.

| Source route | Destination route | Reason |
|---|---|---|
| `/ve-chung-toi` | `/gioi-thieu/` | React alias for About; preserve legacy inbound URL |
| `/dich-vu/ao-thun` | `/dich-vu/may-ao-thun/` | React alias for canonical T-shirt service |
| `/dich-vu/so-mi` | `/dich-vu/may-ao-so-mi/` | React alias for canonical Shirt service |
| `/dich-vu/quan` | `/dich-vu/may-quan/` | React alias for canonical Pants service |
| `/dich-vu/ao-khoac` | `/dich-vu/may-ao-khoac/` | React alias for canonical Jacket service |
| `/kien-thuc-vai` | `/bang-vai/` | React alias for Fabric Guide |
| `/quy-trinh-may-mau` | `/huong-dan-techpack/` | React alias for Techpack Guide |
| `/xuong-may` | `/nang-luc-san-xuat/` | React alias for Manufacturing |
| `/hoi-dap` | `/faq/` | React alias for FAQ |
| `/nhan-bao-gia` | `/bao-gia/` | React alias for Quote |
| `/tim-kiem` | `/?s=` | React search route maps to native WordPress search; preserve query semantics |

Redirect implementation options:
A. Redirection plugin (wordpress.org/plugins/redirection) — easiest management via admin.
B. Rank Math redirect module only if the selected installed edition supports it.
C. Server-level rules (Nginx location block or Apache .htaccess rewrite rules).

Select one method and configure all 11 alias redirects. Test each with curl -I or browser before launch.
For `/tim-kiem`, the implementation must preserve the search term/query and define/test empty-search behavior.

---

## SEO Route Configuration (Rank Math)

| Route | Rank Math action |
|---|---|
| All published pages | Set noindex: off; set title, description, canonical |
| /?s= search | Set noindex: on |
| 404 | Set noindex: on; exclude from sitemap |
| /du-an/ archive | Set title/description; include in sitemap if projects published |
| /chuyen-muc/<slug> | Index only categories with unique content; noindex thin archives |
| /tin-tuc/ archive | Set title/description; include in sitemap |

---

## Production Actions Required

1. Confirm permalink structure with business owner before migration.
2. Save Settings > Permalinks once after migration (flushes rewrite rules; activates /du-an/ CPT archive).
3. Verify all 15 draft page slugs resolve correctly at the production domain before publication.
4. Implement all 11 alias redirects (301) before or at the same time as publication.
5. Verify /du-an/ archive and /du-an/<slug> single routes after theme activation and permalink flush.
6. Verify category.php, search.php and 404.php system templates render correctly.
7. Verify Policies page fragment anchors work on /chinh-sach/.
8. Configure Search and 404 as noindex in Rank Math.
9. Test /tim-kiem -> /?s= redirect after implementation.
