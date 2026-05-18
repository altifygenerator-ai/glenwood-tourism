import Image from "next/image";

export default function AttractionGrid({ items }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((a: any, i: number) => (
        <article
          key={a.title || i}
          className="group overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={a.image}
              alt={a.alt || a.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                Glenwood Area
              </p>

              <h3 className="text-2xl font-semibold leading-tight text-white">
                {a.title}
              </h3>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm leading-6 text-[color:var(--color-muted)]">
              {a.description}
            </p>

            <span className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-accent)] transition group-hover:translate-x-1">
              Explore this spot →
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}