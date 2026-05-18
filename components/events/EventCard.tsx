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
    <article className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {event.category && (
          <span className="rounded-full bg-[color:var(--color-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            {event.category}
          </span>
        )}

        {event.featured && (
          <span className="rounded-full bg-[color:var(--color-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            Featured
          </span>
        )}
      </div>

      <h3 className="mb-4 text-2xl font-semibold leading-tight">
        <Link
          href={`/events/${event.slug}`}
          className="transition group-hover:text-[color:var(--color-accent)]"
        >
          {event.title}
        </Link>
      </h3>

      <div className="mb-5 space-y-1 border-l-2 border-[color:var(--color-accent)]/30 pl-4 text-sm text-[color:var(--color-muted)]">
        <p>{formatEventDate(event.start_date)}</p>
        {startTime && <p>{startTime}</p>}
        {event.location_name && <p>{event.location_name}</p>}
        {event.city && <p>{event.city}, Arkansas</p>}
      </div>

      {event.ai_summary || event.description ? (
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
          {event.ai_summary || event.description}
        </p>
      ) : null}

      <div className="mt-auto">
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex text-sm font-semibold text-[color:var(--color-accent)] transition group-hover:translate-x-1"
        >
          View Event →
        </Link>
      </div>
    </article>
  );
}