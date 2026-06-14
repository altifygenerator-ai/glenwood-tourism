import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Lake Greeson Near Glenwood Arkansas | Lake Day Guide, Fishing, Boating & Nearby Stops",
  description:
    "Plan a Lake Greeson day near Glenwood, Arkansas with practical tips for boating, fishing, swimming, camping, Swaha Lodge N Marina, Dam Grill, Caddo River weekends, and nearby day trips.",
  keywords: [
    "Lake Greeson near Glenwood Arkansas",
    "Lake Greeson day trip",
    "things to do near Glenwood Arkansas",
    "Glenwood Arkansas lake trip",
    "Lake Greeson Arkansas",
    "Swaha Lodge N Marina",
    "Dam Grill Lake Greeson",
    "Caddo River",
    "Glenwood Arkansas cabins",
    "Arkansas lake weekend",
  ],
  alternates: {
    canonical: "/lake-greeson-near-glenwood",
  },
};

const images = {
  hero: "/images/glenwood/lake-greeson.jpg",
  river: "/images/glenwood/caddo-river.jpg",
  forest: "/images/glenwood/forest.jpg",
  crater: "/images/glenwood/crater.jpg",
};

const quickLinks = [
  { href: "/caddo-river", label: "Caddo River Guide" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Stays" },
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/lake-greeson-crater-of-diamonds-day-trip", label: "Lake + Crater Day Trip" },
];

const waterDays = [
  {
    title: "Caddo River day",
    text:
      "Best when you want moving water, floats, kayaks, tubes, swimming holes, outfitters, and that classic Glenwood river feel. It is usually the first thing people think about when they plan a Glenwood trip.",
  },
  {
    title: "Lake Greeson day",
    text:
      "Best when you want a lake day with boating, fishing, swimming, camping, marina stops, lake wind, and a slower outdoor day that does not depend on a river float schedule.",
  },
  {
    title: "Both in one weekend",
    text:
      "This is where Glenwood works well as a base. Do the Caddo when conditions fit, then use Lake Greeson as the quieter lake-day add-on for the same weekend.",
  },
];

const lakeIdeas = [
  {
    title: "Boating and marina time",
    text:
      "Lake Greeson works well for visitors who want to bring a boat, check into marina options, rent if available, or spend more of the day around ramps, docks, and lake access.",
  },
  {
    title: "Fishing trips",
    text:
      "For families, friends, and folks hauling rods with them, Lake Greeson gives the trip a different feel than a river float. Check current fishing rules, license needs, lake levels, and weather before making it the main plan.",
  },
  {
    title: "Swimming, camping, and shoreline breaks",
    text:
      "The lake can be a good fit for hot afternoons, wet towels, simple food, and kids needing a break from being in the car. Check day-use areas, swimming access, and campground details before heading out.",
  },
];

const relevantStops = [
  {
    name: "Lake Greeson",
    label: "Lake Day • Boating • Fishing • Camping",
    text:
      "The main lake-day option to think about when you are staying around Glenwood. It fits boating, fishing, swimming, camping, shoreline time, and a quieter outdoor day away from the river.",
    href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
    cta: "Check Lake Info",
  },
  {
    name: "Swaha Lodge N Marina",
    label: "Marina • Lodging • Lake Greeson",
    text:
      "A family-owned Lake Greeson marina and lodging stop near Murfreesboro. This is one of the clearest named places to check when you are planning around the lake, boat rentals, cabins, fishing, or a longer lake weekend.",
    href: "https://swahacabins.com/",
    cta: "View Swaha",
  },
  {
    name: "Dam Grill",
    label: "Seasonal Lake Food • Swaha",
    text:
      "A seasonal lakeside food stop connected with Swaha. This is the kind of place to check before you go, because lake food hours can change with season, staffing, weather, and busy weekends.",
    href: "https://swahacabins.com/dam-grill/",
    cta: "Check Dam Grill",
  },
];

const goodFor = [
  "Families who want a lake day near a Glenwood trip",
  "Cabin weekends where one day is river and one day is lake",
  "Fishing trips and boat days",
  "Visitors who want a quieter outdoor day than a packed attraction schedule",
  "People already planning Caddo River, Glenwood, Kirby, Daisy, or Murfreesboro",
];

const maybeSkip = [
  "If you only have a short river-focused visit",
  "If you do not want extra driving during the day",
  "If lake weather, water levels, or access details are not lining up",
  "If your group needs everything walkable from town",
];

const checkBefore = [
  "Lake levels and weather",
  "Boat ramp and day-use access",
  "Swimming area rules",
  "Fishing rules and license needs",
  "Marina hours and boat rental availability",
  "Dam Grill seasonal hours",
  "Campground and lodging availability",
  "Caddo River float conditions if you are pairing both water days",
];

const faqs = [
  {
    question: "Is Lake Greeson worth visiting from Glenwood?",
    answer:
      "Yes, if you want a lake day, boating, fishing, camping, swimming, or a quieter outdoor add-on to a Glenwood and Caddo River trip. It works best when you have enough time to make the drive and check current lake details before going.",
  },
  {
    question: "How is Lake Greeson different from the Caddo River?",
    answer:
      "The Caddo River is the classic Glenwood river day with floats, swimming, and moving water. Lake Greeson is more of a lake-day option with boating, fishing, camping, marina stops, and shoreline time.",
  },
  {
    question: "Can Lake Greeson and the Caddo River fit into the same weekend?",
    answer:
      "Yes. Many visitors can build one day around the Caddo River and another around Lake Greeson, especially if they are staying in a cabin, campground, motel, or river-area lodging near Glenwood.",
  },
  {
    question: "What should I check before going to Lake Greeson?",
    answer:
      "Check weather, lake levels, day-use access, swimming areas, boat ramp details, fishing rules, marina hours, boat rentals, campground availability, and seasonal food hours before planning around the lake.",
  },
];

export default function LakeGreesonNearGlenwoodPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Lake Greeson Near Glenwood Arkansas",
              description:
                "A practical local guide to adding Lake Greeson to a Glenwood, Arkansas trip.",
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

      <section className="relative flex min-h-[720px] items-end overflow-hidden dark-section">
        <Image
          src={images.hero}
          alt="Lake Greeson near Glenwood Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-transparent" />

        <div className="container relative z-10 pb-16 pt-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Lake Greeson Near Glenwood
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
              Should you add Lake Greeson to a Glenwood trip?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/85 md:text-xl">
              If Glenwood is your small-town river base, Lake Greeson is the
              nearby lake-day option to think about when you want boating,
              fishing, swimming, camping, marina time, or one more outdoor day
              that does not feel like a crowded checklist.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lake-greeson-crater-of-diamonds-day-trip" className="btn btn-light">
                Lake + Crater Day Trip
              </Link>

              <Link href="/caddo-river" className="btn">
                Caddo River Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Start Here
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Glenwood is the river base. Lake Greeson is the lake day.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 !text-[color:var(--color-text)]">
                A lot of Glenwood trips start with the Caddo River. That makes
                sense. The river is close, easy to build around, and it is the
                reason plenty of families, couples, and cabin guests come this
                way in the first place.
              </p>

              <p className="leading-7 !text-[color:var(--color-muted)]">
                Lake Greeson gives that same trip a different kind of water day.
                Instead of floats, tubes, and river access, you are thinking
                boat ramps, fishing gear, swimming areas, wet towels in the
                truck, a marina stop, and maybe a slow meal after being outside.
                It is not a replacement for the Caddo. It is the add-on when
                you want the weekend to feel a little bigger.
              </p>

              <p className="leading-7 !text-[color:var(--color-muted)]">
                The main thing is to be realistic. If you only have a short
                visit, keep your day centered around Glenwood and the river. If
                you are staying a night or two, or you already planned a cabin
                weekend, Lake Greeson can make the trip feel more complete.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Caddo River day or Lake Greeson day?</h2>
            <p>
              Both can fit the same Glenwood trip, but they are not the same
              kind of day. Pick based on your group, the weather, and how much
              driving you want to do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {waterDays.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 !text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden dark-section">
        <Image
          src={images.river}
          alt="Caddo River near Glenwood Arkansas"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/58 to-black/25" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl rounded-2xl bg-black/55 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Simple Trip Planning
            </p>

            <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
              Do not make it harder than it needs to be.
            </h2>

            <p className="mt-5 text-lg leading-8 !text-white/85">
              One good outdoor plan, one easy food plan, and one backup plan is
              usually enough. If the Caddo River is right for the day, start
              there. If your group wants a lake day, shift toward Lake Greeson
              and give yourself room to enjoy it without rushing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                What To Do
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                What a Lake Greeson day can look like from Glenwood.
              </h2>

              <p className="mt-5 leading-7 !text-[color:var(--color-muted)]">
                Think about Lake Greeson as a flexible outdoor day. It can be a
                fishing trip, a boat day, a swim day, a camping weekend, or just
                a scenic break when your group wants something quieter than a
                full attraction day.
              </p>
            </div>

            <div className="grid gap-5">
              {lakeIdeas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 !text-[color:var(--color-muted)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Relevant Lake Greeson stops to know about</h2>
            <p>
              These are not paid featured listings. They are practical places to
              check when you are trying to build a real Lake Greeson day from a
              Glenwood trip.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relevantStops.map((stop) => (
              <article
                key={stop.name}
                className="flex h-full flex-col rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {stop.label}
                </p>

                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {stop.name}
                </h3>

                <p className="mt-4 leading-7 !text-[color:var(--color-muted)]">
                  {stop.text}
                </p>

                <a
                  href={stop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex pt-5 font-bold text-[color:var(--color-accent)]"
                >
                  {stop.cta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-[2rem] border bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Good Fit
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                Lake Greeson is a good add-on if...
              </h2>

              <ul className="mt-6 space-y-3">
                {goodFor.map((item) => (
                  <li key={item} className="leading-7 text-[color:var(--color-muted)]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-[2rem] border bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Maybe Skip It
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                Save it for another trip if...
              </h2>

              <ul className="mt-6 space-y-3">
                {maybeSkip.map((item) => (
                  <li key={item} className="leading-7 text-[color:var(--color-muted)]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-[2rem] border bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Check Before You Go
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                  Lake days are better when you check the boring stuff first.
                </h2>

                <p className="mt-5 leading-7 !text-[color:var(--color-muted)]">
                  Hours, access, rentals, lake levels, weather, and food options
                  can change. A few minutes of checking ahead can save a whole
                  day of driving around frustrated.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {checkBefore.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-white/55 p-4 font-semibold text-[color:var(--color-text)]"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Lake Greeson near Glenwood FAQs</h2>
            <p>
              Quick answers for visitors deciding whether Lake Greeson belongs
              in their Glenwood weekend.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 !text-[color:var(--color-muted)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[2rem] border p-8 shadow-sm md:p-10"
            style={{
              borderColor: "rgba(0,0,0,0.08)",
              background:
                "linear-gradient(135deg, rgba(47,88,78,0.95), rgba(31,49,42,0.96))",
            }}
          >
            <div className="relative z-10 max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
                Keep Planning
              </p>

              <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
                Build the weekend around your group, not a giant checklist.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 !text-white/85">
                Use this with the Glenwood cabins, Caddo River, restaurants,
                and nearby day trip guides to build a weekend that fits your
                group.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/glenwood-ar-cabins" className="btn btn-light">
                  Cabins & Stays
                </Link>

                <Link href="/glenwood-ar-restaurants" className="btn">
                  Restaurants
                </Link>

                <Link href="/lake-greeson-crater-of-diamonds-day-trip" className="btn">
                  Lake + Crater Day Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}