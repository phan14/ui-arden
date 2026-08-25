import React from 'react';
import { Link } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb: React.FC<{ items: BreadcrumbItem[]; dark?: boolean }> = ({ items, dark = false }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors font-medium ${
              dark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className={`w-3.5 h-3.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`} />
              {isLast || !item.href ? (
                <span className={`font-bold ${dark ? 'text-blue-400' : 'text-slate-900'}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors font-medium ${
                    dark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
