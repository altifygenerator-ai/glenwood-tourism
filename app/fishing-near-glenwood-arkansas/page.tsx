import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fishing Near Glenwood Arkansas",
  description:
    "Compare Caddo River, Lake Greeson, and John Benjamin Pond for fishing near Glenwood, Arkansas, from easy family stops to full lake days.",
  keywords: [
    "fishing near Glenwood Arkansas",
    "Caddo River fishing",
    "Lake Greeson fishing",
    "John Benjamin Glenwood Community Pond",
    "family fishing Glenwood Arkansas",
    "where to fish near Glenwood AR",
  ],
  alternates: {
    canonical: "/fishing-near-glenwood-arkansas",
  },
  openGraph: {
    title: "Fishing Near Glenwood Arkansas",
    description:
      "Compare Caddo River, Lake Greeson, and John Benjamin Pond for fishing near Glenwood, Arkansas, from easy family stops to full lake days.",
    url: "/fishing-near-glenwood-arkansas",
    type: "article",
  },
};

const quickAnswerRows = [
  ["Easy bank fishing with kids", "John Benjamin Glenwood Community Pond"],
  ["A quick stop without hauling a boat", "John Benjamin Pond"],
  ["Moving water and river scenery", "Caddo River"],
  ["Smallmouth and spotted bass water", "Caddo River"],
  ["A float-and-fish kind of day", "Caddo River"],
  ["Boat ramps, marinas, and bigger water", "Lake Greeson"],
  ["Camping plus fishing", "Lake Greeson / Daisy State Park"],
  ["A full family lake day", "Lake Greeson"],
  ["The simplest first stop", "John Benjamin Pond"],
];

const bestForJohnBenjamin = [
  "Kids and beginner anglers",
  "Short fishing stops",
  "Bank fishing",
  "A slower afternoon in town",
  "Visitors who do not want to plan around river levels or boat ramps",
];

const notBestForJohnBenjamin = [
  "A full serious fishing trip",
  "Boaters",
  "People wanting a wild river or lake experience",
];

const bestForCaddo = [
  "Moving-water fishing",
  "Smallmouth and spotted bass interest",
  "Float-and-fish trips",
  "Kayak anglers",
  "Visitors who want the most “Glenwood” feeling fishing day",
];

const notBestForCaddo = [
  "Very young kids without close supervision",
  "People who do not want to check water conditions",
  "Anyone wanting the easiest possible fishing stop",
  "Trespassing or guessing at private access",
];

const bestForGreeson = [
  "Boat fishing",
  "Crappie, bass, and catfish",
  "Camping weekends",
  "Families who want fishing plus swimming, kayaking, or hiking",
  "Visitors staying around Daisy, Kirby, or the lake",
];

const notBestForGreeson = [
  "A quick one-hour stop",
  "People who do not want to deal with ramps, boat rules, or lake planning",
  "A simple beginner trip with very young kids unless you already have the setup",
];

const familyChoices = [
  ["First fishing trip with kids", "John Benjamin Pond"],
  ["Family camping or lake weekend", "Lake Greeson"],
  ["River-loving family with older kids", "Caddo River"],
  ["Short evening cast", "John Benjamin Pond"],
  ["Scenic outdoor day", "Caddo River or Lake Greeson"],
  ["Boat day", "Lake Greeson"],
];

const planningLinks = [
  { href: "/john-benjamin-pond", label: "John Benjamin Pond" },
  { href: "/caddo-river", label: "Caddo River Guide" },
  {
    href: "/caddo-river-swimming-access",
    label: "Caddo River Swimming Spots & Easy River Access",
  },
  { href: "/lake-greeson-near-glenwood", label: "Lake Greeson Near Glenwood" },
  {
    href: "/things-to-do-in-glenwood-with-kids",
    label: "Things To Do With Kids in Glenwood",
  },
  { href: "/glenwood-ar-restaurants", label: "Glenwood Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Places To Stay Near Glenwood" },
  { href: "/this-weekend", label: "Glenwood Events / This Weekend" },
];

const faqs = [
  {
    question: "Where can I fish near Glenwood, Arkansas?",
    answer:
      "Three good options near Glenwood are John Benjamin Glenwood Community Pond, the Caddo River, and Lake Greeson. John Benjamin Pond is the easiest family stop, the Caddo is best for river fishing, and Lake Greeson is better for boat fishing and full outdoor days.",
  },
  {
    question: "Is John Benjamin Pond good for kids?",
    answer:
      "Yes. John Benjamin Pond is the easiest low-pressure option for kids, beginners, and short bank-fishing visits in Glenwood.",
  },
  {
    question: "What fish are in the Caddo River near Glenwood?",
    answer:
      "The Caddo River above DeGray Lake is known for smallmouth and spotted bass. Arkansas Tourism also notes seasonal white and hybrid striped bass above the lake in March and April, along with stream-running walleye in the Caddo.",
  },
  {
    question: "Is Lake Greeson good for fishing?",
    answer:
      "Yes. Lake Greeson is a strong nearby lake option for anglers, especially if you want a bigger day with boating, camping, kayaking, or family time. Daisy State Park describes Lake Greeson as popular for crappie, bass, and catfish.",
  },
  {
    question: "Do I need a fishing license in Glenwood?",
    answer:
      "In most cases, anglers 16 and older need a valid Arkansas fishing license. A trout permit may also be required if you are keeping trout or fishing certain trout waters. Always check AGFC’s current rules before you go.",
  },
];

const sources = [
  {
    name: "Arkansas Game and Fish Commission — Family and Community Fishing Program Stocked Ponds",
    href: "https://www.agfc.com/fishing/where-to-fish/family-and-community-fishing-program-stocked-ponds/",
  },
  {
    name: "Arkansas Tourism — Caddo River",
    href: "https://www.arkansas.com/experiences/discover/attraction-listings/caddo-river",
  },
  {
    name: "Arkansas Tourism — Daisy State Park",
    href: "https://www.arkansas.com/state-parks/explore/parks/daisy-state-park",
  },
  {
    name: "U.S. Army Corps of Engineers — Lake Greeson Recreation",
    href: "https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/",
  },
  {
    name: "Arkansas Game and Fish Commission — Fishing License Descriptions and Fees",
    href: "https://www.agfc.com/resources/licensing/fishing-license-descriptions-and-fees/",
  },
  {
    name: "USGS — Caddo River Near Caddo Gap Water Data",
    href: "https://waterdata.usgs.gov/monitoring-location/07359610/",
  },
  {
    name: "USGS — Caddo River at Glenwood Water Data",
    href: "https://waterdata.usgs.gov/monitoring-location/07359770/",
  },
];

function ArticleImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure
      className="relative z-10 min-h-[260px] overflow-hidden rounded-[1.45rem] border border-black/10 shadow-sm"
      aria-label={label}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />

      <figcaption className="absolute inset-x-0 bottom-0 bg-black/55 px-6 py-4 text-sm leading-relaxed text-white backdrop-blur-sm">
        {label}
      </figcaption>
    </figure>
  );
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4 transition hover:opacity-80"
    >
      {children}
    </a>
  );
}

function CheckList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FishingNearGlenwoodPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Caddo River vs. Lake Greeson vs. John Benjamin Pond: Where to Fish Near Glenwood",
              description:
                "Compare Caddo River, Lake Greeson, and John Benjamin Pond for fishing near Glenwood, Arkansas, from easy family stops to full lake days.",
              author: {
                "@type": "Organization",
                name: "Glenwood Arkansas Guide",
              },
              publisher: {
                "@type": "Organization",
                name: "Glenwood Arkansas Guide",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.glenwoodarkansas.org/fishing-near-glenwood-arkansas",
              },
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

      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 18%, rgba(139,94,52,0.22), transparent 30%), radial-gradient(circle at 18% 82%, rgba(47,88,78,0.16), transparent 34%), linear-gradient(135deg, var(--bg-card) 0%, var(--color-bg) 52%, rgba(47,88,78,0.08) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,88,78,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(47,88,78,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 top-16 hidden text-[10rem] font-bold leading-none opacity-[0.045] lg:block"
          style={{ color: "var(--color-accent)" }}
        >
          FISHING
        </div>

        <div className="relative z-10 container py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.56fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Fishing Near Glenwood Arkansas
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-[color:var(--color-text)] md:text-7xl">
                Caddo River vs. Lake Greeson vs. John Benjamin Pond: Where to Fish Near Glenwood
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
                Compare three different kinds of water near Glenwood, from an easy family pond to a river day or a full Lake Greeson fishing trip.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#quick-answer" className="btn">
                  Compare Fishing Spots
                </Link>

                <Link href="/john-benjamin-pond" className="btn btn-light">
                  John Benjamin Pond
                </Link>
              </div>
            </div>

            <ArticleImage
              src="/images/glenwood/caddo-river-fishing.jpg"
              alt="Fishing along the Caddo River near Glenwood, Arkansas"
              label="Fishing near Glenwood can mean an easy pond stop, a Caddo River day, or a full Lake Greeson trip."
            />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="prose-none space-y-7 text-[color:var(--color-muted)]">
          <p className="text-lg leading-8 md:text-xl">
            Fishing near Glenwood is not one-size-fits-all.
          </p>

          <p className="text-lg leading-8 md:text-xl">
            Some days you just want an easy place to take the kids for an hour. Some days you want to work moving water and maybe catch smallmouth on the Caddo. Other days, you want to load the boat, pack the cooler, and make a full Lake Greeson day out of it.
          </p>

          <p className="text-lg leading-8 md:text-xl">
            That is what makes Glenwood a good little fishing base. You do not have to pick one kind of water. You have a community pond, a river, and a lake all close enough to build a day around.
          </p>

          <p className="text-lg leading-8 md:text-xl">Here is how to choose the right spot.</p>
        </div>

        <section id="quick-answer" className="mt-14 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Quick answer: where should you fish near Glenwood?
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>
              If you want the easiest, lowest-stress option, start with{" "}
              <Link href="/john-benjamin-pond" className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
                John Benjamin Glenwood Community Pond
              </Link>
              .
            </p>

            <p>
              If you want moving water, smallmouth-style fishing, or a river day that feels more like Glenwood, look at the{" "}
              <Link href="/caddo-river" className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
                Caddo River
              </Link>
              .
            </p>

            <p>
              If you want boat fishing, camping, crappie, bass, catfish, or a bigger outdoor day, head toward{" "}
              <Link href="/lake-greeson-near-glenwood" className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
                Lake Greeson
              </Link>
              .
            </p>

            <p>Each one fits a different kind of trip.</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
            <div className="grid grid-cols-[1fr_1fr] border-b border-black/10 bg-white/40 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
              <div>If you want…</div>
              <div>Try this spot</div>
            </div>
            {quickAnswerRows.map(([want, spot]) => (
              <div
                key={want}
                className="grid grid-cols-[1fr_1fr] gap-4 border-b border-black/10 px-5 py-4 text-sm leading-relaxed last:border-b-0 md:text-base"
              >
                <div className="font-medium text-[color:var(--color-text)]">{want}</div>
                <div className="text-[color:var(--color-muted)]">{spot}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            John Benjamin Pond: easiest fishing stop in Glenwood
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>
              John Benjamin Glenwood Community Pond is the one you pick when you do not want to make fishing complicated.
            </p>

            <p>
              It is a good fit for families, younger kids, short visits, and anyone who just wants to cast from the bank without planning a whole river or lake day. You are not trying to run a boat, read river levels, or figure out a long access plan. You can keep it simple.
            </p>

            <p>
              The pond is part of the Arkansas Game and Fish Commission’s Family and Community Fishing Program. AGFC says these ponds are stocked seasonally, with catfish stocking generally running April through June and September through October, and trout stocking running November through February. AGFC currently lists John Benjamin Glenwood Community Pond among its stocked ponds. <SourceLink href="https://www.agfc.com/fishing/where-to-fish/family-and-community-fishing-program-stocked-ponds/">Source: AGFC</SourceLink>
            </p>

            <p>
              That makes it a nice option when you have kids who care more about getting a line in the water than chasing the biggest fish in Pike County.
            </p>

            <p>
              A few things to know before you go: Family and Community Fishing Program ponds are rod-or-pole only. Largemouth bass must be released immediately. Current AGFC pond limits list 3 catfish, 5 trout, and 25 bream per day, and anglers 16 and older need a valid fishing license. A trout permit is also required if you are keeping trout. <SourceLink href="https://www.agfc.com/fishing/where-to-fish/family-and-community-fishing-program-stocked-ponds/">Source: AGFC</SourceLink>
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <CheckList title="Best for:" items={bestForJohnBenjamin} />
            <CheckList title="Not best for:" items={notBestForJohnBenjamin} />
          </div>

          <p className="mt-7 text-lg leading-8 text-[color:var(--color-muted)]">
            A simple day would be John Benjamin Pond in the morning or evening, then lunch or dinner in Glenwood. It is not fancy, and that is kind of the point. It is the easy one.
          </p>
        </section>

        <div className="my-14">
          <ArticleImage
            src="/images/glenwood/john-benjamin-pond-water.jpeg"
            alt="Fishing at John Benjamin Pond in Glenwood, Arkansas"
            label="John Benjamin Pond is the easiest low-pressure fishing stop for families, kids, and quick bank-fishing trips in Glenwood."
          />
        </div>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Caddo River: best for moving water and a more natural fishing day
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>The Caddo River is the choice when you want the fishing to feel like part of the river day.</p>

            <p>
              This is not the same kind of trip as walking up to a pond. The Caddo changes with rain, water levels, current, and season. That is part of what makes it good, but it also means you need to pay attention before you go.
            </p>

            <p>
              Arkansas Tourism says the roughly 40 miles of the Caddo River above DeGray Lake is known for smallmouth and spotted bass. In March and April, anglers may also find white and hybrid striped bass above the lake, and stream-running walleye are also found in the Caddo. <SourceLink href="https://www.arkansas.com/experiences/discover/attraction-listings/caddo-river">Source: Arkansas Tourism</SourceLink>
            </p>

            <p>
              That makes the Caddo a better fit for someone who wants river fishing, not just a quick cast. It can work for kayak fishing, bank fishing where public access is clear, or pairing some fishing with a float trip.
            </p>

            <p>
              The key is not to guess. Check conditions before building your day around the river. Water level matters more on the Caddo than it does at John Benjamin Pond or Lake Greeson. A stretch that feels easy one week can be low, pushy, muddy, or not worth planning around another week.
            </p>

            <p>
              Also, do not assume every gravel bar, pull-off, or riverbank is public. Use public access, local outfitters, and posted guidance. The Caddo is a visitor attraction, but it also runs through places where people live, own land, and deal with what gets left behind after busy weekends.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <CheckList title="Best for:" items={bestForCaddo} />
            <CheckList title="Not best for:" items={notBestForCaddo} />
          </div>

          <p className="mt-7 text-lg leading-8 text-[color:var(--color-muted)]">
            A good Caddo day might be a morning float or river stop, then food in Glenwood after you clean up. It works best when you leave room in the plan instead of trying to force the river to fit a tight schedule.
          </p>
        </section>

        <div className="my-14">
          <ArticleImage
            src="/images/glenwood/caddo-river-canoe.jpg"
            alt="Canoes on the Caddo River near Glenwood, Arkansas"
            label="The Caddo River is the choice when you want moving water, scenery, and a more natural fishing day."
          />
        </div>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Lake Greeson: best for boat fishing, camping, and a full outdoor day
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>Lake Greeson is the bigger-water option.</p>

            <p>
              If John Benjamin Pond is the easy stop and the Caddo is the river day, Lake Greeson is the place you look at when fishing is the main event. It is better for boats, camping weekends, lake cabins, longer family days, and people who want more room to spread out.
            </p>

            <p>
              Daisy State Park describes Lake Greeson as a popular spot for crappie, bass, catfish, and kayaking. The park also has campsites, yurts, picnic areas, boat launch ramps, and a playground, which makes it easier to turn a fishing trip into a full family weekend. <SourceLink href="https://www.arkansas.com/state-parks/explore/parks/daisy-state-park">Source: Arkansas Tourism / Daisy State Park</SourceLink>
            </p>

            <p>
              The U.S. Army Corps of Engineers also notes that Lake Greeson has multiple boat ramps, marinas with fuel, fishing supplies, picnic supplies, and boat rentals. The Corps also reminds boaters that water depths can change and that anyone born after January 1, 1986 must carry proof of completing an Arkansas boating education course before operating a motorboat or personal watercraft. <SourceLink href="https://www.mvk.usace.army.mil/Missions/Recreation/Lake-Greeson/">Source: U.S. Army Corps of Engineers</SourceLink>
            </p>

            <p>That is the big difference with Greeson. It gives you more options, but it asks for more planning.</p>

            <p>
              If you are bringing a boat, check ramps, weather, water conditions, life jackets, and current boating rules. If you are camping or staying near the lake, plan ahead instead of assuming a spot will be open on a busy weekend.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <CheckList title="Best for:" items={bestForGreeson} />
            <CheckList title="Not best for:" items={notBestForGreeson} />
          </div>

          <p className="mt-7 text-lg leading-8 text-[color:var(--color-muted)]">
            A good Lake Greeson day might mean fishing in the morning, lunch near the lake, a swim or paddle later, then coming back toward Glenwood for dinner or supplies.
          </p>
        </section>

        <div className="my-14">
          <ArticleImage
            src="/images/glenwood/lake-greeson-2.jpg"
            alt="Fishing near Glenwood, Arkansas"
            label="Lake Greeson is the bigger-water choice for boat fishing, camping weekends, and a full outdoor day near Glenwood."
          />
        </div>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Which one should families choose?
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>For most families, the best choice depends on the age of the kids and how much energy everybody has.</p>

            <p>
              For younger kids, start with <strong className="text-[color:var(--color-text)]">John Benjamin Pond</strong>. It is easier to leave if they get bored, hot, tired, or tangled up every five minutes. That matters.
            </p>

            <p>
              For older kids who can handle a longer day outside, <strong className="text-[color:var(--color-text)]">Lake Greeson</strong> gives you more to do. Fishing can be part of the day instead of the only thing. If the bite is slow, you still have the lake, picnic areas, camping, kayaking, or nearby stops.
            </p>

            <p>
              For kids who are already comfortable around moving water, the <strong className="text-[color:var(--color-text)]">Caddo River</strong> can be the most memorable option. But it deserves more caution. Current, slick rocks, changing water levels, and private access all matter. It is not the place to wing it with little kids and no plan.
            </p>

            <p>Here is the easy way to think about it:</p>
          </div>

          <div className="mt-8 grid gap-3 rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm">
            {familyChoices.map(([situation, spot]) => (
              <div
                key={situation}
                className="grid gap-2 rounded-2xl bg-white/45 p-4 md:grid-cols-[1fr_auto] md:items-center"
              >
                <span className="font-medium text-[color:var(--color-text)]">{situation}</span>
                <span className="font-bold text-[color:var(--color-accent)]">{spot}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            What to check before you keep fish
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>This article is meant to help you pick a spot, not replace the current Arkansas fishing regulations.</p>

            <p>
              Before you keep fish, check AGFC’s current rules for the water you are fishing. Anglers 16 and older generally need a valid Arkansas fishing license, and AGFC says a trout permit is required to keep trout from Arkansas waters or to fish for trout in certain waters. <SourceLink href="https://www.agfc.com/resources/licensing/fishing-license-descriptions-and-fees/">Source: AGFC</SourceLink>
            </p>

            <p>For John Benjamin Pond, check the current Family and Community Fishing Program rules and stocking updates.</p>

            <p>For the Caddo River, check river levels and current conditions before you build a day around it.</p>

            <p>For Lake Greeson, check lake conditions, ramp access, boating rules, weather, and safety guidance.</p>

            <p>And wherever you fish, watch for posted signs, respect private property, and pack out what you bring in.</p>
          </div>
        </section>

        <section className="mt-16 scroll-mt-28">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Simple Glenwood fishing day ideas
          </h2>

          <div className="mt-8 grid gap-5">
            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">Easy kid afternoon</h3>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                Start with John Benjamin Pond. Bring simple tackle, snacks, water, sunscreen, and more patience than you think you need. After that, grab food in Glenwood and call it a win.
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                This is the best plan when fishing is part of the day, not the whole day.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">River-minded day</h3>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                Check Caddo River conditions first. If the river looks right, plan a morning around fishing, floating, or working a public-access stretch. Keep the afternoon loose. River days go better when you do not rush them.
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                Afterward, clean up, eat in town, and head back to your cabin, campground, or rental.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">Lake day</h3>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                Head toward Lake Greeson or Daisy State Park with enough time to make it worth the drive and setup. This is the better plan when you have a boat, camping gear, or a family that wants more than casting from the bank.
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">Pack like you are staying a while.</p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">Backup plan day</h3>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                If the Caddo is too high, too low, muddy, or just not right for your group, do not force it. Try John Benjamin Pond for a simple stop, Lake Greeson for a bigger day, or build the afternoon around food, shops, a scenic drive, or nearby family stops.
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
                A good Glenwood trip does not have to fall apart just because the river does not cooperate.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 scroll-mt-28 rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
          <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
            Final recommendation
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>If you are new to fishing near Glenwood, start simple.</p>

            <p>John Benjamin Pond is the easiest. The Caddo River is the most Glenwood-feeling. Lake Greeson is the best full-day fishing trip.</p>

            <p>Pick the water that fits your group, check the current rules and conditions, and leave enough room in the day to actually enjoy it.</p>

            <p>That is usually the difference between a stressful fishing trip and the kind of Arkansas day people talk about on the drive home.</p>
          </div>
        </section>
      </article>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Keep Planning
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              Build the rest of your Glenwood day around the water.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {planningLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-4 font-semibold text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="section-heading !mb-8 !text-left">
          <h2>FAQ</h2>
          <p>
            A few quick answers for visitors comparing John Benjamin Pond, the Caddo River, and Lake Greeson.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <div className="rounded-[2rem] border border-black/10 bg-white/45 p-6 shadow-sm">
          <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">Sources used for this guide</h2>
          <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
            Fishing rules, stocking details, water levels, and lake access can change. Use these official sources to check current details before you go.
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4 transition hover:opacity-80"
                >
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}