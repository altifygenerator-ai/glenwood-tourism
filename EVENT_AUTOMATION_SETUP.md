# Glenwood Event Automation Setup

This build adds the same semi-automated event importer used on the Hot Springs guide, adjusted for Glenwood.
Imported events do not publish automatically. They save as `pending`, then you review/edit/approve them in `/admin/events`.

## 1. Run Supabase SQL

Open Supabase → SQL Editor and run:

```txt
supabase/glenwood-event-automation-update.sql
```

That adds:

- `event_sources`
- `event_import_runs`
- import/dedupe columns on `events`
- indexes for site/status/date, source hash, source URLs, and import logs

Because Glenwood and Mount Ida share a database, this SQL is site-aware. Glenwood sources save with `site = 'glenwood'` and the importer only pulls Glenwood sources from this site.

## 2. Add env vars

Vercel and local `.env.local` need:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAIL=
OPENAI_API_KEY=
CRON_SECRET=make-a-long-random-string
RESEND_API_KEY=
SITE_KEY=glenwood
```

`OPENAI_API_KEY` is used for website text extraction and Quick Paste Import.
`CRON_SECRET` protects `/api/cron/import-events`.

## 3. New admin routes

```txt
/admin/events
/admin/events/import
/admin/events/sources
/admin/events/[id]/edit
```

## 4. New API routes

```txt
/api/cron/import-events
/api/events/import/run
/api/events/import/paste
/api/events/sources
/api/events/sources/[id]
/api/events/[id]
```

Existing approve and clean routes now require admin auth.

## 5. Event source types

- `ics` for public iCal feeds
- `rss` for RSS feeds
- `json_ld` for pages with Event schema
- `website` for regular pages. It tries JSON-LD first, then AI extraction from visible page text.

## 6. Vercel cron

`vercel.json` runs the importer once daily:

```json
{
  "crons": [
    {
      "path": "/api/cron/import-events",
      "schedule": "0 11 * * *"
    }
  ]
}
```

## 7. Workflow

1. Run the Supabase SQL.
2. Add `CRON_SECRET` and `OPENAI_API_KEY` to Vercel.
3. Go to `/admin/events/sources`.
4. Add trusted Glenwood area event pages/calendars.
5. Run one source manually to test it.
6. Review pending events in `/admin/events/[id]/edit`.
7. Click Save & Approve when ready.
