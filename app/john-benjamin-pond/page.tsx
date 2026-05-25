import type { Metadata } from "next";
import JohnBenjaminPondHero from "@/components/JohnBenjaminPondHero";
import JohnBenjaminPondGuide from "@/components/JohnBenjaminPondGuide";
import JohnBenjaminPondFishing from "@/components/JohnBenjaminPondFishing";
import JohnBenjaminPondVisit from "@/components/JohnBenjaminPondVisit";

export const metadata: Metadata = {
  title:
    "John Benjamin Glenwood Community Fishing Pond | Glenwood Arkansas Guide",
  description:
    "A local guide to John Benjamin Glenwood Community Fishing Pond in Glenwood, Arkansas, with fishing notes, family tips, park info, and things to know before visiting.",
  alternates: {
    canonical: "/john-benjamin-pond",
  },
};

export default function JohnBenjaminPondPage() {
  return (
    <main>
      <JohnBenjaminPondHero />
      <JohnBenjaminPondGuide />
      <JohnBenjaminPondFishing />
      <JohnBenjaminPondVisit />
    </main>
  );
}