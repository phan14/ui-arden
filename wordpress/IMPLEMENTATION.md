# Arden Phase 1 implementation

## What this phase provides

This is a valid Flatsome child-theme foundation and an exact construction blueprint for the 16-section Home reference. React remains the design reference; no React runtime or React assets are loaded by WordPress. Marketing layout stays editable in UX Builder, reusable sections become UX Blocks, and WordPress-owned content uses small shortcodes.

## Installation

1. Install and activate a licensed current version of Flatsome.
2. Copy `wordpress/flatsome-child` to `wp-content/themes/arden-flatsome-child`, or zip that folder and upload it under Appearance → Themes.
3. Activate **Arden Flatsome Child**. Confirm Flatsome remains the parent (`Template: flatsome`).
4. The child automatically loads `style.css` and `assets/css/arden.css`. In Flatsome Theme Options set the content width to 1280px. Configure **Be Vietnam Pro** for headings and **Plus Jakarta Sans** for body text if those fonts are locally hosted or available through the site's approved font setup.
5. Create every block listed in `UX_BLOCKS.md` with native UX Builder elements. Assign each root class and exact slug. Do not paste unverified phone/address/legal data.
6. Create a page named Home, select Full Width, edit with UX Builder, add page class `arden-page`, and build sections in the order in `UX_BUILDER_HOME.md`.
7. Insert reusable blocks using the UX Block element or `[block id="slug"]`. Insert `[arden_projects count="6"]` and `[arden_recent_posts count="3"]` into separate Shortcode elements.
8. Under Settings → Reading choose the Home page as the static front page.

## Header

Use Flatsome Header Builder: optional top bar (verified hours/address/phone), logo left, primary menu center, search and quote button right. Use the native off-canvas menu on mobile. Do not create a PHP header template. Add `arden-button arden-button--accent` to the quote button where Flatsome allows custom classes.

## Footer

Build a global Footer UX Block or Flatsome footer widgets: brand summary, service menu, verified contact details, map/directions, policy menu and social links. Add `arden-page`/Arden component classes only inside the block; do not globally override Flatsome footer selectors.

## Responsive setup and test

- Desktop 1440: verify the 1280px content limit, 7/5 Hero, three-card grids, and five metrics.
- Laptop 1024: verify no horizontal overflow and two-column dynamic grids.
- Tablet 768: keep Hero two columns only if copy remains readable; otherwise stack via Flatsome visibility/column controls.
- Mobile 390: stack Hero text first, one card per row, full-width CTA buttons, readable Accordion controls, and no clipped tabs.
- Use real device previews as well as UX Builder breakpoints. Preserve image ratios and use WordPress responsive images (`srcset`, width and height).

## Rank Math

Install and configure Rank Math after the site's legal/business details are confirmed. Let WordPress/Rank Math own title, description, canonical, breadcrumbs and schema. Configure Organization/LocalBusiness in Rank Math only with verified data. Enable FAQ schema through Rank Math or its supported FAQ block workflow, but do not add a second JSON-LD copy. The helper `arden_breadcrumbs()` uses Rank Math breadcrumbs when available and is reserved for later PHP templates.

## Dynamic content

- `[arden_recent_posts count="3" category="optional-slug"]` queries published Posts.
- `[arden_projects count="6"]` queries a `project` CPT if one exists; during Phase 1 it safely falls back to Posts. CPT registration, archive/single templates and filters belong to a later phase.
- The shortcode output escapes text/URLs, uses semantic articles and H3 card titles, lazy-loads thumbnails, and requests the cropped 800×500 `arden-card` image size.

## Manual acceptance checklist

1. Validate the child theme by activating it with Flatsome installed.
2. Create/import all UX Blocks and verify their slugs.
3. Assemble Home and confirm exactly one H1.
4. Replace reference images and all configurable contact/business content with approved assets/data.
5. Confirm buttons, menus, phone links and project/article links.
6. Test 390, 768, 1024 and 1440px; test keyboard focus and Accordion operation.
7. Run Lighthouse/WebPageTest, compress media, and confirm no React bundle is requested.
8. Inspect Rank Math output for a single canonical and no duplicate Organization, Breadcrumb or FAQ schema.

## Current limitations

UX Builder content is stored in WordPress, so it cannot be fully instantiated from this source repository without a running WordPress/Flatsome Admin. No unverified business data, production UX Block IDs, premium-plugin forms, project CPT, or later-page templates are fabricated in Phase 1. The pricing estimator remains an editable presentation blueprint until its pricing rules and form destination are approved.
