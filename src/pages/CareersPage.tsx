import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTASection } from '../components/ui/CTASection';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Award,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Building,
  Check
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: 'tho-may-mau',
      title: 'Thợ may mẫu đối chứng & Rập thử',
      department: 'Phòng Kỹ thuật & Mẫu',
      location: 'Quận Tân Phú, TP.HCM',
      type: 'Toàn thời gian',
      salary: '10.000.000 - 15.000.000 VNĐ',
      desc: 'May hoàn thiện các mẫu áo thun, sơ mi, quần, áo khoác theo tài liệu rập vi tính để làm mẫu đối chứng cho khách hàng duyệt.',
      requirements: [
        'Kinh nghiệm từ 2 năm trở lên ở vị trí may mẫu hoặc may chuyền cao cấp.',
        'Sử dụng thành thạo các loại máy may công nghiệp 1 kim, vắt sổ, kansai, máy bọc xích.',
        'Cẩn thận, tỉ mỉ, có mắt thẩm mỹ về đường may và form dáng.',
      ],
      benefits: [
        'Lương cơ bản + Thưởng hiệu suất đơn hàng.',
        'Đóng BHXH, BHYT, BHTN theo quy định nhà nước.',
        'Thưởng lễ tết, lương tháng 13, du lịch thường niên.',
      ],
    },
    {
      id: 'qc-kiem-hang',
      title: 'Nhân viên QC Kiểm hàng dệt may',
      department: 'Phòng Quản lý chất lượng',
      location: 'Quận Tân Phú, TP.HCM',
      type: 'Toàn thời gian',
      salary: '8.000.000 - 12.000.000 VNĐ',
      desc: 'Kiểm soát chất lượng vải đầu vào (IQC), kiểm tra quy trình may ráp trên chuyền (IPQC) và kiểm định 100% thành phẩm trước khi đóng gói (FQC).',
      requirements: [
        'Kinh nghiệm từ 1 năm trong ngành kiểm định chất lượng may mặc.',
        'Nắm vững quy chuẩn thông số đo, độ lệch màu, độ bền mực in và kỹ thuật cắt chỉ thừa.',
        'Tính tình trung thực, nghiêm túc, có tinh thần trách nhiệm cao.',
      ],
      benefits: [
        'Môi trường làm việc năng động, chuyên nghiệp.',
        'Được đào tạo nâng cao kỹ năng quản lý chuyền may.',
        'Hỗ trợ cơm trưa, phụ cấp chuyên cần.',
      ],
    },
    {
      id: 'ky-thuat-rap',
      title: 'Kỹ thuật viên ra rập vi tính Gerber / Lectra',
      department: 'Phòng Phát triển sản phẩm',
      location: 'Quận Tân Phú, TP.HCM',
      type: 'Toàn thời gian',
      salary: '12.000.000 - 18.000.000 VNĐ',
      desc: 'Thiết kế rập vi tính từ hình ảnh hoặc bản vẽ phác thảo của khách hàng, nhảy size (grading) và lập sơ đồ giác mẫu tự động tiết kiệm vải.',
      requirements: [
        'Sử dụng thành thạo phần mềm Gerber AccuMark hoặc Lectra Modaris.',
        'Hiểu sâu về cấu trúc form áo thời trang Streetwear (Oversize, Boxy, Drop-shoulder).',
        'Khả năng tính toán định mức vải chính xác.',
      ],
      benefits: [
        'Lương cạnh tranh thỏa thuận theo năng lực.',
        'Làm việc cùng các Local Brand hàng đầu.',
        'Đầy đủ chế độ bảo hiểm và phúc lợi cao cấp.',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/80 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Tuyển dụng' }]} />
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>GIA NHẬP ĐỘI NGŨ ARDEN FACTORY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-950">
              CƠ HỘI NGHỀ NGHIỆP TẠI ARDEN
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Arden liên tục chào đón những người thợ may lành nghề, kỹ thuật viên rập và chuyên viên QC tận tâm cùng xây dựng xưởng may thời trang hàng đầu TP.HCM.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Jobs List */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <Container>
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 border-b border-slate-200 pb-3">
              VỊ TRÍ ĐANG TUYỂN DỤNG
            </h2>

            <div className="space-y-4">
              {jobs.map((job) => {
                const isExpanded = selectedJob === job.id;
                return (
                  <div
                    key={job.id}
                    className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-blue-900 shadow-xs"
                  >
                    <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase">
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-900 text-white tracking-wider">{job.department}</span>
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-700">{job.type}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-tight">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-xs"
                        >
                          {isExpanded ? 'ĐÓNG CHI TIẾT' : 'XEM MÔ TẢ & ỨNG TUYỂN'}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="p-6 sm:p-7 pt-0 border-t border-slate-200 bg-white space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Mô tả công việc:</h4>
                          <p className="text-xs text-slate-600 mt-1">{job.desc}</p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Yêu cầu ứng viên:</h4>
                          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-1">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Quyền lợi & Chế độ đãi ngộ:</h4>
                          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1 mt-1">
                            {job.benefits.map((ben, bIdx) => (
                              <li key={bIdx}>{ben}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                          <span className="text-blue-950 font-medium">Nộp hồ sơ trực tiếp tại xưởng hoặc gửi CV qua Email: <strong>tuyendung@arden.vn</strong></span>
                          <a
                            href="tel:0901234567"
                            className="px-4 py-2 rounded-xl bg-blue-900 text-white font-bold uppercase tracking-wider shrink-0 hover:bg-blue-800 transition-colors"
                          >
                            Gọi Hotline Tuyển Dụng
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Work Culture & Benefits */}
      <section className="py-14 sm:py-18 bg-slate-100/50 border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">
              MÔI TRƯỜNG LÀM VIỆC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
              VÌ SAO BẠN NÊN LÀM VIỆC TẠI ARDEN?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Chúng tôi coi trọng từng đường kim mũi chỉ và sự đóng góp của từng người thợ may.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Thu nhập xứng đáng', desc: 'Lương thưởng minh bạch, trả lương đúng ngày mùng 5 hàng tháng.' },
              { title: 'Máy móc hiện đại', desc: '100% máy may tự động Juki Nhật Bản, xưởng có máy lạnh mát mẻ.' },
              { title: 'Đầy đủ bảo hiểm', desc: 'Đóng BHXH, BHYT, BHTN và chế độ thai sản, ốm đau đầy đủ.' },
              { title: 'Cơ hội thăng tiến', desc: 'Lộ trình thăng tiến rõ ràng lên vị trí Quản lý chuyền, Tổ trưởng.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection
        title="GIA NHẬP ĐỘI NGŨ THỢ MAY CHUYÊN NGHIỆP ARDEN"
        subtitle="Liên hệ phòng nhân sự qua hotline 0901 234 567 để trao đổi và phỏng vấn trực tiếp tại xưởng."
      />
    </div>
  );
};
