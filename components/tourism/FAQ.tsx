export default function FAQ({ items }: any) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((faq: any, i: number) => (
        <article
          key={faq.question || i}
          className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
        >
          <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

          <h3 className="text-xl font-semibold leading-tight">
            {faq.question}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            {faq.answer}
          </p>
        </article>
      ))}
    </div>
  );
}