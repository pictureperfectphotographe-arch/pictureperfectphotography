# Picture Perfect Photographe — Official Website

> Contemporary editorial photography and cinematic filmmaking studio based in **Madhapur, Hyderabad**, serving couples and families across India since 2016.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## 📸 Overview

This repository contains the production website for **Picture Perfect Photographe**, built to exact pixel-level fidelity matching the approved editorial photography design direction.

### Key Highlights
- **Art-Directed Typography System:** Features monumental display headings in **Anton**, expressive accent phrases in **Bodoni Moda Italic**, and clean editorial metadata in **DM Sans**.
- **Floating Hero Collage:** Asymmetric photographic framing around the signature brand wordmark with smooth entrance styling.
- **Service Discovery (5 Core Disciplines):** Weddings, Pre-Weddings, Maternity & Seemantham, Baby & Cradle Ceremonies, and Events & Family.
- **Asymmetric Portfolio Masonry:** Filterable gallery (`ALL`, `WEDDINGS`, `PRE-WEDDINGS`, `MATERNITY`, `BABY`, `EVENTS`) with interactive full-screen Lightbox.
- **Cinematic Films Section:** 16:9 film previews with responsive YouTube modal playback.
- **Interactive Production Accordion:** Candid Photography, Videography & Cinematic Films, Drone Coverage, Albums & Printing, and Event Coverage.
- **Process Timeline:** Clean 4-step workflow connecting line (`Enquire` → `Plan` → `Capture` → `Deliver`).
- **Lead Capture & WhatsApp Integration:** Direct WhatsApp quotation link (`+91 8919265544`) with structured event parameters so leads are never lost.
- **Oversized Typographic Footer:** Architectural footer with verified business details and social channels.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Editorial SVGs
- **Fonts:** Google Fonts via `@import` & `next/font` (Anton, Bodoni Moda, DM Sans)
- **Automation / QA:** Headless Chromium + `puppeteer-core`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20 or higher
- [npm](https://www.npmjs.com/) v10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/pictureperfectphotographe-arch/pictureperfectphotography.git
cd pictureperfectphotography

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Architecture

```
src/
├── app/
│   ├── layout.tsx             # Root layout, Google Fonts & OpenGraph metadata
│   ├── page.tsx               # Homepage matching approved reference UI
│   ├── globals.css            # Tailwind CSS v4 tokens & typography utility classes
│   ├── about/                 # Studio story, team & production capabilities
│   ├── services/              # Services overview & equipment directory
│   │   └── [slug]/            # Dedicated service deep-dives (Weddings, Maternity, etc.)
│   ├── portfolio/             # Filterable photo archive with Lightbox
│   ├── films/                 # Cinematic wedding films archive
│   ├── reviews/               # Client reviews & Google Business feedback
│   ├── contact/               # Studio location, WhatsApp chat & quotation form
│   ├── privacy/               # Confidentiality & copyright terms
│   └── terms/                 # Booking policies & deliverables
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Two-line brand mark, nav & mobile drawer
│   │   └── Footer.tsx         # Oversized display wordmark & contact columns
│   ├── sections/
│   │   ├── HeroCollage.tsx    # Floating 5-photo collage hero
│   │   ├── Philosophy.tsx     # Editorial brand statement
│   │   ├── ServiceDiscovery.tsx # 5-column vertical photo cards
│   │   ├── FeaturedGallery.tsx# Asymmetric masonry with category filter
│   │   ├── CinematicFilms.tsx # 4-column film thumbnail strip
│   │   ├── OfferingsAccordion.tsx # Typographic accordion + camera portrait
│   │   ├── ProcessTimeline.tsx# 4-stage process wave
│   │   └── LeadEnquiry.tsx    # High-contrast charcoal lead quote form
│   └── ui/
│       ├── Lightbox.tsx       # Accessible full-screen photo viewer
│       ├── VideoModal.tsx     # Clean video player popup
│       └── SocialIcons.tsx    # Pixel-perfect social SVGs
├── data/
│   ├── site.ts                # Confirmed business details, phone, email & socials
│   ├── services.ts            # Core services & production offerings
│   ├── projects.ts            # Portfolio image metadata & categories
│   ├── films.ts               # Approved YouTube cinematic wedding films
│   └── reviews.ts             # Client feedback & Google reviews
└── public/
    └── images/                # High-resolution original photography
```

---

## 📍 Business Profile

- **Brand:** Picture Perfect Photographe
- **Established:** 2016
- **Base Studio:** Madhapur, Hyderabad, Telangana, India
- **Travel Coverage:** Available Pan-India
- **WhatsApp / Phone:** [+91 8919265544](https://wa.me/918919265544)
- **Email:** [pictureperfectphotographe@gmail.com](mailto:pictureperfectphotographe@gmail.com)
- **Instagram:** [@pictureperfectphotographe](https://www.instagram.com/pictureperfectphotographe/)
- **YouTube:** [@Pictureperfectphotographe](https://www.youtube.com/@Pictureperfectphotographe)
- **Google Business:** [Google Profile](https://share.google/tDO6SchxhahxFcaMf)
- **LinkedIn:** [Srujan Patha](https://www.linkedin.com/in/srujan-patha-2924533a7/)

---

## 📄 License

© 2026 Picture Perfect Photographe. All rights reserved.
