/**
 * ============================================================================
 * ARDEN CERTIFICATIONS & COMPLIANCE SECTION
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: Reusable UX Block
 * - Flatsome Shortcode: [block id="arden-certifications-bar"]
 * - Template Path: template-parts/ux-blocks/certifications.php
 * - Hierarchy: Section -> Container -> Row (4 Columns) -> Icon Box Elements
 * - Rank Math SEO: Quality Accreditation & Compliance
 * ============================================================================
 */

import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { certificationsData } from '../../data/siteData';
import { CertificationItem } from '../../types';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: CertificationItem[];
  className?: string;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  id = 'certifications-section',
  badge = 'TIÊU CHUẨN KIỂM ĐỊNH',
  title = 'CHỨNG NHẬN CHẤT LƯỢNG & CAM KẾT PHÁP LÝ',
  subtitle = 'Đảm bảo sự an tâm tuyệt đối cho các nhà sáng lập thương hiệu khi gia công tại xưởng may Arden.',
  items = certificationsData,
  className = ''
}) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-blue-900" />;
      case 1:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <FileCheck className="w-5 h-5 text-amber-600" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-blue-900" />;
      default:
        return <Award className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section
      id={id}
      aria-label="Chứng nhận chất lượng xưởng may"
      className={`py-12 sm:py-16 bg-slate-50 border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-900 transition-all group space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(idx)}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-tight text-slate-900">
                  {item.name}
                </h3>
                <div className="text-[11px] font-medium text-slate-400">
                  {item.issuer}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
