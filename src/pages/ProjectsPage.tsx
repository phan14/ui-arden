import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTASection } from '../components/ui/CTASection';
import { featuredProjects, productionProcess } from '../data/siteData';
import { ProjectItem } from '../types';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Filter,
  CheckCircle2,
  Calendar,
  Package,
  Search,
  Tag,
  Eye,
  X,
  Clock,
  Scissors
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả sản phẩm' },
    { id: 'tshirt', label: 'Áo thun' },
    { id: 'shirt', label: 'Áo sơ mi' },
    { id: 'pants', label: 'Quần' },
    { id: 'jacket', label: 'Áo khoác & Hoodie' },
    { id: 'uniform', label: 'Đồng phục' },
  ];

  const filteredProjects = featuredProjects.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Dự án & Sản phẩm mẫu' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>HƠN 500.000+ SẢN PHẨM ĐÃ XUẤT XƯỞNG</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              DỰ ÁN & BỘ SƯU TẬP ĐÃ GIA CÔNG
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Tham khảo các dòng sản phẩm thời trang thực tế đã sản xuất tại xưởng may Arden cho các đối tác thương hiệu Local Brand và doanh nghiệp.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Filter & Gallery Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm kiếm mẫu, chất liệu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
            {/* Left: Projects Grid (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Hiển thị <strong>{filteredProjects.length}</strong> mẫu sản phẩm</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider">
                          {project.client || project.categoryLabel}
                        </span>
                        <button
                          onClick={() => setSelectedModalProject(project)}
                          className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-xs text-slate-900 hover:bg-white text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-900" />
                          <span>Xem nhanh</span>
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <div className="space-y-1.5 text-xs text-slate-600">
                          <div><span className="font-semibold text-slate-800">Chất liệu:</span> {project.material}</div>
                          <div><span className="font-semibold text-slate-800">Quy mô:</span> {project.minOrder}</div>
                          <div><span className="font-semibold text-slate-800">Dòng sản phẩm:</span> {project.categoryLabel}</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                      <Link
                        href={project.slug.startsWith('/') ? project.slug : `/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider pt-2"
                      >
                        <span>XEM CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => setSelectedModalProject(project)}
                        className="text-xs text-slate-500 hover:text-slate-900 pt-2"
                      >
                        Thông số kỹ thuật ➔
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sticky Factory Guarantee Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-900">
                    CAM KẾT CHẤT LƯỢNG ARDEN
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                    TIÊU CHUẨN XUẤT XƯỞNG
                  </h4>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dung sai kích thước thông số dưới ±1.0cm theo rập duyệt.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Vải xả nghỉ 24h chống vặn sườn áo và co rút sau giặt.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kiểm định FQC 100% trước khi đóng túi nilon/túi zip.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Bảo hành 1 đổi 1 hoặc may bù sản phẩm lỗi kỹ thuật.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/bao-gia"
                    className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-center text-xs font-bold uppercase tracking-wider block transition-colors shadow-xs"
                  >
                    Báo giá dự án tương tự
                  </Link>
                </div>
              </div>

              {/* Sample Room Banner */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <h5 className="text-xs font-bold uppercase text-slate-900">
                  PHÒNG MẪU VẢI THỰC TẾ
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Xưởng có sẵn hơn 300+ cây vải mẫu các loại và mẫu áo đã may hoàn chỉnh tại Showroom xưởng để bạn trải nghiệm tận tay.
                </p>
                <Link
                  href="/lien-he"
                  className="text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1"
                >
                  <span>Đặt lịch ghé xem mẫu vải</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Spec Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-5 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-4 right-4 p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 uppercase">
                {selectedModalProject.categoryLabel}
              </span>
              <h3 className="text-lg font-black uppercase text-slate-900 pt-1">
                {selectedModalProject.title}
              </h3>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
              <img
                src={selectedModalProject.image}
                alt={selectedModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Khách hàng / Brand:</span>
                <span className="font-bold text-slate-900">{selectedModalProject.client || 'Local Brand Partner'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Chất liệu vải:</span>
                <span className="font-bold text-slate-900">{selectedModalProject.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Quy mô sản xuất:</span>
                <span className="font-bold text-blue-900">{selectedModalProject.minOrder}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Thời gian hoàn thành:</span>
                <span className="font-bold text-slate-900">12 - 15 ngày làm việc</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href={selectedModalProject.slug.startsWith('/') ? selectedModalProject.slug : `/${selectedModalProject.slug}`}
                className="flex-1 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-center text-xs font-bold uppercase tracking-wider block transition-colors"
              >
                Xem Case Study đầy đủ
              </Link>
              <Link
                href="/bao-gia"
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center text-xs font-bold uppercase tracking-wider block transition-colors border border-slate-200"
              >
                Báo giá mẫu này
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Bottom CTA */}
      <CTASection
        title="BẠN MUỐN SẢN XUẤT MẪU THIẾT KẾ ĐỘC QUYỀN?"
        subtitle="Gửi mẫu Techpack hoặc hình ảnh sản phẩm, Arden sẽ tư vấn thông số và báo giá nhanh chóng."
      />
    </div>
  );
};
