const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Things To Do" },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/history", label: "Glenwood History" },
];

const visitorLinks = [
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Places to Stay" },
  { href: "/local-business", label: "Local Businesses" },
];

const eventLinks = [
  { href: "/events", label: "Events" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/submit-event", label: "Submit an Event" },
];

const sisterSites = [
  { href: "https://amityarkansas.org", label: "Visit Amity" },
  { href: "https://mountidaarkansas.org", label: "Visit Mount Ida" },
  { href: "https://hotspringsarkansas.org", label: "Visit Hot Springs" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#2d2a26] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="mb-3 text-lg font-semibold">Glenwood Arkansas</h3>
          <p className="max-w-md text-sm leading-relaxed text-white/80">
            Discover Glenwood, Arkansas — from floating the Caddo River to nearby lakes, cabins, restaurants, local events, and outdoor destinations in the Ouachita region.
          </p>

          <p className="mt-5 max-w-md text-xs leading-relaxed text-white/50">
            Part of the{" "}
            <a href="https://naturalstatetourismproject.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/70 underline underline-offset-4 hover:text-white">
              Natural State Tourism Project
            </a>
            , an independent local tourism guide network.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Visitor Guide</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {visitorLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-6 text-lg font-semibold">Events</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {eventLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Sister Sites</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {sisterSites.map((site) => (
              <li key={site.href}>
                <a href={site.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {site.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/contact" className="mt-6 inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-black">
            Get Listed
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Glenwood Arkansas. Built as a local tourism and business guide.
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a href="https://buy.stripe.com/aFa4gz7By3qv67T8BX7N602" target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-[color:var(--color-accent)] px-5 py-2 font-medium text-white shadow hover:opacity-90">
              ❤️ Support Local Visibility
            </a>

            <div className="text-white/50">
              Site by{" "}
              <a href="https://hometownwebservicesar.cc" target="_blank" rel="noopener noreferrer" className="underline transition hover:text-white">
                Hometown Web Services AR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}