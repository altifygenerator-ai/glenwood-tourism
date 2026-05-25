import Link from "next/link";
import { johnBenjaminPondGuide } from "@/data/johnBenjaminPond";

export default function JohnBenjaminPondGuide() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              A quiet local Glenwood spot
            </div>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Not every good stop has to be a big attraction.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                John Benjamin Glenwood Community Fishing Pond is one of those
                simple local places that people around town actually use. It is
                not trying to be the{" "}
                <Link
                  href="/caddo-river"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  Caddo River
                </Link>{" "}
                or a full lake trip. It is a community pond where you can fish,
                sit by the water, and let the kids get outside for a while.
              </p>

              <p>
                Around Glenwood, that kind of easy outdoor stop is worth having.
                You can work it into a slow afternoon, stop by after grabbing
                food, or bring basic fishing gear and spend a little time by the
                water without making a whole day out of it.
              </p>

              <p>
                If you are planning a Glenwood visit, this fits well with other{" "}
                <Link
                  href="/explore"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  things to do around Glenwood
                </Link>
                , local restaurants, nearby events, and a simple family-friendly
                outdoor day.
              </p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white/55 shadow-sm">
            <img
              src="/images/glenwood/john-benjamin-pond-water.jpeg"
              alt="Water view at John Benjamin Glenwood Community Fishing Pond"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-3 text-2xl">Quick facts</h3>

              <ul className="space-y-3">
                {johnBenjaminPondGuide.quickFacts.map((fact) => (
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
            This is the kind of place that makes sense when you want something
            simple: a fishing rod, a little time outside, maybe kids running
            around, and a quiet spot close to town.
          </div>
        </div>
      </div>
    </section>
  );
}