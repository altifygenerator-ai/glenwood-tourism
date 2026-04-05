import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://glenwoodarkansas.org"),
  title: {
    default: "Visit Glenwood Arkansas",
    template: "%s | Visit Glenwood Arkansas",
  },
  description:
    "Explore Glenwood Arkansas — local attractions, history, events, and small-town charm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow">{children}</main>
  <Footer />
  <Analytics />
</body>
    </html>
  
   );}