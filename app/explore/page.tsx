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
        Discover things to do in Glenwood, Arkansas — from floating the Caddo River to exploring Lake Greeson, hiking in the Ouachita Mountains, and visiting nearby state parks.
      </p>

      {/* ATTRACTIONS */}
      <Section>
        <AttractionGrid items={glenwoodAttractions} />
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float the Caddo River and experience one of Arkansas’ most scenic waterways.
        </h2>
      </BackgroundSection>

      {/* WATER ACTIVITIES */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Water Activities
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood is known for its river and lake access. Whether you want to float, fish, or relax by the water, the Caddo River and Lake Greeson offer some of the best outdoor experiences in southwest Arkansas.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Spend the day on Lake Greeson with boating, fishing, and open water views.
        </h2>
      </BackgroundSection>

      {/* OUTDOOR */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Outdoor & Nature
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Surrounded by the Ouachita Mountains, Glenwood is a great starting point for hiking, scenic drives, and exploring Arkansas forests, waterfalls, and natural areas.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Explore the Ouachita Mountains and the natural beauty of southwest Arkansas.
        </h2>
      </BackgroundSection>

      {/* UNIQUE */}
      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Unique Experiences
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Visit the Crater of Diamonds State Park and search for real diamonds, or explore nearby destinations that make this area one of the most unique regions in Arkansas.
        </p>
      </Section>

      {/* IMAGE BREAK */}
      <BackgroundSection image="/images/glenwood/crater.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Search for real diamonds at Crater of Diamonds State Park.
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
          Glenwood is surrounded by small Arkansas towns worth visiting. Take a short drive and explore more of the region.
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
            Get your business featured and connect with visitors looking for places to eat, stay, and explore in Glenwood.
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