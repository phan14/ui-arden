import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { PortfolioGridSection } from '../components/sections/PortfolioGridSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CTASection } from '../components/ui/CTASection';
import { featuredProjects, productionProcess } from '../data/siteData';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="HƠN 500.000+ SẢN PHẨM ĐÃ XUẤT XƯỞNG"
        title="DỰ ÁN & BỘ SƯU TẬP ĐÃ GIA CÔNG"
        description="Tham khảo các dòng sản phẩm thời trang thực tế đã sản xuất tại xưởng may Arden cho các đối tác thương hiệu Local Brand và doanh nghiệp."
        breadcrumbs={[{ label: 'Dự án & Sản phẩm mẫu' }]}
      />

      {/* 2. Portfolio Grid with Interactive Filters & Quick View Modals */}
      <PortfolioGridSection
        badge="DANH MỤC THỰC TẾ"
        title="BỘ SƯU TẬP MẪU THEO TỪNG CHỦNG LOẠI"
        subtitle="Chọn từng danh mục sản phẩm bên dưới để xem hình ảnh thực tế, thông số vải và quy mô đặt may từng đơn hàng."
        projects={featuredProjects}
        showCategoryTabs={true}
      />

      {/* 3. 6-Step Production Quality Assurance */}
      <ProcessStepsSection
        badge="QUY TRÌNH KIỂM ĐỊNH"
        title="TIÊU CHUẨN KIỂM SOÁT CHẤT LƯỢNG SẢN PHẨM"
        subtitle="Mỗi sản phẩm xuất xưởng đều trải qua 6 bước kiểm tra nghiêm ngặt từ cắt vải, in thêu đến đóng gói hoàn thiện."
        steps={productionProcess}
      />

      {/* 4. Bottom CTA */}
      <CTASection
        title="BẠN MUỐN SẢN XUẤT MẪU THIẾT KẾ ĐỘC QUYỀN?"
        subtitle="Gửi mẫu Techpack hoặc hình ảnh sản phẩm, Arden sẽ tư vấn thông số và báo giá nhanh chóng trong 30 phút."
      />
    </div>
  );
};
