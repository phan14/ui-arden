import React, { useState } from 'react';
import { PageBannerHeader } from '../components/sections/PageBannerHeader';
import { ServicesGridSection } from '../components/sections/ServicesGridSection';
import { PrintTechniquesSection } from '../components/sections/PrintTechniquesSection';
import { ProcessStepsSection } from '../components/sections/ProcessStepsSection';
import { CTASection } from '../components/ui/CTASection';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { servicesData, productionProcess, siteConfig } from '../data/siteData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'odm' | 'oem'>('odm');

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Page Banner */}
      <PageBannerHeader
        badge="NĂNG LỰC GIA CÔNG THỜI TRANG TOÀN DIỆN"
        title="DỊCH VỤ SẢN XUẤT THỜI TRANG B2B"
        description="Đồng hành cùng Local Brand và Doanh nghiệp với quy trình may mặc chuẩn mực, vật liệu tuyển chọn và cam kết tiến độ bằng hợp đồng pháp lý."
        breadcrumbs={[{ label: 'Dịch vụ gia công' }]}
      />

      {/* 2. Services Grid Section */}
      <ServicesGridSection
        badge="DANH MỤC CHI TIẾT"
        title="5 DỊCH VỤ GIA CÔNG CHỦ LỰC TẠI ARDEN"
        subtitle="Mỗi dòng sản phẩm đều có chuyền may chuyên biệt và quy chuẩn kỹ thuật kiểm soát nghiêm ngặt."
        services={servicesData}
        viewAllLink=""
      />

      {/* 3. Interactive ODM vs OEM Model Comparison */}
      <section
        id="model-comparison"
        aria-label="So sánh mô hình gia công"
        className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200"
      >
        <Container className="max-w-4xl">
          <SectionHeading
            badge="MÔ HÌNH HỢP TÁC"
            title="LỰA CHỌN MÔ HÌNH GIA CÔNG PHÙ HỢP"
            subtitle="Tùy thuộc vào năng lực thiết kế và nguồn lực sẵn có của thương hiệu, bạn có thể lựa chọn hình thức OEM hoặc ODM trọn gói."
            align="center"
          />

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveModel('odm')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeModel === 'odm'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Gia công trọn gói ODM (A - Z)
            </button>
            <button
              type="button"
              onClick={() => setActiveModel('oem')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeModel === 'oem'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Gia công theo rập có sẵn OEM
            </button>
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {activeModel === 'odm' ? (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    MÔ HÌNH ODM: SẢN XUẤT TRỌN GÓI TỪ Ý TƯỞNG
                  </h3>
                  <Badge variant="emerald" size="sm">
                    Phù hợp Local Brand mới & Startup
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bạn chỉ cần cung cấp hình ảnh ý tưởng, phác thảo hoặc mẫu tương tự. Arden sẽ phụ trách 100% công đoạn còn lại: tìm nguồn vải chuẩn pantone, ra rập vi tính CAD, may mẫu, in/thêu, hoàn thiện nhãn mác và đóng gói hoàn chỉnh.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                  {[
                    'Tiết kiệm 80% thời gian quản lý chuỗi cung ứng',
                    'Không cần am hiểu sâu về kỹ thuật may mặc',
                    'Được xưởng cố vấn chất liệu tối ưu giá thành',
                    'Bảo mật thiết kế tuyệt đối bằng hợp đồng NDA'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    MÔ HÌNH OEM: GIA CÔNG THEO RẬP & TECHPACK CỦA BRAND
                  </h3>
                  <Badge variant="primary" size="sm">
                    Phù hợp Brand đã có đội ngũ R&D
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brand đã có sẵn bộ rập vi tính, bảng thông số kích thước và bản vẽ kỹ thuật chi tiết. Arden tập trung tối đa vào độ chính xác của đường may, kiểm soát chất lượng FQC và tiến độ xuất xưởng hàng loạt.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                  {[
                    'Chính xác 100% theo thông số rập của thương hiệu',
                    'Tối ưu chi phí sản xuất ở mức cao nhất',
                    'Năng lực đáp ứng các đơn hàng số lượng lớn',
                    'Bảo đảm tiến độ giao hàng theo lịch launching'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-900 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 4. Print & Embroidery Techniques */}
      <PrintTechniquesSection />

      {/* 5. 6-Step Production Process */}
      <ProcessStepsSection steps={productionProcess} />

      {/* 6. Bottom CTA */}
      <CTASection
        title="BẮT ĐẦU DỰ ÁN MAY GIA CÔNG CÙNG ARDEN"
        subtitle="Gửi thông tin mẫu và số lượng mong muốn, chúng tôi sẽ phản hồi bảng giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
