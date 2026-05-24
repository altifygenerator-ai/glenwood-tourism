import Link from "next/link";

export default function CaddoRiverHomeFeature() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#2d2a26] shadow-xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/glenwood/river3.jpg"
                alt="Caddo River near Glenwood Arkansas"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 guide-dark">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] !text-white/55">
                Featured Glenwood guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                A practical guide to floating the Caddo River.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/75">
                The Caddo River is one of the biggest reasons people come to
                Glenwood. The guide answers the questions people actually ask:
                can you bring your own floats, where do you launch, where do
                you get picked up, what should you bring, and how to turn it
                into a simple Glenwood weekend.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/caddo-river"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Read the Caddo River Guide
                </Link>

                <Link
                  href="/glenwood-ar-cabins"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Find Cabins
                </Link>

                <Link
                  href="/this-weekend"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  This Weekend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}