import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { siteConfig } from '../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  Navigation,
  Calendar,
  Check
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('May áo thun Local Brand');
  const [visitDate, setVisitDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Liên hệ xưởng may' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>HỖ TRỢ TƯ VẤN TRỰC TIẾP TẠI XƯỞNG</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              LIÊN HỆ XƯỞNG MAY ARDEN
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Quý khách có thể ghé thăm trực tiếp xưởng may để xem mẫu vải thật, kiểm tra đường may thành phẩm hoặc liên hệ qua Hotline/Zalo để được báo giá tức thì.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Details & Interactive Form */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Factory Contact Info & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
                <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 border-b border-slate-200 pb-3">
                  THÔNG TIN XƯỞNG SẢN XUẤT
                </h3>

                <ul className="space-y-4 text-xs">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 uppercase">Địa chỉ xưởng may:</div>
                      <div className="text-slate-600 mt-0.5 leading-relaxed">{siteConfig.address}</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 uppercase">Hotline / Zalo tiếp nhận đơn:</div>
                      <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-blue-900 font-bold hover:underline">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 uppercase">Email trao đổi báo giá:</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-slate-700 hover:text-blue-900">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 uppercase">Thời gian làm việc:</div>
                      <div className="text-slate-600">{siteConfig.workingHours}</div>
                    </div>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-slate-500 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Xưởng may có phòng mẫu riêng và bãi đỗ xe ô tô thuận tiện</span>
                </div>
              </div>

              {/* Map Preview Box */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-100 p-2 space-y-2 shadow-xs">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                    alt="Bản đồ định vị xưởng may Arden Tân Phú TP.HCM"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-blue-900" />
                      <span>Xưởng may Arden Tân Phú</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-xs py-2.5 px-3 rounded-xl bg-blue-900 text-white hover:bg-blue-800 font-bold uppercase tracking-wider transition-colors"
                >
                  Mở chỉ đường trên Google Maps ➔
                </a>
              </div>
            </div>

            {/* Right Column: Contact Message Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900">
                    GỬI THÔNG TIN LIÊN HỆ ĐẾN ARDEN
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hãy để lại thông tin của bạn, chúng tôi sẽ phản hồi trong vòng 30 phút.
                  </p>
                </div>

                {!formSent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Số điện thoại / Zalo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0901 234 567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Dịch vụ quan tâm
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                        >
                          <option value="May áo thun Local Brand">May áo thun Local Brand</option>
                          <option value="May áo sơ mi thời trang">May áo sơ mi thời trang</option>
                          <option value="May quần Kaki / Jeans / Cargo">May quần Kaki / Jeans / Cargo</option>
                          <option value="May áo khoác / Hoodie">May áo khoác / Hoodie</option>
                          <option value="Sản xuất trọn gói ODM/OEM">Sản xuất trọn gói ODM/OEM</option>
                          <option value="Khác">Khác</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-900 uppercase">
                        Nội dung yêu cầu hoặc ngày muốn ghé thăm xưởng
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Mô tả số lượng dự kiến, yêu cầu về chất liệu vải hoặc ngày giờ bạn muốn ghé xem mẫu trực tiếp..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <Send className="w-4 h-4" />
                        <span>GỬI YÊU CẦU LIÊN HỆ</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-8 text-center space-y-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold uppercase text-slate-900">
                        ĐÃ GỬI LIÊN HỆ THÀNH CÔNG!
                      </h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        Cảm ơn quý khách <strong>{name}</strong>. Nhân viên Arden sẽ gọi điện hoặc nhắn tin Zalo qua số <strong>{phone}</strong> trong vòng 30 phút.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSent(false)}
                      className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider"
                    >
                      Gửi tin nhắn khác
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
