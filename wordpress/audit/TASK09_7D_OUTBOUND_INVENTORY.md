# TASK 09.7D — Outbound Execution Inventory

Date: 2026-08-27  
Method: repository code scan, existing audit evidence, operator confirmations and public read-only HTTP inspection. No cron, email, payment, webhook or automation was triggered.

## Evidence levels

- **VERIFIED SAFE:** directly supported by repository/source or read-only runtime evidence.
- **OPERATOR-CONFIRMED:** supplied manually by the site operator; no secret recorded.
- **UNVERIFIED:** unavailable through current access.
- **BLOCKER:** an unverified/active path could realistically communicate with or modify an external/production system.

## Local Arden child theme

| Surface | Evidence | Classification | Finding |
|---|---|---|---|
| WP-Cron / scheduled events | Full PHP/JS scan | VERIFIED SAFE | No `wp_schedule_event`, single event, cron schedule or Action Scheduler registration |
| Webhooks / REST callbacks | Full PHP/JS scan | VERIFIED SAFE | No webhook sender, REST route or callback registration |
| Server-side HTTP/API | Full PHP/JS scan | VERIFIED SAFE | No `wp_remote_*`, cURL, API key/client secret or fetch/XHR/sendBeacon logic |
| Email | Full PHP/JS scan | VERIFIED SAFE | No `wp_mail`, CF7 mail hook or Woo email trigger |
| Payment | Full PHP/JS scan | VERIFIED SAFE | No gateway/payment/callback implementation |
| Analytics/pixels | Full PHP/JS scan | VERIFIED SAFE | No GTM/GA/Meta/Ads tracking in child-theme executable code |
| External asset | `functions.php` | LOW-RISK / NON-BLOCKER | Browser loads Google Fonts CSS only; no mutation/communication workflow |
| Theme activation hook | `inc/post-types.php` | VERIFIED LOCAL-ONLY | Flushes rewrite rules after theme switch; changes only staging rewrite state when later activated |

The local Arden code introduces no identified production-affecting outbound action.

## Current staging runtime/plugins

| Surface | Evidence | Classification | Finding / required closure |
|---|---|---|---|
| DB isolation | Operator values: production `wainazqb_ardenstyle86`, staging `wainazqb_staging` | OPERATOR-CONFIRMED SAFE | Names differ; no credentials recorded |
| Webroot | Operator: `/public_html/staging/` | OPERATOR-CONFIRMED SAFE | Separate staging path confirmed manually |
| Noindex | Live Home response | VERIFIED SAFE | `noindex,nofollow` remains active |
| CF7 | Operator disabled; frontend plugin asset absent | OPERATOR-CONFIRMED / PUBLICLY CORROBORATED | No form mail should run; admin settings not exported |
| Payment confirmation plugin | Operator disabled; staging asset absent while production asset present | OPERATOR-CONFIRMED / PUBLICLY CORROBORATED | Reduced payment callback risk |
| Pinterest for WooCommerce | Staging asset absent while production asset present | PUBLICLY CORROBORATED DISABLED/INACTIVE | Admin active-plugin state not exported |
| WooCommerce core | Frontend assets present | ACTIVE / REVIEW | Core schedules internal maintenance; installed integrations may schedule external work |
| WooCommerce emails/gateways | Operator says SMTP/payment-related outbound disabled where applicable | OPERATOR-CONFIRMED | Acceptable unless scheduled actions/webhooks prove otherwise |
| WooCommerce webhooks | No admin/WP-CLI list | **BLOCKER** | An active webhook can call production/CRM endpoints from staging |
| Action Scheduler | WooCommerce active; no queue export | **BLOCKER** | Pending/recurring actions may send email, sync catalog or invoke callbacks |
| WP-Cron | Staging `wp-cron.php` responded 200 to an HTTP HEAD reachability check; no event list | **BLOCKER** | WordPress may process due cron on an endpoint request, including HEAD; no event-specific trigger/output or external effect was observed, but scheduled hook inventory is required |
| Google Analytics/GTM | Live staging HTML loads Google tag | **BLOCKER** | Staging traffic can contaminate the production analytics property |
| Facebook page iframe/social embeds | Live staging HTML | UNVERIFIED LOW/MEDIUM | Browser requests external social resources; no server mutation observed |
| Zalo/chat links | Live staging HTML | LOW-RISK / NON-BLOCKER | User-click navigation/contact link; no background mutation identified |
| `button-chat-zalo-report-sw` | Active public asset; source not in repository | UNVERIFIED LOW-RISK | Public behavior appears UI/social; review plugin settings later |
| `sw_custom_woo_product` | Active public asset; source not in repository | UNVERIFIED | Custom plugin code unavailable; review hooks during authenticated inventory |
| Table of Contents Plus | Active public asset | LOW-RISK / NON-BLOCKER | Presentation/content plugin; no external callback evidence |
| Core WordPress update checks | Standard WP-Cron behavior likely | UNVERIFIED LOW-RISK | Calls WordPress update services; does not affect production data |

## Minimum read-only evidence to remove blockers

Run on staging only, or provide equivalent redacted admin screenshots/exports:

```text
wp cron event list --url=https://ardenstyle.vn/staging/ --fields=hook,next_run_gmt,recurrence
wp plugin list --url=https://ardenstyle.vn/staging/ --status=active --fields=name,status,version
```

In WooCommerce Admin, export/screenshot Scheduled Actions filtered to Pending/In-progress/Failed and WooCommerce webhooks with ID/name/status only. Redact delivery URLs/tokens. Confirm there is no active external delivery and no pending action belonging to mail, payment, Pinterest/catalog sync, CRM, webhook or production automation.

Disable or exclude the Google tag on staging, then verify its script is absent from rendered HTML and no equivalent pixel/Ads tag remains. These are future operator actions; Task 09.7D performs no changes.

Do not probe `wp-cron.php` again for validation. Use the read-only WP-CLI/admin event lists above after confirming the command does not run due events.
