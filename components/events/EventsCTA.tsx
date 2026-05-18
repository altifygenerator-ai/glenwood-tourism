import Link from "next/link";

type EventsCTAProps = {
  title?: string;
  text?: string;
};

export default function EventsCTA({
  title = "Planning a Glenwood trip?",
  text = "Check what’s happening around town before you go. Local events, river-season gatherings, live music, markets, and family-friendly things will be added as they’re approved.",
}: EventsCTAProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="overflow-hidden rounded-3xl bg-[#2d2a26] text-white shadow-sm">
        <div className="grid gap-8 p-8 md:grid-cols-[1.35fr_0.75fr] md:items-center md:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Before You Go
            </p>

            <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h2>

            <p className="max-w-2xl leading-relaxed text-white/75">{text}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Events help locals and visitors find more reasons to stop, shop,
              eat, stay, and explore around Glenwood.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/this-weekend"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                This Weekend
              </Link>

              <Link
                href="/events"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Events
              </Link>

              <Link
                href="/submit-event"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Submit Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}