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
    text: "Glenwood is one of the main Arkansas towns people use as a base for Caddo River floats, kayaking, canoeing, tubing, swimming, and easy river weekends.",
  },
  {
    title: "Stay close to the water",
    text: "Visitors can find cabins, campgrounds, motels, private rentals, and river-area stays around Glenwood, Caddo Gap, and the surrounding Caddo River area.",
  },
  {
    title: "Make it a full weekend",
    text: "Pair the river with local restaurants, coffee stops, Lake Greeson, Crater of Diamonds, Mount Ida, Amity, or a quiet drive through the Ouachita region.",
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
      "Visitors can also explore local restaurants, coffee shops, Lake Greeson, Crater of Diamonds State Park, Mount Ida, Amity, and other nearby Ouachita region stops.",
  },
];

export default function CaddoRiverPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
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

      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Caddo River Guide
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Caddo River in Glenwood, Arkansas
          </h1>

          <p className="text-lg text-[color:var(--color-muted)] leading-relaxed max-w-2xl">
            Plan a Caddo River trip around Glenwood with floating, kayaking,
            canoe rentals, cabins, camping, fishing, local restaurants, and
            nearby southwest Arkansas outdoor stops.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/glenwood-ar-cabins"
              className="bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              Find Cabins & Stays
            </Link>

            <Link
              href="/glenwood-ar-restaurants"
              className="border border-[color:var(--color-accent)] text-[color:var(--color-accent)] px-6 py-3 rounded-full font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
            >
              View Restaurants
            </Link>

            <Link
              href="/explore"
              className="border border-[color:var(--color-accent)] text-[color:var(--color-accent)] px-6 py-3 rounded-full font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
            >
              More Things To Do
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow">
          <img
            src="/images/glenwood/rivercanoe.jpg"
            alt="Caddo River near Glenwood Arkansas"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {riverHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/rivercanoe.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Float, fish, swim, camp, or slow down beside one of southwest
          Arkansas’ favorite rivers.
        </h2>
      </BackgroundSection>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Plan Around the River
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Build your Glenwood trip around the Caddo River.
            </h2>

            <p className="text-[color:var(--color-muted)] leading-relaxed">
              For many visitors, the river is the main reason to come to
              Glenwood. A good trip usually starts with deciding whether you are
              floating, camping, fishing, or staying in a cabin, then planning
              food and nearby stops around that.
            </p>
          </div>

          <div className="grid gap-4">
            {[
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
                text: "Use Glenwood as a base for the Caddo River, Lake Greeson, Crater of Diamonds, Mount Ida, and Amity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm"
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
            Places that fit naturally with a Caddo River trip.
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These local stops are useful for visitors planning floats, river
            weekends, cabins, camping, food, and easy Glenwood-area trip
            planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {suggestedStops.map((stop) => (
            <Link
              key={stop.name}
              href={stop.href}
              className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                {stop.type}
              </p>

              <h3 className="text-2xl font-semibold mb-3">{stop.name}</h3>

              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {stop.text}
              </p>

              <span
                className="inline-block mt-5 font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                View guide →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wide mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                River Trip Tips
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                A little planning makes the river day easier.
              </h2>

              <p className="text-[color:var(--color-muted)] leading-relaxed">
                The Caddo River is easier to enjoy when you check conditions,
                book ahead, and plan your food, lodging, and gear before the
                day gets busy.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {riverTips.map((tip) => (
                <div key={tip} className="rounded-2xl bg-white/70 p-5">
                  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <BackgroundSection image="/images/glenwood/lagegreeson.jpg">
        <h2 className="text-4xl font-semibold max-w-2xl">
          Add Lake Greeson, Crater of Diamonds, Mount Ida, Amity, or Hot Springs
          to turn your river trip into a full southwest Arkansas getaway.
        </h2>
      </BackgroundSection>

      <Section>
        <h2 className="text-3xl font-semibold mb-6">
          Caddo River FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((item) => (
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
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Planning a Glenwood river trip?
          </h2>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl mx-auto leading-relaxed">
            Use the Glenwood guide to find cabins, campgrounds, restaurants,
            local businesses, nearby attractions, and other stops around the
            Caddo River and Lake Greeson.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/glenwood-ar-cabins"
              className="bg-black text-white px-6 py-3 rounded-md"
            >
              Find Cabins & Stays
            </Link>

            <Link href="/glenwood-ar-restaurants" className="border px-6 py-3 rounded-md">
              View Restaurants
            </Link>

            <Link href="/contact" className="border px-6 py-3 rounded-md">
              Get Listed
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}