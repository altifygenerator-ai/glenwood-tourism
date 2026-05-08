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
    name: "Wok N Roll Express",
    type: "Chinese Food • Takeout • Quick Meal",
    description:
      "A local Chinese food option in Glenwood for takeout, quick meals, and visitors looking for something different from burgers, pizza, or Mexican food while staying in the area.",
    location: "135 Hwy 70 W, Glenwood, AR 71943",
    phone: "870-356-3817",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Wok+N+Roll+Express+135+Hwy+70+W+Glenwood+AR+71943",
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
    name: "The Daily Dish",
    type: "American Food • Casual Dining • Local Restaurant",
    description:
      "A casual Glenwood restaurant option for visitors comparing local meals, American-style food, and easy dining close to Highway 70, the Caddo River, and area lodging.",
    location: "371 Hwy 70 E Ste B, Glenwood, AR 71943",
    phone: "870-356-0099",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Daily+Dish+371+Hwy+70+E+Ste+B+Glenwood+AR+71943",
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
  {
    name: "Dairy Queen Grill & Chill",
    type: "Fast Food • Burgers • Ice Cream • Family Stop",
    description:
      "A quick family-friendly stop for burgers, chicken, ice cream, and treats in the Glenwood area. Good for visitors traveling with kids or needing an easy meal.",
    location: "Glenwood, AR 71943",
    phone: "",
    website: "https://www.dairyqueen.com/en-us/locations/ar/glenwood/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Dairy+Queen+Glenwood+AR",
  },
];

const standardRestaurants = restaurants.filter(
  (restaurant) =>
    restaurant.name !== "Fish Nest Family Restaurant" &&
    restaurant.name !== "Caddo Cafe" &&
    restaurant.name !== "Ari’s Little Italy"
);

export default function GlenwoodRestaurantsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
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
          url: restaurant.directions,
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
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Best Restaurants in Glenwood, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-3xl leading-relaxed">
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
          <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="min-h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/oldtown.jpg')",
                }}
              />

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Premium Featured Restaurant
                </p>

                <h2 className="mb-4 text-4xl font-semibold">
                  Fish Nest Family Restaurant
                </h2>

                <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                  Seafood • Family Restaurant • Local Favorite
                </p>

                <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                  A long-running Glenwood favorite for seafood, fried fish,
                  burgers, steaks, chicken, and family-style meals. Fish Nest is
                  a strong stop for visitors looking for a classic local meal
                  after a Caddo River float, Lake Greeson trip, cabin weekend,
                  or day out around southwest Arkansas.
                </p>

                <div className="mb-8 space-y-2 text-sm text-[color:var(--color-muted)]">
                  <p>📍 164 US-70, Glenwood, AR 71943</p>
                  <p>📞 870-356-3875</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:8703563875"
                    className="bg-black text-white px-6 py-3 rounded-md"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Fish+Nest+Family+Restaurant+164+US-70+Glenwood+AR+71943"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-6 py-3 rounded-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/caddofest.webp')",
                }}
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Featured Restaurant
                </p>

                <h3 className="text-2xl font-semibold">Caddo Cafe</h3>

                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  Cafe • Breakfast • Comfort Food • Local Stop
                </p>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  A casual local cafe for breakfast, lunch, and comfort food.
                  Good for visitors heading to the river, lake, cabins, or a day
                  around Glenwood.
                </p>

                <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                  📍 53 US-70 Ste. C, Glenwood, AR 71943
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="tel:8703562397"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call 870-356-2397
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Caddo+Cafe+53+US-70+Ste+C+Glenwood+AR+71943"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-2 rounded-md text-sm"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/rivercanoe.jpg')",
                }}
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Featured Restaurant
                </p>

                <h3 className="text-2xl font-semibold">Ari’s Little Italy</h3>

                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  Italian • Pizza • Casual Dining
                </p>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  A sit-down option in Glenwood for Italian-style food, pizza,
                  pasta, and casual family dining when visitors want something
                  besides fast food.
                </p>

                <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                  📍 180 Old Highway 70 East #13, Glenwood, AR 71943
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="tel:8703564587"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call 870-356-4587
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ari%27s+Little+Italy+180+Old+Highway+70+East+13+Glenwood+AR+71943"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-2 rounded-md text-sm"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
<div className="mt-6 rounded-xl border bg-[color:var(--bg-card)] p-5">
  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
    Own a cabin, campground, restaurant, or local business near Glenwood?
    Featured placements are available for businesses wanting additional exposure
    to visitors planning trips around the Caddo River and Lake Greeson area.
  </p>

  <Link
    href="/contact"
    className="inline-block mt-4 text-sm underline underline-offset-4"
  >
    Ask About Featured Placement
  </Link>
</div>
      <Section>
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            More Places to Eat Near Glenwood
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
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
              className="p-6 rounded-xl bg-[color:var(--bg-card)] border"
            >
              <h2 className="text-2xl font-semibold">
                {index + 1}. {restaurant.name}
              </h2>

              <p className="text-sm text-[color:var(--color-muted)] mt-1">
                {restaurant.type}
              </p>

              <p className="mt-4 text-[color:var(--color-muted)] leading-relaxed">
                {restaurant.description}
              </p>

              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                📍 {restaurant.location}
              </p>

         <div className="mt-4 flex flex-wrap gap-3">
  {restaurant.phone && (
    <a
      href={`tel:${restaurant.phone.replace(/[^\d]/g, "")}`}
      className="bg-black text-white px-4 py-2 rounded-md text-sm"
    >
      Call {restaurant.phone}
    </a>
  )}

  {restaurant.website && (
    <a
      href={restaurant.website}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-md text-sm"
    >
      View Website
    </a>
  )}

  <a
    href={restaurant.directions}
    target="_blank"
    rel="noopener noreferrer"
    className="border px-4 py-2 rounded-md text-sm"
  >
    Get Directions
  </a>
</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Where to Eat Near the Caddo River and Lake Greeson
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Glenwood is a convenient food stop for visitors coming in for Caddo
          River floats, Lake Greeson fishing trips, cabin weekends, camping, and
          day trips around the Ouachita region. Most restaurants here are
          casual, local, and easy to work into a simple weekend itinerary.
        </p>
      </Section>
      <Section>
  <h2 className="text-3xl font-semibold mb-6">
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
        <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">
          {item.answer}
        </p>
      </div>
    ))}
  </div>
</Section>

      <Section>
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10">
         <h2 className="text-3xl font-semibold mb-4">
  Add Your Restaurant or Local Food Spot
</h2>

<p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
  This Glenwood restaurant guide helps visitors find local places to eat while
  exploring the Caddo River area, Lake Greeson, cabins, campgrounds, and nearby
  attractions. Restaurants, cafes, bakeries, food trucks, and local dining
  spots can request a listing or ask about featured placement.
</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-md"
            >
              Get Listed
            </a>

            <a href="/contact" className="border px-6 py-3 rounded-md">
              Ask About Featured Placement
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}