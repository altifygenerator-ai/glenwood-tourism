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
    default: "Visit Glenwood Arkansas | Things to Do, Dining & Local Guide",
    template: "%s | Visit Glenwood Arkansas",
  },

  description:
    "Explore Glenwood, Arkansas — things to do, local restaurants, outdoor recreation, events, history, and small-town charm near the Caddo River and Lake Greeson.",

  keywords: [
    "Glenwood Arkansas",
    "things to do in Glenwood AR",
    "Glenwood Arkansas attractions",
    "restaurants in Glenwood Arkansas",
    "Caddo River Arkansas",
    "Lake Greeson",
    "Glenwood AR events",
    "Glenwood Arkansas tourism",
    "small towns in Arkansas",
    "visit Glenwood Arkansas",
  ],

  authors: [{ name: "Visit Glenwood Arkansas" }],
  creator: "Visit Glenwood Arkansas",
  publisher: "Visit Glenwood Arkansas",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Visit Glenwood Arkansas | Local Guide & Attractions",
    description:
      "Discover Glenwood, Arkansas — outdoor recreation, dining, events, local businesses, and small-town charm near the Caddo River and Lake Greeson.",
    url: siteUrl,
    siteName: "Visit Glenwood Arkansas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Glenwood Arkansas local guide and attractions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Visit Glenwood Arkansas",
    description:
      "Your local guide to Glenwood, Arkansas — things to do, places to eat, events, and outdoor attractions.",
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