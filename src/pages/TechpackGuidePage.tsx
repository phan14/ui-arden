/**
 * ============================================================================
 * ARDEN TECHPACK GUIDE PAGE (HƯỚNG DẪN TECHPACK & MAY MẪU)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-huong-dan-techpack.php
 * - UX Builder Sections: Page Banner, Checklist, Step-by-Step, Download Template, CTA
 * - Rank Math SEO: Article / Guide Schema
 * ============================================================================
 */

import React from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  FileText,
  CheckCircle2,
  Download,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const TechpackGuidePage: React.FC = () => {
  const techpackElements = [
    {
      number: '01',
      title: 'Bản Vẽ Kỹ Thuật Mặt Trước & Sau (Flat Sketch)',
      desc: 'Bản vẽ 2D đen trắng thể hiện rõ đường may, vị trí mí sườn, đường vắt sổ, cúc bấm, dây kéo và các chi tiết phối màu.'
    },
    {
      number: '02',
      title: 'Bảng Thông Số Kích Thước (Measurement Specs)',
      desc: 'Chi tiết các số đo cơ bản (dài áo, rộng ngực, dài tay, rộng cổ...) kèm khoảng dung sai cho phép (thường ±1cm đến ±1.5cm).'
    },
    {
      number: '03',
      title: 'Định Danh Vải & Màu Sắc (Fabric & Colorways)',
      desc: 'Chỉ định rõ thành phần vải, mã màu theo cây màu Pantone (TCX/TPG) hoặc mẫu vải vật lý kèm theo.'
    },
    {
      number: '04',
      title: 'Vị Trí & Kích Thước In/Thêu (Artwork Placements)',
      desc: 'Khoảng cách từ mép cổ hoặc mép vai đến hình in, kích thước chính xác theo milimet (W x H) và kỹ thuật in chỉ định (Plastisol, DTG, Thêu).'
    },
    {
      number: '05',
      title: 'Quy Cách Nhãn Mác & Đóng Gói (Labels & Packaging)',
      desc: 'Vị trí may mác cổ dệt (Woven Label), mác sườn hướng dẫn giặt (Care Label), thẻ bài treo (Hangtag) và loại túi zip đóng gói.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Banner */}
      <PageBannerHeader
        badge="CẨM NANG KỸ THUẬT SẢN XUẤT"
        title="HƯỚNG DẪN CHUẨN BỊ TECHPACK & QUY TRÌNH MAY MẪU"
        description="Bộ tài liệu chi tiết giúp các nhà sáng lập thương hiệu thời trang chuẩn bị hồ sơ kỹ thuật chuẩn xác, tối ưu thời gian ra mẫu và tránh các sai sót tốn kém."
        breadcrumbs={[{ label: 'Hướng dẫn Techpack' }]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Techpack Checklist */}
      <section id="techpack-checklist" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container className="max-w-5xl">
          <SectionHeading
            badge="5 THÀNH PHẦN BẮT BUỘC"
            title="CẤU TRÚC MỘT BẢN TECHPACK TIÊU CHUẨN"
            subtitle="Một bản techpack chuẩn giúp chuyền may sản xuất chính xác 100% ý tưởng thiết kế của bạn."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {techpackElements.map((elem) => (
              <div
                key={elem.number}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-white hover:border-blue-900 transition-all shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-base shrink-0">
                  {elem.number}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase text-slate-900">
                    {elem.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {elem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-blue-900 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase text-blue-950">
                  CHƯA CÓ FILE TECHPACK CHUYÊN NGHIỆP?
                </h4>
                <p className="text-xs text-blue-800">
                  Đừng lo lắng! Arden hỗ trợ vẽ lại bản vẽ kỹ thuật và lên file Techpack hoàn chỉnh từ hình ảnh mẫu phác thảo của bạn.
                </p>
              </div>
            </div>
            <Button
              to="/bao-gia"
              variant="primary"
              size="sm"
            >
              Yêu cầu hỗ trợ vẽ rập
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. Quy trình may mẫu tại Arden */}
      <section id="sample-process" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="QUY TRÌNH MAY MẪU THỰC TẾ"
            title="3 BƯỚC THỰC HIỆN MAY MẪU ĐỐI CHỨNG"
            subtitle="Mẫu thử nghiệm giúp bạn kiểm tra thực tế phom dáng, chất lượng vải và độ nét in ấn trước khi sản xuất hàng loạt."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <span className="text-xs font-black uppercase text-blue-900">BƯỚC 1</span>
              <h4 className="text-sm font-bold text-slate-900">Tiếp nhận & Ra Rập CAD</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đội ngũ kỹ thuật viên lập rập số trên phần mềm vi tính và cắt vải mẫu đối chứng theo thông số size chỉ định.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <span className="text-xs font-black uppercase text-blue-900">BƯỚC 2</span>
              <h4 className="text-sm font-bold text-slate-900">May Mẫu & In Test</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thợ may mẫu thực hiện may thành phẩm, in/thêu test màu mực và gắn phụ liệu tiêu chuẩn hoàn chỉnh.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <span className="text-xs font-black uppercase text-blue-900">BƯỚC 3</span>
              <h4 className="text-sm font-bold text-slate-900">Giao Mẫu & Chỉnh Sửa</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khách hàng mặc thử nghiệm thực tế. Arden hỗ trợ tinh chỉnh rập theo phản hồi cho đến khi đạt độ ưng ý tuyệt đối.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection
        title="BẠN CẦN BẮT ĐẦU MAY MẪU CHO BỘ SƯU TẬP MỚI?"
        subtitle="Chi phí may mẫu sẽ được hoàn trả 100% khi sản xuất đơn hàng hàng loạt từ 50 sản phẩm."
        primaryButtonText="ĐĂNG KÝ MAY MẪU NGAY"
        primaryButtonLink="/bao-gia"
      />
    </div>
  );
};
