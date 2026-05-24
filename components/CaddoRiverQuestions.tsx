import { caddoRiverGuide } from "@/data/caddoRiver";

export default function CaddoRiverQuestions() {
  return (
    <section id="river-questions" className="section bg-white/35">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            River questions people actually ask
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            Can you bring your own floats? Where do you launch? Where do you get
            picked up?
          </h2>

          <p className="text-lg leading-8">
            These are the questions that matter before you load the cooler,
            pack the kids, or drive into Glenwood on a summer weekend.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {caddoRiverGuide.commonQuestions.map((item) => (
            <article
              key={item.question}
              className="rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-6 shadow-sm"
            >
              <h3 className="mb-3 text-2xl">{item.question}</h3>
              <p className="text-sm leading-7">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caddoRiverGuide.tripTypes.map((trip) => (
            <article
              key={trip.title}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] shadow-sm"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl">{trip.title}</h3>
                <p className="text-sm leading-7">{trip.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-7 md:p-10">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Common route setup
            </div>

            <h2 className="mb-4 text-3xl md:text-4xl">
              Ask which route is running before you go.
            </h2>

            <p className="text-lg leading-8">
              River routes can change with water level and outfitter setup. Do
              not assume every tube, kayak, or canoe trip launches and ends in
              the same place.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {caddoRiverGuide.routes.map((route) => (
              <div
                key={route.name}
                className="rounded-2xl border border-black/10 bg-white/60 p-5"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {route.bestFor}
                </p>

                <h3 className="mb-3 text-2xl">{route.name}</h3>

                <p className="text-sm leading-7">{route.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}