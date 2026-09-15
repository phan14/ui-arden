# Task 09.8B-R Local Install Evidence and Staging Handoff

## Disposable local target

- WordPress clone: `D:/000008/task09_8b_r_wp_install_20260828/`
- Clone URL: `http://127.0.0.1:8098/`
- Database: task-specific local clone
- Production/staging access: none

The source `/mytest` files were copied to a disposable root without the child-theme directory. Its database was cloned locally and its home/site URL isolated. The package was installed using WordPress Core `Theme_Upgrader`, the same backend used by Appearance → Themes → Upload Theme.

## Upload and activation result

- WordPress ZIP acceptance: PASS
- Extraction/copy: PASS
- “Could not copy file” recurrence: no
- Theme visible to WordPress: PASS
- Theme name: Arden Flatsome Child
- Theme version: 2.0.1
- Parent template: flatsome
- Licensed parent present: PASS
- Local activation: PASS

The final artifact with SHA-256 `71D03F411863242672B2D9AADC2878055BCD4195C021E6F3F8A9376C601911B0` was reinstalled after its deterministic rebuild and activated again before the final smoke test.

## Post-install smoke test

| Route | HTTP | CSS | JS | Images | Fatal/console/network errors | Admin bar | Result |
|---|---:|---|---|---|---|---|---|
| Home | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| About | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Services | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Projects | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Project case study | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| News | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Article | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Quote | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| FAQ | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Search | 200 | PASS | PASS | PASS | 0 | absent | PASS |
| Contact | 200 | PASS | PASS | PASS | 0 | absent | PASS |

The first clone smoke attempt exposed copied Kirki font-cache filesystem paths. This was clone-state data, not package content. The paths were normalized only in the disposable database; the theme source and ZIP were unchanged. The final smoke run then passed 11/11.

## Manual staging upload boundary

This evidence permits a later manual upload to protected Arden staging only. It does not perform or authorize production deployment, Push to Live, indexing changes, or any action on `xuongmaygiatot.vn`.
