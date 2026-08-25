/**
 * ============================================================================
 * ARDEN MANUFACTURING & FACTORY LANDING PAGE
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-nang-luc-san-xuat.php / page-manufacturing.php
 * - UX Builder Sections: Page Banner, Trust Bar (UX Block), Factory Section,
 *   MOQ Section (UX Block), Certifications, Process Steps, CTA
 * - Rank Math SEO: Manufacturing Capability & Plant Infrastructure
 * ============================================================================
 */

import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { FactorySection } from '../components/sections/FactorySection';
import { MOQSection } from '../components/sections/MOQSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { CTASection } from '../components/ui/CTASection';
import { productionProcess, factoryCapabilities } from '../data/siteData';

export const ManufacturingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="TỔ HỢP SẢN XUẤT MAY MẶC B2B"
        title="NĂNG LỰC NHÀ XƯỞNG & DÂY CHUYỀN SẢN XUẤT"
        description="Quy mô nhà xưởng 1.000m² tại TP.HCM với hơn 100 máy may Juki điện tử, máy cắt tự động và đội ngũ thợ may trên 5 năm tay nghề cao."
        breadcrumbs={[{ label: 'Năng lực sản xuất' }]}
      />

      {/* 2. Reusable UX Block: Trust Bar */}
      <TrustBarSection />

      {/* 3. Factory Divisions & Equipment */}
      <FactorySection />

      {/* 4. Plant Capacity Stats */}
      <CapabilitiesSection capabilities={factoryCapabilities} />

      {/* 5. MOQ Policy & Minimum Quantities */}
      <MOQSection />

      {/* 6. Quality Certifications & NDA */}
      <CertificationsSection />

      {/* 7. 6-Step Manufacturing Process */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 8. Bottom CTA */}
      <CTASection
        title="BẠN CẦN THĂM XƯỞNG VÀ KIỂM TRA MÁY MÓC TRỰC TIẾP?"
        subtitle="Vui lòng đặt lịch trước 1 ngày để Arden sắp xếp nhân sự kỹ thuật đón tiếp và hướng dẫn xem chuyền may."
      />
    </div>
  );
};
