import Section from "@/components/tourism/Section";

export const metadata = {
  title: "Cabins and Places to Stay Near Glenwood, Arkansas | Caddo River & Lake Greeson",
  description:
    "Find cabins, rentals, motels, and places to stay near Glenwood, Arkansas close to the Caddo River, Lake Greeson, camping, fishing, and outdoor attractions.",
};

const stays = [
  {
    name: "Caddo River Camping & Canoe Rental",
    type: "Cabins • Camping • Canoe & Kayak Rentals",
    description:
      "A well-known Glenwood-area stop for Caddo River trips, with cabins, camping, and watercraft rentals. Good for visitors planning floats, family weekends, and river-focused stays.",
    location: "26 Hwy 8 East, Glenwood, AR 71943",
    phone: "870-356-5336",
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
    directions:
      "https://www.google.com/maps/search/?api=1&query=Riverwood+Inn+363+Hwy+70+E+Glenwood+AR+71943",
  },
];

export default function GlenwoodCabinsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Cabins and Places to Stay Near Glenwood, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-2xl">
        Looking for a place to stay near Glenwood, Arkansas? Whether you're
        planning a Caddo River float trip, a Lake Greeson weekend, or a quiet
        getaway in the Ouachita region, there are cabins, campgrounds, motels,
        and lodging options in and around the area.
      </p>

      <Section>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[color:var(--bg-card)] border">
            <h2 className="text-2xl font-semibold">
              Featured Cabin or Rental
            </h2>

            <p className="mt-2 text-[color:var(--color-muted)]">
              Own a cabin, Airbnb, campground, motel, or rental property near
              Glenwood? Get featured at the top of this page so visitors planning
              river trips, lake weekends, and cabin stays see your property first.
            </p>

            <a
              href="/contact"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-md"
            >
              Get Featured
            </a>
          </div>

          {stays.map((stay, index) => (
            <div
              key={stay.name}
              className="p-6 rounded-xl bg-[color:var(--bg-card)] border"
            >
              <h2 className="text-2xl font-semibold">
                {index + 1}. {stay.name}
              </h2>

              <p className="text-sm text-[color:var(--color-muted)] mt-1">
                {stay.type}
              </p>

              <p className="mt-4 text-[color:var(--color-muted)] leading-relaxed">
                {stay.description}
              </p>

              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                📍 {stay.location}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
                  className="bg-black text-white px-4 py-2 rounded-md text-sm"
                >
                  Call {stay.phone}
                </a>

                <a
                  href={stay.directions}
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
          Staying Near the Caddo River and Lake Greeson
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          Most visitors stay near the Caddo River for floating and fishing or
          closer to Lake Greeson for boating and camping. Cabins and rentals in
          this area can fill up quickly during spring and summer, especially on
          weekends.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">
          Add Your Cabin or Rental
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-2xl">
          This page is built to help visitors find cabins, campgrounds, motels,
          and places to stay in Glenwood without digging through multiple sites.
          If you own a rental or property in the area, you can request a listing
          or ask about featured placement.
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