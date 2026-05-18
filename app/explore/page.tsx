import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import { glenwoodAttractions, glenwoodItinerary } from "@/data/glenwood";
import Link from "next/link";
import EventsCTA from "@/components/events/EventsCTA";

export const metadata = {
  title:
    "Things to Do in Glenwood, Arkansas | Caddo River, Lake Greeson & Outdoor Attractions",
  description:
    "Explore things to do in Glenwood, Arkansas including the Caddo River, Lake Greeson, Ouachita Mountains, Crater of Diamonds, cabins, restaurants, camping, floating, fishing, and nearby day trips.",
};

const suggestedBusinessCards = [
  {
    title: "For a Caddo River Day",
    text: "Good local stops for floats, cabins, camping, food, and river weekends around Glenwood.",
    links: [
      {
        label: "Caddo River Camping & Canoe Rental",
        href: "/glenwood-ar-cabins",
      },
      {
        label: "Caddo Cafe",
        href: "/glenwood-ar-restaurants",
      },
      {
        label: "Bayou Bella’s & Biscuits",
        href: "/glenwood-ar-restaurants",
      },
    ],
  },
  {
    title: "For a Lake Greeson Weekend",
    text: "Helpful places for lake stays, food, camping, boating, and nearby outdoor trips around Kirby, Daisy, and Murfreesboro.",
    links: [
      {
        label: "Swaha Lodge & Marina",
        href: "/glenwood-ar-cabins",
      },
      {
        label: "Fish Nest Family Restaurant",
        href: "/glenwood-ar-restaurants",
      },
      {
        label: "Cabins & Places to Stay",
        href: "/glenwood-ar-cabins",
      },
    ],
  },
  {
    title: "For Coffee, Breakfast & Quick Stops",
    text: "Easy local stops before heading to the river, lake, cabins, campgrounds, or nearby attractions.",
    links: [
      {
        label: "Arrow 6 Coffee Co.",
        href: "/glenwood-ar-restaurants",
      },
      {
        label: "Caddo Cafe",
        href: "/glenwood-ar-restaurants",
      },
      {
        label: "Flavor-Licious Glenwood",
        href: "/glenwood-ar-restaurants",
      },
    ],
  },
  {
    title: "For a Cabin Getaway",
    text: "Lodging options for visitors wanting cabins, river access, wooded stays, or a quieter outdoor trip.",
    links: [
      {
        label: "Bean Creek Cabins",
        href: "/glenwood-ar-cabins",
      },
      {
        label: "Caddo River Cabins",
        href: "/glenwood-ar-cabins",
      },
      {
        label: "Arrowhead Cabins and Camping",
        href: "/glenwood-ar-cabins",
      },
    ],
  },
];

const tripTypes = [
  {
    title: "River weekend",
    text: "Best for Caddo River floats, kayak trips, swimming, fishing, cabins, campgrounds, and easy food after a day outside.",
  },
  {
    title: "Lake and camping trip",
    text: "Best for Lake Greeson, Daisy State Park, boating, fishing, swimming, campsites, and quiet outdoor weekends.",
  },
  {
    title: "Day trip base",
    text: "Best for travelers adding Crater of Diamonds, Mount Ida, Amity, Hot Springs, or nearby small towns.",
  },
];

const nearbyOutdoorStops = [
  "Caddo River for floating, kayaking, swimming, and fishing.",
  "Lake Greeson for boating, camping, hiking, and lake weekends.",
  "Crater of Diamonds and Murfreesboro for a memorable day trip.",
  "Ouachita forest roads and mountain scenery for slower exploring.",
  "Amity and Mount Ida for small-town stops and nearby attractions.",
  "Hot Springs for restaurants, shopping, Bathhouse Row, and extra activities.",
];

const exploreFaqs = [
  {
    question: "What are the best things to do in Glenwood, Arkansas?",
    answer:
      "Popular things to do in Glenwood include floating the Caddo River, visiting Lake Greeson, camping, fishing, kayaking, exploring the Ouachita Mountains, and taking day trips to Crater of Diamonds State Park or Hot Springs.",
  },
  {
    question: "Is Glenwood good for a weekend trip?",
    answer:
      "Yes. Glenwood works well for weekend trips because visitors can stay near the Caddo River, book cabins or campgrounds, eat at local restaurants, and visit nearby outdoor attractions without having to overplan every stop.",
  },
  {
    question: "What is Glenwood, Arkansas known for?",
    answer:
      "Glenwood is known for the Caddo River, outdoor recreation, floating, fishing, nearby Lake Greeson, cabins, camping, and access to the Ouachita region.",
  },
  {
    question: "Can you visit Lake Greeson from Glenwood?",
    answer:
      "Yes. Lake Greeson is one of the main nearby lake destinations visitors add to a Glenwood trip for boating, fishing, swimming, camping, and family weekends.",
  },
];

export default function ExplorePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: "Things to Do in Glenwood, Arkansas",
            description:
              "Outdoor attractions, river floats, lake trips, cabins, restaurants, camping, fishing, and day trips near Glenwood, Arkansas.",
            touristType: [
              "Families",
              "Outdoor travelers",
              "River visitors",
              "Campers",
              "Fishing visitors",
              "Weekend travelers",
            ],
            includesAttraction: glenwoodAttractions.map((item: any) => ({
              "@type": "TouristAttraction",
              name: item.title ?? item.name,
              description: item.description,
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: exploreFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[#2d2a26] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: "url('/images/glenwood/rivercanoe.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Explore Glenwood
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Things to Do in Glenwood, Arkansas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Plan a Glenwood trip around the Caddo River, Lake Greeson, cabins,
              camping, local restaurants, outdoor stops, and nearby day trips
              across southwest Arkansas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/glenwood-ar-cabins"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Find Cabins & Stays
              </Link>

              <Link
                href="/glenwood-ar-restaurants"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View Restaurants
              </Link>

              <Link
                href="/events"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Local Events
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Get Featured
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              How To Use This Guide
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
              Pick the kind of Glenwood trip you are planning.
            </h2>

            <div className="space-y-4 leading-relaxed text-[color:var(--color-muted)]">
              <p>
                Glenwood is not just one attraction. Most visitors come for a
                mix of river time, lake time, cabins, camping, fishing, family
                stops, local food, and nearby day trips.
              </p>

              <p>
                Start with the type of trip you want, then use this page to
                connect the outdoor stops with places to eat, places to stay,
                events, and nearby towns worth adding to the drive.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {tripTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <EventsCTA
        title="Coming to float the Caddo River?"
        text="Check what’s happening around Glenwood before your trip. River-season weekends can line up with live music, local events, food stops, community gatherings, and reasons to stay a little longer."
      />

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Suggested Local Stops
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Pair your Glenwood plans with nearby local businesses.
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            Whether you are planning a river float, lake weekend, cabin stay,
            coffee stop, or quick day trip, these local businesses can help
            round out the visit with food, lodging, rentals, and places worth
            knowing before you get here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {suggestedBusinessCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-[color:var(--color-accent)]" />

              <h3 className="mb-3 text-2xl font-semibold">{card.title}</h3>

              <p className="mb-5 leading-relaxed text-[color:var(--color-muted)]">
                {card.text}
              </p>

              <div className="space-y-3">
                {card.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white/65 px-4 py-3 text-sm font-medium transition hover:bg-white hover:shadow-sm"
                  >
                    <span>{link.label}</span>
                    <span className="text-[color:var(--color-accent)]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Outdoor Stops
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Popular attractions and outdoor stops near Glenwood
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            These are some of the main places visitors look for when planning a
            Glenwood trip, from river floats and lake days to scenic drives,
            hiking, camping, fishing, and family-friendly day trips.
          </p>
        </div>

        <AttractionGrid items={glenwoodAttractions} />
      </Section>

      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Float the Caddo River, one of Arkansas’ favorite scenic rivers for
          canoeing, kayaking, tubing, and fishing.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Caddo River
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              River floats, kayaking, swimming, and fishing
            </h2>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8">
            <p className="leading-relaxed text-[color:var(--color-muted)]">
              Glenwood is known for easy access to the Caddo River, where
              visitors can canoe, kayak, raft, tube, swim, and fish. The river
              is popular with families and casual floaters, with calm stretches
              and fun Class I and II rapids depending on water levels and route.
            </p>

            <Link
              href="/glenwood-ar-cabins"
              className="mt-6 inline-flex font-semibold text-[color:var(--color-accent)] underline underline-offset-4"
            >
              Find cabins and places to stay near the Caddo River
            </Link>
          </div>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Spend the day on Lake Greeson with boating, fishing, camping,
          swimming, hiking, and wide-open water views.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Lake Greeson
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Lake days, camping, fishing, and outdoor weekends
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            Lake Greeson adds even more options near Glenwood with boating,
            swimming, camping, hiking, and fishing surrounded by public land and
            mountain scenery. It works well for family weekends, fishing trips,
            campsite stays, and visitors who want more than just a river float.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Nearby Outdoor Areas
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
              Glenwood connects several southwest Arkansas outdoor stops.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              Part of what makes Glenwood useful for visitors is how many
              outdoor areas are within reach. You can stay close to the Caddo
              River, spend a day at Lake Greeson, drive toward the Ouachita
              Mountains, or add a nearby town or state park without turning the
              trip into a long haul.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {nearbyOutdoorStops.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/5 bg-white/70 p-5"
              >
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Explore the Ouachita Mountains, forest roads, scenic drives, and the
          natural beauty surrounding Glenwood.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Nature Around Glenwood
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Forest scenery, quiet drives, and room to slow down
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            Glenwood sits in the Ouachita region, making it a good starting
            point for scenic drives, forest roads, hiking, camping, wildlife
            watching, and quiet days outside. Visitors can explore nearby lakes,
            rivers, mountain views, and natural areas while still staying close
            to town, restaurants, cabins, campgrounds, and local outfitters.
          </p>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/crater.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Search for real diamonds at Crater of Diamonds State Park, one of
          Arkansas’ most unique attractions.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Day Trips
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Unique day trips near Glenwood
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            Glenwood is close to some of Arkansas’ most memorable day trips. At
            Crater of Diamonds State Park in Murfreesboro, visitors can search a
            37-acre field for real diamonds and keep what they find. You can
            also plan nearby trips to Daisy State Park, DeGray Lake, Hot
            Springs, Murfreesboro, Amity, and other small towns that make the
            Diamond Lakes region worth exploring.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Weekend Planning
          </p>

          <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
            Plan a Glenwood weekend trip
          </h2>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            Use this simple trip outline to plan a weekend around the Caddo
            River, Lake Greeson, local food, cabins, campgrounds, and nearby
            Arkansas attractions.
          </p>
        </div>

        <Itinerary items={glenwoodItinerary} />
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Nearby Towns
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Add a nearby town or regional stop to your trip.
              </h2>
            </div>

            <div>
              <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                Glenwood is surrounded by small Arkansas towns and regional
                stops that are easy to add to a weekend trip. Visit Amity for a
                quiet small-town stop, head toward Murfreesboro for Crater of
                Diamonds and Lake Greeson, or make the drive to Hot Springs for
                dining, shopping, bathhouse history, and extra family-friendly
                attractions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amityarkansas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Visit Amity →
                </a>

                <a
                  href="https://mountidaarkansas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
                >
                  Visit Mount Ida →
                </a>

                <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-muted)]">
                  Murfreesboro Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            FAQs
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Glenwood things to do FAQs
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {exploreFaqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-[#2d2a26] p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Local Visibility
              </p>

              <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Promote your Glenwood business or attraction.
              </h2>

              <p className="max-w-3xl leading-relaxed text-white/75">
                This Glenwood travel guide helps visitors find things to do,
                places to stay, restaurants, river outfitters, local shops,
                attractions, and outdoor stops around the Caddo River and Lake
                Greeson. If you own a local business, attraction, cabin, rental,
                restaurant, or service, you can request a listing or ask about
                featured placement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Get Listed
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ask About Featured Placement
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}