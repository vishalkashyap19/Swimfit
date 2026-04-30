# 🌊 Swimfit — Next.js App

Full-stack swimming academy website built with **Next.js 15 App Router**, styled with **Tailwind CSS v4**, animated with **Framer Motion**, with server actions powered by **Resend** for email and **Zod** for validation.

## Stack
| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Resend | Email delivery |
| Zod | Schema validation |
| TypeScript | Type safety |

## Pages
- `/` — Home (hero, stats, coaches, testimonials, CTA)
- `/programs` — Filterable coaching programs with batch times
- `/coaches` — Team grid + `/coaches/[slug]` dynamic coach profiles
- `/facilities` — Pool specs, facility cards, amenities
- `/shop` — Product catalogue by category
- `/pool-party` — Pricing packages + add-ons + booking
- `/contact` — Form (server action → Resend email) + map + hours

## Getting Started

```bash
npm install
```

Create `.env.local`:
```
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=info@swimfit.com
```

Run dev server:
```bash
npm run dev
```

## Email Setup
1. Sign up at [resend.com](https://resend.com) — free tier: 3,000 emails/month
2. Add your domain (or use the sandbox for testing)
3. Paste your API key into `.env.local`

## Deployment (Vercel)
```bash
npx vercel --prod
```
Add env vars in Vercel dashboard → Settings → Environment Variables.
