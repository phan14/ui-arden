/**
 * ============================================================================
 * ARDEN SEARCH RESULTS PAGE
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: search.php
 * - UX Builder Sections: Page Banner, Search Input, Search Results Grid (Services / Projects / Blog)
 * - Rank Math SEO: Search Results Indexing / Noindex search query
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { servicesData, featuredProjects, articlesData } from '../data/siteData';
import { Search, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('áo thun');
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Tất cả kết quả' },
    { id: 'services', label: 'Dịch vụ may' },
    { id: 'projects', label: 'Dự án & BST' },
    { id: 'articles', label: 'Kiến thức & Cẩm nang' },
  ];

  const matchedServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const matchedProjects = featuredProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.material.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const matchedArticles = articlesData.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalResults =
    (activeTab === 'all' || activeTab === 'services' ? matchedServices.length : 0) +
    (activeTab === 'all' || activeTab === 'projects' ? matchedProjects.length : 0) +
    (activeTab === 'all' || activeTab === 'articles' ? matchedArticles.length : 0);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="TÌM KIẾM THÔNG TIN"
        title="KẾT QUẢ TÌM KIẾM"
        description="Tìm kiếm dịch vụ may gia công, sản phẩm mẫu và bài viết hướng dẫn kỹ thuật trên hệ thống Arden."
        breadcrumbs={[{ label: 'Tìm kiếm' }]}
      />

      {/* 2. Search Input Section */}
      <section
        id="search-input-section"
        aria-label="Thanh tìm kiếm"
        className="py-10 bg-slate-50 border-b border-slate-200"
      >
        <Container className="max-w-4xl">
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm (Ví dụ: Áo thun, sơ mi, rập CAD, in lụa, cotton 250 gsm...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <Tabs
                options={tabs}
                activeId={activeTab}
                onChange={setActiveTab}
              />
              <span className="text-xs text-slate-500 font-medium">
                Tìm thấy <strong>{totalResults}</strong> kết quả cho "{searchTerm}"
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Search Results */}
      <section
        id="search-results"
        aria-label="Danh sách kết quả tìm kiếm"
        className="py-14 bg-white border-b border-slate-200"
      >
        <Container className="max-w-5xl space-y-10">
          {/* Services Results */}
          {(activeTab === 'all' || activeTab === 'services') && matchedServices.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-900" />
                <span>DỊCH VỤ MAY GIA CÔNG ({matchedServices.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchedServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-900 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold uppercase text-slate-900">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant="primary" size="sm">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <Button
                        href={service.slug}
                        variant="ghost"
                        size="sm"
                        className="text-blue-900 p-0 hover:bg-transparent"
                        iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Xem chi tiết dịch vụ
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {(activeTab === 'all' || activeTab === 'projects') && matchedProjects.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-900" />
                <span>DỰ ÁN & BỘ SƯU TẬP MẪU ({matchedProjects.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {matchedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-blue-900 transition-all group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-xs font-bold uppercase text-slate-900 truncate">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 truncate">
                        Vải: {project.material}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles Results */}
          {(activeTab === 'all' || activeTab === 'articles') && matchedArticles.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-900" />
                <span>CẨM NANG & KIẾN THỨC SẢN XUẤT ({matchedArticles.length})</span>
              </h2>

              <div className="space-y-3">
                {matchedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-900 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {article.excerpt}
                      </p>
                    </div>
                    <Button
                      href="/tin-tuc"
                      variant="secondary"
                      size="sm"
                      className="shrink-0"
                    >
                      Đọc bài viết
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalResults === 0 && (
            <div className="text-center py-12 space-y-3">
              <p className="text-sm text-slate-500">
                Không tìm thấy kết quả phù hợp với từ khóa "{searchTerm}".
              </p>
              <Button
                onClick={() => setSearchTerm('áo thun')}
                variant="secondary"
                size="sm"
              >
                Xem các kết quả cho "Áo thun"
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection
        title="BẠN CẦN TƯ VẤN TRỰC TIẾP TỪ KỸ THUẬT VIÊN?"
        subtitle="Hãy gửi hình ảnh mẫu hoặc yêu cầu của bạn, Arden sẽ phản hồi bóc tách giá trong 30 phút."
      />
    </div>
  );
};
