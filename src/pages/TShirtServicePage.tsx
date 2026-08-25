import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { SizeChartSection } from '../components/sections/SizeChartSection';
import { PrintTechniquesSection } from '../components/sections/PrintTechniquesSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { sizeChartTshirt, productionProcess, siteConfig } from '../data/siteData';
import {
  CheckCircle2,
  Scissors,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

export const TShirtServicePage: React.FC = () => {
  const [selectedGsm, setSelectedGsm] = useState('250 GSM');
  const [selectedFabric, setSelectedFabric] = useState('Cotton 100% 2 chiều');

  const fabrics = [
    {
      name: 'Cotton 100% 2 chiều',
      desc: 'Chất vải kinh điển của Local Brand, co giãn 2 chiều, dày dặn, đứng form và thấm hút mồ hôi cực tốt.',
      badge: 'Bán chạy nhất',
      recommendedGsm: '220 - 250 GSM',
    },
    {
      name: 'Cotton 100% 4 chiều',
      desc: 'Mềm mịn, thoáng khí, co giãn linh hoạt 4 chiều, thích hợp form regular và phong cách năng động.',
      badge: 'Cao cấp',
      recommendedGsm: '200 - 230 GSM',
    },
    {
      name: 'Cotton CVC 65/35',
      desc: 'Kết hợp 65% Cotton và 35% Polyester, bền màu, ít nhăn xù, giá thành tối ưu cho đơn hàng số lượng lớn.',
      badge: 'Tiết kiệm',
      recommendedGsm: '190 - 220 GSM',
    },
    {
      name: 'Vải Cá Sấu Cotton / Poly',
      desc: 'Chuyên dụng may áo thun Polo có cổ, dệt tổ ong thoáng khí, cổ bo dệt kỹ thuật cao.',
      badge: 'Áo Polo',
      recommendedGsm: '220 - 240 GSM',
    },
    {
      name: 'Vải Interlock / Chân cua',
      desc: 'Vải dày, 2 mặt trơn láng, định lượng cao dành riêng cho áo thun form Boxy Streetwear.',
      badge: 'Streetwear',
      recommendedGsm: '250 - 300 GSM',
    },
  ];

  const gsmOptions = [
    { value: '180 GSM', label: '180 GSM (Mỏng mát, basic)' },
    { value: '200 GSM', label: '200 GSM (Vừa vặn, hè thu)' },
    { value: '220 GSM', label: '220 GSM (Dày vừa, đứng form)' },
    { value: '250 GSM', label: '250 GSM (Dày dặn, chuẩn Local Brand)' },
    { value: '280 GSM', label: '280 GSM (Heavyweight thời thượng)' },
    { value: '300 GSM', label: '300 GSM (Ultra Heavy Boxy)' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="DỊCH VỤ GIA CÔNG CHỦ LỰC"
        title="MAY ÁO THUN LOCAL BRAND CHUYÊN NGHIỆP"
        description="Chuyên may áo thun Oversize, Boxy fit, Drop-shoulder, Raglan cho các Local Brand. Nhận may từ 30 áo/mẫu, hỗ trợ ra rập vi tính và in thêu theo yêu cầu."
        breadcrumbs={[
          { label: 'Dịch vụ gia công', href: '/dich-vu' },
          { label: 'May áo thun theo yêu cầu' },
        ]}
      />

      {/* 2. Fabric Options Section */}
      <section
        id="fabric-selector"
        aria-label="Chọn chất liệu vải may áo thun"
        className="py-14 sm:py-18 bg-white border-b border-slate-200"
      >
        <Container>
          <SectionHeading
            badge="BỘ SƯU TẬP CHẤT LIỆU"
            title="CÁC DÒNG VẢI COTTON MAY ÁO THUN CAO CẤP"
            subtitle="Toàn bộ vải dệt kim tại Arden đều được kiểm định độ co giãn, độ bền màu cấp 4 và xả nghỉ 24h trước khi cắt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {fabrics.map((f, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedFabric(f.name)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  selectedFabric === f.name
                    ? 'bg-blue-50/50 border-blue-900 shadow-sm ring-1 ring-blue-900/20'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Badge variant={selectedFabric === f.name ? 'primary' : 'secondary'} size="sm">
                    {f.badge}
                  </Badge>
                  <span className="text-[11px] font-bold text-blue-900">
                    Định lượng: {f.recommendedGsm}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase text-slate-900">
                  {f.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* GSM Guide Box */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 max-w-4xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              CHỌN ĐỊNH LƯỢNG VẢI (GSM) PHÙ HỢP VỚI BỘ SƯU TẬP CỦA BẠN:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gsmOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedGsm(opt.value)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    selectedGsm === opt.value
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Standard Size Specs Table */}
      <SizeChartSection sizeData={sizeChartTshirt} />

      {/* 4. Print & Embroidery Techniques */}
      <PrintTechniquesSection />

      {/* 5. Production Process */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 6. Bottom CTA */}
      <CTASection
        title="BẮT ĐẦU SẢN XUẤT ÁO THUN CÙNG XƯỞNG ARDEN"
        subtitle="Gửi file thiết kế hoặc thông số mong muốn để nhận báo giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
