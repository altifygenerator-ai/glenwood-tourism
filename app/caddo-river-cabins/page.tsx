import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/tourism/Section";
import TrackedFeatureLink from "@/components/TrackedFeatureLink";
import FindAPlaceBookingCTA from "@/components/FindAPlaceBookingCTA";

export const metadata: Metadata = {
  title: "Caddo River Cabins Near Glenwood, Arkansas | Riverfront Places to Stay",
  description:
    "Find Caddo River cabins near Glenwood, Arkansas for floating, fishing, swimming, family weekends, and quiet river stays, plus booking and trip-planning tips.",
  keywords: [
    "Caddo River cabins",
    "cabins on Caddo River Arkansas",
    "Glenwood Arkansas river cabins",
    "Caddo River cabin rentals",
    "cabins near Glenwood Arkansas",
    "riverfront cabins Glenwood Arkansas",
  ],
  alternates: { canonical: "/caddo-river-cabins" },
};

const riverStays = [
  {
    name: "Caddo River Cabins",
    type: "Riverfront Cabins • Caddo River",
    description:
      "Riverfront cabin lodging on the Caddo River in Glenwood, built around quiet stays, fishing, floating, swimming, campfires, and relaxing close to the water.",
    phone: "870-718-3072",
    website: "https://www.caddorivercabin.com/",
  },
  {
    name: "Caddo River Ranch",
    type: "Cabin Rentals • Caddo River • Between Mount Ida and Glenwood",
    description:
      "Cabin rentals between Mount Ida and Glenwood with Caddo River access, covered porches, nature views, and a quieter base for exploring the Ouachita region.",
    website: "https://atcaddoriverranch.com/",
  },
  {
    name: "Caddo River Camping & Canoe Rental",
    type: "Cabins • Camping • Canoe & Kayak Rentals",
    description:
      "A well-known Glenwood-area stop for river trips with cabins, camping, and watercraft rentals that fit float weekends and family trips.",
    phone: "870-356-5336",
    website: "https://www.caddoriver.com/",
  },
  {
    name: "Arrowhead Cabins and Camping",
    type: "Cabins • Camping • Caddo River Area",
    description:
      "Cabins and camping in the Caddo Gap area for visitors wanting an outdoor base close to floating, fishing, swimming, and southwest Arkansas scenery.",
    phone: "870-356-2944",
    website: "https://arrowheadar.com/",
  },
  {
    name: "Fancy Hill Cabins & RV Park",
    type: "Cabins • RV Sites • Tent Camping",
    description:
      "A wooded Caddo Gap-area stay with cabins, RV and tent sites, creekside settings, and convenient access to Ouachita National Forest back roads.",
    phone: "870-356-5311",
    website: "https://www.fancyhillcabinsandrvpark.com/",
  },
];

export default function CaddoRiverCabinsPage() {
  return (
    <main>
      <Section>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Caddo River Cabins
          </p>
          <h1 className="text-5xl font-semibold leading-[0.98] text-[color:var(--color-text)] md:text-7xl">
            Stay close to the Caddo River and build the weekend around the water.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
            River cabins make the most sense when floating, fishing, swimming,
            or a slower outdoor weekend is the main reason for the trip. Check
            river conditions, access, parking, pet rules, and minimum-night
            requirements before you book.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/caddo-river" className="btn">
              Caddo River Guide
            </Link>
            <Link href="/glenwood-ar-cabins" className="btn">
              All Glenwood Stays
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {riverStays.map((stay) => (
            <article key={stay.name} className="card flex h-full flex-col p-7">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {stay.type}
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                {stay.name}
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                {stay.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {stay.phone ? (
                  <TrackedFeatureLink
                    href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
                    business={stay.name}
                    city="Glenwood"
                    page="/caddo-river-cabins"
                    placement="river_cabin_card"
                    action="call"
                    placementType="editorial"
                    className="btn"
                  >
                    Call
                  </TrackedFeatureLink>
                ) : null}
                <TrackedFeatureLink
                  href={stay.website}
                  business={stay.name}
                  city="Glenwood"
                  page="/caddo-river-cabins"
                  placement="river_cabin_card"
                  action="website"
                  placementType="editorial"
                  newTab
                  className="btn"
                >
                  Website
                </TrackedFeatureLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Floating or swimming?",
              text: "Stay close to your preferred access area and confirm river conditions before the trip. Water levels and weather can change the plan quickly.",
            },
            {
              title: "Bringing kids or a group?",
              text: "Check sleeping layout, kitchen space, parking, outdoor areas, stairs, and how close the cabin really is to the water before booking.",
            },
            {
              title: "Planning a busy weekend?",
              text: "Warm-weather weekends and holidays can fill earlier. Book the stay first, then build meals, events, and river plans around it.",
            },
          ].map((item) => (
            <div key={item.title} className="card p-7">
              <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <FindAPlaceBookingCTA
        heading="Looking for another stay near the Caddo River?"
        text="Browse cabins, vacation rentals, and other stays on Find a Place Booking with results already focused on the Caddo River area."
        href="https://www.findaplacebooking.com/stays?where=Caddo%20River"
        buttonLabel="Find a Stay Near the Caddo River →"
      />
    </main>
  );
}
