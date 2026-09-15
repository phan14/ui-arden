# TASK 09.7C — Staging Isolation and Outbound Safety Report

Date: 2026-08-27  
Production: `https://ardenstyle.vn/`  
Staging: `https://ardenstyle.vn/staging/`  
Mode: validation only; no Arden integration.

## Outcome

Task 09.7C cannot close the staging-safety gate because no hosting/cPanel/filesystem/database or authenticated staging access was supplied. DB isolation, filesystem isolation, capacity, mail, payment, webhook and automation controls therefore remain unverified. No staging-only changes were attempted because their isolation from production has not been proved.

The correct result is additional preparation, not “isolation failed”: there is no evidence that both installations share a database or writable files, only insufficient evidence that they do not.

## Gate matrix

| READY requirement | Result | Evidence/blocker |
|---|---|---|
| DB isolation verified | FAIL/BLOCKED | Production/staging `DB_NAME` and prefixes unavailable |
| Filesystem isolation verified | FAIL/BLOCKED | Absolute paths, symlinks and writable directories unavailable |
| Sufficient storage | FAIL/BLOCKED | Quota/usage/free/inodes/DB sizes unavailable |
| Noindex intact | PASS | Staging Home returns `noindex,nofollow` |
| Outbound mail safe | FAIL/BLOCKED | CF7/SMTP/Woo email admin state unavailable |
| Payment safe | FAIL/BLOCKED | Gateway/sandbox state unavailable |
| Webhook/automation controlled | FAIL/BLOCKED | Hooks, n8n, CRM, APIs and cron state unavailable |
| Production integrity | PUBLIC CHECK PASS | Production Home 200 and index/follow; no writes performed |

## Public staging safety recheck

- Staging Home returns 200 at the correct `/staging/` URL with noindex/nofollow.
- Staging wp-admin resolves to staging wp-login without a loop.
- Staging sitemap remains public at `/staging/sitemap_index.xml`.
- No HTTP authentication challenge protects the public frontend/login in the observed request path.
- Public clone fidelity previously passed for WordPress/theme/plugin signals and all seven sitemap counts/paths; that work was not repeated or contradicted.

The public sitemap is not by itself proof that pages will be indexed while noindex is intact, but it exposes and encourages crawling of staging URLs. Directory Privacy is the preferred additional protection. `/staging/robots.txt` is not an origin-level robots control.

## Changes made

None. Specifically:

- no `wp-config.php`, database or filesystem access;
- no CF7/SMTP/WooCommerce/payment/webhook/analytics change;
- no sitemap/Rank Math/robots change;
- no Basic Auth configuration;
- no backup/archive created;
- no theme/page/media/database import;
- no Softaculous Push to Live;
- no production or `xuongmaygiatot.vn` mutation.

## Required preparation before rerun

1. Secure cPanel/hosting access or redacted read-only evidence showing distinct production/staging `DB_NAME` and table prefixes.
2. Resolved filesystem evidence for separate core/content/config directories and absence of shared writable symlinks.
3. cPanel quota/used/free/inodes, production/staging directory sizes and DB sizes.
4. Authenticated staging audit of CF7, SMTP, Woo emails, payment gateways, webhooks, scheduled actions, automation, analytics/pixels and APIs.
5. Apply minimal staging-only locks only after isolation is proved; capture pre-change exports and do not send mail or transact.
6. Enable cPanel Directory Privacy for `public_html/staging/` if approved, then confirm frontend/admin/API/cron expectations.
7. Create and restore-verify a storage-safe Restore Point B, preferably off-host.

Task 09.8 remains unauthorized. Local Arden child theme/pages/UX Blocks/media/forms must not be installed or imported yet.

MORE STAGING PREPARATION REQUIRED
