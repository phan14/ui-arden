# Task 09.2 — Deferred Redirect Implementation Plan

No redirect was activated. Source authority: `src/App.tsx` and `SITE_ROUTE_MAPPING.md`.

Preferred implementation after legitimate Rank Math Pro installation: Rank Math Redirections, if the installed licensed edition exposes the module. Otherwise use one dedicated Redirection plugin or server rules—never two layers simultaneously.

| Old URL | New URL | Type | Reason | Deferred implementation |
|---|---|---:|---|---|
| `/ve-chung-toi` | `/gioi-thieu/` | 301 | Preserve React About alias | Exact-path rule |
| `/dich-vu/ao-thun` | `/dich-vu/may-ao-thun/` | 301 | Preserve T-shirt service alias | Exact-path rule |
| `/dich-vu/so-mi` | `/dich-vu/may-ao-so-mi/` | 301 | Preserve Shirt service alias | Exact-path rule |
| `/dich-vu/quan` | `/dich-vu/may-quan/` | 301 | Preserve Pants service alias | Exact-path rule |
| `/dich-vu/ao-khoac` | `/dich-vu/may-ao-khoac/` | 301 | Preserve Jacket service alias | Exact-path rule |
| `/kien-thuc-vai` | `/bang-vai/` | 301 | Preserve Fabric Guide alias | Exact-path rule |
| `/quy-trinh-may-mau` | `/huong-dan-techpack/` | 301 | Preserve Techpack Guide alias | Exact-path rule |
| `/xuong-may` | `/nang-luc-san-xuat/` | 301 | Preserve Manufacturing alias | Exact-path rule |
| `/hoi-dap` | `/faq/` | 301 | Preserve FAQ alias | Exact-path rule |
| `/nhan-bao-gia` | `/bao-gia/` | 301 | Preserve Quote alias | Exact-path rule |
| `/tim-kiem` | `/?s={search-term}` | 301 | Map React Search to native WordPress Search | Query-aware rule; preserve the actual term and define empty-query behavior |

Implementation rules:

- Redirect directly to final canonical HTTPS paths; do not route through another alias.
- Match both trailing-slash variants without creating loops.
- Preserve unrelated safe query parameters only when required.
- For `/tim-kiem`, do not activate a blind redirect to an empty `?s=`; first confirm the React query key and map it to WordPress `s`.
- Test every rule with `curl -I` plus a browser after final domain/permalinks are configured.
- Verify all destinations return the intended 200 response and never chain through HTTP, localhost, or another redirect.
