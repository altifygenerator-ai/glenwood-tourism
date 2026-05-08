import Image from "next/image";
import Link from "next/link";

export default function FeaturedLocalSpots({ items }: { items: any[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
            Explore Glenwood
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Featured Places Around Glenwood
          </h2>

          <p className="mt-4 text-[color:var(--color-muted)] leading-7">
            Discover local restaurants, cabins, campgrounds, and places to stay
            near the Caddo River, Lake Greeson, and some of the most popular
            outdoor spots around Glenwood, Arkansas.
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <Link
            href="/glenwood-ar-restaurants"
            className="underline underline-offset-4 hover:opacity-70 transition"
          >
            View Restaurants
          </Link>

          <Link
            href="/glenwood-ar-cabins"
            className="underline underline-offset-4 hover:opacity-70 transition"
          >
            View Cabins
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((spot) => (
          <Link
            key={spot.name}
            href={spot.href}
            className="group rounded-2xl overflow-hidden bg-[color:var(--bg-card)] border border-white/5 shadow-sm hover:shadow-2xl transition duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              
              <Image
                src={spot.image}
                alt={`${spot.name} in Glenwood Arkansas`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {spot.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[color:var(--color-accent)] text-white text-[11px] uppercase tracking-wide px-3 py-1 rounded-full">
                    {spot.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)] mb-2">
                {spot.type}
              </p>

              <h3 className="text-xl font-semibold group-hover:text-[color:var(--color-accent)] transition">
                {spot.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                {spot.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}