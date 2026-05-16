import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import { glenwoodAttractions, glenwoodItinerary } from "@/data/glenwood";
import Link from "next/link";

export const metadata = {
  title:
    "Things to Do in Glenwood, Arkansas | Caddo River, Lake Greeson & Outdoor Attractions",
  description:
    "Explore the best things to do in Glenwood, Arkansas including the Caddo River, Lake Greeson, Ouachita Mountains, Crater of Diamonds, cabins, restaurants, camping, floating, fishing, and nearby day trips.",
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
export default function ExplorePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the best things to do in Glenwood, Arkansas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Popular things to do in Glenwood include floating the Caddo River, visiting Lake Greeson, camping, fishing, kayaking, exploring the Ouachita Mountains, and taking day trips to Crater of Diamonds State Park or Hot Springs.",
                },
              },
              {
                "@type": "Question",
                name: "Is Glenwood good for a weekend trip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Glenwood works well for weekend trips because visitors can stay near the Caddo River, book cabins or campgrounds, eat at local restaurants, and visit nearby outdoor attractions.",
                },
              },
              {
                "@type": "Question",
                name: "What is Glenwood, Arkansas known for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Glenwood is known for the Caddo River, outdoor recreation, floating, fishing, nearby Lake Greeson, cabins, camping, and access to the Ouachita region.",
                },
              },
            ],
          }),
        }}
      />

      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Things to Do in Glenwood, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-8 max-w-3xl leading-relaxed">
        Glenwood is one of southwest Arkansas’ best small-town bases for outdoor
        adventure. Float the Caddo River, spend the day on Lake Greeson, explore
        the Ouachita Mountains, visit nearby state parks, or plan an easy day
        trip to Crater of Diamonds State Park, Hot Springs, Murfreesboro, Amity,
        and other Diamond Lakes stops.
      </p>

      <div className="mb-12 flex flex-wrap gap-3">
        <Link href="/glenwood-ar-cabins" className="border px-5 py-3 rounded-md">
          Find Cabins & Stays
        </Link>

        <Link
          href="/glenwood-ar-restaurants"
          className="border px-5 py-3 rounded-md"
        >
          View Restaurants
        </Link>

        <Link href="/contact" className="bg-black text-white px-5 py-3 rounded-md">
          Get Featured
        </Link>
      </div>
<Section>
  <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
    <div>
      <p
        className="text-sm font-semibold uppercase tracking-wide mb-3"
        style={{ color: "var(--color-accent)" }}
      >
        How To Use This Guide
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-5">
        Pick the kind of Glenwood trip you are planning.
      </h2>

      <p className="text-[color:var(--color-muted)] leading-relaxed">
        Glenwood is not just one attraction. Most visitors come for a mix of
        river time, lake time, cabins, camping, fishing, family stops, and
        nearby day trips. Use this page to decide what kind of trip makes the
        most sense before choosing where to stay or eat.
      </p>
    </div>

    <div className="grid gap-4">
      {[
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
          text: "Best for travelers adding Crater of Diamonds, Mount Ida, Amity, Hot Springs, or other nearby small towns.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-[color:var(--bg-card)] border border-black/5 p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</Section>
<Section>
  <div className="mb-8 max-w-3xl">
    <p
      className="text-sm font-semibold uppercase tracking-wide mb-3"
      style={{ color: "var(--color-accent)" }}
    >
      Suggested Local Stops
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      Pair your Glenwood plans with nearby local businesses.
    </h2>

    <p className="text-[color:var(--color-muted)] leading-relaxed">
      Whether you are planning a river float, lake weekend, cabin stay, coffee
      stop, or quick day trip, these local businesses can help round out the
      visit with food, lodging, rentals, and places worth knowing about.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    {suggestedBusinessCards.map((card) => (
      <div
        key={card.title}
        className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm"
      >
        <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>

        <p className="text-[color:var(--color-muted)] leading-relaxed mb-5">
          {card.text}
        </p>

        <div className="space-y-3">
          {card.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium transition hover:bg-white hover:shadow-sm"
            >
              <span>{link.label}</span>
              <span style={{ color: "var(--color-accent)" }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>
      <Section>
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Popular Attractions and Outdoor Stops Near Glenwood
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These are some of the main places visitors look for when planning a
            Glenwood trip, from river floats and lake days to scenic drives,
            hiking, camping, fishing, and family-friendly day trips.
          </p>
        </div>

        <AttractionGrid items={glenwoodAttractions} />
      </Section>

      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float the Caddo River, one of Arkansas’ favorite scenic rivers for
          canoeing, kayaking, tubing, and fishing.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Caddo River Floats, Kayaking, and Fishing
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Glenwood is known for easy access to the Caddo River, where visitors
          can canoe, kayak, raft, tube, swim, and fish. The river is popular
          with families and casual floaters, with calm stretches and fun Class I
          and II rapids depending on water levels and route.
        </p>

        <Link href="/glenwood-ar-cabins" className="underline underline-offset-4">
          Find cabins and places to stay near the Caddo River
        </Link>
      </Section>

      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Spend the day on Lake Greeson with boating, fishing, camping,
          swimming, hiking, and wide-open water views.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Lake Greeson, Camping, and Outdoor Weekends
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Lake Greeson adds even more options near Glenwood with boating,
          swimming, camping, hiking, and fishing surrounded by public land and
          mountain scenery. It works well for family weekends, fishing trips,
          campsite stays, and visitors who want more than just a river float.
        </p>
      </Section>
<Section>
  <div className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-8 md:p-10">
    <p
      className="text-sm font-semibold uppercase tracking-wide mb-3"
      style={{ color: "var(--color-accent)" }}
    >
      Nearby Outdoor Areas
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold mb-5">
      Glenwood connects several southwest Arkansas outdoor stops.
    </h2>

    <p className="text-[color:var(--color-muted)] leading-relaxed mb-8 max-w-3xl">
      Part of what makes Glenwood useful for visitors is how many outdoor areas
      are within reach. You can stay close to the Caddo River, spend a day at
      Lake Greeson, drive toward the Ouachita Mountains, or add a nearby town or
      state park without turning the trip into a long haul.
    </p>

    <div className="grid gap-4 md:grid-cols-3">
      {[
        "Caddo River for floating, kayaking, swimming, and fishing.",
        "Lake Greeson for boating, camping, hiking, and lake weekends.",
        "Crater of Diamonds and Murfreesboro for a memorable day trip.",
        "Ouachita forest roads and mountain scenery for slower exploring.",
        "Amity and Mount Ida for small-town stops and nearby attractions.",
        "Hot Springs for restaurants, shopping, Bathhouse Row, and extra activities.",
      ].map((item) => (
        <div key={item} className="rounded-2xl bg-white/70 p-5">
          <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</Section>
      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Explore the Ouachita Mountains, forest trails, scenic drives, and the
          natural beauty surrounding Glenwood.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Outdoor and Nature Activities Around Glenwood
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Glenwood sits in the Ouachita region, making it a great starting point
          for scenic drives, forest roads, hiking, camping, wildlife watching,
          and quiet days outside. Visitors can explore nearby lakes, rivers,
          mountain views, and natural areas while still staying close to town,
          restaurants, cabins, campgrounds, and local outfitters.
        </p>
      </Section>

      <BackgroundSection image="/images/glenwood/crater.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Search for real diamonds at Crater of Diamonds State Park, one of
          Arkansas’ most unique attractions.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Unique Day Trips Near Glenwood
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Glenwood is close to some of Arkansas’ most memorable day trips. At
          Crater of Diamonds State Park in Murfreesboro, visitors can search a
          37-acre field for real diamonds and keep what they find. You can also
          plan nearby trips to Daisy State Park, DeGray Lake, Hot Springs,
          Murfreesboro, Amity, and other small towns that make the Diamond Lakes
          region worth exploring.
        </p>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Plan a Glenwood Weekend Trip
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Use this simple trip outline to plan a weekend around the Caddo
            River, Lake Greeson, local food, cabins, campgrounds, and nearby
            Arkansas attractions.
          </p>
        </div>

        <Itinerary items={glenwoodItinerary} />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Explore Nearby Towns
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Glenwood is surrounded by small Arkansas towns and regional stops that
          are easy to add to a weekend trip. Visit Amity for a quiet small-town
          stop, head toward Murfreesboro for Crater of Diamonds and Lake
          Greeson, or make the drive to Hot Springs for dining, shopping,
          bathhouse history, and extra family-friendly attractions.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://amityarkansas.org"
            className="bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
          >
            Visit Amity
          </a>

          <div className="px-6 py-3 border rounded-md text-[color:var(--color-muted)]">
            Murfreesboro Coming Soon
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Glenwood Things To Do FAQs
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "What are the best things to do in Glenwood, Arkansas?",
              answer:
                "Popular things to do in Glenwood include floating the Caddo River, visiting Lake Greeson, camping, fishing, kayaking, exploring the Ouachita Mountains, and taking day trips to Crater of Diamonds State Park or Hot Springs.",
            },
            {
              question: "Is Glenwood good for a weekend trip?",
              answer:
                "Yes. Glenwood works well for weekend trips because visitors can stay near the Caddo River, book cabins or campgrounds, eat at local restaurants, and visit nearby outdoor attractions.",
            },
            {
              question: "What is Glenwood, Arkansas known for?",
              answer:
                "Glenwood is known for the Caddo River, outdoor recreation, floating, fishing, nearby Lake Greeson, cabins, camping, and access to the Ouachita region.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-xl border bg-[color:var(--bg-card)] p-6"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10">
          <h2 className="text-3xl font-semibold mb-4">
            Promote Your Glenwood Business or Attraction
          </h2>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
            This Glenwood travel guide helps visitors find things to do, places
            to stay, restaurants, river outfitters, local shops, attractions,
            and outdoor stops around the Caddo River and Lake Greeson. If you
            own a local business, attraction, cabin, rental, restaurant, or
            service, you can request a listing or ask about featured placement.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
              Get Listed
            </Link>

            <Link href="/contact" className="border px-6 py-3 rounded-md">
              Ask About Featured Placement
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}