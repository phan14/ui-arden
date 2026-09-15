# Task 09.3 — Prepared Migration Manifest

Status: logical package prepared; no final transfer bundle was built because the target and migration scenario are unknown.

## Source assets ready

| Layer | Source | Status/handling |
|---|---|---|
| Database/content/options | Restore-tested Task 09.2 SQL backup | Available; full import only for verified new/empty target |
| Uploads/Media Library | Task 09.2 uploads archive + attachment rows in SQL | Available; move records/files together |
| Arden child theme 2.0.1 | Task 09.2 live-theme archive / repository `wordpress/flatsome-child/` | Available; verify checksum after transfer |
| Flatsome parent 3.17.7 | Licensed archive outside repository | File available; license/production activation still requires owner confirmation |
| Contact Form 7 | Official wordpress.org package on target; definitions in DB | Required; keep forms 173/175 mail-locked during staging |
| Classic Editor | Official wordpress.org package | Optional; Active locally for current workflow |
| Akismet | Official wordpress.org package | Optional; Inactive locally |
| Rank Math Pro | Owner’s legitimate ZIP/account | MISSING; do not include in repository/package |
| UX Builder Pages | Homepage 48 + 15 Draft pages in DB | Preserve statuses; selective import must verify IDs/parents |
| UX Blocks | IDs 26, 28, 30, 33, 35, 37, 39, 59 | All 8 must resolve after import |
| Menus/Header/Footer | Menu/theme mods/options + Footer Block 59 | Verify assignments and remapped references |
| CF7 | Forms 173/175 plus their postmeta | Preserve `skip_mail: on`/placeholder recipient on staging |
| Media | 21 attachment records/files including map 203 | Verify paths, metadata, dimensions, alt, and remapped IDs |

## Scenario gate

- **Scenario A — new/empty WordPress:** full database migration is allowed only after target backup and explicit confirmation that no unrelated data will be overwritten.
- **Scenario B — existing WordPress with data:** selective migration only. Do not import the full SQL over production. Import approved Pages, 8 UX Blocks, media, menus/settings, and Arden CF7 forms with explicit relationship/ID verification.

Current scenario: **UNDETERMINED**. Migration must not start.

## Package exclusions

Do not transfer into the production theme/package:

- React `src/` or Vite development output;
- `wordpress/audit/`, screenshots, references, blueprints, import source, tools, or test scripts;
- local backup directories as web-accessible production files;
- `node_modules/`, `.git/`, historical child-theme ZIPs;
- validation artifacts as public content;
- commercial Rank Math Pro or Flatsome files in Git.

## Post-transfer integrity checks

- SHA-256 child-theme files against source.
- `stylesheet=flatsome-child`, version 2.0.1, parent `flatsome` present.
- `blog_public=0`; 15/15 converted pages Draft.
- Eight UX Blocks and primary menu/Header/Footer assignments resolve.
- 21 media files load without localhost/mixed content.
- CF7 173/175 render but remain mail-locked.
- Sample Post ID 1 remains a documented publication blocker unless owner-approved cleanup occurs.
- Redirects remain inactive unless separately authorized.
