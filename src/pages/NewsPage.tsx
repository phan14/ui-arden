import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { SinglePostSection } from '../components/sections/SinglePostSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { Tabs } from '../components/ui/Tabs';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { articlesData, siteConfig } from '../data/siteData';
import { ArticleItem } from '../types';
import {
  Calendar,
  Clock,
  Search,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Share2
} from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả bài viết' },
    { id: 'kinh nghiệm', label: 'Kinh nghiệm đặt may' },
    { id: 'vải', label: 'Kiến thức chất liệu vải' },
    { id: 'quy trình', label: 'Quy trình sản xuất xưởng' },
  ];

  const filteredPosts = articlesData.filter((post) => {
    const matchCategory =
      selectedCategory === 'all' ||
      post.category.toLowerCase().includes(selectedCategory);
    const matchSearch =
      post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredPost = filteredPosts[0] || articlesData[0];
  const otherPosts = filteredPosts.slice(1);

  // If reading an individual article (Single Post View - WordPress single.php template)
  if (activeArticle) {
    const related = articlesData.filter((a) => a.id !== activeArticle.id);
    return (
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        <SinglePostSection
          article={activeArticle}
          relatedArticles={related}
          onBack={() => setActiveArticle(null)}
          onSelectRelated={(art) => setActiveArticle(art)}
        />
        <CTASection
          title="BẠN CẦN TƯ VẤN VỀ CHẤT LIỆU VÀ KỸ THUẬT MAY?"
          subtitle="Hãy gửi yêu cầu của bạn ngay hôm nay. Đội ngũ kỹ thuật Arden sẽ liên hệ tư vấn bóc tách chi phí và gửi mẫu vải trong 30 phút."
        />
      </div>
    );
  }

  // Archive / Blog Index View (WordPress archive.php / home.php)
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="GÓC CHIA SẺ KINH NGHIỆM LOCAL BRAND"
        title="TIN TỨC & KIẾN THỨC MAY MẶC"
        description="Cập nhật kiến thức chuyên sâu về chất liệu vải, kỹ thuật may mặc công nghiệp và kinh nghiệm tối ưu chi phí cho các nhà sáng lập thương hiệu thời trang."
        breadcrumbs={[{ label: 'Tin tức & Kiến thức sản xuất' }]}
      />

      {/* 2. Main Blog Archive Section */}
      <section
        id="blog-archive"
        aria-label="Danh sách bài viết tin tức"
        className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200"
      >
        <Container>
          {/* Controls: Search & Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div className="overflow-x-auto pb-1">
              <Tabs
                options={categories}
                activeId={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
            {/* Left: Article Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Card */}
              {featuredPost && (
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 transition-all group">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary" size="md">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-900" />
                        <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-900" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-900 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2">
                      <Button
                        onClick={() => setActiveArticle(featuredPost)}
                        variant="primary"
                        size="md"
                        iconRight={<ArrowRight className="w-4 h-4" />}
                      >
                        ĐỌC BÀI VIẾT CHI TIẾT
                      </Button>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of Other Articles */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                  CÁC BÀI VIẾT KHÁC
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" size="sm">
                              {post.category}
                            </Badge>
                          </div>
                        </div>

                        <div className="p-5 space-y-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <Calendar className="w-3 h-3" />
                            <time dateTime={post.date}>{post.date}</time>
                          </div>

                          <h4 className="text-sm font-bold text-slate-950 uppercase tracking-tight group-hover:text-blue-900 transition-colors line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          type="button"
                          onClick={() => setActiveArticle(post)}
                          className="w-full py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-blue-900 hover:text-white hover:border-blue-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                        >
                          <span>ĐỌC BÀI VIẾT</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar Guides (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Handbook Banner */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-tight text-slate-900">
                  CẨM NANG MAY GIA CÔNG LOCAL BRAND
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tài liệu độc quyền tổng hợp 20+ kinh nghiệm kiểm soát chi phí vải, chọn rập vi tính và phòng tránh các lỗi in thêu phổ biến.
                </p>
                <Button
                  href="/bao-gia"
                  variant="primary"
                  size="md"
                  fullWidth
                  iconRight={<ChevronRight className="w-4 h-4" />}
                >
                  Nhận tư vấn kỹ thuật miễn phí
                </Button>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 shadow-md">
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-400">
                  CẦN TƯ VẤN TRỰC TIẾP?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Hotline / Zalo kỹ thuật luôn sẵn sàng hỗ trợ bạn tính định lượng vải và báo giá ngay trong ngày.
                </p>
                <div className="text-base font-black text-amber-400 pt-1">
                  {siteConfig.phone}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection
        title="GIA CÔNG THỜI TRANG ĐÚNG TIÊU CHUẨN CÙNG ARDEN"
        subtitle="Chúng tôi luôn sẵn sàng hỗ trợ giải đáp mọi thắc mắc kỹ thuật may mặc và định mức sản xuất cho bạn."
      />
    </div>
  );
};
