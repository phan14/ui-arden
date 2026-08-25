import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { QuoteFormSection } from '../components/sections/QuoteFormSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/ui/CTASection';
import { faqData } from '../data/siteData';

export const QuotePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="PHẢN HỒI NHANH TRONG 30 PHÚT"
        title="NHẬN BÁO GIÁ MAY GIA CÔNG"
        description="Điền thông tin yêu cầu của bạn theo 4 bước đơn giản dưới đây. Chuyên viên kỹ thuật Arden sẽ tính toán định mức và gửi bảng báo giá chi tiết tận xưởng."
        breadcrumbs={[{ label: 'Nhận báo giá may gia công' }]}
      />

      {/* 2. 4-Step Interactive Quote Calculator & Form */}
      <QuoteFormSection />

      {/* 3. Pricing FAQs */}
      <FAQSection
        badge="GIẢI ĐÁP BÁO GIÁ"
        title="NHỮNG CÂU HỎI VỀ CHI PHÍ & THỦ TỤC MAY MẪU"
        subtitle="Mọi thông tin về chính sách hoàn tiền mẫu, tính giá số lượng và chiết khấu đơn hàng lớn."
        faqs={faqData.slice(0, 3)}
      />

      {/* 4. Bottom CTA */}
      <CTASection
        title="BẠN ĐÃ CÓ TECHPACK HOẶC MẪU ÁO CẦN BÓC TÁCH GIÁ?"
        subtitle="Hãy gửi trực tiếp qua Zalo Hotline 0901 234 567 để kỹ thuật viên kiểm tra định mức vải ngay lập tức."
      />
    </div>
  );
};
