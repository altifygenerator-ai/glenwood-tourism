import { johnBenjaminPondGuide } from "@/data/johnBenjaminPond";

export default function JohnBenjaminPondFishing() {
  return (
    <section id="fishing-info" className="section bg-white/35">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Fishing info
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            A simple local place to fish in Glenwood.
          </h2>

          <p className="text-lg leading-8">
            John Benjamin Pond is best treated as a community fishing stop. It
            is good for an easy cast, a quick outdoor break, or getting kids
            around the water without planning a full river or lake trip.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {johnBenjaminPondGuide.fishingNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-6 shadow-sm"
            >
              <h3 className="mb-3 text-2xl">{note.title}</h3>
              <p className="text-sm leading-7">{note.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <img
              src="/images/glenwood/john-benjamin-pond-fishing.jpeg"
              alt="Fishing at John Benjamin Glenwood Community Fishing Pond"
              className="h-96 w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-7 md:p-9">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Before you fish
            </div>

            <h3 className="mb-5 text-3xl">Check current rules first.</h3>

            <p className="mb-6 text-base leading-8">
              Fishing rules and stocking details can change, so do not treat any
              guide page as the final word. Check Arkansas Game and Fish
              regulations and posted signs before keeping fish.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {johnBenjaminPondGuide.regulations.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-semibold text-[color:var(--color-text)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://www.agfc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-7"
            >
              Check AGFC Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}