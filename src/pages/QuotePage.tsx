import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { siteConfig } from '../data/siteData';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Upload,
  Phone,
  Clock,
  ShieldCheck,
  Check,
  FileText,
  HelpCircle,
  Calculator,
  Tag,
  Trash2,
  Award
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [productType, setProductType] = useState('ao-thun');
  const [quantity, setQuantity] = useState('100 - 300 sản phẩm');
  const [fabric, setFabric] = useState('Cotton 100% 2 chiều 250 GSM');
  const [technique, setTechnique] = useState('In lụa Plastisol');
  const [sampleNeed, setSampleNeed] = useState('yes');
  const [notes, setNotes] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  // Contact Info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [address, setAddress] = useState('');

  const productOptions = [
    { id: 'ao-thun', title: 'Áo thun (T-Shirt)', desc: 'Oversize, Boxy, Drop-shoulder, Raglan, Polo', basePrice: 75000 },
    { id: 'ao-so-mi', title: 'Áo sơ mi (Shirt)', desc: 'Oxford, Lụa, Cuban collar, Tay ngắn, Tay dài', basePrice: 125000 },
    { id: 'quan', title: 'Quần (Pants)', desc: 'Kaki, Jean, Cargo pants, Short, Quần âu tây', basePrice: 155000 },
    { id: 'ao-khoac', title: 'Áo khoác & Hoodie', desc: 'Bomber dù 2 lớp, Hoodie nỉ bông, Zip hoodie', basePrice: 185000 },
    { id: 'dong-phuc', title: 'Đồng phục doanh nghiệp', desc: 'Áo thun cổ trụ, Tạp dề, Sơ mi công sở', basePrice: 90000 },
    { id: 'khac', title: 'Sản phẩm khác', desc: 'Túi tote canvas, Nón lưỡi trai, Đầm váy', basePrice: 65000 },
  ];

  const quantityOptions = [
    { label: '30 - 50 sản phẩm (Thử nghiệm BST)', multiplier: 1.25, time: '10 - 12 ngày' },
    { label: '50 - 100 sản phẩm', multiplier: 1.1, time: '12 - 14 ngày' },
    { label: '100 - 300 sản phẩm (Phổ biến nhất)', multiplier: 1.0, time: '14 - 16 ngày' },
    { label: '300 - 500 sản phẩm', multiplier: 0.9, time: '16 - 18 ngày' },
    { label: '500 - 1.000 sản phẩm', multiplier: 0.82, time: '18 - 22 ngày' },
    { label: '> 1.000 sản phẩm (Giá nhà máy tối ưu)', multiplier: 0.75, time: '20 - 25 ngày' },
  ];

  const fabricOptions = [
    'Cotton 100% 2 chiều 250 GSM (Chuẩn Local Brand)',
    'Cotton 100% 4 chiều 220 GSM',
    'Cotton CVC 65/35 (Tiết kiệm chi phí)',
    'Vải Chân cua / Nỉ bông 350 GSM (Áo khoác / Hoodie)',
    'Vải Kaki thun / Kaki không co giãn (Quần)',
    'Vải Oxford / Đũi xước (Sơ mi)',
    'Chưa xác định, cần Arden tư vấn chất liệu',
  ];

  const techniqueOptions = [
    'In lụa Plastisol / Cao su sắc nét',
    'In kỹ thuật số DTG cao cấp',
    'In phản quang / In nhũ / In dạ quang',
    'Thêu vi tính 3D nổi',
    'In ép chuyển nhiệt Decal',
    'Chỉ may ráp trơn (không in thêu)',
  ];

  // Dynamic estimate calculation
  const selectedProductObj = productOptions.find((p) => p.id === productType) || productOptions[0];
  const selectedQuantityObj = quantityOptions.find((q) => q.label === quantity) || quantityOptions[2];
  const estimatedUnitPrice = Math.round((selectedProductObj.basePrice * selectedQuantityObj.multiplier) / 1000) * 1000;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((f: File) => f.name);
      setUploadedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Nhận báo giá may gia công' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>PHẢN HỒI NHANH TRONG 30 PHÚT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              NHẬN BÁO GIÁ MAY GIA CÔNG
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Điền thông tin yêu cầu của bạn theo 4 bước đơn giản dưới đây. Chuyên viên kỹ thuật Arden sẽ tính toán định mức và gửi bảng báo giá chi tiết tận xưởng.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Form & Calculator Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: 4-Step Form (8 cols) */}
              <div className="lg:col-span-8 space-y-8">
                {/* Stepper Header */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 border-b border-slate-200 pb-6">
                  {[
                    { num: 1, label: 'Loại sản phẩm' },
                    { num: 2, label: 'Quy cách & Vải' },
                    { num: 3, label: 'File thiết kế' },
                    { num: 4, label: 'Thông tin liên hệ' },
                  ].map((step) => {
                    const isActive = currentStep === step.num;
                    const isDone = currentStep > step.num;
                    return (
                      <button
                        key={step.num}
                        type="button"
                        onClick={() => setCurrentStep(step.num)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          isActive
                            ? 'border-blue-900 bg-blue-50/70 text-blue-950 font-bold shadow-xs'
                            : isDone
                            ? 'border-emerald-300 bg-emerald-50/50 text-emerald-900 font-semibold'
                            : 'border-slate-200 bg-slate-50 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isActive
                                ? 'bg-blue-900 text-white'
                                : isDone
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {isDone ? '✓' : step.num}
                          </span>
                          <span className="hidden sm:inline uppercase tracking-wider text-[11px]">Bước {step.num}</span>
                        </div>
                        <div className="text-[11px] sm:text-xs font-bold mt-1 line-clamp-1">
                          {step.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Step 1: Product Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                        BƯỚC 1: CHỌN DANH MỤC SẢN PHẨM CẦN MAY
                      </h3>
                      <p className="text-xs text-slate-500">
                        Chọn loại sản phẩm bạn muốn sản xuất để nhận tư vấn phù hợp nhất.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {productOptions.map((opt) => {
                        const isSelected = productType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setProductType(opt.id)}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              isSelected
                                ? 'border-blue-900 bg-blue-50/60 ring-2 ring-blue-900/10 shadow-xs'
                                : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 uppercase">{opt.title}</span>
                              {isSelected && <Check className="w-4 h-4 text-blue-900" />}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1">{opt.desc}</p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quantity Tier Selector */}
                    <div className="space-y-3 pt-4 border-t border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        SỐ LƯỢNG ĐẶT HÀNG DỰ KIẾN (MOQ)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {quantityOptions.map((q) => {
                          const isSelected = quantity === q.label;
                          return (
                            <button
                              key={q.label}
                              type="button"
                              onClick={() => setQuantity(q.label)}
                              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                                isSelected
                                  ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{q.label}</span>
                                <span className="text-[10px] text-slate-400 font-normal">{q.time}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Tiếp tục: Quy cách & Vải</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Fabric & Techniques */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                        BƯỚC 2: CHẤT LIỆU VẢI & KỸ THUẬT IN/THÊU
                      </h3>
                      <p className="text-xs text-slate-500">
                        Lựa chọn chất liệu và công nghệ in thêu mong muốn.
                      </p>
                    </div>

                    {/* Fabric */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Chất liệu vải mong muốn
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {fabricOptions.map((fab) => {
                          const isSelected = fabric === fab;
                          return (
                            <button
                              key={fab}
                              type="button"
                              onClick={() => setFabric(fab)}
                              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                                isSelected
                                  ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold'
                                  : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              {fab}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technique */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-200">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Kỹ thuật in ấn / thêu vi tính
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {techniqueOptions.map((tech) => {
                          const isSelected = technique === tech;
                          return (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => setTechnique(tech)}
                              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                                isSelected
                                  ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold'
                                  : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              {tech}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Sample Need */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-200">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Bạn có nhu cầu may mẫu thử nghiệm (Sample) trước không?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { val: 'yes', label: 'Có, cần may mẫu duyệt trước (3 - 5 ngày)' },
                          { val: 'no', label: 'Không, đã có mẫu duyệt sẵn vào sản xuất ngay' },
                        ].map((s) => (
                          <button
                            key={s.val}
                            type="button"
                            onClick={() => setSampleNeed(s.val)}
                            className={`p-3 rounded-xl border text-left text-xs transition-all ${
                              sampleNeed === s.val
                                ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Quay lại</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Tiếp tục: File thiết kế</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Design File & Techpack */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                        BƯỚC 3: TẢI LÊN MẪU THIẾT KẾ / TECHPACK
                      </h3>
                      <p className="text-xs text-slate-500">
                        Tải lên hình ảnh phác thảo, file AI/PDF hoặc mô tả chi tiết yêu cầu.
                      </p>
                    </div>

                    {/* Upload Box */}
                    <div className="border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl p-8 text-center bg-slate-50 transition-colors">
                      <Upload className="w-8 h-8 mx-auto text-blue-900 mb-2" />
                      <div className="text-xs font-bold text-slate-900">
                        Kéo thả file thiết kế vào đây hoặc click để chọn từ máy tính
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Hỗ trợ file: PNG, JPG, PDF, AI, PSD, ZIP (Tối đa 50MB)
                      </div>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-block mt-4 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
                      >
                        Chọn file từ thiết bị
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-900 uppercase">
                          File đã tải lên ({uploadedFiles.length}):
                        </div>
                        <div className="space-y-1.5">
                          {uploadedFiles.map((file, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                            >
                              <div className="flex items-center gap-2 text-slate-700">
                                <FileText className="w-4 h-4 text-blue-900" />
                                <span className="font-medium">{file}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notes Textarea */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Ghi chú kỹ thuật bổ sung (nếu có)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ví dụ: Cổ áo may bọc xích, hình in ngực 10x10cm, lưng in khổ A3..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Quay lại</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Tiếp tục: Thông tin nhận báo giá</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                        BƯỚC 4: THÔNG TIN LIÊN HỆ NHẬN BÁO GIÁ
                      </h3>
                      <p className="text-xs text-slate-500">
                        Bảng báo giá chi tiết và định mức vải sẽ được gửi qua Zalo / Email trong 30 phút.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Số điện thoại / Zalo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0901 234 567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Email nhận báo giá <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="brand@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase">
                          Tên thương hiệu / Công ty
                        </label>
                        <input
                          type="text"
                          placeholder="Local Brand ABC"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900 uppercase">
                        Địa chỉ nhận hàng dự kiến
                      </label>
                      <input
                        type="text"
                        placeholder="Quận 1, TP. Hồ Chí Minh"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-900">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Arden cam kết bảo mật 100% mẫu thiết kế và thông tin liên hệ của bạn theo thỏa thuận NDA.</span>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Quay lại</span>
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
                      >
                        <span>GỬI YÊU CẦU BÁO GIÁ NGAY</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Dynamic Price Summary Box (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-900">
                      <Calculator className="w-4 h-4 text-blue-900" />
                      <span>DỰ TOÁN CHI PHÍ</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
                      Tự động tính
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Sản phẩm:</span>
                      <span className="font-bold text-slate-900">{selectedProductObj.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Số lượng:</span>
                      <span className="font-bold text-slate-900">{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Chất liệu:</span>
                      <span className="font-bold text-slate-900 line-clamp-1">{fabric}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Kỹ thuật in/thêu:</span>
                      <span className="font-bold text-slate-900 line-clamp-1">{technique}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Thời gian sản xuất:</span>
                      <span className="font-bold text-blue-900">{selectedQuantityObj.time}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Đơn giá ước tính xuất xưởng:</div>
                    <div className="text-2xl font-black text-blue-900">
                      ~{estimatedUnitPrice.toLocaleString('vi-VN')} đ
                    </div>
                    <div className="text-[10px] text-slate-400">/ 1 sản phẩm hoàn thiện</div>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Đã bao gồm công cắt may và ủi hơi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Đóng gói túi nilon/túi zip chuẩn xuất xưởng</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Miễn phí hoàn tiền may mẫu khi vào đơn lớn</span>
                    </div>
                  </div>
                </div>

                {/* Direct Support */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-bold uppercase text-slate-900">Cần tư vấn trực tiếp?</div>
                  <div className="text-xs text-slate-500">Hotline kỹ thuật: <strong className="text-blue-900">0901 234 567</strong></div>
                  <div className="text-[11px] text-slate-400">Hỗ trợ Zalo 24/7</div>
                </div>
              </div>
            </div>
          ) : (
            /* Thank You Confirmation View */
            <div className="max-w-2xl mx-auto text-center py-12 space-y-6 bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                  GỬI YÊU CẦU BÁO GIÁ THÀNH CÔNG!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Cảm ơn <strong>{fullName || 'quý khách'}</strong>. Đội ngũ kỹ thuật viên của xưởng may Arden đã tiếp nhận thông tin đơn hàng <strong>{selectedProductObj.title} ({quantity})</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-2">
                <div className="font-bold text-blue-900 uppercase">Quy trình xử lý tiếp theo:</div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Chuyên viên kỹ thuật tính toán định mức vải và chi phí in/thêu.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Gửi bảng báo giá chi tiết qua Zalo / Số điện thoại <strong>{phone}</strong> trong vòng 30 phút.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Tạo yêu cầu báo giá khác
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
