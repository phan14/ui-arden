# Arden pre-publish checklist

Do not publish while any required token or unverified business value remains.

## A — Required configuration tokens

- `ARDEN_PHONE`: verified public phone; use a dialable version in `tel:` URLs.
- `ARDEN_EMAIL`, `ARDEN_ADDRESS`, `ARDEN_OPENING_HOURS`: verified business details for Header/Footer/Contact only.
- `ARDEN_IMAGE_*`: import-only Media Library placeholders; replace through each UX Builder Image element.
- `CẤU_HÌNH_GIÁ`, `CẤU_HÌNH_MOQ`, `CẤU_HÌNH_TIẾN_ĐỘ`, `CẤU_HÌNH_CHIẾT_KHẤU`: commercial data requiring owner approval.
- Testimonial names, brands and quotes: publish only with approval.

## B — Import-only placeholders

Image tokens and operational `CẤU_HÌNH_*` strings are intentionally visible in import source so omissions are easy to search. They must not remain in rendered production content.

## C — Prohibited production values

- Localhost, `127.0.0.1`, Windows drive paths, staging domains and Media Library URLs copied from another environment.
- Example/fake phone, email, address, legal name, tax code, opening hours, testimonial or price.
- Duplicate Rank Math metadata or JSON-LD in UX Builder Text elements.

## Content and SEO

- Home contains exactly one H1; other primary section headings are H2 and card headings are H3.
- Rank Math owns title, description, canonical, OpenGraph, Twitter Card and schema.
- Confirm Organization/LocalBusiness data and avoid duplicate FAQ/Breadcrumb schema.
- Every meaningful image has useful alt text; decorative images use empty alt text.
- All buttons and links have final destinations and visible keyboard focus.

## WordPress configuration

- Refresh Settings → Permalinks after first activation if `/du-an/` returns 404.
- Add published Projects and Posts with excerpts and featured images.
- Configure or deliberately leave disabled Appearance → Customize → Arden Mobile CTA.
- Assign Header and Footer globally; ensure the CTA block appears only once.
- Remove editor-visible empty notices by adding content or intentionally removing the section.

## Visual/performance checks

- Test 1440, 1024, 768 and 390px without horizontal scrolling.
- Check image crops, equal card rhythm, Header sticky behavior, mobile off-canvas menu, forms, FAQ keyboard operation and sticky CTA safe-area spacing.
- Confirm no React/Vite bundle, new icon library, animation library or custom jQuery is requested.
- Compress images and test Core Web Vitals on the deployed environment.
