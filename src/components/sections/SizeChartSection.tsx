import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SizeSpecItem } from '../../types';
import { Ruler, Sparkles } from 'lucide-react';

export interface SizeChartSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  sizeData?: SizeSpecItem[];
  className?: string;
}

export const SizeChartSection: React.FC<SizeChartSectionProps> = ({
  badge = 'THÔNG SỐ RẬP VI TÍNH',
  title = 'BẢNG SIZE CHUẨN FORM OVERSIZE STREETWEAR',
  subtitle = 'Thông số form áo chuẩn xu hướng Streetwear Việt Nam. Xưởng may Arden hỗ trợ nhảy size và điều chỉnh thông số theo yêu cầu riêng của từng thương hiệu.',
  sizeData = [
    { size: 'M', length: 70, chest: 54, shoulder: 52, sleeve: 22, weight: '50 - 65 kg', height: '1m55 - 1m68' },
    { size: 'L', length: 73, chest: 57, shoulder: 54, sleeve: 23, weight: '65 - 75 kg', height: '1m68 - 1m76' },
    { size: 'XL', length: 76, chest: 60, shoulder: 56, sleeve: 24, weight: '75 - 85 kg', height: '1m75 - 1m85' },
    { size: '2XL', length: 78, chest: 63, shoulder: 58, sleeve: 25, weight: '85 - 100 kg', height: '1m80 - 1m95' },
  ],
  className = '',
}) => {
  return (
    <section
      id="size-chart-section"
      aria-labelledby="size-chart-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-10"
        />

        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-black tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Size Áo</th>
                  <th className="py-3.5 px-4 text-center">Dài áo (cm)</th>
                  <th className="py-3.5 px-4 text-center">Rộng ngực (cm)</th>
                  <th className="py-3.5 px-4 text-center">Rộng vai (cm)</th>
                  <th className="py-3.5 px-4 text-center">Dài tay (cm)</th>
                  <th className="py-3.5 px-4 text-center">Chiều cao phù hợp</th>
                  <th className="py-3.5 px-4 text-center">Cân nặng phù hợp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {sizeData.map((row, idx) => (
                  <tr
                    key={row.size}
                    className={`hover:bg-blue-50/50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-blue-900">{row.size}</td>
                    <td className="py-3.5 px-4 text-center">{row.length}</td>
                    <td className="py-3.5 px-4 text-center">{row.chest}</td>
                    <td className="py-3.5 px-4 text-center">{row.shoulder}</td>
                    <td className="py-3.5 px-4 text-center">{row.sleeve}</td>
                    <td className="py-3.5 px-4 text-center text-slate-600">{row.height}</td>
                    <td className="py-3.5 px-4 text-center text-slate-600 font-semibold">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-100/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Dung sai cho phép: ± 1.0 cm theo quy chuẩn dệt may xuất khẩu.</span>
            </div>
            <span className="font-semibold text-blue-950">Nhận may thông số đo riêng theo yêu cầu từ 30 áo/size.</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
