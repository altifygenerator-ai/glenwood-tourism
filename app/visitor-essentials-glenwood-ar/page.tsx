import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Visitor Essentials in Glenwood Arkansas | Food, Fuel & River Supplies",
  description:
    "A practical Glenwood, Arkansas visitor essentials guide for food, fuel, river supplies, ice, groceries, local stops, cabins, events, and simple trip planning around the Caddo River.",
  alternates: {
    canonical: "/visitor-essentials-glenwood-ar",
  },
};

const essentials = [
  {
    title: "Food before and after the river",
    text: "Plan breakfast, coffee, lunch, dinner, or a quick meal before the day gets busy. After river time, most visitors want something close, easy, and not overcomplicated.",
    href: "/glenwood-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Cabins and places to stay",
    text: "A good place to stay can make the whole trip easier, especially for families, groups, float weekends, Lake Greeson plans, and slower outdoor weekends.",
    href: "/glenwood-ar-cabins",
    label: "View Stays",
  },
  {
    title: "River planning basics",
    text: "Check water, weather, access, parking, launch and pickup plans, and whether an outfitter is the better route for your group before unloading gear.",
    href: "/caddo-river",
    label: "Caddo River Guide",
  },
  {
    title: "Backup plans",
    text: "If the river is not right, the trip can still work with local food, shops, Lake Greeson, nearby drives, events, and cabin downtime.",
    href: "/rainy-day-things-to-do-glenwood-ar",
    label: "Rainy Day Ideas",
  },
];

const packingNotes = [
  "Water shoes or sandals that can get wet",
  "Dry bags, towels, sunscreen, and extra clothes",
  "Ice, drinks, snacks, and water for the group",
  "Trash bags so the river and access points stay clean",
  "Phone charger, directions, and a backup plan before service gets spotty",
  "Leashes and cleanup bags if you are traveling with dogs",
];

const localPlanning = [
  {
    title: "Before the float",
    text: "Grab food, ice, drinks, sunscreen, and anything you do not want to chase later. Confirm where your group is putting in, taking out, and parking before you head to the river.",
  },
  {
    title: "During the day",
    text: "Watch the weather, keep kids close, respect posted access, and do not assume every pull-off or gravel bar is public. The Caddo is part of why people love Glenwood, so treat it that way.",
  },
  {
    title: "After the river",
    text: "Most visitors want food, showers, dry clothes, an easy place to sit down, or a simple evening at the cabin. Plan that part before everyone is tired.",
  },
];

export default function VisitorEssentialsPage() {
  return (
    <main>
      <section className="relative min-h-[76vh] overflow-hidden dark-section">
        <Image
          src="/images/glenwood/oldtown.jpg"
          alt="Glenwood Arkansas local buildings and visitor stops"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,34,28,0.88),rgba(24,34,28,0.58),rgba(24,34,28,0.22))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,250,240,0.16),transparent_32%)]" />

        <div className="container relative z-10 flex min-h-[76vh] items-center py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-white/75">
              Visitor Essentials
            </p>
            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              What to handle before a Glenwood river day.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              A practical starting point for food, stays, river supplies,
              backup plans, local stops, and the little things that make a
              Glenwood trip easier once you are already in town.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/glenwood-ar-restaurants" className="btn btn-light">
                Places To Eat
              </Link>
              <Link href="/caddo-river" className="btn">
                Caddo River Guide
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
                Start Here
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                Glenwood trips usually come down to simple local details.
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-8">
              <p>
                Visitors usually come for the Caddo River, cabins, camping,
                Lake Greeson, or a slower outdoor weekend. The trip gets easier
                when the practical pieces are handled early: food, ice, water,
                directions, river access, and where everyone is going after the
                day outside.
              </p>
              <p>
                This page is not meant to be fancy. It is meant to help people
                think through the basics before they are standing in town trying
                to figure out the next move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {essentials.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Before You Go
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                A simple river-day checklist.
              </h2>
              <p className="mt-5 leading-8">
                The exact list depends on your group, but these are the things
                visitors most often wish they had handled before the river day
                started.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {packingNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white/60 p-5"
                >
                  <p className="font-semibold leading-6 !text-[color:var(--color-text)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              How to Think About It
            </p>
            <h2>Plan the trip in the order you will need it.</h2>
            <p>
              A Glenwood day feels easier when the plan follows the real flow of
              the trip: before the river, during the day, and after everyone is
              tired.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {localPlanning.map((item) => (
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

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[34px] bg-[var(--color-text)] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
                  Local updates welcome
                </p>
                <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
                  Know a useful Glenwood visitor stop we should add?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/78">
                  If there is a local business, river note, food stop, supply
                  stop, or practical visitor tip that belongs in this guide,
                  send it in so the page can stay useful.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact" className="btn btn-light">
                  Send an Update
                </Link>
                <Link href="/local-business" className="btn">
                  Local Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
