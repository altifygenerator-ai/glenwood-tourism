import Link from "next/link";
import { johnBenjaminPondGuide } from "@/data/johnBenjaminPond";

export default function JohnBenjaminPondVisit() {
  const { visitTips, gallery, links } = johnBenjaminPondGuide;

  return (
    <section id="visit-tips" className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Plan a simple visit
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            Good for fishing, kids, and a slow Glenwood afternoon.
          </h2>

          <p className="text-lg leading-8">
            This is not a complicated stop. Bring what you need, keep the area
            clean, watch kids near the water, and enjoy it for what it is — a
            quiet local pond and park area.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visitTips.map((tip) => (
            <article
              key={tip.title}
              className="rounded-[24px] border border-black/10 bg-white/45 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-2xl">{tip.title}</h3>
              <p className="text-sm leading-7">{tip.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Pond photos
            </div>

<h2 className="mb-4 text-3xl md:text-4xl">
  Some local views from around the pond.
</h2>

<p className="text-lg leading-8">
  A few real photos from around John Benjamin Pond — water views, fishing spots,
  and the simple park setting that make it a nice little place to slow down,
  cast a line, or let the kids hang out for a while.
</p>
</div>

          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((photo) => (
              <img
                key={photo.image}
                src={photo.image}
                alt={photo.alt}
                className="h-80 w-full rounded-[24px] object-cover"
              />
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[28px] bg-[#2d2a26] p-7 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-4xl leading-tight text-white">
                Looking for more around Glenwood?
              </h2>

              <div className="text-base leading-8 !text-white/75">
                John Benjamin Pond is an easy local stop, but you can also build
                the rest of the day around the Caddo River, local food, nearby
                events, cabins, and other outdoor places around Glenwood.
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2d2a26]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}