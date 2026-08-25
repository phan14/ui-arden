import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { sizeChartTshirt } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Scissors,
  ShieldCheck,
  Zap,
  Phone,
  FileCheck,
  Clock,
  Package,
  Award,
  ChevronRight,
  HelpCircle,
  Tag,
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

  const printComparisons = [
    {
      tech: 'In Lụa Plastisol',
      pros: 'Màu tươi, bám dính cực tốt trên Cotton, chi phí rẻ khi số lượng >50 áo',
      cons: 'Hạn chế hiệu ứng chuyển màu gradient phức tạp',
      moq: 'Từ 30 áo',
      durability: '5/5'
    },
    {
      tech: 'In Kỹ Thuật Số (DTG)',
      pros: 'In được mọi hình ảnh độ phân giải cao, sờ không bị cộm tay, thoáng khí',
      cons: 'Giá thành cao hơn in lụa, yêu cầu vải 100% Cotton',
      moq: 'Từ 10 áo',
      durability: '4.5/5'
    },
    {
      tech: 'Thêu Vi Tính 3D Nổi',
      pros: 'Đường chỉ nổi gồ sang trọng, độ bền vĩnh viễn theo tuổi thọ áo',
      cons: 'Không áp dụng được cho họa tiết quá nhỏ hoặc nhiều chi tiết mảnh',
      moq: 'Từ 30 áo',
      durability: '5/5'
    },
    {
      tech: 'In Decal Ép Nhiệt',
      pros: 'Hiệu ứng nhũ bạc, vàng kim, phản quang phát sáng ban đêm cực đẹp',
      cons: 'Cần tránh ủi trực tiếp nhiệt độ cao lên hình',
      moq: 'Từ 20 áo',
      durability: '4/5'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Dịch vụ', href: '/dich-vu' },
              { label: 'May áo thun theo yêu cầu' },
            ]}
          />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>DỊCH VỤ CHỦ LỰC LOCAL BRAND</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              XƯỞNG MAY ÁO THUN THEO YÊU CẦU
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Chuyên may áo thun Oversize, Boxy, Drop-shoulder, Raglan cho các Local Brand và doanh nghiệp với kỹ thuật may mí bọc xích, chống bai dão và gia cố vai đôi tỉ mỉ.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Configurator & Features (2 Columns) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Configurator & Features (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Features List */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                  ĐẶC ĐIỂM DỊCH VỤ MAY ÁO THUN TẠI ARDEN
                </h2>
                <div className="space-y-2.5">
                  {[
                    'Nhận may từ số lượng tối thiểu linh hoạt: từ 30 áo/mẫu (chia 2-3 size).',
                    'Đa dạng form dáng thời thượng: Oversize, Boxy fit, Drop-shoulder, Raglan, Polo cổ bẻ.',
                    'Kỹ thuật may cao cấp: Mí cổ bọc xích chống dão, trần đè vai 2 kim, gấu may kansai êm phẳng.',
                    'Đa dạng kỹ thuật in/thêu: In lụa Plastisol, in tràn thân (AOP), in DTG, in nhũ nứt, thêu 3D nổi.',
                    'Bảo hành đường may và chất lượng in ấn: 1 đổi 1 nếu phát hiện lỗi kỹ thuật.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fabric Selector */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    CHẤT LIỆU VẢI PHỔ BIẾN
                  </h3>
                  <span className="text-[11px] text-blue-900 font-semibold">Được khuyên dùng</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fabrics.map((f) => {
                    const isSelected = selectedFabric === f.name;
                    return (
                      <button
                        key={f.name}
                        onClick={() => setSelectedFabric(f.name)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-blue-900 bg-blue-50/70 shadow-xs'
                            : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-900">{f.name}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                            {f.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                          {f.desc}
                        </p>
                        <div className="text-[10px] text-blue-900 font-semibold mt-2">
                          Định lượng gợi ý: {f.recommendedGsm}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* GSM Pills */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  ĐỊNH LƯỢNG VẢI (GSM)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {gsmOptions.map((gsm) => {
                    const isSelected = selectedGsm === gsm.value;
                    return (
                      <button
                        key={gsm.value}
                        onClick={() => setSelectedGsm(gsm.value)}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                          isSelected
                            ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {gsm.value}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/bao-gia"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-xs"
                >
                  <span>NHẬN BÁO GIÁ MAY ÁO THUN</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/du-an/bst-ao-thun-local-brand"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <span>Xem Case Study Áo Thun</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Product Showcase Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
                    alt="Áo thun Oversize hoàn thiện"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-900">Mẫu áo thun đang chọn:</span>
                    <span className="text-xs font-bold text-blue-900">{selectedFabric}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Định lượng cấu hình:</span>
                    <span className="font-semibold">{selectedGsm}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Mức giá xuất xưởng dự kiến:</span>
                    <span className="font-bold text-emerald-600">65.000đ - 95.000đ / áo</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-800" />
                    <span>Cam kết chuẩn chất lượng:</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Vải được xử lý chống co rút và xả co giãn 24h. Độ bền màu giặt máy trên 50 lần giặt tiêu chuẩn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Size Chart Section */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="BẢNG THÔNG SỐ SIZE"
            title="BẢNG SIZE ÁO THUN OVERSIZE CHUẨN LOCAL BRAND"
            subtitle="Thông số kích thước được chuẩn hóa theo thể trạng người Việt Nam và phong cách Streetwear đương đại (Đơn vị: cm)."
          />

          <div className="mt-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4 uppercase">Size</th>
                    <th className="p-4 uppercase">Dài áo (Length)</th>
                    <th className="p-4 uppercase">Rộng ngực (Chest)</th>
                    <th className="p-4 uppercase">Rộng vai (Shoulder)</th>
                    <th className="p-4 uppercase">Dài tay (Sleeve)</th>
                    <th className="p-4 uppercase">Cân nặng phù hợp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {sizeChartTshirt.map((row) => (
                    <tr key={row.size} className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-4 font-black text-blue-900">{row.size}</td>
                      <td className="p-4">{row.length} cm</td>
                      <td className="p-4">{row.chest} cm</td>
                      <td className="p-4">{row.shoulder} cm</td>
                      <td className="p-4">{row.sleeve} cm</td>
                      <td className="p-4 font-semibold text-slate-900">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>* Dung sai thông số cho phép: ±1.0cm - 1.5cm. Xưởng có thể tùy chỉnh bảng size riêng theo yêu cầu của từng thương hiệu.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Printing Comparison Table */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="CÔNG NGHỆ IN ÁO THUN"
            title="SO SÁNH CÁC KỸ THUẬT IN ÁO THUN"
            subtitle="Giúp bạn lựa chọn phương pháp in phù hợp nhất với bản vẽ thiết kế và ngân sách sản xuất."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {printComparisons.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3 flex flex-col justify-between hover:border-blue-400 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase text-slate-900">{item.tech}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
                      MOQ {item.moq}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="text-emerald-700"><span className="font-bold">Ưu điểm:</span> {item.pros}</div>
                    <div className="text-slate-500 pt-1"><span className="font-bold text-slate-700">Lưu ý:</span> {item.cons}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs flex items-center justify-between text-slate-600">
                  <span>Độ bền giặt:</span>
                  <span className="font-bold text-amber-600">{item.durability}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection
        title="NHẬN BÁO GIÁ MAY ÁO THUN THEO YÊU CẦU"
        subtitle="Gửi mẫu thiết kế và số lượng mong muốn, chuyên viên Arden sẽ phản hồi bảng giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
