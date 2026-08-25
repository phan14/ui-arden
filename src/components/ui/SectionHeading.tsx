import React from 'react';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleLevel?: 'h1' | 'h2' | 'h3';
  className?: string;
  badgeIcon?: React.ReactNode;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  titleLevel = 'h2',
  className = '',
  badgeIcon,
  dark = false,
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const HeadingTag = titleLevel;

  return (
    <div className={`flex flex-col max-w-3xl space-y-2.5 ${alignClass} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs ${
            dark
              ? 'bg-blue-950/80 text-blue-300 border border-blue-800'
              : 'bg-white text-blue-900 border border-blue-200'
          }`}
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

      <HeadingTag
        className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.2] ${
          dark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          className={`text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-2xl ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
