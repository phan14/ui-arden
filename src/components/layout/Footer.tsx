import React from 'react';
import { Link } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteData';
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <span className="font-black text-xl">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-white uppercase font-sans">
                  ARDEN
                </span>
                <span className="text-[9px] tracking-[0.2em] text-blue-400 font-bold uppercase mt-0.5">
                  GARMENT FACTORY
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Xưởng may gia công thời trang uy tín hàng đầu tại TP.HCM. Chuyên sản xuất áo thun, sơ mi, quần, áo khoác cho các Local Brand và doanh nghiệp với tiêu chuẩn chất lượng cao, nhận đơn từ 30 sản phẩm.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Bảo mật thiết kế 100%</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>10+ năm kinh nghiệm</span>
              </div>
            </div>
          </div>

          {/* Column 2: Dịch Vụ (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              DỊCH VỤ GIA CÔNG
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/dich-vu/may-ao-thun" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>May áo thun (Oversize, Boxy...)</span>
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>May áo sơ mi (Oxford, Lụa...)</span>
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>May quần (Kaki, Jean, Cargo...)</span>
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>May áo khoác (Bomber, Hoodie...)</span>
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Gia công Local Brand trọn gói</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Thông Tin Liên Hệ (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              THÔNG TIN LIÊN HỆ
            </h4>
            <ul className="space-y-2.5 text-xs leading-relaxed text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-blue-400 font-bold transition-colors">
                  {siteConfig.phone} (Hotline/Zalo)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.website}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Vị Trí Xưởng / Quick Map Link (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              VỊ TRÍ XƯỞNG
            </h4>
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-800/60 p-3 space-y-2.5 shadow-md">
              <div className="aspect-video w-full rounded-xl bg-slate-800 relative overflow-hidden flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80"
                  alt="Bản đồ chỉ đường Xưởng May Arden Tân Phú"
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/50">
                    <MapPin className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-300 text-center font-medium">
                Tây Thạnh, Q. Tân Phú, TP.HCM
              </div>
              <Link
                href="/lien-he"
                className="block text-center text-[11px] py-2 px-3 rounded-xl bg-slate-700/80 hover:bg-blue-600 text-white font-bold transition-all uppercase tracking-wider shadow-sm"
              >
                Chỉ đường & Liên hệ ➔
              </Link>
            </div>
          </div>
        </div>

        {/* Policies & Sublinks */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-b border-slate-900">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/chinh-sach" className="hover:text-white transition-colors">Chính sách chung</Link>
            <Link href="/chinh-sach#chinh-sach-bao-mat" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="/chinh-sach#chinh-sach-thanh-toan" className="hover:text-white transition-colors">Chính sách thanh toán</Link>
            <Link href="/chinh-sach#chinh-sach-doi-tra" className="hover:text-white transition-colors">Chính sách đổi trả</Link>
            <Link href="/chinh-sach#chinh-sach-van-chuyen" className="hover:text-white transition-colors">Chính sách vận chuyển</Link>
            <Link href="/tuyen-dung" className="hover:text-white transition-colors">Tuyển dụng thợ may & QC</Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Kết nối cùng Arden:</span>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-[10px] font-bold"
            >
              FB
            </a>
            <a
              href={siteConfig.social.zalo}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-[10px] font-bold"
            >
              Zalo
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-[10px] font-bold"
            >
              TT
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Arden Garment Factory (Xưởng May Arden). Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Tiêu chuẩn gia công may mặc chất lượng cao tại TP. Hồ Chí Minh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
