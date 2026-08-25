import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { QuoteFormData } from '../../types';
import {
  Calculator,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  FileCheck,
  HelpCircle
} from 'lucide-react';

export interface QuoteFormSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  onFormSubmit?: (data: QuoteFormData) => void;
  className?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  badge = 'TIẾP NHẬN YÊU CẦU 24/7',
  title = 'FORM ĐĂNG KÝ BÁO GIÁ GIA CÔNG MAY MẶC',
  subtitle = 'Điền thông tin chi tiết về sản phẩm để nhận bảng dự toán bóc tách chi phí vải, công may, rập và in thêu trong vòng 30 phút.',
  onFormSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    productType: 'Áo thun Oversize / Boxy',
    quantity: '50 - 100 sản phẩm',
    fabricType: 'Cotton 100% 2C (230-250 GSM)',
    gsm: '230-250 GSM',
    printingMethod: ['In lụa Plastisol'],
    hasDesign: 'yes',
    notes: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    brandName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
    setIsSubmitted(true);
  };

  const handlePrintToggle = (method: string) => {
    setFormData((prev) => {
      const exists = prev.printingMethod.includes(method);
      return {
        ...prev,
        printingMethod: exists
          ? prev.printingMethod.filter((m) => m !== method)
          : [...prev.printingMethod, method],
      };
    });
  };

  return (
    <section
      id="quote-form-section"
      aria-labelledby="quote-heading"
      className={`py-14 sm:py-18 bg-white border-b border-slate-200 ${className}`}
    >
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          {isSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-emerald-950 uppercase">
                GỬI YÊU CẦU BÁO GIÁ THÀNH CÔNG!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-lg mx-auto">
                Kỹ thuật viên Arden đã nhận được thông tin dự toán của thương hiệu <strong>{formData.brandName || formData.customerName}</strong>. Chúng tôi sẽ lập bảng dự toán chi tiết và liên hệ lại qua số <strong>{formData.customerPhone}</strong> trong vòng 30 phút.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="primary"
                  size="md"
                >
                  Tạo thêm yêu cầu báo giá khác
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Thông tin sản phẩm */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-2">
                  1. THÔNG SỐ SẢN PHẨM CẦN GIA CÔNG
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Loại sản phẩm:
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Áo thun Oversize / Boxy">Áo thun Oversize / Boxy</option>
                      <option value="Áo thun Polo bo dệt">Áo thun Polo bo dệt</option>
                      <option value="Áo sơ mi Oxford / Cuban">Áo sơ mi Oxford / Cuban</option>
                      <option value="Quần Short / Cargo Pants">Quần Short / Cargo Pants</option>
                      <option value="Áo khoác Varsity / Hoodie">Áo khoác Varsity / Hoodie</option>
                      <option value="Dòng sản phẩm khác">Dòng sản phẩm khác</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Số lượng đặt may dự kiến:
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    >
                      <option value="30 - 50 sản phẩm">30 - 50 sản phẩm (MOQ tối thiểu)</option>
                      <option value="50 - 100 sản phẩm">50 - 100 sản phẩm</option>
                      <option value="100 - 300 sản phẩm">100 - 300 sản phẩm</option>
                      <option value="300 - 500 sản phẩm">300 - 500 sản phẩm</option>
                      <option value="Trên 500 sản phẩm">Trên 500 sản phẩm (Giá sỉ ưu đãi)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Chất liệu vải mong muốn:
                    </label>
                    <select
                      value={formData.fabricType}
                      onChange={(e) => setFormData({ ...formData, fabricType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Cotton 100% 2C (230-250 GSM)">Cotton 100% 2C (230-250 GSM) - Form Boxy</option>
                      <option value="Cotton 100% 4C (210-230 GSM)">Cotton 100% 4C (210-230 GSM) - Mềm co giãn</option>
                      <option value="Vải Cá Sấu Cotton / Poly">Vải Cá Sấu Cotton / Poly (Dành cho Polo)</option>
                      <option value="Vải Oxford / Đũi xước / Lụa">Vải Oxford / Đũi xước / Lụa (Sơ mi)</option>
                      <option value="Kaki thun / Jeans 12oz">Kaki thun / Jeans 12oz (Quần)</option>
                      <option value="Nỉ bông 380 GSM / Dù gió">Nỉ bông 380 GSM / Dù gió (Hoodie/Khoác)</option>
                      <option value="Cần xưởng tư vấn chất liệu phù hợp">Cần xưởng tư vấn chất liệu phù hợp</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Tình trạng thiết kế & Rập mẫu:
                    </label>
                    <select
                      value={formData.hasDesign}
                      onChange={(e) => setFormData({ ...formData, hasDesign: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    >
                      <option value="yes">Đã có sẵn file thiết kế (AI/PSD/PDF)</option>
                      <option value="no">Chỉ có hình ảnh tham khảo / ý tưởng</option>
                      <option value="need_design">Cần xưởng hỗ trợ lên rập & vẽ đồ họa</option>
                    </select>
                  </div>
                </div>

                {/* Print Techniques checkbox tags */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Kỹ thuật In / Thêu mong muốn (chọn nhiều mục):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'In lụa Plastisol',
                      'In kỹ thuật số DTG',
                      'Thêu vi tính 3D / Thêu xù',
                      'In phản quang / Decal PU',
                      'In tràn thân AOP',
                      'Áo trơn (Không in thêu)'
                    ].map((tech) => {
                      const isSelected = formData.printingMethod.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handlePrintToggle(tech)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 2: Thông tin liên hệ */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-2">
                  2. THÔNG TIN NGƯỜI LIÊN HỆ & THƯƠNG HIỆU
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Họ và tên của bạn: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Số điện thoại / Zalo nhận báo giá: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                      placeholder="0901 234 567"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Tên thương hiệu / Local Brand (nếu có):
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder="Ví dụ: Hades, Degrey, Arden..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-700">
                      Email tiếp nhận file báo giá:
                    </label>
                    <input
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                      placeholder="brand@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Ghi chú chi tiết yêu cầu bổ sung:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mô tả cụ thể về vị trí in, kích thước hình in, tiến độ cần giao hàng gấp..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  iconRight={<Send className="w-4 h-4" />}
                >
                  XÁC NHẬN GỬI YÊU CẦU BÁO GIÁ NHANH
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};
