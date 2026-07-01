import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Things to Do in Glenwood, Arkansas With Kids | River & Family Stops",
  description:
    "Plan family-friendly things to do in Glenwood, Arkansas with kids, including the Caddo River, John Benjamin Pond, Lake Greeson, easy food stops, cabins, and day trips.",
  keywords: [
    "things to do in Glenwood Arkansas with kids",
    "Glenwood Arkansas family activities",
    "Glenwood AR kids",
    "Caddo River with kids",
    "John Benjamin Pond Glenwood",
    "Lake Greeson family trip",
    "family friendly Glenwood Arkansas",
  ],
  alternates: { canonical: "/things-to-do-in-glenwood-with-kids" },
};

const images = {
  hero: "/images/holiday/glenwood-kids-hero.webp",
  pond: "/images/holiday/john-benjamin-pond-kids.webp",
  river: "/images/holiday/caddo-river-summer.webp",
  lake: "/images/holiday/lake-greeson-kids.webp",
};

const familyStops = [
  {
    title: "John Benjamin Fishing Pond",
    label: "Easy local stop",
    description:
      "A simple Glenwood stop for fishing, walking around, slowing down by the water, and giving kids an easy outdoor place without turning the day into a big production.",
    image: images.pond,
    href: "/john-benjamin-pond",
    bestFor: [
      "Fishing",
      "Short visits",
      "Younger kids",
      "Low-pressure outdoor time",
    ],
  },
  {
    title: "Caddo River",
    label: "Classic Glenwood family trip",
    description:
      "The Caddo River is the main outdoor draw around Glenwood. Families can plan floats, swimming, fishing, cabin weekends, and slow summer days, but should always check conditions and use legal access points.",
    image: images.river,
    href: "/caddo-river",
    bestFor: ["Floating", "Swimming", "Cabin weekends", "Summer days"],
  },
  {
    title: "Lake Greeson",
    label: "Lake day near Glenwood",
    description:
      "Lake Greeson gives families another nearby option for boating, fishing, swimming, camping, and making a full outdoor weekend around Glenwood, Kirby, Daisy, and the surrounding area.",
    image: images.lake,
    href: "/explore",
    bestFor: ["Lake days", "Camping", "Boating", "Fishing"],
  },
];

const easyIdeas = [
  {
    title: "Keep the day simple",
    text: "Glenwood works well for families because the best days do not have to be complicated. One outdoor stop, one food stop, and one backup plan is usually enough.",
  },
  {
    title: "Plan around heat and water",
    text: "Summer family trips need shade, sunscreen, water, snacks, towels, and a real break from the sun. Do not plan every hour around being outside.",
  },
  {
    title: "Check conditions before river time",
    text: "The Caddo River can change with rain, flow, and season. Check local outfitters, access notes, and weather before taking kids to swim or float.",
  },
  {
    title: "Use Glenwood as a base",
    text: "Families can stay around Glenwood, eat locally, and add short drives to Lake Greeson, Crater of Diamonds, Hot Springs, Mount Ida, or nearby small towns.",
  },
];

const tripBuilders = [
  {
    title: "Where to eat with kids",
    text: "Find casual restaurants, breakfast stops, Mexican food, pizza, cafes, and simple meals before or after outdoor time.",
    href: "/glenwood-ar-restaurants",
    cta: "Restaurants",
  },
  {
    title: "Cabins and places to stay",
    text: "Browse cabins, campgrounds, motels, river stays, lake-area lodging, and simple places to stay near the outdoors.",
    href: "/glenwood-ar-cabins",
    cta: "Cabins & Stays",
  },
  {
    title: "Plan a Glenwood day",
    text: "Use the Plan My Day tool to build a simple local itinerary around kids, food, river time, rain, or a slower family visit.",
    href: "/plan-my-day",
    cta: "Plan My Day",
  },
  {
    title: "This weekend",
    text: "Check current events before you visit. Glenwood and nearby areas can have local festivals, music, markets, and seasonal gatherings.",
    href: "/this-weekend",
    cta: "This Weekend",
  },
];

const ageGroups = [
  {
    title: "Younger kids",
    text: "Stick with short stops, easy food, shade, and places where leaving early is not a big deal. John Benjamin Pond and simple restaurant stops are good fits.",
  },
  {
    title: "Older kids and teens",
    text: "River floats, kayaking, fishing, lake time, camping, and nearby day trips usually work better for older kids who can handle a longer outdoor day.",
  },
  {
    title: "Whole-family weekends",
    text: "Book a cabin or campground, keep meals simple, and plan one main activity per day so nobody gets worn out halfway through the trip.",
  },
];

const faqs = [
  {
    question: "Is Glenwood, Arkansas good for a family trip?",
    answer:
      "Yes. Glenwood is a good family trip for outdoor-focused visitors who want the Caddo River, fishing, cabins, camping, Lake Greeson, local restaurants, and a slower small-town base.",
  },
  {
    question: "What are the best things to do in Glenwood with kids?",
    answer:
      "Good family-friendly options include John Benjamin Fishing Pond, the Caddo River, Lake Greeson, local restaurants, cabins, campgrounds, and nearby day trips like Crater of Diamonds or Hot Springs.",
  },
  {
    question: "Can kids float or swim on the Caddo River?",
    answer:
      "Families do bring kids to the Caddo River, but conditions matter. Check river levels, weather, legal access points, local outfitters, and safety before swimming or floating with children.",
  },
  {
    question: "What should families bring for a Glenwood outdoor day?",
    answer:
      "Bring water, sunscreen, towels, snacks, bug spray, water shoes, dry clothes, life jackets when needed, and a flexible backup plan in case weather or river conditions change.",
  },
];

const eyebrowClass =
  "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]";

const darkEyebrowClass =
  "mb-4 text-sm font-semibold uppercase tracking-[0.2em] !text-white/85";

const sectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl";

const smallSectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl";

const bodyTextClass = "leading-7 !text-[color:var(--color-muted)]";

const strongBodyTextClass = "text-lg leading-8 !text-[color:var(--color-muted)]";

const cardClass =
  "rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm";

const cardLinkClass =
  "group flex h-full flex-col rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const outlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white";

const lightButtonClass =
  "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const darkOutlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20";

const bottomCardLinkClass =
  "mt-auto inline-flex pt-5 font-semibold text-[color:var(--color-accent)] transition group-hover:opacity-75";

export default function ThingsToDoInGlenwoodWithKidsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[color:var(--color-text)] text-white">
        <Image
          src={images.hero}
          alt="Things to do in Glenwood Arkansas with kids"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className={darkEyebrowClass}>Family Guide</p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Things to do in Glenwood, Arkansas with kids.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/90">
              Plan a simple family trip around the Caddo River, John Benjamin
              Fishing Pond, Lake Greeson, cabins, restaurants, local events, and
              outdoor stops that make sense for kids.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#family-stops" className={lightButtonClass}>
                Family Stops
              </a>

              <Link href="/plan-my-day" className={darkOutlineButtonClass}>
                Plan My Day
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className={eyebrowClass}>Easy Family Planning</p>

                <h2 className={sectionTitleClass}>
                  Glenwood is best with kids when the plan stays simple.
                </h2>
              </div>

              <div className={`space-y-4 ${strongBodyTextClass}`}>
                <p>
                  This is not a big-city attraction list. Glenwood works better
                  as an outdoorsy family base where you can fish, float, swim,
                  eat, stay in a cabin, visit the lake, and keep the day moving
                  at a calmer pace.
                </p>

                <p>
                  The key is choosing the right stop for the age of your kids,
                  the weather, the river conditions, and how much driving you
                  actually want to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="family-stops" className="section">
        <div className="container">
          <div className="section-heading">
            <p className={eyebrowClass}>Start Here</p>

            <h2>Family-friendly places to build around.</h2>

            <p>
              These are the easiest starting points for a Glenwood family day,
              especially when you want outdoor time without overcomplicating the
              trip.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {familyStops.map((stop) => (
              <Link
                key={stop.title}
                href={stop.href}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-[color:var(--color-accent)]">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {stop.label}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {stop.title}
                  </h3>

                  <p className={`mt-4 ${bodyTextClass}`}>
                    {stop.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {stop.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/65 px-3 py-1 text-xs font-semibold text-[color:var(--color-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className={bottomCardLinkClass}>Open guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className={eyebrowClass}>Practical Tips</p>

              <h2 className={sectionTitleClass}>
                Make the day fit the kids, not the other way around.
              </h2>

              <p className={`mt-5 ${strongBodyTextClass}`}>
                A Glenwood family trip goes better when you leave room for heat,
                snacks, bathroom breaks, naps, weather, and changing river
                plans.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {easyIdeas.map((idea) => (
                <div key={idea.title} className={`${cardClass} p-6`}>
                  <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                    {idea.title}
                  </h3>

                  <p className={`mt-3 ${bodyTextClass}`}>{idea.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className={eyebrowClass}>By Age and Trip Type</p>

            <h2>Choose the right pace for your family.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {ageGroups.map((group) => (
              <div key={group.title} className={`${cardClass} p-6`}>
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {group.title}
                </h3>

                <p className={`mt-3 ${bodyTextClass}`}>{group.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/20">
        <div className="container">
          <div className="section-heading">
            <p className={eyebrowClass}>Build the Trip</p>

            <h2>Food, cabins, events, and a simple itinerary.</h2>

            <p>
              Use these Glenwood guides to turn a kid-friendly activity into a
              full day or weekend without bouncing all over the map.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {tripBuilders.map((item) => (
              <Link key={item.title} href={item.href} className={cardLinkClass}>
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h3>

                <p className={`mt-3 ${bodyTextClass}`}>{item.text}</p>

                <span className={bottomCardLinkClass}>{item.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[color:var(--color-accent)]">
              <Image
                src={images.river}
                alt="Caddo River family trip near Glenwood Arkansas"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className={eyebrowClass}>River Safety Note</p>

              <h2 className={sectionTitleClass}>
                The Caddo can be a great family day, but check it first.
              </h2>

              <p className={`mt-5 ${strongBodyTextClass}`}>
                River conditions are not the same every weekend. Before taking
                kids to float, swim, or play near the water, check the weather,
                current flow, outfitters, access points, and whether the spot
                you are using is public.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/caddo-river-swimming-access"
                  className={primaryButtonClass}
                >
                  Swimming Access Guide
                </Link>

                <Link href="/caddo-river" className={outlineButtonClass}>
                  Caddo River Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/20">
        <div className="container">
          <div className="section-heading">
            <p className={eyebrowClass}>Questions</p>

            <h2>Glenwood with kids FAQ</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className={`${cardClass} p-6`}>
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {faq.question}
                </h3>

                <p className={`mt-3 ${bodyTextClass}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}