import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { ContactSection } from '../components/sections/ContactSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/ui/CTASection';
import { faqData, siteConfig } from '../data/siteData';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="HỖ TRỢ TƯ VẤN TRỰC TIẾP TẠI XƯỞNG"
        title="LIÊN HỆ XƯỞNG MAY ARDEN"
        description="Quý khách có thể ghé thăm trực tiếp xưởng may để xem mẫu vải thật, kiểm tra đường may thành phẩm hoặc liên hệ qua Hotline/Zalo để được báo giá tức thì."
        breadcrumbs={[{ label: 'Liên hệ xưởng may' }]}
      />

      {/* 2. Contact & Factory Visit Form Section */}
      <ContactSection />

      {/* 3. FAQ Section */}
      <FAQSection
        badge="GIẢI ĐÁP NHANH"
        title="CÂU HỎI THƯỜNG GẶP TRƯỚC KHI ĐẶT MAY"
        subtitle="Tổng hợp các thắc mắc phổ biến về quy trình ghé thăm xưởng, đặt cọc và chính sách bảo mật."
        faqs={faqData.slice(0, 4)}
      />

      {/* 4. Bottom CTA */}
      <CTASection
        title="BẠN CẦN BÁO GIÁ NHANH TRONG 30 PHÚT?"
        subtitle="Hotline & Zalo kinh doanh luôn sẵn sàng hỗ trợ bạn tính định lượng vải và báo giá ngay trong ngày."
      />
    </div>
  );
};
