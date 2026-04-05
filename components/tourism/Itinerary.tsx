export default function Itinerary({ items }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item: any, i: number) => (
        <div key={i} className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}