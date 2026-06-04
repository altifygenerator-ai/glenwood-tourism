import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Caddo River Swimming Spots & Easy River Access Around Glenwood, Arkansas",
  description:
    "A practical Glenwood, Arkansas guide to Caddo River swimming spots, public access, float put-ins, outfitters, river levels, family tips, and what to know before getting in the water.",
  alternates: {
    canonical: "/caddo-river-swimming-access",
  },
};

const accessCards = [
  {
    title: "Best easy town access",
    place: "Glenwood City Park / Public Access",
    text: "A good starting point for visitors who want the simplest river access close to town.",
  },
  {
    title: "Best classic float",
    place: "Caddo Gap to Glenwood",
    text: "The well-known Glenwood-area float, commonly listed around 7.5 miles when water levels allow.",
  },
  {
    title: "Best known swimming area",
    place: "The Narrows / Hwy 240 area",
    text: "A popular Caddo River swimming-hole area, but access can depend on private property, campgrounds, or outfitters.",
  },
  {
    title: "Best lower-river option",
    place: "Glenwood to Amity",
    text: "A longer paddling route better suited for people planning a float, shuttle, or fishing trip.",
  },
];

const accessSpots = [
  {
    title: "Glenwood City Park / Glenwood Public Access",
    kicker: "Best for a quick swim or easy take-out",
    image: "/images/glenwood/glenwoodriver.jpg",
    alt: "Caddo River water near Glenwood Arkansas",
    body: [
      "For most visitors, Glenwood City Park is the easiest place to understand first. It is close to town, commonly used as a take-out, and gives people a simple place to start when they are trying to figure out where the river actually meets Glenwood.",
      "This is the kind of spot that makes sense for someone who does not want to plan a full float. Maybe you are staying nearby, grabbing lunch in town, or just trying to let the kids cool off for a little while. It is not the only access on the river, but it is one of the cleanest starting points for a visitor guide because it is tied directly to Glenwood.",
      "As with any river access, check signs, parking, water level, and current conditions before treating it like an all-day beach spot. The Caddo is a real river, not a swimming pool, and conditions can change after rain.",
    ],
  },
  {
    title: "Caddo Gap / Upper Access Area",
    kicker: "Best starting area for the classic Glenwood float",
    image: "/images/glenwood/floats.webp",
    alt: "People floating the Caddo River near Glenwood Arkansas",
    body: [
      "When people talk about floating the Caddo near Glenwood, they are usually talking about the Caddo Gap to Glenwood stretch. This is the classic route many visitors rent canoes, kayaks, tubes, or rafts for, and it gives you more of a full river day than a quick swim stop.",
      "The Caddo Gap area is important because it sits upstream from Glenwood and connects to that popular float. Depending on where you put in, current access and parking may involve signs, outfitters, private property, or paid parking. That is why first-time visitors are usually better off calling an outfitter instead of guessing.",
      "If you have your own kayak or tube, do not assume every gravel pull-off is fair game. Some places along the river look open but are private land, and parking rules can change. Ask locally, check signs, and use marked or managed access points.",
    ],
  },
  {
    title: "The Narrows / Hwy 240 Area",
    kicker: "Best known swimming-hole area, but check access first",
    image: "/images/glenwood/river2.webp",
    alt: "Clear Caddo River water and rocky riverbank near Glenwood",
    body: [
      "The Narrows is one of those Caddo River names that comes up when people talk about swimming holes around Glenwood. It has a reputation for deeper, cooler water and a more classic Arkansas river feel, with rock, shade, and that slower summer-day pace people are usually looking for.",
      "The important part is access. Some of the convenient swimming and river access around this stretch is connected to private campgrounds, outfitters, or property that may not be open to the general public without permission or payment. That does not mean you cannot enjoy the area. It just means you should not treat it like a free public park unless you know for sure.",
      "This is a good section to mention in a guide because people search for it and ask about it, but it should be written with respect. Call ahead, use outfitters when needed, and do not block roads, gates, river access, or someone’s private land.",
    ],
  },
  {
    title: "Caddo Gap to Glenwood Float",
    kicker: "Best full float for most visitors",
    image: "/images/glenwood/rivercanoes.jpg",
    alt: "Canoes lined up along the Caddo River in Glenwood Arkansas",
    body: [
      "If you want to do more than swim for an hour, Caddo Gap to Glenwood is the stretch most visitors hear about first. It is long enough to feel like a real river trip, but still common enough that local outfitters know how to help people plan around river levels, pickup points, and timing.",
      "On a good day, this float gives you a mix of moving water, calmer pools, gravel bars, and places to slow down. It is one of the reasons Glenwood stays tied so closely to the Caddo. The river is not just scenery here. It is part of how people spend the weekend.",
      "For families or first-timers, renting through a local outfitter is usually the easiest route. They can tell you whether the water is right, what route they are using that day, and whether a shorter or lower-water option makes more sense.",
    ],
  },
  {
    title: "Glenwood to Amity / Hwy 182",
    kicker: "Best for longer paddling, fishing, or a lower river route",
    image: "/images/glenwood/river3.jpg",
    alt: "Bridge and Caddo River scene near Glenwood Arkansas",
    body: [
      "The lower stretch from Glenwood toward Amity is a better fit for people who are planning a float, fishing trip, or self-shuttle, not someone just looking for a simple place to swim with kids. It gives the article another useful option without pretending every visitor needs to start there.",
      "This section can make sense when the upper route is not the right fit, or when someone wants more time on the water. Still, it takes more planning. You need to think about where you are putting in, where you are taking out, how long the route will take, and whether the water level is right for the day.",
      "If you are new to the area, ask an outfitter before choosing this as your first Caddo River trip. It is better to get local advice than to find out halfway through that you picked the wrong stretch for your group.",
    ],
  },
];

export default function CaddoRiverSwimmingAccessPage() {
  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden dark-section">
        <Image
          src="/images/glenwood/river3.jpg"
          alt="Caddo River access near Glenwood Arkansas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,34,28,0.86),rgba(24,34,28,0.52),rgba(24,34,28,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,250,240,0.18),transparent_32%)]" />

        <div className="container relative z-10 flex min-h-[78vh] items-center py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-white/75">
              Caddo River Guide
            </p>
            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Best Caddo River Swimming Spots & Easy River Access Around
              Glenwood
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              Where to get in the water for a quick swim, a family river day,
              or a classic Glenwood-area float, plus what to know about public
              access, private land, outfitters, and river levels before you go.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#access-spots" className="btn btn-light">
                View River Access
              </Link>
              <Link href="/caddo-river" className="btn">
                Main Caddo River Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-bg)]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-4">
            {accessCards.map((card) => (
              <article key={card.title} className="card">
                <div className="card-content">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {card.title}
                  </p>
                  <h2 className="mb-3 text-2xl">{card.place}</h2>
                  <p className="text-sm leading-7">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-card)]">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Start here
            </p>
            <h2 className="mb-6 text-4xl md:text-5xl">
              Not everybody coming to the Caddo is looking for the same kind of
              river day.
            </h2>
            <div className="space-y-5 text-lg leading-8">
              <p>
                Some people want a full float from Caddo Gap to Glenwood. Some
                are staying in a cabin and just want a place to cool off. Some
                have kids with them and need something easy. Others are pulling
                a kayak, looking for a gravel bar, or trying to figure out where
                the river access actually is without guessing from a map.
              </p>
              <p>
                That is where the Caddo can get a little confusing. Glenwood is
                a river town, but not every pretty place along the water is
                public access. Some areas are tied to outfitters, campgrounds,
                private property, or access rules that can change from season to
                season.
              </p>
              <p>
                This guide is meant to give you a practical starting point. It
                is not a promise that every spot is open every day. Before you
                park, swim, float, or unload gear, check signs, respect private
                land, and ask locally when you are unsure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="access-spots" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Where to get in the river
            </p>
            <h2>Caddo River access spots around Glenwood</h2>
            <p>
              These are the main areas visitors usually hear about when they
              are trying to swim, float, or get on the Caddo near Glenwood.
            </p>
          </div>

          <div className="space-y-10">
            {accessSpots.map((spot, index) => (
              <article
                key={spot.title}
                className={`grid items-center gap-8 rounded-[32px] border border-black/10 bg-[rgba(255,250,240,0.72)] p-5 md:grid-cols-2 md:p-8 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[340px] overflow-hidden rounded-[26px] bg-[var(--color-accent)]">
                  <Image
                    src={spot.image}
                    alt={spot.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {spot.kicker}
                  </p>
                  <h3 className="mb-5 text-4xl leading-tight">{spot.title}</h3>
                  <div className="space-y-4 text-[1.02rem] leading-8">
                    {spot.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section guide-dark relative overflow-hidden bg-[var(--color-accent)]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/glenwood/rocks.jpg"
            alt="Rocks and clear water along the Caddo River"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(34,52,41,0.84)]" />

        <div className="container relative z-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white/70">
                Before you go
              </p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                River access is easier when you plan around the water, not just
                the map.
              </h2>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-2xl">Check the level</h3>
                <p className="leading-8">
                  The Caddo can feel completely different depending on recent
                  rain and summer water levels. A route that is easy one week
                  may be too low, too pushy, or better suited for a different
                  stretch the next.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-2xl">Use outfitters when unsure</h3>
                <p className="leading-8">
                  For first-time visitors, outfitters take a lot of the guesswork
                  out of the day. They can help with parking, launch points,
                  pickup, float length, and whether the water is right for your
                  group.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-2xl">Respect private land</h3>
                <p className="leading-8">
                  A gravel bar beside the river does not always mean public
                  access. Do not block drives, gates, roads, or take-outs. If a
                  spot is posted or unclear, move on or ask locally.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-2xl">Leave it better</h3>
                <p className="leading-8">
                  Pack out trash, skip glass on the river, keep an eye on kids
                  and dogs, and treat the Caddo like something the whole
                  community has to live with after the weekend is over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-card)]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Quick answer
              </p>
              <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
                So where should you start?
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p>
                  If you just want the simplest place to understand, start with
                  Glenwood City Park and the public access area in town.
                </p>
                <p>
                  If you want the classic float, look at the Caddo Gap to
                  Glenwood route and talk to a local outfitter before you go.
                </p>
                <p>
                  If you are asking about The Narrows or Hwy 240, check current
                  access first. It may be one of the best-known swimming areas,
                  but it is also the kind of place where private property and
                  managed access matter.
                </p>
                <p>
                  If you want a longer paddling or fishing day, the lower route
                  toward Amity may be worth asking about, especially if you have
                  your own gear and a shuttle plan.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-card">
                <Image
                  src="/images/glenwood/glenwoodriver2.jpg"
                  alt="Kayaking on the Caddo River near Glenwood Arkansas"
                  width={900}
                  height={650}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="card-content">
                <h3>Planning a Caddo River day?</h3>
                <p className="mb-5 leading-7">
                  Build the rest of the trip around food, cabins, events, and
                  other Glenwood stops nearby.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/caddo-river" className="btn">
                    Caddo River Guide
                  </Link>
                  <Link href="/this-weekend" className="btn btn-light">
                    This Weekend
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[34px] bg-[var(--color-text)] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
                  Local notes welcome
                </p>
                <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
                  Know a river access update we should add?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/78">
                  River access changes, parking signs move, and locals usually
                  know the details before any website does. If something here
                  needs updated, or if there is a better way to explain a spot
                  respectfully, send it in and help keep the guide useful.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact" className="btn btn-light">
                  Send an Update
                </Link>
                <Link href="/submit-event" className="btn">
                  Submit an Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}