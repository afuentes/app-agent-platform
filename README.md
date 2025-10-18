# Cloudflare AI SAAS Stack

**Demo:** [Live Demo](https://cloudflare-ai-saas-stack.vijaynandwani.workers.dev/)

A modern starter template for building AI SAAS applications on Cloudflare using:

**Backend:**

- **Hono** (API/backend with ultra-fast routing)
- **Drizzle ORM** (type-safe database queries)
- **Better Auth** (authentication with Google OAuth & email/password)
- **Zod** (schema validation)
- **Cloudflare D1 Database and Workers** (serverless deployment)
- **Vercel AI SDK** (AI integration with Cloudflare Worker AI binding)

**Frontend:**

- **React + Vite** (frontend with hot reload)
- **Tanstack Router** (type-safe routing)
- **Tanstack Query** (powerful data fetching and caching)
- **Tanstack Form** (form handling with validation)
- **Tailwind CSS** (utility-first CSS)
- **Shadcn/ui** (component library)

**Developer Experience:**

- **Biome** (linting and formatting)
- **@cloudflare/vite-plugin** (seamless Cloudflare Workers integration)
- **TypeScript** (type safety throughout)
- **Bun** (package management)
- **Wrangler** (for deployments)

---

## Features

- ⚡️ Ultra-fast dev experience with Vite & Hot Module Replacement
- 🎯 Deploy to Cloudflare Workers in seconds
- 🔐 Complete authentication system using Better Auth (Google OAuth + Email/Password)
- 🛡️ Type-safe validation with Zod
- 🗃️ Database integration with Drizzle ORM + Cloudflare D1
- 📝 Advanced form handling with Tanstack Form
- 🧭 Type-safe routing with Tanstack Router
- 🔄 Smart data fetching and caching with Tanstack Query
- 🛠️ Clean middleware architecture session management
- 🎨 Modern styling with Tailwind CSS and Shadcn
- 🔧 Lightning-fast linting and formatting with Biome
- 🚀 Seamless Cloudflare Workers integration with @cloudflare/vite-plugin
- 🤖 AI integration using Vercel AI SDK with Cloudflare Worker AI binding

---

## Getting Started

### 1. Create a new project using this starter kit

```bash
pnpm create cloudflare@latest --template=vijaynandwani/cloudflare-ai-saas-stack
```

### 2. Change directory and install dependencies

```bash
cd <your-project-name>
pnpm install
```

### 3. Development

Start the development server:

```bash
bun run dev
```

- React app runs with hot reload (Vite)
- API runs locally on Cloudflare Workers (Wrangler)
- Both frontend and backend served from the same development server

Your application will be available at [http://localhost:5173](http://localhost:5173).

### 4. Database Setup

Create and set up your Cloudflare D1 database:

```bash
bunx wrangler d1 create cloudflare-ai-saas-stack
bun run db:generate
bun run db:migrate
bun run db:migrate:remote
```

### 5. Environment Setup

1. Copy the example environment file:

   ```bash
   cp .dev.vars.example .dev.vars
   cp .env.example .env
   ```

2. Update the values in `.dev.vars` as needed for your local environment:

   ```bash
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:5173"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

3. Set up your Google OAuth Client in the Google Cloud Console with the following values:

**Authorized JavaScript origins:**

- http://localhost:5173
- https://your-domain.com

**Authorized redirect URIs:**

- http://localhost:5173/api/auth/callback/google
- https://your-domain.com/api/auth/callback/google

Be sure that the redirect URIs and origins match exactly in your Google Console and your environment files.

### 6. Build & Deploy

To build and deploy everything to Cloudflare Workers:

```bash
bun run deploy
```

This will:

- Build the React app with Vite
- Deploy the Hono API and static assets to Cloudflare Workers using @cloudflare/vite-plugin

---

## Project Structure

```
src/
├── client/           # React frontend
│   ├── components/   # UI components
│   ├── routes/       # Tanstack Router routes
│   └── lib/          # Client utilities
├── worker/           # Hono backend
│   ├── routes/       # API routes
│   ├── middleware/   # Hono middleware
│   ├── db/          # Database schema and migrations
│   └── types/       # TypeScript types
└── shared/          # Shared utilities and types
```

---

## Scripts

- `bun run dev` - Start development server with hot reload
- `bun run deploy` - Build and deploy to Cloudflare Workers
- `bun run preview` - Preview production build locally
- `bun run lint` - Lint and format code with Biome
- `bun run db:generate` - Generate database migrations
- `bun run db:studio` - Open Drizzle Studio
- `bun run db:migrate` - Apply migrations locally
- `bun run db:migrate:remote` - Apply migrations to remote database

---

> **⚠️ Note on Authentication**
>
> Email/password authentication has been disabled in this demo to prevent `503 cpuExceeded` errors on the Cloudflare Workers free plan. This is due to resource limitations with the `better-auth` package's password hashing operations.
>
> **For production use:**
>
> - Upgrade to a paid Workers plan to enable email/password authentication
> - Or continue using Social Login (Google, etc.) for reliable authentication
> - Email/password authentication can be re-enabled by setting `emailAndPassword.enabled: true` in `src/worker/auth.ts`
