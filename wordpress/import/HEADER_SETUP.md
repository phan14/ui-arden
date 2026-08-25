# Flatsome Header Builder — Arden reference

The Header remains global and must not be pasted into Home.

## Desktop structure

Open **Flatsome → Theme Options → Header → Header Builder**.

1. Enable a 28px Top Bar with dark navy `#0f172a`; place the short trust/contact message on the left and verified phone on the right. Leave unverified fields empty.
2. Set Main Header height to **68px**, background white, sticky height **64px**, and a subtle bottom border.
3. Use one row: **Logo (left) → Primary Menu (center) → Search → CTA (right)**.
4. Logo: use the approved Arden mark, approximately **132 × 36px**, `max-height: 42px`, left aligned. Set alt text to the verified brand name.
5. Menu items and order: Trang chủ, Dịch vụ, Năng lực sản xuất, Dự án, Tin tức, Hỏi đáp, Liên hệ. Use the actual WordPress page URLs.
6. Menu typography: Plus Jakarta Sans, 12px, weight 700, 0.02em letter spacing; horizontal item gap approximately 22px.
7. Add one Header Button labeled **NHẬN BÁO GIÁ**, URL `/bao-gia/`, class `arden-header-cta` when the custom-class field is available. It must be navy, 42px high and 12px radius—not amber.
8. Keep the search icon at 20px and provide its native accessible label.

## Sticky state

- Enable Flatsome sticky Header after the desktop row is correct.
- Use a translucent white background and 8–24px soft shadow.
- Confirm the WordPress admin bar and anchor targets are not obscured.

## Tablet and mobile

1. At the native Flatsome breakpoint, hide the desktop Primary Menu and CTA; retain Logo, search and menu toggle.
2. Mobile Main Header height: **60px**; logo maximum width **124px**.
3. Use Flatsome’s off-canvas Primary Menu. Do not clone the desktop Header into page content.
4. Include the same menu order, then the Quote link and verified phone link.
5. Every toggle/link must have a minimum 44px tap target. Verify off-canvas scrolling at 390px.
6. Configure **Appearance → Customize → Arden Mobile CTA** only with verified destinations; otherwise leave it disabled.

## Acceptance checks

- 1440px: logo, centered navigation and quote CTA remain on one line.
- 1024px: no menu/CTA overlap.
- 768px and 390px: native toggle replaces desktop navigation; logo does not wrap or crop.
- Sticky and non-sticky states retain the same colors and typography.
- Do not publish `ARDEN_*` tokens or placeholder contact information.

No custom `header.php` is used.
