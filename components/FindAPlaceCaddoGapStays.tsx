import TrackedFeatureLink from "@/components/TrackedFeatureLink";

type BookableStay = {
  name: string;
  slug: string;
  type: string;
  detail: string;
  host: string;
};

const cabins: BookableStay[] = [
  {
    name: "Lil' Rustic",
    slug: "lil-rustic",
    type: "Creekside cabin · Caddo Gap",
    detail: "A quiet couples' cabin near Little Missouri Falls, with a private hot tub, porch swing and creekside setting.",
    host: "Fancy Hill Cabins & RV Park",
  },
  {
    name: "Whitetail Cabin at Crystal Ridge",
    slug: "whitetail-cabin-at-crystal-ridge-2",
    type: "Family cabin · Ouachita National Forest",
    detail: "A larger wooded cabin that sleeps up to twelve, close to hiking trails and waterfalls.",
    host: "Fancy Hill Cabins & RV Park",
  },
  {
    name: "Bucks Ridge",
    slug: "bucks-ridge",
    type: "Cabin · Caddo Gap",
    detail: "A separate independently hosted cabin in the Caddo Gap area, with a river and mountain setting.",
    host: "Independent Find A Place host",
  },
];

const camping: BookableStay[] = [
  { name: "Camping or RV Site 4-6", slug: "camping-or-rv-site-4-6", type: "Camping / RV", detail: "Primitive waterfront site for a smaller RV and tents; check site rules.", host: "Fancy Hill Cabins & RV Park" },
  { name: "Camping Site 1-3", slug: "camping-site-1-3", type: "Camping / RV", detail: "Primitive camping or small RV site; check vehicle limits.", host: "Fancy Hill Cabins & RV Park" },
  { name: "Camping Site 8", slug: "campsite-8", type: "Camping", detail: "Water and electric hookup for tent, van or car camping; no campers.", host: "Fancy Hill Cabins & RV Park" },
  { name: "Camping Site 9", slug: "camping-site-9", type: "Camping", detail: "Water and electric hookup for tent, van or car camping; no campers.", host: "Fancy Hill Cabins & RV Park" },
  { name: "RV or Camping Site 13", slug: "rv-or-camping-site-13", type: "RV / Camping", detail: "Large pull-through site with water and 50-amp service; size restrictions apply.", host: "Fancy Hill Cabins & RV Park" },
  { name: "RV or Camping Site 14", slug: "rv-or-camping-site-14", type: "RV / Camping", detail: "Pull-through RV or camping site with water and 50-amp service.", host: "Fancy Hill Cabins & RV Park" },
  { name: "RV Site 10 (Max length 25ft)", slug: "rv-site-10-max-length-28ft", type: "RV site", detail: "Water and 50-amp service; confirm current RV length limits before booking.", host: "Fancy Hill Cabins & RV Park" },
  { name: "RV Site 12 (Max 20ft)", slug: "rv-site-12-20ft-max", type: "RV site", detail: "Water and 50-amp service for smaller RVs and campers.", host: "Fancy Hill Cabins & RV Park" },
];

function StayCard({ stay, compact = false }: { stay: BookableStay; compact?: boolean }) {
  const href = "https://www.findaplacebooking.com/stays/" + encodeURIComponent(stay.slug);
  const cover = "https://www.findaplacebooking.com/api/public/stay-cover/" + encodeURIComponent(stay.slug);

  return (
    <article className="card flex h-full min-w-0 flex-col overflow-hidden border border-stone-200 bg-white">
      <div className={compact ? "h-40 overflow-hidden bg-stone-200" : "h-52 overflow-hidden bg-stone-200"}>
        <img src={cover} alt={stay.name + " on Find A Place Booking"} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">{stay.type}</p>
        <h3 className="text-xl font-semibold leading-snug text-[color:var(--color-text)]">{stay.name}</h3>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{stay.host}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--color-muted)]">{stay.detail}</p>
        <TrackedFeatureLink
          href={href}
          business={stay.name}
          city="Glenwood / Caddo Gap"
          page="/glenwood-ar-cabins"
          placement={compact ? "fap_camping" : "fap_cabins"}
          placementType="editorial"
          action="find_a_place_booking"
          newTab
          className="btn mt-5 inline-flex w-fit items-center"
        >
          View stay &amp; check dates ↗
        </TrackedFeatureLink>
      </div>
    </article>
  );
}

export default function FindAPlaceCaddoGapStays() {
  return (
    <section className="border-y border-stone-200 bg-[#f7f4ed] py-14" aria-labelledby="fap-caddo-stays">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">Bookable Caddo Gap stays</p>
        <h2 id="fap-caddo-stays" className="mt-2 text-3xl font-semibold text-[color:var(--color-text)] md:text-4xl">Find A Place cabins near Glenwood</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[color:var(--color-muted)]">
          These are individually published Find A Place listings from Caddo Gap-area hosts. Open a stay to see its current photos,
          house rules, pricing and date availability. Other local lodgings on this guide remain listed separately.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cabins.map((stay) => <StayCard key={stay.slug} stay={stay} />)}
        </div>
        <details className="mt-8 rounded-xl border border-stone-200 bg-white p-5">
          <summary className="cursor-pointer font-semibold text-[color:var(--color-text)]">
            View {camping.length} additional Fancy Hill camping and RV sites on Find A Place
          </summary>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            Individual sites have different vehicle and tent restrictions. Check each listing before reserving.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {camping.map((stay) => <StayCard key={stay.slug} stay={stay} compact />)}
          </div>
        </details>
        <p className="mt-5 text-xs text-[color:var(--color-muted)]">
          Property details and photos come from published Find A Place listings. Availability and final totals are shown on the booking platform.
        </p>
      </div>
    </section>
  );
}
