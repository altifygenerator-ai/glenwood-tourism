import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Listed in the Glenwood Arkansas Guide",
  description:
    "Request a Glenwood Arkansas business listing, featured placement, spotlight page, correction, or local suggestion for the visitor and tourism guide.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
