import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "At Living Water Cabins Near Glenwood and Mount Ida, Arkansas | Waterfront Cabins & Family Lodge",
  description:
    "Explore At Living Water Cabins near Glenwood and Mount Ida, Arkansas, featuring creekside cabins, a family lodge, full kitchens, peaceful outdoor space, and easy access to the Caddo River, Lake Greeson, Mount Ida, and the Ouachita region.",
  alternates: {
    canonical: "/at-living-water-cabins",
  },
};

const cabinImages = [
  {
    src: "/images/glenwood/cabins/at-living-water-cabins.jpg",
    alt: "At Living Water Cabins near Glenwood and Mount Ida Arkansas",
  },
  {
    src: "/images/glenwood/cabins/cabin-porch.jpg",
    alt: "Cabin porch at At Living Water Cabins",
  },
  {
    src: "/images/glenwood/cabins/cabin-exterior.jpg",
    alt: "Creekside setting at At Living Water Cabins",
  },
  {
    src: "/images/glenwood/cabins/cabin-view.jpg",
    alt: "Cabin view at At Living Water Cabins",
  },
];

const cabinOptions = [

  {
    title: "Love Cabin",
    text: "A cozy cabin option for a quiet couple’s stay, small family visit, or slower Arkansas getaway close to the outdoors.",
  },
  {
    title: "Faith Cabin",
    text: "A comfortable creekside cabin setup with the practical pieces visitors need for a simple, peaceful stay.",
  },
  {
    title: "Hope Cabin",
    text: "A clean, relaxed cabin option for guests wanting a slower weekend between Glenwood and Mount Ida.",
  },
  {
    title: "Peace Cabin",
    text: "A quiet cabin stay built around rest, comfort, and easy access to nearby outdoor trips.",
  },
];

const highlights = [
  "Waterfront creekside setting",
  
  "Full kitchens and comfortable cabin layouts",
  "Quiet Ouachita Mountain location",
  "Easy drive to Glenwood, Mount Ida, and Lake Greeson",
  "Good base for Caddo River trips and outdoor weekends",
];

const nearbyLinks = [
  {
    title: "Caddo River",
    text: "Plan river time, floating, fishing, swimming, and outdoor stops around Glenwood.",
    href: "/caddo-river",
  },
  {
    title: "Glenwood Restaurants",
    text: "Find local food, coffee, pizza, seafood, Mexican food, and quick meals before or after your cabin stay.",
    href: "/glenwood-ar-restaurants",
  },
  {
    title: "Things To Do",
    text: "Explore Lake Greeson, Crater of Diamonds, Mount Ida, Hot Springs, and nearby outdoor stops.",
    href: "/explore",
  },
  {
    title: "This Weekend",
    text: "Check local events, music, markets, and community happenings before you visit.",
    href: "/this-weekend",
  },
];

const eyebrowClass =
  "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]";

const darkEyebrowClass =
  "mb-4 text-sm font-semibold uppercase tracking-[0.2em] !text-white/85";

const sectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl";

const smallSectionTitleClass =
  "text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl";

const bodyTextClass = "leading-relaxed !text-[color:var(--color-muted)]";

const strongBodyTextClass =
  "text-lg leading-relaxed !text-[color:var(--color-muted)]";

const cardClass =
  "rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const outlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white";

const lightButtonClass =
  "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

const darkOutlineButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20";

export default function AtLivingWaterCabinsFeaturePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "At Living Water Cabins",
            description:
              "Waterfront cabins and a family lodge near Glenwood and Mount Ida, Arkansas, with creekside cabin stays, full kitchens, and access to the Caddo River, Lake Greeson, and the Ouachita region.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "136 Living Water Dr.",
              addressLocality: "Norman",
              addressRegion: "AR",
              postalCode: "71960",
              addressCountry: "US",
            },
            telephone: "318-461-2650",
            url: "https://atlivingwatercabins.com/",
            image: cabinImages.map((image) => image.src),
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[color:var(--color-text)] text-white">
        <Image
          src="/images/glenwood/cabins/at-living-water-cabins.jpg"
          alt="At Living Water Cabins near Glenwood and Mount Ida Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className={darkEyebrowClass}>Featured Cabin Partner</p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              At Living Water Cabins near Glenwood and Mount Ida
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed !text-white/90">
              A peaceful waterfront cabin stay in Norman, Arkansas,
              close to Glenwood, Mount Ida, the Caddo River, Lake Greeson, and
              the outdoor beauty of the Ouachita region.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://atlivingwatercabins.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={lightButtonClass}
              >
                Book Direct
              </a>

              <a href="tel:9037829184" className={darkOutlineButtonClass}>
                Call 318-461-2650
              </a>

              <Link href="/glenwood-ar-cabins" className={darkOutlineButtonClass}>
                Back to Cabins
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className={eyebrowClass}>Why Stay Here</p>

            <h2 className={sectionTitleClass}>
              A quiet cabin base between Glenwood, Mount Ida, and the outdoors.
            </h2>
          </div>

          <div className={`space-y-4 ${strongBodyTextClass}`}>
            <p>
              At Living Water Cabins works well for visitors who want a peaceful
              place to stay without being far from the outdoor reasons people
              come to this part of Arkansas. Guests can stay close to creekside
              scenery, cabin comfort, and easy drives toward Glenwood, Mount Ida,
              Lake Greeson, and the Caddo River.
            </p>

            <p>
              The property includes four cozy cabins named
              Love, Faith, Hope, and Peace. It is a strong fit for families,
              couples, small groups, quiet weekends, and travelers who want a
              clean place to land after a day outside.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className={`${cardClass} p-5`}>
              <p className="text-sm font-semibold leading-6 !text-[color:var(--color-text)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className={eyebrowClass}>Cabins & Lodge</p>

          <h2 className={smallSectionTitleClass}>
            Choose a cabin and relax in the country.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cabinOptions.map((item) => (
            <div key={item.title} className={`${cardClass} p-6`}>
              <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className={`mt-3 ${bodyTextClass}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <p className={eyebrowClass}>Photo Preview</p>

            <h2 className={smallSectionTitleClass}>
              A look at the cabin setting.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src={cabinImages[0].src}
                alt={cabinImages[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {cabinImages.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="relative min-h-[130px] overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--bg-card)] shadow-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm !text-[color:var(--color-muted)]">
            A relaxed cabin setting with a quiet creekside location and comfortable spaces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className={eyebrowClass}>Plan Around The Stay</p>

            <h2 className={smallSectionTitleClass}>
              Make At Living Water Cabins your home base.
            </h2>
          </div>

          <p className={bodyTextClass}>
            From this area, visitors can build a trip around the Caddo River,
            Lake Greeson, Mount Ida, Glenwood restaurants, crystal country,
            small-town stops, and scenic Ouachita drives.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {nearbyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h3>

              <p className={`mt-3 ${bodyTextClass}`}>{item.text}</p>

              <span className="mt-auto inline-flex pt-5 font-semibold text-[color:var(--color-accent)] transition group-hover:opacity-75">
                View guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-[color:var(--color-text)] p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className={darkEyebrowClass}>Book Direct</p>

              <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Ready to plan a quiet Arkansas cabin stay?
              </h2>

              <p className="max-w-3xl leading-relaxed !text-white/85">
                Visit At Living Water Cabins directly to check current cabin
                availability, booking options, and the most
                up-to-date property information.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://atlivingwatercabins.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={lightButtonClass}
              >
                Visit Website
              </a>

              <a href="tel:3184612650" className={darkOutlineButtonClass}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}