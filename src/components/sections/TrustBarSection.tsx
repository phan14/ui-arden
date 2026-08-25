/**
 * ============================================================================
 * ARDEN TRUST BAR COMPONENT
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: Reusable UX Block
 * - Flatsome Shortcode: [block id="arden-trust-bar"]
 * - Template Path: template-parts/ux-blocks/trust-bar.php
 * - Hierarchy: Section -> Container -> Row (4 Columns) -> Icon Box Elements
 * - Rank Math SEO: Organization Trust & Service Highlights
 * ============================================================================
 */

import React from 'react';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { trustBarData } from '../../data/siteData';
import { TrustBarItem } from '../../types';
import {
  PackageCheck,
  ShieldCheck,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';

interface TrustBarSectionProps {
  id?: string;
  items?: TrustBarItem[];
  className?: string;
  variant?: 'light' | 'white' | 'dark';
}

export const TrustBarSection: React.FC<TrustBarSectionProps> = ({
  id = 'trust-bar',
  items = trustBarData,
  className = '',
  variant = 'white'
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-blue-900" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-900" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-900" />;
    }
  };

  const bgClasses = {
    white: 'bg-white border-y border-slate-200',
    light: 'bg-slate-50 border-y border-slate-200',
    dark: 'bg-slate-900 text-white border-y border-slate-800'
  };

  return (
    <section
      id={id}
      aria-label="Cam kết chất lượng và năng lực Arden"
      className={`py-8 sm:py-10 transition-colors ${bgClasses[variant]} ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
