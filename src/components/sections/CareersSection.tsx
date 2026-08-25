import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CareerItem } from '../../types';
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Phone,
  Mail,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

export interface CareersSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  jobs: CareerItem[];
  className?: string;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  badge = 'GIA NHẬP ĐỘI NGŨ ARDEN',
  title = 'VỊ TRÍ TUYỂN DỤNG TẠI XƯỞNG MAY',
  subtitle = 'Chúng tôi liên tục chào đón những người thợ may lành nghề, kỹ thuật viên rập và chuyên viên QC tận tâm cùng xây dựng xưởng may hàng đầu TP.HCM.',
  jobs,
  className = '',
}) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <section
      id="careers-section"
      aria-labelledby="careers-heading"
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

        <div className="space-y-4 max-w-4xl mx-auto">
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
                      <Badge variant="primary" size="sm">{job.department}</Badge>
                      <Badge variant="neutral" size="sm">{job.type}</Badge>
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
                    <Button
                      onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                      variant={isExpanded ? 'outline' : 'primary'}
                      size="sm"
                    >
                      {isExpanded ? 'ĐÓNG CHI TIẾT' : 'XEM MÔ TẢ & ỨNG TUYỂN'}
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-200 bg-white space-y-4 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Mô tả công việc:</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{job.desc}</p>
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
                      <Button
                        href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                        variant="primary"
                        size="sm"
                        iconLeft={<Phone className="w-3.5 h-3.5" />}
                      >
                        Gọi Hotline Tuyển Dụng
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
