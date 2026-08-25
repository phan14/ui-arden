# WordPress & Flatsome UX Builder Architecture Guide
## Xưởng May Arden - Design System to Flatsome Theme Conversion

Tài liệu này hướng dẫn chi tiết quy trình chuyển đổi toàn bộ giao diện **Xưởng May Arden** từ React/Tailwind sang hệ sinh thái **WordPress + Flatsome Child Theme + UX Builder + UX Blocks + Rank Math SEO**.

---

## 1. Quy Trình Chuyển Đổi (Workflow Pipeline)

```
Google AI Studio React UI
       │
       ▼
Flatsome Child Theme (functions.php + style.css)
       │
       ▼
Flatsome UX Builder (Sections, Rows, Columns, Elements)
       │
       ▼
Flatsome UX Blocks (Reusable Components: Trust Bar, Process, MOQ, FAQ, CTA)
       │
       ▼
Rank Math SEO (Schema JSON-LD: Organization, LocalBusiness, FAQPage, Article)
```

---

## 2. Cấu Trúc Layout Chuẩn Flatsome UX Builder

Tất cả các Section được xây dựng theo chuẩn phân cấp không lồng ghép phức tạp:

$$\text{Section } (\text{ux\_section}) \longrightarrow \text{Container } (\text{ux\_container}) \longrightarrow \text{Row } (\text{ux\_row}) \longrightarrow \text{Columns } (\text{ux\_col}) \longrightarrow \text{Elements}$$

- **Hạn chế tuyệt đối**: Không dùng absolute position chồng lấn khó chỉnh sửa, không dùng negative margin lớn, không dùng Canvas/WebGL nặng.
- **Tỷ lệ ảnh chuẩn Flatsome**: `16:9` (Banner/Hero), `16:10` (Card sản phẩm), `4:3` (Ảnh xưởng máy), `1:1` (Avatar đánh giá).

---

## 3. Flatsome UX Blocks Registry (Shortcode Mapping)

Các component dùng chung trên nhiều trang được đóng gói thành **Flatsome UX Blocks**:

| UX Block Tên | Shortcode Flatsome | Component Nguồn | Vị Trí Áp Dụng |
| :--- | :--- | :--- | :--- |
| **Arden Trust Bar** | `[block id="arden-trust-bar"]` | `TrustBarSection.tsx` | Home, About, Manufacturing, Services, FAQ |
| **Arden Factory** | `[block id="arden-factory"]` | `FactorySection.tsx` | Home, About, Manufacturing |
| **Arden Process** | `[block id="arden-process-steps"]` | `ProcessStepsSection.tsx` | Home, About, Manufacturing, Case Study |
| **Arden MOQ Policy** | `[block id="arden-moq-policy"]` | `MOQSection.tsx` | Home, Manufacturing, Quote Page |
| **Arden Certifications**| `[block id="arden-certifications-bar"]`| `CertificationsSection.tsx` | Home, About, Manufacturing |
| **Arden Testimonials** | `[block id="arden-testimonials-slider"]`| `TestimonialsSection.tsx` | Home, About, Services |
| **Arden FAQ Accordion**| `[block id="arden-faq-accordion"]` | `FAQSection.tsx` | Home, Services, Quote, FAQ Page |
| **Arden CTA Banner** | `[block id="arden-cta-banner"]` | `CTASection.tsx` | Toàn bộ chân trang (Global Footer CTA) |
| **Arden Contact Strip**| `[block id="arden-contact-strip"]` | `ContactStripSection.tsx` | Header Topbar hoặc Pre-footer Strip |

---

## 4. Danh Sách 18 Template WordPress & Mapping File

| STT | Template Name | WordPress Template File | Flatsome Builder / Element Type |
| :--- | :--- | :--- | :--- |
| 1 | **Home** | `front-page.php` | UX Builder Full Page + 8 UX Blocks lồng ghép |
| 2 | **About** | `page-gioi-thieu.php` | Page Template + Hero Banner + Factory Block + Process Block |
| 3 | **Services Hub** | `page-dich-vu.php` | Page Template + `[ux_services]` grid + Bảng giá bóc tách |
| 4 | **Service Landing: Áo Thun**| `page-may-ao-thun.php` / `single-service.php` | Service Detail + Bảng size chart + Định lượng vải GSM |
| 5 | **Service Landing: Sơ Mi**| `page-may-ao-so-mi.php` / `single-service.php` | Sơ mi Oxford, Linen, may mí cuộn 1mm, cổ ép keo |
| 6 | **Service Landing: Quần**| `page-may-quan.php` / `single-service.php` | Quần Kaki, Jean, Cargo Pants, bọ đáy, khóa YKK |
| 7 | **Service Landing: Áo Khoác**| `page-may-ao-khoac.php` / `single-service.php` | Áo khoác Nỉ 380 GSM, Varsity phối da, Bomber gió |
| 8 | **Bảng Vải & Định Lượng GSM**| `page-bang-vai.php` / `page-fabric-guide.php` | Tra cứu thành phần sợi, định lượng GSM, ứng dụng |
| 9 | **Hướng Dẫn File Techpack**| `page-huong-dan-techpack.php` | Tiêu chuẩn hồ sơ kỹ thuật & 3 bước may mẫu đối chứng |
| 10| **Manufacturing Landing**| `page-nang-luc-san-xuat.php` | Plant Overview + CAD Studio + Juki Lines + MOQ Tiers Block |
| 11| **Portfolio Hub** | `archive-project.php` | CPT `project` Archive + AJAX Filter Tabs |
| 12| **Single Project Case Study**| `single-project.php` | Single CPT + Techpack breakdown + Gallery + Process Block |
| 13| **Blog Archive** | `home.php` / `archive.php` | Standard Post Archive + Category Tabs + Search |
| 14| **Single Blog Article** | `single.php` | Single Post + Table of Contents + Author Box + Related Posts |
| 15| **Category Archive** | `category.php` / `taxonomy.php` | Category Header + Breadcrumbs + Filtered Grid |
| 16| **Search Page** | `search.php` | `[search]` shortcode + Multi-type results (Services, CPT, Posts) |
| 17| **FAQ Page** | `page-faq.php` | Search filter + Categorized UX Accordions + Direct Form |
| 18| **Báo Giá (Quote Page)** | `page-bao-gia.php` | Contact Form 7 / WPForms Multi-step Quote Form |
| 19| **Liên Hệ (Contact Page)** | `page-lien-he.php` | Factory Map + Contact Information + Form Strip |
| 20| **Chính Sách (Policies)** | `page-chinh-sach.php` | Tabbed Policy Accordion / Document Navigation |
| 21| **Tuyển Dụng (Careers)** | `page-tuyen-dung.php` | Job Listings CPT + Application Modal |
| 22| **404 Not Found** | `404.php` | Flatsome 404 Template with Quick Search & Navigation |

---

## 5. Cài Đặt Header & Footer Trong Flatsome Theme Options

### Header Builder:
- **Top Bar**:
  - `Left`: Text/HTML 1 (`<span class="icon-clock">Thứ 2 - Thứ 7: 8:00 - 17:30</span>`) + Address
  - `Right`: Hotline Link (`tel:0901234567`) + Zalo Direct Link
- **Main Header**:
  - `Left`: Site Logo (SVG / PNG Retina)
  - `Center`: Primary Navigation (`Main Menu` with dropdowns)
  - `Right`: Search Icon + Header Button (`[button text="Báo Giá Nhanh" link="/bao-gia"]`)
- **Mobile Menu**:
  - Off-canvas Sidebar Drawer with Navigation & Quick Phone Call button.

### Footer Builder:
- **Footer Widgets (4 Columns)**:
  - `Col 1`: Logo + Giới thiệu ngắn + Huy hiệu bảo mật NDA & Kinh nghiệm.
  - `Col 2`: Danh mục dịch vụ may chủ lực (Áo thun, Sơ mi, Quần Kaki, Áo khoác).
  - `Col 3`: Thông tin liên hệ xưởng (Địa chỉ, Hotline, Email, Giờ làm việc).
  - `Col 4`: Bản đồ vị trí nhà xưởng & Nút chỉ đường Google Maps.
- **Footer Bottom**:
  - Menu chính sách: Bảo mật, Thanh toán, Đổi trả, Vận chuyển, Tuyển dụng.
  - Copyright & Social Icons (Facebook, Zalo, TikTok).

---

## 6. Schema & Rank Math SEO Checklist

1. **Organization & LocalBusiness Schema**:
   - Tên pháp nhân: *Công ty TNHH Sản Xuất May Mặc Arden (Xưởng May Arden)*
   - Địa chỉ: *86 Đường S6, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh*
   - Điện thoại: `0901 234 567`
   - PriceRange: `$$`
   - OpeningHours: `Mo-Sa 08:00-17:30`
2. **FAQPage Schema (JSON-LD)**: Tự động render từ các khối FAQ Accordion.
3. **Product / Service Schema**: Gắn trên các trang dịch vụ may áo thun và portfolio case studies.
4. **Article & BreadcrumbList Schema**: Gắn trên chuyên mục blog kiến thức xưởng may.
5. **Thứ tự thẻ Heading**:
   - `H1`: 1 thẻ duy nhất ở Page Banner hoặc Hero Section.
   - `H2`: Các tiêu đề Section (`SectionHeading`).
   - `H3`: Các tiêu đề Card, Block, hoặc Accordion Question.
   - `H4`: Thông số kỹ thuật chi tiết.
