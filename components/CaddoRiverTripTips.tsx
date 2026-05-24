import Link from "next/link";
import { caddoRiverGuide } from "@/data/caddoRiver";

export default function CaddoRiverTripTips() {
  return (
    <section id="what-to-bring" className="section bg-white/35">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Pack for river time
            </div>

            <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
              What to bring for a Caddo River float.
            </h2>

            <p className="mb-6 text-lg leading-8">
              You do not need to overcomplicate it, but do not show up empty
              handed either. The river is still outdoors, and a little planning
              can save the whole day.
            </p>

            <img
              src="/images/glenwood/rocks.jpg"
              alt="Rocks and water along the Caddo River"
              className="mt-8 h-80 w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-7 md:p-9">
            <h3 className="mb-5 text-3xl">Simple packing list</h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {caddoRiverGuide.packingList.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-semibold text-[color:var(--color-text)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7">
              Also ask your outfitter about current rules for coolers, glass,
              trash bags, life jackets, and return times before you launch.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[24px] bg-[color:var(--color-accent)] p-7 md:p-10">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/65">
              Bringing kids?
            </div>

            <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
              Keep the river day simple.
            </h2>

            <div className="mb-6 text-lg leading-8 !text-white/80">
              The Caddo can be a great family river, but kids get tired fast
              when it is hot, slow, or the day runs long. Pick the right trip,
              check the water, and do not try to do everything in one day.
            </div>

            <ul className="space-y-3">
              {caddoRiverGuide.kidTips.map((tip) => (
                <li
                  key={tip}
                  className="border-b border-white/15 pb-3 text-sm leading-6 text-white/90 last:border-0 last:pb-0"
                >
                  {tip}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/this-weekend"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[color:var(--color-text)]"
              >
                See What’s Happening This Weekend
              </Link>
            </div>
          </div>

          <img
            src="/images/glenwood/floats.webp"
            alt="Caddo River near Glenwood Arkansas"
            className="h-96 w-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}