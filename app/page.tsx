import Hero from "@/components/tourism/Hero";
import Highlights from "@/components/tourism/Highlights";
import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import Intro from "@/components/tourism/Intro";
import FAQ from "@/components/tourism/FAQ";
import FeaturedLocalSpots from "@/components/tourism/FeaturedLocalSpots";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import {
  glenwoodHero,
  glenwoodHighlights,
  glenwoodAttractions,
  glenwoodItinerary,
  glenwoodSEO,
  glenwoodIntro,
  glenwoodFAQ,
  glenwoodFeaturedLocalSpots,
} from "@/data/glenwood";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata(glenwoodSEO);

export default function Page() {
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
              "A scenic southwest Arkansas town known for the Caddo River, nearby lakes, and outdoor recreation.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Glenwood",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      <Hero data={glenwoodHero} />

  <div className="flex gap-4 justify-center mt-6 flex-wrap">

  <Link
    href="/explore"
    className="px-6 py-3 rounded-full bg-[color:var(--color-accent)] text-white font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
  >
    Explore Things To Do
  </Link>

  <Link
    href="/history"
    className="px-6 py-3 rounded-full border border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
  >
    Local History
  </Link>

</div>

      <Section>
        <Highlights items={glenwoodHighlights} />
      </Section>

      
<Section>
  <Intro data={glenwoodIntro} />
</Section>

<FeaturedLocalSpots items={glenwoodFeaturedLocalSpots} />
      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float the Caddo River and enjoy the outdoor beauty around Glenwood.
        </h2>
      </BackgroundSection>

      <Section>
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--color-muted)" }}
        >
          Things to do near Glenwood, Arkansas
        </h2>
        <AttractionGrid items={glenwoodAttractions} />
      </Section>

      <BackgroundSection image="/images/glenwood/oldtown.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
         Explore downtown Glenwood with local shops, dining, and access to the river.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">Plan your trip</h2>
        <Itinerary items={glenwoodItinerary} />
      </Section>

      <BackgroundSection image="/images/glenwood/caddofest.webp">
        <div className="max-w-xl ml-auto text-right">
          <h2 className="text-3xl font-semibold mb-4">
            Support Local Events in Glenwood
          </h2>

         <p className="mb-6">
  Glenwood is building a stronger spotlight for local businesses,
  vendors, and events. We are growing the platform to help visitors
  discover more of what the town has to offer, including{" "}
  <Link href="/glenwood-ar-restaurants" className="underline">
    local restaurants
  </Link>{" "}
  and{" "}
  <Link href="/glenwood-ar-cabins" className="underline">
    cabins and places to stay
  </Link>.
</p>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className="inline-flex w-fit bg-white px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition !text-black"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Frequently asked questions
        </h2>
        <FAQ items={glenwoodFAQ} />
      </Section>

      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Explore Glenwood Today
        </h2>
      </BackgroundSection>
      <div className="flex justify-center mt-6">
  <a
    href="https://amityarkansas.org"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition hover:scale-[1.02]"
  >
    Explore Nearby Town: Amity →
  </a>
</div>
    </main>
  );
}