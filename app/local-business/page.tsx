const featuredBusiness = {
  name: "Caddo River Camping & Canoe Rental",
  type: "Cabins • Camping • Canoe & Kayak Rentals",
  description:
    "A well-known Glenwood-area stop for Caddo River trips, with cabins, camping, and watercraft rentals. Good for visitors planning floats, family weekends, and river-focused stays.",
  location: "26 Hwy 8 East, Glenwood, AR 71943",
  phone: "870-356-5336",
  image: "/images/glenwood/cabins/caddo-river-camping.avif",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Caddo+River+Camping+and+Canoe+Rental+26+Hwy+8+East+Glenwood+AR+71943",
};

const localBusinesses = [
  {
    name: "Caddo Cafe",
    type: "Cafe • Breakfast • Comfort Food",
    description:
      "A local Glenwood cafe serving breakfast, lunch, and comfort food in a casual small-town setting.",
    location: "53 US-70 Ste. C, Glenwood, AR 71943",
    phone: "870-356-2397",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+Cafe+53+US-70+Ste+C+Glenwood+AR+71943",
  },
  {
    name: "Bayou Bella’s & Biscuits",
    type: "Food Truck • Cajun Food • Biscuits",
    description:
      "A local Glenwood food truck serving Cajun-inspired food, biscuits, rotating menu items, and casual meals.",
    location: "22 Hwy 70, Glenwood, AR 71943",
    phone: "870-828-8588",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bayou+Bella%27s+and+Biscuits+22+Hwy+70+Glenwood+AR+71943",
  },
  {
    name: "Mercado Restaurant",
    type: "Mexican Restaurant • Meat Market • Produce",
    description:
      "A Glenwood Mexican restaurant, meat market, and produce stop serving Mexican food in a casual local setting.",
    location: "240 US-70, Glenwood, AR 71943",
    phone: "870-356-0113",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mercado+Restaurant+240+US-70+Glenwood+AR+71943",
  },
  {
    name: "Arrow 6 Coffee Co.",
    type: "Coffee Shop • Local Coffee • Morning Stop",
    description:
      "A local Glenwood coffee shop serving coffee, specialty drinks, seasonal lattes, baked goods, and quick morning favorites.",
    location: "3 Caddo Crossing Dr, Glenwood, AR 71943",
    phone: "",
    website: "https://arrow6coffeeco.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arrow+6+Coffee+Co+3+Caddo+Crossing+Dr+Glenwood+AR+71943",
  },
  {
    name: "Flavor-Licious Glenwood",
    type: "Ice Cream Shop • Sweets • Snacks",
    description:
      "A local Glenwood sweets and ice cream stop offering treats, snacks, drinks, and fun dessert-style items.",
    location: "804 East Broadway, Glenwood, AR 71943",
    phone: "870-279-4179",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Flavor-Licious+Glenwood+804+East+Broadway+Glenwood+AR+71943",
  },
  {
    name: "Fish Nest Family Restaurant",
    type: "Seafood • Family Restaurant • Local Favorite",
    description:
      "A long-running local favorite known for seafood, fried fish, burgers, steaks, chicken, and family-style meals.",
    location: "164 US-70, Glenwood, AR 71943",
    phone: "870-356-3875",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fish+Nest+Family+Restaurant+164+US-70+Glenwood+AR+71943",
  },
  {
    name: "Swaha Lodge & Marina",
    type: "Lodge • Marina • Cabins • Lake Greeson",
    description:
      "A Lake Greeson lodge and marina near Murfreesboro with cabins, marina access, boat rentals, and outdoor recreation nearby.",
    location: "205 Dynamite Hill Road, Murfreesboro, AR 71958",
    phone: "870-285-2272",
    website: "https://swahacabins.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Swaha+Lodge+and+Marina+205+Dynamite+Hill+Road+Murfreesboro+AR+71958",
  },
  {
    name: "Bean Creek Cabins",
    type: "Historic Cabins • Caddo Gap • Caddo River Area",
    description:
      "Restored historic log cabins in Caddo Gap near the Caddo River and Glenwood area.",
    location: "Caddo Gap, AR",
    phone: "",
    website: "https://www.thebeancreekcabins.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bean+Creek+Cabins+Caddo+Gap+AR",
  },
];

export const metadata = {
  title: "Local Businesses in Glenwood Arkansas | Restaurants, Cabins & Shops",
  description:
    "Find local businesses in Glenwood, Arkansas including restaurants, cafes, cabins, lodging, outdoor outfitters, sweets, coffee, and Caddo River area stops.",
};

export default function LocalBusinessesPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
          Local Business Guide
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Local Businesses in Glenwood, Arkansas
        </h1>

        <p className="text-lg mb-12 text-[color:var(--color-muted)] max-w-3xl">
          Find places to eat, shop, stay, and explore around Glenwood — from
          local restaurants and coffee stops to cabins, river outfitters, Lake
          Greeson stays, and Caddo River area businesses.
        </p>

        {/* Featured business */}
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Featured Local Business
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl bg-white shadow md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] bg-[#e8e1d5]">
              <img
                src={featuredBusiness.image}
                alt={featuredBusiness.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold text-[color:var(--color-accent)] mb-3">
                {featuredBusiness.type}
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {featuredBusiness.name}
              </h2>

              <p className="text-[color:var(--color-muted)] leading-relaxed mb-6">
                {featuredBusiness.description}
              </p>

              <div className="space-y-2 text-sm mb-6">
                <p>
                  <strong>Location:</strong> {featuredBusiness.location}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${featuredBusiness.phone.replace(/\D/g, "")}`}
                    className="text-[color:var(--color-accent)] font-medium"
                  >
                    {featuredBusiness.phone}
                  </a>
                </p>
              </div>

              <a
                href={featuredBusiness.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[color:var(--color-accent)] text-white px-5 py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Regular businesses */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-3">
              More Glenwood Area Businesses
            </h2>

            <p className="text-[color:var(--color-muted)] max-w-2xl">
              Browse more local restaurants, coffee shops, cabins, lodging, and
              visitor-friendly stops around Glenwood and the surrounding area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {localBusinesses.map((business) => (
              <article
                key={business.name}
                className="rounded-2xl bg-white p-6 shadow-sm border border-black/5"
              >
                <p className="text-sm font-semibold text-[color:var(--color-accent)] mb-2">
                  {business.type}
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  {business.name}
                </h3>

                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed mb-5">
                  {business.description}
                </p>

                <div className="space-y-2 text-sm mb-5">
                  <p>
                    <strong>Location:</strong> {business.location}
                  </p>

                  {business.phone && (
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a
                        href={`tel:${business.phone.replace(/\D/g, "")}`}
                        className="text-[color:var(--color-accent)] font-medium"
                      >
                        {business.phone}
                      </a>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={business.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[color:var(--color-accent)] font-semibold"
                  >
                    Directions →
                  </a>

                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[color:var(--color-accent)] font-semibold"
                    >
                      Website →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#2d2a26] text-white p-8 md:p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Own a Glenwood area business?
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto mb-6">
            If you run a restaurant, cabin, shop, attraction, service business,
            or local stop visitors should know about, reach out about getting
            listed on the Glenwood Arkansas guide.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-5 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Get Listed
          </a>
        </section>
      </section>
    </main>
  );
}