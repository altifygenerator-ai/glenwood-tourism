import GuidePaths from "@/components/GuidePaths";
import type { Metadata } from "next";
import CaddoRiverHero from "@/components/CaddoRiverHero";
import CaddoRiverGuideIntro from "@/components/CaddoRiverGuideIntro";
import CaddoRiverQuestions from "@/components/CaddoRiverQuestions";
import CaddoRiverOutfitters from "@/components/CaddoRiverOutfitters";
import CaddoRiverTripTips from "@/components/CaddoRiverTripTips";
import CaddoRiverWeekend from "@/components/CaddoRiverWeekend";
import CaddoTripCheck from "@/components/CaddoTripCheck";

export const metadata: Metadata = {
  title: { absolute: "Caddo River Guide | Floating & Access Near Glenwood, AR" },
  description: "Plan a Caddo River trip near Glenwood with outfitter links, access notes, water-condition checks and practical ideas for food, cabins and weekend stops.",
  alternates: {
    canonical: "/caddo-river",
  },
};

export default function CaddoRiverPage() {
  return (
    <main>
      <CaddoRiverHero />
      <GuidePaths />
      <CaddoRiverGuideIntro />
      <CaddoTripCheck />
      <CaddoRiverQuestions />
      <CaddoRiverOutfitters />
      <CaddoRiverTripTips />
      <CaddoRiverWeekend />
      <GuidePaths next title="Finished your float?" links={[{"href": "/glenwood-ar-restaurants", "label": "Find local food"}, {"href": "/glenwood-ar-cabins", "label": "Find a cabin"}, {"href": "/events", "label": "Check local events"}, {"href": "/lake-greeson-near-glenwood", "label": "Explore Lake Greeson"}]} />
    </main>
  );
}