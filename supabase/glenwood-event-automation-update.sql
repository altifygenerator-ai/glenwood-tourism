-- Glenwood / Mount Ida shared event automation update
-- Run this once in Supabase SQL Editor for the shared tourism database.

create extension if not exists pgcrypto;

create table if not exists public.event_sources (
  id uuid primary key default gen_random_uuid(),
  site text not null default 'glenwood',
  name text not null,
  source_type text not null default 'website' check (source_type in ('ics', 'rss', 'json_ld', 'website')),
  url text not null,
  city text default 'Glenwood',
  category_hint text,
  venue_hint text,
  enabled boolean not null default true,
  last_checked_at timestamptz,
  last_status text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.event_sources
  add column if not exists site text not null default 'glenwood',
  add column if not exists venue_hint text,
  add column if not exists category_hint text,
  add column if not exists last_checked_at timestamptz,
  add column if not exists last_status text,
  add column if not exists notes text,
  add column if not exists enabled boolean not null default true,
  add column if not exists updated_at timestamptz not null default now();

create table if not exists public.event_import_runs (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.event_sources(id) on delete set null,
  status text not null default 'running' check (status in ('running', 'success', 'error')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  found_count integer not null default 0,
  inserted_count integer not null default 0,
  skipped_count integer not null default 0,
  error_message text
);

alter table public.events
  add column if not exists ai_summary text,
  add column if not exists source_id uuid references public.event_sources(id) on delete set null,
  add column if not exists source_hash text,
  add column if not exists imported_at timestamptz,
  add column if not exists source_type text,
  add column if not exists external_id text,
  add column if not exists confidence_score numeric,
  add column if not exists needs_review boolean default true,
  add column if not exists raw_description text,
  add column if not exists image_url text,
  add column if not exists tags text[] default '{}',
  add column if not exists is_recurring boolean default false,
  add column if not exists recurrence_type text,
  add column if not exists recurrence_days text[] default '{}',
  add column if not exists recurrence_end_date date;

create unique index if not exists events_source_hash_unique_idx
  on public.events(source_hash)
  where source_hash is not null;

create unique index if not exists event_sources_site_url_unique_idx
  on public.event_sources(site, url);

create index if not exists events_site_status_start_date_idx
  on public.events(site, status, start_date);

create index if not exists events_source_id_idx
  on public.events(source_id);

create index if not exists event_sources_site_enabled_idx
  on public.event_sources(site, enabled);

create index if not exists event_import_runs_source_started_idx
  on public.event_import_runs(source_id, started_at desc);

alter table public.event_sources enable row level security;
alter table public.event_import_runs enable row level security;

-- No public RLS policies are added for event_sources or import runs.
-- The site uses SUPABASE_SERVICE_ROLE_KEY on protected admin/cron routes.

-- Optional starter Glenwood-area sources. These are disabled until you verify each URL and turn them on in /admin/events/sources.
insert into public.event_sources (site, name, source_type, url, city, category_hint, enabled, notes)
select 'glenwood', 'Glenwood Chamber / Community Events', 'website', 'https://www.glenwoodarkansaschamber.com/events', 'Glenwood', 'Community', false, 'Verify URL before enabling.'
where not exists (
  select 1 from public.event_sources where site = 'glenwood' and url = 'https://www.glenwoodarkansaschamber.com/events'
);

insert into public.event_sources (site, name, source_type, url, city, category_hint, enabled, notes)
select 'glenwood', 'Caddo River Festival / Local Events', 'website', 'https://www.glenwoodarkansaschamber.com', 'Glenwood', 'Festival', false, 'Use as a starter source or replace with a more exact event page.'
where not exists (
  select 1 from public.event_sources where site = 'glenwood' and url = 'https://www.glenwoodarkansaschamber.com'
);
