This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

1. Deployment Instructions
   Install Prisma & Client
   Create a netlify.toml at the root of your project
   Set Environment Variables in Netlify
   Create a file: lib/prisma.ts
   Push Code to GitHub
   Connect Repo to Netlify
2. Tech Decisions
   Used Next.js 15 App Router for full-stack capabilities and modern routing.
   Chose Supabase (PostgreSQL) for an open-source, scalable backend with real-time support.
   Integrated Prisma ORM for type-safe and efficient database access.
   Deployed the project on Netlify for seamless CI/CD and serverless function support.
   Created API endpoints using Next.js Server Functions under the app/api/ directory.
   Handled errors safely with type-checked catch (err: unknown) blocks.
   Implemented Prisma client reuse pattern to avoid connection issues in serverless.
   Managed sensitive data using .env and Netlify environment variables.
   (Optional) Used Tailwind CSS for fast, responsive, utility-first styling.
   Organized code with a modular file-based routing structure and reusable components.

 3. Would have implemented the additional features.
    Used a few more visual UI components and tweaks.
      
