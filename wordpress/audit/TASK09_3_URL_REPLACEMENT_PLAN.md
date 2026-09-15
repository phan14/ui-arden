# Task 09.3 — Serialized-Safe URL Replacement Plan

Status: template only. Final production-staging domain is missing; no replacement was executed.

## Required values

- Source: `http://localhost/mytest`
- Target: `https://STAGING-HOST` — **USER INPUT REQUIRED**
- WordPress root/SSH/WP-CLI access: **USER INPUT REQUIRED**

## Safe WP-CLI sequence

Run only after importing/restoring to the protected target and taking a target backup.

```powershell
wp search-replace 'http://localhost/mytest' 'https://STAGING-HOST' --all-tables-with-prefix --precise --recurse-objects --skip-columns=guid --dry-run
wp search-replace 'http://localhost/mytest' 'https://STAGING-HOST' --all-tables-with-prefix --precise --recurse-objects --skip-columns=guid
wp option update siteurl 'https://STAGING-HOST'
wp option update home 'https://STAGING-HOST'
wp option update blog_public 0
wp cache flush
wp rewrite flush --hard
```

Review the dry-run table/row counts before executing. `--skip-columns=guid` avoids rewriting historical GUID identifiers; attachment URLs and content/options are still handled serialized-safely. If the target’s migration tool has a documented serialized-safe workflow, use one method only.

## Verification scope

- `siteurl`, `home`, and `blog_public` options;
- attachment `_wp_attached_file`, metadata, rendered `src/srcset`, and upload URLs;
- Page/UX Block content, shortcode references, Header/Footer/theme mods;
- nav menu item URLs and Customizer/mobile CTA values;
- CF7 form references without unlocking mail;
- internal links, canonical, stylesheets/scripts/fonts/images;
- serialized values in all prefixed tables.

## Post-replacement scans

```powershell
wp db search 'localhost/mytest' --all-tables-with-prefix
wp db search 'http://localhost' --all-tables-with-prefix
wp option get siteurl
wp option get home
wp option get blog_public
```

Also crawl rendered HTML/CSS/JS at 1440, 768, and 390 px to detect localhost references, mixed content, broken assets, and redirect chains. Do not submit a sitemap or enable indexing during this phase.
