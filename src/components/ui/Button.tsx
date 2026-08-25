import React from 'react';
import { Link } from '../../context/RouterContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  className = '',
  ...rest
}) => {
  const variantStyles = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 border border-blue-900 shadow-sm active:translate-y-0.5',
    secondary: 'bg-blue-50 text-blue-950 hover:bg-blue-100 border border-blue-200 active:translate-y-0.5',
    outline: 'bg-transparent text-slate-800 hover:bg-slate-50 border border-slate-300 active:translate-y-0.5',
    white: 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs active:translate-y-0.5',
    amber: 'bg-amber-400 text-slate-950 hover:bg-amber-300 border border-amber-400 font-black shadow-sm active:translate-y-0.5',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 border-transparent',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-xl gap-1.5 font-bold uppercase tracking-wider',
    md: 'text-xs sm:text-sm px-5 py-2.5 rounded-xl gap-2 font-bold uppercase tracking-wider min-h-[44px]',
    lg: 'text-sm px-6 py-3.5 rounded-xl gap-2.5 font-black uppercase tracking-widest min-h-[48px]',
  }[size];

  const baseClasses = `inline-flex items-center justify-center transition-all duration-150 cursor-pointer ${
    fullWidth ? 'w-full' : ''
  } ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...rest}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
};
