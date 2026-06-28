import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search the Glenwood Arkansas Guide",
  description:
    "Search Glenwood Arkansas Guide pages for Caddo River trips, cabins, restaurants, events, Lake Greeson, local businesses, family activities, and visitor planning.",
  alternates: {
    canonical: "/search",
  },
};

const searchablePages = [
  {
    title: "Caddo River Guide",
    href: "/caddo-river",
    text: "Floating, tubing, fishing, outfitters, river planning, cabins, restaurants, and local Glenwood river tips.",
    tags: ["caddo", "river", "float", "kayak", "tube", "outfitters"],
  },
  {
    title: "Caddo River Swimming Spots & Easy River Access",
    href: "/caddo-river-swimming-access",
    text: "Swimming spots, river access, public access notes, private land reminders, and float route planning around Glenwood.",
    tags: ["swim", "access", "narrows", "public access", "river"],
  },
  {
    title: "Caddo River Weekend Guide",
    href: "/caddo-river-weekend-guide",
    text: "Weekend planning around the river, cabins, restaurants, local events, and easy Glenwood trip flow.",
    tags: ["weekend", "river", "cabins", "food"],
  },
  {
    title: "Visitor Essentials in Glenwood",
    href: "/visitor-essentials-glenwood-ar",
    text: "Food, fuel, river supplies, ice, water, cleanup, local stops, and practical planning before a Glenwood day outside.",
    tags: ["essentials", "supplies", "ice", "food", "fuel", "packing"],
  },
  {
    title: "Pet-Friendly Glenwood",
    href: "/pet-friendly-glenwood-ar",
    text: "Pet-friendly trip planning, dogs on the river, cabin rules, patios, heat, cleanup, and practical travel notes.",
    tags: ["pet", "dog", "dogs", "pet friendly", "cabins"],
  },
  {
    title: "Rainy Day Things To Do in Glenwood",
    href: "/rainy-day-things-to-do-glenwood-ar",
    text: "Backup plans when the Caddo River is too low, too high, stormy, crowded, or not right for the day.",
    tags: ["rain", "rainy", "backup", "weather", "indoor"],
  },
  {
    title: "Glenwood Restaurants",
    href: "/glenwood-ar-restaurants",
    text: "Restaurants, cafes, pizza, seafood, Mexican food, coffee, sweets, and casual places to eat around Glenwood.",
    tags: ["restaurant", "food", "coffee", "pizza", "breakfast"],
  },
  {
    title: "Cabins and Places to Stay Near Glenwood",
    href: "/glenwood-ar-cabins",
    text: "Cabins, campgrounds, motels, vacation rentals, Caddo River stays, and Lake Greeson lodging options.",
    tags: ["cabins", "lodging", "camping", "motel", "stay", "airbnb"],
  },
  {
    title: "This Weekend in Glenwood",
    href: "/this-weekend",
    text: "Weekend events, local plans, river-season ideas, markets, music, family-friendly activities, and things to do.",
    tags: ["events", "weekend", "music", "market"],
  },
  {
    title: "Glenwood Events",
    href: "/events",
    text: "Approved local events for Glenwood visitors, businesses, churches, venues, groups, and community organizers.",
    tags: ["events", "calendar", "submit"],
  },
  {
    title: "Lake Greeson Near Glenwood",
    href: "/lake-greeson-near-glenwood",
    text: "Lake Greeson planning near Glenwood, including boating, fishing, swimming, Swaha, Dam Grill, and lake-day add-ons.",
    tags: ["lake greeson", "lake", "boating", "fishing", "swaha"],
  },
  {
    title: "Lake Greeson & Crater of Diamonds Day Trip",
    href: "/lake-greeson-crater-of-diamonds-day-trip",
    text: "A Glenwood-area day trip route connecting Lake Greeson, Swaha, Murfreesboro, and Crater of Diamonds.",
    tags: ["crater", "diamonds", "lake greeson", "murfreesboro"],
  },
  {
    title: "Things To Do With Kids in Glenwood",
    href: "/things-to-do-in-glenwood-with-kids",
    text: "Family-friendly outdoor ideas, easy river days, nearby parks, simple food stops, and low-pressure kids trip planning.",
    tags: ["kids", "family", "children", "family friendly"],
  },
  {
    title: "Local Businesses",
    href: "/local-business",
    text: "Local businesses, shops, services, visitor stops, and places around Glenwood worth knowing about.",
    tags: ["business", "shops", "local"],
  },
  {
    title: "Plan My Day",
    href: "/plan-my-day",
    text: "A simple tool for planning a Glenwood day around weather, trip type, food, lodging, and nearby stops.",
    tags: ["plan", "itinerary", "day", "tool"],
  },
];

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

function scorePage(page: (typeof searchablePages)[number], query: string) {
  const haystack = [page.title, page.text, ...page.tags].join(" ").toLowerCase();
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (!terms.length) {
    return 1;
  }

  return terms.reduce((score, term) => {
    if (page.title.toLowerCase().includes(term)) {
      return score + 3;
    }

    if (haystack.includes(term)) {
      return score + 1;
    }

    return score;
  }, 0);
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q || "").trim();

  const results = searchablePages
    .map((page) => ({ ...page, score: scorePage(page, query) }))
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  return (
    <main>
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 18%, rgba(139,94,52,0.22), transparent 30%), radial-gradient(circle at 18% 82%, rgba(47,88,78,0.16), transparent 34%), linear-gradient(135deg, var(--bg-card) 0%, var(--color-bg) 52%, rgba(47,88,78,0.08) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 top-16 hidden text-[10rem] font-bold leading-none opacity-[0.045] lg:block"
          style={{ color: "var(--color-accent)" }}
        >
          SEARCH
        </div>

        <div className="relative z-10 container py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Search The Guide
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] text-[color:var(--color-text)] md:text-7xl">
              Find Glenwood guides, places, and trip ideas.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
              Search for Caddo River, cabins, restaurants, events, Lake
              Greeson, family ideas, visitor essentials, and other Glenwood
              planning pages.
            </p>

            <form action="/search" className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                name="q"
                defaultValue={query}
                placeholder="Search Glenwood Arkansas Guide"
                className="min-h-12 flex-1 rounded-full border border-black/10 bg-white px-5 text-base outline-none"
              />
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Results
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                {query ? `Results for “${query}”` : "Popular guide pages"}
              </h2>
            </div>

            <Link href="/explore" className="text-sm font-bold text-[color:var(--color-accent)] underline">
              Browse things to do
            </Link>
          </div>

          {results.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="group flex h-full flex-col rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                    {result.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {result.text}
                  </p>

                  <span className="mt-auto inline-block pt-5 font-bold text-[color:var(--color-accent)]">
                    Open page →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                No close match found.
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                Try searching for river, cabins, restaurants, events, Lake
                Greeson, family, pets, or rainy day ideas.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
