import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteData';
import { Menu, X, ChevronDown, Phone, Sparkles, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/#gioi-thieu' },
    {
      label: 'Dịch vụ',
      href: '/dich-vu',
      hasDropdown: true,
      subItems: [
        { label: 'Tổng quan dịch vụ', href: '/dich-vu', desc: '5 nhóm dịch vụ may gia công trọn gói' },
        { label: 'May Áo Thun (Chi tiết)', href: '/dich-vu/may-ao-thun', desc: 'Chuyên may áo thun Local Brand 180-350 GSM' },
      ]
    },
    { label: 'Xưởng may', href: '/#xuong-may' },
    { label: 'Dự án', href: '/du-an' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Tuyển dụng', href: '/tuyen-dung' },
    { label: 'Liên hệ', href: '/lien-he' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    if (href.startsWith('/#')) return false;
    return currentPath.startsWith(href);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" id="brand-logo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl tracking-tighter">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-slate-950 uppercase font-sans flex items-center gap-1">
                ARDEN
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-slate-400 uppercase mt-0.5">
                GARMENT FACTORY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServiceDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServiceDropdownOpen(false)}
              >
                <Link
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 rounded-lg ${
                    isActive(link.href)
                      ? 'text-blue-600 bg-blue-50/70 font-extrabold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-60 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && serviceDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 shadow-xl z-50 animate-in fade-in duration-150">
                    <div className="bg-white border border-slate-200/80 rounded-xl p-2 shadow-2xl shadow-slate-900/10">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setServiceDropdownOpen(false)}
                          className="block p-3 rounded-lg hover:bg-blue-50/60 transition-colors group"
                        >
                          <div className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                            {sub.label}
                          </div>
                          {sub.desc && (
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {sub.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Button & Phone */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold tracking-tight text-slate-800">{siteConfig.hotlineFormatted}</span>
            </a>

            <Link
              id="header-cta-quote-btn"
              href="/bao-gia"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 active:scale-98 tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>NHẬN BÁO GIÁ NGAY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/bao-gia"
              className="sm:hidden px-3.5 py-1.5 rounded-lg text-[11px] font-bold text-white bg-blue-600 uppercase tracking-wider"
            >
              Báo giá
            </Link>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider ${
                      isActive(link.href)
                        ? 'text-blue-900 bg-blue-50/80'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-1 my-1 border-l-2 border-slate-200 ml-3">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:text-blue-900"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 px-3">
                  <Phone className="w-4 h-4 text-blue-900" />
                  <span>Hotline: <strong className="text-slate-900">{siteConfig.hotlineFormatted}</strong></span>
                </div>
                <Link
                  href="/bao-gia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-sm text-center font-bold text-white bg-blue-900 hover:bg-blue-800 uppercase text-xs tracking-widest shadow-md"
                >
                  Nhận báo giá may gia công
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
