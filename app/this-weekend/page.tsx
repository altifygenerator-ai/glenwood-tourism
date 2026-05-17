import WeekendEvents from "@/components/events/WeekendEvents";
import { getWeekendEvents } from "@/lib/events";

export const metadata = {
  title: "This Weekend in Glenwood Arkansas | Local Events & Things To Do",
  description:
    "See what’s happening this weekend in Glenwood, Arkansas, including local events, outdoor activities, live music, and family-friendly things to do.",
};

export default async function ThisWeekendPage() {
  const events = await getWeekendEvents();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        This Weekend
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        What’s going on in Glenwood this weekend
      </h1>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        A simple weekend guide for visitors and locals looking for events,
        river-season plans, live music, markets, family activities, and things
        to do around Glenwood.
      </p>

      <WeekendEvents events={events} />
    </main>
  );
}