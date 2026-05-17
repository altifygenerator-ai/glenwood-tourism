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
      <div className="rounded-3xl bg-[#2d2a26] p-8 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.7fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Before You Go
            </p>

            <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
              {title}
            </h2>

            <p className="max-w-2xl leading-relaxed text-white/75">{text}</p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/this-weekend"
              className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black"
            >
              This Weekend
            </Link>

            <Link
              href="/events"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white"
            >
              View Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}