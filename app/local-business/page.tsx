export default function LocalBusinessesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Local Businesses in Glenwood, Arkansas
      </h1>

      <p className="text-lg mb-12 text-[color:var(--color-muted)] max-w-2xl">
        Find places to eat, shop, and explore in Glenwood — from local restaurants and cafes to outdoor outfitters and lodging near the Caddo River.
      </p>

      {/* Business grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Restaurant Example */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Caddo Cafe</h3>
          <p className="text-sm text-[color:var(--color-muted)] mb-4">
            A local favorite for breakfast and comfort food, serving visitors and residents in downtown Glenwood.
          </p>
          <a href="#" className="text-sm text-[color:var(--color-accent)] font-medium">
            View Details →
          </a>
        </div>

        {/* Outdoor Business Example */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Caddo River Canoe Rental</h3>
          <p className="text-sm text-[color:var(--color-muted)] mb-4">
            Rent kayaks and canoes for a day on the river, one of Glenwood’s most popular outdoor experiences.
          </p>
          <a href="#" className="text-sm text-[color:var(--color-accent)] font-medium">
            View Details →
          </a>
        </div>

        {/* Lodging Example */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Ouachita Mountain Inn</h3>
          <p className="text-sm text-[color:var(--color-muted)] mb-4">
            Comfortable lodging with easy access to Glenwood’s attractions, perfect for weekend stays and river trips.
          </p>
          <a href="#" className="text-sm text-[color:var(--color-accent)] font-medium">
            View Details →
          </a>
        </div>

      </div>
    </main>
  )
}