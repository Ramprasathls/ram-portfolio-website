
# GenAI Portfolio Starter (Next.js + Supabase + Tailwind)

Meets your lab's requirements:
- Modern personal website sections
- Supabase-powered Feedback (insert + list + realtime)
- Vercel-ready

## 1) Prereqs
- Node.js 18+ (`node -v`)
- Git
- Accounts: GitHub, Vercel, Supabase

## 2) Setup
```bash
npm i
cp .env.example .env.local
# Fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 3) Supabase
- Create a Supabase project
- Open **SQL Editor** and run `supabase_schema.sql` from this repo
  - Then in **Database → Replication (Realtime)**, enable for `public.feedback`
- Copy **Project URL** and **anon key** → into `.env.local`

## 4) Run Locally
```bash
npm run dev
# visit http://localhost:3000
```

## 5) Deploy
- Create an empty GitHub repo
- Push this project:
```bash
git init
git add .
git commit -m "init"
git remote add origin <repo-url>
git branch -M main
git push -u origin main
```
- In Vercel: **New Project → Import from GitHub**
- Add Environment Variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Deploy
```

Happy building!
