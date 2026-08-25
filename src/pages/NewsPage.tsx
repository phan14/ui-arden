import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTASection } from '../components/ui/CTASection';
import { articlesData } from '../data/siteData';
import { ArticleItem } from '../types';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Tag,
  Clock,
  ChevronRight,
  Search,
  BookOpen,
  X,
  Share2,
  Bookmark
} from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  const categories = [
    { id: 'all', name: 'Tất cả bài viết', count: articlesData.length },
    { id: 'kinh nghiệm', name: 'Kinh nghiệm đặt may', count: 2 },
    { id: 'vải', name: 'Kiến thức chất liệu vải', count: 2 },
    { id: 'quy trình', name: 'Quy trình sản xuất xưởng', count: 1 },
  ];

  const filteredPosts = articlesData.filter((post) => {
    const matchCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory);
    const matchSearch = post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredPost = filteredPosts[0] || articlesData[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Tin tức & Kiến thức sản xuất' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>GÓC CHIA SẺ KINH NGHIỆM LOCAL BRAND</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              TIN TỨC & KIẾN THỨC MAY MẶC
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Cập nhật kiến thức chuyên sâu về chất liệu vải, kỹ thuật may mặc công nghiệp và kinh nghiệm tối ưu chi phí cho các nhà sáng lập thương hiệu thời trang.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main News Content Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
            {/* Left: Articles List (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Card */}
              {featuredPost && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-400 transition-all group">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setReadingArticle(featuredPost)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>ĐỌC BÀI VIẾT CHI TIẾT</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid for Other Articles */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  CÁC BÀI VIẾT KHÁC
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {otherPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-slate-900/90 text-white text-[9px] font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>

                        <div className="p-5 space-y-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => setReadingArticle(post)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider"
                        >
                          <span>Đọc tiếp</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar Guides (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Local Brand Handbook Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                  CẨM NANG MAY GIA CÔNG LOCAL BRAND
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tài liệu độc quyền tổng hợp 20+ kinh nghiệm kiểm soát chi phí vải, chọn rập vi tính và phòng tránh các lỗi in thêu phổ biến.
                </p>
                <Link
                  href="/bao-gia"
                  className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-center text-xs font-bold uppercase tracking-wider block transition-colors shadow-xs"
                >
                  Nhận tư vấn kỹ thuật miễn phí
                </Link>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <h5 className="text-xs font-bold uppercase text-slate-900">
                  CẦN TƯ VẤN NHANH?
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hotline / Zalo kỹ thuật luôn sẵn sàng hỗ trợ bạn tính định lượng vải và báo giá ngay trong ngày.
                </p>
                <div className="text-sm font-black text-blue-900">
                  Hotline: 0901 234 567
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 uppercase">
                {readingArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 pt-1">
                {readingArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{readingArticle.date}</span>
                <span>•</span>
                <span>{readingArticle.readTime}</span>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
              {readingArticle.content ? (
                <div className="whitespace-pre-line">
                  {readingArticle.content}
                </div>
              ) : (
                <p>{readingArticle.excerpt}</p>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider"
              >
                Đóng bài viết
              </button>
              <Link
                href="/bao-gia"
                className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider"
              >
                Nhận báo giá may theo bài viết
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Bottom CTA */}
      <CTASection
        title="GIA CÔNG THỜI TRANG ĐÚNG TIÊU CHUẨN CÙNG ARDEN"
        subtitle="Chúng tôi luôn sẵn sàng hỗ trợ giải đáp mọi thắc mắc kỹ thuật may mặc và định mức sản xuất cho bạn."
      />
    </div>
  );
};
