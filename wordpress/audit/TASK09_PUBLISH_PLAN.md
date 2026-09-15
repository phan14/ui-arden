# Task 09 — Corrected Publication Plan

Date: 2026-08-27. This document does not publish or unpublish content.

## Current publication state

- Home page ID 48 is Published as the static front page.
- All 15 converted pages (IDs 81–87, 95–101, 111) remain Draft.
- Default WordPress Post ID 1, slug `chao-moi-nguoi`, is Published and requires owner-approved pre-publication cleanup.
- Validation Post 109 and Project 110 remain Draft and must never be promoted as real content.
- `blog_public=0`; indexing remains disabled.

## Page readiness

| Scope | Current state | Main gate |
|---|---|---|
| Home 48 | Published staging homepage | Replace/approve business data; configure production SEO |
| About/Services/4 services/Manufacturing | Draft | Approve claims, contact data, imagery, SEO |
| FAQ 95 | Draft | Approve answers; configure SEO/FAQ schema decision |
| Contact 96 | Draft | Verified contact data; CF7 173 recipient and delivery test |
| Quote 97 | Draft | Approved pricing/MOQ; CF7 175 recipient and delivery test |
| Careers 98 | Draft | Approve recruitment content and contact path |
| Policies 99 | Draft | Legal approval of all policies/privacy/data handling |
| Fabric Guide 100 / Techpack Guide 101 | Draft | Approve content/images and metadata |
| News 111 | Draft | Remove/replace sample Post; add approved real Posts or retain valid empty state |

## Gates by responsibility

### BUSINESS INPUT

- Verify phone, email, address, opening hours, legal business identity, Zalo/social URLs.
- Approve official logo, favicon, OpenGraph image, and licensed production photography.
- Approve MOQ, pricing, capacity, lead times, testimonials, brands, and certification claims.
- Supply production recipients for CF7 173 and 175.

### LEGAL INPUT

- Approve Policies page and privacy/data-retention/cookie position.
- Confirm business registration disclosure and image/testimonial permissions.

### SEO/TECHNICAL DEPENDENCY

- Confirm final HTTPS domain.
- Install/configure Rank Math or approved equivalent.
- Configure production titles, descriptions, canonicals, OG, schema, sitemap, and archive/search index rules.
- Implement and test all 11 verified alias redirects.

### DEPLOYMENT CONFIGURATION

- Configure and delivery-test CF7 recipients/sender/mail transport and spam protection.
- Perform serialized-safe URL replacement, cache flush, permalink verification, and production smoke tests.

### CONTENT CLEANUP

- Inspect default Published Post ID 1 and, with owner approval, delete, unpublish, or replace it.
- Keep/delete Draft validation records 109/110 deliberately; never publish them.
- Remove or rename validation category term 3.
- Decide whether unused default CF7 form 172 should migrate.

## Publication order

1. Migrate into a protected environment with `blog_public=0` and all 15 converted pages still Draft.
2. Complete business/legal review and content cleanup.
3. Configure forms and production SEO; implement redirects.
4. Run full production smoke tests while indexing remains disabled.
5. Publish approved core/service/reference pages in controlled batches.
6. Publish Contact/Quote only after verified mail delivery; Policies only after legal approval; News only with approved real content or an approved empty state.
7. Re-run sitemap, canonical, robots, schema, link, form, responsive, and visual checks.
8. Enable indexing only after the final gate passes.

## Explicit pre-publication checklist

- [ ] Default Post ID 1 cleanup approved and completed.
- [ ] No sample/validation content is publicly reachable or included in sitemap.
- [ ] 15 converted page statuses reviewed individually before any publication action.
- [ ] Applicable 16 publication blockers in `TASK09_PRODUCTION_DATA.md` resolved.
- [ ] Forms deliver to approved recipients.
- [ ] Business and legal text/assets approved.
- [ ] Production SEO metadata, sitemap, canonicals, robots, schema, OG, and redirects verified.
- [ ] Production smoke test passes with indexing still disabled.

Current result: **NOT READY FOR PUBLICATION OR INDEXING**. Migration to a protected non-indexed production staging environment is a separate, technically viable step.
