import Link from "next/link";

const updates = [
  {
    label: "Day-trip guide",
    title: "Collier Springs & Little Missouri Falls",
    text: "This back-road guide covers the route from Glenwood to Collier Springs and Little Missouri Falls, including picnic planning, forest-road notes, the short waterfall walk, and what to bring before leaving town.",
    href: "/collier-springs-little-missouri-falls-day-trip",
  },
  {
    label: "Fishing guide",
    title: "Fishing Near Glenwood",
    text: "This fishing guide compares John Benjamin Pond, the Caddo River, and Lake Greeson so visitors can pick the right kind of water for a quick family stop, a river day, or a full lake trip.",
    href: "/fishing-near-glenwood-arkansas",
  },
  {
    label: "Business guide",
    title: "Glenwood Shops & Supplies",
    text: "This shopping and supply guide helps visitors find gifts, groceries, hardware, flowers, coffee, sweets, auto parts, and practical stops before a river day or cabin stay.",
    href: "/glenwood-ar-shops-supplies",
  },
  {
    label: "Business guide",
    title: "Glenwood Outdoor Businesses",
    text: "This outdoor business guide brings together Caddo River outfitters, canoe and kayak rentals, golf, UTV rentals, Lake Greeson stops, and family-friendly outdoor places.",
    href: "/glenwood-outdoor-businesses",
  },
];

const communityUpdateLinks = [
  { href: "/search", label: "Search the Guide" },
  { href: "/collier-springs-little-missouri-falls-day-trip", label: "Collier Springs & Little Missouri Falls" },
  { href: "/fishing-near-glenwood-arkansas", label: "Fishing Near Glenwood" },
  { href: "/local-business", label: "Local Business Directory" },
  { href: "/glenwood-ar-shops-supplies", label: "Shops & Supplies" },
  { href: "/glenwood-outdoor-businesses", label: "Outdoor Businesses" },
  { href: "/glenwood-local-services", label: "Local Services" },
  { href: "/glenwood-ar-restaurants", label: "Restaurant Guide" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Stays" },
  { href: "/events", label: "Events" },
];

export default function RecentUpdates() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="rounded-[2rem] border border-black/10 bg-white/40 p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Recent updates
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Recently checked Glenwood guides.
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)]">
                We’ve been checking local business details, outdoor planning links, river information, lodging, events, and visitor pages to keep the Glenwood guide useful and current.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/local-business"
                className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Browse Local Businesses
              </Link>

              <Link
                href="/search"
                className="rounded-full border border-[color:var(--color-accent)] px-5 py-3 text-sm font-bold text-[color:var(--color-accent)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
              >
                Search the Guide
              </Link>
            </div>
          </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update) => (
              <Link
                key={update.title}
                href={update.href}
                className="group rounded-[1.4rem] border border-black/10 bg-[color:var(--color-bg)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {update.label}
                </p>

                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {update.title}
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {update.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                  View update →
                </span>
              </Link>
            ))}
          </div>

          <article className="mt-4 rounded-[1.4rem] border border-black/10 bg-[color:var(--color-bg)] p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Guide shortcuts
            </p>

            <h3 className="mb-3 text-2xl font-semibold leading-tight">
              Find Glenwood pages faster
            </h3>

            <p className="text-sm leading-7 text-[color:var(--color-muted)]">
              Visitors can search across the guide or jump straight into popular planning pages for local businesses, shops, outdoor stops, services, restaurants, cabins, events, and things to do.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {communityUpdateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs font-bold text-[color:var(--color-accent)] transition hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}