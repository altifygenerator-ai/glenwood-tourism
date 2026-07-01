import Link from "next/link";
import Hero from "@/components/tourism/Hero";
import Highlights from "@/components/tourism/Highlights";
import AttractionGrid from "@/components/tourism/AttractionGrid";
import Itinerary from "@/components/tourism/Itinerary";
import Section from "@/components/tourism/Section";
import Intro from "@/components/tourism/Intro";
import FAQ from "@/components/tourism/FAQ";
import FeaturedLocalSpots from "@/components/tourism/FeaturedLocalSpots";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import HomeEventsPreview from "@/components/events/HomeEventsPreview";
import PlanMyDayTeaser from "@/components/PlanMyDayTeaser";
import GlenwoodFourthOfJulyFeature from "@/components/GlenwoodFourthOfJulyFeature";
import CaddoRiverHomeFeature from "@/components/CaddoRiverHomeFeature";
import CaddoTripCheck from "@/components/CaddoTripCheck";
import RecentUpdates from "@/components/RecentUpdates";
import { generateMetadata } from "@/lib/seo";

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

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = generateMetadata(glenwoodSEO);

const eyebrowClass =
  "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]";

const sectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl";

const smallSectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl";

const bodyTextClass = "leading-relaxed text-[color:var(--color-muted)]";

const cardClass =
  "rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm";

const cardHoverClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const outlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white";

const textLinkClass =
  "mt-auto inline-flex pt-5 text-sm font-semibold text-[color:var(--color-accent)] transition group-hover:opacity-75";

function SectionHeading({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={eyebrowClass}>{eyebrow}</p>

      <h2 className={compact ? smallSectionTitleClass : sectionTitleClass}>
        {title}
      </h2>

      {text && <p className={`mt-5 ${bodyTextClass}`}>{text}</p>}
    </div>
  );
}

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
              url: "https://www.glenwoodarkansas.org",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Glenwood Arkansas Guide",
              url: "https://www.glenwoodarkansas.org",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.glenwoodarkansas.org/search?q={search_term_string}",
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

      <RecentUpdates />
      <PlanMyDayTeaser />
      <CaddoRiverHomeFeature />
      <CaddoTripCheck />

      <Section>
        <Highlights items={glenwoodHighlights} />
      </Section>

      <Section>
        <Intro data={glenwoodIntro} />
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Start Here"
              title="A simple way to plan Glenwood before you get here."
              text="Glenwood works best when you plan around the outdoors first, then build the rest of your trip around food, lodging, events, and nearby stops. Whether you are coming for the Caddo River, a cabin weekend, Lake Greeson, or a slower small-town getaway, this guide is meant to help you find the practical pieces in one place."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "For river trips",
                  text: "Start with the Caddo River, then look for cabins, camping, food, and nearby stops before or after your float.",
                },
                {
                  title: "For weekend stays",
                  text: "Use Glenwood as a quiet base for cabins, local restaurants, lake days, and scenic drives through the Ouachita region.",
                },
                {
                  title: "For families",
                  text: "Plan around easy outdoor activities, low-pressure meals, simple day trips, and places that are close enough to enjoy without overpacking the day.",
                },
                {
                  title: "For local exploring",
                  text: "Check events, restaurants, small businesses, nearby towns, and seasonal things happening around the Glenwood area.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl border border-black/10 bg-white/60 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--color-text)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <HomeEventsPreview />

      <GlenwoodFourthOfJulyFeature />

      <FeaturedLocalSpots items={glenwoodFeaturedLocalSpots} />

      <Section>
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Plan Your Glenwood Trip"
              title="Find cabins, restaurants, and local places near Glenwood, Arkansas."
            />

            <div className={`mt-5 space-y-4 ${bodyTextClass}`}>
              <p>
                A good Glenwood trip usually comes together around a few simple
                pieces: where you are staying, where you are eating, what you
                want to do outside, and what is happening locally while you are
                in town.
              </p>

              <p>
                Use the restaurant and lodging guides to plan around Caddo River
                floats, Lake Greeson weekends, cabin stays, camping trips,
                fishing, family visits, and small-town dining before or after a
                day outside.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/glenwood-ar-restaurants" className={cardHoverClass}>
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/oldtown.jpg')",
                }}
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-semibold text-[color:var(--color-text)]">
                  Glenwood Restaurants
                </h3>

                <p className={bodyTextClass}>
                  Find local restaurants, cafes, Mexican food, pizza, seafood,
                  breakfast stops, and casual places to eat near the Caddo River
                  and Lake Greeson.
                </p>

                <span className={textLinkClass}>View places to eat →</span>
              </div>
            </Link>

            <Link href="/glenwood-ar-cabins" className={cardHoverClass}>
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/rivercanoe.jpg')",
                }}
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-semibold text-[color:var(--color-text)]">
                  Cabins & Places to Stay
                </h3>

                <p className={bodyTextClass}>
                  Browse cabins, campgrounds, motels, river stays, and lodging
                  options near Glenwood, the Caddo River, Lake Greeson, and
                  nearby outdoor attractions.
                </p>

                <span className={textLinkClass}>View places to stay →</span>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Why Glenwood Works"
              title="A small town base for river weekends, lake trips, and outdoor Arkansas."
            />

            <div className={`mt-5 space-y-4 ${bodyTextClass}`}>
              <p>
                Glenwood sits in a useful spot for travelers who want more than
                one kind of trip. You can float the Caddo River, stay in a
                cabin, drive toward Lake Greeson, visit nearby Murfreesboro, or
                use town as a quiet base for exploring the Ouachita region.
              </p>

              <p>
                It is not a big resort town, and that is part of the appeal.
                Visitors come for river access, local restaurants, family
                weekends, campgrounds, small-town stops, and easy drives to
                nearby lakes, parks, and scenic areas.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Caddo River trips",
                text: "Float, kayak, swim, fish, or plan a cabin weekend around one of southwest Arkansas’ favorite rivers.",
              },
              {
                title: "Lake Greeson nearby",
                text: "Add boating, camping, fishing, swimming, and lake views around Kirby, Daisy, and Murfreesboro.",
              },
              {
                title: "Easy regional day trips",
                text: "Use Glenwood as a base for Crater of Diamonds, Mount Ida, Amity, Hot Springs, and other Ouachita stops.",
              },
            ].map((item) => (
              <div key={item.title} className={`${cardClass} p-6`}>
                <h3 className="mb-2 text-xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h3>

                <p className={bodyTextClass}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold text-white">
          Float the Caddo River and enjoy the outdoor beauty around Glenwood.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Explore Glenwood"
            title="Things to Do Near Glenwood, Arkansas"
            compact
          />

          <div className={`space-y-4 ${bodyTextClass}`}>
            <p>
              Glenwood is a strong starting point for outdoor trips across this
              part of Arkansas. Spend time on the Caddo River, plan a lake day
              around Lake Greeson, take a scenic drive through the Ouachita
              foothills, or use town as a base for nearby attractions like
              Crater of Diamonds, DeGray Lake, Hot Springs, and Mount Ida.
            </p>

            <p>
              You can keep the trip simple with a river float and dinner in
              town, or stretch it into a full weekend with cabins, camping,
              fishing, lake time, local events, and day trips across southwest
              Arkansas.
            </p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            {
              title: "River Days",
              text: "Float, kayak, swim, fish, or relax near the Caddo River.",
            },
            {
              title: "Lake Trips",
              text: "Add boating, fishing, swimming, or camping around Lake Greeson.",
            },
            {
              title: "Cabin Weekends",
              text: "Stay close to the water, the woods, and local places to eat.",
            },
            {
              title: "Day Trips",
              text: "Explore Crater of Diamonds, Hot Springs, DeGray, and Mount Ida.",
            },
          ].map((item) => (
            <div key={item.title} className={`${cardClass} p-5`}>
              <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

              <h3 className="mb-2 text-lg font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <AttractionGrid items={glenwoodAttractions} />

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/explore" className={primaryButtonClass}>
            Explore More Things To Do
          </Link>

          <Link href="/glenwood-ar-cabins" className={outlineButtonClass}>
            Find Cabins & Places To Stay
          </Link>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/oldtown.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold text-white">
          Explore downtown Glenwood with local shops, dining, and access to the
          river.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="mb-8">
          <SectionHeading
            eyebrow="Trip Ideas"
            title="Plan your trip around the way you want to visit."
            text="Whether you only have a few hours or you are planning a full weekend around the river, these trip ideas give you a simple starting point."
            compact
          />
        </div>

        <Itinerary items={glenwoodItinerary} />
      </Section>

      <BackgroundSection image="/images/glenwood/caddofest.webp">
        <div className="ml-auto max-w-xl text-right">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Support Local Events in Glenwood
          </h2>

          <p className="mb-6 text-white/85">
            Glenwood is building a stronger spotlight for local businesses,
            vendors, and events. We are growing the platform to help visitors
            discover more of what the town has to offer, including{" "}
            <Link
              href="/glenwood-ar-restaurants"
              className="font-semibold underline underline-offset-4"
            >
              local restaurants
            </Link>{" "}
            and{" "}
            <Link
              href="/glenwood-ar-cabins"
              className="font-semibold underline underline-offset-4"
            >
              cabins and places to stay
            </Link>
            .
          </p>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[color:var(--color-text)] shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </BackgroundSection>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="Good To Know"
              title="Glenwood is best planned around the outdoors."
              text="A Glenwood trip usually works best when you plan the river, lake, cabin, campground, or day trip first, then build meals and local stops around that."
              compact
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Spring and summer weekends are popular for Caddo River floats.",
                "Cabins and campgrounds can book faster around warm-weather weekends.",
                "Lake Greeson is a strong add-on for boating, fishing, and camping.",
                "Restaurants and local stops are part of the trip, especially before or after river time.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex h-full rounded-2xl border border-black/10 bg-white/60 p-5"
                >
                  <p className="text-sm font-medium leading-6 text-[color:var(--color-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          compact
        />

        <div className="mt-6">
          <FAQ items={glenwoodFAQ} />
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/forest.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold text-white">
          Explore Glenwood Today
        </h2>
      </BackgroundSection>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-6 py-10">
        <a
          href="https://amityarkansas.org"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButtonClass}
        >
          Explore Nearby Town: Amity →
        </a>

        <a
          href="https://murfreesboroarkansas.org"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButtonClass}
        >
          Visit Murfreesboro →
        </a>

        <a
          href="https://mountidaarkansas.org"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButtonClass}
        >
          Visit Mount Ida →
        </a>
      </div>
    </main>
  );
}