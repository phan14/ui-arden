import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { servicesData, whyChooseArden, siteConfig } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Scissors,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  Award,
  DollarSign,
  HeartHandshake,
  ChevronRight,
  Check,
  HelpCircle,
  Cpu,
  PackageCheck,
  Tag
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'oem' | 'odm'>('odm');

  const detailedServices = [
    {
      id: 'may-ao-thun',
      title: 'MAY ÁO THUN (T-SHIRT) THEO YÊU CẦU',
      badge: 'Dịch vụ chủ lực',
      desc: 'Sản xuất áo thun Oversize, Boxy fit, Drop-shoulder, Raglan, Polo cho Local Brand. Đường may mí cổ bọc xích chống dão, trần vai 2 kim gia cố chịu lực.',
      moq: 'Từ 30 sản phẩm/mẫu',
      time: '10 - 15 ngày làm việc',
      fabrics: ['Cotton 100% 2C (220-250 GSM)', 'Cotton 100% 4C (200-230 GSM)', 'CVC 65/35', 'Vải Cá Sấu Polo'],
      techniques: ['In lụa Plastisol', 'In kỹ thuật số DTG', 'Thêu vi tính 3D', 'In tràn thân AOP'],
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      detailUrl: '/dich-vu/may-ao-thun',
      features: [
        'Bo cổ dệt sợi dẻo tỷ lệ 1:1, mí bọc xích chống bai dão tuyệt đối',
        'Xử lý co rút vải trước khi cắt tự động, sai số thông số dưới 1cm',
        'Định lượng vải đa dạng từ 180 GSM đến Heavyweight 300 GSM'
      ]
    },
    {
      id: 'may-ao-so-mi',
      title: 'MAY ÁO SƠ MI THỜI TRANG & CÔNG SỞ',
      badge: 'Cao cấp',
      desc: 'Gia công sơ mi ngắn tay, dài tay form Cuban collar, Regular, Relaxed. Kỹ thuật may mí cuộn sườn 1mm siêu nét, cổ áo ép keo công nghiệp không phồng rộp.',
      moq: 'Từ 30 sản phẩm/mẫu',
      time: '12 - 18 ngày làm việc',
      fabrics: ['Vải Oxford cao cấp', 'Vải Lụa cát / Satin', 'Vải Đũi xước / Linen', 'Vải Modal chống nhăn'],
      techniques: ['Thêu ngực vi tính', 'In họa tiết chuyển nhiệt', 'Khắc laser nút thương hiệu'],
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      detailUrl: '/bao-gia',
      features: [
        'Ép keo cổ và măng sét bằng máy ép nhiệt tự động không lo bong rộp',
        'Đường may giấu chỉ sắc nét theo tiêu chuẩn xuất khẩu Nhật Bản',
        'Cung ứng trọn gói nút áo nhựa, nút xà cừ hoặc khắc laser logo'
      ]
    },
    {
      id: 'may-quan',
      title: 'MAY QUẦN KAKI, CARGO PANTS & JEANS',
      badge: 'Streetwear',
      desc: 'Sản xuất quần short túi hộp, quần dài kaki, quần jean denim 12oz-14oz và quần dù gió streetwear. Đóng bọ gia cố các điểm chịu lực cực kỳ chắc chắn.',
      moq: 'Từ 50 sản phẩm/mẫu',
      time: '15 - 20 ngày làm việc',
      fabrics: ['Kaki thun 2 chiều', 'Denim Cotton 100%', 'Vải dù nhăn / Dù Micro', 'Nỉ chân cua 350 GSM'],
      techniques: ['Wash enzym mềm vải', 'Wash vintage / Acid wash', 'Thêu túi hộp', 'In phản quang'],
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
      detailUrl: '/bao-gia',
      features: [
        'Khóa kéo kim loại YKK đồng bộ, chỉ may dệt chịu lực cao cấp',
        'Xử lý wash công nghiệp giúp vải mềm mại, màu sắc vintage độc đáo',
        'Form dáng fit chuẩn từng size từ S đến XXL'
      ]
    },
    {
      id: 'may-ao-khoac',
      title: 'MAY ÁO KHOÁC BOMBER, VARSITY & HOODIE',
      badge: 'Thời thượng',
      desc: 'Sản xuất áo khoác dù 2 lớp chống thấm, Varsity Jacket phối tay da, Hoodie nỉ bông 380 GSM và áo khoác chần bông mùa đông chất lượng cao.',
      moq: 'Từ 30 sản phẩm/mẫu',
      time: '15 - 22 ngày làm việc',
      fabrics: ['Nỉ bông 380 GSM', 'Vải Dù tráng PU chống nước', 'Da PU phối tay Varsity', 'Lót lụa / Lưới thoáng'],
      techniques: ['Thêu xù / Thêu đắp giống Varsity', 'In nhũ / Phản quang', 'Bo dệt sọc độc quyền'],
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      detailUrl: '/bao-gia',
      features: [
        'Dệt bo sọc viền cổ và gấu tay theo màu sắc pantone nhận diện của brand',
        'Lót trong bằng vải lụa hoặc lưới thể thao êm ái, thoáng khí',
        'Khóa kéo 2 chiều mạ bóng, chống kẹt răng'
      ]
    },
    {
      id: 'tron-goi-local-brand',
      title: 'DỊCH VỤ SẢN XUẤT TRỌN GÓI LOCAL BRAND (A - Z)',
      badge: 'Trọn gói ODM',
      desc: 'Giải pháp toàn diện cho brand: Tư vấn chất liệu, ra rập vi tính, may mẫu đối chứng, in/thêu, dệt tag mác thương hiệu, ủi hơi và đóng gói túi zip chuyên nghiệp.',
      moq: 'Từ 30 sản phẩm/mẫu',
      time: '10 - 20 ngày',
      fabrics: ['Mọi chất liệu vải theo yêu cầu và ngân sách'],
      techniques: ['Đầy đủ công nghệ in ấn & thêu vi tính hiện đại nhất'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      detailUrl: '/bao-gia',
      features: [
        'Ký cam kết bảo mật thiết kế và file rập độc quyền (NDA 100%)',
        'Miễn phí hoặc hoàn 100% chi phí làm mẫu khi vào đơn hàng chính thức',
        'Hỗ trợ chụp ảnh sản phẩm mẫu phục vụ truyền thông ra mắt BST'
      ]
    }
  ];

  const printingTechs = [
    {
      name: 'In Lụa Plastisol',
      desc: 'Màu sắc tươi sáng, hình in nét, độ bền giặt cao, phù hợp đơn hàng số lượng vừa và lớn.',
      bestFor: 'Áo thun, Hoodie, Túi vải'
    },
    {
      name: 'In Kỹ Thuật Số (DTG)',
      desc: 'In trực tiếp không giới hạn màu sắc, tái hiện chi tiết tranh ảnh gradient siêu thực.',
      bestFor: 'Áo thun nghệ thuật, BST giới hạn'
    },
    {
      name: 'Thêu Vi Tính 3D',
      desc: 'Độ nổi cao, sắc sảo từng mũi chỉ, mang lại vẻ đẹp sang trọng và độ bền vĩnh cửu.',
      bestFor: 'Nón, Ngực áo polo, Varsity Jacket'
    },
    {
      name: 'In Phản Quang / Nhũ Nứt',
      desc: 'Hiệu ứng phát sáng khi gặp đèn flash ban đêm, tạo điểm nhấn đậm chất Streetwear.',
      bestFor: 'Áo thun Oversize, Áo khoác dù'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Dịch vụ gia công' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>NĂNG LỰC GIA CÔNG THỜI TRANG TOÀN DIỆN</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              DỊCH VỤ SẢN XUẤT THỜI TRANG B2B
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Đồng hành cùng Local Brand và Doanh nghiệp với quy trình may mặc chuẩn mực, vật liệu tuyển chọn và cam kết tiến độ bằng hợp đồng pháp lý.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Detailed Service Cards Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="DANH MỤC CHI TIẾT"
            title="5 DỊCH VỤ GIA CÔNG CHỦ LỰC TẠI ARDEN"
            subtitle="Mỗi dòng sản phẩm đều có chuyền may chuyên biệt và quy chuẩn kỹ thuật kiểm soát nghiêm ngặt."
          />

          <div className="space-y-8 mt-10">
            {detailedServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id.replace('may-', '')}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image Column (4 cols) */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Column (8 cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                        {service.desc}
                      </p>
                    </div>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Số lượng MOQ</div>
                        <div className="text-xs font-bold text-blue-900 mt-0.5">{service.moq}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Thời gian may</div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">{service.time}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Chất liệu vải</div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{service.fabrics[0]}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Kỹ thuật in thêu</div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{service.techniques[0]}</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href="/bao-gia"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Nhận báo giá dịch vụ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {service.detailUrl === '/dich-vu/may-ao-thun' && (
                        <Link
                          href="/dich-vu/may-ao-thun"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200 transition-colors"
                        >
                          <span>Xem bảng size & chất liệu</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      <Link
                        href="/du-an"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-blue-900 hover:text-blue-700 text-xs font-bold uppercase tracking-wider"
                      >
                        <span>Xem mẫu thực tế</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Interactive ODM vs OEM Model Comparison */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="MÔ HÌNH HỢP TÁC"
            title="LỰA CHỌN MÔ HÌNH GIA CÔNG PHÙ HỢP"
            subtitle="Tùy thuộc vào năng lực thiết kế và nguồn lực sẵn có của thương hiệu, bạn có thể lựa chọn hình thức OEM hoặc ODM trọn gói."
          />

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveModel('odm')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeModel === 'odm'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Gia công trọn gói ODM (A - Z)
            </button>
            <button
              onClick={() => setActiveModel('oem')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
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
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="text-base font-bold uppercase text-slate-900">
                    MÔ HÌNH ODM: SẢN XUẤT TRỌN GÓI TỪ Ý TƯỞNG
                  </h4>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Phù hợp Local Brand mới & Startup
                  </span>
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
                      <Check className="w-4 h-4 text-blue-900 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="text-base font-bold uppercase text-slate-900">
                    MÔ HÌNH OEM: GIA CÔNG THEO RẬP & TECHPACK CỦA BRAND
                  </h4>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    Phù hợp Brand đã có đội ngũ R&D
                  </span>
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

      {/* 4. Printing & Embroidery Techniques Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            badge="CÔNG NGHỆ IN THÊU"
            title="ĐA DẠNG KỸ THUẬT IN VÀ THÊU VI TÍNH"
            subtitle="Xưởng in thêu chuyên sâu giúp tái hiện hoàn hảo mọi phong cách thiết kế thời trang hiện đại."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {printingTechs.map((tech, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                  {tech.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tech.desc}
                </p>
                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-blue-900 font-semibold">
                  Ứng dụng: {tech.bestFor}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection
        title="BẮT ĐẦU DỰ ÁN MAY GIA CÔNG CÙNG ARDEN"
        subtitle="Gửi thông tin mẫu và số lượng mong muốn, chúng tôi sẽ phản hồi bảng giá chi tiết trong vòng 30 phút."
      />
    </div>
  );
};
