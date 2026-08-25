import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArticleItem } from '../../types';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

export interface BlogGridSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  articles: ArticleItem[];
  viewAllLink?: string;
  viewAllText?: string;
  onSelectArticle?: (article: ArticleItem) => void;
  limit?: number;
  className?: string;
}

export const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  badge = 'KIẾN THỨC & TIN TỨC NGÀNH MAY',
  title = 'GÓC KINH NGHIỆM CHO NHÀ SÁNG LẬP LOCAL BRAND',
  subtitle = 'Chia sẻ kiến thức chuyên sâu về phân biệt chất liệu vải, tối ưu định lượng GSM và bí quyết xây dựng chuỗi cung ứng may mặc bền vững.',
  articles,
  viewAllLink = '/tin-tuc',
  viewAllText = 'XEM TẤT CẢ BÀI VIẾT',
  onSelectArticle,
  limit,
  className = '',
}) => {
  const displayArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section
      id="blog-section"
      aria-labelledby="blog-heading"
      className={`py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200 ${className}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" size="sm">{article.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                {onSelectArticle ? (
                  <button
                    type="button"
                    onClick={() => onSelectArticle(article)}
                    className="w-full py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-blue-900 hover:text-white hover:border-blue-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>ĐỌC TOÀN VĂN</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Button
                    href={`/tin-tuc/${article.slug || article.id}`}
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconRight={<ChevronRight className="w-3.5 h-3.5" />}
                  >
                    ĐỌC BÀI VIẾT
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
