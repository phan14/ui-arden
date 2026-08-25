import React from 'react';
import { Container } from '../layout/Container';
import { Button } from './Button';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteData';

export interface CTASectionProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhoneCall?: boolean;
  phoneOverride?: string;
  variant?: 'navy' | 'light' | 'dark' | 'gradient';
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  kicker = 'ĐỒNG HÀNH CÙNG PHÁT TRIỂN THƯƠNG HIỆU LOCAL BRAND',
  title,
  subtitle,
  primaryButtonText = 'NHẬN BÁO GIÁ NHANH (30 PHÚT)',
  primaryButtonHref = '/bao-gia',
  secondaryButtonText = 'GỌI HOTLINE TƯ VẤN TRỰC TIẾP',
  secondaryButtonHref,
  showPhoneCall = true,
  phoneOverride,
  variant = 'navy',
  className = '',
}) => {
  const phone = phoneOverride || siteConfig.phone;
  const telHref = secondaryButtonHref || `tel:${phone.replace(/\s+/g, '')}`;

  const isNavy = variant === 'navy' || variant === 'dark';

  return (
    <section
      aria-label="Kêu gọi hành động"
      className={`py-14 sm:py-18 relative overflow-hidden border-t border-b ${
        isNavy
          ? 'bg-slate-900 text-white border-slate-800'
          : 'bg-gradient-to-b from-blue-50/50 to-slate-100/80 text-slate-900 border-slate-200'
      } ${className}`}
    >
      {/* Background pattern */}
      <div
        className={`absolute inset-0 opacity-20 pointer-events-none ${
          isNavy
            ? 'bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]'
            : 'bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]'
        }`}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {kicker && (
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs ${
                isNavy
                  ? 'bg-slate-800/90 border border-blue-500/40 text-blue-300'
                  : 'bg-white border border-blue-200 text-blue-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{kicker}</span>
            </div>
          )}

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.2] ${
              isNavy ? 'text-white' : 'text-slate-950'
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-normal ${
                isNavy ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              href={primaryButtonHref}
              variant={isNavy ? 'amber' : 'primary'}
              size="lg"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {primaryButtonText}
            </Button>

            {showPhoneCall && (
              <Button
                href={telHref}
                variant={isNavy ? 'white' : 'outline'}
                size="lg"
                iconLeft={<PhoneCall className="w-4 h-4 text-blue-700" />}
              >
                {secondaryButtonText}: {phone}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
