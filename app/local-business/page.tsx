import Link from "next/link";
import EventsCTA from "@/components/events/EventsCTA";
import NearbyAmitySection from "@/components/NearbyAmitySection";
import TrackedFeatureLink from "@/components/TrackedFeatureLink";
import { allBusinessDirectoryListings } from "@/data/glenwoodBusinessDirectoryPages";
import type { GlenwoodBusiness } from "@/data/glenwoodBusinesses";

const categoryCards = [
  {
    title: "Restaurants",
    text: "Food, coffee, sweets, pizza, seafood, Mexican food, breakfast stops, and easy meals before or after the river.",
    href: "/glenwood-ar-restaurants",
    label: "Food & Drinks",
  },
  {
    title: "Cabins & Places to Stay",
    text: "Cabins, campgrounds, motels, river stays, and nearby lodging around Glenwood, the Caddo River, and Lake Greeson.",
    href: "/glenwood-ar-cabins",
    label: "Stays",
  },
  {
    title: "Shops & Supplies",
    text: "Gifts, groceries, hardware, flowers, coffee, sweets, auto parts, and practical stops visitors may need in town.",
    href: "/glenwood-ar-shops-supplies",
    label: "New Guide",
  },
  {
    title: "Outdoor Businesses",
    text: "Caddo River outfitters, canoe and kayak rentals, golf, UTV rentals, Lake Greeson stops, and family outdoor ideas.",
    href: "/glenwood-outdoor-businesses",
    label: "New Guide",
  },
  {
    title: "Local Services",
    text: "Hardware, auto parts, remodeling, repairs, banking, property help, and useful local services around Glenwood.",
    href: "/glenwood-local-services",
    label: "New Guide",
  },
];

const featuredNames = [
  "Caddo River Camping & Canoe Rental",
  "Mercantile on Broadway",
  "At Living Water Cabins",
];

const featuredBusinesses = featuredNames
  .map((name) => allBusinessDirectoryListings.find((business) => business.name === name))
  .filter((business): business is GlenwoodBusiness => Boolean(business));

const regularBusinesses = allBusinessDirectoryListings.filter(
  (business) => !featuredNames.includes(business.name)
);

export const metadata = {
  title:
    "Local Businesses in Glenwood Arkansas | Restaurants, Shops, Services & Visitor Stops",
  description:
    "Find Glenwood, Arkansas local businesses including restaurants, cabins, shops, supplies, outdoor businesses, local services, Caddo River stops, and visitor-friendly places.",
  alternates: {
    canonical: "/local-business",
  },
};

function getBusinessHref(business: GlenwoodBusiness) {
  return business.href ?? business.website ?? business.directions ?? "#";
}

function isExternalHref(href: string) {
  return href.startsWith("http");
}

function BusinessCard({ business, featured = false }: { business: GlenwoodBusiness; featured?: boolean }) {
  const href = getBusinessHref(business);
  const external = isExternalHref(href);

  const cardInner = (
    <>
      <div className="relative h-48 overflow-hidden bg-[#e8e1d5]">
        <img
          src={business.image}
          alt={business.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
          {featured ? "Our Pick" : "Basic Listing"}
        </span>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          {business.category} • {business.type}
        </p>

        <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
          {business.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
          {business.description}
        </p>

        {business.address && (
          <p className="mt-4 text-sm font-semibold text-[color:var(--color-text)]">
            Location: {business.address}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          {business.phone && (
            <span className="rounded-full bg-[rgba(63,92,74,0.1)] px-4 py-2 text-sm font-bold text-[color:var(--color-accent)]">
              {business.phone}
            </span>
          )}

          <span className="rounded-full bg-[rgba(139,94,52,0.1)] px-4 py-2 text-sm font-bold text-[color:var(--color-accent)]">
            View details →
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {featured ? (
        <TrackedFeatureLink
          href={href}
          business={business.name}
          city="Glenwood"
          page="/local-business"
          placement="helpful-starting-points"
          action="view-details"
          placementType="editorial"
          newTab={external}
        >
          {cardInner}
        </TrackedFeatureLink>
      ) : (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {cardInner}
        </a>
      )}
    </article>
  );
}

export default function LocalBusinessesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Local Businesses in Glenwood, Arkansas",
            description:
              "Restaurants, cabins, shops, supplies, outdoor businesses, local services, and visitor stops in Glenwood, Arkansas.",
            itemListElement: allBusinessDirectoryListings.map((business, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": business.category === "Restaurant" ? "Restaurant" : "LocalBusiness",
                name: business.name,
                description: business.description,
                address: business.address,
                telephone: business.phone,
                url: business.website ?? business.directions ?? business.href,
              },
            })),
          }),
        }}
      />

      <section className="relative overflow-hidden border-b border-black/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/glenwood/oldtown.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="relative z-10 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl rounded-2xl bg-black/60 p-7 text-white shadow-2xl backdrop-blur-md md:p-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] !text-white/75">
                Local Business Guide
              </p>

              <h1 className="text-4xl font-semibold leading-tight drop-shadow-xl md:text-6xl">
                Local Businesses in Glenwood, Arkansas
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/95 drop-shadow-md md:text-xl">
                Find places to eat, shop, stay, and explore around Glenwood, from restaurants and coffee stops to cabins, river outfitters, shops, supplies, services, and Caddo River area businesses.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#categories" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                  Browse Categories
                </Link>

                <Link href="/contact" className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Suggest a Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Business Categories
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              Find what you need around Glenwood.
            </h2>

            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
              Start with the kind of stop you need, then keep planning from there. Restaurants, cabins, shops, outdoor businesses, local services, and visitor-friendly places are grouped so it is easier to find the right stop before a river day, cabin stay, lake trip, or drive through town.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {card.label}
                </p>

                <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-text)]">
                  {card.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {card.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Helpful Starting Points
            </p>

            <h2>A few useful Glenwood stops to start with.</h2>
            <p>
              These local spots give visitors a quick place to start when planning food, shopping, stays, outdoor time, and simple stops around Glenwood.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.name} business={business} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Full Directory
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              More Glenwood area businesses.
            </h2>

            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
              Browse restaurants, coffee shops, cabins, lodging, outdoor businesses, shops, supplies, services, and visitor-friendly stops around Glenwood and the surrounding area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularBusinesses.map((business) => (
              <BusinessCard key={`${business.name}-${business.category}`} business={business} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-5 rounded-[2rem] border border-black/10 bg-white/40 p-6 shadow-sm md:grid-cols-3 md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Plan Around The River
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Start with the main trip.</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                Most Glenwood visits are built around the Caddo River, Lake Greeson, cabins, food, and a few practical stops. Start with the river and then add what fits the day.
              </p>
              <Link href="/caddo-river" className="mt-4 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                Open the Caddo River guide →
              </Link>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Stock Up Before You Go
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Food, supplies, and quick stops
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                Grab groceries, drinks, snacks, sunscreen, flowers, parts, or simple supplies before heading toward the river, lake, campground, or cabin.
              </p>
              <Link href="/visitor-essentials-glenwood-ar" className="mt-4 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                View visitor essentials →
              </Link>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Keep Nearby Guides Handy
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Jump to the next page.</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                Restaurants, stays, shops, outdoor stops, events, and trip tools all connect from here so visitors can keep planning without hunting around.
              </p>
              <Link href="/plan-my-day" className="mt-4 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                Plan a Glenwood day →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EventsCTA />
      <NearbyAmitySection />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-[#2d2a26] p-8 text-center text-white md:p-10">
          <h2 className="mb-4 text-3xl font-semibold !text-white">
            Know a Glenwood area business?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl !text-white/75">
            If there is a restaurant, cabin, shop, attraction, service business, outdoor business, or local stop visitors should know about, send it our way so we can keep the Glenwood guide useful.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Send a Suggestion
          </Link>
        </div>
      </section>
    </main>
  );
}
