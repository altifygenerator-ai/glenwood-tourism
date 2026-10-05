import GuidePaths from "@/components/GuidePaths";
import type { Metadata } from "next";
import JohnBenjaminPondHero from "@/components/JohnBenjaminPondHero";
import JohnBenjaminPondGuide from "@/components/JohnBenjaminPondGuide";
import JohnBenjaminPondFishing from "@/components/JohnBenjaminPondFishing";
import JohnBenjaminPondVisit from "@/components/JohnBenjaminPondVisit";

export const metadata: Metadata = {
  title: { absolute: "John Benjamin Fishing Pond | Glenwood, Arkansas" },
  description: "Visit John Benjamin Fishing Pond in Glenwood with family fishing notes, what to bring and practical park information. Plan food and nearby stops afterward.",
  alternates: {
    canonical: "/john-benjamin-pond",
  },
};

export default function JohnBenjaminPondPage() {
  return (
    <main>
      <JohnBenjaminPondHero />
      <GuidePaths />
      <JohnBenjaminPondGuide />
      <JohnBenjaminPondFishing />
      <JohnBenjaminPondVisit />
      <GuidePaths next title="After fishing, where next?" links={[{"href": "/glenwood-ar-restaurants", "label": "Find local food"}, {"href": "/caddo-river", "label": "Plan a Caddo River day"}, {"href": "/lake-greeson-near-glenwood", "label": "Explore Lake Greeson"}, {"href": "/things-to-do-in-glenwood-with-kids", "label": "Family activities"}]} />
    </main>
  );
}