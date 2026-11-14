import { supabaseAdmin } from "@/lib/supabase/server";

/** Curated live calendars. Imported events still undergo city/date validation. */
const sources = [
  {
    "site": "glenwood",
    "name": "Glenwood Regional Chamber event calendar",
    "url": "https://glenwoodregionalchamber.com/events",
    "city": "Glenwood",
    "category": "Community",
    "notes": "Official area chamber; only clearly dated local events qualify"
  },
  {
    "site": "murfreesboro",
    "name": "Murfreesboro City public calendar",
    "url": "https://murfreesboroar.gov/calendar-of-events",
    "city": "Murfreesboro",
    "category": "Community",
    "notes": "Official city events; government-only meetings are excluded"
  },
  {
    "site": "amity",
    "name": "Ouachita Hills Academy community concerts",
    "url": "https://www.ohacademy.org/about-us/christmas-concerts",
    "city": "Amity",
    "category": "Arts & Culture",
    "notes": "Official academy page; verify actual Amity venue for each concert"
  }
  {
    "site": "murfreesboro",
    "name": "Crater of Diamonds State Park events",
    "url": "https://www.arkansas.com/state-parks/explore/parks/crater-of-diamonds-state-park",
    "city": "Murfreesboro",
    "category": "Outdoor & Parks",
    "notes": "Official park page includes current park interpreter events and links; strict date and city checks apply"
  },
] as const;

export async function ensureTrustedEventSources(site?: string) {
  for (const source of sources) {
    if (site && source.site !== site) continue;
    let query = supabaseAdmin.from("event_sources").select("id").eq("url", source.url);
    query = query.eq("site", source.site);
    const { data, error } = await query.limit(1);
    if (error) throw new Error("Cannot check event sources: " + error.message);
    if (data && data.length) continue;
    const { error: insertError } = await supabaseAdmin.from("event_sources").insert({
      site: source.site,
      name: source.name,
      source_type: "website",
      url: source.url,
      city: source.city,
      category_hint: source.category,
      notes: source.notes,
      enabled: true,
    });
    if (insertError && insertError.code !== "23505") {
      console.error("Unable to add event source", source.url, insertError);
    }
  }
}
