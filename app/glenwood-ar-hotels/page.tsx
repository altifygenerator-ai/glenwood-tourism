import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/tourism/Section";
import TrackedFeatureLink from "@/components/TrackedFeatureLink";
import FindAPlaceBookingCTA from "@/components/FindAPlaceBookingCTA";

export const metadata: Metadata = {
  title: "Hotels & Motels in Glenwood, Arkansas | Places to Stay Near the Caddo River",
  description:
    "Find hotels, motels, and simple places to stay in Glenwood, Arkansas near the Caddo River, Highway 70, local restaurants, Lake Greeson, and nearby outdoor attractions.",
  keywords: [
    "Glenwood Arkansas hotels",
    "hotels in Glenwood Arkansas",
    "Glenwood AR motels",
    "motels in Glenwood Arkansas",
    "places to stay Glenwood Arkansas",
    "hotels near Caddo River",
  ],
  alternates: { canonical: "/glenwood-ar-hotels" },
};

const stays = [
  {
    name: "Ouachita Mountain Inn",
    type: "Motel • Highway Access • Glenwood Lodging",
    description:
      "A practical Glenwood motel for visitors who want a straightforward place to stay close to restaurants, Caddo River outfitters, Highway 70, and day-trip routes around the Ouachitas.",
    location: "189 Highway 70 E, Glenwood, AR 71943",
    phone: "870-356-3737",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ouachita+Mountain+Inn+189+Highway+70+E+Glenwood+AR+71943",
  },
  {
    name: "Caddo River Motel & Cabin Rental",
    type: "Motel • Cabins • Pet-Friendly Lodging",
    description:
      "A small Glenwood motel and cabin rental near the Caddo River with simple rooms, kitchenettes in select units, and a practical location for river trips and short stays.",
    location: "109 Highway 70 W, Glenwood, AR 71943",
    website: "https://www.facebook.com/lmotel1119/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Motel+109+Highway+70+W+Glenwood+AR+71943",
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

export default function GlenwoodHotelsPage() {
  return (
    <main>
      <Section>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Glenwood Hotels & Motels
          </p>
          <h1 className="text-5xl font-semibold leading-[0.98] text-[color:var(--color-text)] md:text-7xl">
            Simple places to stay in Glenwood near the Caddo River.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
            Not every Glenwood trip needs a cabin. These local motel and inn
            options can work well when you want an easy room close to Highway
            70, restaurants, river outfitters, Lake Greeson, and the rest of
            town.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/glenwood-ar-cabins" className="btn">
              Cabins & All Stays
            </Link>
            <Link href="/caddo-river-weekend-guide" className="btn">
              Caddo River Weekend Guide
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay) => (
            <article key={stay.name} className="card flex h-full flex-col p-7">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {stay.type}
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                {stay.name}
              </h2>
              <p className="mt-3 text-sm font-bold text-[color:var(--color-text)]">
                {stay.location}
              </p>
              <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                {stay.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {stay.phone ? (
                  <TrackedFeatureLink
                    href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
                    business={stay.name}
                    city="Glenwood"
                    page="/glenwood-ar-hotels"
                    placement="hotel_card"
                    action="call"
                    placementType="editorial"
                    className="btn"
                  >
                    Call
                  </TrackedFeatureLink>
                ) : null}
                {stay.website ? (
                  <TrackedFeatureLink
                    href={stay.website}
                    business={stay.name}
                    city="Glenwood"
                    page="/glenwood-ar-hotels"
                    placement="hotel_card"
                    action="website"
                    placementType="editorial"
                    newTab
                    className="btn"
                  >
                    Website
                  </TrackedFeatureLink>
                ) : null}
                <TrackedFeatureLink
                  href={stay.directions}
                  business={stay.name}
                  city="Glenwood"
                  page="/glenwood-ar-hotels"
                  placement="hotel_card"
                  action="directions"
                  placementType="editorial"
                  newTab
                  className="btn"
                >
                  Directions
                </TrackedFeatureLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FindAPlaceBookingCTA
        heading="Want a cabin or vacation rental near the Caddo River instead?"
        text="Browse additional stays on Find a Place Booking with results already focused on the Caddo River area."
        href="https://www.findaplacebooking.com/stays?where=Caddo%20River"
        buttonLabel="Find a Stay Near the Caddo River →"
      />
    </main>
  );
}
