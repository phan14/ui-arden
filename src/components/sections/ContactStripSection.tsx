/**
 * ============================================================================
 * ARDEN CONTACT STRIP COMPONENT
 * ============================================================================
 * Flatsome UX Builder Mapping:
 * - Element Type: Reusable UX Block
 * - Flatsome Shortcode: [block id="arden-contact-strip"]
 * - Template Path: template-parts/ux-blocks/contact-strip.php
 * - Hierarchy: Section -> Container -> Row (Flex/Grid) -> Contact Elements & Buttons
 * - Rank Math SEO: LocalBusiness Schema
 * ============================================================================
 */

import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteData';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight } from 'lucide-react';

interface ContactStripSectionProps {
  id?: string;
  className?: string;
}

export const ContactStripSection: React.FC<ContactStripSectionProps> = ({
  id = 'contact-strip',
  className = ''
}) => {
  return (
    <div
      id={id}
      aria-label="Thông tin liên hệ nhanh xưởng may"
      className={`bg-slate-900 text-white py-4 border-b border-slate-800 ${className}`}
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Hotline: {siteConfig.phone}</span>
            </a>

            <a
              href={siteConfig.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Zalo Kỹ Thuật (24/7)</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span className="truncate max-w-xs">{siteConfig.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Đang mở cửa nhận đơn hàng mới
            </span>

            <Button
              href="/bao-gia"
              variant="primary"
              size="sm"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black border-amber-500 text-[11px] py-1.5 px-3"
            >
              Báo Giá Trong 30 Phút
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
