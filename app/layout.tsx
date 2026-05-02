import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://glenwoodarkansas.org";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Things to Do in Glenwood, Arkansas | Restaurants, Cabins & Local Guide",
    template: "%s | Glenwood Arkansas Guide",
  },

  description:
    "Plan your trip to Glenwood, Arkansas. Find things to do, local restaurants, cabins, places to stay, and outdoor activities near the Caddo River and Lake Greeson.",

  keywords: [
    "Glenwood Arkansas",
    "things to do in Glenwood Arkansas",
    "restaurants in Glenwood Arkansas",
    "cabins in Glenwood Arkansas",
    "places to stay Glenwood AR",
    "Caddo River cabins",
    "Lake Greeson cabins",
    "Glenwood AR tourism",
    "Glenwood Arkansas attractions",
    "where to eat Glenwood AR",
    "where to stay Glenwood AR",
    "Caddo River float trips",
    "Lake Greeson Arkansas",
    "Ouachita Mountains Arkansas",
    "southwest Arkansas travel",
  ],

  authors: [{ name: "Glenwood Arkansas Guide" }],
  creator: "Glenwood Arkansas Guide",
  publisher: "Glenwood Arkansas Guide",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Things to Do in Glenwood Arkansas | Restaurants, Cabins & Attractions",
    description:
      "Explore Glenwood, Arkansas — find restaurants, cabins, outdoor activities, and local spots near the Caddo River and Lake Greeson.",
    url: siteUrl,
    siteName: "Glenwood Arkansas Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Glenwood Arkansas cabins, restaurants, and outdoor attractions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Glenwood Arkansas Guide | Restaurants, Cabins & Things to Do",
    description:
      "Find places to eat, cabins, and things to do in Glenwood, Arkansas near the Caddo River and Lake Greeson.",
    images: ["/images/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}