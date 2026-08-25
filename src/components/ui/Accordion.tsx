import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
  isOpen,
  onToggle,
  icon,
  badge,
  className = '',
}) => {
  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className={`border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all ${className}`}>
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-slate-50 min-h-[48px]"
        >
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-tight text-slate-900 leading-snug">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {badge && (
              <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                {badge}
              </span>
            )}
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-900 text-white' : 'text-slate-600'}`}>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </button>
      </h3>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="p-4 sm:p-5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 bg-slate-50/50"
        >
          {children}
        </div>
      )}
    </div>
  );
};
