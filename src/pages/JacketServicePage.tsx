/**
 * ============================================================================
 * ARDEN JACKET SERVICE PAGE (DỊCH VỤ MAY ÁO KHOÁC & HOODIE)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-may-ao-khoac.php / single-service.php
 * - UX Builder Sections: Page Banner, Specs, Fabric Breakdown, Size Chart, Process, CTA
 * - Rank Math SEO: Service Schema (Gia Công Áo Khoác & Hoodie Streetwear)
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
import { CheckCircle2, ShieldCheck, Flame, Layers } from 'lucide-react';

export const JacketServicePage: React.FC = () => {
  const [selectedJacketType, setSelectedJacketType] = useState<'hoodie' | 'varsity' | 'bomber' | 'windbreaker'>('hoodie');

  const jacketTypes = {
    hoodie: {
      name: 'Hoodie & Sweater Nỉ Chân Cua / Nỉ Bông (380 - 420 GSM)',
      fabric: 'Nỉ Cotton 100% 380 GSM / French Terry cao cấp',
      desc: 'Mũ 2 lớp dày dặn đứng form, may lé viền cổ cẩn thận, túi kangaroo may giấu chỉ chịu lực và bo tay dệt thun spandex chống dão.',
      features: ['Mũ áo 2 lớp to đứng form', 'Lỗ luồn dây xỏ khoen kim loại chống rách', 'Thêu nổi 3D hoặc in phồng xù sắc nét']
    },
    varsity: {
      name: 'Varsity Jacket (Phối Tay Da PU & Thân Dạ Ép)',
      fabric: 'Vải Dạ Ép Lông Cừu / Da PU Cao Cấp / Lót Quilted Chần Bông',
      desc: 'Áo khoác bóng chày biểu tượng Streetwear với bo dệt sọc độc quyền, nút bấm kim loại mạ tĩnh điện và logo thêu xù khăn bông Chenille.',
      features: ['Logo thêu khăn Chenille dày 5mm', 'Nút bấm mạ màu đồng bộ', 'Lót dù quả trám chần bông cách nhiệt']
    },
    bomber: {
      name: 'Bomber Jacket 2 Lớp (Kháng Nước & Lót Lưới)',
      fabric: 'Vải Dù Gió Micro Kháng Nước / Dù Nhăn Hàn Quốc',
      desc: 'Form dáng phồng nhẹ bomber cổ điển, túi tay có khóa kéo kim loại YKK, bo cổ dệt len dày ôm sát chống gió lạnh.',
      features: ['Vải kháng nước trượt nước tốt', 'Túi may mổ có nắp khóa nam châm/bấm', 'Lót trong có túi bí mật tiện lợi']
    },
    windbreaker: {
      name: 'Áo Khoác Gió Gấp Gọn (Windbreaker Ultralight)',
      fabric: 'Dù Gió 1 Lớp / 2 Lớp Siêu Nhẹ Kháng Bụi',
      desc: 'Dòng sản phẩm thể thao và đi phượt: siêu nhẹ, chống gió cản bụi, dây kéo kháng nước và có thể gấp gọn trong túi nhỏ.',
      features: ['Đường may ép sim chống thấm nước', 'Trọng lượng siêu nhẹ dưới 200g', 'In phản quang 3M ban đêm']
    }
  };

  const sizeChartJacket = [
    { size: 'S', length: 68, chest: 56, shoulder: 52, sleeve: 58, weight: '45 - 55 kg' },
    { size: 'M', length: 71, chest: 59, shoulder: 55, sleeve: 60, weight: '55 - 68 kg' },
    { size: 'L', length: 74, chest: 62, shoulder: 58, sleeve: 62, weight: '68 - 80 kg' },
    { size: 'XL', length: 77, chest: 65, shoulder: 61, sleeve: 64, weight: '80 - 95 kg' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Banner */}
      <PageBannerHeader
        badge="DỊCH VỤ GIA CÔNG ÁO KHOÁC CHUYÊN SÂU"
        title="MAY ÁO KHOÁC, HOODIE & VARSITY JACKET STREETWEAR"
        description="Chuyên sản xuất áo khoác nỉ bông 380 GSM, Varsity phối da, Bomber và áo gió 2 lớp với kỹ thuật thêu xù Chenille, khóa YKK và bo dệt độc quyền."
        breadcrumbs={[
          { label: 'Dịch vụ may', href: '/dich-vu' },
          { label: 'May Áo Khoác & Hoodie' }
        ]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Phân loại áo khoác */}
      <section id="jacket-categories" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="DANH MỤC SẢN PHẨM"
            title="CÁC DÒNG ÁO KHOÁC THẾ MẠNH SẢN XUẤT"
            subtitle="Từng chi tiết lót trong, dây kéo và bo dệt đều được kiểm tra kỹ thuật chịu lực cao."
            align="center"
            className="mb-10"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['hoodie', 'varsity', 'bomber', 'windbreaker'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedJacketType(key)}
                  className={`p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedJacketType === key
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {key === 'hoodie' ? 'Hoodie / Sweater' : key === 'varsity' ? 'Varsity Jacket' : key === 'bomber' ? 'Bomber Jacket' : 'Áo Gió Siêu Nhẹ'}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {jacketTypes[selectedJacketType].name}
                  </h4>
                  <span className="text-xs text-blue-900 font-semibold">
                    Chất liệu: {jacketTypes[selectedJacketType].fabric}
                  </span>
                </div>
                <Badge variant="primary" size="sm">
                  MOQ Từ 30 chiếc
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {jacketTypes[selectedJacketType].desc}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                  Kỹ thuật may chuyên sâu:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {jacketTypes[selectedJacketType].features.map((feat, idx) => (
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

      {/* 4. Size Chart Jacket */}
      <section id="jacket-size-chart" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="BẢNG THÔNG SỐ RẬP"
            title="THÔNG SỐ SIZE ÁO KHOÁC & HOODIE OVERSIZE (CM)"
            subtitle="Độ rộng thân và độ thụng tay áo được tính toán chuẩn form streetwear tôn dáng người mặc."
            align="center"
            className="mb-8"
          />

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-bold uppercase">
                <tr>
                  <th className="p-3.5">Size</th>
                  <th className="p-3.5">Dài áo (cm)</th>
                  <th className="p-3.5">Rộng ngực (cm)</th>
                  <th className="p-3.5">Rộng vai (cm)</th>
                  <th className="p-3.5">Dài tay (cm)</th>
                  <th className="p-3.5">Cân nặng phù hợp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {sizeChartJacket.map((row) => (
                  <tr key={row.size} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-blue-900">{row.size}</td>
                    <td className="p-3.5">{row.length}</td>
                    <td className="p-3.5">{row.chest}</td>
                    <td className="p-3.5">{row.shoulder}</td>
                    <td className="p-3.5">{row.sleeve}</td>
                    <td className="p-3.5">{row.weight}</td>
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
        title="BẠN MUỐN SẢN XUẤT BỘ SƯU TẬP ÁO KHOÁC MÙA ĐÔNG?"
        subtitle="Hãy liên hệ ngay với xưởng may Arden để nhận bảng bóc tách chi phí và mẫu vải tận nơi."
        primaryButtonText="GỬI YÊU CẦU BÁO GIÁ ÁO KHOÁC"
        primaryButtonLink="/bao-gia"
      />
    </div>
  );
};
