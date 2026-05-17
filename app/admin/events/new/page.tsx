import EventForm from "@/components/events/EventForm";

export default function NewAdminEventPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Admin
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Add Event Manually
      </h1>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        Add a Glenwood area event directly from the admin side. It will save as
        pending first so you can clean, review, and approve it.
      </p>

      <EventForm sourceType="manual" />
    </main>
  );
}