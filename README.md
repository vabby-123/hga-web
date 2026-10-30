# Harvey Gill & Associates — website

Next.js (App Router) · React · TypeScript · Tailwind CSS 3 · lucide-react. Fonts (Playfair Display, Inter) are self-hosted via `next/font/local`.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (canonical/sitemap) and, optionally, `CONTACT_WEBHOOK_URL` (contact form delivery).

## Where things live
- `app/` routes: `/`, `/about`, `/services` + six service pages, `/insights` + `/insights/[slug]`, `/gallery`, `/contact`, `/api/contact`, sitemap, robots.
- `components/` reusable UI (Header, ServicesDropdown, MobileMenu, Footer, Hero, InternalHero, ServicePage, ...).
- `lib/data/` all content: `services.ts`, `insights.ts`, `gallery.ts`, `leadership.ts`, `stats.ts`, `approach.ts`.
- `tailwind.config.ts` + `app/globals.css` design tokens (colors, containers, eyebrow/label styles).

## Content still to supply
Verified contact details (`components/ContactDetails.tsx`), leadership names/portraits (`lib/data/leadership.ts`), gallery photography (`lib/data/gallery.ts`, files in `public/gallery`), real logo (`components/Logo.tsx`), and real articles (`lib/data/insights.ts` holds sample copy).
