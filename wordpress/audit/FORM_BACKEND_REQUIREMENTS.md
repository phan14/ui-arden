# Form backend requirements

No mail handler or form plugin was installed in Task 05. Both forms remain visual draft markup only.

## Contact form

Exact React fields:

1. Họ và tên của bạn — text, required.
2. Số điện thoại / Zalo — telephone, required.
3. Email liên hệ — email, optional.
4. Dòng sản phẩm quan tâm — select, optional.
5. Ngày dự kiến ghé thăm xưởng — date, optional.
6. Nội dung yêu cầu chi tiết — textarea, optional.

## Quote form

Exact React fields/controls:

1. Loại sản phẩm — select.
2. Số lượng đặt may dự kiến — select.
3. Chất liệu vải mong muốn — select.
4. Tình trạng thiết kế & rập mẫu — select.
5. Kỹ thuật in/thêu mong muốn — multi-select button group with six source choices.
6. Họ và tên — text, required.
7. Số điện thoại/Zalo — telephone, required.
8. Tên thương hiệu — text, optional.
9. Email — email, optional.
10. Ghi chú/yêu cầu chi tiết — textarea, optional.

## Backend contract

- Assign stable `name` attributes when binding the backend; React markup currently has none.
- Enforce required fields server-side, not only with browser attributes.
- Validate email and normalize Vietnamese phone numbers.
- Preserve all select/button values exactly as submitted.
- Escape stored values and sanitize notification output.
- Send an administrator notification and a user acknowledgement when a valid email exists.
- Record delivery failure without exposing server details to visitors.
- Add nonce/CSRF protection, rate limiting and a honeypot or CAPTCHA-equivalent spam control.
- Do not introduce a custom unauthenticated `wp_mail()` endpoint.

An approved WordPress form solution is still required before either draft can be published.

