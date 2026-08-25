# Font & Color Audit — React → WordPress

Audit date: 2026-08-25  
Viewport: 1440 × 900  
Reference: `http://localhost:3000/`  
WordPress: `http://localhost/mytest/`

## Font sources

- Body/UI: `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800.
- Headings: `Be Vietnam Pro`, weights 600, 700, 800, 900.
- WordPress loads these weights from the child theme enqueue; all nine requested faces pass `document.fonts.check()` after loading Vietnamese text.
- Scope `.arden-site` overrides Flatsome typography and applies `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.

The React stylesheet declares the same two families, but its current development page does not enqueue Plus Jakarta Sans for body text and therefore reports the operating-system fallback. WordPress follows the declared React design source and uses Plus Jakarta Sans; it does not copy that transient missing-font fallback.

## Computed-style comparison

| Element | React | WordPress | Result |
|---|---|---|---|
| Body | 400, 16/24, tracking -0.16px | 400, 16/24, tracking -0.16px | Match |
| Hero H1 | 900, 48/55.2, tracking -1.2px, `#020617` | Same | Match |
| Hero description | 400, 16/26, tracking -0.16px, `#475569` | Same | Match |
| Trust H3 | 900, 14/19.25, tracking -0.35px, `#1e293b` | Same | Match |
| Trust text | 400, 12/19.5, `#475569` | Same | Match |
| Services H2 | 900, 36/43.2, tracking -0.9px, `#020617` | Same | Match |
| Service H3 | 900, 18/28, tracking -0.45px, `#1e293b` | Same (browser rounding: 28.0008px) | Match |
| Service text | 400, 14/22.75, `#475569` | Same | Match |
| Hero CTA | 900, 14/20, tracking 1.4px, `#fff` on `#1e3a8a` | Same | Match |
| Card outline CTA | 700, 12/16, tracking 0.6px, `#1e293b`, border `#cbd5e1` | Same | Match |
| Navigation | 700, 12/16, tracking 0.6px | Same | Match |

## Canonical tokens

- `--arden-navy: #0f172a`
- `--arden-blue: #2563eb`
- `--arden-dark: #0f172a`
- `--arden-gold: #f59e0b`
- `--arden-gold-hover: #d97706`
- Primary button (React `blue-900`): `#1e3a8a`
- Primary hover (React `blue-800`): `#1e40af`

## Verdict

**NO UNAPPROVED FONT OR COLOR DIFFERENCE.**

The only intentional runtime distinction is that WordPress successfully loads the declared body font while the React development page currently falls back to the operating-system font because that face is not enqueued there.
