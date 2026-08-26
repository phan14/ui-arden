# Media migration

All Task 06C external presentation images were audited. Attachment IDs below are local/staging IDs and must be remapped by the WordPress migration tool on deployment.

| React asset | WordPress import | Attachment target | Alt text | Width | Height |
|---|---|---:|---|---:|---:|
| https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80 | about-flatsome.txt | 140 | Xưởng may thời trang Arden | 1000 | 750 |
| https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80 | about-flatsome.txt | 141 | Dây chuyền máy may Juki | 600 | 400 |
| https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80 | about-flatsome.txt | 142 | Phân xưởng cắt vải rập CAD | 600 | 400 |
| https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80 | about-flatsome.txt | 143 | Phòng Phát Triển Mẫu & Rập CAD | 800 | 600 |
| https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80 | about-flatsome.txt | 144 | Phân Xưởng Trải & Cắt Vải Tự Động | 800 | 533 |
| https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80 | about-flatsome.txt | 145 | Dây Chuyền May Juki Chuyên Dụng | 800 | 533 |
| https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80 | about-flatsome.txt | 146 | Khu Vực QC, Ủi Hơi & Đóng Gói Thành Phẩm | 800 | 533 |
| https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80 | about-flatsome.txt | 147 | Minh Khang | 200 | 250 |
| https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80 | about-flatsome.txt | 148 | Thu Hà | 200 | 252 |
| https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80 | about-flatsome.txt | 149 | Quốc Bảo | 200 | 300 |
| https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80 | services-flatsome.txt | 150 | May Áo Thun | 800 | 1200 |
| https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80 | services-flatsome.txt | 151 | May Áo Sơ Mi | 800 | 1199 |
| https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80 | services-flatsome.txt | 152 | May Quần | 800 | 1169 |
| https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80 | services-flatsome.txt | 153 | May Áo Khoác | 800 | 1067 |
| https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80 | services-flatsome.txt | 143 | Gia Công Local Brand | 800 | 600 |
| https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80 | manufacturing-flatsome.txt | 143 | Phòng Phát Triển Mẫu & Rập CAD | 800 | 600 |
| https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80 | manufacturing-flatsome.txt | 144 | Phân Xưởng Trải & Cắt Vải Tự Động | 800 | 533 |
| https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80 | manufacturing-flatsome.txt | 145 | Dây Chuyền May Juki Chuyên Dụng | 800 | 533 |
| https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80 | manufacturing-flatsome.txt | 146 | Khu Vực QC, Ủi Hơi & Đóng Gói Thành Phẩm | 800 | 533 |
| https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80 | manufacturing-flatsome.txt | 143 | Nhà xưởng may Arden | 800 | 600 |

No Windows path, localhost URL or React `/src/assets` dependency is used. Source ratios are preserved through the original attachment dimensions and `image_size="original"`. Alt text is copied from the existing React content without keyword expansion.

Home image tokens and shared UX Blocks were also finalized: service/product/hero/capability images use Media Library attachment IDs, factory cards reuse attachments 143–146, and testimonial avatars use attachments 147–149. The theme's external fallback renderer and sample-card image URLs were removed. Production migration must remap attachment IDs through the normal WordPress database/media migration rather than copying local numeric IDs blindly.
