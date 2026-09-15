# Task 09.2 — Consolidated Owner Inputs

Only inputs/decisions the owner must provide are listed. Technical execution is not mislabeled as business input. “Blocks migration” means migration into a protected non-indexed production staging environment—not public launch.

## BUSINESS

| Field | Current value/status | Where it appears | Blocks publication? | Blocks migration? | Required owner input |
|---|---|---|---|---|---|
| Official business identity | “Arden”/reconstructed identity not formally verified | Site title, Header/Footer, content, future schema | Yes | No | Confirm exact legal/trading name and brand spelling |
| Phone/hotline | Demo `0901 234 567` | Header, Footer, mobile CTA, forms/content, tel/Zalo links | Yes | No | Provide verified production number |
| Contact email | `info@arden.com.vn` from React; unverified | Contact/Footer/content, future schema | Yes | No | Confirm public contact email |
| Address and map destination | React-source address; unverified | Header/Footer/Contact/map | Yes | No | Confirm full production address and map URL/location |
| Opening hours | React-source value; unverified | Header/Footer/Contact | Yes | No | Confirm public opening hours |
| Zalo and social profiles | Placeholder/`#` links | Footer/Header/contact paths, future schema | Yes | No | Supply verified URLs or approve removal |
| Copyright year/text | Unverified | Footer | Yes | No | Approve year and copyright holder text |
| Commercial/operational claims | MOQ, estimates, capacity, lead times unapproved | Home, Services, service pages, Manufacturing, Quote | Yes for affected pages | No | Approve or replace each claim/value |
| References and testimonials | Brands, people, roles, `100+` claim unapproved | Home/About/Services/portfolio/testimonials | Yes for affected pages | No | Approve identities, wording and permission or approve removal |
| Certifications/quality claims | ISO/NDA/quality wording unapproved | Home/About/Manufacturing/Services | Yes for affected pages | No | Provide proof/approved wording or remove |
| Careers content | Positions/contact path not owner-approved | Careers page | Yes for Careers | No | Approve current openings and application route |

## LEGAL

| Field | Current value/status | Where it appears | Blocks publication? | Blocks migration? | Required owner input |
|---|---|---|---|---|---|
| Policies page | Five tabs not legally approved | `/chinh-sach/` and Footer fragment links | Yes for Policies/linked forms | No | Legal approval or replacement text |
| Privacy/data retention/cookies | Not approved/documented | Forms, Policies, analytics/cookie behavior | Yes | No | Approve privacy notice, retention period, consent/cookie approach |
| Business registration disclosure | Requirement/value unconfirmed | Footer/Policies/schema if legally required | Depends on jurisdiction; treat as launch gate | No | Legal determination and approved number/text |
| Image/testimonial permissions | Source/identity approvals incomplete | Media, cards, testimonials, social previews | Yes for affected content | No | Confirm ownership/licensing/releases or provide replacements |

## SEO ASSET

| Field | Current value/status | Where it appears | Blocks publication? | Blocks migration? | Required owner input |
|---|---|---|---|---|---|
| Official logo | Reconstructed SVG; Custom Logo not independently approved | Header/Footer, Rank Math Knowledge Graph | Yes | No | Provide/approve official SVG or PNG |
| Favicon/site icon | `site_icon=0` | Browser tab, WordPress/site identity | Yes | No | Provide approved square icon, ideally at least 512×512 px |
| Default OpenGraph image | Missing | Homepage/social defaults | Yes | No | Provide approved 1200×630 px image |
| Page/Post/Project social images | No approved per-page plan; converted pages have no verified featured-image assignments | Social cards and archive cards | Yes for affected items | No | Approve default reuse or provide page-specific images |

## FORM/EMAIL

| Field | Current value/status | Where it appears | Blocks publication? | Blocks migration? | Required owner input |
|---|---|---|---|---|---|
| Contact recipient | `REQUIRES_PRODUCTION_RECIPIENT`; `skip_mail: on` | CF7 form 173 / Contact page | Yes for Contact | No | Provide recipient mailbox |
| Quote recipient | `REQUIRES_PRODUCTION_RECIPIENT`; `skip_mail: on` | CF7 form 175 / Quote page | Yes for Quote | No | Provide recipient mailbox |
| Approved From address | Stored sender is `kubinh23@gmail.com`; not production-approved | CF7 173/175 mail headers | Yes for forms | No | Provide same-domain sender mailbox/address |
| Mail delivery method | Default `wp_mail()` untested | Both forms | Yes for forms | No | Confirm SMTP/provider credentials through a secure channel, never Git |
| Spam protection | Akismet installed/inactive; no Turnstile decision | Both forms | Yes for forms | No | Choose/provide legitimate Akismet or Turnstile account/keys securely |
| Form copy/language | Success/error messages currently CF7 English defaults | Both forms | Owner acceptance needed | No | Approve Vietnamese/localized messages and mail subject/body wording |

## DEPLOYMENT

| Field | Current value/status | Where it appears | Blocks publication? | Blocks migration? | Required owner input |
|---|---|---|---|---|---|
| Production domain and HTTPS target | Not supplied | URLs, canonicals, sitemap, mail, redirects | Yes | **Yes** to execute migration | Provide final domain, hosting target, SSL readiness, and authorized access |
| Migration scenario | Full vs selective not chosen | Database/media/options transfer | Yes | **Yes** | Confirm whether target is empty or contains protected existing data |
| Production backup/rollback access | Target not supplied | Deployment safety | Yes | **Yes** | Confirm backup/restore credentials and rollback owner |
| Licensed Flatsome parent | Local version known; production license/access not confirmed | Theme runtime | Yes | **Yes** if absent on target | Provide legitimate theme/license access |
| Rank Math Pro | User owns it; ZIP/account not supplied locally | SEO staging configuration | Yes before launch/indexing | No | Install/provide legitimate ZIP/account access; never commit plugin files |
| Permalink decision | Current date-based structure | Posts and redirects | Yes before indexing | No | Approve final permalink structure |
| Redirect layer | Plan exists; not activated | 11 alias routes | Yes before launch | No | Approve Rank Math Pro, dedicated plugin, or server ownership layer |
| Default sample Post | ID 1 clearly WordPress sample content and Published | Blog/search/sitemap after indexing | Yes | No | Approve delete, unpublish, or replacement action |

## Explicit actions currently waiting on the owner

1. **USER ACTION REQUIRED — INSTALL RANK MATH PRO** from the legitimate owner ZIP/account.
2. **USER ACTION REQUIRED — REMOVE DEFAULT SAMPLE POST** by approving delete, unpublish, or replacement of ID 1.
3. **USER INPUT REQUIRED** for CF7 recipients, approved sender, mail transport, and spam protection.
4. Provide the production target/domain/access and choose full versus selective migration before any migration is executed.
