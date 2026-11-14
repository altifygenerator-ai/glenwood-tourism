import Link from "next/link";

const localReads = [
  {
    label: "Day trip",
    title: "Collier Springs & Little Missouri Falls",
    text: "A back-road outing with a short waterfall walk. What to know before you head into the forest.",
    href: "/collier-springs-little-missouri-falls-day-trip",
  },
  {
    label: "On the water",
    title: "Fishing Near Glenwood",
    text: "Compare John Benjamin Pond, the Caddo and Lake Greeson before choosing your fishing spot.",
    href: "/fishing-near-glenwood-arkansas",
  },
  {
    label: "Around town",
    title: "Shops & Supplies",
    text: "Grocery stops, hardware, local gifts and other essentials for your time in Glenwood.",
    href: "/glenwood-ar-shops-supplies",
  },
];

const quickLinks = [
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Cabins & stays" },
  { href: "/glenwood-outdoor-businesses", label: "Outdoor businesses" },
  { href: "/events", label: "Local events" },
  { href: "/local-business", label: "Local businesses" },
];

export default function RecentUpdates() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
              Around Glenwood
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-4xl">
              A little more to explore.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--color-muted)]">
              River trips are only part of the story. Here are a few useful stops nearby.
            </p>
          </div>
          <Link href="/search"
            className="text-sm font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
            Search the guide
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {localReads.map((item) => (
            <Link key={item.href} href={item.href}
              className="group flex h-full flex-col rounded-[18px] border border-black/10 bg-[color:var(--bg-card)] p-5 transition hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
                {item.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-[color:var(--color-text)]">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--color-muted)]">{item.text}</p>
              <span className="mt-5 text-sm font-semibold text-[color:var(--color-accent)] group-hover:underline">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-5"
          aria-label="More Glenwood travel guides">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-sm font-medium text-[color:var(--color-accent)] underline-offset-4 hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
