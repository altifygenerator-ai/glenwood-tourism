import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Visit Amity Arkansas",
    template: "%s | Visit Amity Arkansas",
  },
  description:
    "Explore Amity Arkansas — local attractions, history, events, and small-town charm.",
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
</body>
    </html>
  
   );}