# Task 09.8B Package Manifest

## Frozen source

- Source branch: `copilot-task08`
- Source HEAD SHA: `5dc2344c920afa87bdf58b713e1963f3dbc78be9`
- Source theme path: `wordpress/flatsome-child/`
- Theme name: Arden Flatsome Child
- Theme version: 2.0.1
- Parent theme: `flatsome`
- Source inventory: 21 files, 183,384 bytes

## Deployment artifact

- ZIP path: `wordpress/deploy/arden-child-2.0.1-staging.zip`
- ZIP filename: `arden-child-2.0.1-staging.zip`
- ZIP size: 42,333 bytes
- Extracted size: 183,384 bytes
- Top-level directory: `flatsome-child/`
- Total runtime files: 21
- PHP: 13
- CSS: 6
- JavaScript: 1
- Images/assets: 1 SVG
- SHA-256: `FD5CCE72AD28BCC50951DA266CA2BB51884238F62339ADA32F482E2383C01990`

## Validation

- Exactly one top-level theme directory: PASS
- Required WordPress theme files and templates: PASS
- PHP lint from extracted ZIP: PASS — 13/13
- Staging subdirectory path audit: PASS
- Secret and prohibited-file scan: PASS
- Full source-to-package asset integrity: PASS — 21/21 hashes match
- Database/content mutation audit: PASS — no automatic import, deletion, URL/indexing, mail, webhook or payment mutation code

## Critical source/package hashes

| File | SHA-256 |
|---|---|
| `style.css` | `130E990A724C3DB5898748E2B83DAE5EEA6FAB26AE1A57BBEB82B6650461C49E` |
| `functions.php` | `B0FB463EF8945BCD08BC244047EAB8D3291A2FD1EA6D9CD07041288A6AA2973E` |
| `assets/css/arden.css` | `A97C2FF1960DE3E15CBF719D69E553D93A4844CD9702E18B7FB313CA91B9C46E` |
| `assets/js/native-interactions.js` | `C74B8D76291699BF8FC7248335A0511C055B182F339E1C1D1B3EE092C906E775` |

The archive contains no Flatsome parent theme, React project, audit material, tests, screenshots, SQL, configuration, credentials, logs, caches or backups.

