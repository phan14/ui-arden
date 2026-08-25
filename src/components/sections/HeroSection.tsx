import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Sparkles, ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { MetricItem } from '../../types';

export interface HeroBadgeItem {
  title: string;
  desc: string;
  iconName?: 'check' | 'shield' | 'clock' | 'award';
}

export interface HeroSectionProps {
  kicker?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  badges?: HeroBadgeItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showcaseImage?: string;
  showcaseBadgeText?: string;
  metrics?: MetricItem[];
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  kicker = 'XƯỞNG MAY GIA CÔNG LOCAL BRAND CHUYÊN NGHIỆP',
  title = 'SẢN XUẤT THỜI TRANG THEO YÊU CẦU',
  highlightedTitle = 'CHUẨN XUẤT XƯỞNG B2B',
  description = 'Hậu phương sản xuất vững chắc cho các Local Brand và Doanh nghiệp. Nhận may trọn gói từ khâu phát triển mẫu rập vi tính, cung ứng vải, in/thêu đến hoàn thiện đóng gói.',
  badges = [
    { title: 'MOQ Linh Hoạt', desc: 'Từ 30 áo/mẫu', iconName: 'check' },
    { title: 'Bảo Mật NDA', desc: 'Độc quyền 100%', iconName: 'shield' },
    { title: 'Bảo Hành Kỹ Thuật', desc: '1 đổi 1 nếu lỗi', iconName: 'award' },
  ],
  primaryCtaText = 'NHẬN BÁO GIÁ NHANH (30P)',
  primaryCtaHref = '/bao-gia',
  secondaryCtaText = 'XEM CÁC DỰ ÁN ĐÃ MAY',
  secondaryCtaHref = '/du-an',
  showcaseImage = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  showcaseBadgeText = 'CHUẨN FORM OVERSIZE STREETWEAR',
  metrics = [
    { value: '30 áo', label: 'MOQ Tối thiểu', sublabel: 'Hỗ trợ khởi nghiệp' },
    { value: '100%', label: 'Kiểm FQC', sublabel: 'Từng sản phẩm' },
    { value: '3-7 ngày', label: 'Duyệt mẫu', sublabel: 'Trước khi may loạt' },
  ],
  className = '',
}) => {
  return (
    <section
      aria-label="Hero Giới thiệu Xưởng May"
      className={`bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-18 border-b border-slate-200 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {kicker && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/90 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{kicker}</span>
              </div>
            )}

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950 leading-[1.15]">
                {title}{' '}
                {highlightedTitle && (
                  <span className="text-blue-900 block mt-1">{highlightedTitle}</span>
                )}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                {description}
              </p>
            </div>

            {/* Badges checklist */}
            {badges && badges.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {badges.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                      {b.iconName === 'shield' ? (
                        <ShieldCheck className="w-4 h-4" />
                      ) : b.iconName === 'award' ? (
                        <Award className="w-4 h-4" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{b.title}</div>
                      <div className="text-[11px] text-slate-500">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {primaryCtaText && (
                <Button
                  href={primaryCtaHref}
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  href={secondaryCtaHref}
                  variant="white"
                  size="lg"
                  iconRight={<ChevronRight className="w-4 h-4 text-slate-400" />}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          {/* Right Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-5 space-y-4">
              <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100 m-0">
                <img
                  src={showcaseImage}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {showcaseBadgeText && (
                  <figcaption className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white p-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="line-clamp-1">{showcaseBadgeText}</span>
                  </figcaption>
                )}
              </figure>

              {/* Showcase Mini Metrics */}
              {metrics && metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-slate-100">
                  {metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-sm font-black text-blue-900">{m.value}</div>
                      <div className="text-[10px] text-slate-600 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
