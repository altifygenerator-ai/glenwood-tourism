import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import type { TourismEvent } from "@/lib/events";

export default function WeekendEvents({ events }: { events: TourismEvent[] }) {
  if (!events.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[color:var(--color-accent)]/35 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
          This Weekend
        </p>

        <h3 className="mb-3 text-2xl font-semibold">
          No weekend events listed yet.
        </h3>

        <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
          Weekend events will show here once they’re added and approved. If your
          business, church, school, organization, or local group has something
          coming up, send it in and help fill the calendar.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/submit-event"
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Submit an Event
          </Link>

          <Link
            href="/events"
            className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-white/60"
          >
            View Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}