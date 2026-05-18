import Image from "next/image";
import Link from "next/link";

type FeaturedSpot = {
  name: string;
  type?: string;
  badge?: string;
  description?: string;
  image: string;
  href: string;
};

export default function FeaturedLocalSpots({
  items,
}: {
  items: FeaturedSpot[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Explore Glenwood
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Featured Places Around Glenwood
          </h2>

          <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
            Discover local restaurants, cabins, campgrounds, and places to stay
            near the Caddo River, Lake Greeson, and some of the most popular
            outdoor spots around Glenwood, Arkansas.
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <Link
            href="/glenwood-ar-restaurants"
            className="underline underline-offset-4 transition hover:opacity-70"
          >
            View Restaurants
          </Link>

          <Link
            href="/glenwood-ar-cabins"
            className="underline underline-offset-4 transition hover:opacity-70"
          >
            View Cabins
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((spot) => {
          const isAdvertising = spot.type === "Advertising";

          return (
            <Link
              key={spot.name}
              href={spot.href}
              className={
                isAdvertising
                  ? "group flex min-h-[360px] flex-col justify-between rounded-2xl border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  : "group overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              }
            >
              {isAdvertising ? (
                <>
                  <div>
                    {spot.badge && (
                      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-white/70">
                        {spot.badge}
                      </p>
                    )}

                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {spot.name}
                    </h3>

                    {spot.description && (
                      <p className="mt-4 text-sm leading-6 text-white/80">
                        {spot.description}
                      </p>
                    )}
                  </div>

                  <span className="mt-8 text-sm font-semibold text-white">
                    Get listed →
                  </span>
                </>
              ) : (
                <>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={`${spot.name} in Glenwood Arkansas`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {spot.badge && (
                        <span className="rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[11px] uppercase tracking-wide text-white">
                          {spot.badge}
                        </span>
                      )}

                      {spot.type && (
                        <span className="rounded-full bg-black/45 px-3 py-1 text-[11px] uppercase tracking-wide text-white">
                          {spot.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold transition group-hover:text-[color:var(--color-accent)]">
                      {spot.name}
                    </h3>

                    {spot.description && (
                      <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                        {spot.description}
                      </p>
                    )}

                    <span className="mt-4 inline-block text-sm font-semibold text-[color:var(--color-accent)]">
                      View details →
                    </span>
                  </div>
                </>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}