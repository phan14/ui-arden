import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { PolicySection } from '../components/sections/PolicySection';
import { CTASection } from '../components/ui/CTASection';

export const PoliciesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="MINH BẠCH & BẢO VỆ QUYỀN LỢI ĐỐI TÁC"
        title="CHÍNH SÁCH HOẠT ĐỘNG & HỢP TÁC"
        description="Quy định rõ ràng về quy trình kiểm tra chất lượng, điều khoản bảo mật thiết kế NDA, thanh toán và bảo hành sản phẩm tại xưởng may Arden."
        breadcrumbs={[{ label: 'Chính sách hoạt động' }]}
      />

      {/* 2. Policy Accordion / Tab Section */}
      <PolicySection />

      {/* 3. Bottom CTA */}
      <CTASection
        title="BẠN CẦN KÝ KẾT HỢP ĐỒNG GIA CÔNG NDA?"
        subtitle="Liên hệ ngay với bộ phận pháp lý & kinh doanh của Arden để nhận mẫu hợp đồng nguyên tắc bảo vệ quyền lợi hai bên."
      />
    </div>
  );
};
