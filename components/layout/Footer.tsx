const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Things To Do" },
  {
    href: "/things-to-do-in-glenwood-with-kids",
    label: "Things To Do With Kids",
  },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/history", label: "Glenwood History" },
];

const visitorLinks = [
  { href: "/plan-my-day", label: "Plan a Glenwood Day" },
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
    <footer className="mt-20 bg-[color:var(--color-text)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm">
            <span>🌿</span>
            <span>Glenwood Arkansas Guide</span>
          </div>

          <p className="max-w-md text-sm leading-relaxed !text-white/85">
            Discover Glenwood, Arkansas, from floating the Caddo River to nearby
            lakes, cabins, restaurants, local events, and outdoor destinations
            in the Ouachita region.
          </p>

          <p className="mt-5 max-w-md text-xs leading-relaxed !text-white/70">
            Part of the{" "}
            <a
              href="https://naturalstatetourismproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Natural State Tourism Project
            </a>
            , an independent local tourism guide network.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/submit-event"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Submit Event
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Get Listed
            </a>
          </div>
        </div>

        <FooterLinkGroup title="Explore" links={exploreLinks} />

        <div>
          <FooterLinkGroup title="Visitor Guide" links={visitorLinks} />

          <div className="mt-8">
            <FooterLinkGroup title="Events" links={eventLinks} />
          </div>
        </div>

        <FooterLinkGroup title="Sister Sites" links={sisterSites} external />
      </div>

      <div className="border-t border-white/15 py-6 text-sm text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <div className="!text-white/75">
            © {new Date().getFullYear()} Glenwood Arkansas. Built as a local
            tourism and business guide.
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://buy.stripe.com/aFa4gz7By3qv67T8BX7N602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Support Local Visibility
            </a>

            <div className="text-sm !text-white/65">
              Site by{" "}
              <a
                href="https://hometownwebservicesar.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4 transition hover:text-white/80"
              >
                Hometown Web Services AR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
  external = false,
}: {
  title: string;
  links: { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="inline-flex text-white/80 transition hover:text-white hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}