import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Navigation
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

export interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  website?: string;
}

export interface ContactSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfoProps;
  mapEmbedUrl?: string;
  onFormSubmit?: (data: any) => void;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  badge = 'LIÊN HỆ & THĂM XƯỞNG',
  title = 'KẾT NỐI VỚI XƯỞNG MAY ARDEN',
  subtitle = 'Quý khách có thể ghé thăm trực tiếp xưởng may để xem mẫu vải thật, kiểm tra đường may thành phẩm hoặc liên hệ qua Hotline/Zalo để được báo giá tức thì.',
  contactInfo = {
    address: siteConfig.address,
    phone: siteConfig.phone,
    email: siteConfig.email,
    workingHours: siteConfig.workingHours,
    website: siteConfig.website,
  },
  mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.995166299381!2d106.6268883758384!3d10.811677358542616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be351b9e28f%3A0xe67756f5a34e0fa7!2zVMOieSBUaOG6oW5oLCBUw6JuIFBow7osIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s',
  onFormSubmit,
  className = '',
}) => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('May áo thun Local Brand');
  const [visitDate, setVisitDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit({ name, phone, email, service, visitDate, message });
    }
    setFormSent(true);
  };

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Factory Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
              <h2 className="text-base font-bold uppercase tracking-tight text-slate-900 border-b border-slate-200 pb-3">
                THÔNG TIN XƯỞNG SẢN XUẤT
              </h2>

              <ul className="space-y-4 text-xs">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 uppercase">Địa chỉ xưởng may:</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed">{contactInfo.address}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 uppercase">Hotline / Zalo tiếp nhận đơn:</div>
                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-blue-900 font-bold hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 uppercase">Email trao đổi báo giá:</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-slate-700 hover:text-blue-900">
                      {contactInfo.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 uppercase">Giờ làm việc:</div>
                    <div className="text-slate-600 mt-0.5">{contactInfo.workingHours}</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 shadow-xs">
              <iframe
                title="Bản đồ chỉ đường đến Xưởng May Arden"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact & Visit Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900 mb-2">
              GỬI YÊU CẦU HOẶC HẸN LỊCH THĂM XƯỞNG
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Vui lòng điền thông tin bên dưới, chuyên viên kỹ thuật của Arden sẽ liên hệ lại trong vòng 15-30 phút.
            </p>

            {formSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-emerald-900 uppercase">
                  ĐÃ TIẾP NHẬN YÊU CẦU THÀNH CÔNG!
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Cảm ơn bạn đã liên hệ xưởng may Arden. Bộ phận kinh doanh sẽ gọi lại qua số điện thoại <strong>{phone}</strong> để tư vấn chi tiết.
                </p>
                <Button
                  onClick={() => setFormSent(false)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Gửi thêm yêu cầu khác
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Họ và tên của bạn: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Số điện thoại / Zalo: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0901 234 567"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Email liên hệ:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="brand@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Dòng sản phẩm quan tâm:
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                    >
                      <option value="May áo thun Local Brand">May áo thun Local Brand</option>
                      <option value="May áo sơ mi thời trang">May áo sơ mi thời trang</option>
                      <option value="May quần Kaki / Cargo / Jeans">May quần Kaki / Cargo / Jeans</option>
                      <option value="May áo khoác Varsity / Hoodie">May áo khoác Varsity / Hoodie</option>
                      <option value="Tư vấn trọn gói ODM/OEM">Tư vấn trọn gói ODM/OEM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Ngày dự kiến ghé thăm xưởng (nếu có):
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Nội dung yêu cầu chi tiết (chất liệu, số lượng, lưu ý):
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mô tả ý tưởng, định lượng vải mong muốn hoặc câu hỏi bạn cần giải đáp..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900 shadow-2xs"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    iconRight={<Send className="w-4 h-4" />}
                  >
                    GỬI YÊU CẦU TƯ VẤN NGAY
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
