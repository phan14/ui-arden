import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'slate' | 'highlight' | 'navy';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverEffect = false,
  padding = 'md',
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  const variantStyles = {
    white: 'bg-white border-slate-200 text-slate-800',
    slate: 'bg-slate-50 border-slate-200 text-slate-800',
    highlight: 'bg-blue-50/70 border-blue-200 text-blue-950',
    navy: 'bg-slate-900 border-slate-800 text-white',
  }[variant];

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  }[padding];

  const hoverClasses = hoverEffect
    ? 'transition-all duration-200 hover:border-blue-900 hover:shadow-md'
    : 'shadow-xs';

  return (
    <Component
      className={`rounded-2xl border ${variantStyles} ${paddingStyles} ${hoverClasses} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
