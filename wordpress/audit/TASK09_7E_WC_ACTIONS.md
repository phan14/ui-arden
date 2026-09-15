# TASK 09.7E — WooCommerce Scheduled Actions

## Result

**NOT INSPECTED — AUTHENTICATED STAGING ACCESS REQUIRED.**

WooCommerce remains publicly active on staging. Public HTML and REST authentication responses cannot reveal Action Scheduler queues, action arguments or recurrence. No pending action was run, cancelled or modified.

| Queue | Status | Gate requirement |
|---|---|---|
| Pending | UNKNOWN | Export/list all actions and owning groups |
| In-progress | UNKNOWN | Must contain no external/outbound work before integration |
| Failed | UNKNOWN | Review for cloned production callbacks and repeated retry behavior |
| Recurring | UNKNOWN | Identify mail/payment/feed/sync/webhook/API/marketing jobs |

## Required inspection

Use WooCommerce → Status → Scheduled Actions on staging, or the installed Action Scheduler WP-CLI command if available. Capture hook, status, group, schedule and recurrence; redact arguments containing URLs, customer data or tokens.

Specifically search for actions belonging to:

- transactional email or follow-up messages;
- payment, bank-transfer confirmation or gateway callbacks;
- WooCommerce webhooks;
- Pinterest/product feed/catalog synchronization;
- CRM, n8n, marketing or analytics uploads;
- remote backups/security scans;
- custom `sw_custom_woo_product` behavior.

Local cache/session/transient/log cleanup can be marked SAFE LOCAL MAINTENANCE. Any external action must be disabled or cancelled on staging only through a documented, reversible, plugin-aware operation. Production actions must remain untouched.
