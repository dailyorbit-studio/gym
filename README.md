# Gym Website Template

A premium, animated, multi-page gym website built with **Next.js (App Router) + Tailwind CSS v4 + Framer Motion**. Industrial red/black theme, fully responsive, SEO-ready.

Ships with **demo placeholder data** ("Forge Fitness", "Metro City", sample numbers) so it can be dropped in for any gym.

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:3000`).

## Rebranding for a client — 3 steps

### 1. Business details → `src/lib/site.ts`

This single file drives the **entire** site — navbar, footer, every page's copy, SEO
metadata, WhatsApp links and Google structured data. Edit the values at the top:

- `name`, `tagline`, `url`, `description`
- `brand.wordmark` (the two-tone logo text), `brand.caption`, `brand.hero` (the big headline words)
- `address`, `geo`, `phones`, `whatsapp`, `socials`, `hours`, `facility`, `rating`
- `mapsEmbed` / `mapsLink` (swap the coordinates, or paste the real Google Maps place embed)

Further down the same file you can edit the **programs**, **membership plans**,
**FAQs** and **testimonials**.

### 2. Photos → `public/images/`

Replace the `.webp` files with the gym's own shots, keeping the **same filenames**
(e.g. `gym-floor-wide.webp`, `athlete-deadlift.webp`). If a replacement has different
dimensions, update its `width`/`height` in `src/lib/images.ts`.

### 3. Logo & colours

- The logo is drawn in code from `brand.wordmark` — no image needed. To use a custom
  emblem instead, edit `src/components/Logo.tsx`.
- The favicon / social-share logo is `public/images/brand-logo.png` (and `src/app/icon.png`).
- Brand colours live in one place — the `@theme` block in `src/app/globals.css`
  (`--color-brand`, `--color-brand-light`, `--color-brand-dark`). Change the red there
  to re-theme the whole site.

## Build

```bash
npm run build
npm start
```

## Notes

- Prices, reviews and the address are **placeholders** — replace before going live.
- Contact-form submissions open a pre-filled WhatsApp chat (no mail backend required).
