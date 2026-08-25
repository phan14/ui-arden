/**
 * ============================================================================
 * ARDEN DESIGN SYSTEM & FLATSOME UX BUILDER SPECIFICATION
 * ============================================================================
 * Architecture:
 * - Google AI Studio React Components
 * - Flatsome Theme (Child Theme + UX Builder + UX Blocks)
 * - Semantic HTML & Rank Math SEO Optimization
 * 
 * Hierarchy:
 * Section (section.section) -> Container (div.container) -> Row (div.row) -> Columns (div.col) -> Elements
 * ============================================================================
 */

export const designSystem = {
  brand: {
    name: 'Xưởng May Arden',
    shortName: 'Arden Factory',
    themeName: 'Flatsome Child - Arden Garment B2B',
  },

  // 1. Color Palette (Flatsome Theme Options / CSS Variables)
  colors: {
    primary: {
      DEFAULT: '#0f2744', // Arden Deep Navy
      hover: '#1e3a8a',
      light: '#eff6ff',
      dark: '#0a192f',
    },
    secondary: {
      DEFAULT: '#334155', // Slate 700
      light: '#f8fafc',  // Slate 50
      border: '#e2e8f0', // Slate 200
    },
    accent: {
      amber: '#d97706',  // Amber 600 - Warm Gold highlight
      amberLight: '#fef3c7',
      emerald: '#059669', // Emerald 600 - Quality/Eco guarantee
      emeraldLight: '#d1fae5',
    },
    text: {
      heading: '#0f172a', // Slate 900
      body: '#334155',    // Slate 700
      muted: '#64748b',   // Slate 500
      light: '#ffffff',
    },
    background: {
      main: '#ffffff',
      alt: '#f8fafc',     // Section alt background
      dark: '#0f172a',    // Dark footer/banner
    }
  },

  // 2. Typography Hierarchy (Semantic & Rank Math Optimized)
  typography: {
    fontFamily: {
      heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    headings: {
      h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight',
      h2: 'text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-950 uppercase leading-snug',
      h3: 'text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 uppercase',
      h4: 'text-sm sm:text-base font-bold text-slate-900 uppercase',
      eyebrow: 'text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-900',
    },
    body: {
      large: 'text-base sm:text-lg text-slate-600 leading-relaxed',
      base: 'text-sm sm:text-base text-slate-600 leading-relaxed',
      small: 'text-xs sm:text-sm text-slate-500 leading-normal',
      micro: 'text-[11px] text-slate-400 leading-tight',
    }
  },

  // 3. Spacing & Container Math (Flatsome Standard Grids)
  layout: {
    container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    containerNarrow: 'w-full max-w-4xl mx-auto px-4 sm:px-6',
    sectionSpacing: 'py-12 sm:py-16 md:py-20',
    sectionSpacingDense: 'py-8 sm:py-12 md:py-14',
    rowGap: 'gap-6 sm:gap-8',
    borderRadius: {
      sm: 'rounded-lg',   // 8px
      md: 'rounded-xl',   // 12px
      lg: 'rounded-2xl',  // 16px
      pill: 'rounded-full', // Pills & Badges
    },
    aspectRatios: {
      hero: 'aspect-[16/9] md:aspect-[21/9]',
      card: 'aspect-[16/10]',
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
      wide: 'aspect-[16/9]',
    }
  },

  // 4. Flatsome UX Block Shortcode Mapping Registry
  uxBlocks: {
    trustBar: '[block id="arden-trust-bar"]',
    ctaBanner: '[block id="arden-cta-banner"]',
    manufacturingProcess: '[block id="arden-process-steps"]',
    moqPolicy: '[block id="arden-moq-policy"]',
    faqAccordion: '[block id="arden-faq-accordion"]',
    testimonialsSlider: '[block id="arden-testimonials-slider"]',
    contactStrip: '[block id="arden-contact-strip"]',
    certificationsBar: '[block id="arden-certifications-bar"]',
    factoryCapabilities: '[block id="arden-factory-capabilities"]',
  }
};
