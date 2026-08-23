import { MetadataRoute } from "next";
import { supabaseAdmin } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.glenwoodarkansas.org";
  const contentUpdated = new Date("2026-08-21");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/plan-my-day`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/things-to-do-in-glenwood-with-kids`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/visitor-essentials-glenwood-ar`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/pet-friendly-glenwood-ar`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/rainy-day-things-to-do-glenwood-ar`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: contentUpdated,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/this-weekend`,
      lastModified: contentUpdated,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/glenwood-fourth-of-july`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/submit-event`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/caddo-river`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/caddo-river-swimming-access`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/caddo-river-weekend-guide`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collier-springs-little-missouri-falls-day-trip`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fishing-near-glenwood-arkansas`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/lake-greeson-near-glenwood`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/lake-greeson-crater-of-diamonds-day-trip`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/john-benjamin-pond`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bard-springs`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glenwood-ar-restaurants`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glenwood-ar-cabins`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/at-living-water-cabins`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/local-business`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/glenwood-ar-shops-supplies`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/glenwood-outdoor-businesses`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/glenwood-local-services`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const { data: events, error } = await supabaseAdmin
    .from("events")
    .select("slug, updated_at")
    .eq("status", "approved")
    .eq("site", "glenwood");

  if (error) {
    console.error("Sitemap event query failed:", error.message);
  }

  const eventRoutes: MetadataRoute.Sitemap =
    events?.map((event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: event.updated_at ? new Date(event.updated_at) : contentUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    })) || [];

  return [...staticRoutes, ...eventRoutes];
}