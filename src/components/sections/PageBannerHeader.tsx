import React from 'react';
import { Container } from '../layout/Container';
import { Breadcrumb } from '../ui/Breadcrumb';
import { BreadcrumbItem } from '../../types';
import { Sparkles } from 'lucide-react';

export interface PageBannerHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const PageBannerHeader: React.FC<PageBannerHeaderProps> = ({
  breadcrumbs,
  badge,
  badgeIcon = <Sparkles className="w-3.5 h-3.5 text-blue-700" />,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <section
      aria-label="Tiêu đề trang"
      className={`bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-10 sm:py-14 border-b border-slate-200 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10">
        <div className={isCenter ? 'flex justify-center' : ''}>
          <Breadcrumb items={breadcrumbs} />
        </div>

        <div
          className={`mt-4 space-y-3 ${
            isCenter ? 'text-center max-w-3xl mx-auto items-center flex flex-col' : 'max-w-3xl'
          }`}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              {badgeIcon}
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm sm:leading-relaxed text-slate-600 font-normal max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
