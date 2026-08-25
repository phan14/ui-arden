/**
 * ============================================================================
 * ARDEN FABRIC GUIDE PAGE (BẢNG TRA CỨU & PHÂN BIỆT VẢI MAY MẶC)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-bang-vai.php / page-fabric-guide.php
 * - UX Builder Sections: Page Banner, Search / Filter by Type, GSM Guide, Fabric Cards, CTA
 * - Rank Math SEO: Fabric Guide Schema (Tech / Resource Page)
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { Search, CheckCircle2, AlertCircle, Info, Sparkles, Layers } from 'lucide-react';

export const FabricGuidePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fabricList = [
    {
      id: 'cotton-2c-250',
      name: 'Cotton 100% 2 Chiều (250 GSM)',
      category: 'tshirt',
      categoryLabel: 'Áo Thun & Polo',
      gsm: '250 GSM',
      composition: '100% Sợi Cotton tự nhiên chải kỹ (Combed Cotton)',
      stretch: 'Co giãn 2 chiều (ngang)',
      shrinkage: '< 2.5% (đã qua xử lý cầm màu và chống co rút)',
      pros: ['Đứng form Boxy và Oversize cực đẹp', 'Không bị rũ, che khuyết điểm cơ thể', 'Thấm hút mồ hôi tự nhiên và êm dịu với da'],
      cons: ['Co giãn ít hơn dòng 4 chiều, cần may đúng form rộng'],
      application: 'Áo thun Streetwear Local Brand, Boxy Tee, Oversize Tee'
    },
    {
      id: 'cotton-4c-220',
      name: 'Cotton 100% 4 Chiều (220 GSM)',
      category: 'tshirt',
      categoryLabel: 'Áo Thun & Polo',
      gsm: '220 GSM',
      composition: '95% Cotton + 5% Spandex co giãn',
      stretch: 'Co giãn 4 chiều linh hoạt',
      shrinkage: '< 3.0%',
      pros: ['Mềm mại, vận động thoải mái tối đa', 'Bề mặt dệt mịn láng, in lụa nét', 'Mát mẻ thích hợp thời tiết mùa hè'],
      cons: ['Form rũ hơn cotton 2 chiều nếu may form quá rộng'],
      application: 'Áo thun Regular Fit, Baby Tee nữ, Áo thun thể thao năng động'
    },
    {
      id: 'french-terry-380',
      name: 'Nỉ Chân Cua Cotton (French Terry 380 GSM)',
      category: 'jacket',
      categoryLabel: 'Áo Khoác & Nỉ',
      gsm: '380 GSM',
      composition: '100% Cotton (mặt ngoài mịn, mặt trong dệt vòng chân cua)',
      stretch: 'Co giãn 2 chiều nhẹ',
      shrinkage: '< 3.0%',
      pros: ['Cấu trúc chân cua thoát nhiệt tốt, không bí bách', 'Độ dày dặn cao, form áo đứng và cứng cáp', 'Không bị xù lông như nỉ bông thông thường'],
      cons: ['Giá thành cao hơn nỉ pha PE'],
      application: 'Hoodie cao cấp, Sweater mùa thu đông, Quần Sweatpants'
    },
    {
      id: 'oxford-cotton',
      name: 'Vải Oxford Dệt Sợi Thô (180 GSM)',
      category: 'shirt',
      categoryLabel: 'Áo Sơ Mi',
      gsm: '180 GSM',
      composition: '100% Cotton dệt rổ (Basketweave)',
      stretch: 'Không co giãn',
      shrinkage: '< 2.0%',
      pros: ['Bề mặt vân xước phong trần, nam tính', 'Rất ít nhăn, dễ ủi phẳng', 'Độ bền chịu lực cực kỳ cao'],
      cons: ['Cảm giác sợi hơi thô nhẹ ở lần mặc đầu tiên'],
      application: 'Sơ mi Oxford công sở, Sơ mi Button-down Casual'
    },
    {
      id: 'linen-premium',
      name: 'Vải Linen Tự Nhiên (160 GSM)',
      category: 'shirt',
      categoryLabel: 'Áo Sơ Mi',
      gsm: '160 GSM',
      composition: '100% Sợi lanh tự nhiên cao cấp',
      stretch: 'Không co giãn',
      shrinkage: '< 3.5%',
      pros: ['Cực kỳ mát mẻ, hút ẩm và bay hơi nhanh', 'Vẻ đẹp mộc mạc sang trọng', 'Thân thiện tuyệt đối với môi trường'],
      cons: ['Dễ nhăn tự nhiên (đây cũng là nét đặc trưng của linen)'],
      application: 'Sơ mi Cuban Collar, Đầm Linen, Sơ mi du lịch nghỉ dưỡng'
    },
    {
      id: 'denim-12oz',
      name: 'Denim Bò Dệt 12oz (Raw & Washed)',
      category: 'pants',
      categoryLabel: 'Quần & Kaki',
      gsm: '410 GSM (12oz)',
      composition: '98% Cotton + 2% Spandex',
      stretch: 'Co giãn nhẹ 2%',
      shrinkage: 'Đã hoàn tất wash thành phẩm',
      pros: ['Chất vải đanh chắc, bền bỉ hàng chục năm', 'Hiệu ứng wash mài vintage sắc nét', 'Form ống đứng tôn dáng'],
      cons: ['Thời gian xử lý wash lâu hơn may vải thông thường'],
      application: 'Quần Jean ống suông, Quần Jean ống rộng Wide-leg, Áo khoác Denim'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả chất liệu' },
    { id: 'tshirt', label: 'Vải Áo Thun & Polo' },
    { id: 'shirt', label: 'Vải Áo Sơ Mi' },
    { id: 'jacket', label: 'Vải Áo Khoác & Nỉ' },
    { id: 'pants', label: 'Vải Quần Kaki & Jean' },
  ];

  const filteredFabrics = fabricList.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.application.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Banner */}
      <PageBannerHeader
        badge="CẨM NANG KỸ THUẬT VẢI"
        title="BẢNG PHÂN BIỆT CHẤT LIỆU VẢI & ĐỊNH LƯỢNG GSM"
        description="Tổng hợp bảng thông số chi tiết về thành phần sợi, định lượng GSM, độ co giãn và ứng dụng thực tế của các loại vải chuyên dùng cho Local Brand."
        breadcrumbs={[{ label: 'Bảng vải & GSM' }]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. GSM Overview Infographic Box */}
      <section id="gsm-guide-box" className="py-12 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-5xl">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-900 font-bold uppercase text-xs tracking-wider">
              <Info className="w-4 h-4" />
              <span>HƯỚNG DẪN ĐỌC CHỈ SỐ ĐỊNH LƯỢNG GSM</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-500 uppercase">180 - 200 GSM</div>
                <div className="text-sm font-bold text-slate-900">Mỏng Nhẹ Thoáng Mát</div>
                <p className="text-[11px] text-slate-500">Thích hợp may áo thun mặc lót hoặc áo thun thể thao.</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <div className="text-xs font-bold text-blue-700 uppercase">220 - 250 GSM</div>
                <div className="text-sm font-bold text-blue-950">Chuẩn Local Brand</div>
                <p className="text-[11px] text-blue-800">Dày dặn, đứng form Boxy và Oversize hoàn hảo.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <div className="text-xs font-bold text-amber-700 uppercase">280 - 320 GSM</div>
                <div className="text-sm font-bold text-amber-950">Heavyweight Cao Cấp</div>
                <p className="text-[11px] text-amber-800">Vải siêu dày, đứng form cứng cáp phong cách Hip-hop.</p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
                <div className="text-xs font-bold text-purple-700 uppercase">350 - 420 GSM</div>
                <div className="text-sm font-bold text-purple-950">Dành Cho Áo Khoác & Nỉ</div>
                <p className="text-[11px] text-purple-800">Nỉ chân cua, nỉ bông chuyên may Hoodie giữ ấm mùa đông.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Filter & Fabric Grid */}
      <section id="fabric-grid" className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="relative max-w-xl">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm theo tên vải, định lượng hoặc ứng dụng..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 text-xs rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900 focus:bg-white transition-all shadow-2xs"
                />
              </div>

              <div className="overflow-x-auto pb-1">
                <Tabs
                  options={categories}
                  activeId={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFabrics.map((fabric) => (
                <div
                  key={fabric.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4 hover:border-blue-900 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-black tracking-wider uppercase text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                          {fabric.categoryLabel}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2">
                          {fabric.name}
                        </h3>
                      </div>
                      <Badge variant="amber" size="sm">
                        {fabric.gsm}
                      </Badge>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div>
                        <strong className="text-slate-900">Thành phần:</strong> {fabric.composition}
                      </div>
                      <div>
                        <strong className="text-slate-900">Độ co giãn:</strong> {fabric.stretch}
                      </div>
                      <div>
                        <strong className="text-slate-900">Độ co rút sau giặt:</strong> {fabric.shrinkage}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-900 uppercase">Ưu điểm:</span>
                      <div className="space-y-1">
                        {fabric.pros.map((p, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Ứng dụng: <strong>{fabric.application}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection
        title="BẠN MUỐN NHẬN BỘ MẪU VẢI TẬN NƠI (SWATCH BOOK)?"
        subtitle="Arden gửi bảng mẫu vải thực tế kèm thẻ màu Pantone miễn phí cho các Local Brand và nhà sáng lập."
        primaryButtonText="ĐĂNG KÝ NHẬN MẪU VẢI MIỄN PHÍ"
        primaryButtonLink="/bao-gia"
      />
    </div>
  );
};
