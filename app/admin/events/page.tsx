import Link from "next/link";
import AdminEventTable from "@/components/events/AdminEventTable";
import { getAllEventsForAdmin } from "@/lib/events";

export default async function AdminEventsPage() {
  const events = await getAllEventsForAdmin();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Admin
          </p>

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Manage Glenwood Events
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Review pending submissions, clean events with AI, and approve events
            before they appear publicly on the Glenwood guide.
          </p>
        </div>

        <Link
          href="/admin/events/new"
          className="rounded-md bg-black px-6 py-3 text-white"
        >
          Add Event
        </Link>
      </div>

      <AdminEventTable events={events} />
    </main>
  );
}