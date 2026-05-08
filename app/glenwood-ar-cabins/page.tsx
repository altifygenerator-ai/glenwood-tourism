import Section from "@/components/tourism/Section";
import Link from "next/link";
export const metadata = {
  title:
    "Cabins and Places to Stay Near Glenwood, Arkansas | Caddo River & Lake Greeson",
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
];

const standardStays = stays.filter(
  (stay) =>
    stay.name !== "Caddo River Cabins" &&
    stay.name !== "Arrowhead Cabins and Camping" &&
    stay.name !== "Riverwood Inn of Glenwood"
);

export default function GlenwoodCabinsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
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
          url: stay.directions,
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
          name: "Where can I stay near Glenwood, Arkansas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visitors can find cabins, campgrounds, motels, and river stays near Glenwood, Arkansas, especially around the Caddo River, Caddo Gap, and Lake Greeson area.",
          },
        },
        {
          "@type": "Question",
          name: "Are there cabins near the Caddo River?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Glenwood area has cabins and camping options near the Caddo River for visitors planning floating, fishing, swimming, and weekend trips.",
          },
        },
        {
          "@type": "Question",
          name: "When should I book a cabin near Glenwood?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spring and summer weekends can fill up faster because of Caddo River floats, Lake Greeson trips, camping, and outdoor travel. Booking earlier is usually better for busy weekends.",
          },
        },
      ],
    }),
  }}
/>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Cabins and Places to Stay Near Glenwood, Arkansas
      </h1>

      <p className="text-[color:var(--color-muted)] mb-12 max-w-3xl leading-relaxed">
        Looking for a place to stay near Glenwood, Arkansas? Whether you're
        planning a Caddo River float trip, a Lake Greeson weekend, or a quiet
        getaway in the Ouachita region, there are cabins, campgrounds, motels,
        and lodging options in and around the area.
      </p>

      <Section>
        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="min-h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/glenwood/rivercanoe.jpg')",
                }}
              />

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Premium Featured Stay
                </p>

                <h2 className="mb-4 text-4xl font-semibold">
                  Caddo River Cabins
                </h2>

                <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                  Riverfront Cabins • Caddo River • Glenwood Area
                </p>

                <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                  Riverfront cabin lodging near Glenwood built around relaxing
                  Caddo River stays, fishing trips, floating weekends, campfires,
                  swimming, and quiet Ouachita mountain scenery. A strong option
                  for visitors wanting easy river access and a peaceful cabin
                  setup close to town.
                </p>

                <div className="mb-8 space-y-2 text-sm text-[color:var(--color-muted)]">
                  <p>📍 Caddo River, Glenwood, AR</p>
                  <p>📞 870-718-3072</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:8707183072"
                    className="bg-black text-white px-6 py-3 rounded-md"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Caddo+River+Cabins+Glenwood+AR"
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
                  backgroundImage: "url('/images/glenwood/forest.jpg')",
                }}
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Featured Stay
                </p>

                <h3 className="text-2xl font-semibold">
                  Arrowhead Cabins and Camping
                </h3>

                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  Cabins • Camping • Caddo River Area
                </p>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Cabins and camping near the Caddo River area with easy access
                  to floating, fishing, and outdoor weekends around southwest
                  Arkansas.
                </p>

                <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                  📍 69 Arrowhead Drive, Caddo Gap, AR 71935
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="tel:8703562944"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call 870-356-2944
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Arrowhead+Cabins+and+Camping+69+Arrowhead+Drive+Caddo+Gap+AR+71935"
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
                  backgroundImage: "url('/images/glenwood/oldtown.jpg')",
                }}
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Featured Stay
                </p>

                <h3 className="text-2xl font-semibold">
                  Riverwood Inn of Glenwood
                </h3>

                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  Motel • Creekside Stay • Glenwood Lodging
                </p>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Convenient motel stay in Glenwood with quick access to
                  restaurants, the Caddo River, Lake Greeson, and nearby outdoor
                  attractions.
                </p>

                <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                  📍 363 Hwy 70 E, Glenwood, AR 71943
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="tel:8703564567"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call 870-356-4567
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Riverwood+Inn+363+Hwy+70+E+Glenwood+AR+71943"
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
    More Cabins, Vacation Rentals, and Places to Stay Near Glenwood
  </h2>

  <p className="text-[color:var(--color-muted)] leading-relaxed">
    These additional cabins, vacation rentals, campgrounds, motels, and lodging
    options are useful for visitors comparing places to stay near the Caddo
    River, Lake Greeson, floating spots, fishing areas, and outdoor attractions
    around Glenwood and southwest Arkansas.
  </p>
</div>
        <div className="space-y-6">
          {standardStays.map((stay, index) => (
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
  {stay.phone && (
    <a
      href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
      className="bg-black text-white px-4 py-2 rounded-md text-sm"
    >
      Call {stay.phone}
    </a>
  )}

  {stay.website && (
    <a
      href={stay.website}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-md text-sm"
    >
      View Listing
    </a>
  )}

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

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Most visitors stay near the Caddo River for floating and fishing or
          closer to Lake Greeson for boating and camping. Cabins and rentals in
          this area can fill up quickly during spring and summer, especially on
          weekends. Glenwood also works well as a base for visitors looking for
          river access, small-town restaurants, nearby campgrounds, and outdoor
          stops across southwest Arkansas.
        </p>
      </Section>
      <Section>
  <h2 className="text-3xl font-semibold mb-6">
    Glenwood Cabin and Lodging FAQs
  </h2>

  <div className="space-y-4">
    {[
      {
        question: "Where can I stay near Glenwood, Arkansas?",
        answer:
          "Visitors can find cabins, campgrounds, motels, and river stays near Glenwood, especially around the Caddo River, Caddo Gap, and Lake Greeson area.",
      },
      {
        question: "Are there cabins near the Caddo River?",
        answer:
          "Yes. The Glenwood area has cabins and camping options near the Caddo River for floating, fishing, swimming, and weekend trips.",
      },
      {
        question: "When should I book a cabin near Glenwood?",
        answer:
          "Spring and summer weekends can fill up faster because of river floats, Lake Greeson trips, camping, and outdoor travel. Booking earlier is usually better.",
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
            Add Your Cabin, Campground, Motel, or Rental
          </h2>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
            This page is built to help visitors find cabins, campgrounds,
            motels, and places to stay in Glenwood without digging through
            multiple sites. If you own a rental or property in the area, you can
            request a standard listing or ask about featured placement.
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