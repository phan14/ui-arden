# Task 08 deployment candidate report

1. **Contact Form:** PASS. Official CF7 6.1.7, form 173, embedded in Contact Draft 96; empty/invalid/safe-success/keyboard tests pass.
2. **Quote Form:** PASS. CF7 form 175, embedded in Quote Draft 97 with source fields/options/CTA; validation and keyboard tests pass.
3. **Recipient:** BLOCKED intentionally as `REQUIRES_PRODUCTION_RECIPIENT`; mail is inactive and `skip_mail: on`, so no fake address receives mail.
4. **Menu:** PASS. Primary menu 4 matches React labels/order, with eight Dịch vụ children and WordPress-compatible destinations. Mobile opens/closes, exposes 17 links and has no 390px overflow.
5. **Header:** structurally PASS (logo/menu/search/CTA/sticky/mobile). `REQUIRES_OFFICIAL_LOGO` and verified production phone remain manual blockers; unverified social theme mods were cleared.
6. **Footer:** structurally PASS. Address, phone, email, domain, hours, social links and legal text require business approval.
7. **Rank Math:** not installed; documented REQUIRED production dependency. SEO fields/schema architecture are ready; local indexing is disabled (`blog_public=0`).
8. **Media:** PASS. All 20 source attachments exist with dimensions/alt metadata; 48-page QA found zero broken images, zero missing alt and no React asset dependency.
9. **Business-data blockers:** recipient, official logo, phone, email, address, hours, domain/social, legal/policy, claims/testimonials and commercial values. See `PRODUCTION_DATA_REQUIRED.md`.
10. **Plugin dependencies:** CF7 active/required; Rank Math required/not installed; Classic Editor optional; Akismet optional; Hello Dolly should be manually removed before production.
11. **Draft readiness:** visual/content previews pass, but all 15 converted Pages remain Draft and are not publish-ready until their row in `DRAFT_PUBLISH_PLAN.md` clears.
12. **Migration:** full-site migration for an empty destination; selective migration for an existing production site, always with serialized-safe URL replacement. See `PRODUCTION_MIGRATION_PLAN.md`.
13. **Theme version:** remains 2.0.0 because Task 08 changed local DB/config/import placement only, not child-theme runtime.
14. **Production blockers:** verified recipient/delivery, official logo, business data, Rank Math fields/config, final content/legal approval and manual publish/indexing decision.
15. **Manual actions:** approve/replace business data; upload official logo; configure/activate CF7 mail and test real delivery; install/configure Rank Math; review each Draft; add real Posts/Projects; complete migration/crawl/device QA; enable indexing only after approval.

## Evidence

- Pre-flight backup: PASS.
- Routes: 18/18 PASS, including Search, Category, Post single, Project archive/single preview and expected 404.
- Final visual/runtime: 48/48 PASS (12 targets × 1440/1024/768/390), one H1, no overflow, no raw shortcode, no browser error, no broken image, no React runtime.
- Forms: both PASS empty required, invalid email, safe success and keyboard order.
- Mobile menu: PASS open/close, 17 links, no overflow.
- PHP lint, shortcode validation and TypeScript: PASS.
- Freeze: `NO UNAPPROVED CONTENT DIFFERENCE`; `NO UNAPPROVED STRUCTURE DIFFERENCE`.
- Production runtime scan: no localhost/Windows/React asset dependency inside the child theme.

## Decision

**Task 08 PASS: local WordPress is a fully configured staging/deployment candidate.** It is not approved for public production launch yet because the explicitly listed business, mail, SEO and editorial approvals remain. No Draft was published, no production deployment occurred and indexing remains disabled.
