import Link from "next/link";
import BackgroundSection from "@/components/tourism/BackgroundSection";
import Section from "@/components/tourism/Section";

export const metadata = {
  title:
    "Caddo River in Glenwood Arkansas | Floating, Cabins, Camping & Things To Do",
  description:
    "Plan a Caddo River trip near Glenwood, Arkansas with floating, kayaking, canoe rentals, cabins, camping, fishing, restaurants, and nearby things to do.",
  keywords: [
    "Caddo River Glenwood Arkansas",
    "Caddo River float trip",
    "Caddo River cabins",
    "Caddo River camping",
    "Caddo River canoe rental",
    "Caddo River kayaking",
    "Caddo River fishing",
    "things to do near Caddo River",
    "Glenwood Arkansas river",
    "Caddo River Arkansas",
  ],
};

const riverHighlights = [
  {
    title: "Float the Caddo River",
    text: "Glenwood is one of the main Arkansas towns visitors use as a base for Caddo River floats, kayaking, canoeing, tubing, swimming, fishing, and easy river weekends.",
  },
  {
    title: "Stay close to the water",
    text: "Visitors can find cabins, campgrounds, motels, private rentals, and river-area stays around Glenwood, Caddo Gap, and the surrounding Caddo River area.",
  },
  {
    title: "Make it a full weekend",
    text: "Pair the river with local restaurants, coffee stops, Lake Greeson, Crater of Diamonds, Mount Ida, Amity, Hot Springs, or a quiet drive through the Ouachita region.",
  },
];

const suggestedStops = [
  {
    name: "Caddo River Camping & Canoe Rental",
    type: "Cabins • Camping • Canoe & Kayak Rentals",
    text: "A well-known Glenwood-area stop for river trips, rentals, camping, and cabins close to the Caddo River.",
    href: "/glenwood-ar-cabins",
  },
  {
    name: "Caddo Cafe",
    type: "Cafe • Breakfast • Comfort Food",
    text: "A local cafe option for breakfast or lunch before heading to the river, lake, cabins, or nearby attractions.",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Bayou Bella’s & Biscuits",
    type: "Food Truck • Cajun Food • Biscuits",
    text: "A local food stop for visitors looking for something quick, casual, and different while exploring Glenwood.",
    href: "/glenwood-ar-restaurants",
  },
];

const planningCards = [
  {
    title: "Float day",
    text: "Plan your rental, shuttle, access point, river gear, and food before or after the float.",
  },
  {
    title: "Cabin weekend",
    text: "Book a cabin or campground close to the river, then add restaurants, coffee, and nearby attractions.",
  },
  {
    title: "Outdoor basecamp",
    text: "Use Glenwood as a base for the Caddo River, Lake Greeson, Crater of Diamonds, Mount Ida, Amity, and Hot Springs.",
  },
];

const riverTips = [
  "Check water levels and conditions before planning a float.",
  "Book cabins, campsites, and rentals early during warm-weather weekends.",
  "Bring water shoes, sunscreen, towels, dry bags, and extra clothes.",
  "Plan food before or after your float so you are not rushed.",
  "Respect private property and use legal river access points.",
  "Pack out trash and help keep the Caddo River clean.",
];

const faqs = [
  {
    question: "Where is the Caddo River near Glenwood?",
    answer:
      "The Caddo River runs through the Glenwood and Caddo Gap area in southwest Arkansas, making Glenwood a popular base for river floats, cabins, camping, fishing, and outdoor weekends.",
  },
  {
    question: "Can you float the Caddo River in Glenwood?",
    answer:
      "Yes. The Caddo River is a popular place for canoeing, kayaking, tubing, and floating near Glenwood. Visitors should check local outfitters, access points, and current river conditions before going.",
  },
  {
    question: "Are there cabins near the Caddo River?",
    answer:
      "Yes. The Glenwood and Caddo Gap area has cabins, campgrounds, motels, private rentals, and river-area lodging for visitors planning a Caddo River trip.",
  },
  {
    question: "What else is near the Caddo River in Glenwood?",
    answer:
      "Visitors can also explore local restaurants, coffee shops, Lake Greeson, Crater of Diamonds State Park, Mount Ida, Amity, Hot Springs, and other nearby Ouachita region stops.",
  },
];

export default function CaddoRiverPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Caddo River near Glenwood, Arkansas",
              description:
                "A Glenwood, Arkansas travel guide for Caddo River floating, kayaking, camping, cabins, fishing, restaurants, and nearby things to do.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      <section className="relative overflow-hidden bg-[#2d2a26] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: "url('/images/glenwood/rivercanoe.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Caddo River Guide
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Caddo River in Glenwood, Arkansas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Plan a river trip around Glenwood with floating, kayaking, canoe
              rentals, cabins, camping, fishing, local restaurants, and nearby
              southwest Arkansas outdoor stops.
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
                href="/explore"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                More Things To Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {riverHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-[color:var(--color-accent)]" />
              <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
              <p className="leading-relaxed text-[color:var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Float, fish, swim, camp, or slow down beside one of southwest
          Arkansas’ favorite rivers.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Plan Around the River
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
              Build your Glenwood trip around the Caddo River.
            </h2>

            <div className="space-y-4 leading-relaxed text-[color:var(--color-muted)]">
              <p>
                For many visitors, the river is the main reason to come to
                Glenwood. A good trip usually starts with deciding whether you
                are floating, camping, fishing, swimming, or staying in a cabin.
              </p>

              <p>
                From there, build the rest of the day around practical things:
                where to park, what to bring, where to eat afterward, where to
                stay, and whether you want to add Lake Greeson, Crater of
                Diamonds, or another nearby stop while you are in the area.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {planningCards.map((item) => (
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

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Suggested Local Stops
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Places that fit naturally with a Caddo River trip.
            </h2>
          </div>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            These local stops are useful for visitors planning floats, river
            weekends, cabins, camping, food, rentals, and easy Glenwood-area
            trip planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {suggestedStops.map((stop) => (
            <Link
              key={stop.name}
              href={stop.href}
              className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="mb-2 text-sm font-semibold text-[color:var(--color-accent)]">
                {stop.type}
              </p>

              <h3 className="mb-3 text-2xl font-semibold">{stop.name}</h3>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                {stop.text}
              </p>

              <span className="mt-5 inline-block font-medium text-[color:var(--color-accent)]">
                View guide →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                River Trip Tips
              </p>

              <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
                A little planning makes the river day easier.
              </h2>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                The Caddo River is easier to enjoy when you check conditions,
                book ahead, and plan your food, lodging, and gear before the
                day gets busy.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {riverTips.map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl border border-black/5 bg-white/70 p-5"
                >
                  <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="max-w-2xl text-4xl font-semibold">
          Add Lake Greeson, Crater of Diamonds, Mount Ida, Amity, or Hot Springs
          to turn your river trip into a full southwest Arkansas getaway.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Add-On Stops
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Turn a river day into a full Glenwood getaway.
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed text-[color:var(--color-muted)]">
            <p>
              A lot of visitors start with the Caddo River and then realize
              Glenwood works as a base for more than one stop. You can add Lake
              Greeson for boating and fishing, Crater of Diamonds for a
              memorable family day, or Hot Springs for restaurants, shopping,
              trails, and bathhouse history.
            </p>

            <p>
              If you are staying overnight, use the river as the anchor and
              build the rest around easy meals, cabins, camping, coffee stops,
              local events, and nearby towns like Amity, Mount Ida, and
              Murfreesboro.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            FAQs
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Caddo River FAQs
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
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
        <div className="rounded-3xl bg-[#2d2a26] p-8 text-center text-white shadow-sm md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
            Plan Your River Trip
          </p>

          <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
            Planning a Glenwood river trip?
          </h2>

          <p className="mx-auto mb-6 max-w-3xl leading-relaxed text-white/75">
            Use the Glenwood guide to find cabins, campgrounds, restaurants,
            local businesses, events, nearby attractions, and other stops around
            the Caddo River and Lake Greeson.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/glenwood-ar-cabins"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Find Cabins & Stays
            </Link>

            <Link
              href="/glenwood-ar-restaurants"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Restaurants
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Listed
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}