import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import { getUpcomingApprovedEvents } from "@/lib/events";

export default async function HomeEventsPreview() {
  const events = await getUpcomingApprovedEvents(3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Local Events
            </p>

            <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
              What’s happening around Glenwood
            </h2>

            <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
              Find upcoming community events, river-season happenings, markets,
              live music, fundraisers, festivals, and local things to do around
              Glenwood.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/this-weekend"
              className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              This Weekend
            </Link>

            <Link
              href="/events"
              className="rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
            >
              View All Events
            </Link>

            <Link
              href="/submit-event"
              className="rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-white"
            >
              Submit Event
            </Link>
          </div>
        </div>

        {events.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[color:var(--color-accent)]/35 bg-white/60 p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              Events are being added
            </p>

            <h3 className="mb-3 text-2xl font-semibold">
              Help us fill the Glenwood event calendar.
            </h3>

            <p className="mb-6 max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
              If your business, church, school, organization, vendor group, or
              local community has something coming up, submit it and we’ll help
              get it in front of visitors and locals.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/submit-event"
                className="inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Submit an Event
              </Link>

              <Link
                href="/events"
                className="inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-white"
              >
                View Events Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}