import Section from "@/components/tourism/Section";
import Link from "next/link";
import EventsCTA from "@/components/events/EventsCTA";
import NearbyAmitySection from "@/components/NearbyAmitySection";

export const metadata = {
  title:
    "Best Restaurants in Glenwood, Arkansas | Places to Eat Near the Caddo River",
  description:
    "Find local restaurants and places to eat in Glenwood, Arkansas near the Caddo River, Lake Greeson, cabins, campgrounds, and outdoor attractions.",
};

const restaurants = [
  {
    name: "Caddo Cafe",
    type: "Cafe • Breakfast • Comfort Food • Local Stop",
    description:
      "A local Glenwood cafe serving breakfast, lunch, Mexican food, American plates, catfish, burgers, and casual comfort food in a small-town setting. A solid stop before or after the Caddo River, Lake Greeson, cabins, campgrounds, and nearby outdoor attractions.",
    location: "53 US-70 Ste. C, Glenwood, AR 71943",
    phone: "870-356-2397",
    image: "/images/glenwood/restaurants/caddo-cafe.jpg",
    alt: "Caddo Cafe in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+Cafe+53+US-70+Ste+C+Glenwood+AR+71943",
  },
  {
    name: "Fish Nest Family Restaurant",
    type: "Seafood • Family Restaurant • Local Favorite",
    description:
      "A long-running local favorite known for seafood, fried fish, burgers, steaks, chicken, and family-style meals. Fish Nest is one of the main Glenwood restaurant names visitors see when looking for a classic sit-down meal after time outside.",
    location: "164 US-70, Glenwood, AR 71943",
    phone: "870-356-3875",
    image: "/images/glenwood/restaurants/fishnest.webp",
    alt: "Fish Nest Family Restaurant in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fish+Nest+Family+Restaurant+164+US-70+Glenwood+AR+71943",
  },
  {
    name: "Ari’s Little Italy",
    type: "Italian • Pizza • Casual Dining",
    description:
      "Ari’s Little Italy gives visitors another sit-down option in Glenwood, with Italian-style food, pizza, pasta, calzones, and casual dining for families, travelers, and locals wanting something besides fast food.",
    location: "180 Old Highway 70 East #13, Glenwood, AR 71943",
    phone: "870-356-4587",
    image: "/images/glenwood/restaurants/aris.jpg",
    alt: "Ari’s Little Italy in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ari%27s+Little+Italy+180+Old+Highway+70+East+13+Glenwood+AR+71943",
  },
  {
    name: "El Diamante Mexican Restaurant",
    type: "Mexican Restaurant • Family Friendly",
    description:
      "A local Mexican restaurant option in Glenwood for tacos, plates, chips and salsa, and casual meals after a day on the river or lake. A good choice for families and travelers passing through town.",
    location: "199 Hwy 70 E, Glenwood, AR 71943",
    phone: "870-356-4707",
    directions:
      "https://www.google.com/maps/search/?api=1&query=El+Diamante+Mexican+Restaurant+199+Hwy+70+E+Glenwood+AR+71943",
  },
  {
    name: "Pizza Inn",
    type: "Pizza • Carryout • Quick Meal",
    description:
      "A convenient pizza option in Glenwood for families, groups, and visitors wanting something easy after a river float, lake day, cabin stay, or long drive through southwest Arkansas.",
    location: "104 1st Street, Glenwood, AR 71943",
    phone: "870-356-7466",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Pizza+Inn+104+1st+Street+Glenwood+AR+71943",
  },
  {
    name: "Donut Palace",
    type: "Donuts • Breakfast • Coffee • Quick Stop",
    description:
      "A simple breakfast and donut stop in Glenwood for visitors wanting coffee, donuts, or something quick before heading to the Caddo River, Lake Greeson, cabins, or campgrounds.",
    location: "2 Caddo Crossing Dr Ste D, Glenwood, AR 71943",
    phone: "870-356-2294",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Donut+Palace+2+Caddo+Crossing+Dr+Ste+D+Glenwood+AR+71943",
  },
  {
    name: "Flavor-Licious Glenwood",
    type: "Ice Cream Shop • Sweets • Snacks • Local Treats",
    description:
      "A local Glenwood sweets and ice cream stop offering treats, snacks, drinks, and fun dessert-style items. A good stop for families, kids, visitors, and anyone wanting something sweet while passing through Glenwood or spending the day around the Caddo River area.",
    location: "804 East Broadway, Glenwood, AR 71943",
    phone: "870-279-4179",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Flavor-Licious+Glenwood+804+East+Broadway+Glenwood+AR+71943",
  },
  {
    name: "OK Cafe",
    type: "Cafe • Breakfast • Small-Town Food",
    description:
      "A small-town cafe option in Glenwood for breakfast, coffee, and classic local food. Useful for visitors wanting a simple meal before a river float, lake day, or drive through the Ouachita region.",
    location: "228 Hwy 70 E, Glenwood, AR 71943",
    phone: "870-356-3092",
    directions:
      "https://www.google.com/maps/search/?api=1&query=OK+Cafe+228+Hwy+70+E+Glenwood+AR+71943",
  },
  {
    name: "The Pizza Shack",
    type: "Pizza • Carryout • Casual Meal",
    description:
      "A local pizza option in Glenwood for families, groups, cabin stays, and visitors needing an easy meal after spending the day outside.",
    location: "200 Hwy 70 E Ste 6, Glenwood, AR 71943",
    phone: "870-356-3222",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Pizza+Shack+200+Hwy+70+E+Ste+6+Glenwood+AR+71943",
  },
  {
    name: "Subway",
    type: "Sandwiches • Fast Food • Quick Stop",
    description:
      "A convenient sandwich stop in Glenwood for visitors who need a quick lunch, road-trip meal, or easy food before heading toward the river, lake, cabins, or campgrounds.",
    location: "Glenwood, AR 71943",
    phone: "",
    website: "https://restaurants.subway.com/united-states/ar/glenwood",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Subway+Glenwood+AR",
  },
  {
    name: "Sonic Drive-In",
    type: "Fast Food • Burgers • Drinks • Drive-In",
    description:
      "A familiar drive-in option in Glenwood for burgers, drinks, ice cream, and quick meals. Useful for families, travelers, and visitors wanting something fast between outdoor stops.",
    location: "Glenwood, AR 71943",
    phone: "",
    website: "https://www.sonicdrivein.com/locations/us/ar/glenwood/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Sonic+Drive-In+Glenwood+AR",
  },
  {
    name: "Bayou Bella’s & Biscuits",
    type: "Food Truck • Cajun Food • Biscuits • Local Food Spot",
    description:
      "A local Glenwood food truck serving Cajun-inspired food, biscuits, rotating menu items, and casual meals. A good stop for visitors looking for something local, quick, and different while passing through Glenwood or exploring the Caddo River area.",
    location: "22 Hwy 70, Glenwood, AR 71943",
    phone: "870-828-8588",
    email: "bayoubellas@yahoo.com",
    alt: "Bayou Bella’s and Biscuits food truck in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bayou+Bella%27s+and+Biscuits+22+Hwy+70+Glenwood+AR+71943",
  },
  {
    name: "Mercado Restaurant",
    type: "Mexican Restaurant • Meat Market • Produce • Local Food Stop",
    description:
      "A Glenwood Mexican restaurant, meat market, and produce stop serving Mexican food in a casual local setting. A good option for visitors looking for tacos, plates, quick meals, and something local while passing through town or staying near the Caddo River area.",
    location: "240 US-70, Glenwood, AR 71943",
    phone: "870-356-0113",
    image: "/images/glenwood/cabins/mercado-restaurant.jpg",
    alt: "Mercado Restaurant in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mercado+Restaurant+240+US-70+Glenwood+AR+71943",
  },
  {
    name: "Arrow 6 Coffee Co.",
    type: "Coffee Shop • Local Coffee • Drinks • Morning Stop",
    description:
      "A local Glenwood coffee shop serving coffee, specialty drinks, seasonal lattes, baked goods, and quick morning favorites. A strong stop for visitors needing coffee before heading to the Caddo River, Lake Greeson, cabins, campgrounds, or nearby outdoor destinations.",
    location: "3 Caddo Crossing Dr, Glenwood, AR 71943",
    phone: "",
    website: "https://arrow6coffeeco.com/",
    alt: "Arrow 6 Coffee Co. in Glenwood Arkansas",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arrow+6+Coffee+Co+3+Caddo+Crossing+Dr+Glenwood+AR+71943",
  },
];

const riverMealLinks = [
  {
    title: "Before the river",
    text: "Coffee, donuts, breakfast, biscuits, or something quick before heading toward the Caddo River, cabins, campgrounds, or Lake Greeson.",
    href: "/caddo-river",
    label: "Plan River Time",
  },
  {
    title: "After the float",
    text: "After a day outside, most visitors want something easy and filling: seafood, pizza, Mexican food, Italian food, burgers, or a sit-down local meal.",
    href: "/this-weekend",
    label: "Check Weekend Events",
  },
  {
    title: "Cabin meals and group food",
    text: "Pizza, takeout, quick stops, and casual restaurants work well for families, cabin groups, teams, and people staying close to the river.",
    href: "/glenwood-ar-cabins",
    label: "See Cabins & Stays",
  },
  {
    title: "Sweet stops and coffee",
    text: "Coffee, donuts, ice cream, and snacks can fill the gaps between river time, lake stops, shopping, and slower afternoons around Glenwood.",
    href: "/explore",
    label: "Explore Glenwood",
  },
];

const featuredNames = [
  "Fish Nest Family Restaurant",
  "Caddo Cafe",
  "Ari’s Little Italy",
];

const fishNest = restaurants.find(
  (restaurant) => restaurant.name === "Fish Nest Family Restaurant"
);

const caddoCafe = restaurants.find(
  (restaurant) => restaurant.name === "Caddo Cafe"
);

const aris = restaurants.find(
  (restaurant) => restaurant.name === "Ari’s Little Italy"
);

const standardRestaurants = restaurants.filter(
  (restaurant) => !featuredNames.includes(restaurant.name)
);

const mealStyles = [
  {
    title: "Before the river",
    text: "Look for coffee, breakfast, donuts, biscuits, or something easy before you head toward the Caddo River, cabins, or campgrounds.",
  },
  {
    title: "After a float",
    text: "A sit-down meal, pizza, Mexican food, seafood, or comfort food usually works best after a full day outside.",
  },
  {
    title: "Family and group meals",
    text: "Pizza, casual restaurants, and simple local spots are useful for cabin groups, families, teams, and weekend visitors.",
  },
  {
    title: "Quick stops",
    text: "Fast food, sandwiches, sweets, coffee, and drive-through options help when you are passing through or trying to keep the trip moving.",
  },
];

const restaurantFaqs = [
  {
    question: "What are the best restaurants in Glenwood, Arkansas?",
    answer:
      "Glenwood has local cafes, seafood, Mexican food, Italian food, pizza, coffee, sweets, and quick meal options that work well for locals and visitors planning river trips, cabin weekends, and lake days.",
  },
  {
    question: "Where can I eat near the Caddo River?",
    answer:
      "Glenwood is a convenient food stop near the Caddo River, with casual restaurants and dining options close to river trips, cabins, campgrounds, Lake Greeson, and nearby outdoor attractions.",
  },
  {
    question: "Are there family-friendly restaurants in Glenwood?",
    answer:
      "Yes. Glenwood has several casual, family-friendly restaurants that work well for river trips, lake weekends, cabin stays, and local meals.",
  },
  {
    question: "What should I plan for food on a river weekend?",
    answer:
      "For a river weekend, it usually helps to plan breakfast or coffee before the float, something easy after the river, and a backup meal option for groups or cabins in case everyone is tired after being outside.",
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

const strongBodyTextClass = "text-lg leading-relaxed !text-[color:var(--color-muted)]";

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

function RestaurantActions({
  restaurant,
}: {
  restaurant: (typeof restaurants)[number];
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {restaurant.phone && (
        <a href={phoneHref(restaurant.phone)} className={primaryButtonClass}>
          Call {restaurant.phone}
        </a>
      )}

      {restaurant.website && (
        <a
          href={restaurant.website}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButtonClass}
        >
          View Website
        </a>
      )}

      <a
        href={restaurant.directions}
        target="_blank"
        rel="noopener noreferrer"
        className={outlineButtonClass}
      >
        Directions
      </a>
    </div>
  );
}

export default function GlenwoodRestaurantsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best Restaurants in Glenwood, Arkansas",
            description:
              "Local restaurants, cafes, seafood, Mexican food, Italian food, pizza, coffee, sweets, quick meals, and places to eat near Glenwood, Arkansas.",
            itemListElement: restaurants.map((restaurant, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Restaurant",
                name: restaurant.name,
                servesCuisine: restaurant.type,
                description: restaurant.description,
                address: restaurant.location,
                telephone: restaurant.phone,
                image: restaurant.image,
                url: restaurant.website || restaurant.directions,
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
            mainEntity: restaurantFaqs.map((item) => ({
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
              "url('/images/glenwood/restaurants/caddo-cafe.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className={darkEyebrowClass}>Restaurants & Local Food</p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Where to eat around Glenwood and the Caddo River
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/90">
              Find breakfast, coffee, seafood, Mexican food, Italian food,
              pizza, sweets, quick meals, and local restaurants before or after a
              Caddo River day, cabin weekend, Lake Greeson stop, or slower trip
              through Glenwood.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/caddo-river" className={lightButtonClass}>
                Caddo River Guide
              </Link>

              <Link href="/glenwood-ar-cabins" className={darkOutlineButtonClass}>
                Cabins & Stays
              </Link>

              <Link href="/events" className={darkOutlineButtonClass}>
                Local Events
              </Link>

              <Link href="/contact" className={darkOutlineButtonClass}>
                Add Your Restaurant
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>River Trip Food Guide</p>

            <h2 className={`max-w-2xl ${largeSectionTitleClass}`}>
              Plan food around the river, not the other way around.
            </h2>
          </div>

          <p className={`max-w-2xl ${strongBodyTextClass}`}>
            A Glenwood food stop usually fits into the rest of the day:
            breakfast before the river, something filling after a float, pizza
            or takeout for a cabin group, or coffee and sweets while passing
            through town.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {riverMealLinks.map((item) => (
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
            <p className={eyebrowClass}>Plan Around Food</p>

            <h2 className={`mb-5 ${sectionTitleClass}`}>
              Choose the food stop that fits your river day.
            </h2>

            <div className={`space-y-4 ${bodyTextClass}`}>
              <p>
                Glenwood restaurants are easiest to think about by timing. Some
                places work better before you head toward the Caddo River, some
                make more sense after a float, and some are just simple stops for
                families, cabin groups, and people passing through town.
              </p>

              <p>
                Use this guide to find breakfast, coffee, seafood, Mexican food,
                Italian food, pizza, sweets, quick meals, and casual local places
                near the Caddo River, Lake Greeson, cabins, campgrounds, and
                nearby outdoor stops.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mealStyles.map((item) => (
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
            <p className={eyebrowClass}>Featured Restaurants</p>

            <h2 className={sectionTitleClass}>
              Good starting points for eating around Glenwood.
            </h2>
          </div>

          <p className={bodyTextClass}>
            These featured options cover the way many visitors eat around town:
            a classic family restaurant, an easy cafe stop, and a casual pizza
            and Italian option for families, cabin groups, and travelers.
          </p>
        </div>

        <div className="space-y-8">
          {fishNest && (
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-lg">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {fishNest.image && (
                  <div
                    role="img"
                    aria-label={fishNest.alt}
                    className="min-h-[420px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${fishNest.image}')`,
                    }}
                  />
                )}

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className={eyebrowClass}>Premium Featured Restaurant</p>

                  <h2 className="mb-4 text-4xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {fishNest.name}
                  </h2>

                  <p className="mb-5 text-sm font-medium !text-[color:var(--color-muted)]">
                    {fishNest.type}
                  </p>

                  <p className={`mb-6 ${bodyTextClass}`}>
                    {fishNest.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <p className="!text-[color:var(--color-muted)]">
                      📍 {fishNest.location}
                    </p>

                    {fishNest.phone && (
                      <p className="!text-[color:var(--color-muted)]">
                        📞 {fishNest.phone}
                      </p>
                    )}
                  </div>

                  <RestaurantActions restaurant={fishNest} />
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            {[caddoCafe, aris].map(
              (restaurant) =>
                restaurant && (
                  <div
                    key={restaurant.name}
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {restaurant.image && (
                      <div
                        role="img"
                        aria-label={restaurant.alt}
                        className="h-64 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${restaurant.image}')`,
                        }}
                      />
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                        Featured Restaurant
                      </p>

                      <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                        {restaurant.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium !text-[color:var(--color-muted)]">
                        {restaurant.type}
                      </p>

                      <p className={`mt-4 ${bodyTextClass}`}>
                        {restaurant.description}
                      </p>

                      <p className="mt-4 text-sm !text-[color:var(--color-muted)]">
                        📍 {restaurant.location}
                      </p>

                      <RestaurantActions restaurant={restaurant} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Section>

      <EventsCTA
        title="Eating in Glenwood during a weekend trip?"
        text="Check local events before you plan the whole day. A river float, cabin stay, or restaurant stop can line up with live music, community events, markets, food trucks, and local happenings around Glenwood."
      />

      <Section>
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>More Places To Eat</p>

            <h2 className={sectionTitleClass}>
              More restaurants, cafes, coffee stops, sweets, and quick meals.
            </h2>
          </div>

          <p className={bodyTextClass}>
            These additional food options are useful for visitors comparing
            Mexican food, pizza, carryout, coffee, sweets, quick meals, and
            places to eat close to the Caddo River, Lake Greeson, cabins, and
            campgrounds.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {standardRestaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className={`${cardClass} flex h-full flex-col p-6`}
            >
              <div className="flex flex-1 flex-col gap-5 md:flex-row">
                {restaurant.image && (
                  <div
                    role="img"
                    aria-label={restaurant.alt || restaurant.name}
                    className="h-40 shrink-0 rounded-xl bg-cover bg-center md:w-44"
                    style={{
                      backgroundImage: `url('${restaurant.image}')`,
                    }}
                  />
                )}

                <div className="flex flex-1 flex-col">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {restaurant.type}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {restaurant.name}
                  </h3>

                  <p className={`mt-3 ${smallBodyTextClass}`}>
                    {restaurant.description}
                  </p>

                  <p className="mt-3 text-sm !text-[color:var(--color-muted)]">
                    📍 {restaurant.location}
                  </p>

                  <RestaurantActions restaurant={restaurant} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className={`${largeCardClass} p-8 md:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className={eyebrowClass}>Good To Know</p>

              <h2 className={sectionTitleClass}>
                Where to eat near the Caddo River and Lake Greeson.
              </h2>
            </div>

            <div className={`space-y-4 ${bodyTextClass}`}>
              <p>
                Glenwood is a convenient food stop for visitors coming in for
                Caddo River floats, Lake Greeson fishing trips, cabin weekends,
                camping, and day trips around the Ouachita region. Most places
                here are casual, practical, and easy to work into a simple
                weekend itinerary.
              </p>

              <p>
                During busy river weekends, it helps to think ahead. Grab coffee
                or breakfast before the float, plan an easy meal after the river,
                and keep a backup option in mind for groups, kids, or cabin
                stays where nobody wants to cook after being outside all day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className={eyebrowClass}>FAQs</p>

          <h2 className={sectionTitleClass}>Glenwood restaurant FAQs</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {restaurantFaqs.map((item) => (
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

      <NearbyAmitySection />

      <Section>
        <div className="rounded-3xl bg-[color:var(--color-text)] p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className={darkEyebrowClass}>Local Visibility</p>

              <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Add your restaurant or local food spot.
              </h2>

              <p className="max-w-3xl leading-relaxed !text-white/85">
                This Glenwood restaurant guide helps visitors find local places
                to eat while exploring the Caddo River area, Lake Greeson,
                cabins, campgrounds, and nearby attractions. Restaurants, cafes,
                bakeries, food trucks, coffee shops, and local dining spots can
                request a listing or ask about featured placement.
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