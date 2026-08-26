# Form security

Contact Form 7 6.1.7 was installed from the verified `downloads.wordpress.org/plugin/contact-form-7` package and activated. CF7 owns nonces, REST submission, validation and output escaping; there is no custom mail endpoint.

Forms 173 (`Arden Contact`) and 175 (`Arden Quote`) are embedded in Draft pages 96 and 97. Mail is intentionally inactive, `skip_mail: on` is set, and `_arden_recipient_status` is `REQUIRES_PRODUCTION_RECIPIENT`. This allows safe local success-state testing without sending mail.

Before production:

1. Enter a verified recipient and reply-to configuration, activate Mail, remove `skip_mail: on`, then send a controlled test from an authorized address.
2. Start with Akismet (official/maintained) and server/WAF rate limiting. Add CF7 Turnstile/reCAPTCHA only if measured spam requires it; avoid unnecessary UX friction.
3. Keep WordPress, CF7 and spam integration updated; use HTTPS and restrict admin capability.
4. Do not log sensitive form bodies longer than operationally required. Document retention/privacy consent.
5. Re-test required, invalid, success, mail-failure and keyboard/status-announcement paths.
