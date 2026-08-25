/**
 * ============================================================================
 * ARDEN CATEGORY ARCHIVE PAGE
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: category.php / taxonomy-project_category.php
 * - UX Builder Sections: Page Banner, Category Grid, Filter Tabs, CTA
 * - Rank Math SEO: Category Schema & Taxonomy Canonical
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { PortfolioGridSection } from '../components/sections/PortfolioGridSection';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CTASection } from '../components/ui/CTASection';
import { featuredProjects, productionProcess } from '../data/siteData';

interface CategoryPageProps {
  categorySlug?: string;
  categoryTitle?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug = 'ao-thun-local-brand',
  categoryTitle = 'Áo Thun & Polo Local Brand'
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="CHUYÊN MỤC SẢN PHẨM GIA CÔNG"
        title={`DANH MỤC: ${categoryTitle.toUpperCase()}`}
        description="Tổng hợp các mẫu thiết kế, chất liệu vải và case study gia công thực tế cho chuyên mục này tại xưởng may Arden."
        breadcrumbs={[
          { label: 'Dự án & Mẫu sản phẩm', href: '/du-an' },
          { label: categoryTitle },
        ]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Filtered Category Portfolio */}
      <PortfolioGridSection
        badge="BỘ SƯU TẬP MẪU"
        title="CÁC ĐƠN HÀNG ĐÃ XUẤT XƯỞNG"
        subtitle="Toàn bộ sản phẩm được kiểm tra đường may 1mm, in thêu chuẩn pantone và gắn tag thương hiệu hoàn chỉnh."
        projects={featuredProjects}
        showCategoryTabs={true}
      />

      {/* 4. Process Steps */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 5. Bottom CTA */}
      <CTASection
        title={`BẠN MUỐN SẢN XUẤT ${categoryTitle.toUpperCase()}?`}
        subtitle="Gửi thông số rập hoặc ý tưởng thiết kế để nhận bảng báo giá chi tiết trong 30 phút."
      />
    </div>
  );
};
