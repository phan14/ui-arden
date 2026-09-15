# Task 09 — Production Deployment Runbook

Date: 2026-08-26.
DO NOT execute migration until all prerequisites pass.
DO NOT publish pages or enable indexing during migration.

Verified source state at Task 09.1: theme 2.0.1; 15 converted pages Draft; `blog_public=0`;
eight Published UX Blocks; one default WordPress sample Post (ID 1, `chao-moi-nguoi`)
Published; CF7 and Classic Editor Active; Akismet installed/inactive; Hello Dolly absent;
Rank Math not installed. Migration into protected staging is distinct from publication/indexing.

Required release order after protected migration:

1. Keep all 15 converted pages Draft and keep `blog_public=0`.
2. Inspect the default Published sample Post; remove, unpublish, or replace it only with owner approval.
3. Verify all business data and obtain legal approval.
4. Install/configure Rank Math or the approved SEO equivalent.
5. Configure production recipients/sender, spam protection, and mail delivery for CF7 173/175.
6. Configure and test all 11 alias redirects.
7. Run visual, responsive, runtime, link, dynamic-state, SEO, and form smoke tests.
8. Publish only individually approved content.
9. Recheck sitemap/canonical/robots/schema/OG and enable indexing last.

---

## 0. Prerequisite Checklist

Complete EVERY item before starting migration:

- [ ] Production domain confirmed (e.g. https://arden.com.vn).
- [ ] HTTPS certificate issued and active on production domain.
- [ ] www vs non-www decision made and DNS configured.
- [ ] Production server PHP version and MySQL version documented.
- [ ] Server meets WordPress and Flatsome minimum requirements.
- [ ] Flatsome license available for production domain activation.
- [ ] All 16 itemized publication blockers from TASK09_PRODUCTION_DATA.md resolved or explicitly scoped away from the affected launch.
- [ ] Production email / SMTP delivery method confirmed.
- [ ] CF7 recipient email addresses confirmed for both forms.
- [ ] Rank Math or approved equivalent SEO solution and edition decided.
- [ ] Permalink structure decision confirmed (date-based vs postname).
- [ ] Redirect implementation method chosen (Redirection plugin / Rank Math / server rules).

---

## 1. Backup (Staging — take immediately before migration)

- [ ] Export full mytest database:
      mysqldump -u root -p mytest > mytest-task09-YYYYMMDD.sql
- [ ] Archive uploads:
      C:\xampp\htdocs\mytest\wp-content\uploads -> uploads-task09-YYYYMMDD.zip
- [ ] Package child theme:
      zip wordpress/flatsome-child/ -> flatsome-child-2.0.1.zip
- [ ] Record git SHA: 5dc2344c920afa87bdf58b713e1963f3dbc78be9
- [ ] Verify all backup files are readable and non-zero size.
- [ ] Verify database backup restores successfully to a test database instance.

---

## 2. Backup (Production — if existing site has data)

- [ ] Back up production database (full SQL export).
- [ ] Archive production wp-content/uploads.
- [ ] Archive production wp-content/themes/.
- [ ] Record production WordPress version, PHP version and active plugin list.
- [ ] Confirm restore access to each production backup.

---

## 3. Migration

### SCENARIO A — New / Empty Production WordPress

- [ ] Install WordPress on production server.
- [ ] Install Flatsome parent theme (licensed). Activate.
- [ ] Upload flatsome-child-2.0.1.zip via Appearance > Themes. Activate Arden Flatsome Child.
- [ ] Install Contact Form 7 from wordpress.org. Activate.
- [ ] Install Rank Math from wordpress.org. Activate. (Configure in Step 10.)
- [ ] Import full database SQL using phpMyAdmin or WP-CLI:
      wp db import mytest-task09-YYYYMMDD.sql
- [ ] Upload wp-content/uploads to production server (mirror directory structure).
- [ ] Verify file permissions on uploads directory (typically 755/644).

### SCENARIO B — Production Has Existing Data

- [ ] Do NOT overwrite the production database.
- [ ] Install Flatsome parent theme (licensed) if not already present. Activate.
- [ ] Upload and activate flatsome-child-2.0.1.zip.
- [ ] Install Contact Form 7. Activate.
- [ ] Install Rank Math. Activate.
- [ ] Export Arden pages (IDs 48, 81-87, 95-101, 111) from staging using WordPress Exporter.
- [ ] Export UX Block posts from staging.
- [ ] Import pages and UX Blocks to production; resolve ID conflicts deliberately.
- [ ] Upload staging uploads/2026/08/ to production; verify attachment metadata in wp_postmeta.
- [ ] Recreate primary navigation menu at primary location.
- [ ] Recreate arden-footer UX Block or verify it imported correctly.
- [ ] Recreate CF7 forms 173 and 175 from wordpress/integrations/contact-form-7/ definitions.

---

## 4. URL / Domain Replacement

MUST use a serialized-safe tool. NEVER use raw SQL text replacement.

Approved method — WP-CLI:

  Dry-run first:
  wp search-replace 'http://localhost/mytest' 'https://production-domain.com' ^
    --all-tables-with-prefix --precise --recurse-objects --dry-run

  Execute after dry-run passes:
  wp search-replace 'http://localhost/mytest' 'https://production-domain.com' ^
    --all-tables-with-prefix --precise --recurse-objects

  Also check for http -> https inconsistencies:
  wp search-replace 'http://production-domain.com' 'https://production-domain.com' ^
    --all-tables-with-prefix --precise --recurse-objects --dry-run

- [ ] Dry-run completed and output reviewed.
- [ ] Live replacement executed.
- [ ] Page source scanned for any remaining localhost references.
- [ ] Page source scanned for mixed content (http:// resources on https:// pages).

---

## 5. WordPress Settings

- [ ] Settings > General > WordPress Address (URL): https://production-domain.com
- [ ] Settings > General > Site Address (URL): https://production-domain.com
- [ ] Settings > Reading > A static page > Homepage: ID 48 (or remapped ID).
- [ ] Settings > Reading > Search engine visibility: checked (blog_public=0, keep non-indexed).
- [ ] Settings > Permalinks: Save once to flush rewrite rules.
- [ ] Verify /du-an/ archive route resolves after permalink flush.
- [ ] If changing permalink structure: decide and set BEFORE any page is published.

---

## 6. Cache Flush

- [ ] Clear WordPress object cache: wp cache flush
- [ ] Clear Flatsome page cache: Flatsome > Performance > Purge Cache.
- [ ] Clear server-level cache (OPcache restart, Redis flush, Varnish ban if applicable).
- [ ] Clear CDN cache if applicable.

---

## 7. Plugin Checks

- [ ] Contact Form 7 6.1.7+ is active.
- [ ] Rank Math is active.
- [ ] Confirm Hello Dolly remains absent (it is not present in the verified staging source).
- [ ] Classic Editor: keep active if editorial workflow requires it; otherwise optional.
- [ ] Akismet: activate and configure if spam protection is required (requires account/API key).
- [ ] Review all active plugins; deactivate any development-only plugins not needed in production.

---

## 8. Header / Footer Checks

- [ ] Header renders at 1440, 1024 and 390px.
- [ ] Top bar shows verified phone, address, hours (NOT demo values 0901 234 567).
- [ ] Logo SVG loads from child theme directory URI (not from localhost path).
- [ ] Primary navigation resolves all links at production domain.
- [ ] Mobile off-canvas menu opens and closes correctly.
- [ ] Sticky header activates on scroll.
- [ ] Footer UX Block renders: brand summary, service menu, verified contact details.
- [ ] Footer map image loads (verify production attachment ID in UX Block content).
- [ ] Footer social links point to verified profiles (no # placeholders).
- [ ] Footer policy links resolve to /chinh-sach/ and its fragment anchors.

---

## 9. Form Configuration

- [ ] Open CF7 Form 173 (Arden Contact).
      Enter verified recipient email.
      Configure reply-to from [your-email] field.
      Remove "skip_mail: on" from Additional Settings.
      Activate Mail tab. Save.

- [ ] Open CF7 Form 175 (Arden Quote).
      Enter verified recipient email.
      Configure reply-to.
      Remove "skip_mail: on" from Additional Settings.
      Activate Mail tab. Save.

- [ ] Test Contact form:
      Fill required fields (name, phone). Submit. Verify mail in recipient inbox.
      Leave required fields empty. Verify validation messages appear.
      Submit invalid email. Verify error message.

- [ ] Test Quote form:
      Fill required fields (name, phone). Select product/quantity options. Submit.
      Verify mail in recipient inbox with all field values.
      Test validation on required fields.

- [ ] Test success message display for both forms.
- [ ] Test error message display for both forms.
- [ ] Activate Akismet or Cloudflare Turnstile for spam protection.

---

## 10. SEO / Rank Math Configuration

- [ ] Run Rank Math Setup Wizard.
      Enter: verified business name, phone, address, social profile URLs.
      Select business type: Local Business.

- [ ] Configure Organization/LocalBusiness schema with owner-approved data.

- [ ] Homepage: Set SEO title, meta description, social image, canonical.

- [ ] Each of the 15 draft pages: Set SEO title, meta description, social image.
      Do this before publishing each page.

- [ ] Project CPT archive (/du-an/): Set title, description; include in sitemap.

- [ ] Posts archive (/tin-tuc/): Set title, description; include in sitemap.

- [ ] Search (?s=): Set noindex: on.

- [ ] 404: Set noindex: on; exclude from sitemap.

- [ ] Category archives: noindex thin archives; index only categories with unique content.

- [ ] FAQ page (ID 95): Enable FAQ schema through Rank Math.

- [ ] Generate sitemap. Verify it contains only production-intended content.

- [ ] Verify robots.txt on production domain includes Sitemap directive.

- [ ] Validate OpenGraph card for Homepage using Facebook Sharing Debugger or similar tool.

---

## 11. Alias Redirect Implementation

Implement 301 redirects for all **11** React alias routes (see TASK09_ROUTE_PLAN.md).
This is deferred deployment/configuration work; no redirect exists merely because it is documented.

- [ ] /ve-chung-toi -> /gioi-thieu/
- [ ] /dich-vu/ao-thun -> /dich-vu/may-ao-thun/
- [ ] /dich-vu/so-mi -> /dich-vu/may-ao-so-mi/
- [ ] /dich-vu/quan -> /dich-vu/may-quan/
- [ ] /dich-vu/ao-khoac -> /dich-vu/may-ao-khoac/
- [ ] /kien-thuc-vai -> /bang-vai/
- [ ] /quy-trinh-may-mau -> /huong-dan-techpack/
- [ ] /xuong-may -> /nang-luc-san-xuat/
- [ ] /hoi-dap -> /faq/
- [ ] /nhan-bao-gia -> /bao-gia/
- [ ] /tim-kiem -> /?s= (search)
- [ ] Verify `/tim-kiem` preserves the intended search query and handles an empty query deliberately.
- [ ] Test each redirect with: curl -I https://production-domain.com/alias-route

---

## 12. Visual Smoke Test (at 1440, 1024, 768 and 390px)

- [ ] Home: 16 sections present, H1 present, no overflow, no broken images.
- [ ] About: H1, H2, factory images, team section present.
- [ ] Services + 4 service sub-pages: H1, H2, H3, service cards present.
- [ ] Manufacturing: H1, H2, factory department cards present.
- [ ] FAQ: accordion opens, tab navigation contained at 390px.
- [ ] Contact: CF7 form renders, validation works, success message shows after test submission.
- [ ] Quote: CF7 form renders, selectors contained at 390px, success message shows.
- [ ] Careers: accordion renders, content present.
- [ ] Policies: 5 tabs present, fragment anchors work.
- [ ] Fabric Guide: category filter buttons work, search input works.
- [ ] Techpack Guide: content renders correctly.
- [ ] News archive: renders with at least one real Post or empty state.
- [ ] Projects archive /du-an/: renders empty state or cards.
- [ ] Category archive: renders correctly.
- [ ] Search /?s=test: results or empty state renders.
- [ ] 404: custom Arden 404 template renders (not WordPress default).
- [ ] Header and Footer consistent across all pages.

---

## 13. Responsive Smoke Test

- [ ] No horizontal overflow at 390px on any published page.
- [ ] No clipped interactive controls at 390px.
- [ ] Mobile off-canvas menu opens and closes.
- [ ] Mobile sticky CTA visible (if phone configured in Customizer > Arden Mobile CTA).
- [ ] Test on a real mobile device (390px-class), not only browser DevTools.

---

## 14. Pre-Indexing Final Gate

All must pass before enabling indexing:

- [ ] blog_public=0 confirmed.
- [ ] All published pages pass smoke test.
- [ ] Forms deliver mail to correct recipient.
- [ ] No localhost URL found in page source.
- [ ] No mixed content warnings (http:// on https:// pages).
- [ ] Canonicals use production HTTPS domain.
- [ ] Sitemap verified at https://production-domain.com/sitemap_index.xml.
- [ ] robots.txt verified at https://production-domain.com/robots.txt.
- [ ] Organization schema validated with Google Rich Results Test.

---

## 15. Enable Indexing

- [ ] Settings > Reading: uncheck "Discourage search engines" (blog_public -> 1).
- [ ] Clear all caches.
- [ ] Add production domain to Google Search Console.
- [ ] Submit production sitemap to Google Search Console.
- [ ] Monitor Search Console for crawl errors in the days following indexing.

---

## 16. Rollback

If the production release fails at any point:

1. Put the site in maintenance mode; disable form traffic.
2. Restore production database from the pre-deployment backup.
3. Restore production uploads without deleting files until restored references are verified.
4. Re-activate previous child theme ZIP if theme was changed.
5. Save Settings > Permalinks; clear all caches.
6. Verify Homepage, menus, Header/Footer, forms, Search, /du-an/ routes and admin login.
7. Reopen traffic only after smoke tests pass; keep indexing disabled during recovery.

Full rollback procedure: wordpress/ROLLBACK.md
