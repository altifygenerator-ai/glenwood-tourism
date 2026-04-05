

export default function Intro({ data }: any) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold">
        {data.heading}
      </h2>
      <p className="mt-4 text-gray-700 leading-7 whitespace-pre-line">
        {data.text}
      </p>
    </div>
  )
}