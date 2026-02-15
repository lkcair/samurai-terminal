# Samurai Terminal

Frontend for institutional-grade financial dashboard.

**Live**: https://samuraiterminal.com

---

## Overview

Next.js 14 application featuring:
- SEO-optimized landing page (hero, features, pricing, live ticker)
- Terminal page skeleton (Phase 2: real-time dashboard)
- Dark mode UI (#050505 theme)
- Fully responsive design
- Framer Motion animations

---

## Tech Stack

- **Next.js 14** with TypeScript
- **Tailwind CSS v3** (dark mode)
- **Framer Motion** (animations)
- **Lucide React** (icons)

---

## Development

```bash
npm install
npm run dev    # localhost:3000
npm run build
npm start
```

---

## Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Navigation with mobile menu |
| `Hero` | Hero section with CTA |
| `FeaturesGrid` | 3-column features section |
| `LiveDataStrip` | Animated ticker (SPY, BTC, NVDA, ETH) |
| `PricingSection` | Free + Pro pricing tiers |
| `Footer` | SEO footer with links |
| `TerminalSkeleton` | Terminal placeholder (Phase 2) |

---

## Build

Production build: `npm run build`
Output: `.next/` directory

---

**© 2026 Samurai Financial Data Systems**
