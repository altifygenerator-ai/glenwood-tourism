import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rainy Day Things To Do in Glenwood Arkansas | River Trip Backup Plans",
  description:
    "A practical rainy day and backup plan guide for Glenwood, Arkansas visitors when the Caddo River is too low, too high, stormy, crowded, or not right for the day.",
  alternates: {
    canonical: "/rainy-day-things-to-do-glenwood-ar",
  },
};

const backupIdeas = [
  {
    title: "Keep it local with food and shops",
    text: "Use the day for breakfast, coffee, lunch, dinner, local shops, small businesses, and slower stops around Glenwood instead of forcing a river plan that does not fit the weather.",
    href: "/glenwood-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Check events before you give up on the day",
    text: "Some rainy or river-light weekends still have live music, markets, fundraisers, church events, local gatherings, and indoor or covered community plans.",
    href: "/this-weekend",
    label: "This Weekend",
  },
  {
    title: "Take a Lake Greeson or Murfreesboro drive",
    text: "If the weather clears enough for a scenic drive, Lake Greeson, Kirby, Daisy, Murfreesboro, and Crater of Diamonds can still make sense as part of a flexible day.",
    href: "/lake-greeson-crater-of-diamonds-day-trip",
    label: "Day Trip Guide",
  },
  {
    title: "Slow down at the cabin",
    text: "A cabin weekend does not have to be packed. Cook, rest, play cards, sit on the porch, watch the weather, and keep the river plan for when conditions are better.",
    href: "/glenwood-ar-cabins",
    label: "Cabins & Stays",
  },
];

const riverReasons = [
  {
    title: "Too much rain",
    text: "Fast water, storms, muddy access, or rising levels can change the feel of the Caddo quickly. Wait it out or ask an outfitter what makes sense.",
  },
  {
    title: "Not enough water",
    text: "Low summer water can make some routes slower, scratchier, or less enjoyable. A shorter stop or different day may be better than forcing it.",
  },
  {
    title: "Crowds or timing",
    text: "Busy weekends, late starts, full parking, and tired kids can all be reasons to shift the river to another part of the trip.",
  },
];

export default function RainyDayGlenwoodPage() {
  return (
    <main>
      <section className="relative min-h-[76vh] overflow-hidden dark-section">
        <Image
          src="/images/glenwood/forest.jpg"
          alt="Ouachita forest scenery near Glenwood Arkansas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,34,28,0.9),rgba(24,34,28,0.6),rgba(24,34,28,0.26))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,250,240,0.16),transparent_32%)]" />

        <div className="container relative z-10 flex min-h-[76vh] items-center py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-white/75">
              Rainy Day & Backup Plans
            </p>
            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              What to do when the Caddo River is not the plan.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              River trips depend on weather, water, access, timing, and the
              group you are traveling with. If the Caddo is not right today,
              Glenwood can still work as a slower outdoor base.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/this-weekend" className="btn btn-light">
                Check Events
              </Link>
              <Link href="/glenwood-ar-restaurants" className="btn">
                Places To Eat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-bg)]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Flexible Planning
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                A good Glenwood trip does not have to force the river.
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-8">
              <p>
                The Caddo River is a big reason people come to Glenwood, but it
                is still a real river. Some days are better for floating,
                swimming, fishing, or kayaking than others.
              </p>
              <p>
                When the water, weather, crowds, or timing are not right, shift
                the day toward local food, events, Lake Greeson, nearby drives,
                cabins, and quieter plans instead of turning the trip into a
                headache.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {backupIdeas.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col rounded-[28px] border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
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
        </div>
      </section>

      <section className="section bg-[var(--bg-card)]">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Why To Change Plans
            </p>
            <h2>Sometimes the smarter river plan is waiting.</h2>
            <p>
              Visitors do not need to panic when the water is not perfect. They
              just need a plan that keeps the day simple.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {riverReasons.map((item) => (
              <article key={item.title} className="card">
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="leading-7">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[34px] bg-[var(--color-text)] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
                  Keep the trip useful
                </p>
                <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
                  Have a good backup idea for Glenwood visitors?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/78">
                  If there is a local stop, indoor idea, event, food option, or
                  nearby place that belongs on this rainy day guide, send it in
                  so visitors have better choices when the river is not right.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact" className="btn btn-light">
                  Send an Update
                </Link>
                <Link href="/explore" className="btn">
                  Browse Things To Do
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
