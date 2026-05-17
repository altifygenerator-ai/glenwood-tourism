import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Admin
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Glenwood Events Admin
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        Review submitted events, manually add new ones, clean them up, and
        approve events before they appear publicly.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/events"
          className="rounded-md bg-black px-6 py-3 text-white"
        >
          Manage Events
        </Link>

        <Link href="/admin/events/new" className="rounded-md border px-6 py-3">
          Add Event Manually
        </Link>
      </div>
    </main>
  );
}