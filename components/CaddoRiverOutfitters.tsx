import { caddoRiverGuide } from "@/data/caddoRiver";

export default function CaddoRiverOutfitters() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Local outfitters
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            Use an outfitter if you do not already know the river.
          </h2>

          <p className="text-lg leading-8">
            If you are new to the Caddo, an outfitter usually makes the day a
            lot simpler. They can tell you the current route, water conditions,
            launch times, shuttle setup, rental options, and what to expect.
          </p>
        </div>

        <div className="space-y-10">
          {caddoRiverGuide.outfitters.map((outfitter, index) => (
            <article
              key={outfitter.name}
              className="grid overflow-hidden rounded-[24px] border border-black/10 bg-white/45 shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={outfitter.image}
                  alt={outfitter.name}
                  className="h-80 w-full object-cover lg:h-full"
                />
              </div>

              <div className="p-7 md:p-10">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Outfitter info
                </div>

                <h3 className="mb-4 text-3xl md:text-4xl">
                  {outfitter.name}
                </h3>

                <p className="mb-6 text-base leading-8">
                  {outfitter.description}
                </p>

                <ul className="mb-7 space-y-3">
                  {outfitter.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-b border-black/10 pb-3 text-sm leading-6 text-[color:var(--color-muted)] last:border-0 last:pb-0"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <a
                  href={outfitter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Check Current Info
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}