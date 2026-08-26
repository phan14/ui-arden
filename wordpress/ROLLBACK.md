# Backup and rollback

Pre-flight backups are under `wordpress/backups/task08-preflight-20260826/`: `mytest.sql`, `uploads.zip`, and `flatsome-child-live.zip`.

Before migration, additionally record active plugin versions, theme mods/menu assignments, WordPress/Site URLs and server/PHP versions. Verify backup hashes and restoration access.

Rollback order:

1. Put the site in maintenance/noindex mode and stop form traffic.
2. Restore the database snapshot using the database administration tool.
3. Restore uploads without deleting files until restored references are verified.
4. Restore the previous `flatsome-child` directory and activate the previous theme if needed.
5. Restore previous plugin versions/states; do not downgrade WordPress blindly.
6. Save permalinks, clear WordPress/Flatsome/server/CDN caches.
7. Verify Homepage, menus, Header/Footer, forms, Search, Project routes and admin login.
8. Reopen traffic only after smoke tests pass; keep indexing disabled during recovery.
