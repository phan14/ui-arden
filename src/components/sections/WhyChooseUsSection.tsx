import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WhyChooseItem } from '../../types';
import {
  ShieldCheck,
  Zap,
  Award,
  DollarSign,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export interface WhyChooseUsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items: WhyChooseItem[];
  className?: string;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  badge = 'CAM KẾT CHẤT LƯỢNG',
  title = 'VÌ SAO HƠN 100+ LOCAL BRAND TIN TƯỞNG ARDEN?',
  subtitle = 'Chúng tôi không chỉ là xưởng may gia công, chúng tôi là đối tác sản xuất chiến lược đồng hành cùng sự thành công của thương hiệu bạn.',
  items,
  className = '',
}) => {
  const getIcon = (idx: number) => {
    switch (idx % 6) {
      case 0: return <ShieldCheck className="w-5 h-5 text-blue-900" />;
      case 1: return <Zap className="w-5 h-5 text-blue-900" />;
      case 2: return <Award className="w-5 h-5 text-blue-900" />;
      case 3: return <DollarSign className="w-5 h-5 text-blue-900" />;
      case 4: return <HeartHandshake className="w-5 h-5 text-blue-900" />;
      default: return <CheckCircle2 className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section
      id="why-choose-us-section"
      aria-labelledby="why-heading"
      className={`py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs hover:border-blue-900 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {getIcon(idx)}
              </div>

              <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
