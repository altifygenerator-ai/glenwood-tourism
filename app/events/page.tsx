import EventCard from "@/components/events/EventCard";
import { getUpcomingApprovedEvents } from "@/lib/events";

export const metadata = {
  title: "Events in Glenwood Arkansas | Caddo River & Local Events",
  description:
    "Find upcoming events, weekend activities, live music, festivals, and things happening around Glenwood, Arkansas.",
};

export default async function EventsPage() {
  const events = await getUpcomingApprovedEvents(24);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Glenwood Events
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Events and things happening around Glenwood, Arkansas
      </h1>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        A local guide to upcoming events, weekend plans, river-season
        happenings, live music, community gatherings, and things worth checking
        out around Glenwood and the Caddo River area.
      </p>

      {events.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-3xl font-semibold">
            No approved events yet
          </h2>
          <p className="mb-6 max-w-2xl text-[color:var(--color-muted)]">
            Events are being added soon. If you know about something happening
            around Glenwood, you can submit it for review.
          </p>
          <a
            href="/submit-event"
            className="inline-block rounded-md bg-black px-5 py-3 font-medium text-white hover:opacity-90"
          >
            Submit an Event
          </a>
        </div>
      )}
    </main>
  );
}