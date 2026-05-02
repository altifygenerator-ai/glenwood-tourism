import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import { glenwoodAttractions, glenwoodItinerary } from "@/data/glenwood";

export default function ExplorePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      
      {/* HERO */}
      <h1 className="text-4xl font-semibold mb-6">
        Things to Do in Glenwood, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-2xl">
        Glenwood is one of southwest Arkansas’ best small-town bases for outdoor adventure. Float the Caddo River, spend the day on Lake Greeson, explore the Ouachita Mountains, visit nearby state parks, or take an easy day trip to Crater of Diamonds State Park and Hot Springs.
      </p>

      {/* ATTRACTIONS */}
      <Section>
        <AttractionGrid items={glenwoodAttractions} />
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float the Caddo River, one of Arkansas’ favorite scenic rivers for canoeing, kayaking, tubing, and fishing.
        </h2>
      </BackgroundSection>

      {/* WATER ACTIVITIES */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Water Activities
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood is known for easy access to the Caddo River, where visitors can canoe, kayak, raft, tube, swim, and fish. The river is popular with families and casual floaters, with calm stretches and fun Class I and II rapids depending on water levels and route. Nearby Lake Greeson adds even more options with boating, swimming, camping, hiking, and fishing surrounded by public land and mountain scenery.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Spend the day on Lake Greeson with boating, fishing, camping, swimming, hiking, and wide-open water views.
        </h2>
      </BackgroundSection>

      {/* OUTDOOR */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Outdoor & Nature
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood sits in the Ouachita region, making it a great starting point for scenic drives, forest roads, hiking, camping, wildlife watching, and quiet days outside. Visitors can explore nearby lakes, rivers, mountain views, and natural areas while still staying close to town, restaurants, cabins, campgrounds, and local outfitters.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Explore the Ouachita Mountains, forest trails, scenic drives, and the natural beauty surrounding Glenwood.
        </h2>
      </BackgroundSection>

      {/* UNIQUE */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Unique Experiences
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood is close to some of Arkansas’ most memorable day trips. At Crater of Diamonds State Park in Murfreesboro, visitors can search a 37-acre field for real diamonds and keep what they find. You can also plan nearby trips to Daisy State Park, DeGray Lake, Hot Springs, Murfreesboro, Amity, and other small towns that make the Diamond Lakes region worth exploring.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/crater.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Search for real diamonds at Crater of Diamonds State Park, one of Arkansas’ most unique attractions.
        </h2>
      </BackgroundSection>

      {/* ITINERARY */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">
          Plan Your Trip
        </h2>

        <Itinerary items={glenwoodItinerary} />
      </Section>

      {/* NEARBY TOWNS */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Explore Nearby Towns
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood is surrounded by small Arkansas towns and regional stops that are easy to add to a weekend trip. Visit Amity for a quiet small-town stop, head toward Murfreesboro for Crater of Diamonds and Lake Greeson, or make the drive to Hot Springs for dining, shopping, bathhouse history, and extra family-friendly attractions.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://amityarkansas.org"
            className="bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
          >
            Visit Amity
          </a>

          <div className="px-6 py-3 border rounded-md text-[color:var(--color-muted)]">
            Murfreesboro (coming soon)
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mt-8 p-8 bg-[color:var(--bg-card)] rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Promote Your Business in Glenwood
          </h3>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-xl">
            Get your business featured in front of visitors planning Caddo River floats, Lake Greeson trips, cabin stays, camping weekends, outdoor adventures, and day trips around Glenwood and southwest Arkansas.
          </p>

          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-md"
          >
            Get Listed
          </a>
        </div>
      </Section>

    </main>
  );
}