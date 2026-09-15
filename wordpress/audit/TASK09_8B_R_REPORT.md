# Task 09.8B-R — Post-Fix Staging ZIP Rebuild

Date: 2026-08-28  
Mode: local packaging and disposable local WordPress verification only.

## Result

The obsolete `arden-child-2.0.1-staging.zip` was not reused or overwritten. A new artifact was built from the exact current `wordpress/flatsome-child/` source verified by Task 09.8A-R.

Artifact: `wordpress/deploy/arden-child-2.0.1-task09_8b_r-staging.zip`  
Size: 46,643 bytes  
SHA-256: `71D03F411863242672B2D9AADC2878055BCD4195C021E6F3F8A9376C601911B0`

## Previous failure diagnosis

The red-capable regression command invokes WordPress Core `unzip_file()`. With the obsolete ZIP it deterministically returns `WORDPRESS_UNZIP_FAIL: Could not copy file.` The archive has Windows backslashes in every entry and zero directory attributes for `flatsome-child\assets\`.

The new builder writes standard forward-slash entries and explicit directory attributes, excludes the empty `template-parts/` directory, and produces a deterministic SHA. The same WordPress regression command returns `WORDPRESS_UNZIP_PASS` for the new ZIP.

## Source gate

- Required runtime assets: 14/14 present
- Source PHP lint: 14/14 PASS
- Secret candidates: 0
- Local absolute-path references: 0
- Localhost references: 0
- Development-only packaged files: 0
- `git diff --check`: PASS
- Theme UI/content source modification for packaging: none

## Package gate

- One root directory `flatsome-child/`: PASS
- Entries/files/directories: 28/22/6
- Unsafe, duplicate, backslash or nested entries: 0
- Clean WordPress Core extraction: PASS
- Source ↔ ZIP file hash comparison: 22/22 PASS
- Extracted PHP lint: 14/14 PASS
- Deterministic repeated build: PASS

## WordPress local upload gate

- Disposable WordPress clone: PASS
- Core `Theme_Upgrader` upload/install: PASS
- Copy/extraction error: none
- Theme metadata recognized: PASS
- Parent Flatsome resolved: PASS
- Local activation: PASS
- Final-artifact reinstall: PASS
- Post-install smoke test: 11/11 PASS

## Independent code review

### Standards axis

- No repository coding-standard document was present, so no hard standards violation was identified.
- The disposable clone identity is intentionally repeated as a fixed safety allow-list: these one-off helpers must target only the named local clone and must not become a general deployment mechanism.
- The clone configuration loader now verifies that its database, `ABSPATH`, and opening-tag rewrites each occur exactly once before evaluation. A mismatch fails closed.

### Specification axis

- Artifact identity, structure, byte equality, and required declarations: PASS.
- The original smoke harness could accept pending lazy-loaded images and did not capture transport failures without an HTTP response.
- The regression harness now scrolls the complete page to trigger lazy loading, waits for all images to settle, rejects pending or zero-width images, and records Playwright `requestfailed` events. The strengthened fresh run passed 11/11 routes.

Review total: 2 actionable findings, both resolved. Worst pre-resolution severity: Medium. Remaining packaging blockers: 0.

## Required declarations

SOURCE PACKAGE VERIFIED  
ZIP EXTRACTION VERIFIED  
WORDPRESS LOCAL UPLOAD VERIFIED  
LOCAL ACTIVATION VERIFIED  
POST-INSTALL SMOKE TEST VERIFIED

No staging/production domain, DNS, indexing, or Push to Live action was performed. `ardenstyle.vn` and `xuongmaygiatot.vn` were untouched.

TASK 09.8B-R PASS — NEW ZIP READY FOR MANUAL STAGING UPLOAD
