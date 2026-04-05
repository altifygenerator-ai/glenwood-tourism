import Image from "next/image";
import { glenwoodHistory } from "@/data/glenwood";

export const metadata = {
  title: "History of Glenwood Arkansas | Local Heritage & Story",
  description:
    "Discover the history of Glenwood, Arkansas — from its railroad roots to its scenic Ouachita Mountain setting and outdoor culture.",
  keywords: [
    "Glenwood Arkansas history",
    "Pike County Arkansas history",
    "Glenwood AR tourism",
    "things to do in Glenwood Arkansas",
    "Arkansas small towns",
  ],
};

export default function HistoryPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Glenwood, Arkansas",
            description:
              "A scenic southwest Arkansas town known for its outdoor access, small-town character, and nearby attractions.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Glenwood",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center dark-section">
        <Image
          src={glenwoodHistory.hero.image}
          alt="Glenwood Arkansas history"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            {glenwoodHistory.hero.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            {glenwoodHistory.hero.description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {glenwoodHistory.sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGES */}
            <div className="space-y-4">
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[120px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${section.title} ${i + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}