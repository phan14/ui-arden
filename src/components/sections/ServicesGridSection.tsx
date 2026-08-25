import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ServiceItem } from '../../types';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

export interface ServicesGridSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({
  badge = 'DANH MỤC DỊCH VỤ SẢN XUẤT',
  title = 'DỊCH VỤ GIA CÔNG MAY MẶC CHUYÊN SÂU',
  subtitle = 'Đáp ứng đa dạng dòng sản phẩm thời trang từ cơ bản đến cao cấp với tiêu chuẩn đường may tỉ mỉ, form dáng chuẩn xu hướng.',
  services,
  viewAllLink = '/dich-vu',
  viewAllText = 'XEM TẤT CẢ DỊCH VỤ',
  className = '',
}) => {
  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <SectionHeading
            badge={badge}
            title={title}
            subtitle={subtitle}
            align="left"
          />

          {viewAllLink && (
            <div className="shrink-0">
              <Button
                href={viewAllLink}
                variant="white"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {viewAllText}
              </Button>
            </div>
          )}
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-blue-900 hover:shadow-md group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {service.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="amber">{service.badge}</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-200/80">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:p-6 pt-0">
                <Button
                  href={service.slug || `/dich-vu/${service.id}`}
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconRight={<ChevronRight className="w-3.5 h-3.5" />}
                >
                  XEM CHI TIẾT & BÁO GIÁ
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
