export default function Itinerary({ items }: any) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item: any, i: number) => (
        <article
          key={item.title || i}
          className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-sm font-semibold text-white">
              {i + 1}
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              Trip Idea
            </p>
          </div>

          <h3 className="text-2xl font-semibold leading-tight">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}