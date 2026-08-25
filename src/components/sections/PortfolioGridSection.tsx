import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Tabs, TabOption } from '../ui/Tabs';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { ProjectItem } from '../../types';
import { ArrowRight, Eye, Package, Scissors, Sparkles, X, Check } from 'lucide-react';

export interface PortfolioGridSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  projects: ProjectItem[];
  categories?: TabOption[];
  viewAllLink?: string;
  viewAllText?: string;
  showCategoryTabs?: boolean;
  limit?: number;
  className?: string;
}

export const PortfolioGridSection: React.FC<PortfolioGridSectionProps> = ({
  badge = 'DỰ ÁN ĐÃ THỰC HIỆN',
  title = 'SẢN PHẨM MẪU & BỘ SƯU TẬP TIÊU BIỂU',
  subtitle = 'Chiêm ngưỡng những sản phẩm may mặc thực tế được gia công trực tiếp tại xưởng may Arden cho các đối tác Local Brand hàng đầu.',
  projects,
  categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'tshirt', label: 'Áo thun' },
    { id: 'shirt', label: 'Áo sơ mi' },
    { id: 'pants', label: 'Quần' },
    { id: 'jacket', label: 'Áo khoác' },
  ],
  viewAllLink = '/du-an',
  viewAllText = 'XEM TẤT CẢ DỰ ÁN',
  showCategoryTabs = true,
  limit,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section
      id="portfolio-section"
      aria-labelledby="portfolio-heading"
      className={`py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200 ${className}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            badge={badge}
            title={title}
            subtitle={subtitle}
            align="left"
          />

          {viewAllLink && (
            <div className="shrink-0">
              <Button
                href={viewAllLink}
                variant="white"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {viewAllText}
              </Button>
            </div>
          )}
        </div>

        {/* Categories Tab Filter */}
        {showCategoryTabs && categories.length > 0 && (
          <div className="mb-8 overflow-x-auto pb-1">
            <Tabs
              options={categories}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" size="sm">
                      {project.categoryLabel || project.category}
                    </Badge>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-200"
                    aria-label={`Xem nhanh mẫu ${project.title}`}
                  >
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem chi tiết</span>
                    </span>
                  </button>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2.5">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900 line-clamp-1 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">Vải: <strong>{project.material}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>MOQ: <strong>{project.minOrder}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="outline"
                  size="sm"
                  fullWidth
                >
                  XEM THÔNG SỐ & MẪU
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Quick View */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            maxWidth="2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" size="sm">
                    {selectedProject.categoryLabel || selectedProject.category}
                  </Badge>
                  <h4 className="text-base font-black uppercase text-slate-950 mt-2">
                    {selectedProject.title}
                  </h4>
                  {selectedProject.client && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      Đối tác: <strong>{selectedProject.client}</strong>
                    </p>
                  )}
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                    <span className="text-slate-500">Chất liệu:</span>
                    <strong className="text-slate-900">{selectedProject.material}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                    <span className="text-slate-500">Số lượng tối thiểu (MOQ):</span>
                    <strong className="text-slate-900">{selectedProject.minOrder}</strong>
                  </div>
                  {selectedProject.time && (
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-500">Thời gian sản xuất:</span>
                      <strong className="text-slate-900">{selectedProject.time}</strong>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    href="/bao-gia"
                    variant="primary"
                    size="md"
                    fullWidth
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    BÁO GIÁ MẪU NÀY
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </Container>
    </section>
  );
};
