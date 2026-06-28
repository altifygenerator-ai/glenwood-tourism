import Link from "next/link";

const updates = [
  {
    label: "Visitor planning",
    title: "Visitor Essentials in Glenwood",
    text: "A new practical guide has been added for the little things visitors need before a Glenwood day outside, including food, ice, river supplies, cleanup, backup plans, and local planning links.",
    href: "/visitor-essentials-glenwood-ar",
  },
  {
    label: "Pet-friendly guide",
    title: "Pet-Friendly Glenwood Planning",
    text: "A new pet-friendly page helps visitors plan around cabins, dogs on the river, patios, heat, cleanup, access rules, and simple ways to travel with pets around Glenwood.",
    href: "/pet-friendly-glenwood-ar",
  },
  {
    label: "Backup plans",
    title: "Rainy Day Things To Do in Glenwood",
    text: "A new backup-plan guide helps visitors save the day when the Caddo River is too low, too high, stormy, crowded, or just not the right fit for the group.",
    href: "/rainy-day-things-to-do-glenwood-ar",
  },
  {
    label: "Trip check",
    title: "Caddo River Trip Check Added",
    text: "The Caddo River pages now include a practical trip-check section for recent rain, water levels, outfitters, river access, and backup plans before visitors commit to the water.",
    href: "/caddo-river",
  },
  {
    label: "River access guide",
    title: "Best Caddo River Swimming Spots & Easy River Access",
    text: "A practical guide to getting in the Caddo around Glenwood, with notes on swimming spots, public access, float routes, outfitters, private land, and river levels.",
    href: "/caddo-river-swimming-access",
  },
  {
    label: "Lake guide",
    title: "Lake Greeson Near Glenwood",
    text: "A practical guide to deciding whether Lake Greeson is worth adding to a Glenwood trip, with notes on boating, fishing, swimming, Swaha, Dam Grill, and pairing it with a Caddo River weekend.",
    href: "/lake-greeson-near-glenwood",
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
                access, visitor essentials, pet-friendly planning, and outdoor
                places worth knowing about.
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
