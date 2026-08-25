/**
 * ============================================================================
 * ARDEN HEADER COMPONENT (FLATSOME CHILD THEME HEADER)
 * ============================================================================
 * WordPress / Flatsome Mapping:
 * - Template: template-parts/header/site-header.php / header.php
 * - Flatsome Header Builder:
 *   - Top Bar: HTML 1 (Hotline/Zalo), HTML 2 (Address/Opening hours)
 *   - Main Header: Logo, Primary Navigation, Search Icon, Header Button (CTA)
 *   - Mobile Drawer: Off-canvas Mobile Navigation & Contact Info
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteData';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  ArrowRight,
  Search,
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/tim-kiem');
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    {
      label: 'Dịch vụ',
      href: '/dich-vu',
      hasDropdown: true,
      subItems: [
        { label: 'Tất cả dịch vụ gia công', href: '/dich-vu', desc: 'Quy trình sản xuất trọn gói OEM/ODM' },
        { label: 'May Áo Thun Local Brand', href: '/dich-vu/may-ao-thun', desc: 'Form Boxy / Oversize 180-350 GSM' },
        { label: 'May Áo Sơ Mi Thiết Kế', href: '/dich-vu/may-ao-so-mi', desc: 'Oxford, Linen, may mí cuộn 1mm' },
        { label: 'May Quần Kaki & Jean', href: '/dich-vu/may-quan', desc: 'Đóng bọ đáy, khóa YKK, wash mềm' },
        { label: 'May Áo Khoác & Hoodie', href: '/dich-vu/may-ao-khoac', desc: 'Nỉ bông 380 GSM, Varsity phối da' },
        { label: 'Bảng Vải & Định Lượng GSM', href: '/bang-vai', desc: 'Tra cứu thành phần & ứng dụng vải' },
        { label: 'Hướng Dẫn File Techpack', href: '/huong-dan-techpack', desc: 'Tiêu chuẩn bản vẽ & may mẫu đối chứng' },
        { label: 'Năng Lực Nhà Xưởng', href: '/nang-luc-san-xuat', desc: 'Quy mô 1.000m² & 100+ máy may Juki' },
      ]
    },
    { label: 'Dự án mẫu', href: '/du-an' },
    { label: 'Báo giá', href: '/bao-gia' },
    { label: 'Hỏi đáp', href: '/faq' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Liên hệ', href: '/lien-he' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header id="main-header" className="w-full">
      {/* 1. Flatsome Top Bar (Contact & Working Hours Strip) */}
      <div className="bg-slate-900 text-white text-[11px] py-2 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{siteConfig.workingHours}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span className="truncate max-w-sm">{siteConfig.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-white hover:text-amber-400 font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Hotline xưởng: {siteConfig.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={siteConfig.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Zalo tư vấn 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`sticky top-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 ${
          scrolled ? 'shadow-sm py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" id="brand-logo" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl tracking-tighter">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-slate-950 uppercase font-sans flex items-center gap-1">
                  ARDEN
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                </span>
                <span className="text-[9px] tracking-[0.2em] font-bold text-slate-400 uppercase mt-0.5">
                  GARMENT FACTORY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
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
                    className={`px-3 py-2 text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 rounded-lg ${
                      isActive(link.href)
                        ? 'text-blue-900 bg-blue-50 font-black'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-60 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && serviceDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in duration-150">
                      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xl">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setServiceDropdownOpen(false)}
                            className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover:text-blue-900 transition-colors">
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

            {/* Right Header Actions */}
            <div className="flex items-center gap-3">
              {/* Search Toggle */}
              <Link
                href="/tim-kiem"
                className="p-2 rounded-xl text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-colors"
                aria-label="Tìm kiếm trên trang"
              >
                <Search className="w-4 h-4" />
              </Link>

              {/* Quote CTA Button */}
              <Link
                id="header-cta-quote-btn"
                href="/bao-gia"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 transition-all shadow-xs tracking-wider uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>BÁO GIÁ NHANH (30P)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Mở menu điều hướng"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 animate-in fade-in duration-150">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                        isActive(link.href)
                          ? 'text-blue-900 bg-blue-50'
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

                <div className="pt-4 mt-2 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600 px-3">
                    <Phone className="w-4 h-4 text-blue-900" />
                    <span>Hotline: <strong className="text-slate-900">{siteConfig.hotlineFormatted}</strong></span>
                  </div>
                  <Link
                    href="/bao-gia"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 rounded-xl text-center font-bold text-white bg-blue-900 hover:bg-blue-950 uppercase text-xs tracking-wider block shadow-xs"
                  >
                    Nhận báo giá may gia công
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
