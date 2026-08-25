import React from 'react';
import { Container } from '../layout/Container';
import { Breadcrumb } from '../ui/Breadcrumb';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ProjectItem } from '../../types';
import {
  Calendar,
  Layers,
  Package,
  Scissors,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export interface SingleProjectSectionProps {
  project: ProjectItem;
  relatedProjects?: ProjectItem[];
  className?: string;
}

export const SingleProjectSection: React.FC<SingleProjectSectionProps> = ({
  project,
  relatedProjects = [],
  className = '',
}) => {
  return (
    <article
      className={`py-10 sm:py-16 bg-white border-b border-slate-200 ${className}`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <Container>
        <Breadcrumb
          items={[
            { label: 'Dự án & Bộ sưu tập', href: '/du-an' },
            { label: project.title },
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Showcase & Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm m-0">
              <img
                src={project.image}
                alt={project.title}
                itemProp="image"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute top-4 left-4">
                <Badge variant="primary" size="md">
                  {project.categoryLabel || project.category}
                </Badge>
              </figcaption>
            </figure>

            {/* Sub Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200"
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Description & Technical notes */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900">
                THÔNG TIN KỸ THUẬT & QUY TRÌNH SẢN XUẤT
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.description ||
                  `Dự án gia công dòng sản phẩm ${project.title} được thực hiện theo tiêu chuẩn ODM/OEM trọn gói tại xưởng may Arden. Toàn bộ khâu kiểm định vải (IQC), nhảy size rập vi tính, in ấn đồ họa và hoàn thiện đóng gói đều tuân thủ nghiêm ngặt quy trình kiểm soát chất lượng xuất xưởng.`}
              </p>

              {/* Highlights */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs font-bold uppercase text-slate-900">
                  Đặc điểm nổi bật của lô sản phẩm:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đường may mí cổ bọc xích chống bai dão độc quyền xưởng Arden.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Họa tiết in lụa mực Plastisol độ bám dính trên 100 lần giặt máy.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đóng túi Zip in logo thương hiệu kèm nhãn dệt satin chống xước cổ.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Details Sidebar (5 cols) */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xs">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-widest">
                  CASE STUDY THỰC TẾ
                </span>
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {project.title}
                </h1>
              </div>

              {/* Specs Table */}
              <div className="space-y-3 text-xs divide-y divide-slate-200">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Đối tác thương hiệu:</span>
                  <strong className="text-slate-900 uppercase">{project.client || 'Local Brand Confidential'}</strong>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Chất liệu vải:</span>
                  <strong className="text-slate-900">{project.material}</strong>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Quy mô đơn hàng:</span>
                  <strong className="text-blue-900 font-bold">{project.minOrder}</strong>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Thời gian hoàn thành:</span>
                  <strong className="text-slate-900">{project.time || '12 ngày làm việc'}</strong>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">Cam kết bảo mật (NDA):</span>
                  <strong className="text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Đã ký kết</span>
                  </strong>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <Button
                  href="/bao-gia"
                  variant="primary"
                  size="lg"
                  fullWidth
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  YÊU CẦU BÁO GIÁ DÒNG MẪU NÀY
                </Button>
                <Button
                  href="/du-an"
                  variant="outline"
                  size="md"
                  fullWidth
                >
                  XEM CÁC DỰ ÁN KHÁC
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
};
