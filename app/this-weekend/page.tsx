import Link from "next/link";
import WeekendEvents from "@/components/events/WeekendEvents";
import { getWeekendEvents } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "This Weekend in Glenwood Arkansas | Events & Things To Do",
  description:
    "See what is happening this weekend in Glenwood, Arkansas, including local events, outdoor activities, live music, markets, family-friendly plans, and river-season ideas.",
  alternates: {
    canonical: "/this-weekend",
  },
};

const planningLinks = [
  {
    label: "Things To Do",
    href: "/explore",
  },
  {
    label: "Caddo River",
    href: "/caddo-river",
  },
  {
    label: "Places To Stay",
    href: "/glenwood-ar-cabins",
  },
  {
    label: "Restaurants",
    href: "/glenwood-ar-restaurants",
  },
  {
    label: "Submit Event",
    href: "/submit-event",
  },
];

const weekendIdeas = [
  {
    title: "Check the Caddo River",
    text: "If the weather and water levels are right, the Caddo is usually one of the first things people plan around when they’re coming through Glenwood.",
    href: "/caddo-river",
    label: "View Caddo River Guide",
  },
  {
    title: "Find a local place to eat",
    text: "Plan a meal around Glenwood before or after river time, a cabin stay, a Lake Greeson stop, or a slower weekend drive through town.",
    href: "/glenwood-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Make it an outdoor weekend",
    text: "Glenwood works well for a simple outdoor trip with river stops, nearby lake time, scenic drives, local food, and easy places to slow down.",
    href: "/explore",
    label: "Browse Things To Do",
  },
  {
    title: "Stay close to the river",
    text: "Cabins, campgrounds, and local stays can make the weekend easier if you’re planning a float trip, family visit, or quiet getaway.",
    href: "/glenwood-ar-cabins",
    label: "See Places To Stay",
  },
];

export default async function ThisWeekendPage() {
  const events = await getWeekendEvents();
  const hasEvents = events.length > 0;

  return (
    <main>
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 18%, rgba(139, 94, 52, 0.22), transparent 30%), radial-gradient(circle at 18% 82%, rgba(47, 88, 78, 0.16), transparent 34%), linear-gradient(135deg, var(--bg-card) 0%, var(--color-bg) 52%, rgba(47, 88, 78, 0.08) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,88,78,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(47,88,78,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 top-16 hidden text-[10rem] font-bold leading-none opacity-[0.045] lg:block"
          style={{ color: "var(--color-accent)" }}
        >
          WEEKEND
        </div>

        <div
          className="pointer-events-none absolute -bottom-8 left-8 hidden text-[8rem] font-bold leading-none opacity-[0.04] lg:block"
          style={{ color: "var(--color-text)" }}
        >
          GLENWOOD
        </div>

        <div className="relative z-10 container py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                This Weekend
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-[color:var(--color-text)] md:text-7xl">
                What’s going on in Glenwood this weekend.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
                A simple weekend guide for visitors and locals looking for
                events, river-season plans, live music, markets, family
                activities, and things to do around Glenwood.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#weekend-events" className="btn">
                  See Events
                </Link>

                <Link href="/submit-event" className="btn">
                  Submit an Event
                </Link>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[2rem] border bg-[color:var(--bg-card)] p-6 shadow-sm md:p-7"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div
                className="absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full"
                style={{ background: "rgba(139,94,52,0.12)" }}
              />

              <div
                className="absolute bottom-[-80px] left-[-80px] h-[190px] w-[190px] rounded-full"
                style={{ background: "rgba(47,88,78,0.10)" }}
              />

              <div className="relative z-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Quick Weekend Help
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  Events first, then river time, food, cabins, and local stops.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Check what has been submitted for the weekend, then use the
                  rest of the guide to fill in the day around the Caddo River,
                  restaurants, cabins, Lake Greeson, local shops, and nearby
                  outdoor stops.
                </p>

                <div
                  className="mt-6 rounded-2xl border p-4"
                  style={{
                    borderColor: "rgba(0,0,0,0.08)",
                    background: "rgba(139,94,52,0.07)",
                  }}
                >
                  <p className="text-sm font-semibold text-[color:var(--color-text)]">
                    Local organizers can submit events anytime.
                  </p>

                  <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                    Markets, live music, fundraisers, church events, festivals,
                    river-season events, and family-friendly plans are all
                    welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="rounded-[2rem] border bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Weekend Planning
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                  Check the events, then build the rest of the day around town.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Some weekends have markets, music, festivals, and local
                  events. Other weekends are better for the river, a local meal,
                  a cabin stay, Lake Greeson, or a slower day around Glenwood.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {planningLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border bg-white/70 px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                      Weekend Guide
                    </span>

                    <span className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold text-[color:var(--color-text)]">
                      {item.label}
                      <span className="text-[color:var(--color-accent)] transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="weekend-events" className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>This Weekend’s Events</h2>
            <p>
              These are approved events currently listed for the upcoming
              weekend. More can be added as local businesses, venues, churches,
              groups, and organizers submit details.
            </p>
          </div>

          <WeekendEvents events={events} />
        </div>
      </section>

      {!hasEvents && (
        <section className="section pt-0">
          <div className="container">
            <div
              className="rounded-[2rem] border bg-[color:var(--bg-card)] p-6 shadow-sm md:p-10"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Still Planning?
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                  If the event list is light, you can still build a good
                  Glenwood weekend.
                </h2>

                <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-[color:var(--color-muted)]">
                  Event listings depend on what has been submitted and approved,
                  but there’s still plenty to plan around the Caddo River,
                  restaurants, cabins, Lake Greeson, nearby outdoor stops, and
                  small-town places worth slowing down for.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Link href="/explore" className="btn">
                    Browse Things To Do
                  </Link>

                  <Link href="/submit-event" className="btn">
                    Submit an Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Easy Weekend Ideas
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                A few reliable ways to spend a weekend around Glenwood.
              </h2>
            </div>

            <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
              These are good starting points when you want something simple to
              do before dinner, after checking into a cabin, during river
              season, or while waiting for more local events to be added.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {weekendIdeas.map((idea) => (
              <Link
                key={idea.href}
                href={idea.href}
                className="group flex h-full flex-col rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {idea.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  {idea.text}
                </p>

                <span className="mt-auto inline-block pt-5 font-bold text-[color:var(--color-accent)]">
                  {idea.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[560px] items-end overflow-hidden dark-section">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,28,25,0.96), rgba(47,88,78,0.88)), radial-gradient(circle at top right, rgba(139,94,52,0.32), transparent 34%)",
          }}
        />

        <div
          className="pointer-events-none absolute -right-10 top-10 hidden text-[9rem] font-bold leading-none opacity-[0.06] lg:block"
          style={{ color: "#ffffff" }}
        >
          EVENTS
        </div>

        <div className="relative z-10 container py-20">
          <div className="max-w-3xl rounded-2xl bg-black/30 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              Local Events Welcome
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Know about something happening this weekend?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              Send in live music, markets, fundraisers, church events,
              festivals, river-season events, family activities, community
              gatherings, and other Glenwood area events so they can be added to
              the guide.
            </p>

            <Link
              href="/submit-event"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--color-accent)" }}
            >
              Submit an Event
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}