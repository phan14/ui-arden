import React from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import {
  ArrowLeft,
  Home,
  Scissors,
  DollarSign,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-20">
      <Container className="max-w-2xl text-center">
        <div className="bg-white p-8 sm:p-12 rounded-sm border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-6xl sm:text-8xl font-black text-blue-900 tracking-tight font-sans">
              404
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>KHÔNG TÌM THẤY TRANG YÊU CẦU</span>
            </div>
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
              TRANG BẠN TÌM KIẾM KHÔNG TỒN TẠI HOẶC ĐÃ ĐỔI ĐỊA CHỈ
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Đường dẫn có thể đã thay đổi. Vui lòng kiểm tra lại URL hoặc chọn một trong các liên kết nhanh dưới đây:
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>VỀ TRANG CHỦ ARDEN</span>
            </Link>

            <Link
              href="/bao-gia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-amber-600" />
              <span>NHẬN BÁO GIÁ NHANH</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs">
            <Link href="/dich-vu" className="p-2 rounded hover:bg-slate-50 text-slate-600 hover:text-blue-900 font-medium">
              Dịch vụ may
            </Link>
            <Link href="/du-an" className="p-2 rounded hover:bg-slate-50 text-slate-600 hover:text-blue-900 font-medium">
              Dự án mẫu
            </Link>
            <Link href="/lien-he" className="p-2 rounded hover:bg-slate-50 text-slate-600 hover:text-blue-900 font-medium">
              Liên hệ xưởng
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
