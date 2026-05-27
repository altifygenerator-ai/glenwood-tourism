import EventForm from "@/components/events/EventForm";

export const metadata = {
  title: "Submit an Event | Glenwood Arkansas",
  description:
    "Submit an event for the Glenwood Arkansas tourism guide. Events are reviewed before publishing.",
};

export default function SubmitEventPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Submit an Event
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Add a Glenwood area event
      </h1>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        Know about a local event, live music night, river-season gathering,
        market, festival, fundraiser, church event, school event, or
        family-friendly activity around Glenwood? Submit it here and it can be
        reviewed for the local events guide.
      </p>

      <EventForm site="glenwood" defaultCity="Glenwood" />
    </main>
  );
}