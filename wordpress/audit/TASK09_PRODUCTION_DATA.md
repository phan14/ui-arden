# Task 09 — Corrected Production Data Checklist

Date: 2026-08-27. Documentation only; no data was invented or changed.

Status definitions:

- **BLOCKING PUBLICATION** — must be resolved before affected public launch.
- **REQUIRES CONFIRMATION** — owner/legal/technical decision still required; may become blocking for affected pages.
- **READY** — verified present for the stated purpose.

Primary responsibility classes: **BUSINESS INPUT**, **LEGAL INPUT**, **SEO/TECHNICAL DEPENDENCY**, **DEPLOYMENT CONFIGURATION**, and **CONTENT CLEANUP**. Some rows require a secondary implementation step, noted in the detail.

## Itemized inventory

| # | Item | Verified state | Status | Primary class |
|---:|---|---|---|---|
| 1 | Official logo | Reconstructed SVG; not approved as official | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 2 | Favicon | `site_icon=0`; approved asset and installation needed | BLOCKING PUBLICATION | BUSINESS INPUT |
| 3 | OpenGraph social image asset | Not configured; approved asset needed | BLOCKING PUBLICATION | BUSINESS INPUT |
| 4 | Legal business name | Not explicitly verified | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 5 | Copyright year | Not verified | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 6 | Phone/hotline | Demo `0901 234 567` appears in content | BLOCKING PUBLICATION | BUSINESS INPUT |
| 7 | Contact email | `info@arden.com.vn` from React source; not owner-approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 8 | Physical address | React-source value; not owner-approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 9 | Opening hours | React-source value; not owner-approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 10 | Zalo URL | Placeholder/invalid destination remains | BLOCKING PUBLICATION | BUSINESS INPUT |
| 11 | Other social URLs | Footer `#` placeholder remains | BLOCKING PUBLICATION | BUSINESS INPUT |
| 12 | CF7 173 recipient/delivery | Placeholder recipient; `skip_mail: on` | BLOCKING PUBLICATION | DEPLOYMENT CONFIGURATION |
| 13 | CF7 175 recipient/delivery | Placeholder recipient; `skip_mail: on` | BLOCKING PUBLICATION | DEPLOYMENT CONFIGURATION |
| 14 | Spam protection | No active Akismet/Turnstile decision | REQUIRES CONFIRMATION | DEPLOYMENT CONFIGURATION |
| 15 | SMTP/mail transport | Default `wp_mail()` not production-tested | REQUIRES CONFIRMATION | DEPLOYMENT CONFIGURATION |
| 16 | MOQ claims | React-source claims not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 17 | Pricing estimates | React-source calculator values not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 18 | Production capacity | Factory/machine claims not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 19 | Lead times | React-source values not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 20 | Client/brand references | Named references not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 21 | Testimonials | Identities, roles, brands not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 22 | `100+ Local Brand` claim | Not owner-approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 23 | Certifications/quality claims | ISO/NDA and related claims not approved | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 24 | Policies page content | Five tabs require legal review | REQUIRES CONFIRMATION | LEGAL INPUT |
| 25 | Privacy/data-retention/cookie policy | Required legal position is not approved/documented | BLOCKING PUBLICATION | LEGAL INPUT |
| 26 | Business registration requirement/data | Requirement and value not confirmed | REQUIRES CONFIRMATION | LEGAL INPUT |
| 27 | Rank Math/selected SEO plugin | Rank Math not installed; SEO implementation pending | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 28 | Production SEO titles | No custom production titles configured | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 29 | Meta descriptions | Homepage has none; no Rank Math metadata exists | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 30 | Production canonical configuration | Core canonical exists but points to localhost | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 31 | Sitemap | Current sitemap endpoints return 404 | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 32 | Organization/LocalBusiness schema | Not configured | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 33 | FAQ schema | Implementation decision pending | REQUIRES CONFIRMATION | SEO/TECHNICAL DEPENDENCY |
| 34 | OpenGraph metadata | Homepage emits no OG tags | BLOCKING PUBLICATION | SEO/TECHNICAL DEPENDENCY |
| 35 | Factory/product images | Ownership/licensing approval required | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 36 | Testimonial avatars | Owner-approved identities/images required | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 37 | Footer map | Attachment 203, dimensions and alt verified | READY | DEPLOYMENT CONFIGURATION |
| 38 | Hero/above-fold image | Ownership/licensing/optimization approval required | REQUIRES CONFIRMATION | BUSINESS INPUT |
| 39 | Default WordPress sample Post | ID 1 `chao-moi-nguoi` is Published | BLOCKING PUBLICATION | CONTENT CLEANUP |

## Exact counts

| Status | Count |
|---|---:|
| BLOCKING PUBLICATION | **16** |
| REQUIRES CONFIRMATION | **22** |
| READY | **1** |
| Total | **39** |

### Blocking items by primary class

| Primary class | Count | Item numbers |
|---|---:|---|
| BUSINESS INPUT | 5 | 2, 3, 6, 10, 11 |
| LEGAL INPUT | 1 | 25 |
| SEO/TECHNICAL DEPENDENCY | 7 | 27–32, 34 |
| DEPLOYMENT CONFIGURATION | 2 | 12, 13 |
| CONTENT CLEANUP | 1 | 39 |
| Total | **16** | |

Recipient email values for items 12–13 are business inputs, while configuring and testing delivery is deployment work. Installing the approved favicon and OG asset is also deployment/SEO work after the owner supplies the assets.

## Pre-publication rule

Do not publish the 15 converted Draft pages or enable indexing until the applicable blockers are resolved. Before public launch, inspect default Post ID 1 and, with owner approval, delete, unpublish, or replace it. This task does not perform that cleanup.
