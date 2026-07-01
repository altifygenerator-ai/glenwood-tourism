import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/events";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
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

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Glenwood Arkansas Events`,
    description:
      event.ai_summary ||
      event.description ||
      `Event details for ${event.title} near Glenwood, Arkansas.`,
    alternates: {
      canonical: `/events/${slug}`,
    },
  };
}

export default async function EventSlugPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) notFound();

  const startTime = formatTime(event.start_time);
  const endTime = formatTime(event.end_time);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        {event.category || "Local Event"}
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        {event.title}
      </h1>

      <div className="mb-10 flex flex-wrap gap-3">
        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
          {formatEventDate(event.start_date)}
        </span>

        {startTime && (
          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
            {startTime}
            {endTime ? ` - ${endTime}` : ""}
          </span>
        )}

        {event.location_name && (
          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
            {event.location_name}
          </span>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.7fr]">
        <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-3xl font-semibold">Event Details</h2>

          {event.description ? (
            <p className="whitespace-pre-line leading-relaxed text-[color:var(--color-muted)]">
              {event.description}
            </p>
          ) : (
            <p className="text-[color:var(--color-muted)]">
              Full event details have not been added yet. Check the source link
              or contact the organizer for the most current information.
            </p>
          )}

          {event.ai_summary && (
            <div className="mt-8 rounded-2xl bg-[#f7f0e3] p-6">
              <h3 className="mb-3 text-2xl font-semibold">
                Quick Local Summary
              </h3>
              <p className="text-[color:var(--color-muted)]">
                {event.ai_summary}
              </p>
            </div>
          )}

          {event.source_url && (
            <a
              href={event.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-md bg-black px-5 py-3 font-medium text-white hover:opacity-90"
            >
              View Source
            </a>
          )}
        </article>

        <aside className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-semibold">Planning Info</h3>

          <div className="space-y-3 text-sm text-[color:var(--color-muted)]">
            <p>
              <strong className="text-[color:var(--color-text)]">Date:</strong>{" "}
              {formatEventDate(event.start_date)}
            </p>

            {startTime && (
              <p>
                <strong className="text-[color:var(--color-text)]">
                  Time:
                </strong>{" "}
                {startTime}
                {endTime ? ` - ${endTime}` : ""}
              </p>
            )}

            {event.location_name && (
              <p>
                <strong className="text-[color:var(--color-text)]">
                  Location:
                </strong>{" "}
                {event.location_name}
              </p>
            )}

            {event.address && (
              <p>
                <strong className="text-[color:var(--color-text)]">
                  Address:
                </strong>{" "}
                {event.address}
              </p>
            )}

            {event.category && (
              <p>
                <strong className="text-[color:var(--color-text)]">
                  Category:
                </strong>{" "}
                {event.category}
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}