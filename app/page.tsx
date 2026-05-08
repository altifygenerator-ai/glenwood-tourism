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
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: "Glenwood, Arkansas",
        description:
          "Travel guide for Glenwood, Arkansas featuring restaurants, cabins, the Caddo River, Lake Greeson, local attractions, and outdoor activities.",
        url: "https://glenwoodarkansas.org",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Glenwood Arkansas Guide",
        url: "https://glenwoodarkansas.org",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://glenwoodarkansas.org/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Glenwood Arkansas known for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Glenwood is known for the Caddo River, nearby Lake Greeson, floating, fishing, cabins, camping, outdoor recreation, and small-town Arkansas tourism.",
            },
          },
          {
            "@type": "Question",
            name: "What can you do in Glenwood Arkansas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visitors come to Glenwood for river floats, camping, cabins, fishing, hiking, Lake Greeson trips, restaurants, and Ouachita mountain scenery.",
            },
          },
          {
            "@type": "Question",
            name: "Are there cabins and restaurants near the Caddo River?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Glenwood has cabins, campgrounds, motels, restaurants, cafes, and local businesses close to the Caddo River and nearby outdoor attractions.",
            },
          },
        ],
      },
    ]),
  }}
/>

      <Hero data={glenwoodHero} />

  <div className="flex gap-4 justify-center mt-6 flex-wrap">

 <Link
  href="/glenwood-ar-restaurants"
  className="px-6 py-3 rounded-full bg-[color:var(--color-accent)] text-white font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
>
  Restaurants
</Link>

<Link
  href="/glenwood-ar-cabins"
  className="px-6 py-3 rounded-full border border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
>
  Cabins & Stays
</Link>

<Link
  href="/explore"
  className="px-6 py-3 rounded-full border border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
>
  Things To Do
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
<Section>
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
    <div>
      <p
        className="text-sm font-semibold uppercase tracking-wide mb-3"
        style={{ color: "var(--color-accent)" }}
      >
        Plan Your Glenwood Trip
      </p>

      <h2
        className="text-3xl md:text-5xl font-semibold leading-tight mb-5"
        style={{ color: "var(--color-muted)" }}
      >
        Find cabins, restaurants, and local places near Glenwood, Arkansas.
      </h2>

      <p className="text-[color:var(--color-muted)] leading-relaxed">
        Glenwood is a popular stop for Caddo River float trips, Lake Greeson
        weekends, cabin getaways, camping, fishing, and small-town dining. Use
        these local guides to find places to eat, places to stay, and nearby
        stops before your trip.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      <Link
        href="/glenwood-ar-restaurants"
        className="group rounded-2xl overflow-hidden bg-[color:var(--bg-card)] border shadow-sm hover:shadow-lg transition"
      >
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/glenwood/oldtown.jpg')" }}
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">
            Glenwood Restaurants
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Find local restaurants, cafes, Mexican food, pizza, seafood, and
            places to eat near the Caddo River and Lake Greeson.
          </p>
          <span className="inline-block mt-4 font-medium text-[color:var(--color-accent)]">
            View places to eat →
          </span>
        </div>
      </Link>

      <Link
        href="/glenwood-ar-cabins"
        className="group rounded-2xl overflow-hidden bg-[color:var(--bg-card)] border shadow-sm hover:shadow-lg transition"
      >
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/glenwood/rivercanoe.jpg')" }}
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">
            Cabins & Places to Stay
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Browse cabins, campgrounds, motels, river stays, and lodging near
            Glenwood, the Caddo River, and Lake Greeson.
          </p>
          <span className="inline-block mt-4 font-medium text-[color:var(--color-accent)]">
            View places to stay →
          </span>
        </div>
      </Link>
    </div>
  </div>
</Section>
      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float the Caddo River and enjoy the outdoor beauty around Glenwood.
        </h2>
      </BackgroundSection>

      <Section>
  <div className="mb-8 max-w-3xl">
    <p
      className="text-sm font-semibold uppercase tracking-wide mb-3"
      style={{ color: "var(--color-accent)" }}
    >
      Explore Glenwood
    </p>

    <h2
      className="text-3xl md:text-4xl font-semibold mb-4"
      style={{ color: "var(--color-muted)" }}
    >
      Things to Do Near Glenwood, Arkansas
    </h2>

    <p className="text-[color:var(--color-muted)] leading-relaxed">
      Explore the Caddo River, Lake Greeson, scenic Ouachita mountain drives,
      local attractions, outdoor adventures, nearby parks, fishing spots,
      camping areas, and small-town Arkansas experiences around Glenwood.
    </p>
  </div>

  <AttractionGrid items={glenwoodAttractions} />

  <div className="mt-8 flex flex-wrap gap-4">
    <Link
      href="/explore"
      className="bg-black text-white px-6 py-3 rounded-md"
    >
      Explore More Things To Do
    </Link>

    <Link
      href="/glenwood-ar-cabins"
      className="border px-6 py-3 rounded-md"
    >
      Find Cabins & Places To Stay
    </Link>
  </div>
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
  className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
>
  Explore Nearby Town: Amity →
</a>

<a
  href="https://mt-ida-tourism.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
>
  Visit Mount Ida →
</a>
</div>
    </main>
  );
}