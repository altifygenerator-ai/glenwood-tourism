import Link from "next/link";
import Section from "@/components/tourism/Section";
import CaddoTripCheck from "@/components/CaddoTripCheck";
import EventsCTA from "@/components/events/EventsCTA";

export const metadata = {
  title: "Caddo River Weekend Guide | Glenwood Arkansas Trip Planning",
  description:
    "Plan a Caddo River weekend in Glenwood, Arkansas with river tips, places to stay, restaurants, events, Lake Greeson, and simple nearby trip ideas.",
  alternates: {
    canonical: "/caddo-river-weekend-guide",
  },
};

const planningCards = [
  {
    title: "Start with the Caddo River",
    text: "Most Glenwood weekends begin with the river. Check conditions, think through where you want to get on and off the water, and plan the rest of the day around how much time you want outside.",
    href: "/caddo-river",
    label: "View Caddo River Guide",
  },
  {
    title: "Find a stay near town or the river",
    text: "Cabins, campgrounds, and local lodging make the trip easier if you’re floating, fishing, visiting family, or turning a day trip into a full weekend.",
    href: "/glenwood-ar-cabins",
    label: "See Cabins & Stays",
  },
  {
    title: "Plan the after-river meal",
    text: "After a river day, most folks want something easy, close, and filling. Glenwood has cafes, pizza, seafood, Mexican food, coffee, sweets, and quick stops.",
    href: "/glenwood-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Check what’s happening",
    text: "Look for live music, markets, fundraisers, church events, family-friendly plans, and local business events happening around Glenwood while you’re here.",
    href: "/this-weekend",
    label: "See This Weekend",
  },
];

const weekendFlow = [
  {
    title: "Morning",
    text: "Grab coffee, breakfast, donuts, or a quick meal before heading toward the river, Lake Greeson, or a nearby outdoor stop.",
  },
  {
    title: "Midday",
    text: "Build the middle of the day around the Caddo River when the weather and water are right, or shift toward Lake Greeson and nearby attractions when the river is not the plan.",
  },
  {
    title: "Evening",
    text: "Come back into town for food, check local events, settle into a cabin, or take the weekend slower instead of trying to overpack the day.",
  },
];

export default function CaddoRiverWeekendGuidePage() {
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
              "radial-gradient(circle at 82% 18%, rgba(139,94,52,0.22), transparent 30%), radial-gradient(circle at 18% 82%, rgba(47,88,78,0.16), transparent 34%), linear-gradient(135deg, var(--bg-card) 0%, var(--color-bg) 52%, rgba(47,88,78,0.08) 100%)",
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
          CADDO
        </div>

        <div
          className="pointer-events-none absolute -bottom-8 left-8 hidden text-[8rem] font-bold leading-none opacity-[0.04] lg:block"
          style={{ color: "var(--color-text)" }}
        >
          WEEKEND
        </div>

        <div className="relative z-10 container py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Caddo River Weekend Guide
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-[color:var(--color-text)] md:text-7xl">
                Plan a Glenwood weekend around the Caddo River.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
                A simple guide for river days, cabins, restaurants, local
                events, Lake Greeson, and easy things to do around Glenwood,
                Arkansas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/caddo-river" className="btn">
                  Caddo River Guide
                </Link>

                <Link href="/this-weekend" className="btn btn-light">
                  This Weekend
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
                  Quick Planning Note
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                  River first, then food, cabins, events, and local stops.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  The Caddo River is the hook, but the weekend usually comes
                  together around the rest of the little things too: where you
                  stay, where you eat, what’s happening, and what else is close
                  enough to add without overplanning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaddoTripCheck />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Start Here
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              The easiest Glenwood weekends are planned in pieces.
            </h2>
          </div>

          <p className="max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
            You do not have to plan every minute. Start with the river, pick a
            place to stay, know where you might eat, and check events before you
            come. That usually gives visitors enough structure without making
            the trip feel too busy.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {planningCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                {item.text}
              </p>

              <span className="mt-auto inline-block pt-5 font-bold text-[color:var(--color-accent)]">
                {item.label} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading">
          <h2>A simple Caddo River weekend flow</h2>
          <p>
            Glenwood does not need to be overplanned. A good weekend can be as
            simple as river time, local food, a comfortable place to stay, and a
            few nearby stops if you want to stretch the trip out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {weekendFlow.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative flex min-h-[520px] items-end overflow-hidden dark-section">
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
          RIVER
        </div>

        <div className="relative z-10 container py-20">
          <div className="max-w-3xl rounded-2xl bg-black/30 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              Local Guide Network
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Know a river stop, cabin, event, or local place we should add?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              Send in suggestions for Glenwood restaurants, cabins, river
              outfitters, local shops, events, outdoor stops, and nearby places
              visitors should know about.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
                style={{ color: "var(--color-accent)" }}
              >
                Suggest a Place
              </Link>

              <Link
                href="/submit-event"
                className="inline-flex rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Submit Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EventsCTA
        title="Planning a Glenwood weekend soon?"
        text="Check current events before you come. There may be live music, markets, fundraisers, family-friendly plans, or local happenings around town."
      />
    </main>
  );
}