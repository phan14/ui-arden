# Flatsome Header Builder setup

The Header is global and is intentionally absent from `home-flatsome.txt`.

1. Open **Flatsome → Theme Options → Header → Header Builder**.
2. Main header: Logo on the left, Primary Menu in the center, Search icon and Quote button on the right.
3. Upload the approved logo and its retina version; provide useful image alt text based on the verified brand name.
4. Create a WordPress menu with Home, Services, Manufacturing, Projects, News, FAQ and Contact. Use the real page slugs.
5. Configure the Quote button with `/bao-gia/` and classes `arden-button arden-button--accent` if the Header Builder field accepts custom classes.
6. Optional top bar: use `ARDEN_OPENING_HOURS`, `ARDEN_ADDRESS` and `ARDEN_PHONE` until the business owner verifies them. Never publish the tokens.
7. Mobile: use Flatsome's native menu toggle and off-canvas Primary Menu. Include the Quote link and verified phone link; do not insert the desktop header as page content.
8. At 390px check logo width, tap targets, off-canvas scrolling and button wrapping. At 768/1024px confirm the menu changes breakpoint without overlap.

No custom `header.php` is required for Task 02.
