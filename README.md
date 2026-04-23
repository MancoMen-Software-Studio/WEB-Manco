# MancoMen Software Studio

**[mancomen.com](https://mancomen.com)**

MancoMen Software Studio is an independent software studio building products that reveal the structure of human behavior. This repository contains the source code for the official studio website.

---

## About

MancoMen was founded in Bogotá, Colombia by Juan Martinez. The studio's first and flagship product is **Nexus** — a mobile-first behavioral modeling platform that maps personal change as a living graph.

The website serves as the central identity and communication hub of the studio: product presentation, investor outreach, early access signups, and direct contact.

---

## Stack

- **Framework** — Next.js 16 (App Router, Turbopack)
- **Language** — TypeScript strict
- **Styling** — Tailwind CSS 4
- **Animation** — GSAP + ScrollTrigger, Lenis (smooth scroll), Motion for React
- **3D / Canvas** — React Three Fiber, Three.js, custom Canvas 2D (node network)
- **Fonts** — Space Grotesk (display), Geist Sans (body), Geist Mono (code), Blanka (logo)
- **Email** — Resend
- **Deploy** — Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Verified sender domain in Resend |
| `CONTACT_EMAIL` | Destination for contact form submissions |

---

## Project Structure

```
app/                  # Next.js App Router pages
components/
  atoms/              # Base UI elements (Button, Heading, Badge...)
  molecules/          # Composed UI (SectionHeader, FormField, StatBlock...)
  organisms/          # Full sections (HeroHome, Navbar, Footer...)
  canvas/             # Three.js + Canvas 2D components
  layout/             # Providers, SmoothScroll, PageWrapper
data/                 # Content layer (company, projects, services, navigation)
hooks/                # Custom React hooks
lib/                  # Config, utilities, constants, fonts, types
public/
  fonts/              # Blanka typeface
  screenshots/        # Nexus app screenshots
  videos/             # Product demo video
  visuals/            # Brand assets
```

---

## Deployment

Deployed automatically to Vercel on every push to `main`.

Make sure the environment variables above are configured in the Vercel project settings before deploying.

---

## Contact

**Juan Martinez** — Founder, MancoMen Software Studio  
macomenstudio@icloud.com  
[linkedin.com/in/juansebastianmartinezmarin](https://www.linkedin.com/in/juansebastianmartinezmarin/)

---

&copy; 2026 MancoMen Software Studio. Bogotá, Colombia.
