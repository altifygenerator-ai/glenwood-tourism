export default function FAQ({ items }: any) {
  return (
    <div className="max-w-3xl space-y-6">
      {items.map((faq: any, i: number) => (
        <div key={i}>
          <h3 className="font-semibold text-lg">
            {faq.question}
          </h3>
          <p className="text-gray-600 mt-2">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  )
}