export default function Highlights({ items }: any) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item: any, i: number) => (
        <div
          key={item.label || i}
          className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

          <p className="text-sm font-semibold leading-relaxed text-[color:var(--color-text)]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}