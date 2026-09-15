# TASK 09.7B — Ardenstyle Clone Fidelity

## Publicly verified parity

| Item | Production | Staging | Result |
|---|---|---|---|
| WordPress generator | 6.8.8 | 6.8.8 | MATCH |
| Public theme assets | Flatsome | Flatsome | MATCH |
| Public plugin assets | WooCommerce, CF7 and same visible plugin set | Same visible set | MATCH |
| Homepage | 200 | 200 | MATCH |
| Contact sample | 200 | 200 | MATCH |
| Service sample `/dich-vu/` | 200 | 200 | MATCH |
| Shop sample `/cua-hang-xuong-may-arden/` | 200 | 200 | MATCH |
| News archive `/tin-tuc/` | 200 | 200 | MATCH |
| Post sitemap | 42 | 42 | MATCH; path diff 0 |
| Page sitemap | 12 | 12 | MATCH; path diff 0 |
| Product sitemap | 62 | 62 | MATCH; path diff 0 |
| Category sitemap | 1 | 1 | MATCH; path diff 0 |
| Product-category sitemap | 13 | 13 | MATCH; path diff 0 |
| Video sitemap | 3 | 3 | MATCH; path diff 0 |
| Local sitemap | 1 | 1 | MATCH by count |
| Homepage robots | index/follow | noindex/nofollow | EXPECTED STAGING DIFFERENCE |
| Homepage canonical | production self-canonical | canonical omitted while noindex | REVIEW BEFORE INTEGRATION/CUTOVER |

Staging sitemap URLs correctly use the `/staging/` prefix. Public structure strongly indicates a Softaculous clone, but public HTTP cannot prove database/filesystem isolation or complete record parity.

## Not authenticated / not verified

- database names, credentials, table prefixes and write isolation;
- document roots, symlinks and shared writable directories;
- exact active-plugin list and versions;
- database counts for posts/pages/products/attachments/terms/users/comments/orders;
- Media Library files/checksums, menus, widgets, UX Blocks and forms;
- permalink option, WooCommerce configuration/HPOS/orders and scheduled actions;
- Rank Math modules, metadata tables, redirects and schema templates;
- server/LiteSpeed/CDN redirects and configuration.

These gaps prevent approval for Task 09.8.
