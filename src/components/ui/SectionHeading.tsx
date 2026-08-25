import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
          dark
            ? 'bg-blue-900/40 text-blue-300 border border-blue-800/60'
            : 'bg-blue-50 text-blue-900 border border-blue-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-sans ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          dark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
