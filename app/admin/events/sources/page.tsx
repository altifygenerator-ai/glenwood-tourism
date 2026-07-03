import Link from "next/link";
import EventSourceManager from "@/components/events/EventSourceManager";
import { getEventSourcesForAdmin, getRecentEventImportRuns } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EventSourcesPage() {
  const [sources, runs] = await Promise.all([
    getEventSourcesForAdmin("glenwood"),
    getRecentEventImportRuns(20, "glenwood"),
  ]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Admin
          </p>

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Event Sources
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Add public event pages, iCal feeds, RSS feeds, or venue calendars
            for the automated importer to check for Glenwood area events.
          </p>
        </div>

        <Link href="/admin/events" className="rounded-md border px-6 py-3">
          Back to Events
        </Link>
      </div>

      <EventSourceManager sources={sources as never} runs={runs as never} />
    </main>
  );
}
