import EventCard from "@/components/events/EventCard";
import type { TourismEvent } from "@/lib/events";

export default function WeekendEvents({ events }: { events: TourismEvent[] }) {
  if (!events.length) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-2xl font-semibold">No weekend events yet</h3>
        <p className="text-[color:var(--color-muted)]">
          Weekend events will show here once they’re added and approved.
        </p>
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