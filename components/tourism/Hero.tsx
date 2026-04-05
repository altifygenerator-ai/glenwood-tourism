import Image from "next/image";

export default function Hero({ data }: any) {
  return (
    <section className="relative h-[75vh] min-h-[560px] overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="px-6 pb-12">
          <div className="max-w-2xl rounded-2xl bg-black/60 p-8 shadow-2xl backdrop-blur-md text-white">
            <h1 className="text-4xl font-semibold drop-shadow-xl md:text-6xl">
              {data.title}
            </h1>

            <p className="mt-4 text-lg text-white/95 drop-shadow-md">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}