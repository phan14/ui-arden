# Form backend decision — Task 06B

No plugin was installed and no backend was enabled during the pilot.

| Option | Security | Spam protection | Maintenance | UX Builder integration | Editing |
|---|---|---|---|---|---|
| Contact Form 7 | Mature nonce, validation and escaping when kept current | Akismet/reCAPTCHA/Turnstile integrations | Small, established dependency | Flatsome has a native CF7 element | Form template in CF7; placement in UX Builder |
| WPForms | Mature validation and nonce handling | Built-in anti-spam; some providers depend on edition | Larger UI/dependency footprint | Embedded by block/shortcode | Friendly visual editor |
| Custom handler | Secure only if nonce, rate limits, validation and escaping are maintained locally | Must be designed locally | Highest ownership and regression burden | Requires custom element/shortcode | Least friendly for editors |

## Recommendation

Use **Contact Form 7**. Flatsome already recommends it and exposes a Builder element, giving this site the smallest maintenance surface. Before production, configure server-side validation, honeypot or Turnstile, rate limiting, explicit recipients and tested SMTP. Do not store sensitive uploads until retention and access rules are approved.
