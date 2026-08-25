/**
 * ============================================================================
 * ARDEN FACTORY & MACHINERY SECTION
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: UX Section / Reusable UX Block
 * - Flatsome Shortcode: [block id="arden-factory"]
 * - Template Path: template-parts/sections/factory-machinery.php
 * - Hierarchy: Section -> Container -> Section Title -> Row (4 Columns / 2x2 Grid) -> Image Boxes
 * - Rank Math SEO: Local Garment Factory Infrastructure
 * ============================================================================
 */

import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { factoryDepartmentsData } from '../../data/siteData';
import { FactoryDepartment } from '../../types';
import { Check, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface FactorySectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  departments?: FactoryDepartment[];
  showCta?: boolean;
}

export const FactorySection: React.FC<FactorySectionProps> = ({
  id = 'factory-section',
  badge = 'QUY MÔ NHÀ XƯỞNG HƠN 1.000M²',
  title = 'CƠ SỞ VẬT CHẤT & MÁY MÓC HIỆN ĐẠI TẠI TP.HCM',
  subtitle = 'Nhà xưởng Arden được quy hoạch khép kín theo tiêu chuẩn công nghiệp Nhật Bản, trang bị 100% máy may Juki điện tử đời mới.',
  departments = factoryDepartmentsData,
  showCta = true
}) => {
  const [selectedDept, setSelectedDept] = useState<FactoryDepartment>(departments[0]);

  return (
    <section
      id={id}
      aria-label="Cơ sở vật chất nhà xưởng may Arden"
      className="py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200"
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        {/* 4 Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {departments.map((dept) => {
            const isActive = selectedDept.id === dept.id;
            return (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-50/40 border-blue-900 shadow-md ring-1 ring-blue-900/20'
                    : 'bg-slate-50/60 border-slate-200 hover:border-blue-900 hover:bg-white'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-blue-900 text-white' : 'bg-slate-900/80 text-white'
                      }`}>
                        {dept.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-sm font-bold uppercase tracking-tight text-slate-950">
                      {dept.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {dept.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-slate-200/60 pt-3">
                    <span className="text-[11px] font-bold text-blue-900 flex items-center gap-1">
                      <span>Xem trang thiết bị</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Department Active Deep-Dive Box */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Chi tiết trang thiết bị
                </span>
                <span className="text-xs text-slate-400">
                  Công suất: {selectedDept.capacity}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight">
                {selectedDept.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedDept.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {selectedDept.equipment.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700 text-slate-200"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button
                href="/bao-gia"
                variant="primary"
                size="md"
                fullWidth
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black border-amber-500"
              >
                ĐẶT LỊCH THĂM XƯỞNG
              </Button>
              <Button
                href="/dich-vu"
                variant="secondary"
                size="md"
                fullWidth
                className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
              >
                XEM BẢNG GIÁ THEO SỐ LƯỢNG
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
