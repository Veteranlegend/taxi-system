# Direct Taxi Lebanon

A production taxi lead-generation system built for a private driver operating across Lebanon. Converts search traffic into WhatsApp bookings through a structured, conversion-optimised flow.

**Live site:** [directtaxilebanon.com](https://www.directtaxilebanon.com)

---

## Overview

Customers land on the site, select their service area, fill in trip details, and are routed directly to WhatsApp with a pre-filled booking message — no app, no dispatcher, no friction.

The system supports airport transfers, intercity rides, and private tours across Beirut, Tripoli, Batroun and surrounding areas.

---

## Features

- **WhatsApp booking flow** — pre-filled messages with zone, destination, notes and price estimate
- **Price estimator** — distance-based fare calculator with route lookup
- **Arabic / English** — full bilingual support with RTL layout switching
- **Zone-based routing** — each city has its own landing page and booking flow
- **SEO optimised** — 100/100 SEO on PageSpeed Insights, FAQPage JSON-LD schema, per-page OpenGraph images
- **Performance** — 95/100 Performance score on mobile (PageSpeed Insights)
- **Google Ads integration** — conversion tracking tag installed, campaign running

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |
| i18n | Custom typed translation system |
| Analytics | Google Ads conversion tracking |

---

## Architecture

```
config/          — static data (zones, prices, routes)
constants/       — routes, WhatsApp message templates
types/           — shared TypeScript types
services/        — business logic (zone lookup, WhatsApp URL builder)
viewModels/      — UI-ready data transformations
components/      — UI components (no business logic)
app/             — Next.js pages (thin composition layer)
translations/    — en.ts + ar.ts with full type safety
```

Strict separation of concerns: no business logic in components, no direct config access from UI.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with service area selector |
| `/beirut-taxi` | Beirut zone landing page |
| `/tripoli-taxi` | Tripoli zone landing page |
| `/batroun-taxi` | Batroun zone landing page |
| `/airport-transfer-north-lebanon` | Airport transfer hub for North Lebanon |
| `/price-estimate` | Standalone fare estimator |
| `/request` | Generic ride request form |

---

## Performance

Tested on PageSpeed Insights (mobile, April 2026):

- Performance: **95 / 100**
- Accessibility: **96 / 100**
- Best Practices: **100 / 100**
- SEO: **100 / 100**

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
