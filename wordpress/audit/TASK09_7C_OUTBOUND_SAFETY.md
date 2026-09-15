# TASK 09.7C — Outbound and Indexing Safety

No mail, payment, webhook, automation or test order was triggered. Without authenticated staging access, configuration safety cannot be verified or changed.

## Outbound systems

| System | Current classification | Required staging-only action/evidence |
|---|---|---|
| Contact Form 7 | USER ACTION REQUIRED | Inspect every staging form Mail tab/additional settings; use `skip_mail: on` or an allow-listed test recipient |
| SMTP / `wp_mail` | USER ACTION REQUIRED | Inventory SMTP plugin/constants/host hooks; disconnect or force safe capture/test mode |
| WooCommerce email | USER ACTION REQUIRED | Disable customer/admin transactional emails on staging or route only to safe capture |
| Payment gateways | USER ACTION REQUIRED | Disable live gateways/keys or use verified sandbox; do not place an order/payment |
| WooCommerce webhooks | USER ACTION REQUIRED | Disable staging webhook delivery after exporting state |
| n8n/CRM/marketing automation | USER ACTION REQUIRED | Inventory callbacks/API keys and disable outbound staging execution |
| REST callbacks/external APIs | USER ACTION REQUIRED | Identify scheduled/action-based writes and block/test-mode them |
| Analytics/GA/Meta Pixel/Google Ads | USER ACTION REQUIRED | Disable or exclude staging to prevent production-data contamination |
| Search Console | SAFE only if untouched | Do not verify property or submit sitemap |
| Cron/action scheduler | USER ACTION REQUIRED | Audit queued jobs and suppress external/transactional jobs without changing production |

No system can be classified SAFE or DISABLED solely from frontend HTML.

## Indexing and sitemap

Read-only recheck:

- staging Home: `noindex,nofollow`;
- staging login: `noindex,nofollow,noarchive`;
- staging sitemap index: publicly reachable with HTTP 200;
- production Home remains `index,follow`;
- no sitemap submission was performed.

The per-page noindex directive materially reduces indexing risk even when URLs are crawlable. However, the public sitemap advertises staging URLs and creates unnecessary discovery/crawl exposure. Also, `/staging/robots.txt` is not the origin-level robots policy used by standards-compliant crawlers; the authoritative robots file for this host is `/robots.txt`. Do not modify production `/robots.txt` merely to solve staging.

Preferred control is cPanel Directory Privacy/HTTP Basic Auth on `public_html/staging/`, with an availability and login test afterward. Inside staging, keep `blog_public=0` and disable its sitemap through the existing SEO plugin only after DB isolation and a settings export are verified. HTTP authentication is strongly recommended but not authorized/applied in this task.

## Production integrity

After read-only checks, production Home still returns 200 and remains index/follow. No production mail, payment, plugin, theme, SEO, redirect, DNS or content configuration was accessed or changed. `xuongmaygiatot.vn` was not accessed for mutation.
