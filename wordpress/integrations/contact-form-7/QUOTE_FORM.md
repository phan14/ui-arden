# Arden Quote — CF7

Local implementation: form ID 175, embedded in Draft page 97. The complete exact CF7 definition is maintained in `wordpress/tools/task08-configure-forms.php`.

It preserves the React product options, five quantity ranges and display text, seven fabric/GSM options, three design/pattern states, all six multi-select printing/embroidery techniques (with “In lụa Plastisol” initially selected), required name/telephone, optional brand/email/notes, all original placeholders, two section headings and CTA “XÁC NHẬN GỬI YÊU CẦU BÁO GIÁ NHANH”. Native checkbox inputs provide progressive enhancement without React.

Production mail tags: `[product-type] [quantity] [fabric] [pattern-status] [techniques] [your-name] [your-phone] [brand-name] [your-email] [your-message]`. Current mail state is inactive with `REQUIRES_PRODUCTION_RECIPIENT` and `skip_mail: on`.

Task 08 tests passed: empty required validation, invalid email, safe skip-mail success state, error rendering and keyboard order. Activate delivery only after the recipient and mail headers are verified.
