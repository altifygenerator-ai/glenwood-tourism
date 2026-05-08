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