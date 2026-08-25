import React from 'react';
import { Link } from '../../context/RouterContext';
import { Clock, Zap, Sparkles, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../../data/siteData';

export const CTASection: React.FC<{
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}> = ({
  title = 'Bạn đang tìm xưởng may uy tín?',
  subtitle = 'Arden sẵn sàng đồng hành cùng thương hiệu của bạn từ bước lên ý tưởng đến khi ra thành phẩm.',
  buttonText = 'NHẬN BÁO GIÁ NGAY',
  buttonHref = '/bao-gia',
}) => {
  const perks = [
    { icon: Phone, title: 'Tư vấn miễn phí', desc: '24/7 nhiệt tình, chu đáo' },
    { icon: Zap, title: 'Báo giá nhanh', desc: 'Trong vòng 30 phút' },
    { icon: Clock, title: 'Hỗ trợ làm mẫu', desc: 'Chỉ từ 3 - 7 ngày' },
    { icon: ShieldCheck, title: 'Hỗ trợ sản xuất', desc: 'Định kỳ, linh hoạt từ 30 sp' },
  ];

  return (
    <section id="cta-factory-section" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>ĐỒNG HÀNH CÙNG LOCAL BRAND VIỆT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase font-sans">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-10 max-w-5xl mx-auto">
          {perks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center space-y-2 hover:bg-white/15 transition-all shadow-sm"
              >
                <div className="w-11 h-11 mx-auto rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-amber-300 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-extrabold text-xs uppercase tracking-wider text-white">{item.title}</div>
                <div className="text-xs text-blue-100/80">{item.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Main CTA Button and Secondary Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            id="cta-section-quote-btn"
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs font-black text-blue-900 bg-white hover:bg-blue-50 transition-all shadow-xl shadow-blue-950/20 active:scale-98 uppercase tracking-wider"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold text-white bg-white/10 border border-white/25 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Hotline: {siteConfig.hotlineFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
