import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTASection } from '../components/ui/CTASection';
import {
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Truck,
  FileText,
  Lock,
  CheckCircle2,
  Sparkles,
  Award,
  Check
} from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chung');

  const policySections = [
    {
      id: 'chung',
      title: 'Chính sách chung & Thỏa thuận hợp tác',
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Xưởng may Arden hoạt động trên nguyên tắc <strong>Minh bạch — Đúng hẹn — Trách nhiệm</strong>. Mọi đơn hàng từ 30 sản phẩm trở lên đều được xác lập bằng Hợp đồng gia công hoặc Thỏa thuận kinh tế có giá trị pháp lý rõ ràng.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">1. Quy định về duyệt mẫu (Sample Approvals):</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Mẫu đối chứng được may và niêm phong có chữ ký xác nhận của cả hai bên trước khi sản xuất hàng loạt.</li>
              <li>Thành phẩm sản xuất hàng loạt sẽ căn cứ 100% theo mẫu đối chứng về form dáng, đường may, định lượng vải và chất lượng in thêu.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">2. Dung sai kích thước & màu sắc cho phép:</h4>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Dung sai thông số may: ±1.0 cm đến ±1.5 cm tùy vị trí theo quy chuẩn dệt may công nghiệp Việt Nam (TCVN).</li>
              <li>Độ lệch màu giữa các lô nhuộm vải: Trong phạm vi cho phép 5% theo bảng màu chuẩn Pantone TPX/TCX.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'chinh-sach-bao-mat',
      title: 'Chính sách bảo mật thiết kế & NDA',
      icon: Lock,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Arden hiểu rằng <strong>Thiết kế & Ý tưởng</strong> là tài sản sống còn của mỗi Local Brand. Chúng tôi cam kết tuyệt đối tuân thủ chính sách bảo mật thông tin và sẵn sàng ký kết Thỏa thuận bảo mật thông tin không tiết lộ (NDA).
          </p>
          <div className="bg-blue-50/70 border border-blue-200 p-5 rounded-xl space-y-3 text-xs">
            <div className="font-bold text-blue-950 uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>Cam kết 4 KHÔNG từ Xưởng May Arden:</span>
            </div>
            <ul className="space-y-2 text-blue-950">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>KHÔNG</strong> tuồn hàng mẫu, hàng lỗi hoặc hàng dư thừa ra thị trường dưới bất kỳ hình thức nào.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>KHÔNG</strong> chia sẻ file thiết kế rập vi tính, file in đồ họa cho bên thứ ba.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>KHÔNG</strong> nhận may nhái (copy) thiết kế độc quyền của các brand đối tác cho khách hàng khác.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>KHÔNG</strong> đăng tải hình ảnh sản phẩm trước ngày thương hiệu chính thức Launch BST nếu chưa được sự đồng ý.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'chinh-sach-thanh-toan',
      title: 'Chính sách thanh toán & Đặt cọc',
      icon: CreditCard,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Tiến độ thanh toán cho các đơn hàng may gia công tại xưởng Arden được chia thành 3 giai đoạn minh bạch:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="font-bold text-slate-900 text-xs uppercase">Đợt 1: Đặt cọc triển khai mẫu & mua vải (40% - 50%)</div>
              <p className="text-xs text-slate-600 mt-1">Thanh toán ngay sau khi ký hợp đồng gia công để xưởng tiến hành giữ cây vải và lên rập.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="font-bold text-slate-900 text-xs uppercase">Đợt 2: Thanh toán sản xuất hàng loạt (30%)</div>
              <p className="text-xs text-slate-600 mt-1">Thanh toán khi vải đã cắt xong và bắt đầu vào chuyền may ráp in thêu.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="font-bold text-slate-900 text-xs uppercase">Đợt 3: Thanh toán tất toán đơn hàng (Số còn lại)</div>
              <p className="text-xs text-slate-600 mt-1">Thanh toán khi hàng đã đóng gói hoàn thiện, kiểm định FQC đạt chuẩn và sẵn sàng bàn giao.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'chinh-sach-doi-tra',
      title: 'Chính sách đổi trả & Bảo hành đường may',
      icon: RefreshCw,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Tất cả các sản phẩm gia công tại Arden đều được bảo hành kỹ thuật đường may và in ấn trong vòng <strong>15 ngày</strong> kể từ ngày giao hàng.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">Các trường hợp được áp dụng bảo hành & đổi trả 1:1 miễn phí:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Sản phẩm bị lỗi bung chỉ, đứt đường may, vặn sườn do lỗi kỹ thuật xưởng.</li>
              <li>Họa tiết in bị bong tróc, lem màu hoặc thêu lệch so với mẫu đối chứng đã duyệt.</li>
              <li>Sai thông số kích thước vượt quá dung sai cho phép trong hợp đồng.</li>
              <li>Vải bị loang ố hoặc rách lủng trước khi đóng gói.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'chinh-sach-van-chuyen',
      title: 'Chính sách vận chuyển & Giao nhận',
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Arden hỗ trợ đóng thùng carton chống sốc chống ẩm và vận chuyển tận nơi trên toàn quốc:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <strong className="text-slate-900 text-xs uppercase block">Khu vực TP. Hồ Chí Minh:</strong>
              <p className="text-xs text-slate-600 mt-0.5">Miễn phí vận chuyển cho các đơn hàng từ 100 sản phẩm trở lên. Giao hỏa tốc bằng xe tải trong ngày.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <strong className="text-slate-900 text-xs uppercase block">Các tỉnh thành khác (Hà Nội, Đà Nẵng, Cần Thơ, Hải Phòng...):</strong>
              <p className="text-xs text-slate-600 mt-0.5">Giao hàng thông qua các đơn vị chuyển phát uy tín (Viettel Post, GHTK, Chành xe chuyên tuyến) với chi phí tối ưu nhất.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Chính sách hoạt động' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>MINH BẠCH & BẢO VỆ QUYỀN LỢI ĐỐI TÁC</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              CHÍNH SÁCH HOẠT ĐỘNG & HỢP TÁC
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Quy định rõ ràng về quy trình kiểm tra chất lượng, điều khoản bảo mật thiết kế NDA, thanh toán và bảo hành sản phẩm tại xưởng may Arden.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Policy Content */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sidebar Tabs (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">
                DANH MỤC CHÍNH SÁCH
              </div>
              {policySections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveTab(sec.id)}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className="line-clamp-1">{sec.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Content Body (8 cols) */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              {policySections.map((sec) => {
                if (sec.id !== activeTab) return null;
                const Icon = sec.icon;
                return (
                  <div key={sec.id} className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900">
                        {sec.title}
                      </h2>
                    </div>

                    <div className="pt-2">
                      {sec.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection
        title="BẠN CẦN KÝ KẾT HỢP ĐỒNG GIA CÔNG NDA?"
        subtitle="Liên hệ ngay với bộ phận pháp lý & kinh doanh của Arden để nhận mẫu hợp đồng nguyên tắc bảo vệ quyền lợi hai bên."
      />
    </div>
  );
};
