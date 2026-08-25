/**
 * ============================================================================
 * ARDEN ABOUT PAGE (VỀ CHÚNG TÔI)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-gioi-thieu.php / page-about.php
 * - UX Builder Sections: Page Banner, About Intro, Factory Section,
 *   Trust Bar (UX Block), Process Steps (UX Block), Testimonials, CTA
 * - Rank Math SEO: AboutPage Schema & Organization Meta
 * ============================================================================
 */

import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { FactorySection } from '../components/sections/FactorySection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { siteConfig, productionProcess, testimonialsData } from '../data/siteData';
import { Check, ShieldCheck, Award, Users, HeartHandshake, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="HƠN 10 NĂM ĐỒNG HÀNH CÙNG LOCAL BRAND VIỆT"
        title="GIỚI THIỆU XƯỞNG MAY ARDEN"
        description="Từ xưởng may mẫu 10 máy năm 2014, Arden đã phát triển thành tổ hợp sản xuất may mặc B2B hơn 1.000m² tại TP.HCM, là đối tác tin cậy của hơn 100+ thương hiệu thời trang."
        breadcrumbs={[{ label: 'Về chúng tôi' }]}
      />

      {/* 2. Reusable UX Block: Trust Bar */}
      <TrustBarSection variant="light" />

      {/* 3. Story & Core Values Section */}
      <section
        id="about-story"
        aria-label="Câu chuyện thương hiệu Arden"
        className="py-14 sm:py-18 bg-white border-b border-slate-200"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Left: Images Grid (Flatsome Gallery) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                  alt="Xưởng may thời trang Arden"
                  width={1000}
                  height={625}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-xl backdrop-blur-xs text-xs font-bold">
                  Thành lập từ năm {siteConfig.establishedYear} tại TP.HCM
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
                    alt="Dây chuyền máy may Juki"
                    width={600}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                    alt="Phân xưởng cắt vải rập CAD"
                    width={600}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Narrative Text Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  TẦM NHÌN & SỨ MỆNH
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight leading-tight">
                  GIẢI PHÁP GIA CÔNG TOÀN DIỆN CHO THƯƠNG HIỆU THỜI TRANG
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chúng tôi hiểu rằng việc tìm kiếm một xưởng may uy tín, chịu may số lượng linh hoạt (từ 30 áo/mẫu) mà vẫn đảm bảo độ sắc sảo từng đường kim mũi chỉ là bài toán khó nhất của các nhà sáng lập Local Brand.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tại Arden, chúng tôi xây dựng quy trình khép kín: tư vấn chất liệu, ra rập vi tính CAD, may mẫu duyệt, in thêu công nghệ cao và kiểm soát chất lượng FQC 100% trước khi xuất xưởng.
              </p>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: 'Chất lượng đồng đều', desc: 'Đường may mí 1mm chuẩn hàng thiết kế' },
                  { title: 'Bảo mật 100% NDA', desc: 'Không rò rỉ rập hay thiết kế độc quyền' },
                  { title: 'Tiến độ cam kết 98%', desc: 'Bảo đảm kế hoạch launching của brand' },
                  { title: 'Hỗ trợ tối ưu giá', desc: 'Tư vấn giác sơ đồ vải tiết kiệm tối đa' },
                ].map((pillar, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-[11px] text-slate-500">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Button
                  href="/bao-gia"
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  NHẬN BÁO GIÁ SẢN XUẤT
                </Button>
                <Button
                  href="/lien-he"
                  variant="secondary"
                  size="md"
                >
                  ĐẶT LỊCH THĂM XƯỞNG
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Factory & Infrastructure Section */}
      <FactorySection />

      {/* 5. Certifications & Legal Assurance */}
      <CertificationsSection />

      {/* 6. 6-Step Manufacturing Process */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 7. Partner Testimonials */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* 8. Bottom CTA */}
      <CTASection
        title="ĐỒNG HÀNH CÙNG XƯỞNG MAY ARDEN NGAY HÔM NAY"
        subtitle="Chúng tôi luôn sẵn sàng tiếp đón quý khách ghé thăm xưởng và xem trực tiếp các mẫu vải thật."
      />
    </div>
  );
};
