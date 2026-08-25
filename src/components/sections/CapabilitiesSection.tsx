import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FactoryCapability } from '../../types';
import { Factory, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';

export interface CapabilitiesSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  capabilities: FactoryCapability[];
  showcaseImage?: string;
  className?: string;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  badge = 'QUY MÔ NHÀ XƯỞNG',
  title = 'NĂNG LỰC SẢN XUẤT VÀ TRANG THIẾT BỊ',
  subtitle = 'Nhà xưởng quy mô 1.000m² tại TP.HCM được đầu tư đồng bộ hệ thống máy móc dệt may tự động hiện đại nhất.',
  capabilities,
  showcaseImage = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
  className = '',
}) => {
  return (
    <section
      id="capabilities-section"
      aria-labelledby="capabilities-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src={showcaseImage}
                alt="Nhà xưởng may Arden"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xl font-black uppercase">Xưởng May Arden TP.HCM</div>
                <p className="text-xs text-slate-300 mt-1">Hơn 60+ công nhân tay nghề cao & 100+ máy may chuyên dụng</p>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge={badge}
              title={title}
              subtitle={subtitle}
              align="left"
            />

            <div className="space-y-4 pt-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 transition-all hover:border-blue-900"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {cap.number || `0${idx + 1}`}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                href="/lien-he"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                ĐĂNG KÝ THĂM XƯỞNG TRỰC TIẾP
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
