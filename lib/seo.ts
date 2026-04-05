import { Metadata } from "next";

export function generateMetadata(data: any): Metadata {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: data.openGraph,
  };
}

export const glenwoodSEO = {
  title:
    "Visit Glenwood Arkansas | Caddo River, Lake Greeson & Outdoor Adventures",

  description:
    "Discover Glenwood Arkansas tourism. Float the Caddo River, explore Lake Greeson, find local businesses, and experience outdoor adventures in the Ouachita Mountains.",

  keywords: [
    "Glenwood Arkansas",
    "things to do in Glenwood Arkansas",
    "Caddo River Glenwood",
    "Lake Greeson Arkansas",
    "Glenwood AR tourism",
    "Ouachita Mountains Arkansas",
    "Glenwood Arkansas businesses",
    "Caddo River float Arkansas",
  ],

  openGraph: {
    title: "Visit Glenwood Arkansas",
    description:
      "Explore the Caddo River, Lake Greeson, and outdoor adventures in Glenwood, Arkansas.",
    url: "https://glenwoodtourism.vercel.app/",
    siteName: "Glenwood Tourism",
    images: [
      {
        url: "/images/glenwood/TownSquare.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};