import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Lake Greeson & Crater of Diamonds Day Trip From Glenwood Arkansas",
  description:
    "Plan a Lake Greeson and Crater of Diamonds day trip from Glenwood, Arkansas with practical tips for Swaha Lodge N Marina, Dam Grill, Murfreesboro, diamond digging, lake time, families, food, and what to check before going.",
  keywords: [
    "Lake Greeson Crater of Diamonds day trip",
    "Lake Greeson day trip",
    "Crater of Diamonds from Glenwood Arkansas",
    "Murfreesboro Arkansas day trip",
    "Swaha Lodge N Marina",
    "Dam Grill",
    "things to do near Glenwood Arkansas",
    "Arkansas family day trip",
    "Arkansas lake weekend",
    "Glenwood Arkansas day trips",
  ],
  alternates: {
    canonical: "/lake-greeson-crater-of-diamonds-day-trip",
  },
};

const images = {
  hero: "/images/glenwood/crater.jpg",
  lake: "/images/glenwood/lake-greeson.jpg",
  forest: "/images/glenwood/forest.jpg",
  river: "/images/glenwood/glenwoodriver.jpg",
};

const dayFlow = [
  {
    title: "Start with the dirt",
    time: "Morning idea",
    text:
      "If Crater of Diamonds is the main reason for the day, start there before the heat wears everybody down. Bring clothes that can get dusty, shoes that can handle dirt, water, sunscreen, and a realistic attitude. Finding a diamond is possible, but the real win is the experience.",
  },
  {
    title: "Take a real break",
    time: "Midday reset",
    text:
      "After digging, do not try to push the whole group straight into another big activity without a pause. This is where Murfreesboro, a shaded break, a snack, or a check on lake plans can save the day.",
  },
  {
    title: "Shift toward Lake Greeson",
    time: "Afternoon lake time",
    text:
      "Once everyone has cleaned up a little, Lake Greeson can turn the day into something more rounded. Think lake wind, fishing gear, marina time, swimming areas, or just slowing down by the water.",
  },
  {
    title: "Keep dinner simple",
    time: "Evening plan",
    text:
      "If Dam Grill is open, it can fit the lake-day feel. If not, keep food flexible and have a backup plan. After dirt, heat, water, and kids, easy usually beats fancy.",
  },
];

const tripStyles = [
  {
    title: "Diamond-first day",
    text:
      "Best for families with kids who are excited about Crater of Diamonds, or anyone who wants to get the hottest, dirtiest part done earlier before shifting toward lake time.",
  },
  {
    title: "Lake-first day",
    text:
      "Best for fishing trips, boat days, or visitors who care more about the water than the diamond field. In this version, Crater of Diamonds becomes the add-on only if the group still has energy.",
  },
  {
    title: "Slow weekend version",
    text:
      "Best if you are staying around Glenwood, Swaha, Murfreesboro, or a nearby cabin. Split the lake and diamond field across two days instead of trying to make everybody do it all at once.",
  },
];

const stops = [
  {
    name: "Crater of Diamonds State Park",
    label: "Diamond Digging • Murfreesboro",
    text:
      "The big anchor for this day trip. Visitors search the diamond field and keep what they find, but it is still an outdoor dirt-and-sun activity. Check current hours, admission, tool rules, field conditions, and water park season before going.",
    href: "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
  },
  {
    name: "Lake Greeson",
    label: "Lake Day • Fishing • Boating",
    text:
      "The lake side of the trip. This is where the day can shift from digging and dust to water, fishing, boating, swimming, camping, or a quiet break before heading back toward Glenwood.",
    href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
  },
  {
    name: "Swaha Lodge N Marina",
    label: "Marina • Lodging • Lake Greeson",
    text:
      "A practical Lake Greeson stop to check for marina details, lodging, boat rental information, fishing, lake access, and longer weekend planning around the water.",
    href: "https://swahacabins.com/",
  },
  {
    name: "Dam Grill",
    label: "Seasonal Lake Food • Swaha",
    text:
      "A seasonal lakeside food stop connected with Swaha. It fits the feel of a Lake Greeson day, but check current hours and availability before you plan the whole meal around it.",
    href: "https://swahacabins.com/dam-grill/",
  },
];

const bringList = [
  "Water, more than you think you need",
  "Sunscreen, hats, and shade when possible",
  "Clothes and shoes that can get dusty or muddy",
  "Towels and dry clothes if you are adding lake time",
  "Snacks for kids and anyone who gets worn out in the heat",
  "Fishing gear and licenses if fishing is part of the plan",
  "A backup food plan in case seasonal stops are closed",
  "Patience, because outdoor days rarely run perfect",
];

const checkBefore = [
  "Crater of Diamonds hours, admission, field rules, and digging conditions",
  "Diamond Springs Water Park season if you are planning around kids cooling off",
  "Lake Greeson weather, lake levels, swimming areas, and day-use access",
  "Swaha marina hours and boat rental availability",
  "Dam Grill seasonal hours and menu availability",
  "Fishing rules and license needs",
  "Caddo River conditions if this is part of a bigger Glenwood weekend",
  "Lodging availability on weekends, holidays, and summer dates",
];

const faqs = [
  {
    question: "Can you do Lake Greeson and Crater of Diamonds in one day?",
    answer:
      "Yes, but it works best when you start early, keep the plan simple, and check current hours, weather, lake access, and restaurant details before going. Families with younger kids may be better off splitting it into two slower days.",
  },
  {
    question: "Should we do Crater of Diamonds or Lake Greeson first?",
    answer:
      "If diamond digging is the main goal, start with Crater of Diamonds earlier in the day before the heat wears everyone out. If fishing, boating, or lake time is the main goal, start with Lake Greeson and treat the diamond field as optional.",
  },
  {
    question: "Is this a good family day trip from Glenwood?",
    answer:
      "It can be, especially for families who like outdoor days and do not mind dirt, heat, water, and a little driving. Bring water, snacks, sun protection, towels, and a backup plan.",
  },
  {
    question: "Where should we eat around Lake Greeson?",
    answer:
      "Dam Grill at Swaha is one seasonal option to check around Lake Greeson. Because seasonal lake food hours can change, it is smart to check current details and have a backup meal plan.",
  },
];

export default function LakeGreesonCraterDayTripPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Lake Greeson and Crater of Diamonds Day Trip From Glenwood",
              description:
                "A practical guide for pairing Lake Greeson, Swaha Lodge N Marina, Dam Grill, Murfreesboro, and Crater of Diamonds with a Glenwood, Arkansas trip.",
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
          alt="Crater of Diamonds day trip near Lake Greeson Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-transparent" />

        <div className="container relative z-10 pb-16 pt-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Lake Greeson + Crater of Diamonds
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
              A practical day trip from Glenwood to the lake and the diamond field.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/85 md:text-xl">
              This is the bigger Glenwood-area day trip: start with Murfreesboro
              and Crater of Diamonds, add Lake Greeson, check Swaha and Dam
              Grill, then head back tired, dusty, maybe wet, and hopefully glad
              you did not try to cram in too much more.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lake-greeson-near-glenwood" className="btn btn-light">
                Lake Greeson Guide
              </Link>

              <Link href="/glenwood-ar-cabins" className="btn">
                Cabins & Stays
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
                This works better as a real day trip, not a quick add-on.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 !text-[color:var(--color-text)]">
                Lake Greeson and Crater of Diamonds can fit into the same
                Glenwood-area trip, but it helps to be honest about the kind of
                day you are planning. This is not just a quick photo stop. It
                can mean digging in the sun, changing clothes, eating outside,
                checking lake access, and keeping kids from getting cooked by
                the afternoon heat.
              </p>

              <p className="leading-7 !text-[color:var(--color-muted)]">
                The upside is that it gives visitors a full southwest Arkansas
                day without needing a big city itinerary. You get the oddball
                Arkansas experience of searching for diamonds, the lake-day feel
                of Lake Greeson, and the small-town route through Murfreesboro
                and the Glenwood area.
              </p>

              <p className="leading-7 !text-[color:var(--color-muted)]">
                If you are staying in Glenwood, this is a good way to stretch a
                Caddo River weekend into something bigger. If you are only in
                town for a short float, save this for another time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>A simple way to order the day</h2>
            <p>
              You can flip the order depending on your group, but for most
              families and first-time visitors, the diamond field is easier
              earlier in the day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {dayFlow.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {item.time}
                </p>

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
          src={images.lake}
          alt="Lake Greeson Arkansas lake day"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl rounded-2xl bg-black/55 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Realistic Planning
            </p>

            <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
              Dirt first, water later is usually the easier family plan.
            </h2>

            <p className="mt-5 text-lg leading-8 !text-white/85">
              Crater of Diamonds can leave everybody dusty, hot, and ready for a
              break. Lake Greeson gives the day a second gear if your group
              still has energy. Just do not build the whole plan around
              perfect timing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Three ways to build the trip</h2>
            <p>
              The best version depends on your group. A fishing crew, a family
              with small kids, and a couple on a cabin weekend are not planning
              the same day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tripStyles.map((style) => (
              <article
                key={style.title}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {style.title}
                </h3>

                <p className="mt-4 leading-7 !text-[color:var(--color-muted)]">
                  {style.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Main stops for the Lake Greeson and Crater day</h2>
            <p>
              These are practical anchors to check while planning. Treat hours,
              access, food, rentals, and seasonal details as things to verify,
              not things to assume.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {stops.map((stop) => (
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
                  Check current info →
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
                What To Bring
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                Plan for dirt, heat, water, and tired kids.
              </h2>

              <ul className="mt-6 space-y-3">
                {bringList.map((item) => (
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
                Check First
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
                A little checking ahead saves the day.
              </h2>

              <ul className="mt-6 space-y-3">
                {checkBefore.map((item) => (
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
            className="grid gap-8 rounded-[2rem] border bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9 lg:grid-cols-[0.85fr_1.15fr]"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Pair It With Glenwood
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                This day trip works best when Glenwood is your base.
              </h2>

              <p className="mt-5 leading-7 !text-[color:var(--color-muted)]">
                After a long outdoor day, it helps to have the simple stuff
                figured out. Know where you are staying, where you can eat, and
                whether you are saving the Caddo River for another day.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/glenwood-ar-cabins"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  Cabins & Stays
                </h3>
                <p className="mt-2 leading-7 !text-[color:var(--color-muted)]">
                  Find cabins, campgrounds, motels, and river-area lodging.
                </p>
              </Link>

              <Link
                href="/caddo-river"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  Caddo River
                </h3>
                <p className="mt-2 leading-7 !text-[color:var(--color-muted)]">
                  Keep the river as its own day if you want the weekend slower.
                </p>
              </Link>

              <Link
                href="/glenwood-ar-restaurants"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  Restaurants
                </h3>
                <p className="mt-2 leading-7 !text-[color:var(--color-muted)]">
                  Plan the easy food stop before everyone is worn out.
                </p>
              </Link>

              <Link
                href="/plan-my-day"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  Plan My Day
                </h3>
                <p className="mt-2 leading-7 !text-[color:var(--color-muted)]">
                  Build a simple Glenwood-area day around your group.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Lake Greeson and Crater day trip FAQs</h2>
            <p>
              Quick answers for visitors trying to make the lake and diamond
              field work without wearing everyone out.
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
                Make it a weekend, not a race.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 !text-white/85">
                Use this with the Glenwood cabins, Caddo River, restaurants,
                and nearby day trip guides to build a weekend that fits your
                group.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lake-greeson-near-glenwood" className="btn btn-light">
                  Lake Greeson Guide
                </Link>

                <Link href="/glenwood-ar-cabins" className="btn">
                  Cabins & Stays
                </Link>

                <Link href="/this-weekend" className="btn">
                  This Weekend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}