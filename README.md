# RAW Fx STUDIO

Premium cinematic photography portfolio built with Next.js 15, Tailwind CSS v4, TypeScript, GSAP, and shadcn/ui structure.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack

- **Next.js 15** — App Router + React 19
- **Tailwind CSS v4** — Utility-first styling
- **TypeScript** — Type safety
- **GSAP + ScrollTrigger** — Motion animations
- **shadcn/ui** — Component structure (`/components/ui`)

## Structure

```
src/
├── app/
│   ├── globals.css          # Design system (gold/ink theme)
│   ├── layout.tsx           # Root layout + fonts
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ui/
│       └── full-screen-scroll-fx.tsx   # GSAP scroll component
└── lib/
    └── utils.ts             # shadcn cn() utility
```
