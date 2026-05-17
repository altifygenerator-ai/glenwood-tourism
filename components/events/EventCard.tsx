import Link from "next/link";
import type { TourismEvent } from "@/lib/events";

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function formatTime(time?: string | null) {
  if (!time) return null;

  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export default function EventCard({ event }: { event: TourismEvent }) {
  const startTime = formatTime(event.start_time);

  return (
    <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        {event.category && (
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
            {event.category}
          </span>
        )}

        {event.featured && (
          <span className="rounded-full bg-[#f7f0e3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            Featured
          </span>
        )}
      </div>

      <h3 className="mb-3 text-2xl font-semibold">
        <Link href={`/events/${event.slug}`}>{event.title}</Link>
      </h3>

      <div className="mb-5 space-y-1 text-sm text-[color:var(--color-muted)]">
        <p>{formatEventDate(event.start_date)}</p>
        {startTime && <p>{startTime}</p>}
        {event.location_name && <p>{event.location_name}</p>}
        {event.city && <p>{event.city}, Arkansas</p>}
      </div>

      {event.ai_summary || event.description ? (
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
          {event.ai_summary || event.description}
        </p>
      ) : null}

      <Link
        href={`/events/${event.slug}`}
        className="text-sm font-semibold text-[color:var(--color-accent)]"
      >
        View Event →
      </Link>
    </article>
  );
}