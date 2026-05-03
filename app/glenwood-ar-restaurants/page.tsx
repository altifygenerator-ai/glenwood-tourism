import Section from "@/components/tourism/Section";
import Link from "next/link";
export const metadata = {
  title: "Best Restaurants in Glenwood, Arkansas | Places to Eat Near the Caddo River",
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
];

export default function GlenwoodRestaurantsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Best Restaurants in Glenwood, Arkansas
      </h1>

     <p className="text-[color:var(--color-muted)] mb-12 max-w-2xl">
  Looking for places to eat in Glenwood, Arkansas? Whether you’re floating
  the Caddo River, staying near{" "}
  <Link href="/glenwood-ar-cabins" className="underline">
    cabins near Lake Greeson
  </Link>, visiting family, camping, or
  passing through town, Glenwood has a small but useful mix of{" "}
  <Link href="/glenwood-ar-restaurants" className="underline">
    local restaurants
  </Link>, cafes, Mexican food, Italian food, seafood, and quick meals.
</p>

      <Section>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[color:var(--bg-card)] border">
            <h2 className="text-2xl font-semibold">
              Featured Restaurant Spot
            </h2>

            <p className="mt-2 text-[color:var(--color-muted)]">
              Own a restaurant, cafe, food truck, bakery, or local dining spot
              near Glenwood? Get featured at the top of this page so visitors
              planning river trips, lake weekends, cabin stays, and local outings
              see your business first.
            </p>

            <a
              href="/contact"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-md"
            >
              Get Featured
            </a>
          </div>

          {restaurants.map((restaurant, index) => (
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
                <a
                  href={`tel:${restaurant.phone.replace(/[^\d]/g, "")}`}
                  className="bg-black text-white px-4 py-2 rounded-md text-sm"
                >
                  Call {restaurant.phone}
                </a>

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

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Glenwood is a convenient food stop for visitors coming in for Caddo
          River floats, Lake Greeson fishing trips, cabin weekends, camping, and
          day trips around the Ouachita region. Most restaurants here are casual,
          local, and easy to work into a simple weekend itinerary.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Add Your Restaurant to This Guide
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          This Glenwood restaurant guide is built to help visitors find local
          places to eat instead of digging through scattered search results. If
          you own or manage a restaurant in Glenwood or the surrounding area, you
          can request a listing update or ask about featured placement.
        </p>

        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          Get Listed
        </a>
      </Section>
    </main>
  );
}