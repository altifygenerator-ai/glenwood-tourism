import Link from "next/link";
import TrackedFeatureLink from "@/components/TrackedFeatureLink";
import type { GlenwoodBusiness } from "@/data/glenwoodBusinesses";

type GuideLink = {
  label: string;
  href: string;
};

type InfoCard = {
  title: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type GlenwoodBusinessDirectoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  primaryCta?: GuideLink;
  secondaryCta?: GuideLink;
  introEyebrow: string;
  introTitle: string;
  introText: string;
  introNote?: string;
  businesses: GlenwoodBusiness[];
  featuredNames?: string[];
  featuredEyebrow: string;
  featuredTitle: string;
  featuredText: string;
  basicEyebrow: string;
  basicTitle: string;
  basicText: string;
  infoEyebrow: string;
  infoTitle: string;
  infoText: string;
  infoCards: InfoCard[];
  guideLinks: GuideLink[];
  relatedLinks: GuideLink[];
  faqs: FAQ[];
  schemaName: string;
  schemaDescription: string;
  trackingPage?: string;
  ctaTitle?: string;
  ctaText?: string;
};

function getBusinessHref(business: GlenwoodBusiness) {
  return business.href ?? business.website ?? business.directions ?? "#";
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

function getListingBadge(business: GlenwoodBusiness, featuredNames: string[] = []) {
  if (featuredNames.includes(business.name)) return "Our Pick";
  return "Basic Listing";
}

function DirectoryCard({
  business,
  index,
  featuredNames,
  trackingPage,
}: {
  business: GlenwoodBusiness;
  index?: number;
  featuredNames?: string[];
  trackingPage?: string;
}) {
  const href = getBusinessHref(business);
  const external = isExternalHref(href);
  const badge = getListingBadge(business, featuredNames);
  const isFeatured = featuredNames?.includes(business.name) ?? false;

  const cardInner = (
    <>
      <div className="relative h-48 overflow-hidden bg-[#e8e1d5]">
        <img
          src={business.image}
          alt={business.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
          {badge}
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[color:var(--color-accent)] backdrop-blur">
          {business.category}
        </div>
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          {business.type}
        </p>

        <h3 className="text-xl font-semibold leading-tight text-[color:var(--color-text)]">
          {index ? `${index}. ` : ""}
          {business.name}
        </h3>

        <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
          {business.description}
        </p>

        {business.address && (
          <p className="mt-4 text-sm font-semibold text-[color:var(--color-text)]">
            📍 {business.address}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          {business.phone && (
            <span className="rounded-full bg-[rgba(63,92,74,0.1)] px-4 py-2 text-sm font-bold text-[color:var(--color-accent)]">
              {business.phone}
            </span>
          )}

          <span className="rounded-full bg-[rgba(139,94,52,0.1)] px-4 py-2 text-sm font-bold text-[color:var(--color-accent)]">
            View details →
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {isFeatured && trackingPage ? (
        <TrackedFeatureLink
          href={href}
          business={business.name}
          city="Glenwood"
          page={trackingPage}
          placement="helpful-starting-points"
          action="view-details"
          placementType="editorial"
          newTab={external}
        >
          {cardInner}
        </TrackedFeatureLink>
      ) : (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {cardInner}
        </a>
      )}
    </article>
  );
}

export default function GlenwoodBusinessDirectoryPage({
  eyebrow,
  title,
  description,
  heroImage,
  primaryCta,
  secondaryCta,
  introEyebrow,
  introTitle,
  introText,
  introNote,
  businesses,
  featuredNames = [],
  featuredEyebrow,
  featuredTitle,
  featuredText,
  basicEyebrow,
  basicTitle,
  basicText,
  infoEyebrow,
  infoTitle,
  infoText,
  infoCards,
  guideLinks,
  relatedLinks,
  faqs,
  schemaName,
  schemaDescription,
  trackingPage,
  ctaTitle = "Know a Glenwood spot visitors should find?",
  ctaText =
    "Send over local businesses, corrections, helpful stops, or places that should be added to the Glenwood guide so visitors can plan better trips.",
}: GlenwoodBusinessDirectoryPageProps) {
  const featuredBusinesses = featuredNames
    .map((name) => businesses.find((business) => business.name === name))
    .filter((business): business is GlenwoodBusiness => Boolean(business));

  const featuredSet = new Set(featuredBusinesses.map((business) => business.name));
  const fallbackFeatured = featuredBusinesses.length ? featuredBusinesses : businesses.slice(0, 3);
  const standardBusinesses = businesses.filter((business) => !featuredSet.has(business.name));
  const mainBusiness = fallbackFeatured[0];
  const sideBusinesses = fallbackFeatured.slice(1, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: schemaName,
              description: schemaDescription,
              itemListElement: businesses.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": place.category === "Restaurant" ? "Restaurant" : "LocalBusiness",
                  name: place.name,
                  description: place.description,
                  address: place.address,
                  telephone: place.phone,
                  url: place.website ?? place.directions ?? place.href,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      <section className="relative min-h-[620px] overflow-hidden border-b border-black/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[620px] items-end px-6 py-12 md:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-3xl rounded-2xl bg-black/60 p-7 text-white shadow-2xl backdrop-blur-md md:p-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] !text-white/75">
                {eyebrow}
              </p>

              <h1 className="text-4xl font-semibold leading-tight drop-shadow-xl md:text-6xl">
                {title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/95 drop-shadow-md md:text-xl">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    {primaryCta.label}
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-white/40 p-7 shadow-sm md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                {introEyebrow}
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                {introTitle}
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[color:var(--color-text)]">
                {introText}
              </p>

              {introNote && (
                <p className="leading-relaxed text-[color:var(--color-muted)]">
                  {introNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-black/10 bg-[color:var(--bg-card)] px-5 py-3 text-center text-sm font-bold text-[color:var(--color-accent)] transition hover:-translate-y-1 hover:shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {mainBusiness && (
        <section className="py-16">
          <div className="container">
            <div className="section-heading">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                {featuredEyebrow}
              </p>

              <h2>{featuredTitle}</h2>
              <p>{featuredText}</p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <TrackedFeatureLink
                href={getBusinessHref(mainBusiness)}
                business={mainBusiness.name}
                city="Glenwood"
                page={trackingPage ?? "unknown"}
                placement="helpful-starting-points-main"
                action="view-details"
                placementType="editorial"
                newTab={isExternalHref(getBusinessHref(mainBusiness))}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={mainBusiness.image}
                    alt={mainBusiness.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-black/75 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                    {getListingBadge(mainBusiness, featuredNames)}
                  </div>
                </div>

                <div className="p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {mainBusiness.type}
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)]">
                    {mainBusiness.name}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {mainBusiness.description}
                  </p>

                  {mainBusiness.address && (
                    <p className="mt-4 text-sm font-semibold text-[color:var(--color-text)]">
                      📍 {mainBusiness.address}
                    </p>
                  )}

                  <span className="mt-5 inline-block font-bold text-[color:var(--color-accent)]">
                    View business →
                  </span>
                </div>
              </TrackedFeatureLink>

              <div className="grid gap-6">
                {sideBusinesses.map((business) => (
                  <DirectoryCard
                    key={business.name}
                    business={business}
                    featuredNames={featuredNames}
                    trackingPage={trackingPage}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              {infoEyebrow}
            </p>

            <h2>{infoTitle}</h2>
            <p>{infoText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {standardBusinesses.length > 0 && (
        <section id="listings" className="py-16">
          <div className="container">
            <div className="section-heading">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                {basicEyebrow}
              </p>

              <h2>{basicTitle}</h2>
              <p>{basicText}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {standardBusinesses.map((business, index) => (
                <DirectoryCard
                  key={`${business.name}-${business.href ?? business.website ?? index}`}
                  business={business}
                  index={index + 1}
                  featuredNames={featuredNames}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#2d2a26] p-8 text-white shadow-2xl md:p-12">
            <div className="absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-white/10" />

            <div className="relative z-10 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] !text-white/75">
                Help Improve The Guide
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold leading-tight !text-white md:text-5xl">
                {ctaTitle}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed !text-white/85">
                {ctaText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[color:var(--color-text)] shadow-md transition hover:opacity-90"
                >
                  Suggest a Business or Update
                </Link>

                <Link
                  href="/local-business"
                  className="inline-flex rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  View Local Business Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-8 text-center shadow-sm md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Keep Planning
            </p>

            <h2 className="text-4xl font-semibold text-[color:var(--color-text)]">
              Related Glenwood guides.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[color:var(--color-muted)]">
              Keep going with nearby guides for restaurants, places to stay, events, river planning, visitor basics, and things to do around Glenwood.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
