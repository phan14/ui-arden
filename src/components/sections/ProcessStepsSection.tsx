import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProcessStep } from '../../types';
import {
  FileCheck,
  Scissors,
  Layers,
  Sparkles,
  ShieldCheck,
  Package,
  ArrowRight
} from 'lucide-react';

export interface ProcessStepsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({
  badge = 'QUY TRÌNH CHUẨN ISO',
  title = '6 BƯỚC SẢN XUẤT MINH BẠCH TẠI ARDEN',
  subtitle = 'Quy trình kiểm soát chất lượng khép kín từ khâu tư vấn báo giá đến lúc giao hàng tận nơi cho đối tác thương hiệu.',
  steps,
  className = '',
}) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <FileCheck className="w-5 h-5" />;
      case 1: return <Sparkles className="w-5 h-5" />;
      case 2: return <Scissors className="w-5 h-5" />;
      case 3: return <Layers className="w-5 h-5" />;
      case 4: return <ShieldCheck className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="process-section"
      aria-labelledby="process-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative group hover:border-blue-900 transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-xs">
                  {getIcon(idx)}
                </div>
                <span className="text-xl font-black text-slate-300 group-hover:text-blue-900 transition-colors">
                  {step.step || `0${idx + 1}`}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
