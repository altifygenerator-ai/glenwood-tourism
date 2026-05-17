import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import { getUpcomingApprovedEvents } from "@/lib/events";

export default async function HomeEventsPreview() {
  const events = await getUpcomingApprovedEvents(3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Local Events
          </p>

          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            What’s happening around Glenwood
          </h2>

          <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
            Check upcoming events, river-season happenings, markets, live music,
            and local things to do around Glenwood.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/this-weekend"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            This Weekend
          </Link>

          <Link href="/events" className="rounded-md border px-5 py-3 text-sm">
            View All Events
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
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-semibold">
            Events are being added
          </h3>
          <p className="mb-6 max-w-2xl text-[color:var(--color-muted)]">
            Local events will show here as they’re submitted and approved.
          </p>
          <Link
            href="/submit-event"
            className="inline-block rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Submit an Event
          </Link>
        </div>
      )}
    </section>
  );
}