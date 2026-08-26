# Arden production deployment

Do not publish drafts or enable indexing until every required value is verified.

1. Back up database, uploads, plugins and themes; verify restore access.
2. Install/update the licensed Flatsome parent theme to the tested compatible release.
3. Upload `flatsome-child-2.0.0.zip` in Appearance → Themes.
4. Activate Arden Flatsome Child.
5. Install required plugins manually: Contact Form 7 and Rank Math (plus approved spam protection).
6. Create/configure both forms from `integrations/contact-form-7/`; verify recipients and real delivery.
7. Import/create UX Blocks from `import/ux-blocks/`, preserving the documented slugs.
8. Import/create Pages from `import/`; keep Draft until checked.
9. Configure Flatsome Header/Footer following the import guides.
10. Create and assign desktop/mobile menus; verify every destination.
11. Set the static Homepage in Settings → Reading.
12. Save Settings → Permalinks once; verify `/du-an/` and service routes.
13. Configure Rank Math using `RANK_MATH_SETUP.md` without localhost canonicals.
14. Replace and verify phone, email, address, hours, prices, legal and business information.
15. Verify Media Library attachment remapping, dimensions, crops and alt text on production.
16. Test required/invalid/success/failure form states and mailbox delivery.
17. Test Header, menu, sticky CTA, all representative pages and forms on mobile.
18. Clear WordPress, Flatsome, server and CDN caches.
19. Crawl internal links; inspect 200/301/404, canonical, robots, sitemap and schema.
20. Enable production indexing only after domain/HTTPS/content checks pass.

## Rollback

Keep the previous child-theme ZIP and database/uploads backup. If a release fails, activate the previous child theme (or Flatsome temporarily), restore the previous theme directory and database snapshot, purge caches, then verify Homepage, forms and permalinks. Do not delete the new Media Library files until the restored content has been checked.
