# WordPress Draft Sync Log

Local site: `http://localhost/mytest/`  
All post-like records below remain `draft`.

| Batch | React component / purpose | WordPress ID | Slug/route | Type | Status | Source | Runtime |
|---|---|---:|---|---|---|---|---|
| A | AboutPage | 81 | `gioi-thieu` | Page | draft | `about-flatsome.txt` | PASS |
| A | ServicesPage | 82 | `dich-vu` | Page | draft | `services-flatsome.txt` | PASS |
| A | TShirtServicePage | 83 | `dich-vu/may-ao-thun` | Child Page | draft | `tshirt-service-flatsome.txt` | PASS |
| A | ShirtServicePage | 84 | `dich-vu/may-ao-so-mi` | Child Page | draft | `shirt-service-flatsome.txt` | PASS |
| A | JacketServicePage | 85 | `dich-vu/may-ao-khoac` | Child Page | draft | `jacket-service-flatsome.txt` | PASS |
| A | PantsServicePage | 86 | `dich-vu/may-quan` | Child Page | draft | `pants-service-flatsome.txt` | PASS |
| A | ManufacturingPage | 87 | `nang-luc-san-xuat` | Page | draft | `manufacturing-flatsome.txt` | PASS |
| B | FAQPage | 95 | `faq` | Page | draft | `faq-flatsome.txt` | PASS; interaction pending |
| B | ContactPage | 96 | `lien-he` | Page | draft | `contact-flatsome.txt` | PASS; backend pending |
| B | QuotePage | 97 | `bao-gia` | Page | draft | `quote-flatsome.txt` | PASS; backend pending |
| B | CareersPage | 98 | `tuyen-dung` | Page | draft | `careers-flatsome.txt` | PASS; interaction pending |
| B | PoliciesPage | 99 | `chinh-sach` | Page | draft | `policies-flatsome.txt` | PASS |
| B | FabricGuidePage | 100 | `bang-vai` | Page | draft | `fabric-guide-flatsome.txt` | PASS; interaction pending |
| B | TechpackGuidePage | 101 | `huong-dan-techpack` | Page | draft | `techpack-guide-flatsome.txt` | PASS |
| C | NewsPage | 111 | `tin-tuc` | Page/template target | draft | `page-tin-tuc.php` | PASS with validation query |
| C | News validation seed | 109 | `task05-bai-viet-kiem-thu` | Post | draft | Validation-only record | PASS |
| C | CaseStudyPage validation seed | 110 | `task05-du-an-kiem-thu` | Project CPT | draft | Validation-only record | PASS |
| C | CategoryPage validation term | term 3 | `chuyen-muc/task-05-validation` | Category | taxonomy | Validation-only term | PASS |
| C | ProjectsPage | — | `du-an` | Project archive template | system | `archive-project.php` | PASS |
| C | SearchPage | — | `?s=` | Search template | system | `search.php` | PASS |
| C | NotFoundPage | — | unmatched route | 404 template | system | `404.php` | PASS with expected HTTP 404 |

No published post/page/project content was overwritten.

