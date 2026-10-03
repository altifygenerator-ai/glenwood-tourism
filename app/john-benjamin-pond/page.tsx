import type { Metadata } from "next";
import JohnBenjaminPondHero from "@/components/JohnBenjaminPondHero";
import JohnBenjaminPondGuide from "@/components/JohnBenjaminPondGuide";
import JohnBenjaminPondFishing from "@/components/JohnBenjaminPondFishing";
import JohnBenjaminPondVisit from "@/components/JohnBenjaminPondVisit";

export const metadata: Metadata = {
  title:
    "John Benjamin Fishing Pond in Glenwood, Arkansas | Family Fishing Guide",
  description:
    "Plan a visit to John Benjamin Fishing Pond in Glenwood, Arkansas with family fishing tips, what to bring, local park notes, and things to know before you go.",
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