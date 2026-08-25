# Site Route Mapping

React routing source: `src/App.tsx`. Canonical WordPress slugs retain the first explicit React route; aliases should redirect to the canonical target rather than create duplicate pages.

| React route(s) | React component | WordPress target | Type |
|---|---|---|---|
| `/` | `HomePage` | Static front page | Existing Home workstream |
| `/gioi-thieu`, `/ve-chung-toi` | `AboutPage` | Page `gioi-thieu`; alias redirect | Static UX Builder |
| `/dich-vu` | `ServicesPage` | Page `dich-vu` | Static UX Builder |
| `/dich-vu/may-ao-thun`, `/dich-vu/ao-thun` | `TShirtServicePage` | Child page `dich-vu/may-ao-thun`; alias redirect | Service landing |
| `/dich-vu/may-ao-so-mi`, `/dich-vu/so-mi` | `ShirtServicePage` | Child page `dich-vu/may-ao-so-mi`; alias redirect | Service landing |
| `/dich-vu/may-quan`, `/dich-vu/quan` | `PantsServicePage` | Child page `dich-vu/may-quan`; alias redirect | Service landing |
| `/dich-vu/may-ao-khoac`, `/dich-vu/ao-khoac` | `JacketServicePage` | Child page `dich-vu/may-ao-khoac`; alias redirect | Service landing |
| `/bang-vai`, `/kien-thuc-vai` | `FabricGuidePage` | Page `bang-vai`; alias redirect | Static UX Builder |
| `/huong-dan-techpack`, `/quy-trinh-may-mau` | `TechpackGuidePage` | Page `huong-dan-techpack`; alias redirect | Static UX Builder |
| `/nang-luc-san-xuat`, `/xuong-may` | `ManufacturingPage` | Page `nang-luc-san-xuat`; alias redirect | Static UX Builder |
| `/du-an` | `ProjectsPage` | Project CPT archive | Dynamic WordPress |
| `/du-an/*` | `CaseStudyPage` | Project CPT single | Dynamic WordPress |
| `/chuyen-muc/*` | `CategoryPage` | WordPress category archive | Dynamic WordPress |
| `/tim-kiem` | `SearchPage` | WordPress search template (`?s=`) | Dynamic/system |
| `/faq`, `/hoi-dap` | `FAQPage` | Page `faq`; alias redirect | Static UX Builder |
| `/tin-tuc`, `/tin-tuc/*` | `NewsPage` | Posts page/archive and single post | Dynamic WordPress |
| `/bao-gia`, `/nhan-bao-gia` | `QuotePage` | Page `bao-gia`; alias redirect | Static UX Builder |
| `/lien-he` | `ContactPage` | Page `lien-he` | Static UX Builder |
| `/chinh-sach` | `PoliciesPage` | Page `chinh-sach` | Static UX Builder |
| `/tuyen-dung` | `CareersPage` | Page `tuyen-dung` | Static UX Builder |
| unmatched | `NotFoundPage` | `404.php` | System template |

## Counts

- React page components: 21 including Home and NotFound.
- Remaining Task 04 components: 20.
- Static UX Builder targets: 10.
- Service landing targets: 4.
- Dynamic targets: 5 component-level targets (News, Category, Search, Projects, Case Study).
- System coverage: 404, archive/posts, single post, search, project archive and project single.

