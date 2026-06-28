import Link from "next/link";

const checkItems = [
  {
    title: "Check recent rain and water level",
    text: "The Caddo can change fast after rain, and a stretch that worked last weekend may not be right for every group today.",
  },
  {
    title: "Call an outfitter before guessing",
    text: "Local outfitters can help with float routes, launch and pickup spots, timing, rentals, and whether the water is right for the day.",
  },
  {
    title: "Know where access is allowed",
    text: "Not every gravel bar, pull-off, or pretty river bend is public access. Check signs, respect private land, and use managed access when possible.",
  },
  {
    title: "Have a backup plan",
    text: "If the river is too low, too high, crowded, or stormy, shift toward local food, Lake Greeson, parks, shops, events, or a slower cabin day.",
  },
];

const quickLinks = [
  { href: "/caddo-river-swimming-access", label: "River Access" },
  { href: "/caddo-river-weekend-guide", label: "Weekend Guide" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Stays" },
  { href: "/rainy-day-things-to-do-glenwood-ar", label: "Backup Plans" },
];

export default function CaddoTripCheck() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div
              className="relative flex min-h-[360px] flex-col justify-end overflow-hidden p-6 text-white md:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,28,25,0.92), rgba(47,88,78,0.78)), url('/images/glenwood/river3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="pointer-events-none absolute -right-10 top-8 hidden text-[6rem] font-bold leading-none opacity-[0.08] lg:block"
                style={{ color: "#ffffff" }}
              >
                CHECK
              </div>

              <div className="relative z-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
                  Caddo River Trip Check
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-tight !text-white md:text-5xl">
                  Before you plan the river, check the day.
                </h2>

                <p className="mt-5 max-w-xl leading-relaxed !text-white/82">
                  Glenwood river days work best when visitors plan around real
                  conditions, not just the map. Check the water, respect access,
                  and keep an easy backup plan in mind.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {checkItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white/60 p-5"
                  >
                    <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />

                    <h3 className="text-xl font-semibold leading-tight text-[color:var(--color-text)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 !text-[color:var(--color-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] !text-[color:var(--color-accent)]">
                  Useful planning links
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex rounded-full border border-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-[color:var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
