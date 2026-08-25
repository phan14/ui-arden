# Task 04 page imports

These 14 files cover all static and service landing pages outside Home. Each file is generated from the rendered React DOM and wrapped in Flatsome's native `[ux_html]` element. Do not run a global database import.

## Validation sequence

1. Create one WordPress page with the canonical slug from `SITE_ROUTE_MAPPING.md`.
2. Open the page in the classic/code content view and paste the matching file once.
3. Save as draft.
4. Verify desktop and mobile before publishing.
5. Configure a WordPress-compatible form backend for Contact/Quote; the imports intentionally do not implement PHP mail handling.

The child theme conditionally loads `assets/css/react-pages.css` only when page content contains `arden-react-page`.

Interactive React state is not bundled into these imports. Pages containing selectors, tabs, accordions or forms require a separate behavior pass; never paste the React application JavaScript into WordPress.

