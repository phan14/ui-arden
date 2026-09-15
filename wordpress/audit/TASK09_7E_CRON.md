# TASK 09.7E — Staging WP-Cron Inventory

Date: 2026-08-27  
Target: `https://ardenstyle.vn/staging/`  
Mode: read-only; no cron endpoint or hook was invoked.

## Result

**INVENTORY INCOMPLETE — AUTHENTICATED STAGING ACCESS REQUIRED.**

The workspace contains no staging credential, SSH/WP-CLI connection or authenticated WordPress session. Public HTTP does not expose the WP-Cron event array. In accordance with Task 09.7D, `wp-cron.php` was not probed again because a request can process due events.

## Evidence-based classification

| Source/hook class | Evidence | Classification | Reason |
|---|---|---|---|
| Arden child-theme hooks | Full repository PHP/JS scan | SAFE LOCAL MAINTENANCE | No scheduled event, Action Scheduler, mail, webhook or external API registration |
| Arden `after_switch_theme` rewrite flush | Child theme source | SAFE LOCAL MAINTENANCE | Runs only on later authorized theme switch; local rewrite state only |
| WordPress core update/cleanup jobs | Standard WordPress behavior; exact list unavailable | UNKNOWN / LOW-RISK | Normally contacts WordPress/update services or performs local cleanup; exact staging hooks unverified |
| WooCommerce maintenance jobs | WooCommerce publicly active | UNKNOWN | Could include local cleanup or external integration work |
| Email/payment/feed/sync/API/webhook hooks | No cron export | OUTBOUND RISK UNTIL INVENTORIED | Could affect real recipients or external systems |
| Pinterest/payment plugins | Operator-confirmed disabled and public assets absent | OPERATOR-CONFIRMED CONTROLLED | Their historical queued hooks still require cron/action inspection |
| Custom Woo plugin hooks | Plugin source/admin unavailable | UNKNOWN | Cannot rule out scheduled callbacks from name/frontend assets |

No individual staging cron hook can honestly be listed or marked safe without the event export.

## Safe closure procedure

Run read-only on staging only:

```text
wp cron event list --url=https://ardenstyle.vn/staging/ --fields=hook,next_run_gmt,recurrence --format=csv
```

Do not run `wp cron event run`, `wp cron test`, or request `wp-cron.php`. Redact secrets if hook arguments are separately inspected. Classify every non-core hook as SAFE LOCAL MAINTENANCE, OUTBOUND RISK or UNKNOWN. Any mail, payment, catalog/feed sync, analytics, backup upload, security cloud scan, API or webhook hook must be disabled/cancelled on staging through its owning plugin only after a staging backup and explicit authorization.
