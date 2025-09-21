
-- Run this in the Supabase SQL Editor to create your feedback table

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  rating int not null check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

-- Enable Realtime for this table (either via the UI or with the SQL below)
-- (UI path: Database -> Replication -> Configure -> toggle on for 'feedback')
alter publication supabase_realtime add table public.feedback;
