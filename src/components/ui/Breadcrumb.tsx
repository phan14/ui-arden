import React from 'react';
import { Link } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  homeLabel?: string;
  homeHref?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  homeLabel = 'Trang chủ',
  homeHref = '/',
  className = '',
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap py-1 ${className}`}
    >
      <ol className="flex items-center gap-1.5 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
        <li
          className="inline-flex items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href={homeHref}
            className="flex items-center gap-1 text-slate-600 hover:text-blue-900 transition-colors"
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span itemProp="name">{homeLabel}</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <li
              key={index}
              className="inline-flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="text-slate-900 font-semibold"
                  aria-current={isLast ? 'page' : undefined}
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-blue-900 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
