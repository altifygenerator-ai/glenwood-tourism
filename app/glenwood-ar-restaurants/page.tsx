import Section from "@/components/tourism/Section";
import Link from "next/link";

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
      "A local Glenwood cafe serving breakfast, lunch, and comfort food in a casual small-town setting. A solid stop for visitors heading to or from the Caddo River, Lake Greeson, cabins, and campgrounds.",
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
      "A long-running local favorite known for seafood, fried fish, burgers, steaks, chicken, and family-style meals. Fish Nest is one of the main names visitors see when looking for classic Glenwood restaurants.",
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
      "Ari’s Little Italy gives visitors another sit-down option in Glenwood, with Italian-style food, pizza, pasta, and casual dining for families, travelers, and locals looking for something besides fast food.",
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
      "A convenient pizza option in Glenwood for families, groups, and visitors wanting something easy after a river float, lake day, or long drive through southwest Arkansas.",
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
    name: "Ron's Barbecue",
    type: "Barbecue • Casual Food • Local Stop",
    description:
      "A Glenwood barbecue option for visitors looking for smoked meats, casual plates, and a simple local meal while passing through town or staying near the river.",
    location: "327 Hwy 70 E, Glenwood, AR 71943",
    phone: "870-356-5250",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Rons+Barbecue+327+Hwy+70+E+Glenwood+AR+71943",
  },

  {
    name: "OK Cafe",
    type: "Cafe • Breakfast • Small-Town Food",
    description:
      "A small-town cafe option in Glenwood for breakfast, coffee, and classic local food. Useful for visitors wanting a simple meal before a river float or lake day.",
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

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d]/g, "")}`;
}

export default function GlenwoodRestaurantsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best Restaurants in Glenwood, Arkansas",
            description:
              "Local restaurants, cafes, seafood, Mexican food, Italian food, pizza, and places to eat near Glenwood, Arkansas.",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the best restaurants in Glenwood, Arkansas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Glenwood has local restaurants, cafes, seafood, Mexican food, Italian food, pizza, and quick meal options for visitors and locals.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I eat near the Caddo River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Glenwood is a convenient food stop near the Caddo River, with casual restaurants and local dining options close to river trips, cabins, campgrounds, and Lake Greeson.",
                },
              },
              {
                "@type": "Question",
                name: "Are there family-friendly restaurants in Glenwood?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Glenwood has several casual, family-friendly restaurants that work well for river trips, lake weekends, cabin stays, and local meals.",
                },
              },
            ],
          }),
        }}
      />

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Best Restaurants in Glenwood, Arkansas
      </h1>

      <p className="mb-12 max-w-3xl leading-relaxed text-[color:var(--color-muted)]">
        Looking for places to eat in Glenwood, Arkansas? Whether you’re floating
        the Caddo River, staying near{" "}
        <Link href="/glenwood-ar-cabins" className="underline">
          cabins near Lake Greeson
        </Link>
        , visiting family, camping, or passing through town, Glenwood has a
        small but useful mix of local restaurants, cafes, Mexican food, Italian
        food, seafood, pizza, and quick meals.
      </p>

      <Section>
        <div className="space-y-8">
          {fishNest && (
            <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  role="img"
                  aria-label={fishNest.alt}
                  className="min-h-[420px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${fishNest.image}')`,
                  }}
                />

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Premium Featured Restaurant
                  </p>

                  <h2 className="mb-4 text-4xl font-semibold">
                    {fishNest.name}
                  </h2>

                  <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                    {fishNest.type}
                  </p>

                  <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                    {fishNest.description}
                  </p>

                  <div className="mb-8 space-y-2 text-sm text-[color:var(--color-muted)]">
                    <p>📍 {fishNest.location}</p>
                    <p>📞 {fishNest.phone}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={phoneHref(fishNest.phone)}
                      className="rounded-md bg-black px-6 py-3 text-white"
                    >
                      Call Now
                    </a>

                    <a
                      href={fishNest.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border px-6 py-3"
                    >
                      Get Directions
                    </a>
                  </div>
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
                    className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]"
                  >
                    <div
                      role="img"
                      aria-label={restaurant.alt}
                      className="h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${restaurant.image}')`,
                      }}
                    />

                    <div className="p-6">
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                        Featured Restaurant
                      </p>

                      <h3 className="text-2xl font-semibold">
                        {restaurant.name}
                      </h3>

                      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                        {restaurant.type}
                      </p>

                      <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                        {restaurant.description}
                      </p>

                      <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                        📍 {restaurant.location}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={phoneHref(restaurant.phone)}
                          className="rounded-md bg-black px-4 py-2 text-sm text-white"
                        >
                          Call {restaurant.phone}
                        </a>

                        <a
                          href={restaurant.directions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border px-4 py-2 text-sm"
                        >
                          Directions
                        </a>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Section>

      <div className="mt-6 rounded-xl border bg-[color:var(--bg-card)] p-5">
        <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
          Own a cabin, campground, restaurant, or local business near Glenwood?
          Featured placements are available for businesses wanting additional
          exposure to visitors planning trips around the Caddo River and Lake
          Greeson area.
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-block text-sm underline underline-offset-4"
        >
          Ask About Featured Placement
        </Link>
      </div>

      <Section>
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold">
            More Places to Eat Near Glenwood
          </h2>

          <p className="leading-relaxed text-[color:var(--color-muted)]">
            These additional restaurants and quick food options are useful for
            visitors comparing Mexican food, pizza, carryout, casual meals, and
            places to eat close to the Caddo River, Lake Greeson, cabins, and
            campgrounds.
          </p>
        </div>

        <div className="space-y-6">
          {standardRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              className="rounded-xl border bg-[color:var(--bg-card)] p-6"
            >
              <h2 className="text-2xl font-semibold">
                {index + 1}. {restaurant.name}
              </h2>

              <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                {restaurant.type}
              </p>

              <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                {restaurant.description}
              </p>

              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                📍 {restaurant.location}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {restaurant.phone && (
                  <a
                    href={phoneHref(restaurant.phone)}
                    className="rounded-md bg-black px-4 py-2 text-sm text-white"
                  >
                    Call {restaurant.phone}
                  </a>
                )}

                {restaurant.website && (
                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-black px-4 py-2 text-sm text-white"
                  >
                    View Website
                  </a>
                )}

                <a
                  href={restaurant.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-semibold">
          Where to Eat Near the Caddo River and Lake Greeson
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed text-[color:var(--color-muted)]">
          Glenwood is a convenient food stop for visitors coming in for Caddo
          River floats, Lake Greeson fishing trips, cabin weekends, camping, and
          day trips around the Ouachita region. Most restaurants here are
          casual, local, and easy to work into a simple weekend itinerary.
        </p>
      </Section>

      <Section>
        <h2 className="mb-6 text-3xl font-semibold">
          Glenwood Restaurant FAQs
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "What are the best restaurants in Glenwood, Arkansas?",
              answer:
                "Glenwood has local restaurants, cafes, seafood, Mexican food, Italian food, pizza, and quick meal options for visitors and locals.",
            },
            {
              question: "Where can I eat near the Caddo River?",
              answer:
                "Glenwood is a convenient food stop near the Caddo River, with casual restaurants and dining options close to river trips, cabins, campgrounds, and Lake Greeson.",
            },
            {
              question: "Are there family-friendly restaurants in Glenwood?",
              answer:
                "Yes. Glenwood has several casual, family-friendly restaurants that work well for river trips, lake weekends, cabin stays, and local meals.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-xl border bg-[color:var(--bg-card)] p-6"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-semibold">
            Add Your Restaurant or Local Food Spot
          </h2>

          <p className="mb-6 max-w-3xl leading-relaxed text-[color:var(--color-muted)]">
            This Glenwood restaurant guide helps visitors find local places to
            eat while exploring the Caddo River area, Lake Greeson, cabins,
            campgrounds, and nearby attractions. Restaurants, cafes, bakeries,
            food trucks, and local dining spots can request a listing or ask
            about featured placement.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-black px-6 py-3 text-white"
            >
              Get Listed
            </Link>

            <Link href="/contact" className="rounded-md border px-6 py-3">
              Ask About Featured Placement
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}