import Link from "next/link";
import { caddoRiverGuide } from "@/data/caddoRiver";

export default function CaddoRiverGuideIntro() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              A local-style river guide
            </div>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              What to know before you float the Caddo River.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                The Caddo River is one of the main reasons people come to{" "}
                <Link
                  href="/"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  Glenwood
                </Link>
                . Some folks come to float, some come to swim, some come for a{" "}
                <Link
                  href="/glenwood-ar-cabins"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  cabin weekend
                </Link>
                , and some just want a place where the kids can wear themselves
                out in the water.
              </p>

              <p>
                It is not complicated, but it does go better if you know how the
                river works before you show up. River levels matter. Weather
                matters. Launch spots and takeouts matter. And if you are
                bringing your own tube or kayak, you still need to think about
                parking and shuttle rides.
              </p>

              <p>
                This guide keeps it practical: what kind of Caddo River trip to
                plan, where people usually launch, how pickups work, what local
                outfitters offer, and what to bring before you head toward the
                water. After the river, you can build the rest of the trip
                around{" "}
                <Link
                  href="/glenwood-ar-restaurants"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  local restaurants
                </Link>
                ,{" "}
                <Link
                  href="/events"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  Glenwood events
                </Link>
                , and easy outdoor stops.
              </p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white/55 shadow-sm">
            <img
              src="/images/glenwood/rivercanoe.jpg"
              alt="Canoeing on the Caddo River near Glenwood Arkansas"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-3 text-2xl">Quick facts</h3>

              <ul className="space-y-3">
                {caddoRiverGuide.facts.map((fact) => (
                  <li
                    key={fact}
                    className="border-b border-black/10 pb-3 text-sm leading-6 text-[color:var(--color-muted)] last:border-0 last:pb-0"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[24px] bg-[color:var(--color-accent)] p-7 md:p-10">
          <div className="max-w-4xl text-xl leading-9 !text-white/85">
            The big thing with the Caddo is simple: do not guess the river.
            Check the water, ask what route is running, know where you launch
            and where you end, and use an outfitter if you are not already set
            up with vehicles and local river knowledge.
          </div>
        </div>
      </div>
    </section>
  );
}