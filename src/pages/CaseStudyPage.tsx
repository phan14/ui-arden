import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTASection } from '../components/ui/CTASection';
import { featuredProjects } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Calendar,
  Layers,
  Scissors,
  ShieldCheck,
  Quote,
  Clock,
  Package,
  ChevronLeft,
  Star,
  Check
} from 'lucide-react';

export const CaseStudyPage: React.FC = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
      title: 'Mẫu áo thun oversize hoàn thiện',
    },
    {
      url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      title: 'Chi tiết bo cổ dệt 1:1 chống bai dão',
    },
    {
      url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80',
      title: 'Chi tiết in lụa Plastisol sắc nét',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      title: 'Công đoạn may ráp chuyền tại xưởng Arden',
    },
  ];

  const [activeImage, setActiveImage] = useState(galleryImages[0].url);

  const milestones = [
    { day: 'Ngày 1 - 3', title: 'Tiếp nhận Techpack & Ra rập vi tính', desc: 'Thiết kế rập trên phần mềm CAD và xuất định mức vải tối ưu chi phí cho brand.' },
    { day: 'Ngày 4 - 6', title: 'May mẫu thử nghiệm & Duyệt mẫu', desc: 'Cắt may 1 áo mẫu hoàn chỉnh bao gồm in test mực Plastisol để gửi khách hàng mặc thử form.' },
    { day: 'Ngày 7', title: 'Ký duyệt niêm phong mẫu', desc: 'Khách hàng chốt thông số, xưởng nhập cuộn vải Cotton 100% 2C 250 GSM và tiến hành xả vải nghỉ 24h.' },
    { day: 'Ngày 8 - 13', title: 'Cắt tự động, In ấn & May chuyền', desc: 'In lụa 4 bàn đồng thời, chuyền may 15 công nhân ráp hoàn thiện 1.000 áo theo chuẩn kỹ thuật.' },
    { day: 'Ngày 14 - 15', title: 'Kiểm định FQC 100% & Bàn giao', desc: 'Cắt chỉ thừa, ủi hơi định hình, gắn tag mác, đóng túi zip và giao tận kho thương hiệu tại Q.1 TP.HCM.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Dự án', href: '/du-an' },
              { label: 'BST Áo thun Local Brand ADC' },
            ]}
          />
          <div className="mt-4 max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>CASE STUDY TIÊU BIỂU</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              BST ÁO THUN OVERSIZE LOCAL BRAND ADC
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
              Hành trình gia công 1.000 áo thun Cotton 2 chiều 250 GSM với kỹ thuật in Plastisol và bo cổ dệt chống dão trong 15 ngày.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Gallery & Project Specs */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Gallery (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm relative">
                <img
                  src={activeImage}
                  alt="Chi tiết dự án áo thun Arden"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img.url)}
                    className={`aspect-video rounded-xl overflow-hidden border transition-all ${
                      activeImage === img.url
                        ? 'border-blue-900 ring-2 ring-blue-900/20'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Specifications Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                <h2 className="text-base font-bold uppercase tracking-tight text-slate-900 border-b border-slate-200 pb-3">
                  THÔNG SỐ DỰ ÁN SẢN XUẤT
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Khách hàng:</span>
                    <span className="font-bold text-slate-900 uppercase">Local Brand ADC</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Dòng sản phẩm:</span>
                    <span className="font-bold text-slate-900">Áo thun Oversize Streetwear</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Chất liệu vải:</span>
                    <span className="font-bold text-slate-900">Cotton 100% 2 chiều 250 GSM</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Kỹ thuật in/thêu:</span>
                    <span className="font-bold text-slate-900">In lụa Plastisol + Thêu nổi 3D</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Số lượng sản xuất:</span>
                    <span className="font-bold text-blue-900">1.000 sản phẩm (4 size S, M, L, XL)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Thời gian hoàn thành:</span>
                    <span className="font-bold text-slate-900">15 ngày (Đúng tiến độ 100%)</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500 font-medium">Tỷ lệ đạt chuẩn FQC:</span>
                    <span className="font-bold text-emerald-600">99.8% đạt chuẩn xuất xưởng</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/bao-gia"
                    className="w-full py-3 rounded-xl text-center font-bold text-white bg-blue-900 hover:bg-blue-800 uppercase text-xs tracking-widest block transition-colors shadow-xs"
                  >
                    BÁO GIÁ SẢN PHẨM TƯƠNG TỰ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Deep Dive: Challenges & Production Timeline */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container className="max-w-4xl space-y-12">
          {/* Solution & Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900">
              YÊU CẦU KỸ THUẬT & GIẢI PHÁP TỪ XƯỞNG ARDEN
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Thách thức của khách hàng:</strong> Local Brand ADC cần ra mắt BST Thu Đông với form áo Boxy Oversize dày dặn, đứng dáng nhưng cổ áo phải không bị bai dão sau khi giặt máy nhiều lần. Đồng thời, họa tiết in lưng có kích thước lớn (A3+) yêu cầu không bị nứt hoặc dính khi gập áo.
              </p>
              <p>
                <strong>Giải pháp kỹ thuật của Arden:</strong>
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dệt riêng bo cổ tỷ lệ 1:1 sợi spandex co giãn phục hồi cao kết hợp kỹ thuật may mí bọc xích viền cổ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sử dụng mực in Plastisol gốc dầu cao cấp và sấy nhiệt qua buồng sấy tự động 160°C trong 90 giây để mực chín đều.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Xả vải nghỉ 24 tiếng trước khi cắt bán thành phẩm giúp tỷ lệ co rút sau giặt dưới 2%.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900">
              TIẾN ĐỘ THỰC HIỆN DỰ ÁN (15 NGÀY)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="text-[10px] font-bold text-blue-900 uppercase">{m.day}</div>
                  <h4 className="text-xs font-bold text-slate-900">{m.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "Lô hàng 1.000 áo thun vừa rồi bán hết sạch trong 2 tuần launching. Khách hàng khen chất vải dày dặn và bo cổ rất chắc chắn. Cảm ơn đội ngũ xưởng may Arden đã luôn đồng hành và hỗ trợ sát sao tiến độ."
            </p>
            <div className="text-xs font-bold text-slate-900">
              Anh Minh Khang - Founder & Creative Director Local Brand ADC
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Other Projects */}
      <section className="py-14 bg-white border-b border-slate-200">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black uppercase text-slate-900">
              CÁC DỰ ÁN KHÁC ĐÃ THỰC HIỆN
            </h3>
            <Link href="/du-an" className="text-xs font-bold text-blue-900 hover:underline">
              Xem tất cả dự án ➔
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProjects.slice(1, 4).map((p) => (
              <div key={p.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase text-slate-900 line-clamp-1">{p.title}</h4>
                  <div className="text-[11px] text-slate-500">{p.material} • {p.minOrder}</div>
                  <Link
                    href={p.slug.startsWith('/') ? p.slug : `/${p.slug}`}
                    className="text-xs font-bold text-blue-900 hover:underline block pt-1"
                  >
                    Xem chi tiết ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection
        title="BẠN MUỐN SẢN XUẤT BST TƯƠNG TỰ?"
        subtitle="Liên hệ ngay với xưởng may Arden để được tư vấn chất liệu vải và nhận bảng báo giá chi tiết."
      />
    </div>
  );
};
