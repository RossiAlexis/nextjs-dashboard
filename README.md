# Next.js Dashboard

A financial dashboard app covering authentication, server actions,
streaming/suspense, and data fetching straight from a Postgres database —
invoices, customers, and revenue, all in one place.

🔗 **Live demo:** [nextjs-dashboard-eight-pearl-79.vercel.app](https://nextjs-dashboard-eight-pearl-79.vercel.app)

## Tech stack

- **[Next.js](https://nextjs.org/)** (App Router) — React framework, server components & server actions
- **[React](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** — styling
- **[NextAuth.js](https://authjs.dev/)** — authentication
- **[Neon](https://neon.tech/)** — serverless Postgres, running on the edge
- **[postgres.js](https://github.com/porsager/postgres)** — Postgres client
- **[Zod](https://zod.dev/)** — schema validation
- **[Vercel](https://vercel.com/)** — hosting & deployment

## Getting started

```bash
pnpm install
pnpm dev
```

You'll need a `.env` file with a `POSTGRES_URL` pointing at a Neon database,
plus the NextAuth environment variables (see `auth.config.ts` / `auth.ts`).

## Scripts

- `pnpm dev` — start the dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint
