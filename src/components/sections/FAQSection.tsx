import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AccordionItem } from '../ui/Accordion';
import { FAQItem } from '../../types';
import { Search, HelpCircle, Sparkles } from 'lucide-react';

export interface FAQSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  enableSearch?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  badge = 'HỎI ĐÁP & TƯ VẤN',
  title = 'CÂU HỎI THƯỜNG GẶP KHI ĐẶT MAY TẠI ARDEN',
  subtitle = 'Giải đáp toàn diện về số lượng tối thiểu MOQ, quy trình may mẫu, chính sách bảo mật thiết kế NDA và thời gian giao hàng.',
  faqs,
  enableSearch = false,
  defaultOpenIndex = 0,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = enableSearch
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-10 sm:mb-12"
        />

        {enableSearch && (
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm câu hỏi của bạn (MOQ, vải, thời gian...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900 shadow-xs"
              />
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((item, idx) => (
            <div
              key={idx}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionItem
                id={`faq-${idx}`}
                title={item.question}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                icon={<HelpCircle className="w-4 h-4 text-blue-900 shrink-0" />}
              >
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    {item.answer}
                  </div>
                </div>
              </AccordionItem>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
