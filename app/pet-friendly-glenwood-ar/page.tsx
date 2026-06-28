import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pet-Friendly Glenwood Arkansas | Caddo River Trips, Cabins & Dog-Friendly Planning",
  description:
    "Plan a pet-friendly Glenwood, Arkansas trip with notes on Caddo River days, cabins, outdoor stops, restaurants, heat, access, cleanup, and dog-friendly travel basics.",
  alternates: {
    canonical: "/pet-friendly-glenwood-ar",
  },
};

const petCards = [
  {
    title: "Check lodging rules first",
    text: "Do not assume every cabin, motel, campground, or private rental allows pets. Check rules, fees, size limits, and yard or leash expectations before you book.",
    href: "/glenwood-ar-cabins",
    label: "Compare Stays",
  },
  {
    title: "Plan river time carefully",
    text: "Dogs can enjoy river trips, but the Caddo still needs real attention. Watch current, heat, slick rocks, other floaters, access rules, and how long your dog can actually stay outside.",
    href: "/caddo-river-swimming-access",
    label: "River Access Guide",
  },
  {
    title: "Build in shade and water",
    text: "Warm Arkansas days can wear pets down fast. Bring water, shade, towels, cleanup bags, and a plan for cooling off without leaving pets in a hot vehicle.",
    href: "/visitor-essentials-glenwood-ar",
    label: "Visitor Essentials",
  },
  {
    title: "Keep food plans flexible",
    text: "Pet-friendly meals usually depend on patios, weather, crowds, and current business rules. Call ahead before planning the whole day around one stop.",
    href: "/glenwood-ar-restaurants",
    label: "Restaurant Guide",
  },
];

const reminders = [
  "Bring a leash even if your dog is usually good off leash.",
  "Pack cleanup bags and use them at river access, cabins, parks, and parking areas.",
  "Keep dogs away from private property, posted areas, and crowded launch points.",
  "Watch paws on hot pavement, gravel, rocks, docks, and rough river edges.",
  "Ask before bringing pets into shops, patios, outfitters, or lodging offices.",
  "Have a quiet backup plan if weather, crowds, or river conditions are not a good fit.",
];

export default function PetFriendlyGlenwoodPage() {
  return (
    <main>
      <section className="relative min-h-[76vh] overflow-hidden dark-section">
        <Image
          src="/images/glenwood/river2.webp"
          alt="Caddo River near Glenwood Arkansas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,34,28,0.88),rgba(24,34,28,0.58),rgba(24,34,28,0.24))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,250,240,0.16),transparent_32%)]" />

        <div className="container relative z-10 flex min-h-[76vh] items-center py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-white/75">
              Pet-Friendly Glenwood
            </p>
            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Bringing a dog to Glenwood or the Caddo River?
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              A practical guide for planning pet-friendly stays, river days,
              outdoor time, food stops, cleanup, heat, and backup plans around
              Glenwood, Arkansas.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/glenwood-ar-cabins" className="btn btn-light">
                Cabins & Stays
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
                Start With The Rules
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                Pet-friendly trips work best when nothing is assumed.
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-8">
              <p>
                Glenwood is an outdoor town, and that can make it a good fit
                for travelers with dogs. But pet-friendly does not mean every
                place, patio, access point, or rental is open to pets every day.
              </p>
              <p>
                Confirm lodging rules, ask businesses before bringing pets
                inside or onto patios, and plan river time around heat, current,
                crowds, and cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {petCards.map((item) => (
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
                Dog-Friendly Basics
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                Good pet trips are mostly common sense and respect.
              </h2>
              <p className="mt-5 leading-8">
                A few simple habits help keep the river, cabins, parks, patios,
                and local businesses easier for everyone who comes after you.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reminders.map((item) => (
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
          <div className="rounded-[34px] bg-[var(--color-text)] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
                  Local notes welcome
                </p>
                <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
                  Know a pet-friendly local stop that should be listed?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/78">
                  Pet rules can change, so this guide should stay practical. If
                  you know a cabin, patio, shop, trail note, or local business
                  that welcomes pets, send the details in.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact" className="btn btn-light">
                  Send an Update
                </Link>
                <Link href="/glenwood-ar-cabins" className="btn">
                  View Stays
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
