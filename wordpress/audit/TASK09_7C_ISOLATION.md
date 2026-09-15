# TASK 09.7C — Staging Isolation Verification

Date: 2026-08-27  
Scope: read-only verification; no integration or configuration change.

> Task 09.7D operator evidence supersedes the earlier UNKNOWN DB/webroot values: production DB `wainazqb_ardenstyle86`, staging DB `wainazqb_staging`, and staging webroot `/public_html/staging/`. These are manually confirmed by the operator; credentials were not supplied or recorded.

## Result

Database and filesystem isolation remain **NOT VERIFIED**. No cPanel/File Manager/SSH/SFTP/WP-CLI/database or authenticated WordPress access was supplied to this workspace. Public URLs cannot establish which database or writable paths serve each installation.

This is not evidence that isolation failed. Failure would require evidence such as identical `DB_NAME`, a shared writable webroot, or production mutation from staging. None was tested or observed.

## Database gate

| Field | Production | Staging | Result |
|---|---|---|---|
| Expected config | `public_html/wp-config.php` | `public_html/staging/wp-config.php` | Paths not accessible |
| `DB_NAME` | UNKNOWN | UNKNOWN | BLOCKED |
| `$table_prefix` | UNKNOWN | UNKNOWN | BLOCKED |
| Tables confined to DB | UNKNOWN | UNKNOWN | BLOCKED |
| Write isolation | UNKNOWN | UNKNOWN | BLOCKED |

Required cPanel/SSH read-only evidence: record only `DB_NAME` and `$table_prefix` from each config, redact all users/passwords/salts, confirm DB names differ, then list table names/counts in each database. Never copy a full `wp-config.php` into Git or chat.

If `DB_NAME` is equal, stop immediately with `STAGING ISOLATION FAILED — DO NOT CONTINUE`.

## Filesystem gate

| Check | Result |
|---|---|
| Separate `public_html/staging/` directory | Suggested by HTTP paths, not filesystem-verified |
| Staging `wp-admin` | Public route exists; physical directory not verified |
| Staging `wp-includes` | Not verified |
| Staging `wp-content` | Public assets resolve under staging; physical path not verified |
| Staging `wp-config.php` | Not verified |
| Symlink/reparse-point audit | Not verified |
| Shared writable uploads/plugins/themes | Not verified |

Required hosting evidence: resolved absolute paths, directory type/symlink targets and write ownership for production and staging core/content directories. Staging must be modifiable without writing production files.

## Public evidence retained from Task 09.7B

- Production and staging both return 200 on representative routes.
- WordPress 6.8.8, Flatsome/plugin assets and all seven sitemap counts/paths match.
- `/staging/wp-admin/` resolves to the staging login without a redirect loop.
- These support clone fidelity but do not satisfy the isolation gate.
