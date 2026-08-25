# Image replacement map

Replace each token in UX Builder by opening the Image element and selecting an item from the WordPress Media Library. Never replace tokens with a Windows path.

| React reference | WordPress token | Ratio | Suggested alt text | Section |
|---|---|---:|---|---|
| Hero showcase — Unsplash `photo-1521572267360-ee0c2909d518` | `ARDEN_IMAGE_HERO` | 4:3 | Xưởng may Arden và khu vực sản xuất | Hero |
| Service image from `servicesData` — T-shirt | `ARDEN_IMAGE_SERVICE_TSHIRT` | 16:10 | Dịch vụ may áo thun local brand | Services |
| Service image from `servicesData` — Shirt | `ARDEN_IMAGE_SERVICE_SHIRT` | 16:10 | Dịch vụ may áo sơ mi theo yêu cầu | Services |
| Service image from `servicesData` — Pants | `ARDEN_IMAGE_SERVICE_PANTS` | 16:10 | Dịch vụ may quần thời trang | Services |
| First representative project image | `ARDEN_IMAGE_PRODUCT_01` | 16:10 | Áo thun được sản xuất theo yêu cầu | Products |
| Second representative project image | `ARDEN_IMAGE_PRODUCT_02` | 16:10 | Áo sơ mi được sản xuất theo yêu cầu | Products |
| Third representative project image | `ARDEN_IMAGE_PRODUCT_03` | 16:10 | Quần hoặc áo khoác sản xuất tại xưởng | Products |
| Capabilities showcase — Unsplash `photo-1558769132-cb1aea458c5e` | `ARDEN_IMAGE_CAPABILITIES` | 4:3 | Dây chuyền may công nghiệp tại xưởng | Capabilities |
| Factory department 1 from `factoryDepartmentsData` | `ARDEN_IMAGE_FACTORY_01` | 16:10 | Phòng rập và may mẫu | Factory UX Block |
| Factory department 2 from `factoryDepartmentsData` | `ARDEN_IMAGE_FACTORY_02` | 16:10 | Khu vực cắt vải | Factory UX Block |
| Factory department 3 from `factoryDepartmentsData` | `ARDEN_IMAGE_FACTORY_03` | 16:10 | Chuyền may công nghiệp | Factory UX Block |
| Factory department 4 from `factoryDepartmentsData` | `ARDEN_IMAGE_FACTORY_04` | 16:10 | Khu vực kiểm hàng và đóng gói | Factory UX Block |
| WordPress featured images | Managed by Posts / Project records | 16:10 | Describe the specific article/project | Portfolio and Blog |

Use WebP or AVIF when supported, retain the original upload dimensions, and let WordPress generate responsive `srcset` variants. Do not place important text inside the image.
