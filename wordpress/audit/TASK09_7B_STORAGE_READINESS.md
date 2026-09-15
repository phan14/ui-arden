# TASK 09.7B — Storage Readiness

Hosting/storage access was not supplied, so capacity cannot be measured safely from public HTTP.

| Requirement | State |
|---|---|
| Total account quota | UNKNOWN — hosting access required |
| Current account usage | UNKNOWN |
| Production files size | UNKNOWN |
| Staging files size | UNKNOWN |
| Production/staging DB sizes | UNKNOWN |
| Free disk/inodes | UNKNOWN |
| DB quota/count available | UNKNOWN |
| Space for child theme/media/QA | NOT VERIFIED |
| Space for Restore Points B/C | NOT VERIFIED |

## Required check before integration

Record hosting-reported bytes and inode usage for production/staging webroots, database sizes, free quota and database limits. Estimate integration headroom as the child-theme package plus new media plus database growth plus temporary extraction space. Keep an operational safety margin set by the host; do not consume the last available quota.

Prefer an encrypted off-host Restore Point B. If only selective backup is feasible, it must include the full staging database, `wp-content/uploads`, current/Arden themes, relevant plugins/mu-plugins, `.htaccess`, staging `wp-config` settings without committing secrets, and a checksum/inventory manifest. Provider/Softaculous backup is acceptable only after its location, size and restore behavior are verified.

Do not create another on-host archive until free capacity has been measured.
