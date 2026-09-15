# Task 09 — Backup Plan

Date: 2026-08-26. Do not delete any Task 08 backups.

---

## Existing Backup (Task 08 Preflight, 2026-08-26)

| File | Size | Location |
|---|---:|---|
| mytest.sql | 3.5 MB | wordpress/backups/task08-preflight-20260826/ |
| uploads.zip | 1.7 MB | wordpress/backups/task08-preflight-20260826/ |
| flatsome-child-live.zip | 34 KB | wordpress/backups/task08-preflight-20260826/ |

This backup represents the pre-Task-08 state. Preserve it as a historical rollback snapshot.
Its restore validity was not independently retested during Task 09.1; do not call it verified
until a restore test succeeds.

---

## Required: New Staging Snapshot (Task 09, pre-migration)

A new backup must be taken from the local XAMPP site immediately before production migration begins,
capturing the Task 08.11 final accepted state (commit 5dc2344c920afa87bdf58b713e1963f3dbc78be9).

### Backup Checklist

- [ ] Database: Export full mytest database.
      Tool: mysqldump -u root -p mytest > mytest-task09-YYYYMMDD.sql
      Or use phpMyAdmin > Export > Custom > All tables > SQL format.
      Target: wordpress/backups/task09-staging-YYYYMMDD/mytest-task09-YYYYMMDD.sql

- [ ] Uploads: Archive complete uploads directory.
      Source: C:\xampp\htdocs\mytest\wp-content\uploads
      Target: wordpress/backups/task09-staging-YYYYMMDD/uploads-task09-YYYYMMDD.zip

- [ ] Child theme: Zip the current runtime directory.
      Source: wordpress/flatsome-child/
      Target: wordpress/flatsome-child-2.0.1.zip (also keep a dated copy)

- [ ] Parent theme: Record Flatsome version number (confirmed 3.17.7 at Task 08 preflight).
      Do not redistribute licensed theme files.

- [ ] Plugin list: Export active/inactive plugin list with versions.
      WP-CLI: wp plugin list --format=csv > plugins-task09-YYYYMMDD.csv
      Or record manually from wp-admin > Plugins.

- [ ] wp-config.php constants: Record table prefix (wp_), WP_DEBUG state and any custom constants.
      Do not commit database credentials to git.

- [ ] Git commit: Record current commit SHA.
      Current accepted SHA: 5dc2344c920afa87bdf58b713e1963f3dbc78be9
      Verify with: git rev-parse HEAD

- [ ] Backup verification: Attempt a test restore of the SQL dump to a separate local database
      instance to confirm the backup is valid before migration begins.

---

## Production Pre-Deployment Backup

Before migrating to the live production server:

- [ ] Back up production database (full SQL export).
- [ ] Archive production wp-content/uploads directory.
- [ ] Archive production wp-content/themes/ directory.
- [ ] Record production WordPress version, PHP version and active plugin list.
- [ ] Verify restore access: confirm you can restore each backup to production in a disaster scenario.

---

## Child Theme Version History

| Version | File | State |
|---|---|---|
| 1.1.0 | wordpress/flatsome-child-1.1.0.zip | Historical |
| 1.2.0 | wordpress/flatsome-child-1.2.0.zip | Historical |
| 1.3.0 | wordpress/flatsome-child-1.3.0.zip | Historical |
| 2.0.0 | wordpress/flatsome-child-2.0.0.zip | Task 08 baseline package |
| 2.0.1 | wordpress/flatsome-child/ (runtime) | Current — Task 08.11 accepted |

Create flatsome-child-2.0.1.zip from the runtime directory for production deployment.
Retain all historical ZIPs until the production site is stable and verified post-launch.

---

## Retention Policy

- Task 08 preflight backup: keep indefinitely.
- Task 09 staging snapshot: keep until production is verified post-launch.
- Production pre-deployment backup: keep indefinitely.
- Historical child theme ZIPs: keep until post-launch stability confirmed.

---

## Rollback Path

If a production release fails:
1. Put the site in maintenance mode; stop form traffic.
2. Restore production database from the pre-deployment backup.
3. Restore production uploads without deleting files until restored references are verified.
4. Activate the previous child theme ZIP; restore the previous theme directory if needed.
5. Save Settings > Permalinks; clear WordPress/Flatsome/server/CDN caches.
6. Verify Homepage, menus, Header/Footer, forms, Search, Project routes and admin login.
7. Reopen traffic only after smoke tests pass; keep indexing disabled during recovery.

Full rollback procedure: wordpress/ROLLBACK.md
