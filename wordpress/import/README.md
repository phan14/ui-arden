# Import Arden Home into Flatsome

This package uses editable Flatsome shortcodes. It does not create a PHP Home template, a React embed or a single custom Home shortcode.

## Step 1 — Activate the themes

Install Flatsome, then install and activate **Arden Flatsome Child**. Confirm the child CSS is loaded on the front end.

## Step 2 — Create the UX Blocks

Go to **UX Blocks → Add New** and create these seven blocks:

| Block title | Required slug | Import file |
|---|---|---|
| Arden Trust Bar | `arden-trust-bar` | `ux-blocks/arden-trust-bar.txt` |
| Arden Factory | `arden-factory` | `ux-blocks/arden-factory.txt` |
| Arden Process | `arden-process-steps` | `ux-blocks/arden-process.txt` |
| Arden MOQ Policy | `arden-moq-policy` | `ux-blocks/arden-moq.txt` |
| Arden Testimonials | `arden-testimonials-slider` | `ux-blocks/arden-testimonials.txt` |
| Arden FAQ Accordion | `arden-faq-accordion` | `ux-blocks/arden-faq.txt` |
| Arden CTA Banner | `arden-cta-banner` | `ux-blocks/arden-cta.txt` |

## Step 3 — Insert each block's content

Open the corresponding `.txt` file, copy all text, switch the UX Block editor to the WordPress **Text/Code editor** (not the Visual editor), paste, and save. Then choose **Edit with UX Builder**. Flatsome should expose Section → Row → Column → Text/Image/Button/Icon Box/Accordion elements.

If Flatsome changes an unknown placeholder image into an empty image, that is expected: select the Image element and choose the real Media Library image immediately.

## Step 4 — Verify slugs

Open each UX Block's permalink/slug field and confirm it exactly matches the table. A different slug causes an empty block reference on Home.

## Step 5 — Create the Home page

Create a WordPress Page named **Trang chủ**. Select Flatsome's Full Width page template. Do not insert Header or Footer content.

## Step 6 — Insert Home content

Open `home-flatsome.txt`, copy everything, switch the Page editor to **Text/Code editor**, paste, and save a draft. This is safer than placing shortcode text inside one UX Builder Text element.

## Step 7 — Open UX Builder

Click **Edit with UX Builder**. Confirm the seven reusable references render and native sections remain individually editable. Confirm the order is exactly: Hero, Trust Bar, Services, Products, Metrics, Factory, Capabilities, Process, MOQ, Pricing, Portfolio, Why Choose, Testimonials, Blog, FAQ, CTA.

## Step 8 — Replace image tokens

Follow `IMAGE_MAP.md`. Select each Image element and replace every `ARDEN_IMAGE_*` token with a Media Library image. Use the suggested crop and alt text, then search page content to confirm no image token remains.

## Step 9 — Configure Header

Follow `HEADER_SETUP.md`. Header Builder owns the global navigation, logo, top bar and mobile menu.

## Step 10 — Configure Footer

Follow `FOOTER_SETUP.md`. Assign the Footer globally and ensure the CTA is not duplicated.

## Step 11 — Select the static front page

Go to **Settings → Reading → Your homepage displays → A static page**, choose **Trang chủ**, and save.

## Step 12 — Test responsive behavior

Preview at 1440, 1024, 768 and 390px. Check column order, button wrapping, image crops, card heights, Accordion controls, dynamic Posts/Projects, navigation and footer. Confirm exactly one H1—the Hero title—and H2 for section titles.

## Dynamic content and dependencies

- Blog uses `[arden_recent_posts count="3"]` and requires published WordPress Posts with featured images.
- Portfolio uses `[arden_projects count="6"]`. The child theme now registers the `project` CPT; create published Projects and set featured images. An editor notice is returned when there are none.
- Rank Math owns metadata, canonical, OpenGraph and schema. Do not add FAQ or Organization JSON-LD to these imports.

Before publishing, replace `ARDEN_PHONE`, all `ARDEN_*` image tokens, `CẤU_HÌNH_*`, testimonial tokens and any unverified operational claims.
