export default function Intro({ data }: any) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
          Glenwood Guide
        </p>

        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          {data.heading}
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {[
            "Good for river weekends",
            "Easy cabin and camping base",
            "Close to Lake Greeson",
            "Useful for regional day trips",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] px-4 py-3 text-sm font-semibold text-[color:var(--color-text)] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8">
        <p className="whitespace-pre-line leading-8 text-[color:var(--color-muted)]">
          {data.text}
        </p>

        <div className="mt-7 rounded-xl border border-[color:var(--color-accent)]/20 bg-[color:var(--color-bg)] p-5">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
            Best way to use this guide
          </p>

          <p className="text-sm leading-6 text-[color:var(--color-muted)]">
            Start with where you want to stay or what you want to do first, then
            build the rest of your trip around food, events, river access, lake
            time, and nearby day trips.
          </p>
        </div>
      </div>
    </div>
  );
}