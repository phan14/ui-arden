/**
 * ============================================================================
 * ARDEN HOME PAGE (FRONT-PAGE TEMPLATE)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template File: front-page.php
 * - UX Builder Sections & UX Blocks:
 *   1. Arden Hero -> UX Builder Hero Section
 *   2. Arden Trust Bar -> [block id="arden-trust-bar"]
 *   3. Arden Services -> UX Builder Services Section
 *   4. Arden Product Grid -> UX Builder Products Section
 *   5. Arden Factory -> [block id="arden-factory"]
 *   6. Arden Capabilities -> [block id="arden-factory-capabilities"]
 *   7. Arden Manufacturing Process -> [block id="arden-process-steps"]
 *   8. Arden MOQ -> [block id="arden-moq-policy"]
 *   9. Arden Pricing Calculator -> UX Builder Estimator Section
 *  10. Arden Portfolio -> UX Builder Portfolio Element
 *  11. Arden Testimonials -> [block id="arden-testimonials-slider"]
 *  12. Arden Blog -> WordPress Recent Posts Grid
 *  13. Arden FAQ -> [block id="arden-faq-accordion"]
 *  14. Arden CTA -> [block id="arden-cta-banner"]
 * - Rank Math SEO: FrontPage Schema (Organization + LocalBusiness)
 * ============================================================================
 */

import React from 'react';
import {
  heroMetrics,
  servicesData,
  featuredProjects,
  whyChooseArden,
  productionProcess,
  articlesData,
  faqData,
  testimonialsData,
  priceEstimates,
  factoryCapabilities,
  siteConfig,
  trustBarData,
  moqTiersData,
  factoryDepartmentsData
} from '../data/siteData';

import { HeroSection } from '../components/sections/HeroSection';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { ServicesGridSection } from '../components/sections/ServicesGridSection';
import { ProductGridSection } from '../components/sections/ProductGridSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { FactorySection } from '../components/sections/FactorySection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { MOQSection } from '../components/sections/MOQSection';
import { PricingCalculatorSection } from '../components/sections/PricingCalculatorSection';
import { PortfolioGridSection } from '../components/sections/PortfolioGridSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BlogGridSection } from '../components/sections/BlogGridSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/ui/CTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Arden Hero Section */}
      <HeroSection
        badge="XƯỞNG MAY GIA CÔNG LOCAL BRAND CHUYÊN NGHIỆP"
        title="SẢN XUẤT THỜI TRANG THEO YÊU CẦU"
        highlight="CHUẨN XUẤT XƯỞNG B2B"
        description="Hậu phương sản xuất vững chắc cho các Local Brand và Doanh nghiệp. Nhận may trọn gói từ khâu phát triển mẫu rập vi tính, cung ứng vải, in/thêu đến hoàn thiện đóng gói."
        primaryBtnText="NHẬN BÁO GIÁ NHANH (30P)"
        primaryBtnLink="/bao-gia"
        secondaryBtnText="XEM CÁC DỰ ÁN ĐÃ MAY"
        secondaryBtnLink="/du-an"
        showcaseImage="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
        showcaseTitle="XƯỞNG MAY CHUYÊN NGHIỆP TẠI TP.HCM"
        showcaseSubtitle="Dây chuyền cắt may in thêu khép kín công suất 50.000 sản phẩm/tháng"
        featureBadges={[
          { title: 'MOQ Linh Hoạt', desc: 'Từ 30 áo/mẫu' },
          { title: 'Bảo Mật NDA', desc: 'Độc quyền 100%' },
          { title: 'Bảo Hành Kỹ Thuật', desc: '1 đổi 1 nếu lỗi' },
        ]}
      />

      {/* 2. Arden Trust Bar (Flatsome UX Block: [block id="arden-trust-bar"]) */}
      <TrustBarSection items={trustBarData} variant="white" />

      {/* 3. Arden Services Grid */}
      <ServicesGridSection
        badge="DANH MỤC DỊCH VỤ SẢN XUẤT"
        title="DỊCH VỤ GIA CÔNG MAY MẶC CHUYÊN SÂU"
        subtitle="Đáp ứng đa dạng dòng sản phẩm thời trang từ cơ bản đến cao cấp với tiêu chuẩn đường may tỉ mỉ, form dáng chuẩn xu hướng."
        services={servicesData}
        viewAllLink="/dich-vu"
        viewAllText="XEM TẤT CẢ DỊCH VỤ"
      />

      {/* 4. Arden Product Grid */}
      <ProductGridSection
        badge="DANH MỤC THỰC TẾ"
        title="CÁC DÒNG TRANG PHỤC THẾ MẠNH SẢN XUẤT"
        subtitle="Xem chi tiết các chủng loại trang phục chủ lực được may theo thông số rập độc quyền của thương hiệu."
        products={featuredProjects}
        showTabs={true}
      />

      {/* 5. Arden Metrics Counter */}
      <MetricsSection metrics={heroMetrics} />

      {/* 6. Arden Factory Infrastructure (Flatsome UX Block: [block id="arden-factory"]) */}
      <FactorySection
        badge="QUY MÔ NHÀ XƯỞNG"
        title="CƠ SỞ VẬT CHẤT & MÁY MÓC HIỆN ĐẠI"
        subtitle="Quy mô 1.000m² tại TP.HCM được đầu tư 100% máy may Juki điện tử, máy cắt vải tự động và bàn kiểm hàng FQC."
        departments={factoryDepartmentsData}
      />

      {/* 7. Arden Capabilities Breakdown */}
      <CapabilitiesSection
        badge="NĂNG LỰC SẢN XUẤT"
        title="DÂY CHUYỀN MAY CÔNG NGHIỆP KHÉP KÍN"
        subtitle="Tối ưu từng mắt xích trong chuỗi cung ứng may mặc để đem lại đơn giá cạnh tranh nhất cho đối tác."
        capabilities={factoryCapabilities}
        showcaseImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
      />

      {/* 8. Arden Manufacturing Process (Flatsome UX Block: [block id="arden-process-steps"]) */}
      <ProcessStepsSection
        badge="QUY TRÌNH CHUẨN ISO"
        title="6 BƯỚC SẢN XUẤT MINH BẠCH TẠI ARDEN"
        subtitle="Kiểm soát chất lượng nghiêm ngặt từ khâu tiếp nhận ý tưởng, ra rập vi tính đến lúc xuất xưởng bàn giao."
        steps={productionProcess}
      />

      {/* 9. Arden MOQ Policy (Flatsome UX Block: [block id="arden-moq-policy"]) */}
      <MOQSection
        badge="CHÍNH SÁCH MOQ LINH HOẠT"
        title="SẢN XUẤT CHỈ TỪ 30 ÁO / MẪU - ĐỒNG HÀNH CÙNG BRAND"
        subtitle="Xóa bỏ rào cản ôm hàng số lượng lớn, giảm thiểu rủi ro tồn kho cho các thương hiệu thời trang mới."
        tiers={moqTiersData}
      />

      {/* 10. Arden Pricing Calculator */}
      <PricingCalculatorSection
        badge="BẢNG GIÁ DỰ TOÁN"
        title="TÍNH DỰ TOÁN CHI PHÍ SẢN XUẤT XUẤT XƯỞNG"
        subtitle="Công cụ ước tính đơn giá tham khảo theo số lượng và chủng loại sản phẩm. Đơn giá thực tế bóc tách theo bản rập."
        priceEstimates={priceEstimates}
      />

      {/* 11. Arden Portfolio / Case Studies */}
      <PortfolioGridSection
        badge="BỘ SƯU TẬP TIÊU BIỂU"
        title="CÁC DỰ ÁN ĐÃ GIA CÔNG THỰC TẾ"
        subtitle="Chiêm ngưỡng những sản phẩm may mặc thực tế xuất xưởng cho các đối tác Local Brand hàng đầu."
        projects={featuredProjects}
        limit={6}
        viewAllLink="/du-an"
        viewAllText="XEM TOÀN BỘ 50+ DỰ ÁN"
      />

      {/* 12. Arden Why Choose Us */}
      <WhyChooseUsSection
        badge="CAM KẾT CHẤT LƯỢNG"
        title="VÌ SAO HƠN 100+ LOCAL BRAND TIN TƯỞNG ARDEN?"
        subtitle="Chúng tôi là đối tác sản xuất chiến lược đồng hành cùng sự phát triển bền vững của thương hiệu bạn."
        items={whyChooseArden}
      />

      {/* 13. Arden Testimonials (Flatsome UX Block: [block id="arden-testimonials-slider"]) */}
      <TestimonialsSection
        badge="ĐÁNH GIÁ TỪ ĐỐI TÁC"
        title="NHÀ SÁNG LẬP LOCAL BRAND NÓI GÌ VỀ ARDEN?"
        subtitle="Sự hài lòng và tăng trưởng doanh số của khách hàng là minh chứng chuẩn xác nhất cho chất lượng xưởng may."
        testimonials={testimonialsData}
      />

      {/* 14. Arden Blog */}
      <BlogGridSection
        badge="CẨM NANG MAY MẶC"
        title="GÓC KINH NGHIỆM CHO NHÀ SÁNG LẬP LOCAL BRAND"
        subtitle="Chia sẻ kiến thức chuyên sâu về phân biệt chất liệu vải, định mức vải và bí quyết quản trị chi phí sản xuất."
        articles={articlesData}
        limit={3}
        viewAllLink="/tin-tuc"
        viewAllText="XEM TẤT CẢ BÀI VIẾT"
      />

      {/* 15. Arden FAQ (Flatsome UX Block: [block id="arden-faq-accordion"]) */}
      <FAQSection
        badge="HỎI ĐÁP & TƯ VẤN"
        title="CÂU HỎI THƯỜNG GẶP KHI ĐẶT MAY TẠI ARDEN"
        subtitle="Giải đáp toàn diện về số lượng tối thiểu MOQ, quy trình may mẫu, chính sách bảo mật thiết kế NDA."
        faqs={faqData.slice(0, 5)}
      />

      {/* 16. Arden CTA (Flatsome UX Block: [block id="arden-cta-banner"]) */}
      <CTASection
        title="SẴN SÀNG BIẾN BẢN VẼ THÀNH BỘ SƯU TẬP THỰC TẾ?"
        subtitle="Hãy gửi file thiết kế hoặc yêu cầu của bạn ngay hôm nay. Đội ngũ kỹ thuật của xưởng may Arden sẽ liên hệ tư vấn bóc tách chi phí và gửi mẫu vải trong 30 phút."
        primaryButtonText="GỬI YÊU CẦU BÁO GIÁ NGAY"
        primaryButtonLink="/bao-gia"
        secondaryButtonText={`GỌI HOTLINE: ${siteConfig.phone}`}
        secondaryButtonLink={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
        badgeText="TƯ VẤN KỸ THUẬT & MAY MẪU ĐỐI CHỨNG MIỄN PHÍ"
      />
    </div>
  );
};
