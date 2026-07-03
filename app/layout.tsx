import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = "https://www.glenwoodarkansas.org";
const siteName = "Glenwood Arkansas Guide";
const ogImage = "/images/og-image.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4ead7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default:
      "Things to Do in Glenwood, Arkansas | Restaurants, Cabins & Local Guide",
    template: "%s | Glenwood Arkansas Guide",
  },

  description:
    "Plan your trip to Glenwood, Arkansas with local restaurants, cabins, places to stay, shops, outdoor stops, events, and things to do near the Caddo River, Lake Greeson, and the Ouachita Mountains.",

  keywords: [
    "Glenwood Arkansas",
    "Glenwood AR",
    "things to do in Glenwood Arkansas",
    "things to do in Glenwood AR",
    "Glenwood Arkansas restaurants",
    "restaurants in Glenwood Arkansas",
    "where to eat in Glenwood AR",
    "cabins in Glenwood Arkansas",
    "Glenwood Arkansas cabins",
    "places to stay Glenwood AR",
    "Caddo River cabins",
    "Caddo River float trips",
    "Caddo River Glenwood Arkansas",
    "Lake Greeson cabins",
    "Lake Greeson Arkansas",
    "Ouachita Mountains Arkansas",
    "Glenwood Arkansas events",
    "Glenwood Arkansas local businesses",
    "Glenwood Arkansas shops",
    "Glenwood Arkansas outdoor activities",
    "Glenwood Arkansas visitor guide",
    "Glenwood AR tourism",
    "Southwest Arkansas travel",
    "Pike County Arkansas",
    "Montgomery County Arkansas",
  ],

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "travel",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Things to Do in Glenwood Arkansas | Restaurants, Cabins & Local Guide",
    description:
      "Explore Glenwood, Arkansas with local restaurants, cabins, shops, events, outdoor activities, and places to visit near the Caddo River and Lake Greeson.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Glenwood Arkansas guide with cabins, restaurants, shops, events, and outdoor attractions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Glenwood Arkansas Guide | Restaurants, Cabins & Things to Do",
    description:
      "Find places to eat, cabins, shops, events, outdoor stops, and things to do in Glenwood, Arkansas near the Caddo River and Lake Greeson.",
    images: [ogImage],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "geo.region": "US-AR",
    "geo.placename": "Glenwood, Arkansas",
    "geo.position": "34.3268;-93.5507",
    ICBM: "34.3268, -93.5507",
    "og:country-name": "United States",
    "og:region": "Arkansas",
    "og:locality": "Glenwood",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "A local visitor guide for Glenwood, Arkansas with restaurants, cabins, shops, events, outdoor activities, local businesses, and trip planning pages.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Glenwood, Arkansas",
  description:
    "Glenwood, Arkansas is a small-town destination near the Caddo River, Lake Greeson, and the Ouachita Mountains with cabins, restaurants, local shops, outdoor recreation, and nearby family-friendly stops.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glenwood",
    addressRegion: "AR",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.3268,
    longitude: -93.5507,
  },
  touristType: [
    "Families",
    "Outdoor Travelers",
    "Cabin Guests",
    "River Visitors",
    "Lake Visitors",
    "Arkansas Road Trippers",
  ],
  includesAttraction: [
    {
      "@type": "TouristAttraction",
      name: "Caddo River",
    },
    {
      "@type": "TouristAttraction",
      name: "Lake Greeson",
    },
    {
      "@type": "TouristAttraction",
      name: "Ouachita Mountains",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, destinationSchema]),
          }}
        />

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}