/**
 * ============================================================================
 * ARDEN MOQ (MINIMUM ORDER QUANTITY) POLICY SECTION
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: Reusable UX Block / Section
 * - Flatsome Shortcode: [block id="arden-moq-policy"]
 * - Template Path: template-parts/sections/moq-policy.php
 * - Hierarchy: Section -> Container -> Section Heading -> Row (3 Columns Pricing Cards) -> Elements
 * - Rank Math SEO: Flexible Garment MOQ Policy
 * ============================================================================
 */

import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { moqTiersData } from '../../data/siteData';
import { MOQTier } from '../../types';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface MOQSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  tiers?: MOQTier[];
  className?: string;
}

export const MOQSection: React.FC<MOQSectionProps> = ({
  id = 'moq-section',
  badge = 'CHÍNH SÁCH MOQ LINH HOẠT',
  title = 'SẢN XUẤT CHỈ TỪ 30 ÁO / MẪU - ĐỒNG HÀNH CÙNG LOCAL BRAND',
  subtitle = 'Xóa bỏ rào cản ôm hàng số lượng lớn. Arden thiết kế 3 gói MOQ linh hoạt giúp thương hiệu tối ưu dòng tiền và giảm thiểu rủi ro tồn kho.',
  tiers = moqTiersData,
  className = ''
}) => {
  return (
    <section
      id={id}
      aria-label="Chính sách số lượng đặt may tối thiểu MOQ"
      className={`py-14 sm:py-18 md:py-20 bg-slate-50/70 border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 items-stretch">
          {tiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 sm:p-8 ${
                  isPopular
                    ? 'bg-white border-blue-900 shadow-lg ring-2 ring-blue-900/10 relative -translate-y-1'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-xs tracking-wider">
                      Lựa Chọn Phổ Biến Nhất
                    </span>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-900">
                      {tier.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-950 tracking-tight">
                      {tier.range}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Chiết khấu & Tiến độ:
                    </div>
                    <div className="text-base font-black text-blue-900">
                      {tier.discount} • {tier.leadTime}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                    {tier.recommendedFor}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                      Đặc quyền gói gia công:
                    </div>
                    {tier.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Button
                    href="/bao-gia"
                    variant={isPopular ? 'primary' : 'secondary'}
                    size="md"
                    fullWidth
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    BÁO GIÁ SỐ LƯỢNG NÀY
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-900">
                Cam kết hoàn tiền mẫu khi lên đơn hàng loạt
              </h4>
              <p className="text-xs text-slate-500">
                100% chi phí may mẫu (sample) sẽ được hoàn trả hoặc trừ thẳng vào đơn hàng chính thức từ 50 chiếc.
              </p>
            </div>
          </div>
          <Button
            href="/bao-gia"
            variant="ghost"
            size="sm"
            className="text-blue-900 hover:text-blue-950 font-bold shrink-0"
          >
            Tìm hiểu chính sách sample →
          </Button>
        </div>
      </Container>
    </section>
  );
};
