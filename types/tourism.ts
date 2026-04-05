import { ReactNode } from "react";

export type Attraction = {
  title: string;
  description: ReactNode; // ✅ THIS is what enables links
  image: string;
  alt?: string;
};

export type Highlight = {
  label: string
}

export type ItineraryBlock = {
  title: string
  description: string
}