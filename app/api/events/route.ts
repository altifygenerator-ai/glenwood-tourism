import { NextResponse } from "next/server";
import { createEventSlug } from "@/lib/events";
import { supabaseAdmin } from "@/lib/supabase/server";

const allowedSites = [
  "glenwood",
  "mount-ida",
  "hot-springs",
  "amity",
  "murfreesboro",
] as const;

type SiteKey = (typeof allowedSites)[number];

function cleanString(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

function isAllowedSite(value: unknown): value is SiteKey {
  return typeof value === "string" && allowedSites.includes(value as SiteKey);
}

function resolveSite(value: unknown): SiteKey | null {
  const submittedSite = cleanString(value);

  if (isAllowedSite(submittedSite)) {
    return submittedSite;
  }

  const envSite = process.env.SITE_KEY;

  if (isAllowedSite(envSite)) {
    return envSite;
  }

  return null;
}

function defaultCityForSite(site: SiteKey) {
  if (site === "mount-ida") return "Mount Ida";
  if (site === "hot-springs") return "Hot Springs";
  if (site === "amity") return "Amity";
  if (site === "murfreesboro") return "Murfreesboro";
  return "Glenwood";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = cleanString(body.title);
    const startDate = cleanString(body.start_date);
    const site = resolveSite(body.site);

    if (!site) {
      return NextResponse.json(
        {
          error:
            "Missing or invalid site. Set SITE_KEY in .env.local or send a valid site with the form.",
        },
        { status: 400 }
      );
    }

    const defaultCity = defaultCityForSite(site);

    if (!title || !startDate) {
      return NextResponse.json(
        { error: "Event title and start date are required." },
        { status: 400 }
      );
    }

    const slugBase = createEventSlug(title, startDate);
    const slug = `${slugBase}-${Date.now().toString().slice(-5)}`;

    const event = {
      site,
      title,
      slug,

      raw_description: cleanString(body.raw_description),
      description: cleanString(body.description),

      city: cleanString(body.city) || defaultCity,
      location_name: cleanString(body.location_name),
      address: cleanString(body.address),

      start_date: startDate,
      end_date: cleanString(body.end_date),
      start_time: cleanString(body.start_time),
      end_time: cleanString(body.end_time),

      category: cleanString(body.category),
      tags: [],

      image_url: cleanString(body.image_url),
      source_url: cleanString(body.source_url),

      submitter_name: cleanString(body.submitter_name),
      submitter_email: cleanString(body.submitter_email),

      status: "pending",
      featured: false,

      source_type: cleanString(body.source_type) || "submission",
      needs_review: true,
    };

    const { data, error } = await supabaseAdmin
      .from("events")
      .insert(event)
      .select()
      .single();

    if (error) {
      console.error("Event submission error:", error);

      return NextResponse.json(
        { error: "Could not submit event." },
        { status: 500 }
      );
    }

    return NextResponse.json({ event: data }, { status: 201 });
  } catch (error) {
    console.error("Event route error:", error);

    return NextResponse.json(
      { error: "Something went wrong submitting this event." },
      { status: 500 }
    );
  }
}