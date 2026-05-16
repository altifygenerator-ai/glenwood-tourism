import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.glenwoodarkansas.org";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/explore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/caddo-river`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/history`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // 🔥 MONEY PAGES
    {
      url: `${baseUrl}/glenwood-ar-restaurants`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/glenwood-ar-cabins`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/local-business`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}