import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Read-only public feed for sibling guides. Never return pending events,
 * source administration data, user submissions, or email addresses.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const site = url.searchParams.get("site");
  if (site !== "murfreesboro") {
    return NextResponse.json({ error: "Unknown guide" }, { status: 400 });
  }
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
  try {
    const { data, error } = await supabaseAdmin
      .from("events")
      .select("title,slug,description,city,location_name,address,start_date,end_date,start_time,end_time,category,source_url")
      .eq("site", site)
      .eq("status", "approved")
      .gte("start_date", today)
      .order("start_date", { ascending: true })
      .order("start_time", { ascending: true })
      .limit(40);

    if (error) throw error;
    return NextResponse.json(
      { events: data || [], refreshed_at: new Date().toISOString() },
      { headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1800" } }
    );
  } catch (error) {
    console.error("Public events read failed:", error);
    return NextResponse.json({ error: "Calendar unavailable" }, { status: 503 });
  }
}
