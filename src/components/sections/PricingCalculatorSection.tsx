import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { PriceEstimate } from '../../types';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingDown } from 'lucide-react';

export interface PricingCalculatorSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  priceEstimates: PriceEstimate[];
  className?: string;
}

export const PricingCalculatorSection: React.FC<PricingCalculatorSectionProps> = ({
  badge = 'BẢNG GIÁ THAM KHẢO & DỰ TOÁN',
  title = 'TÍNH DỰ TOÁN CHI PHÍ SẢN XUẤT XUẤT XƯỞNG',
  subtitle = 'Công cụ ước tính đơn giá tham khảo theo số lượng và chủng loại sản phẩm. Đơn giá thực tế sẽ chính xác theo từng bản rập vi tính.',
  priceEstimates,
  className = '',
}) => {
  const [selectedType, setSelectedType] = useState(priceEstimates[0]?.type || 'tshirt');
  const [quantity, setQuantity] = useState(50);
  const [hasPrint, setHasPrint] = useState(true);

  const currentItem = priceEstimates.find((p) => p.type === selectedType) || priceEstimates[0];

  // Simple pricing calculation logic
  const calculateUnitPrice = () => {
    let basePrice = 65000;
    if (selectedType === 'tshirt') basePrice = 65000;
    else if (selectedType === 'polo') basePrice = 85000;
    else if (selectedType === 'shirt') basePrice = 115000;
    else if (selectedType === 'pants') basePrice = 125000;
    else if (selectedType === 'hoodie') basePrice = 165000;

    // Quantity discount factor
    let factor = 1.0;
    if (quantity >= 500) factor = 0.75;
    else if (quantity >= 200) factor = 0.82;
    else if (quantity >= 100) factor = 0.90;
    else if (quantity >= 50) factor = 0.95;

    const printCost = hasPrint ? 12000 : 0;
    return Math.round((basePrice * factor + printCost) / 1000) * 1000;
  };

  const unitPrice = calculateUnitPrice();
  const totalPrice = unitPrice * quantity;

  return (
    <section
      id="pricing-calculator-section"
      aria-labelledby="pricing-heading"
      className={`py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Controls (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            {/* 1. Select Product Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Loại sản phẩm may:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {priceEstimates.map((item) => (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setSelectedType(item.type)}
                    className={`p-3 rounded-xl border text-left text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedType === item.type
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Quantity Range */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Số lượng đặt may:
                </label>
                <span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {quantity} sản phẩm
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="1000"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>30 áo (MOQ)</span>
                <span>100 áo</span>
                <span>300 áo</span>
                <span>500+ áo (Giá sỉ tốt)</span>
              </div>
            </div>

            {/* 3. Printing option */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                3. Yêu cầu In/Thêu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasPrint(true)}
                  className={`p-3 rounded-xl border text-center text-xs font-bold uppercase tracking-wider transition-all ${
                    hasPrint
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Có In / Thêu Logo
                </button>
                <button
                  type="button"
                  onClick={() => setHasPrint(false)}
                  className={`p-3 rounded-xl border text-center text-xs font-bold uppercase tracking-wider transition-all ${
                    !hasPrint
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Áo trơn (Không in thêu)
                </button>
              </div>
            </div>
          </div>

          {/* Right: Estimate Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>KẾT QUẢ DỰ TOÁN XUẤT XƯỞNG</span>
            </div>

            <div className="space-y-1 border-b border-slate-800 pb-5">
              <div className="text-xs text-slate-400 font-medium">Đơn giá ước tính / sản phẩm:</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                ~ {unitPrice.toLocaleString('vi-VN')} <span className="text-sm font-normal text-white">VNĐ/cái</span>
              </div>
              <div className="text-xs text-slate-400 pt-1">
                Tổng giá trị đơn hàng ({quantity} áo): <strong className="text-white">~ {totalPrice.toLocaleString('vi-VN')} VNĐ</strong>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Đã bao gồm vải, công may, rập và hoàn thiện</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Đóng gói túi OPP / túi Zip chuẩn xuất xưởng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thời gian may mẫu: 3 - 5 ngày</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/bao-gia"
                variant="amber"
                size="lg"
                fullWidth
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
