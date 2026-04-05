export default function LocalBusinessesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Local Businesses in Amity, Arkansas
      </h1>

      <p className="text-lg mb-12 text-[color:var(--color-muted)] max-w-2xl">
        Discover some of the local spots that make Amity special — from food and shopping to services and experiences.
      </p>

      {/* Business grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Example card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Example Cafe</h3>
          <p className="text-sm text-[color:var(--color-muted)] mb-4">
            Local coffee and breakfast spot in the heart of Amity.
          </p>
          <a href="#" className="text-sm text-[color:var(--color-accent)] font-medium">
            View Details →
          </a>
        </div>
      </div>
    </main>
  )
}