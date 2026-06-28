import type { Metadata } from "next";
import CaddoRiverHero from "@/components/CaddoRiverHero";
import CaddoRiverGuideIntro from "@/components/CaddoRiverGuideIntro";
import CaddoRiverQuestions from "@/components/CaddoRiverQuestions";
import CaddoRiverOutfitters from "@/components/CaddoRiverOutfitters";
import CaddoRiverTripTips from "@/components/CaddoRiverTripTips";
import CaddoRiverWeekend from "@/components/CaddoRiverWeekend";
import CaddoTripCheck from "@/components/CaddoTripCheck";

export const metadata: Metadata = {
  title:
    "Caddo River Guide in Glenwood, Arkansas | Floating, Tubing, Cabins & Local Tips",
  description:
    "Plan a Caddo River trip near Glenwood, Arkansas with local tips on floating, tubing, launch points, pickups, outfitters, what to bring, cabins, restaurants, and weekend planning.",
  alternates: {
    canonical: "/caddo-river",
  },
};

export default function CaddoRiverPage() {
  return (
    <main>
      <CaddoRiverHero />
      <CaddoRiverGuideIntro />
      <CaddoTripCheck />
      <CaddoRiverQuestions />
      <CaddoRiverOutfitters />
      <CaddoRiverTripTips />
      <CaddoRiverWeekend />
    </main>
  );
}