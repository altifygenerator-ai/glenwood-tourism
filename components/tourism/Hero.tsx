import Image from "next/image";
import Link from "next/link";

const planningLinks = [
  {
    label: "Restaurants",
    href: "/glenwood-ar-restaurants",
  },
  {
    label: "Cabins & Stays",
    href: "/glenwood-ar-cabins",
  },
  {
    label: "Things To Do",
    href: "/explore",
  },
  {
    label: "Local Events",
    href: "/events",
  },
];

export default function Hero({ data }: any) {
  return (
    <section className="relative h-[78vh] min-h-[600px] overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-10 md:px-10 md:pb-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl rounded-2xl bg-black/60 p-7 text-white shadow-2xl backdrop-blur-md md:p-10">
              {data.eyebrow && (
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] !text-white/75">
                  {data.eyebrow}
                </p>
              )}

              <h1 className="text-4xl font-semibold leading-tight drop-shadow-xl md:text-6xl">
                {data.title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/95 drop-shadow-md md:text-xl">
                {data.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/events"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  View Events
                </Link>

                <Link
                  href="/glenwood-ar-restaurants"
                  className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Restaurants
                </Link>

                <Link
                  href="/glenwood-ar-cabins"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Cabins & Stays
                </Link>
              </div>

              <div className="mt-7 border-t border-white/15 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] !text-white/60">
                  Start Planning
                </p>

                <div className="flex flex-wrap gap-2">
                  {planningLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white hover:text-black"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}