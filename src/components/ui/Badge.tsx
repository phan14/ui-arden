import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-blue-900 text-white border-transparent',
    secondary: 'bg-blue-50 text-blue-900 border-blue-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    warning: 'bg-amber-50 text-amber-900 border-amber-200',
    amber: 'bg-amber-400 text-slate-950 border-amber-400 font-black',
    outline: 'bg-transparent text-slate-700 border-slate-300',
  }[variant];

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 rounded-md gap-1',
    md: 'text-xs px-2.5 py-1 rounded-lg gap-1.5',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-bold uppercase tracking-wider border shadow-xs ${variantStyles} ${sizeStyles} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
};
