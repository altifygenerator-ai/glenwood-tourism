export default function AmityMarketHomeFeature() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Coming up nearby
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
              Amity Saturday Market · September 19
            </h2>

            <p className="mt-5 leading-relaxed text-[color:var(--color-muted)]">
              Just down the road from Glenwood, the first Amity Saturday Market
              is planned around the town square for Saturday, September 19,
              2026. The market runs from 9 a.m. to 2 p.m., making it an easy
              nearby stop for a Glenwood weekend, Caddo River trip, or Saturday
              drive through the area.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.amityarkansas.org/amity-saturday-market"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                See Market Details →
              </a>

              <a
                href="https://www.amityarkansas.org/amity-saturday-market/vendor-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white"
              >
                Vendor Application
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                Date & time
              </p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">
                Saturday, September 19
              </p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                9 a.m.–2 p.m. · Amity town square
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                Vendor interest
              </p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">
                21 vendors have already applied
              </p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                Handmade goods, food, farm items, resale, jewelry, soaps,
                clothing, crafts, local services, and more are represented so
                far.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-5 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                First market trial
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                The event is being built to work with the local businesses
                already in Amity while giving area vendors and families another
                reason to spend a Saturday nearby. Vendor layout, permits,
                parking, and the final setup details are still being worked
                through, so use the Amity market page for the latest information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
