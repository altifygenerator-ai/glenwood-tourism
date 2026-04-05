type Props = {
  params: { slug: string }
}

export default function BusinessPage({ params }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-4 capitalize">
        {params.slug.replace("-", " ")}
      </h1>

      <p className="text-lg text-[color:var(--color-muted)] mb-6">
        Business description goes here.
      </p>

      <div className="space-y-2">
        <p><strong>Phone:</strong> (555) 555-5555</p>
        <p><strong>Address:</strong> Amity, Arkansas</p>
      </div>
    </main>
  )
}