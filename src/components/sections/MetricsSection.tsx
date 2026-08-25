import React from 'react';
import { Container } from '../layout/Container';
import { MetricItem } from '../../types';

export interface MetricsSectionProps {
  metrics: MetricItem[];
  className?: string;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  metrics,
  className = '',
}) => {
  return (
    <section
      aria-label="Số liệu thống kê năng lực sản xuất"
      className={`py-8 sm:py-10 bg-white border-b border-slate-200 shadow-2xs ${className}`}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {metrics.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center text-center p-3 ${
                index > 0 ? 'pt-4 sm:pt-3' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mt-1">
                {item.label}
              </div>
              {item.sublabel && (
                <div className="text-[11px] text-slate-500 mt-0.5">{item.sublabel}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
