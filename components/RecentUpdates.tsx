import Link from "next/link";

const updates = [
  {
    label: "Lake guide",
    title: "Lake Greeson Near Glenwood",
    text: "A practical guide to deciding whether Lake Greeson is worth adding to a Glenwood trip, with notes on boating, fishing, swimming, Swaha, Dam Grill, and pairing it with a Caddo River weekend.",
    href: "/lake-greeson-near-glenwood",
  },
  {
    label: "Day trip guide",
    title: "Lake Greeson & Crater of Diamonds Day Trip",
    text: "A bigger Glenwood-area day trip guide connecting Lake Greeson, Swaha Lodge N Marina, Dam Grill, Murfreesboro, and Crater of Diamonds without making the day feel rushed.",
    href: "/lake-greeson-crater-of-diamonds-day-trip",
  },
  {
    label: "River access guide",
    title: "Best Caddo River Swimming Spots & Easy River Access",
    text: "A practical guide to getting in the Caddo around Glenwood, with notes on swimming spots, public access, float routes, outfitters, private land, and river levels.",
    href: "/caddo-river-swimming-access",
  },
  {
    label: "River guide",
    title: "Caddo River Guide",
    text: "A practical Glenwood river guide covering floats, tubing, launches, pickups, outfitters, what to bring, and weekend planning.",
    href: "/caddo-river",
  },
  {
    label: "Local history",
    title: "What Happened to Bard Springs?",
    text: "A local feature on Bard Springs, the history people remember, what it used to be, storm damage, and the question of restoration.",
    href: "/bard-springs",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="rounded-[2rem] border border-black/10 bg-white/40 p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Recent updates
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                New and updated Glenwood guides.
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)]">
                New local guides are being added around Glenwood, the Caddo
                River, Lake Greeson, nearby day trips, family stops, river
                access, and outdoor places worth knowing about.
              </p>
            </div>

            <Link
              href="/explore"
              className="text-sm font-bold text-[color:var(--color-accent)] underline"
            >
              Explore more guides
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update) => (
              <Link
                key={update.title}
                href={update.href}
                className="group rounded-[1.4rem] border border-black/10 bg-[color:var(--color-bg)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {update.label}
                </p>

                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {update.title}
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {update.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                  View update →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}