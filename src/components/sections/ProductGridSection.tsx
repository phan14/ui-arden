/**
 * ============================================================================
 * ARDEN PRODUCT GRID SECTION (UX Builder Products Grid)
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: UX Section / Products Grid Element
 * - Flatsome Shortcode: [ux_products] or [block id="arden-product-grid"]
 * - Template Path: template-parts/sections/product-grid.php
 * - Hierarchy: Section -> Container -> Category Tabs -> Row (3-4 Columns) -> Product Cards
 * - Rank Math SEO: Product Catalog Schema / ItemList
 * ============================================================================
 */

import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Tabs } from '../ui/Tabs';
import { featuredProjects } from '../../data/siteData';
import { ProjectItem } from '../../types';
import { ArrowRight, Layers, Clock, Eye, Sparkles } from 'lucide-react';

interface ProductGridSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  products?: ProjectItem[];
  showTabs?: boolean;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  id = 'product-grid-section',
  badge = 'DANH MỤC SẢN XUẤT',
  title = 'CÁC DÒNG SẢN PHẨM MAY GIA CÔNG CHỦ LỰC',
  subtitle = 'Xem chi tiết các chủng loại trang phục thế mạnh được gia công trực tiếp tại xưởng may Arden.',
  products = featuredProjects,
  showTabs = true
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả sản phẩm' },
    { id: 'tshirt', label: 'Áo thun & Polo' },
    { id: 'shirt', label: 'Áo sơ mi thiết kế' },
    { id: 'pants', label: 'Quần Kaki & Cargo' },
    { id: 'jacket', label: 'Áo khoác & Hoodie' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id={id}
      aria-label="Danh mục sản phẩm may gia công"
      className="py-14 sm:py-18 md:py-20 bg-white border-b border-slate-200"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge={badge}
            title={title}
            subtitle={subtitle}
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            href="/bao-gia"
            variant="primary"
            size="md"
            iconRight={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            NHẬN BÁO GIÁ THEO MẪU
          </Button>
        </div>

        {/* Category Tabs */}
        {showTabs && (
          <div className="mt-8 border-b border-slate-200 pb-4 overflow-x-auto">
            <Tabs
              options={categories}
              activeId={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary" size="sm">
                      {product.categoryLabel}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                      {product.minOrder}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-slate-950 group-hover:text-blue-900 transition-colors">
                    {product.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                      <span className="truncate">Chất liệu: {product.material}</span>
                    </div>
                    {product.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                        <span>Thời gian may: {product.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center gap-2">
                  <Button
                    href="/du-an/bst-ao-thun-local-brand"
                    variant="secondary"
                    size="sm"
                    fullWidth
                  >
                    Xem Case Study
                  </Button>
                  <Button
                    href="/bao-gia"
                    variant="primary"
                    size="sm"
                    fullWidth
                  >
                    Báo Giá
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
