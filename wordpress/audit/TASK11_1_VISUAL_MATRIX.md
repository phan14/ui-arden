# Task 11.1 visual matrix

Fresh final capture: `wordpress/audit/task11_1-final-144/` contains exactly **144 PNGs**: 18 routes × 4 viewports × reference/current. Viewports: 1440, 1024, 768 and 390. `computed-style-comparison.json` accompanies the images.

| Route | HTTP/render | Overflow | Visual status |
|---|---|---|---|
| Home | PASS | 0 | FAIL — mobile V1 |
| About | PASS | 0 | REVIEW — V2 |
| Services | PASS | 0 | No Task 11.1 regression observed |
| T-shirt | PASS | 0 | No Task 11.1 regression observed |
| Shirt | PASS | 0 | No Task 11.1 regression observed |
| Jacket | PASS | 0 | No Task 11.1 regression observed |
| Pants | PASS | 0 | No Task 11.1 regression observed |
| Projects | PASS | 0 | REVIEW — V2 |
| Case Study | PASS | 0 | REVIEW — V2 |
| News | PASS | 0 | REVIEW — V2 |
| Fabric Guide | PASS | 0 | REVIEW — V2/icon V1 |
| Techpack | PASS | 0 | No Task 11.1 regression observed |
| Contact | PASS | 0 | No Task 11.1 regression observed |
| Policies | PASS | 0 | No Task 11.1 regression observed |
| Search | PASS | 0 | REVIEW — V2 |
| Careers | PASS | 0 | No Task 11.1 regression observed |
| FAQ | PASS | 0 | No Task 11.1 regression observed |
| Quote | PASS | 0 | No Task 11.1 regression observed |

The capture tool verifies HTTP/render, overflow, logged-out admin-bar state and computed styles. The focused structural validator passes Search, News, Projects and Fabric Guide. It does not prove every interaction/content invariant across all 72 WordPress cases; therefore the matrix does not promote screenshot existence to complete functional PASS.
