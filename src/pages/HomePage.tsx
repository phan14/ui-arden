import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import {
  heroMetrics,
  servicesData,
  featuredProjects,
  whyChooseArden,
  productionProcess,
  articlesData,
  faqData,
  testimonialsData,
  priceEstimates,
  siteConfig
} from '../data/siteData';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Award,
  Layers,
  Scissors,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Package,
  Factory,
  ChevronRight,
  TrendingUp,
  Tag
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredProjects = activeProjectTab === 'all'
    ? featuredProjects.slice(0, 4)
    : featuredProjects.filter((p) => p.category === activeProjectTab).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Hero Banner Section */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-18 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/90 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>XƯỞNG MAY GIA CÔNG LOCAL BRAND CHUYÊN NGHIỆP</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950 leading-[1.15]">
                  SẢN XUẤT THỜI TRANG THEO YÊU CẦU{' '}
                  <span className="text-blue-900 block mt-1">CHUẨN XUẤT XƯỞNG B2B</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  Hậu phương sản xuất vững chắc cho các Local Brand và Doanh nghiệp. Nhận may trọn gói từ khâu phát triển mẫu rập vi tính, cung ứng vải, in/thêu đến hoàn thiện đóng gói.
                </p>
              </div>

              {/* Badges Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { title: 'MOQ Linh Hoạt', desc: 'Từ 30 áo/mẫu' },
                  { title: 'Bảo Mật NDA', desc: 'Độc quyền 100%' },
                  { title: 'Bảo Hành Kỹ Thuật', desc: '1 đổi 1 nếu lỗi' },
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{badge.title}</div>
                      <div className="text-[11px] text-slate-500">{badge.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/bao-gia"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-sm hover:shadow"
                >
                  <span>NHẬN BÁO GIÁ NHANH (30P)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/du-an"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
                >
                  <span>XEM CÁC DỰ ÁN ĐÃ MAY</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Right Showcase Card Column */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-5 space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
                    alt="Xưởng may gia công Arden"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    Xưởng sản xuất Tân Phú, TP.HCM
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs text-blue-950 text-xs font-black shadow-sm flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Chuẩn FQC 100%</span>
                  </div>
                </div>

                {/* Mini Stat Ribbon */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-base font-black text-blue-900">10+ Năm</div>
                    <div className="text-[10px] text-slate-500 font-medium">Kinh nghiệm</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-base font-black text-blue-900">500K+</div>
                    <div className="text-[10px] text-slate-500 font-medium">Sản phẩm</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-base font-black text-blue-900">98%</div>
                    <div className="text-[10px] text-slate-500 font-medium">Đúng tiến độ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {heroMetrics.map((metric, idx) => (
              <div key={idx} className={`pt-3 md:pt-0 ${idx !== 0 ? 'md:pl-4 lg:pl-6' : ''}`}>
                <div className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{metric.label}</div>
                {metric.sublabel && (
                  <div className="text-[11px] text-slate-500 mt-0.5">{metric.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Core Services Section */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeading
              badge="DANH MỤC DỊCH VỤ"
              title="DỊCH VỤ MAY GIA CÔNG CHỦ LỰC"
              subtitle="Cung ứng giải pháp sản xuất toàn diện từ áo thun, sơ mi, quần đến áo khoác cho mọi phân khúc thời trang."
            />
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider shrink-0"
            >
              <span>Xem tất cả 5 dịch vụ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={service.slug}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-950 border border-slate-200 hover:border-blue-200 text-center text-xs font-bold uppercase tracking-wider block transition-colors"
                  >
                    Xem chi tiết dịch vụ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <SectionHeading
              badge="DỰ ÁN TIÊU BIỂU"
              title="CÁC BỘ SƯU TẬP ĐÃ GIA CÔNG"
              subtitle="Khám phá các sản phẩm thực tế xưởng may Arden đã thực hiện cho các thương hiệu thời trang đối tác."
            />
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'tshirt', label: 'Áo thun' },
                { id: 'shirt', label: 'Sơ mi' },
                { id: 'pants', label: 'Quần' },
                { id: 'jacket', label: 'Áo khoác' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    activeProjectTab === tab.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      {project.client || project.categoryLabel}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <div className="text-[11px] text-slate-500 space-y-1">
                      <div><span className="font-semibold text-slate-700">Vải:</span> {project.material}</div>
                      <div><span className="font-semibold text-slate-700">Đơn hàng:</span> {project.minOrder}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={project.slug.startsWith('/') ? project.slug : `/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider"
                  >
                    <span>Xem Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/du-an"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Xem toàn bộ danh mục sản phẩm mẫu ({featuredProjects.length}+ mẫu)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Quick Price Estimates & MOQ Table Section */}
      <section className="py-14 sm:py-18 bg-slate-100/70 border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="DỰ TOÁN CHI PHÍ"
            title="BẢNG GIÁ THAM KHẢO & ĐỊNH MỨC MOQ"
            subtitle="Mức giá xuất xưởng dự kiến theo từng danh mục sản phẩm giúp bạn chủ động lên kế hoạch ngân sách."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {priceEstimates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-[10px] font-bold uppercase tracking-wider border border-blue-200">
                    <Tag className="w-3 h-3" />
                    <span>{item.moq}</span>
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                    {item.category}
                  </h3>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Giá tham khảo:</div>
                    <div className="text-lg font-black text-blue-900 mt-0.5">{item.priceRange}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">/ sản phẩm</div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div><span className="font-semibold text-slate-800">Chất liệu:</span> {item.fabric}</div>
                    <div><span className="font-semibold text-slate-800">Tiến độ:</span> {item.leadTime}</div>
                    <div className="text-[11px] text-slate-500 pt-1 leading-relaxed">{item.details}</div>
                  </div>
                </div>

                <Link
                  href="/bao-gia"
                  className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-center text-xs font-bold uppercase tracking-wider block transition-colors shadow-xs"
                >
                  Nhận báo giá chi tiết
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Giá trên đã bao gồm VAT và có thể thay đổi tùy thuộc vào định lượng vải, độ phức tạp mẫu in thêu và số lượng cụ thể.</span>
            </div>
            <Link
              href="/bao-gia"
              className="text-blue-900 font-bold hover:underline shrink-0 uppercase text-[11px] tracking-wider"
            >
              Yêu cầu báo giá chính xác ➔
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. Production Process Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="QUY TRÌNH HỢP TÁC"
            title="6 BƯỚC SẢN XUẤT CHUẨN QUỐC TẾ"
            subtitle="Minh bạch từng công đoạn từ lúc tiếp nhận ý tưởng bản vẽ đến khi bàn giao thành phẩm niêm phong."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">
            {productionProcess.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-2.5 hover:border-blue-400 hover:bg-blue-50/20 transition-all group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Why Choose Arden & Factory Capabilities */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-900 text-[10px] font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-blue-700" />
                <span>NĂNG LỰC SẢN XUẤT THỰC TẾ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950">
                TẠI SAO HƠN 100+ LOCAL BRAND TIN CHỌN ARDEN?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chúng tôi không chỉ là đơn vị gia công cắt may đơn thuần mà đóng vai trò là xưởng R&D cố vấn kỹ thuật, giúp bạn biến bản vẽ thiết kế trên giấy thành sản phẩm thời trang cao cấp trên kệ hàng.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Hệ thống máy cắt tự động CAD/CAM chuẩn xác từng milimet.',
                  'Xưởng in lụa, in DTG và thêu vi tính 3D khép kín ngay tại xưởng.',
                  'Quy trình kiểm soát chất lượng FQC 100% trước khi đóng gói.',
                  'Ký hợp đồng cam kết bảo mật mẫu thiết kế và file rập độc quyền (NDA).'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Đăng ký tham quan xưởng may</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseArden.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-400 transition-colors space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900">
                    {idx === 0 && <Award className="w-4 h-4" />}
                    {idx === 1 && <Clock className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 3 && <Scissors className="w-4 h-4" />}
                    {idx === 4 && <Zap className="w-4 h-4" />}
                    {idx === 5 && <Layers className="w-4 h-4" />}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="ĐỐI TÁC NÓI VỀ CHÚNG TÔI"
            title="ĐÁNH GIÁ TỪ CÁC LOCAL BRAND"
            subtitle="Sự hài lòng và phát triển bền vững của khách hàng chính là thước đo uy tín lớn nhất của Arden."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{item.content}"
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-0.5">
                    <div><span className="font-semibold text-slate-700">Dòng sản phẩm:</span> {item.productType}</div>
                    <div><span className="font-semibold text-slate-700">Sản lượng:</span> {item.quantity}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={item.avatar}
                    alt={item.founderName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.founderName}</div>
                    <div className="text-[10px] text-blue-900 font-semibold">{item.brandName} • {item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="HỎI ĐÁP THẮC MẮC"
            title="CÂU HỎI THƯỜNG GẶP CỦA LOCAL BRAND"
            subtitle="Giải đáp nhanh các thắc mắc về số lượng tối thiểu, chi phí làm mẫu, bảo mật thiết kế và quy trình giao nhận."
          />

          <div className="space-y-3 mt-10">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-900"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center text-[10px] shrink-0 font-extrabold">
                        {idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-900 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 10. Latest Articles Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <SectionHeading
              badge="KIẾN THỨC SẢN XUẤT"
              title="TIN TỨC & KINH NGHIỆM LOCAL BRAND"
              subtitle="Cập nhật những kinh nghiệm thực tế về lựa chọn vải, công nghệ in thêu và quản lý chi phí may gia công."
            />
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider shrink-0"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlesData.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-white text-[9px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] text-slate-400">
                      {article.date} • {article.readTime}
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/tin-tuc"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 uppercase tracking-wider"
                  >
                    <span>Đọc bài viết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Final Call To Action */}
      <CTASection
        title="BẠN ĐÃ SẴN SÀNG RA MẮT BỘ SƯU TẬP MỚI?"
        subtitle="Gửi mẫu Techpack hoặc ý tưởng phác thảo, đội ngũ kỹ thuật Arden sẽ liên hệ tư vấn và phản hồi bảng giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
