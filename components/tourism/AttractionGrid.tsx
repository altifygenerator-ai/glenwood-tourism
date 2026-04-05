import Image from "next/image"

export default function AttractionGrid({ items }: any) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((a: any, i: number) => (
        <div key={i} className="border rounded-xl overflow-hidden">
          <div className="relative h-48">
            <Image src={a.image} alt={a.alt} fill className="object-cover" />
          </div>

          <div className="p-4">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm mt-2 text-gray-600">
              {a.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}