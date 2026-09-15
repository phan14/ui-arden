# TASK 09.4 — Production URL Migration Map

Status is from the 2026-08-27 public read-only crawl. `KEEP` is the default. No redirect below is authorized for implementation; rows marked REVIEW require traffic/admin evidence.

| OLD PRODUCTION URL | CURRENT STATUS | CURRENT TITLE | NEW TARGET | ACTION | REDIRECT REQUIRED | SEO RISK | NOTES |
|---|---:|---|---|---|---|---|---|
| `/` | 200, index, self-canonical | Arden - Xưởng May Uy Tín, Giá Tốt \| Sản Xuất May Mặc | `/` | KEEP URL + REWRITE CONTENT | No | CRITICAL | Preserve homepage metadata/schema until approved replacement |
| `/xuongmaygiatot-vn-ve-xuong-may-arden/` | 200, index, self-canonical | Giới thiệu Xưởng May Arden \| Xưởng may giá tốt | same | KEEP URL + REWRITE CONTENT | No | HIGH | Adapt staged `/gioi-thieu/` here |
| `/dich-vu-may-mac/` | 200, index, self-canonical | Dịch vụ may mặc | same | KEEP URL + REWRITE CONTENT | No | CRITICAL | Adapt staged `/dich-vu/` here |
| `/dich-vu-may-mac/dich-vu-may-dong-phuc-gia-tot-xuong-may-adren/` | 200, index, self-canonical | Dịch vụ may đồng phục giá tốt | same | KEEP / REVIEW CONTENT | No | HIGH | Compare intent with new service pages |
| `/dich-vu-may-mac/xuong-may-xuong-gia-cong-gia-tot/` | 200, index, self-canonical | Xưởng may gia công giá tốt | same | KEEP / REVIEW CONTENT | No | HIGH | Do not merge without query/backlink evidence |
| `/dich-vu-may-mac/thiet-ke-thoi-trang-theo-yeu-cau/` | 200, index, self-canonical | Thiết kế thời trang theo yêu cầu | same | KEEP / REVIEW CONTENT | No | HIGH | Preserve search intent |
| `/dich-vu-may-mac/si-quan-ao-gia-tot/` | 200, index, self-canonical | Sỉ quần áo giá tốt | same | KEEP / REVIEW CONTENT | No | HIGH | Preserve search intent |
| `/xuong-may-dong-phuc-gia-re-xuong-may-arden/` | 200, index, self-canonical | Xưởng may đồng phục giá rẻ - Xưởng may ARDEN | same | KEEP / REVIEW CONTENT | No | HIGH | Standalone commercial page |
| `/san-pham/` | 200, index, self-canonical | Sản Phẩm Xưởng May Arden - Chất Lượng & Giá Tốt | same | KEEP EXACT URL | No | CRITICAL | Preserve WooCommerce archive and data |
| `/lien-he/` | 200, index, self-canonical | Liên hệ Xưởng May Arden \| Hỗ trợ tư vấn nhanh chóng | same | KEEP EXACT URL | No | HIGH | Staged route matches |
| `/chinh-sach-si-nguon-hang-quan-ao/` | 200, index, self-canonical | Chính sách sỉ nguồn hàng quần áo | same | KEEP / REVIEW CONTENT | No | HIGH | Do not replace blindly with `/chinh-sach/` |
| `/category/tin-tuc/` | 200, index, self-canonical | Tin tức thời trang - Arden Xưởng May Giá Tốt | same | KEEP EXACT URL | No | CRITICAL | `/tin-tuc/` currently 404 |
| `/tin-tuc/` | 404 | Not found | `/category/tin-tuc/` or approved new archive | REVIEW REQUIRED | Not yet | HIGH | Need GSC and owner-approved archive strategy |
| `/blocks/danh-sach-dich-vu/` | 200; metadata/canonical absent | blank | internal UX Block only | REVIEW REQUIRED | Not yet | MEDIUM | Candidate noindex/sitemap exclusion, not authorized |
| `/product-category/ao-thun/` | 301 by Rank Math | redirects to Ao Polo Nam Mẫu 3 | review | REVIEW REQUIRED | Existing | HIGH | Suspicious taxonomy-to-product redirect |

## Post URL manifest — 55 URLs

Every URL below was present in `post-sitemap.xml`. Default row values are: current status `200, index, self-canonical`; new target `same URL`; action `KEEP EXACT URL`; redirect `No`; SEO risk `CRITICAL as a preserved corpus / individual value UNKNOWN`; notes `retain post ID, dates, author, media, Rank Math fields and root-level permalink`.

```text
/ai-cho-doanh-nghiep/
/xu-huong-local-brand-2026/
/gia-cong-ao-polo-cho-thuong-hieu-thoi-trang-viet/
/danh-gia-thuc-te-xuong-may-arden/
/tai-sao-nen-chon-xuong-may-gia-cong/
/chien-luoc-xay-dung-thuong-hieu-local-brand-viet-nam-tu-con-so-0/
/7-tieu-chi-danh-gia-mot-xuong-may-gia-cong/
/gia-cong-trong-nuoc-thay-vi-nhap-hang-trung-quoc/
/xu-huong-phat-trien-thuong-hieu-thoi-trang/
/xuong-may-ao-thun-so-luong-lon-tai-tp-hcm/
/marketing-tiktok-cho-thoi-trang-bi-kip-viral-brand/
/xuong-may-gia-cong-tron-goi-tai-tphcm/
/xuong-may-ao-thun-gan-kcn-tan-binh/
/xuong-may-nhan-may-gap-tp-hcm/
/xuong-may-ao-thun-gia-si-tphcm-gia-tan-goc/
/cap-nhat-moi-nhat-ve-hoa-don-dien-tu/
/xuong-may-dong-phuc-cong-ty-gia-re-tai-tp-hcm/
/xuong-may-arden-gia-cong-quan-ao-uy-tin/
/kham-pha-xuong-may-ao-thun-tan-phu-tp-hcm/
/xuong-may-quan-ao-so-luong-it-tai-tp-hcm/
/xuong-may-gia-cong-uy-tin-tai-tp-hcm-4-tieu-chi/
/xuong-may-quan-ao-cong-so-5-loi-ich-hop-tac/
/xuong-may-quan-ao-the-thao-5-buoc-dat-may/
/xuong-may-ao-thun-su-kien-5-meo-tao-an-tuong/
/xuong-may-dong-phuc-hoc-sinh-5-cau-hoi-giai-dap/
/dich-vu-may-gia-cong-4-buoc-thanh-cong/
/xuong-may-tai-tp-hcm-4-cau-hoi/
/xuong-may-uy-tin-5-ly-do-chon-doi-tac-chat-luong/
/xuong-may-dong-phuc-hoc-sinh-tphcm/
/tim-xuong-may-uy-tin-co-review-tot-tai-tp-hcm/
/tim-xuong-may-giao-hang-nhanh-tai-tp-hcm/
/tim-xuong-may-gia-re-uy-tin-tai-tp-hcm/
/top-10-xuong-may-uy-tin-co-danh-gia-tot/
/top-10-xuong-may-gia-re-uy-tin-nhat-tai-viet/
/bi-quyet-chon-xuong-may-ao-dai-hoc-sinh/
/outfit-di-da-lat-thang-5-goi-y-5-set-do/
/loi-song-toi-gian-tai-viet-nam/
/thoi-trang-ben-vung-tai-viet-nam/
/xuong-may-nao-uy-tin-o-tp-hcm/
/xuong-may-gia-cong/
/xuong-may-si-uy-tin-bi-quyet-chon-nguon-hang/
/dong-phuc-cong-ty-gia-si-xu-huong-dep/
/bi-quyet-kinh-doanh-quan-ao-vay-dam-thiet-ke/
/tim-hieu-danh-sach-xuong-may-o-vn/
/https-xuongmaygiatot-vn-da-ngam-den-mac-mau-gi/
/may-theo-yeu-cau-loi-ich-xuong-may/
/xuong-may-gia-cong-gia-re-uy-tin/
/dich-vu-may-theo-mau-tu-a-z-giai-phap-tiet-kiem/
/xuong-may-gia-cong-theo-yeu-cau-gia-re/
/xu-huong-phat-trien-nganh-det-may-viet-nam-trong-giai-doan-hoi-nhap-kinh-teluu-ban-nhap-tu-dong/
/cap-nhat-20-cach-phoi-do-thoi-trang-nam-tre-trung-sanh-dieu-nhat/
/ao-thun-unisex-thoi-trang-bat-tung-ca-tinh/
/khoi-sac-don-hang-det-may-cuoi-nam-2024/
/nganh-det-may-duoc-ky-vong-hoi-phuc-tu-nua-cuoi-nam-2024/
/kham-pha-xuong-may-tan-goc-gia-sieu-tot-mau-ma-sieu-mode/
```

## Product URL manifest — 51 URLs

Every URL below was present in `product-sitemap.xml`. Default row values are: current status `200, index, self-canonical`; new target `same URL`; action `KEEP EXACT URL`; redirect `No`; SEO risk `CRITICAL as a preserved commerce corpus / individual value UNKNOWN`; notes `retain product ID, SKU/content, media, reviews, taxonomy and Rank Math fields`.

```text
/san-pham/ao-sweater-arden-st985/
/san-pham/ao-ni-half-zip-arden-at0854/
/san-pham/ao-so-mi-caro-xanh-nho-oversize-nam-nu-dai-tay-co-be-tui-nguc-form-rong-thoai-mai/
/san-pham/ao-so-mi-nam-nu-trang-dai-tay-oxford-oversize-cao-cap-co-be-tui-nguc-form-rong-thoai-mai/
/san-pham/ao-thun-oversize-bonney/
/san-pham/ao-thun-nam-mau-1/
/san-pham/ao-ni-co-tron-arden-na8754/
/san-pham/ao-hoodie-boxy-form-rong-hd0986/
/san-pham/ao-hoodie-milano-co-khoa-keo-hd8532/
/san-pham/airism-cotton-ao-thun-arden-na9753/
/san-pham/ao-thun-phoi-contrast-oversize/
/san-pham/ao-thun-cotton-airism-at8267/
/san-pham/ao-thun-phoi-bonney-trang-den-oversize/
/san-pham/ao-so-mi-trang-ngan-tay-phong-cach-phap/
/san-pham/ao-thun-cotton-nguyen-chat-tay-ngan-co-co/
/san-pham/ao-so-mi-co-dung-mau-trang-nu-tay-ngan-mua-he-co-chu-v/
/san-pham/ao-so-mi-nu-cao-cap-tay-ngan-kieu-cong-so/
/san-pham/ao-so-mi-cong-so-coc-tay/
/san-pham/ao-so-mi-cong-so-nu-han-quoc-kieu-basic/
/san-pham/so-mi-tn-croptop/
/san-pham/ao-so-mi-trang-chuyen-nghiep-tay-dai-ba-phan-tu-cao-cap-mua-he/
/san-pham/ao-thun-nam-mau-2/
/san-pham/ao-polo-nam-mau-1/
/san-pham/ao-polo-nam-mau-3/
/san-pham/ao-polo-nam-mau-5/
/san-pham/ao-polo-nam-phoi-mau-trang-den/
/san-pham/ao-polo-nam-mau-10/
/san-pham/ao-so-mi-nam-mau-6/
/san-pham/ao-so-mi-nam-mau-7/
/san-pham/ao-so-mi-caro/
/san-pham/ao-polo-tron-nam/
/san-pham/ao-so-mi-tay-dai-xanh-soc-ve-ngoai-lich-lam-thanh-lich/
/san-pham/ao-so-mi-oxford-phong-cach-lich-lam-hien-dai/
/san-pham/ao-so-mi-lua-lady-arden-sm7654/
/san-pham/ao-so-mi-nu-dazy-dai-tay-mac-thoai-mai-co-gap-theu-hoa-tiet-soc-arden-smn002/
/san-pham/ao-polo-nam-mau-7/
/san-pham/ao-thun-nu-mau-2/
/san-pham/ao-thun-nu-mau-4/
/san-pham/ao-so-mi-nam-mau-1/
/san-pham/ao-so-mi-nam-mau-2/
/san-pham/ao-so-mi-nam-mau-3/
/san-pham/ao-so-mi-nam-mau-4/
/san-pham/ao-so-mi-nam-mau-5/
/san-pham/ao-polo-nam-mau-9/
/san-pham/ao-polo-nam-mau-2/
/san-pham/ao-polo-nam-mau-8/
/san-pham/ao-polo-nam-mau-4/
/san-pham/ao-polo-nam-mau-6/
/san-pham/ao-thun-nu-mau-1/
/san-pham/ao-thun-nu-mau-3/
/san-pham/ao-thun-nu-mau-5/
```

## Gate

No MERGE, 301 or 410 row may move from REVIEW to approved until GSC/Analytics/backlink evidence and authenticated WordPress/Rank Math exports have been reviewed.
