# TASK 09.7E — WooCommerce Webhooks and Analytics

## WooCommerce webhooks

**UNVERIFIED / BLOCKER.**

The public WooCommerce REST webhook endpoint requires authentication, which is expected and does not prove that the webhook table is empty or disabled. No authenticated WooCommerce settings/WP-CLI access was available. No webhook was triggered, changed or deleted.

Required staging evidence: WooCommerce → Settings → Advanced → Webhooks, listing ID, name, topic and status. Record destination host only with path/query/token redacted. READY requires no Active webhook capable of delivering to production, CRM, n8n, fulfillment, accounting, payment or marketing systems. Disable risky webhooks on staging only; preserve their definitions where a reversible disabled state exists.

## Google Analytics / Google tag

**VERIFIED ACTIVE / BLOCKER.**

Fresh read-only HTML inspection found Google tag markers on both production and staging Home. Staging therefore can contaminate the production analytics property. The injection source cannot be proven from public HTML. Current staging frontend assets do not expose the WooCommerce Google Analytics Integration plugin, so likely sources still requiring authenticated inspection include Flatsome/theme Header Scripts, Customizer/options, Rank Math Analytics, another plugin, widget/UX Block or hard-coded database content.

Preferred staging-only closure:

1. Export/snapshot the owning setting.
2. Disable the tag only on staging or apply a verified staging-host exclusion at the owning layer.
3. Purge staging cache only.
4. Confirm rendered staging HTML contains no `googletagmanager.com`, `gtag(`, GTM container or GA measurement marker.
5. Confirm production HTML still contains its unchanged tag.

No analytics setting or cache was changed in Task 09.7E.

## Other browser-side external requests

Facebook embeds, Zalo/contact links, Google Maps and Google Fonts remain visible. They may create browser requests but no background server-side mutation was demonstrated. They are documented non-blockers unless policy requires a completely offline staging environment. The active chat/custom Woo plugins still require authenticated hook/action review.
