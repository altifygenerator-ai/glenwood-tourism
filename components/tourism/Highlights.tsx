export default function Highlights({ items }: any) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((item: any, i: number) => (
        <div key={i} className="border rounded-xl p-4">
          <p className="text-sm font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  )
}