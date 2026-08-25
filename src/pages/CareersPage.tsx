import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { CareersSection } from '../components/sections/CareersSection';
import { CTASection } from '../components/ui/CTASection';

export const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="GIA NHẬP ĐỘI NGŨ ARDEN FACTORY"
        title="CƠ HỘI NGHỀ NGHIỆP TẠI ARDEN"
        description="Arden liên tục chào đón những người thợ may lành nghề, kỹ thuật viên rập và chuyên viên QC tận tâm cùng xây dựng xưởng may thời trang hàng đầu TP.HCM."
        breadcrumbs={[{ label: 'Tuyển dụng' }]}
      />

      {/* 2. Job Openings & Benefits Section */}
      <CareersSection />

      {/* 3. Bottom CTA */}
      <CTASection
        title="GIA NHẬP ĐỘI NGŨ SẢN XUẤT CHUYÊN NGHIỆP ARDEN"
        subtitle="Liên hệ phòng nhân sự qua hotline 0901 234 567 để trao đổi và phỏng vấn trực tiếp tại xưởng."
      />
    </div>
  );
};
