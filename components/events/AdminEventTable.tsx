"use client";

import Link from "next/link";
import type { TourismEvent } from "@/lib/events";

export default function AdminEventTable({
  events,
}: {
  events: TourismEvent[];
}) {
  async function updateStatus(
    id: string,
    status: "approved" | "rejected"
  ) {
    const res = await fetch(`/api/events/${id}/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      alert("Could not update event.");
      return;
    }

    window.location.reload();
  }

  async function cleanWithAI(id: string) {
    const res = await fetch("/api/ai/clean-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventId: id }),
    });

    if (!res.ok) {
      alert("Could not clean event with AI.");
      return;
    }

    window.location.reload();
  }

  if (!events.length) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <h3 className="mb-3 text-2xl font-semibold">No events yet</h3>

        <p className="text-[color:var(--color-muted)]">
          Submitted and manually added events will show up here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {events.map((event) => (
        <article
          key={event.id}
          className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f7f0e3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
                  {event.status}
                </span>

                {event.category && (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                    {event.category}
                  </span>
                )}

                {event.source_type && (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs">
                    {event.source_type}
                  </span>
                )}
              </div>

              <h2 className="text-3xl font-semibold">{event.title}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => cleanWithAI(event.id)}
                className="rounded-md border px-4 py-2 text-sm"
              >
                Clean with AI
              </button>

              {event.status !== "approved" && (
                <button
                  type="button"
                  onClick={() => updateStatus(event.id, "approved")}
                  className="rounded-md bg-black px-4 py-2 text-sm text-white"
                >
                  Approve
                </button>
              )}

              {event.status !== "rejected" && (
                <button
                  type="button"
                  onClick={() => updateStatus(event.id, "rejected")}
                  className="rounded-md border border-red-200 px-4 py-2 text-sm text-red-700"
                >
                  Reject
                </button>
              )}

              {event.status === "approved" && (
                <Link
                  href={`/events/${event.slug}`}
                  target="_blank"
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  View
                </Link>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Event Description
              </h3>

              <div className="rounded-xl bg-[#f7f0e3] p-5">
                <p className="whitespace-pre-line text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {event.description ||
                    event.raw_description ||
                    "No description added."}
                </p>
              </div>

              {event.ai_summary && (
                <div className="mt-5 rounded-xl border border-black/5 bg-white p-5">
                  <h4 className="mb-2 text-base font-semibold">
                    AI Summary
                  </h4>

                  <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {event.ai_summary}
                  </p>
                </div>
              )}
            </div>

            <aside className="rounded-xl border border-black/5 bg-white p-5">
              <h3 className="mb-4 text-lg font-semibold">
                Event Info
              </h3>

              <div className="space-y-3 text-sm text-[color:var(--color-muted)]">
                <p>
                  <strong className="text-[color:var(--color-text)]">
                    Date:
                  </strong>{" "}
                  {event.start_date}
                </p>

                {event.start_time && (
                  <p>
                    <strong className="text-[color:var(--color-text)]">
                      Time:
                    </strong>{" "}
                    {event.start_time}
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

                {event.submitter_name && (
                  <p>
                    <strong className="text-[color:var(--color-text)]">
                      Submitted By:
                    </strong>{" "}
                    {event.submitter_name}
                  </p>
                )}

                {event.submitter_email && (
                  <p>
                    <strong className="text-[color:var(--color-text)]">
                      Email:
                    </strong>{" "}
                    {event.submitter_email}
                  </p>
                )}

                {event.source_url && (
                  <a
                    href={event.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block pt-2 text-[color:var(--color-accent)] underline underline-offset-4"
                  >
                    View Source →
                  </a>
                )}
              </div>
            </aside>
          </div>
        </article>
      ))}
    </div>
  );
}