/**
 * ============================================================================
 * ARDEN FAQ PAGE (HỎI ĐÁP TOÀN DIỆN)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: page-faq.php / page-hoi-dap.php
 * - UX Builder Sections: Page Banner, Search Input, Categorized Accordions (UX Block), CTA
 * - Rank Math SEO: FAQPage Schema (JSON-LD)
 * ============================================================================
 */

import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { FAQSection } from '../components/sections/FAQSection';
import { TrustBarSection } from '../components/sections/TrustBarSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { Tabs } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { faqData, siteConfig } from '../data/siteData';
import { Search, Phone, MessageSquare, HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả câu hỏi' },
    { id: 'moq', label: 'Số lượng & Báo giá' },
    { id: 'sample', label: 'May mẫu & Rập' },
    { id: 'quality', label: 'Chất lượng & Bảo hành' },
    { id: 'payment', label: 'Hợp đồng & Thanh toán' },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchCategory =
      selectedCategory === 'all' ||
      faq.category?.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="GIẢI ĐÁP MỌI THẮC MẮC"
        title="CÂU HỎI THƯỜNG GẶP VỀ GIA CÔNG MAY MẶC"
        description="Tổng hợp tất cả thông tin bạn cần biết về chính sách MOQ, thủ tục may mẫu, bảo mật thiết kế, kiểm định vải và điều khoản hợp đồng tại xưởng may Arden."
        breadcrumbs={[{ label: 'Câu hỏi thường gặp' }]}
      />

      {/* 2. Trust Bar */}
      <TrustBarSection variant="light" />

      {/* 3. Search & Filter Bar */}
      <section
        id="faq-search"
        aria-label="Tìm kiếm câu hỏi"
        className="py-10 bg-white border-b border-slate-200"
      >
        <Container className="max-w-4xl">
          <div className="space-y-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nhập từ khóa cần hỏi (Ví dụ: Số lượng tối thiểu, thời gian may mẫu, rập vi tính...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900 focus:bg-white transition-all shadow-2xs"
              />
            </div>

            <div className="overflow-x-auto pb-1">
              <Tabs
                options={categories}
                activeId={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Filtered FAQ Accordion List */}
      <FAQSection
        badge="DANH SÁCH GIẢI ĐÁP"
        title={`CÓ ${filteredFaqs.length} CÂU HỎI PHÙ HỢP`}
        subtitle="Nhấp vào từng câu hỏi để xem chi tiết hướng dẫn từ xưởng may Arden."
        faqs={filteredFaqs}
      />

      {/* 5. Direct Question Ask Box */}
      <section
        id="ask-question"
        aria-label="Gửi câu hỏi trực tiếp"
        className="py-12 bg-slate-50 border-b border-slate-200"
      >
        <Container className="max-w-3xl text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black uppercase text-slate-900">
            BẠN KHÔNG TÌM THẤY CÂU TRẢ LỜI CHO TRƯỜNG HỢP CỦA MÌNH?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Đừng ngần ngại liên hệ trực tiếp với chuyên viên kỹ thuật xưởng may. Chúng tôi sẽ giải đáp chi tiết trong vòng 15 phút.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              variant="primary"
              size="md"
              icon={<Phone className="w-4 h-4" />}
            >
              Gọi Hotline: {siteConfig.phone}
            </Button>
            <Button
              href={siteConfig.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat Zalo Kỹ Thuật
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Bottom CTA */}
      <CTASection
        title="BẮT ĐẦU SẢN XUẤT CÙNG ARDEN NGAY HÔM NAY"
        subtitle="Gửi thông tin mẫu và số lượng mong muốn để nhận báo giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
