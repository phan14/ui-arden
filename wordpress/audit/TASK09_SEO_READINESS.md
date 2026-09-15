# Task 09 — Corrected SEO Readiness

Date: 2026-08-27. Documentation only; no plugin or metadata was changed.

## A. Existing WordPress/core/theme SEO-capable state

- WordPress and Flatsome generate a document title and a core canonical for the Published homepage.
- The child theme supports semantic headings, image alt text, internal links, and breadcrumbs.
- `arden_breadcrumbs()` can defer to `rank_math_the_breadcrumbs()` if Rank Math is later installed.
- No hard-coded JSON-LD was found in theme PHP.
- `blog_public=0` is active and the homepage emits `noindex, nofollow`.
- Rank Math is **not installed**. There are no Rank Math option or postmeta rows.

Rank Math is the planned SEO implementation in the existing project documentation. It is not required to copy/migrate the site into a non-indexed production staging environment, but the selected SEO solution must be installed and configured before public launch/indexing.

## B. Metadata currently present

Fresh public homepage inspection found:

| Signal | Current value |
|---|---|
| Document title | `<title>UI_arden</title>` |
| Canonical | `http://localhost/mytest/` |
| Robots | `noindex, nofollow` |
| H1/H2/H3 and alt structure | Task 08.11 PASS evidence |

These values are staging/default output, not approved production SEO metadata. Draft-page preview metadata was not exhaustively re-rendered in the Codex re-audit.

## C. Metadata/configuration currently missing or unsuitable for production

| Signal | Verified status |
|---|---|
| Custom production SEO titles | Not configured; existing default homepage title is not production-approved |
| Meta descriptions | Homepage missing; no Rank Math metadata rows |
| Production canonicals | Missing; current homepage canonical points to localhost |
| OpenGraph tags/social image | Homepage missing; approved social asset also missing |
| JSON-LD schema | Homepage missing; Organization/LocalBusiness not configured |
| Sitemap | `/sitemap_index.xml` and `/wp-sitemap.xml` returned 404 in non-indexed staging |
| Production robots/sitemap policy | Pending final domain and selected SEO implementation |
| Search/category/archive index rules | Pending |

The current robots state is **not unset**: it correctly discourages indexing during staging.

## D. Rank Math-specific state that cannot exist yet

Because Rank Math is absent, the following Rank Math-specific configuration does not exist:

- Setup Wizard business identity/social settings;
- Rank Math title/description templates and per-page metadata;
- Rank Math canonical overrides;
- Rank Math sitemap configuration;
- Rank Math Organization/LocalBusiness, Article, Breadcrumb, and FAQ schema;
- Rank Math OpenGraph configuration;
- Rank Math archive/search noindex rules;
- Rank Math redirect module configuration, if that implementation is selected.

Rank Math is not the only technically possible SEO plugin, but it is the documented project choice. Redirects must not be assumed to be available in Rank Math Free; server rules or a dedicated redirect plugin remain valid options.

## Page readiness

Home ID 48 plus the 15 converted Draft pages are **not ready for public indexing**. Structural Task 08.11 evidence remains valid, but each page still needs an approved production title, description, social image, canonical, and appropriate schema/index policy. The 15 converted pages remain Draft.

## Required sequence

1. Migrate to production staging while keeping indexing disabled.
2. Confirm the final HTTPS domain and business/legal data.
3. Install/configure Rank Math or the approved equivalent SEO solution.
4. Configure page/archive/search/404 metadata and index policies.
5. Generate and inspect the sitemap; exclude sample/validation content.
6. Validate canonical, OG, schema, robots, and sitemap output.
7. Publish only approved content, run production smoke tests, and enable indexing last.

## Overall SEO readiness

**NOT READY FOR PUBLICATION OR INDEXING.** This is an SEO/technical launch dependency, not a blocker to migration into a protected non-indexed environment.
