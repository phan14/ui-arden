# Where to make future updates

| Change | Correct place |
|---|---|
| Design tokens, global component styles, PHP behavior, CPT or shortcodes | Update and redeploy Arden Child Theme |
| Home or page layout, section order, page-specific text/image/button | Edit that page with UX Builder |
| Trust Bar, Factory, Process, MOQ, Testimonials, FAQ or global CTA | Edit the corresponding UX Block once |
| Header logo, navigation, dropdowns, top bar, sticky/mobile menu | Flatsome Header Builder |
| Footer columns, contact links, global footer content | Footer UX Block / Flatsome Footer settings |
| New article or article content | WordPress Posts |
| New portfolio project | WordPress **Dự án** CPT |
| SEO title, description, canonical, social preview or schema | Rank Math |
| Mobile Sticky CTA destinations | Appearance → Customize → Arden Mobile CTA |
| Verified phone/address/email/hours | Update every configured Header/Footer/Contact/CTA location; never edit PHP to store business content |

Before updating the child theme, back up the current theme folder and database. Preserve UX Builder and UX Block content in the database. Increment `Version` in `style.css` and the single `ARDEN_THEME_VERSION` constant together for a release; the PHP constant controls asset cache busting.
