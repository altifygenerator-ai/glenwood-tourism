import Image from "next/image";
import Link from "next/link";
import { glenwoodHistory } from "@/data/glenwood";
import Section from "@/components/tourism/Section";

export const metadata = {
  title: "History of Glenwood Arkansas | Railroad, Timber, Caddo River & Local Heritage",
  description:
    "Discover the history of Glenwood, Arkansas — from its railroad and timber roots to life along the Caddo River, the Ouachita foothills, and its modern outdoor tourism identity.",
  keywords: [
    "Glenwood Arkansas history",
    "Pike County Arkansas history",
    "Glenwood AR tourism",
    "Glenwood Arkansas railroad history",
    "Glenwood Arkansas timber history",
    "Caddo River history",
    "Arkansas small towns",
  ],
};

const historyHighlights = [
  {
    title: "Railroad Roots",
    text: "Glenwood grew quickly in the early 1900s as rail access opened the area to timber, commerce, and new settlement.",
  },
  {
    title: "Timber Town Story",
    text: "Lumber, mills, workers, merchants, and transportation helped shape the early town and its place in southwest Arkansas.",
  },
  {
    title: "Caddo River Life",
    text: "The Caddo River has long been part of Glenwood’s setting, first as part of daily life and now as one of its biggest visitor draws.",
  },
  {
    title: "Outdoor Identity",
    text: "Today, Glenwood is known for river floats, cabins, camping, local food, Lake Greeson, and regional day trips.",
  },
];

export default function HistoryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Glenwood, Arkansas",
            description:
              "A scenic southwest Arkansas town shaped by railroads, timber, the Caddo River, small-town community life, and outdoor recreation.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Glenwood",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[#2d2a26] text-white">
        <Image
          src={glenwoodHistory.hero.image}
          alt="Historic Glenwood Arkansas"
          fill
          className="object-cover opacity-45"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Local History
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              {glenwoodHistory.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {glenwoodHistory.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/explore"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Explore Things To Do
              </Link>

              <Link
                href="/caddo-river"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Caddo River Guide
              </Link>

              <Link
                href="/glenwood-ar-restaurants"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Local Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Glenwood’s Story
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
              A town shaped by railroads, timber, the river, and the outdoors.
            </h2>

            <div className="space-y-4 leading-relaxed text-[color:var(--color-muted)]">
              <p>
                Glenwood’s history gives the town more depth than just being a
                stop near the Caddo River. Its early growth came through
                railroad expansion, timber work, local commerce, and the
                practical needs of a growing southwest Arkansas community.
              </p>

              <p>
                Over time, the same natural setting that supported local life —
                the river, the foothills, the roads, the forests, and the nearby
                lakes — became part of Glenwood’s modern visitor identity.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {historyHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-20">
          {glenwoodHistory.sections.map((section, index) => (
            <article
              key={`${section.title}-${index}`}
              className="grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
                  <div className="relative h-[300px] md:h-[380px]">
                    <Image
                      src={section.images[0]}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {section.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-3 p-3">
                      {section.images.slice(1).map((img, i) => (
                        <div
                          key={img}
                          className="relative h-[130px] overflow-hidden rounded-2xl"
                        >
                          <Image
                            src={img}
                            alt={`${section.title} image ${i + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  Chapter {index + 1}
                </p>

                <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
                  {section.title}
                </h2>

                <p className="leading-8 text-[color:var(--color-muted)]">
                  {section.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                History Meets Tourism
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Glenwood’s past still shapes the way people experience it today.
              </h2>
            </div>

            <div className="space-y-4 leading-relaxed text-[color:var(--color-muted)]">
              <p>
                The older story of Glenwood helps explain why the town sits
                where it does and why it still works as a practical stop for
                visitors. What started around rail, timber, work, roads, and
                community life now supports a different kind of movement:
                travelers coming through for the river, cabins, food, lake
                weekends, and local events.
              </p>

              <p>
                That mix is what gives Glenwood its current identity. It is
                still a real small town, but it also gives visitors access to
                the Caddo River, Lake Greeson, Crater of Diamonds, Hot Springs,
                Mount Ida, Amity, and the wider Ouachita region.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/explore"
                  className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Explore Glenwood
                </Link>

                <Link
                  href="/glenwood-ar-cabins"
                  className="rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
                >
                  Cabins & Stays
                </Link>

                <Link
                  href="/events"
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-white/70"
                >
                  Local Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}