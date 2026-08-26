# Task 08.8 baseline

Captured before any Task 08.8 fidelity repair on 2026-08-26 (Asia/Bangkok).

## Repository and runtime

- Git HEAD: `8e40f761d8ab8a329494192abb45375051d9f43e`
- Child-theme source version: `2.0.1`
- Child-theme WordPress runtime version: `2.0.1`
- WordPress front page ID: `48`
- Search-engine visibility: `blog_public=0`
- React reference: `http://localhost:3000/`
- WordPress target: `http://localhost/mytest/`

## Draft-state lock

The converted Pages below were verified as Draft before repair:

`81, 82, 83, 84, 85, 86, 87, 95, 96, 97, 98, 99, 100, 101, 111`

No Task 08.8 action may publish these Pages, enable indexing, deploy, or create a release ZIP.

## Protected existing worktree

The worktree was already dirty when Task 08.8 began. It contains legitimate Task 08.6C/08.7 source changes, raw test JSON, screenshots, reports, and validation tools. Those changes are treated as protected input: no reset, checkout, deletion, or wholesale regeneration is authorized.

Notable pre-existing modified source files:

- `wordpress/flatsome-child/inc/shortcodes.php`
- `wordpress/import/pages/tshirt-service-flatsome.txt`
- `wordpress/tools/task08_6c_shortcode_probe.php`

## Source-file fingerprints

SHA-256 values captured before Task 08.8 edits:

| File | SHA-256 |
|---|---|
| `style.css` | `130E990A724C3DB5898748E2B83DAE5EEA6FAB26AE1A57BBEB82B6650461C49E` |
| `functions.php` | `37D8B25F938FDC2C7C418F87A0ACFF35FECEB4A1BA25BFE530E781ED09F86FD3` |
| `assets/css/arden.css` | `52C4411E637C2B4C60670EF12BCB6DD1F099C8D109F8406686D9F6F8040D8194` |
| `assets/css/react-pages.css` | `61C82E3E75166EAAE43219239A08957FB9E5D29E417126726A90FC559C3B097E` |
| `assets/js/native-interactions.js` | `C5EE9DA36C4A9531DAF04AE976C4B3814F0949BA29619ECB803C7774C64091EC` |
| `inc/shortcodes.php` | `765DFB8FC7D5AD01B94DF834CC2A8D4A0724F5BABF5B3C3D66EB5CCE7A609A53` |

## Acceptance evidence inherited from Task 08.7

- 84/84 route-breakpoint cases passed technical runtime and responsive safety.
- Strict visual result was 0/84 because all routes retained computed-style differences.
- Critical focused interactions passed 84/84.
- Contact and Quote empty, invalid, and valid frontend states passed with production mail skipped.
- Dynamic states passed 8/8; admin destinations passed 10/10.
- Twenty local Media Library attachments passed dimensions, alt text, and local-URL checks.
- P0: 0; P1: 4; P2: 4; P3: 1.

This baseline is the rollback/comparison reference for Task 08.8 only.
