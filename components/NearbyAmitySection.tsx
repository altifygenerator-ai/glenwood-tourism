import Link from "next/link";

const amityStops = [
  {
    name: "Hometown Pizza",
    type: "Pizza • Casual Food • Amity",
    description:
      "A nearby Amity food stop that can work well for families, cabin weekends, Caddo River trips, Lake Greeson days, or anyone wanting another simple meal option outside Glenwood.",
  },
  {
    name: "Trudy’s Cafe",
    type: "Cafe • Local Food • Amity",
    description:
      "A small-town cafe option worth keeping on your map if you are exploring the Glenwood and Amity area, driving the backroads, or looking for a local meal nearby.",
  },
  {
    name: "Fox Pen",
    type: "Local Stop • Amity Area",
    description:
      "A local Amity-area stop to keep in mind while exploring nearby towns and backroads. Check current details before making a special trip.",
  },
  {
    name: "The Sun Room",
    type: "Local Business • Amity",
    description:
      "A local Amity business that fits better as a nearby local stop than a visitor attraction, but still helps show what is available around the area.",
  },
];

export default function NearbyAmitySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div
        className="overflow-hidden rounded-3xl border shadow-sm"
        style={{
          borderColor: "rgba(45, 42, 38, 0.14)",
          background:
            "linear-gradient(135deg, rgba(255,250,240,0.92), rgba(247,240,227,0.72))",
        }}
      >
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Nearby Amity
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              A few Amity stops to keep on your map.
            </h2>

            <p className="mt-5 leading-relaxed text-[color:var(--color-muted)]">
              If you are staying around Glenwood, floating the Caddo, visiting
              Lake Greeson, or driving between nearby small towns, Amity is close
              enough to be worth mentioning. It is not Glenwood, but it gives
              visitors a few more local food and business options nearby.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://amityarkansas.org"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Amity Guide →
              </a>

              <Link
                href="/explore"
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-black/5"
              >
                Back to Glenwood Guide
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {amityStops.map((stop) => (
              <article
                key={stop.name}
                className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                  {stop.type}
                </p>

                <h3 className="text-2xl font-semibold leading-tight">
                  {stop.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {stop.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 px-7 py-5 md:px-10">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Local hours, ownership, and details can change in small towns, so it
            is always worth checking Facebook, Google, or calling before making
            a special trip.
          </p>
        </div>
      </div>
    </section>
  );
}