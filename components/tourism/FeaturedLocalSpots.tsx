import Image from "next/image";
import Link from "next/link";

export default function FeaturedLocalSpots({ items }: { items: any[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
            Eat & Stay
          </p>

          <h2 className="text-3xl font-semibold">
            Local Restaurants, Cabins & Places to Stay
          </h2>

          <p className="mt-3 text-[color:var(--color-muted)] max-w-2xl">
            Find local places to eat and stay while visiting Glenwood, the Caddo
            River, Lake Greeson, and nearby outdoor attractions.
          </p>
        </div>

        <div className="hidden md:flex gap-3">
          <Link href="/glenwood-ar-restaurants" className="text-sm underline">
            Restaurants
          </Link>
          <Link href="/glenwood-ar-cabins" className="text-sm underline">
            Cabins
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((spot) => (
          <Link
            key={spot.name}
            href={spot.href}
            className="group rounded-xl overflow-hidden bg-[color:var(--bg-card)] shadow hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={spot.image}
                alt={`${spot.name} in Glenwood Arkansas`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
                {spot.type}
              </p>

              <h3 className="text-xl font-semibold">
                {spot.name}
              </h3>

              <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                {spot.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}