import Section from "@/components/tourism/Section";
import Link from "next/link";
import EventsCTA from "@/components/events/EventsCTA";
import NearbyAmitySection from "@/components/NearbyAmitySection";

export const metadata = {
  title:
    "Cabins and Places to Stay Near Glenwood, Arkansas | Caddo River & Lake Greeson",
  description:
    "Find cabins, rentals, motels, and places to stay near Glenwood, Arkansas close to the Caddo River, Lake Greeson, camping, fishing, and outdoor attractions.",
};

const stays = [
{
  name: "At Living Water Cabins",
  type: "Waterfront Cabins • Family Lodge • Ouachita Mountains",
  description:
    "A clean waterfront cabin and lodge stay located between Glenwood and Mount Ida in the Arkansas Ouachita Region. Guests can choose from a family lodge or four cozy creekside cabins named Love, Faith, Hope, and Peace, with full kitchens, air conditioning, and a quiet setting close to outdoor adventures.",
  location: "136 Living Water Dr., Norman, AR 71960",
  phone: "318-461-2650",
  website: "https://atlivingwatercabins.com/",
  featureHref: "/at-living-water-cabins",
  image: "/images/glenwood/cabins/at-living-water-cabins.jpg",
  alt: "At Living Water Cabins near Glenwood and Mount Ida Arkansas",
  directions:
    "https://www.google.com/maps/search/?api=1&query=At+Living+Water+Cabins+136+Living+Water+Dr+Norman+AR+71960",
},
  {
    name: "Caddo River Camping & Canoe Rental",
    type: "Cabins • Camping • Canoe & Kayak Rentals",
    description:
      "A well-known Glenwood-area stop for Caddo River trips, with cabins, camping, and watercraft rentals. Good for visitors planning floats, family weekends, and river-focused stays.",
    location: "26 Hwy 8 East, Glenwood, AR 71943",
    phone: "870-356-5336",
    image: "/images/glenwood/cabins/caddo-river-camping.avif",
    alt: "Caddo River Camping and Canoe Rental near Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Camping+and+Canoe+Rental+26+Hwy+8+East+Glenwood+AR+71943",
  },
  {
    name: "Arrowhead Cabins and Camping",
    type: "Cabins • Camping • Caddo River Area",
    description:
      "Cabins and camping near the Caddo River area, useful for visitors wanting a simple outdoor base close to floating, fishing, and southwest Arkansas scenery.",
    location: "69 Arrowhead Drive, Caddo Gap, AR 71935",
    phone: "870-356-2944",
    image: "/images/glenwood/cabins/arrowhead.webp",
    alt: "Arrowhead Cabins and Camping near Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arrowhead+Cabins+and+Camping+69+Arrowhead+Drive+Caddo+Gap+AR+71935",
  },
  {
    name: "Caddo River Cabins",
    type: "Riverfront Cabins • Caddo River",
    description:
      "Riverfront cabin lodging on the Caddo River in Glenwood. These cabins are built around quiet river stays, fishing, floating, swimming, campfires, and relaxing close to the water.",
    location: "Caddo River, Glenwood, AR",
    phone: "870-718-3072",
    image: "/images/glenwood/cabins/caddo-river-cabins.png",
    alt: "Caddo River Cabins near Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Cabins+Glenwood+AR",
  },
  {
    name: "Riverwood Inn of Glenwood",
    type: "Motel • Creekside Stay • Glenwood Lodging",
    description:
      "A local motel option in Glenwood with easy highway access. Good for visitors who want a simple stay close to restaurants, the Caddo River, Lake Greeson, and area attractions.",
    location: "363 Hwy 70 E, Glenwood, AR 71943",
    phone: "870-356-4567",
    image: "/images/glenwood/cabins/riverwood.webp",
    alt: "Riverwood Inn of Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Riverwood+Inn+363+Hwy+70+E+Glenwood+AR+71943",
  },
  {
    name: "Hangout Properties",
    type: "Luxury Cabins • Caddo River • Lake Greeson Area",
    description:
      "Luxury riverfront cabin rentals with Glenwood and Kirby-area locations near the Caddo River and Lake Greeson. A strong option for visitors wanting a more upscale cabin stay with outdoor space and river access.",
    location: "Glenwood & Kirby, AR",
    phone: "",
    website: "https://www.hangoutpropertiesllc.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hangout+Properties+Glenwood+AR",
  },
  {
    name: "Caddo River Ranch",
    type: "Cabin Rentals • Caddo River • Between Mt. Ida and Glenwood",
    description:
      "Cabin rentals located between Mt. Ida and Glenwood with cabins on the Caddo River. Good for visitors wanting a quiet river setting, covered porches, nature views, and access to the Ouachita area.",
    location: "Between Mt. Ida and Glenwood, AR",
    phone: "",
    website: "https://atcaddoriverranch.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Ranch+Arkansas",
  },
  {
    name: "ScrappyJax Cozy Caddo River Cabin",
    type: "Tiny Cabin • Caddo River • Glenwood",
    description:
      "A small cozy cabin stay in Glenwood near the Caddo River, useful for couples or solo travelers wanting a simple river-area getaway close to outdoor activities.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/35063613",
    directions:
      "https://www.google.com/maps/search/?api=1&query=ScrappyJax+Cozy+Caddo+River+Cabin+Glenwood+AR",
  },
  {
    name: "Highlife Ridge on the Caddo River",
    type: "Vacation Rental • Riverfront Cabin • Glenwood",
    description:
      "A larger Caddo River vacation rental in Glenwood with mountain views and river access. Good for groups or families looking for a bigger cabin-style stay near town.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/47175670",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Highlife+Ridge+Caddo+River+Glenwood+AR",
  },
  {
    name: "Caddo River Shack",
    type: "Vacation Rental • Riverfront • Kayaks",
    description:
      "A secluded Caddo River rental with river frontage, outdoor space, and kayak-friendly access. A good fit for visitors wanting a quieter river stay outside the normal motel setup.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/997711434227133640",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Shack+Glenwood+AR",
  },
  {
    name: "Rocky Bottom Caddo Riverfront",
    type: "Cabin Rental • Riverfront • Group Stay",
    description:
      "A larger Caddo Riverfront cabin option in Glenwood with multiple bedrooms and space for groups. Useful for families, reunions, and river weekends.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/1046611688133157774",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Rocky+Bottom+Caddo+Riverfront+Glenwood+AR",
  },
  {
    name: "The Bunkhouse on Caddo River",
    type: "Riverfront Cabin • Group Rental • Glenwood",
    description:
      "A Glenwood riverfront retreat designed for larger groups, with a cabin-style setup on the Caddo River and space for family or friend trips.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/987712492786764142",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Bunkhouse+on+Caddo+River+Glenwood+AR",
  },
  {
    name: "Southern Grace on the Caddo",
    type: "Vacation Home • Caddo River • Hot Tub",
    description:
      "A Glenwood vacation home near the Caddo River with a hot tub and river-focused setting. Good for visitors comparing private rentals close to town and outdoor attractions.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.vrbo.com/3702301",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Southern+Grace+on+the+Caddo+Glenwood+AR",
  },
  {
    name: "Caddo Patio",
    type: "Cabin Rental • River Views • Glenwood",
    description:
      "A modern Caddo River cabin rental with river views, indoor-outdoor gathering space, and room for family or friend groups visiting Glenwood.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/1020312282775191540",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+Patio+Glenwood+AR",
  },
  {
    name: "Lazy Bear Cabin on Caddo River",
    type: "Cabin Rental • Caddo River • Glenwood",
    description:
      "A Caddo River cabin retreat in Glenwood with a comfortable cabin feel and river setting. Useful for visitors looking for a private cabin close to floating, fishing, and relaxing.",
    location: "Glenwood, AR",
    phone: "",
    website: "https://www.airbnb.com/rooms/982637080562006014",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lazy+Bear+Cabin+on+Caddo+River+Glenwood+AR",
  },
  {
    name: "Bean Creek Cabins",
    type: "Historic Cabins • Caddo Gap • Caddo River Area",
    description:
      "Restored historic log cabins in Caddo Gap near the Caddo River and Glenwood area. A good fit for visitors wanting a rustic cabin stay, quiet woods, river access nearby, and a slower Ouachita Mountain getaway.",
    location: "Caddo Gap, AR",
    phone: "",
    website: "https://www.thebeancreekcabins.com/",
    image: "/images/glenwood/cabins/bean-creek-cabins.webp",
    alt: "Bean Creek Cabins in Caddo Gap near Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bean+Creek+Cabins+Caddo+Gap+AR",
  },
  {
    name: "Swaha Lodge & Marina",
    type: "Lodge • Marina • Cabins • Lake Greeson",
    description:
      "A family-owned Lake Greeson lodge and full-service marina near Murfreesboro with cabins, condos, treehouses, boat rentals, marina access, food service, and easy access to fishing, swimming, hiking, and nearby outdoor attractions.",
    location: "205 Dynamite Hill Road, Murfreesboro, AR 71958",
    phone: "870-285-2272",
    website: "https://swahacabins.com/",
    image: "/images/glenwood/cabins/swaha-lodge-marina.jpg",
    alt: "Swaha Lodge and Marina on Lake Greeson near Murfreesboro Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Swaha+Lodge+and+Marina+205+Dynamite+Hill+Road+Murfreesboro+AR+71958",
  },
];

const riverStayLinks = [
  {
    title: "Stay close to river time",
    text: "Cabins and local stays make more sense when you want extra time for floating, fishing, family visits, or a slower weekend around the Caddo River.",
    href: "/caddo-river",
    label: "View Caddo River Guide",
  },
  {
    title: "Plan food before you book",
    text: "A good stay is easier when you know where breakfast, coffee, pizza, seafood, Mexican food, and quick meals are nearby.",
    href: "/glenwood-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Check the weekend",
    text: "Before you book, check for local events, markets, music, fundraisers, and family-friendly things happening around Glenwood.",
    href: "/this-weekend",
    label: "See This Weekend",
  },
  {
    title: "Add Lake Greeson or a day trip",
    text: "Glenwood can also work as a base for Lake Greeson, Murfreesboro, Mount Ida, Amity, and nearby outdoor stops.",
    href: "/explore",
    label: "Explore Nearby",
  },
];

const featuredNames = [
  "At Living Water Cabins",
  "Caddo River Cabins",
  "Arrowhead Cabins and Camping",
];

const atLivingWater = stays.find(
  (stay) => stay.name === "At Living Water Cabins"
);

const caddoRiverCabins = stays.find(
  (stay) => stay.name === "Caddo River Cabins"
);

const arrowhead = stays.find(
  (stay) => stay.name === "Arrowhead Cabins and Camping"
);

const standardStays = stays.filter((stay) => !featuredNames.includes(stay.name));

const tripStyles = [
  {
    title: "Riverfront cabin weekend",
    text: "Best if the Caddo River is the whole point of the trip. Look for river access, outdoor space, float planning, fire pits, and enough room to relax after a day on the water.",
  },
  {
    title: "Camping and float trip",
    text: "Good for groups, families, and visitors who want a lower-friction outdoor weekend with rentals, campsites, and river logistics close together.",
  },
  {
    title: "Motel or simple local stay",
    text: "Works well if you need easy highway access, restaurants nearby, and a practical place to sleep between river time, Lake Greeson, and day trips.",
  },
  {
    title: "Lake Greeson add-on",
    text: "Better for visitors planning boating, fishing, marina access, swimming, or a lake-heavy weekend around Murfreesboro, Daisy, Kirby, and the Lake Greeson area.",
  },
];

const lodgingFaqs = [
  {
    question: "Where can I stay near Glenwood, Arkansas?",
    answer:
      "Visitors can find cabins, campgrounds, motels, private rentals, riverfront stays, and Lake Greeson lodging around Glenwood, Caddo Gap, Murfreesboro, Kirby, and nearby southwest Arkansas communities.",
  },
  {
    question: "Are there cabins near the Caddo River?",
    answer:
      "Yes. The Glenwood and Caddo Gap area has several cabins and camping options near the Caddo River for visitors planning floating, fishing, swimming, kayaking, and weekend trips.",
  },
  {
    question: "When should I book a cabin near Glenwood?",
    answer:
      "Spring and summer weekends can fill up faster because of Caddo River floats, Lake Greeson trips, camping, and outdoor travel. Booking earlier is usually better for warm-weather weekends, holidays, and group trips.",
  },
  {
    question: "Should I stay near the Caddo River or Lake Greeson?",
    answer:
      "Stay near the Caddo River if floating, kayaking, fishing, or river time is your main plan. Stay closer to Lake Greeson if boating, marina access, lake camping, or a Murfreesboro-area trip is the priority.",
  },
];

const eyebrowClass =
  "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]";

const darkEyebrowClass =
  "mb-4 text-sm font-semibold uppercase tracking-[0.2em] !text-white/85";

const sectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl";

const largeSectionTitleClass =
  "text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl";

const bodyTextClass = "leading-relaxed !text-[color:var(--color-muted)]";

const smallBodyTextClass = "text-sm leading-6 !text-[color:var(--color-muted)]";

const strongBodyTextClass =
  "text-lg leading-relaxed !text-[color:var(--color-muted)]";

const cardClass =
  "rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm";

const largeCardClass =
  "rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const outlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white";

const lightButtonClass =
  "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const darkOutlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20";

const bottomCardLinkClass =
  "mt-auto inline-flex pt-5 font-semibold text-[color:var(--color-accent)] transition group-hover:opacity-75";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d]/g, "")}`;
}

function StayActions({ stay }: { stay: (typeof stays)[number] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {stay.phone && (
        <a href={phoneHref(stay.phone)} className={primaryButtonClass}>
          Call {stay.phone}
        </a>
      )}

      {stay.website && (
        <a
          href={stay.website}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButtonClass}
        >
          View Listing
        </a>
      )}

      <a
        href={stay.directions}
        target="_blank"
        rel="noopener noreferrer"
        className={outlineButtonClass}
      >
        Directions
      </a>
    </div>
  );
}

export default function GlenwoodCabinsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cabins and Places to Stay Near Glenwood, Arkansas",
            description:
              "Cabins, rentals, motels, campgrounds, and places to stay near Glenwood, Arkansas, the Caddo River, and Lake Greeson.",
            itemListElement: stays.map((stay, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "LocalBusiness",
                name: stay.name,
                description: stay.description,
                address: stay.location,
                telephone: stay.phone,
                image: stay.image,
                url: stay.website || stay.directions,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: lodgingFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[color:var(--color-text)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('/images/glenwood/cabins/caddo-river-cabins.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className={darkEyebrowClass}>Cabins, Stays & River Weekends</p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Places to stay near Glenwood and the Caddo River
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/90">
              Find cabins, campgrounds, riverfront stays, vacation rentals, and
              local lodging for Caddo River weekends, family trips, Lake Greeson
              days, and slower getaways around Glenwood.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/caddo-river" className={lightButtonClass}>
                Caddo River Guide
              </Link>

              <Link
                href="/glenwood-ar-restaurants"
                className={darkOutlineButtonClass}
              >
                View Restaurants
              </Link>

              <Link href="/events" className={darkOutlineButtonClass}>
                Local Events
              </Link>

              <Link href="/contact" className={darkOutlineButtonClass}>
                Add Your Stay
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>River Weekend Stays</p>

            <h2 className={`max-w-2xl ${largeSectionTitleClass}`}>
              Pick the stay that fits the kind of Glenwood weekend you want.
            </h2>
          </div>

          <p className={`max-w-2xl ${strongBodyTextClass}`}>
            Some visitors want to be as close to the Caddo River as possible.
            Others need room for family, a quiet cabin, a campground, or a simple
            base for Lake Greeson, restaurants, and nearby day trips.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {riverStayLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className={`mt-4 ${bodyTextClass}`}>{item.text}</p>

              <span className={bottomCardLinkClass}>{item.label} →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className={eyebrowClass}>Choose Your Stay</p>

            <h2 className={`mb-5 ${sectionTitleClass}`}>
              Stay close to the kind of trip you are actually taking.
            </h2>

            <div className={`space-y-4 ${bodyTextClass}`}>
              <p>
                A Glenwood stay usually works best when it matches the trip.
                River visitors may want quick Caddo River access, families may
                need more room, and weekend travelers may want a quiet cabin or
                campground that still keeps food, events, and nearby outdoor
                stops within reach.
              </p>

              <p>
                Use this page to compare cabins, campgrounds, motels, private
                rentals, river-area stays, and Lake Greeson options before you
                build the rest of the trip around food, events, and nearby
                attractions.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {tripStyles.map((item) => (
              <div key={item.title} className={`${cardClass} p-5`}>
                <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

                <h3 className="mb-2 text-lg font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h3>

                <p className={smallBodyTextClass}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>Featured Stays</p>

          <h2 className={sectionTitleClass}>
  Featured places to stay near Glenwood.
</h2>
          </div>

        <p className={bodyTextClass}>
  These featured options highlight local stays that fit the way visitors
  actually plan Glenwood trips: waterfront cabins, river weekends, camping near
  the Caddo, and lodging close to restaurants, roads, and outdoor stops.
</p>
        </div>

        <div className="space-y-8">
     {atLivingWater && (
  <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-accent)]/40 bg-[color:var(--bg-card)] shadow-2xl">
    <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
      <div className="relative min-h-[460px] overflow-hidden bg-[color:var(--color-accent)]">
        <div
          role="img"
          aria-label={atLivingWater.alt}
          className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('${atLivingWater.image}')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
            Featured Cabin Partner
          </span>

          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-text)] shadow-sm">
            Spotlight Stay
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/50 p-5 text-white backdrop-blur-md">
          <p className="text-sm font-semibold !text-white">
            Creekside cabins and a family lodge between Glenwood and Mount Ida.
          </p>

          <p className="mt-2 text-xs leading-5 !text-white/85">
            A peaceful Ouachita Mountain stay with easy access to the Caddo
            River, Lake Greeson, Mount Ida, Glenwood, and nearby outdoor trips.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-10">
        <p className={eyebrowClass}>Premium Featured Stay</p>

        <h2 className="mb-4 text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
          {atLivingWater.name}
        </h2>

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] !text-[color:var(--color-accent)]">
          {atLivingWater.type}
        </p>

        <p className={`mb-6 ${bodyTextClass}`}>
          {atLivingWater.description}
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          {[
            "Four cozy creekside cabins",
            "Family lodge for larger stays",
            "Full kitchens and comfortable cabin setup",
            "Close to Glenwood, Mount Ida, and outdoor trips",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-white/65 p-4"
            >
              <p className="text-sm font-semibold leading-5 !text-[color:var(--color-text)]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <p className="text-sm font-semibold !text-[color:var(--color-text)]">
            Best for
          </p>

          <p className="mt-2 text-sm leading-6 !text-[color:var(--color-muted)]">
            Families, couples, quiet cabin weekends, creekside stays, Caddo
            River trips, Lake Greeson days, Mount Ida exploring, and travelers
            wanting a clean, peaceful place in the Ouachita region.
          </p>
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <p className="!text-[color:var(--color-muted)]">
            📍 {atLivingWater.location}
          </p>

          {atLivingWater.phone && (
            <p className="!text-[color:var(--color-muted)]">
              📞 {atLivingWater.phone}
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/at-living-water-cabins"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View Full Feature
          </Link>

          {atLivingWater.website && (
            <a
              href={atLivingWater.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white"
            >
              Book Direct
            </a>
          )}

          {atLivingWater.phone && (
            <a
              href={phoneHref(atLivingWater.phone)}
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:-translate-y-0.5 hover:bg-white/70"
            >
              Call to Book
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)}

          <div className="grid gap-6 lg:grid-cols-2">
            {[caddoRiverCabins, arrowhead].map(
              (stay) =>
                stay && (
                  <div
                    key={stay.name}
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {stay.image && (
                      <div
                        role="img"
                        aria-label={stay.alt}
                        className="h-64 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${stay.image}')`,
                        }}
                      />
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                        Featured Stay
                      </p>

                      <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                        {stay.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium !text-[color:var(--color-muted)]">
                        {stay.type}
                      </p>

                      <p className={`mt-4 ${bodyTextClass}`}>
                        {stay.description}
                      </p>

                      <p className="mt-4 text-sm !text-[color:var(--color-muted)]">
                        📍 {stay.location}
                      </p>

                      <StayActions stay={stay} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Section>

      <EventsCTA
        title="Staying in Glenwood for the weekend?"
        text="Check local events before you book the whole trip. A river weekend or cabin stay can line up with live music, markets, community events, food stops, and reasons to explore more of the Glenwood area."
      />

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>More Places To Stay</p>

            <h2 className={sectionTitleClass}>
              More cabins, vacation rentals, campgrounds, and lodging options.
            </h2>
          </div>

          <p className={bodyTextClass}>
            These additional stays are useful for visitors comparing riverfront
            cabins, private rentals, camping options, motels, Lake Greeson
            lodging, and places close to Glenwood’s outdoor attractions.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {standardStays.map((stay) => (
            <article
              key={stay.name}
              className={`${cardClass} flex h-full flex-col p-6`}
            >
              <div className="flex flex-1 flex-col gap-5 md:flex-row">
                {stay.image && (
                  <div
                    role="img"
                    aria-label={stay.alt || stay.name}
                    className="h-40 shrink-0 rounded-xl bg-cover bg-center md:w-44"
                    style={{
                      backgroundImage: `url('${stay.image}')`,
                    }}
                  />
                )}

                <div className="flex flex-1 flex-col">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {stay.type}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {stay.name}
                  </h3>

                  <p className={`mt-3 ${smallBodyTextClass}`}>
                    {stay.description}
                  </p>

                  <p className="mt-3 text-sm !text-[color:var(--color-muted)]">
                    📍 {stay.location}
                  </p>

                  <StayActions stay={stay} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <NearbyAmitySection />

      <Section>
        <div className={`${largeCardClass} p-8 md:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className={eyebrowClass}>Good To Know</p>

              <h2 className={sectionTitleClass}>
                Staying near the Caddo River and Lake Greeson.
              </h2>
            </div>

            <div className={`space-y-4 ${bodyTextClass}`}>
              <p>
                Most visitors choose lodging based on their main outdoor plan.
                Stay near the Caddo River if floating, kayaking, fishing, or
                riverfront time matters most. Look closer to Lake Greeson if
                boating, marina access, lake camping, or fishing is the center
                of the trip.
              </p>

              <p>
                Cabins and rentals can fill faster during spring, summer, and
                warm-weather weekends. If you are planning for a group, a
                holiday, or a river-heavy weekend, it is usually better to book
                earlier and then build food, events, and day trips around the
                place you choose to stay.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className={eyebrowClass}>FAQs</p>

          <h2 className={sectionTitleClass}>
            Glenwood cabin and lodging FAQs
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {lodgingFaqs.map((item) => (
            <div key={item.question} className={`${cardClass} p-6`}>
              <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

              <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                {item.question}
              </h3>

              <p className={`mt-3 ${bodyTextClass}`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-[color:var(--color-text)] p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className={darkEyebrowClass}>Local Visibility</p>

              <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Add your cabin, campground, motel, or rental.
              </h2>

              <p className="max-w-3xl leading-relaxed !text-white/85">
                This page helps visitors compare cabins, campgrounds, motels,
                private rentals, and places to stay around Glenwood without
                digging through multiple sites. If you own a rental or lodging
                property in the area, you can request a standard listing or ask
                about featured placement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact" className={lightButtonClass}>
                Get Listed
              </Link>

              <Link href="/contact" className={darkOutlineButtonClass}>
                Featured Placement
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}