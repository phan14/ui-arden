# Arden Contact — CF7

Local implementation: form ID 173, embedded in Draft page 96. The exact source labels, placeholders, optional/required states, select options and CTA are defined in `wordpress/tools/task08-configure-forms.php` and stored in CF7.

Fields: required `your-name` text (“Nguyễn Văn A”); required `your-phone` tel (“0901 234 567”); optional `your-email` email (“brand@gmail.com”); `product-interest` with the five React options; optional `visit-date`; optional `your-message` with the original React placeholder; submit “GỬI YÊU CẦU TƯ VẤN NGAY”.

Production mail tags: `[your-name] [your-phone] [your-email] [product-interest] [visit-date] [your-message]`. Current mail state is inactive with `REQUIRES_PRODUCTION_RECIPIENT` and `skip_mail: on`. Enter a verified recipient, configure reply-to safely, activate Mail and remove skip-mail only during authorized production setup.

Task 08 tests passed: empty required validation, invalid email, safe skip-mail success state, error rendering and keyboard order.
