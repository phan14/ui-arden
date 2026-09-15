# Task 09.2 — SEO Staging Configuration Specification

This is a configuration plan, not an applied Rank Math configuration. Rank Math Pro is absent and must only be installed from the owner’s legitimate ZIP/account.

## Ownership and global settings

- Rank Math is the sole owner of production title overrides, descriptions, canonicals, OpenGraph/Twitter tags, sitemap, and Organization/LocalBusiness/WebSite/WebPage/Article/Breadcrumb/FAQ schema once enabled.
- The child theme continues to own semantic HTML only. Do not add duplicate JSON-LD or meta tags to UX Builder/theme PHP.
- Keep `blog_public=0` throughout staging configuration and smoke testing.
- Organization/LocalBusiness name, subtype, logo, phone, address, hours, email, and social profiles remain blank/pending until the owner verifies them.
- Default OpenGraph/Twitter image: **USER INPUT REQUIRED**. Use one owner-approved image, recommended 1200×630 px, with safe center composition.
- Twitter card default: `summary_large_image` after an approved image exists.
- Breadcrumbs: enable Rank Math breadcrumbs and retain the existing theme integration; Rank Math alone emits Breadcrumb schema.

## Page metadata plan

Descriptions deliberately avoid unverified numeric/commercial claims. Replace `https://PRODUCTION-DOMAIN` only after the final HTTPS domain is confirmed.

| ID | Route | Proposed SEO title | Proposed meta description | Canonical |
|---:|---|---|---|---|
| 48 | `/` | Xưởng May Gia Công Local Brand B2B \| Arden | Arden cung cấp giải pháp sản xuất may mặc theo yêu cầu cho Local Brand và doanh nghiệp, từ phát triển mẫu đến hoàn thiện sản phẩm. | `https://PRODUCTION-DOMAIN/` |
| 81 | `/gioi-thieu/` | Giới Thiệu Xưởng May Arden | Tìm hiểu định hướng, quy trình làm việc và năng lực của xưởng may Arden dành cho thương hiệu thời trang và doanh nghiệp. | `https://PRODUCTION-DOMAIN/gioi-thieu/` |
| 82 | `/dich-vu/` | Dịch Vụ Sản Xuất Thời Trang B2B \| Arden | Khám phá các dịch vụ gia công áo thun, sơ mi, quần và áo khoác theo yêu cầu dành cho Local Brand và doanh nghiệp. | `https://PRODUCTION-DOMAIN/dich-vu/` |
| 83 | `/dich-vu/may-ao-thun/` | May Áo Thun Local Brand Theo Yêu Cầu \| Arden | Tìm hiểu dịch vụ phát triển mẫu và gia công áo thun Local Brand theo yêu cầu về kiểu dáng, chất liệu và kỹ thuật hoàn thiện. | `https://PRODUCTION-DOMAIN/dich-vu/may-ao-thun/` |
| 84 | `/dich-vu/may-ao-so-mi/` | May Áo Sơ Mi Local Brand Theo Yêu Cầu \| Arden | Tìm hiểu dịch vụ gia công áo sơ mi thời trang theo yêu cầu về phom dáng, chất liệu và chi tiết hoàn thiện. | `https://PRODUCTION-DOMAIN/dich-vu/may-ao-so-mi/` |
| 85 | `/dich-vu/may-ao-khoac/` | May Áo Khoác Và Hoodie Local Brand \| Arden | Tìm hiểu dịch vụ gia công áo khoác và hoodie theo thiết kế dành cho Local Brand và doanh nghiệp. | `https://PRODUCTION-DOMAIN/dich-vu/may-ao-khoac/` |
| 86 | `/dich-vu/may-quan/` | May Quần Thời Trang Local Brand \| Arden | Tìm hiểu dịch vụ gia công quần thời trang theo yêu cầu về phom, chất liệu, phụ liệu và kỹ thuật hoàn thiện. | `https://PRODUCTION-DOMAIN/dich-vu/may-quan/` |
| 87 | `/nang-luc-san-xuat/` | Năng Lực Sản Xuất Xưởng May Arden | Khám phá quy trình phát triển mẫu, cắt, may, kiểm soát chất lượng và hoàn thiện sản phẩm tại Arden. | `https://PRODUCTION-DOMAIN/nang-luc-san-xuat/` |
| 95 | `/faq/` | Câu Hỏi Thường Gặp Về Gia Công May Mặc \| Arden | Giải đáp các câu hỏi thường gặp về quy trình làm mẫu, đặt hàng, chất liệu, sản xuất và hoàn thiện sản phẩm. | `https://PRODUCTION-DOMAIN/faq/` |
| 96 | `/lien-he/` | Liên Hệ Xưởng May Arden | Gửi yêu cầu tư vấn sản xuất may mặc hoặc liên hệ Arden để trao đổi về sản phẩm, chất liệu và quy trình hợp tác. | `https://PRODUCTION-DOMAIN/lien-he/` |
| 97 | `/bao-gia/` | Nhận Báo Giá Sản Xuất May Mặc \| Arden | Gửi thông tin sản phẩm, số lượng, chất liệu và yêu cầu hoàn thiện để Arden tiếp nhận và tư vấn báo giá. | `https://PRODUCTION-DOMAIN/bao-gia/` |
| 98 | `/tuyen-dung/` | Cơ Hội Nghề Nghiệp Tại Arden | Xem thông tin tuyển dụng và các vị trí làm việc tại Arden. Nội dung vị trí cần được xác nhận trước khi công bố. | `https://PRODUCTION-DOMAIN/tuyen-dung/` |
| 99 | `/chinh-sach/` | Chính Sách Và Điều Khoản \| Arden | Tham khảo chính sách bảo mật, bảo hành, vận chuyển, đổi trả và điều khoản sử dụng của Arden. | `https://PRODUCTION-DOMAIN/chinh-sach/` |
| 100 | `/bang-vai/` | Bảng Vải Và Kiến Thức Chất Liệu \| Arden | Tra cứu nhóm chất liệu và thông tin tham khảo để lựa chọn vải phù hợp cho sản phẩm thời trang. | `https://PRODUCTION-DOMAIN/bang-vai/` |
| 101 | `/huong-dan-techpack/` | Hướng Dẫn Chuẩn Bị Techpack May Mặc \| Arden | Hướng dẫn chuẩn bị thông tin thiết kế, thông số, chất liệu và chi tiết kỹ thuật cho hồ sơ Techpack sản xuất. | `https://PRODUCTION-DOMAIN/huong-dan-techpack/` |
| 111 | `/tin-tuc/` | Cẩm Nang Và Kiến Thức May Mặc \| Arden | Tổng hợp nội dung về chất liệu, phát triển sản phẩm và quy trình sản xuất dành cho thương hiệu thời trang. | `https://PRODUCTION-DOMAIN/tin-tuc/` |

All titles/descriptions require owner/editor approval before application. Page-specific social/featured images are **USER INPUT REQUIRED** where no approved image exists.

## Dynamic content and archives

| Type/route | Title pattern or action | Schema/index policy |
|---|---|---|
| Blog Post | `%title% \| Arden` | Article; index only approved real Posts; include in Posts sitemap |
| Category | `%term% \| Cẩm Nang Arden` | Index only categories with unique useful descriptions; noindex thin/validation categories |
| Project single | `%title% \| Dự Án Arden` | WebPage or approved Project-compatible schema; index only real approved Projects |
| `/du-an/` archive | `Dự Án May Mặc Đã Thực Hiện \| Arden` | Include only when real Projects exist; otherwise noindex or retain protected staging state |
| `/tin-tuc/` | Use page 111 title/description | Include only after approved real Posts/publication policy is set |
| Search `/?s=` | Dynamic UI title only | `noindex,follow`; exclude from sitemap |
| 404 | No SEO landing title required | `noindex,nofollow`; never in sitemap |
| Attachment URLs | Noindex/redirect to parent as appropriate | Exclude from sitemap |

## Sitemap and validation

- Include approved Pages, Posts, Projects, and only useful taxonomies.
- Exclude search, 404, attachments, default sample Post, Draft validation records, and validation category.
- Generate sitemap only after Rank Math is installed and final domain/content policy is set.
- Before indexing: verify source for a representative Page, Post, Project, archive, Search, and 404; confirm one canonical, one robots directive, one schema owner, correct OG/Twitter output, and no localhost URL.

USER ACTION REQUIRED — INSTALL RANK MATH PRO from the legitimate owner ZIP/account. No commercial plugin files were downloaded or committed by Task 09.2.
