# TASK 09.7B — Ardenstyle Staging Validation Report

Date: 2026-08-27  
Staging: `https://ardenstyle.vn/staging/`  
Production: `https://ardenstyle.vn/`  
Scope: public read-only validation and integration preparation.

## Result

The Softaculous staging frontend is reachable, stays under `/staging/`, exposes a valid WordPress login, is noindex/nofollow, and publicly matches production sitemap counts and paths. This supports clone fidelity at the HTTP layer.

Approval for integration is blocked because database isolation, filesystem isolation, storage capacity and outbound side-effect suppression cannot be verified without hosting/admin access. A visible clone is not proof that staging cannot write to the production database or shared files.

## Required status

| Area | Result |
|---|---|
| Staging accessibility | PASS — HTTPS 200 |
| Admin reachability | PASS — redirects to `/staging/wp-login.php`, no loop |
| Production integrity | Public recheck PASS; no writes performed |
| DB isolation | NOT VERIFIED — DB names/wp-config unavailable |
| Filesystem isolation | NOT VERIFIED — webroots/symlinks unavailable |
| Noindex | PASS in rendered meta: `noindex,nofollow` |
| robots | PARTIAL — staging robots is reachable and still advertises its sitemap; no blanket crawl block |
| Access protection | NOT VERIFIED/PUBLIC — frontend and login are publicly reachable; add Basic Auth if supported |
| Sitemap exposure | Public at `/staging/sitemap_index.xml`; no submission was made |
| Outbound side effects | NOT VERIFIED — CF7/Woo mail, payments, webhooks, SMTP, analytics/pixels/APIs require admin audit |
| Storage readiness | NOT VERIFIED — quota/usage/DB limits unavailable |
| Clone fidelity | PUBLIC LAYER PASS; authenticated layer incomplete |
| SEO state | Production indexable; staging noindex; Rank Math-style sitemap/schema visible; settings/redirects unavailable |
| Rank Math Pro readiness | HOLD — verify existing SEO plugin/data before legitimate Pro installation |
| Integration method | C — selective integration into production-derived staging clone |
| Softaculous Push to Live | **NOT AUTHORIZED** |

## Fidelity evidence

Production and staging both report WordPress 6.8.8 and Flatsome assets with the same publicly visible plugin set. Sitemap counts and normalized paths match exactly: Posts 42, Pages 12, Products 62, Category 1, Product categories 13, Video 3 and Local KML 1. Representative post, service, shop and news URLs return 200 on both origins. No localhost reference was found on staging Home.

This does not substitute for authenticated table, media, menu, form, user, order, redirect or file checks.

## Side-effect classifications

| System | Classification | Required evidence/action before Task 09.8 |
|---|---|---|
| Contact Form 7 mail | USER ACTION REQUIRED | Inspect mail tabs; enforce `skip_mail` or safe test recipient without sending |
| WooCommerce email | DISABLE BEFORE ARDEN INTEGRATION | Disable staging transactional email/notifications |
| Payment gateways | DISABLE BEFORE ARDEN INTEGRATION | Sandbox/disable capture and callbacks |
| Webhooks/n8n/CRM/automation | USER ACTION REQUIRED | Inventory and disable staging delivery |
| SMTP | USER ACTION REQUIRED | Inspect without sending; prevent production recipient delivery |
| Analytics/Meta Pixel/Google Ads | DISABLE BEFORE ARDEN INTEGRATION | Exclude/remove staging measurement while keeping production unchanged |
| Search Console/sitemap submission | SAFE only if untouched | Do not verify or submit staging |
| External APIs/cron | USER ACTION REQUIRED | Inventory keys/jobs; suppress mutating calls and production cron side effects |

## Preservation and integration

Current Arden production contains substantial content and commerce inventories. The 42 Posts, 12 Pages, 62 product-sitemap entries, categories, media, SEO metadata, menus/forms/users/blocks and WooCommerce data remain protected. The local database must not replace staging. The page-by-page selective map is in `TASK09_7B_ARDEN_INTEGRATION_MAP.md`; current pages and SEO need authenticated exports plus Arden-specific GSC/backlink evidence before URL removals or redirects.

## Restore Point B

The user reports that a production backup existed before Softaculous staging creation, but its contents/readability/restore test were not independently accessible. Restore Point B has not been created or verified. Before integration, measure quota and create an off-host or provider-backed full staging DB/critical-files snapshot with a restoration test. Do not create a large on-host duplicate while capacity is unknown.

## Task 09.8 prerequisites

1. Securely provide hosting/admin access sufficient to confirm separate DB and document root; do not store secrets in Git.
2. Record production DB name versus staging DB name, staging table prefix and staging `wp-config` target.
3. Record production/staging paths and prove staging `wp-admin`, `wp-includes`, `wp-content` are separate and not writable symlinks to production.
4. Record storage/database quotas and free capacity.
5. Audit and suppress all staging mail/payment/webhook/analytics/API side effects.
6. Add HTTP authentication or equivalent hosting protection if available.
7. Export/verify current Rank Math/redirect, content, media, menus, forms, users and WooCommerce state.
8. Create and restore-test Restore Point B.
9. Obtain Arden-specific GSC/backlink evidence before destructive URL decisions.

No local Arden component was installed/imported/activated. Neither production domain, DNS, redirects nor indexing was changed, and `xuongmaygiatot.vn` was untouched.

STAGING ISOLATION NOT VERIFIED — DO NOT INTEGRATE ARDEN
