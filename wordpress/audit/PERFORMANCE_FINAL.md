# Performance final audit

Status: **PASS for production readiness; real Core Web Vitals require production field/lab testing.**

- Arden CSS: `arden.css` ~27.8 KB, `pilot-native.css` ~2.7 KB, `react-pages.css` ~55.7 KB only on matching converted Pages, and `forms.css` ~2.0 KB.
- Arden JS: one dependency-free interaction file ~1.8 KB; no React/Vite runtime, jQuery plugin or animation library was added.
- Fonts: one Google Fonts request loads Plus Jakarta Sans 400/500/600/700/800 and Be Vietnam Pro 600/700/800/900. Flatsome Google-font loading must remain disabled to avoid duplication.
- Migrated images retain attachment dimensions and responsive WordPress image behavior. Non-hero content is lazy-loaded; avatar dimensions are known. Keep the above-the-fold hero optimized and do not lazy-load its final production rendition.
- CLS readiness: WordPress attachment metadata/aspect ratios, stable header space and fixed control sizing reduce layout shifts.
- INP readiness: interactions are small native listeners with no framework hydration. Sticky mobile CTA and forms require production-device confirmation.
- LCP readiness: compress the final hero, serve WebP/AVIF through WordPress/CDN where available, preload only the final hero/font resources justified by a production waterfall.

No synthetic Lighthouse score or production CWV claim is made from localhost.
