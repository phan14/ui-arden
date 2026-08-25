import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialItem } from '../../types';
import { Star, Quote, Sparkles } from 'lucide-react';

export interface TestimonialsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  badge = 'ĐÁNH GIÁ TỪ ĐỐI TÁC',
  title = 'NHÀ SÁNG LẬP LOCAL BRAND NÓI GÌ VỀ ARDEN?',
  subtitle = 'Sự hài lòng và phát triển của các thương hiệu thời trang chính là thước đo chất lượng chuẩn xác nhất của xưởng may Arden.',
  testimonials,
  className = '',
}) => {
  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-blue-900 transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating || 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.founderName}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 bg-slate-200"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-900">
                    {t.founderName}
                  </h3>
                  <div className="text-[11px] text-blue-900 font-semibold">
                    {t.role} — <strong>{t.brandName}</strong>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Đã may: {t.productType} ({t.quantity})
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
