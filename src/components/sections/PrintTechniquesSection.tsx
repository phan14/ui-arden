import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { PrintTechniqueItem } from '../../types';
import { Check, Layers, Sparkles } from 'lucide-react';

export interface PrintTechniquesSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  techniques?: PrintTechniqueItem[];
  className?: string;
}

export const PrintTechniquesSection: React.FC<PrintTechniquesSectionProps> = ({
  badge = 'CÔNG NGHỆ IN THÊU HIỆN ĐẠI',
  title = 'KỸ THUẬT IN VÀ THÊU VI TÍNH CAO CẤP',
  subtitle = 'Trang bị đầy đủ công nghệ in lụa, in kỹ thuật số DTG, thêu 3D và ép chuyển nhiệt đáp ứng mọi hiệu ứng đồ họa phức tạp nhất.',
  techniques = [
    {
      id: 'in-lua-plastisol',
      name: 'In Lụa Plastisol Cao Cấp',
      badge: 'Phổ biến nhất',
      desc: 'Mực in Plastisol nhập khẩu dẻo mịn, bề mặt đanh chắc, màu sắc tươi sáng và không phai màu khi giặt máy.',
      pros: ['Độ bền giặt cực cao (>100 lần giặt)', 'Hiệu ứng in nổi, in cao bản sắc nét', 'Chi phí tối ưu cho đơn hàng số lượng lớn'],
      suitability: 'Áo thun Streetwear, Hoodie, Polo',
      minQuantity: 'Từ 30 áo',
      durability: '5/5 Sao'
    },
    {
      id: 'in-dtg',
      name: 'In Kỹ Thuật Số Trực Tiếp (DTG)',
      badge: 'Độ chi tiết cao',
      desc: 'In phun trực tiếp mực nước vào từng sợi vải Cotton, in được các hình ảnh chuyển sắc (gradient) đa màu không giới hạn.',
      pros: ['Bề mặt in mềm mại thoáng khí', 'In ảnh chụp, tranh vẽ chi tiết vi mô', 'Không cần làm khung lụa, test mẫu cực nhanh'],
      suitability: 'Áo thun Graphic, hình chụp chi tiết cao',
      minQuantity: 'Từ 10 áo',
      durability: '4.5/5 Sao'
    },
    {
      id: 'theu-vi-tinh-3d',
      name: 'Thêu Vi Tính 3D / Thêu Xù',
      badge: 'Sang trọng',
      desc: 'Máy thêu Tajima Nhật Bản 12 đầu kim, đường chỉ thêu đanh chắc, thêu nổi 3D hoặc thêu xù tạo hiệu ứng cổ điển Varsity.',
      pros: ['Đẳng cấp, sang trọng vượt trội', 'Độ bền vĩnh viễn theo tuổi thọ áo', 'Chỉ thêu bóng sáng cao cấp không phai'],
      suitability: 'Logo ngực áo Polo, sơ mi, Varsity Jacket',
      minQuantity: 'Từ 30 áo',
      durability: '5/5 Sao'
    },
    {
      id: 'in-phan-quang',
      name: 'In Phản Quang & In Decal PU',
      badge: 'Hiệu ứng đặc biệt',
      desc: 'Phát sáng rực rỡ khi có ánh đèn flash hoặc ánh sáng ban đêm chiếu vào, tạo điểm nhấn cá tính mạnh mẽ cho sản phẩm.',
      pros: ['Bắt mắt trong bóng tối, hiệu ứng viral', 'Độ bám dính cao bằng keo nhiệt chuyên dụng', 'Cắt laser biên dạng phức tạp'],
      suitability: 'Áo thun Local Brand, áo khoác dù phản quang',
      minQuantity: 'Từ 30 áo',
      durability: '4/5 Sao'
    }
  ],
  className = '',
}) => {
  return (
    <section
      id="print-techniques-section"
      aria-labelledby="print-techniques-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs hover:border-blue-900 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    {tech.name}
                  </h3>
                </div>
                <Badge variant="secondary" size="sm">{tech.badge}</Badge>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {tech.desc}
              </p>

              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5 text-xs">
                <div className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-900">Ưu điểm nổi bật:</div>
                <ul className="space-y-1 text-slate-700">
                  {tech.pros.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>Phù hợp: <strong>{tech.suitability}</strong></span>
                <span>Độ bền: <strong className="text-amber-600">{tech.durability}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
