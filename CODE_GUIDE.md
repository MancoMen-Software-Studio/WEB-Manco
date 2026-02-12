# MancoMen Web - Code Guide

## Architecture

### Rendering Strategy
Server Components by default. Client Components (`"use client"`) only for:
- Animation hooks (GSAP, Motion, Lenis)
- 3D scenes (React Three Fiber)
- Interactive forms
- Browser API hooks (scroll, mouse, intersection, media query)

### Animation Pipeline
1. **Lenis** drives smooth scrolling via its own RAF loop
2. **GSAP ticker** is synced to Lenis updates (see `smooth-scroll.tsx`)
3. **ScrollTrigger** updates on every Lenis scroll event
4. **Motion for React** handles page transitions and layout animations

### GSAP Plugin Registration
All GSAP plugins are registered once in `lib/gsap-config.ts`. Every file that uses GSAP must import from this module to avoid duplicate registration errors.

### 3D SSR Bypass
All React Three Fiber components are wrapped with `next/dynamic({ ssr: false })` in `components/canvas/scene-container.tsx`. This prevents WebGL APIs from being called during server rendering.

## Key Files

### lib/gsap-config.ts
Central GSAP import. Registers ScrollTrigger and SplitText plugins. All components import GSAP from here.

### lib/fonts.ts
Configures Geist Sans, Geist Mono (via `next/font/google`), and Playfair Display. Exports font variables and className helpers.

### lib/utils.ts
Exports `cn()` function combining `clsx` and `tailwind-merge` for conditional class name composition.

### lib/animations.ts
Reusable GSAP animation presets (fadeInUp, staggerChildren, splitTextReveal, etc.) used across components.

### lib/constants.ts
Route definitions, social links, metadata constants.

### lib/types.ts
Shared TypeScript interfaces for services, projects, navigation, etc.

### lib/metadata.ts
SEO metadata generator for consistent Open Graph and meta tag configuration.

### lib/validation.ts
Zod schemas for contact form validation.

### components/layout/providers.tsx
Composes all context providers (Lenis smooth scroll).

### components/layout/smooth-scroll.tsx
Initializes Lenis smooth scrolling and syncs with GSAP ScrollTrigger.

### components/layout/page-wrapper.tsx
Wraps pages with Motion for React enter/exit animations.

## Design System

### Spacing
- Section vertical padding: 160px desktop / 96px mobile
- Container: max-w-7xl (1280px), px-6 mobile, px-12 tablet+

### Components
- Buttons: h-[52px], rounded-full, font-medium
- Cards: bg-black-muted, border-gray-800, rounded-2xl, hover:border-electric
- Default easing: cubic-bezier(0.16, 1, 0.3, 1)

### Color Tokens
Defined in globals.css @theme block. See CLAUDE.md for the full palette.

### Typography Scale
- Display (hero): Playfair Display, text-6xl to text-8xl
- H1: Playfair Display, text-5xl to text-7xl
- H2: Geist Sans, text-3xl to text-5xl, font-bold
- H3: Geist Sans, text-xl to text-2xl, font-semibold
- Body: Geist Sans, text-base to text-lg
- Code/Badge: Geist Mono, text-sm

## Data Flow
Static data in `data/` files is imported directly by Server Components. No API layer needed for the initial build. Services and projects use slug-based routing with `generateStaticParams`.
