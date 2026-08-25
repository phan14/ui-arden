import React from 'react';
import { Container } from '../layout/Container';
import { Breadcrumb } from '../ui/Breadcrumb';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ArticleItem } from '../../types';
import {
  Calendar,
  Clock,
  User,
  Share2,
  ArrowLeft,
  BookOpen,
  Bookmark,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export interface SinglePostSectionProps {
  article: ArticleItem;
  relatedArticles?: ArticleItem[];
  onBack?: () => void;
  onSelectRelated?: (article: ArticleItem) => void;
  className?: string;
}

export const SinglePostSection: React.FC<SinglePostSectionProps> = ({
  article,
  relatedArticles = [],
  onBack,
  onSelectRelated,
  className = '',
}) => {
  return (
    <article
      className={`py-10 sm:py-16 bg-white border-b border-slate-200 ${className}`}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Container>
        {/* Top bar with back button */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <Breadcrumb
            items={[
              { label: 'Tin tức & Kiến thức', href: '/tin-tuc' },
              { label: article.title },
            ]}
          />

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại danh sách</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" size="md">
                {article.category}
              </Badge>

              <h1
                itemProp="headline"
                className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-950 leading-[1.25]"
              >
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-900" />
                  <time dateTime={article.date} itemProp="datePublished">
                    {article.date}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-900" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-900" />
                  <span itemProp="author">
                    {article.author?.name || 'Ban Kỹ Thuật Arden'}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <figure className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 m-0 shadow-xs">
              <img
                src={article.image}
                alt={article.title}
                itemProp="image"
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Lead Excerpt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 font-medium text-xs sm:text-sm leading-relaxed">
              <strong>Tóm tắt nội dung: </strong>
              {article.excerpt}
            </div>

            {/* Body Content */}
            <div
              itemProp="articleBody"
              className="prose prose-slate max-w-none text-xs sm:text-sm sm:leading-relaxed text-slate-700 space-y-4"
            >
              {article.content ? (
                <div className="space-y-4 whitespace-pre-line leading-relaxed">
                  {article.content}
                </div>
              ) : (
                <div className="space-y-4">
                  <p>
                    Trong ngành thời trang Local Brand hiện nay, việc thấu hiểu tường tận về các thông số dệt may, định lượng vải (GSM) và kỹ thuật hoàn thiện là yếu tố then chốt giúp các thương hiệu tạo ra những sản phẩm chất lượng cao, giữ chân khách hàng trung thành và tối ưu hóa biên lợi nhuận.
                  </p>
                  <h3 className="text-base sm:text-lg font-black uppercase text-slate-900 pt-2">
                    1. Các tiêu chuẩn quan trọng khi chọn vải sản xuất hàng loạt
                  </h3>
                  <p>
                    Vải Cotton 100% 2 chiều hay 4 chiều đều có những ưu điểm riêng biệt. Đối với các dòng áo Oversize phong cách Streetwear, chất liệu Cotton 2 chiều định lượng từ 220 GSM đến 250 GSM luôn được ưu tiên nhờ độ đứng form, không bị xệ vai và độ bền qua nhiều lần giặt.
                  </p>
                  <h3 className="text-base sm:text-lg font-black uppercase text-slate-900 pt-2">
                    2. Lời khuyên từ chuyên gia may mặc Arden
                  </h3>
                  <p>
                    Hãy luôn yêu cầu xưởng may làm mẫu đối chứng (Sample Approval) trước khi tiến hành cắt vải hàng loạt. Mẫu đối chứng sẽ là căn cứ pháp lý và kỹ thuật đảm bảo 100% sản phẩm đầu ra đồng nhất về thông số và màu sắc.
                  </p>
                </div>
              )}
            </div>

            {/* Share and Author Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 mt-8">
              <div className="flex items-center gap-3">
                <img
                  src={article.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                  alt={article.author?.name || 'Arden Expert'}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs font-bold uppercase text-slate-900">
                    {article.author?.name || 'Ban Biên Tập Kỹ Thuật Arden'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {article.author?.role || 'Chuyên viên tư vấn sản xuất dệt may B2B'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 uppercase">Chia sẻ:</span>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(window.location.href)}
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 text-xs font-bold"
                  title="Sao chép liên kết"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar: Related Posts & Quick Contact (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2.5">
                BÀI VIẾT LIÊN QUAN
              </h3>

              <div className="space-y-3">
                {relatedArticles.slice(0, 3).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated && onSelectRelated(rel)}
                    className="flex gap-3 items-start group cursor-pointer p-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0 bg-slate-200"
                    />
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-blue-900 uppercase">{rel.category}</div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <div className="text-[10px] text-slate-400">{rel.readTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA Box */}
            <div className="bg-blue-900 text-white rounded-2xl p-6 space-y-4 shadow-md">
              <h3 className="text-sm font-black uppercase">
                BẠN CẦN TƯ VẤN VẢI VÀ LÊN MẪU THỬ?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đội ngũ kỹ thuật Arden hỗ trợ gửi bảng test vải tận nơi hoặc tiếp đón tại xưởng.
              </p>
              <Button
                href="/bao-gia"
                variant="amber"
                size="md"
                fullWidth
                iconRight={<ChevronRight className="w-4 h-4" />}
              >
                GỬI YÊU CẦU BÁO GIÁ
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
};
