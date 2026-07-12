import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageUrl =
  "https://www.glenwoodarkansas.org/collier-springs-little-missouri-falls-day-trip";
const heroImage =
  "/images/glenwood/collier-little-missouri/little-missouri-river.webp";

export const metadata: Metadata = {
  title: "Glenwood Day Trip to Little Missouri Falls",
  description:
    "Plan a back-road day trip from Glenwood to Collier Springs and Little Missouri Falls, with route notes, picnic tips, trail details, and safety advice.",
  keywords: [
    "day trip from Glenwood to Little Missouri Falls",
    "Collier Springs Arkansas",
    "Little Missouri Falls Arkansas",
    "Ouachita National Forest day trip",
    "waterfalls near Glenwood Arkansas",
    "scenic drives near Glenwood Arkansas",
    "things to do near Glenwood Arkansas",
    "Glenwood Arkansas day trips",
  ],
  authors: [
    {
      name: "Natural State Tourism Project",
      url: "https://naturalstatetourismproject.org",
    },
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/collier-springs-little-missouri-falls-day-trip",
  },
  openGraph: {
    title: "A Back-Road Day Trip from Glenwood to Little Missouri Falls",
    description:
      "A practical Glenwood-area day trip through the Ouachita National Forest to Collier Springs and Little Missouri Falls.",
    url: pageUrl,
    type: "article",
    siteName: "Glenwood Arkansas Guide",
    publishedTime: "2026-07-12T00:00:00-05:00",
    modifiedTime: "2026-07-12T00:00:00-05:00",
    images: [
      {
        url: heroImage,
        width: 1280,
        height: 853,
        alt: "Little Missouri River in the Ouachita National Forest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glenwood Day Trip to Little Missouri Falls",
    description:
      "Route notes, picnic tips, trail details, and practical planning for Collier Springs and Little Missouri Falls.",
    images: [heroImage],
  },
};

const faqs = [
  {
    question: "Is Little Missouri Falls close enough for a day trip from Glenwood?",
    answer:
      "Yes. It is within day-trip range, but the final portion follows slower forest roads. Plan most of the day instead of treating it like a quick roadside stop.",
  },
  {
    question: "Does it cost anything to visit Collier Springs or Little Missouri Falls?",
    answer:
      "Both sites are currently listed by the U.S. Forest Service as free day-use recreation areas.",
  },
  {
    question: "Can you swim at Little Missouri Falls?",
    answer:
      "Visitors sometimes wade or cool off around the natural pools, but water levels and current can change. Avoid high or fast-moving water and closely supervise children.",
  },
  {
    question: "Can you camp at Collier Springs or Little Missouri Falls?",
    answer:
      "Not inside the designated day-use areas. Current Forest Service rules prohibit camping there and restrict use to daytime hours.",
  },
  {
    question: "Are restrooms and drinking water available?",
    answer:
      "Collier Springs does not have potable water or restrooms. Little Missouri Falls does not have potable water or electricity, so bring what you need and plan conservatively.",
  },
];

const bringList = [
  "Drinking water for everyone",
  "Food and snacks",
  "Shoes with decent traction",
  "Towels and a change of clothes",
  "Bug spray and sunscreen",
  "A basic first-aid kit",
  "A paper map or saved offline directions",
  "Trash bags so everything you carry in comes back out",
  "A portable phone charger",
];

const seasonNotes = [
  {
    season: "Spring",
    text:
      "Spring usually brings green woods, cooler walking weather, and a better chance of seeing plenty of water moving through the river. Avoid heading in immediately after hard storms when water and road conditions can change fast.",
  },
  {
    season: "Summer",
    text:
      "Summer works well for picnicking and cooling off near the river, but the woods can still feel hot and humid. Leave earlier, carry extra water, and do not count on finding supplies once you are off the highway.",
  },
  {
    season: "Fall",
    text:
      "Fall may be the best all-around season for the drive. The hardwoods add color to the forest roads, and cooler weather makes the stops easier to enjoy. Water flow will depend on recent rain.",
  },
  {
    season: "Winter",
    text:
      "Both recreation areas are listed as open year-round. Winter can mean fewer people and clearer views through the trees, but cold water, damp rock, and shorter daylight hours make planning more important.",
  },
];

const officialLinks = [
  {
    label: "Collier Springs Day Use",
    href: "https://www.fs.usda.gov/r08/ouachita/recreation/collier-springs-day-use",
  },
  {
    label: "Little Missouri Falls Trailhead",
    href: "https://www.fs.usda.gov/r08/ouachita/recreation/little-missouri-falls-trailhead",
  },
  {
    label: "Current Ouachita National Forest alerts",
    href: "https://www.fs.usda.gov/r08/ouachita/alerts",
  },
];

export default function CollierSpringsLittleMissouriFallsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "A Back-Road Day Trip from Glenwood to Collier Springs and Little Missouri Falls",
      description: metadata.description,
      mainEntityOfPage: pageUrl,
      image: [`https://www.glenwoodarkansas.org${heroImage}`],
      datePublished: "2026-07-12",
      dateModified: "2026-07-12",
      author: {
        "@type": "Organization",
        name: "Natural State Tourism Project",
        url: "https://naturalstatetourismproject.org",
      },
      publisher: {
        "@type": "Organization",
        name: "Glenwood Arkansas Guide",
        url: "https://www.glenwoodarkansas.org",
      },
      about: [
        { "@type": "Place", name: "Collier Springs" },
        { "@type": "Place", name: "Little Missouri Falls" },
        { "@type": "Place", name: "Glenwood, Arkansas" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.glenwoodarkansas.org/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Things to Do",
          item: "https://www.glenwoodarkansas.org/explore",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Collier Springs and Little Missouri Falls Day Trip",
          item: pageUrl,
        },
      ],
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
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative flex min-h-[760px] items-end overflow-hidden dark-section">
        <Image
          src={heroImage}
          alt="Little Missouri River flowing through the Ouachita National Forest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/64 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-black/10" />

        <div className="container relative z-10 pb-16 pt-32">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm !text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:!text-white">
              Glenwood
            </Link>
            <span>/</span>
            <Link href="/explore" className="transition hover:!text-white">
              Things to Do
            </Link>
            <span>/</span>
            <span className="!text-white">Back-Road Day Trip</span>
          </nav>

          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Collier Springs + Little Missouri Falls
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
              A back-road day trip from Glenwood into the Ouachita National Forest.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 !text-white/86 md:text-xl">
              Pack lunch, save the route before you lose signal, and leave room
              for a quiet spring stop, forest roads, a short waterfall walk,
              and an afternoon beside the Little Missouri River.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plan" className="btn btn-light">
                Plan the Day
              </a>
              <Link href="/glenwood-ar-cabins" className="btn">
                Cabins & Places to Stay
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Two quiet Ouachita stops worth the drive
            </p>
            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Some of the best days around Glenwood begin with a full tank, a
              cooler, and no reason to hurry.
            </h2>
            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Collier Springs and Little Missouri Falls sit out in the
                Ouachita National Forest northwest of Glenwood. Neither is a
                polished roadside attraction with a gift shop, concession
                stand, and crowded parking lot. These are simple forest stops
                reached by winding highways and back roads through the
                mountains.
              </p>
              <p>
                Collier Springs gives you a quiet place to sit near a
                clear-flowing spring. Little Missouri Falls adds a picnic area,
                a short walk, rocky cascades, and places along the river where
                you can cool off when conditions are right. Both are close
                enough to combine into a full-day outing from Glenwood, but far
                enough into the forest that the drive becomes part of the trip.
              </p>
              <p>
                This day trip from Glenwood to Little Missouri Falls is a good
                fit for families, couples, cabin guests, scenic drivers, and
                locals who want a different kind of outdoor day without
                committing to a long backpacking trip.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/glenwood/collier-little-missouri/collier-springs-shelter.webp"
                alt="Historic stone and timber picnic shelter at Collier Springs Arkansas"
                width={1800}
                height={1192}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Start the day in Glenwood
              </p>
              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Pick up food, water, ice, and anything else you need before you
                leave town.
              </h2>
              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  There is no potable water at Collier Springs or Little
                  Missouri Falls. Collier Springs does not have restrooms, and
                  the current Forest Service listing for Little Missouri Falls
                  does not promise the kind of facilities you would find at a
                  developed state park. It is better to leave town prepared
                  than assume you will find supplies once you get into the
                  forest.
                </p>
                <p>
                  A simple picnic works well for this trip. Sandwiches, fruit,
                  chips, drinks, and a few towels are easier than trying to plan
                  a full cookout at an unfamiliar recreation area.
                </p>
                <p>
                  Download your directions before leaving the main highway.
                  Forest roads are not the place to discover that your phone has
                  stopped loading the map.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/glenwood-ar-shops-supplies" className="btn">
                  Glenwood Shops & Supplies
                </Link>
                <Link href="/glenwood-ar-restaurants" className="btn btn-light">
                  Grab Food in Glenwood
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                First stop: Collier Springs near Norman
              </p>
              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Collier Springs is the quieter stop, and that is the point.
              </h2>
              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The Forest Service describes it simply as a natural setting
                  around a clear-flowing spring. That is about right. This is
                  not a large recreation complex or a place where you need a
                  long list of activities planned.
                </p>
                <p>
                  Bring lunch or a snack, walk around the spring area, listen
                  to the water, and enjoy being somewhere that still feels
                  removed from town. It works especially well for visitors who
                  like small forest stops that are easy to overlook when they
                  are only following the biggest names on a tourism map.
                </p>
                <p>
                  Collier Springs is currently listed as open all year and free
                  to visit. It is a day-use picnic area with no potable water or
                  restroom, so plan around the lack of facilities.
                </p>
              </div>

              <div className="mt-7 rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] p-6">
                <h3 className="mb-3 text-2xl">Getting to Collier Springs</h3>
                <p className="leading-7 text-[color:var(--color-muted)]">
                  The official Forest Service directions begin in Norman: take
                  Arkansas Highway 27 north for one mile, turn east onto Forest
                  Service Road 177, and continue for roughly three miles. From
                  Glenwood, head toward Norman first, then slow down and watch
                  for Forest Service road numbers once you leave the highway.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/glenwood/collier-little-missouri/collier-springs-upstream.webp"
                alt="Picnic table, grill, spring, and woods at Collier Springs Arkansas"
                width={1280}
                height={848}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[420px] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  This is a slow stop, not a packed attraction. Give the spring,
                  shelter, stonework, and surrounding woods a little time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Little Missouri Falls is the main stop
            </p>
            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Save the larger part of the day for the river, picnic area, and
              short walk toward the cascades.
            </h2>
            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Little Missouri Falls sits along the upper Little Missouri
                River in the Ouachita National Forest. Instead of one tall
                vertical drop, the water moves through a series of rocky
                cascades and natural pools.
              </p>
              <p>
                The Forest Service maintains a forested picnic area and a trail
                leading toward the waterfall overlook. A current trail
                rehabilitation project describes the access route from the
                bridge to the overlook as roughly a quarter mile, which makes
                this a manageable waterfall stop for visitors who do not want a
                long hike.
              </p>
              <p>
                That does not mean every part of the area is smooth or easy.
                Once you move closer to the river, expect rocks, roots, damp
                ground, and uneven footing. Wear actual walking shoes. Flip-flops
                may work while sitting near the water, but they are not the best
                choice for wet rock.
              </p>
            </div>
          </article>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
            <Image
              src="/images/glenwood/collier-little-missouri/little-missouri-winding-stairs.webp"
              alt="Clear Little Missouri River water and rocky Ouachita Mountain terrain"
              width={1280}
              height={853}
              sizes="100vw"
              className="h-[360px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Take your time around the cascades
              </p>
              <h2 className="mb-5 text-3xl leading-tight md:text-4xl">
                This is not a stop that needs to be rushed.
              </h2>
              <div className="space-y-5 leading-7 text-[color:var(--color-muted)]">
                <p>
                  Walk toward the overlook, find a safe place to sit, and watch
                  how the river moves through the rock. Depending on recent
                  rainfall, the cascades may be moving hard or spreading more
                  gently across exposed stone.
                </p>
                <p>
                  The area is used for picnicking, photography, hiking,
                  fishing, and time beside the river. When water is calm,
                  visitors sometimes wade or cool off around the natural pools.
                  Use common sense. This is a real river, and conditions can
                  change after rain.
                </p>
                <p>
                  Keep children close around the water and rocks. Wet stone can
                  be slick even when the river looks calm.
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[color:var(--color-text)] p-7 text-white shadow-sm md:p-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] !text-white/65">
                Know where the trail goes
              </p>
              <h2 className="mb-5 text-3xl leading-tight !text-white md:text-4xl">
                The easy waterfall walk sits near much harder backcountry
                routes.
              </h2>
              <div className="space-y-5 leading-7 !text-white/80">
                <p>
                  Little Missouri Falls is one of the access points for Eagle
                  Rock Loop. That route crosses streams and travels over nine
                  mountains. It is a serious backcountry trail, not an extension
                  of the casual waterfall walk.
                </p>
                <p>
                  Families and casual visitors can stay around the picnic area,
                  access trail, and overlook. Do not continue onto a longer
                  route just because a path heads into the woods unless you know
                  where it leads and are prepared for it.
                </p>
                <p>
                  River and creek crossings can become dangerous during high
                  water. A short stop at the falls does not require taking on
                  those routes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/glenwood/collier-little-missouri/ouachita-little-missouri.webp"
                alt="Ouachita Mountains above the Little Missouri River in Arkansas"
                width={1800}
                height={2700}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-[560px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Getting there from Glenwood
              </p>
              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Save the Forest Service road numbers before leaving town.
              </h2>
              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The official route begins west of Glenwood. Take Arkansas
                  Highway 84 toward Langley, turn north onto Arkansas Highway
                  369, and continue toward the Forest Service road network that
                  leads to the falls.
                </p>
                <p>
                  The Forest Service directions continue through Forest Service
                  Roads 73, 43, 25, and 539. Road names, surfaces, closures, and
                  navigation conditions can change, so use the current official
                  directions instead of relying on an old social post or a
                  shortcut suggested by a map app.
                </p>
                <p>
                  Write the road numbers down or save a screenshot. After hard
                  rain or severe weather, contact the Caddo-Womble Ranger
                  District at <a href="tel:8708672101" className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4">870-867-2101</a> for current information before heading deep into the forest.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {officialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 bg-[color:var(--bg-card)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {item.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm md:p-12">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                How to combine both stops
              </p>
              <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
                Treat this as a full day in the forest, not a quick hour-long
                side trip.
              </h2>
              <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Collier Springs and Little Missouri Falls are reached from
                  different forest-road approaches, so this is not the kind of
                  trip where you should blindly follow the shortest line shown
                  on a phone.
                </p>
                <p>
                  A practical plan is to leave Glenwood in the morning with
                  food, water, and a full tank. Head toward Norman and visit
                  Collier Springs while the day is still cool. Return to the
                  paved highway rather than trying an unfamiliar forest-road
                  shortcut, then follow the official route through Langley
                  toward Little Missouri Falls.
                </p>
                <p>
                  Eat lunch around the picnic area, walk toward the cascades,
                  and leave enough daylight for the drive back. You may choose
                  to visit the falls first on a warm weekend, especially if you
                  want to reach the water earlier. The order matters less than
                  giving yourself plenty of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                What to bring
              </p>
              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Pack more than you would for a normal roadside attraction.
              </h2>
              <p className="text-lg leading-8 text-[color:var(--color-muted)]">
                There is no water or electricity at either recreation area.
                Both are currently listed as free, year-round day-use sites,
                but basic facilities are limited.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {bringList.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-5 text-sm font-semibold leading-7 text-[color:var(--color-text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-[color:var(--color-text)] p-7 text-white md:p-9">
            <h3 className="mb-4 text-3xl leading-tight !text-white">
              Important day-use rules
            </h3>
            <p className="max-w-4xl text-lg leading-8 !text-white/80">
              Collier Springs and Little Missouri Falls are designated day-use
              areas. A current Ouachita National Forest order prohibits camping
              inside these areas and restricts use to daylight hours. Posted
              closures involving flooding, construction, repairs, or other
              safety concerns also apply. Do not wait until sunset to begin
              navigating the forest roads back toward Glenwood.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Best time to go
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Every season changes the drive and the water.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {seasonNotes.map((item) => (
              <article
                key={item.season}
                className="rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="mb-3 text-2xl">{item.season}</h3>
                <p className="leading-7 text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Is this a good family trip?
            </p>
            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Yes, as long as the adults are comfortable with forest roads,
              natural terrain, and moving water.
            </h2>
            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Collier Springs is the simpler stop. Little Missouri Falls
                requires a short walk, and the river area itself includes
                natural rock and uneven ground.
              </p>
              <p>
                This trip is best for children who enjoy being outside and do
                not need a playground or organized activity every hour. Let
                them watch the water, look for interesting rocks and leaves,
                eat lunch under the trees, and spend some time outdoors without
                turning the whole day into a schedule.
              </p>
              <p>
                Keep them close around the river, do not let anyone climb onto
                wet rock without care, and be willing to change plans if water
                or weather conditions do not look right.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Finish the day back in Glenwood
              </p>
              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Dinner, ice cream, and a quiet cabin feel pretty good after a
                day on the back roads.
              </h2>
              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  You can build this trip into a longer Glenwood weekend with
                  time on the Caddo River, a round of golf, local shopping, or
                  another drive through the Ouachita foothills.
                </p>
                <p>
                  The main thing is not to pack too much into one day. Collier
                  Springs and Little Missouri Falls work because they give you
                  time to drive, stop, sit, walk, and enjoy a part of Arkansas
                  where the forest still sets the pace.
                </p>
                <p>
                  For visitors looking for a day trip from Glenwood to Little
                  Missouri Falls, adding Collier Springs gives the route another
                  quiet stop and turns a waterfall visit into a better look at
                  the back roads around the Ouachita National Forest.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
              <h3 className="mb-5 text-3xl">Keep planning</h3>
              <div className="grid gap-3">
                <Link href="/explore" className="rounded-2xl border border-black/10 bg-white/60 p-4 font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5">
                  Things to Do in Glenwood →
                </Link>
                <Link href="/glenwood-ar-restaurants" className="rounded-2xl border border-black/10 bg-white/60 p-4 font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5">
                  Glenwood Restaurants →
                </Link>
                <Link href="/glenwood-ar-cabins" className="rounded-2xl border border-black/10 bg-white/60 p-4 font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5">
                  Cabins & Places to Stay →
                </Link>
                <Link href="/bard-springs" className="rounded-2xl border border-black/10 bg-white/60 p-4 font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5">
                  Bard Springs Recreation Area →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Frequently asked questions
            </p>
            <h2 className="mb-8 text-4xl leading-tight md:text-5xl">
              What to know before heading into the forest
            </h2>

            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-xl">{faq.question}</h3>
                  <p className="leading-7 text-[color:var(--color-muted)]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] p-6 text-sm leading-7 text-[color:var(--color-muted)]">
            <p className="font-semibold text-[color:var(--color-text)]">Photo credits</p>
            <p className="mt-2">
              Collier Springs Shelter and Collier Springs upstream photos by
              Valis55 (Shane Vaughn). Little Missouri River and Ouachita
              National Forest photos by Fredlyfish4. Images were resized and
              converted for web use under the Creative Commons Attribution-
              ShareAlike 4.0 license. View the original files on{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Collier_Springs_Shelter.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[color:var(--color-accent)] underline underline-offset-4"
              >
                Wikimedia Commons
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
