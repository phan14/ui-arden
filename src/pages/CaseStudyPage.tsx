import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { SingleProjectSection } from '../components/sections/SingleProjectSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CTASection } from '../components/ui/CTASection';
import { featuredProjects, productionProcess } from '../data/siteData';

export const CaseStudyPage: React.FC = () => {
  const currentProject = featuredProjects[0];
  const relatedProjects = featuredProjects.slice(1, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="CASE STUDY TIÊU BIỂU"
        title="BST ÁO THUN OVERSIZE LOCAL BRAND ADC"
        description="Hành trình gia công 1.000 áo thun Cotton 2 chiều 250 GSM với kỹ thuật in Plastisol và bo cổ dệt chống dão trong 15 ngày."
        breadcrumbs={[
          { label: 'Dự án & Mẫu sản phẩm', href: '/du-an' },
          { label: 'BST Áo thun Local Brand ADC' },
        ]}
      />

      {/* 2. Detailed Single Project Case Study (WordPress single-project.php) */}
      <SingleProjectSection
        project={currentProject}
        relatedProjects={relatedProjects}
      />

      {/* 3. 6-Step Production Quality Assurance */}
      <ProcessStepsSection
        badge="QUY TRÌNH THỰC HIỆN"
        title="TIẾN ĐỘ & TIÊU CHUẨN XUẤT XƯỞNG"
        subtitle="Hệ thống 6 công đoạn kiểm tra chất lượng FQC 100% được áp dụng trên từng lô hàng xuất xưởng."
        steps={productionProcess}
      />

      {/* 4. Bottom CTA */}
      <CTASection
        title="BẠN MUỐN SẢN XUẤT BỘ SƯU TẬP TƯƠNG TỰ?"
        subtitle="Liên hệ ngay với xưởng may Arden để được tư vấn chất liệu vải và nhận bảng báo giá chi tiết trong 30 phút."
      />
    </div>
  );
};
