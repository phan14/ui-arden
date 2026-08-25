import React from 'react';

export interface TabOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  options: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const Tabs: React.FC<TabsProps> = ({
  options,
  activeId,
  onChange,
  className = '',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3 rounded-lg',
    md: 'text-xs sm:text-sm py-2 px-4 rounded-xl min-h-[40px]',
  }[size];

  return (
    <div
      role="tablist"
      className={`flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-1 ${className}`}
    >
      {options.map((tab) => {
        const isActive = activeId === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tab-panel-${tab.id}`}
            id={`tab-btn-${tab.id}`}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${sizeStyles} ${
              isActive
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {typeof tab.count === 'number' && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
