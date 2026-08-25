/**
 * ============================================================================
 * ARDEN PANTS SERVICE PAGE (DỊCH VỤ MAY QUẦN KAKI, JEAN & CARGO)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-may-quan.php / single-service.php
 * - UX Builder Sections: Page Banner, Specs, Fabric Breakdown, Size Chart, Process, CTA
 * - Rank Math SEO: Service Schema (Gia Công Quần Thời Trang Local Brand)
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { MOQSection } from '../components/sections/MOQSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { productionProcess } from '../data/siteData';
import { CheckCircle2, ShieldCheck, Layers, Scissors } from 'lucide-react';

export const PantsServicePage: React.FC = () => {
  const [selectedPantsType, setSelectedPantsType] = useState<'kaki' | 'jean' | 'cargo' | 'short'>('kaki');

  const pantsTypes = {
    kaki: {
      name: 'Quần Dài Kaki & Chinos (Kaki Chun Co Giãn)',
      fabric: 'Kaki Cotton 100%, Kaki Spandex 2% co giãn',
      desc: 'Form dáng Regular fit hoặc Slim crop thanh lịch, đường may bọ đáy gia cố chịu lực và khóa kéo YKK chính hãng.',
      features: ['Lưng quần may lót êm ái', 'Đáy quần may đè chỉ đôi chống rách đáy', 'Xử lý wash mềm không cứng vải']
    },
    jean: {
      name: 'Quần Jeans Denim (12oz - 14oz Wash Vintage)',
      fabric: 'Denim Cotton 100% / Denim Spandex',
      desc: 'Chuyên các kỹ thuật wash màu theo yêu cầu: Acid wash, Stone wash, Ripped rách xước, phối đinh tán kim loại dập nổi.',
      features: ['Chỉ may bò chịu lực chuyên dụng', 'Xử lý wash màu chuẩn tone thiết kế', 'Tag da lưng quần dập nhiệt logo']
    },
    cargo: {
      name: 'Quần Túi Hộp Cargo Pants & Parachute',
      fabric: 'Vải dù nhăn kháng nước, Kaki thô dày dặn',
      desc: 'Phong cách Streetwear & Techwear với thiết kế đa túi tiện dụng, cạp chun có khóa gài bấm và dây rút gấu ống quần.',
      features: ['Túi hộp may nổi 3D sắc nét', 'Dây rút gấu quần tùy chỉnh độ thụng', 'Cạp lưng thun may nhiều đường chỉ']
    },
    short: {
      name: 'Quần Short Thời Trang (Sweatshort & Khaki Short)',
      fabric: 'Nỉ chân cua 350 GSM, Kaki thun mềm, Dù micro',
      desc: 'Sản phẩm chủ lực mùa hè cho các Local Brand: form ống rộng trên gối, dây luồn dệt đặc biệt và in thêu logo bên đùi.',
      features: ['Dây rút luồn kim loại chống xơ đầu', 'Túi mổ sâu đựng vừa điện thoại lớn', 'Đường viền gấu may Kansai chắc chắn']
    }
  };

  const sizeChartPants = [
    { size: '28 / S', waist: '72 - 76', hip: '94', length: '96', thigh: '56', legOpening: '38' },
    { size: '30 / M', waist: '76 - 80', hip: '98', length: '98', thigh: '58', legOpening: '40' },
    { size: '32 / L', waist: '80 - 84', hip: '102', length: '100', thigh: '60', legOpening: '42' },
    { size: '34 / XL', waist: '84 - 88', hip: '106', length: '102', thigh: '62', legOpening: '44' },
    { size: '36 / XXL', waist: '88 - 94', hip: '110', length: '104', thigh: '64', legOpening: '46' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Banner */}
      <PageBannerHeader
        badge="DỊCH VỤ MAY GIA CÔNG QUẦN"
        title="MAY QUẦN KAKI, JEANS & CARGO PANTS THEO YÊU CẦU"
        description="Gia công đa dạng chủng loại quần thời trang nam nữ với kỹ thuật đóng bọ gia cố, dây kéo YKK đồng bộ và xử lý wash mềm cao cấp."
        breadcrumbs={[
          { label: 'Dịch vụ may', href: '/dich-vu' },
          { label: 'May Quần Kaki & Jean' }
        ]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Phân loại dịch vụ may quần */}
      <section id="pants-categories" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="DANH MỤC SẢN XUẤT"
            title="CÁC DÒNG QUẦN THỜI TRANG CHỦ LỰC"
            subtitle="Chọn từng loại để xem chi tiết chất liệu vải và tiêu chuẩn đường may áp dụng."
            align="center"
            className="mb-10"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['kaki', 'jean', 'cargo', 'short'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedPantsType(key)}
                  className={`p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedPantsType === key
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {key === 'kaki' ? 'Quần Kaki & Chinos' : key === 'jean' ? 'Quần Jeans Denim' : key === 'cargo' ? 'Cargo Pants Túi Hộp' : 'Quần Short Thời Trang'}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {pantsTypes[selectedPantsType].name}
                  </h4>
                  <span className="text-xs text-blue-900 font-semibold">
                    Vải: {pantsTypes[selectedPantsType].fabric}
                  </span>
                </div>
                <Badge variant="primary" size="sm">
                  MOQ Từ 30 - 50 chiếc
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pantsTypes[selectedPantsType].desc}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                  Kỹ thuật may chuyên sâu:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {pantsTypes[selectedPantsType].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Bảng Size Chart Quần */}
      <section id="pants-size-chart" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="BẢNG THÔNG SỐ RẬP"
            title="THÔNG SỐ SIZE QUẦN FORM TIÊU CHUẨN (CM)"
            subtitle="Độ dài và vòng ống có thể tùy biến 100% theo bản vẽ rập thương hiệu bạn cung cấp."
            align="center"
            className="mb-8"
          />

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-bold uppercase">
                <tr>
                  <th className="p-3.5">Size / Số</th>
                  <th className="p-3.5">Vòng eo (cm)</th>
                  <th className="p-3.5">Vòng mông (cm)</th>
                  <th className="p-3.5">Dài quần (cm)</th>
                  <th className="p-3.5">Vòng đùi (cm)</th>
                  <th className="p-3.5">Rộng ống (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {sizeChartPants.map((row) => (
                  <tr key={row.size} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-blue-900">{row.size}</td>
                    <td className="p-3.5">{row.waist}</td>
                    <td className="p-3.5">{row.hip}</td>
                    <td className="p-3.5">{row.length}</td>
                    <td className="p-3.5">{row.thigh}</td>
                    <td className="p-3.5">{row.legOpening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. MOQ Section */}
      <MOQSection />

      {/* 6. Process Steps */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 7. Bottom CTA */}
      <CTASection
        title="BẠN CẦN LÊN MẪU QUẦN KAKI HOẶC JEAN?"
        subtitle="Hãy gửi hình ảnh phác thảo, Arden sẽ lập bảng bóc tách chi phí và may mẫu thử nghiệm trong 5 ngày."
        primaryButtonText="GỬI YÊU CẦU BÁO GIÁ MAY QUẦN"
        primaryButtonLink="/bao-gia"
      />
    </div>
  );
};
