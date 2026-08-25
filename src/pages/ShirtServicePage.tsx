/**
 * ============================================================================
 * ARDEN SHIRT SERVICE PAGE (DỊCH VỤ MAY ÁO SƠ MI)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-may-ao-so-mi.php / single-service.php
 * - UX Builder Sections: Page Banner, Value Props, Material Breakdown, Size Chart, Process, CTA
 * - Rank Math SEO: Service Schema (Áo Sơ Mi Local Brand & Công Sở)
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { MOQSection } from '../components/sections/MOQSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { productionProcess } from '../data/siteData';
import {
  CheckCircle2,
  Sparkles,
  Scissors,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const ShirtServicePage: React.FC = () => {
  const [selectedFabricTab, setSelectedFabricTab] = useState<'oxford' | 'linen' | 'modal' | 'cotton_poplin'>('oxford');

  const fabricsInfo = {
    oxford: {
      name: 'Vải Oxford Dệt Sợi Thô (Cotton 100%)',
      gsm: '160 - 190 GSM',
      desc: 'Cấu trúc dệt rổ (basketweave) đặc trưng tạo bề mặt xước nhẹ, đứng form chuẩn phong cách Smart-Casual, bền bỉ và ít nhăn.',
      pros: ['Đứng form dáng chuẩn Streetwear & Casual', 'Độ bền sợi cao, giặt máy không lo xơ vải', 'Thấm hút mồ hôi tự nhiên'],
      bestFor: 'Sơ mi Oxford tay dài/ngắn, form Relaxed Fit hoặc Oversize'
    },
    linen: {
      name: 'Vải Linen (Đũi Tự Nhiên & Linen Cotton)',
      gsm: '140 - 180 GSM',
      desc: 'Sợi lanh tự nhiên mang lại cảm giác thoáng mát tuyệt đối, bề mặt vân mộc tinh tế đặc trưng cho mùa hè và phong cách Resort.',
      pros: ['Thoáng khí cực tốt, bay hơi nhanh', 'Vẻ đẹp mộc mạc cao cấp', 'Càng giặt sợi càng mềm mại'],
      bestFor: 'Sơ mi Cuban Collar, sơ mi đi biển, sơ mi form suông vintage'
    },
    modal: {
      name: 'Vải Modal & Sợi Tre (Bamboo Silk)',
      gsm: '120 - 150 GSM',
      desc: 'Chất liệu chiết xuất từ gỗ sồi tự nhiên, mềm mại như lụa, chống nhăn tự nhiên và khả năng kháng khuẩn vượt trội.',
      pros: ['Mềm mịn, mát lạnh khi tiếp xúc da', 'Chống nhăn tự nhiên, giữ nếp ủi lâu', 'Kháng tia UV và mùi hôi'],
      bestFor: 'Sơ mi công sở cao cấp, sơ mi thời trang cao cấp nữ và nam'
    },
    cotton_poplin: {
      name: 'Vải Cotton Poplin / Kate Mỹ',
      gsm: '110 - 140 GSM',
      desc: 'Mặt vải láng mịn, mật độ sợi dệt dày dặn, tạo nên nét chỉn chu, sắc nét cho các thiết kế sơ mi thanh lịch.',
      pros: ['Mặt vải đanh mịn, bắt sáng tốt', 'Dễ ủi phẳng, sắc nét từng mép cổ', 'Màu sắc bền đẹp sau nhiều lần giặt'],
      bestFor: 'Sơ mi Dress Shirt, sơ mi đồng phục cao cấp'
    }
  };

  const sizeChartShirt = [
    { size: 'S', length: 70, chest: 50, shoulder: 44, sleeve: 22, collar: 38 },
    { size: 'M', length: 72, chest: 53, shoulder: 46, sleeve: 23, collar: 39 },
    { size: 'L', length: 74, chest: 56, shoulder: 48, sleeve: 24, collar: 40 },
    { size: 'XL', length: 76, chest: 59, shoulder: 50, sleeve: 25, collar: 41 },
    { size: 'XXL', length: 78, chest: 62, shoulder: 52, sleeve: 26, collar: 42 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Banner */}
      <PageBannerHeader
        badge="DỊCH VỤ GIA CÔNG SƠ MI CHUYÊN SÂU"
        title="MAY ÁO SƠ MI LOCAL BRAND & THIẾT KẾ"
        description="Chuyên may sơ mi Oxford, sơ mi Cuban, Linen, Kate lụa với kỹ thuật may mí cuộn sườn 1mm, cổ ép keo cao tần không phồng rộp và nút khắc laser thương hiệu."
        breadcrumbs={[
          { label: 'Dịch vụ may', href: '/dich-vu' },
          { label: 'May Áo Sơ Mi' }
        ]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Chi Tiết Kỹ Thuật May Sơ Mi */}
      <section id="shirt-specs" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="TIÊU CHUẨN KỸ THUẬT ARDEN"
            title="TIÊU CHUẨN MAY ÁO SƠ MI ĐẠT CHUẨN XUẤT XƯỞNG"
            subtitle="Từng chi tiết cổ áo, mép cuốn sườn và khuy nút đều được kiểm tra kỹ lưỡng theo bảng thông số chuẩn xác."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-sm font-bold uppercase text-slate-900">
                CỔ ÁO ÉP KEO NHIỆT KHÔNG RỘP
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sử dụng keo dính vải nhập khẩu từ Nhật Bản, ép bằng máy nhiệt phẳng áp lực cao đảm bảo lá cổ đứng form, không bị bong keo hay phồng rộp sau khi giặt máy.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-sm font-bold uppercase text-slate-900">
                MAY MÍ CUỘN SƯỜN PHẲNG MỊN 1MM
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đường may nách và may sườn áp dụng kỹ thuật may cuốn mí 2 kim sắc nét, giấu mép vải hoàn hảo giúp bên trong áo sạch đẹp không lộ chỉ thừa.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-sm font-bold uppercase text-slate-900">
                NÚT ÁO KHẮC LASER & ĐÓNG BỌ GIA CỐ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhận gia công nút áo xà cừ, nút nhựa resin khắc laser logo thương hiệu độc quyền; chân cúc được may quấn chỉ chắc chắn chống tuột đứt.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Chất Liệu Vải May Sơ Mi */}
      <section id="shirt-fabrics" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="BẢNG CHẤT LIỆU VẢI SƠ MI"
            title="CÁC LOẠI VẢI SƠ MI PHỔ BIẾN CHO LOCAL BRAND"
            subtitle="Arden liên kết trực tiếp với các kho vải dệt nhuộm lớn tại TP.HCM, cung cấp hàng trăm mã màu sẵn sàng sản xuất."
            align="center"
            className="mb-10"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['oxford', 'linen', 'modal', 'cotton_poplin'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedFabricTab(key)}
                  className={`p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedFabricTab === key
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {key === 'oxford' ? 'Vải Oxford' : key === 'linen' ? 'Vải Linen' : key === 'modal' ? 'Vải Modal Sợi Tre' : 'Cotton Poplin'}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {fabricsInfo[selectedFabricTab].name}
                  </h4>
                  <span className="text-xs text-blue-900 font-semibold">
                    Định lượng: {fabricsInfo[selectedFabricTab].gsm}
                  </span>
                </div>
                <Badge variant="primary" size="sm">
                  {fabricsInfo[selectedFabricTab].bestFor}
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {fabricsInfo[selectedFabricTab].desc}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                  Ưu điểm nổi bật:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {fabricsInfo[selectedFabricTab].pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bảng Size Chart Sơ Mi */}
      <section id="shirt-size-chart" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="BẢNG THÔNG SỐ RẬP THAM KHẢO"
            title="THÔNG SỐ SIZE ÁO SƠ MI FORM REGULAR / RELAXED"
            subtitle="Thông số có thể điều chỉnh 100% linh hoạt theo phom dáng độc quyền của thương hiệu bạn."
            align="center"
            className="mb-8"
          />

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-bold uppercase">
                <tr>
                  <th className="p-3.5">Size</th>
                  <th className="p-3.5">Dài áo (cm)</th>
                  <th className="p-3.5">Rộng ngực (cm)</th>
                  <th className="p-3.5">Rộng vai (cm)</th>
                  <th className="p-3.5">Dài tay (cm)</th>
                  <th className="p-3.5">Vòng cổ (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {sizeChartShirt.map((row) => (
                  <tr key={row.size} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-blue-900">{row.size}</td>
                    <td className="p-3.5">{row.length}</td>
                    <td className="p-3.5">{row.chest}</td>
                    <td className="p-3.5">{row.shoulder}</td>
                    <td className="p-3.5">{row.sleeve}</td>
                    <td className="p-3.5">{row.collar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 6. MOQ Section */}
      <MOQSection />

      {/* 7. Process */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 8. Bottom CTA */}
      <CTASection
        title="BẠN CẦN TƯ VẤN BÁO GIÁ MAY ÁO SƠ MI?"
        subtitle="Gửi mẫu thiết kế hoặc bản phác thảo, Arden sẽ báo giá và gửi mẫu vải tận nơi trong vòng 30 phút."
        primaryButtonText="GỬI YÊU CẦU BÁO GIÁ SƠ MI"
        primaryButtonLink="/bao-gia"
      />
    </div>
  );
};
