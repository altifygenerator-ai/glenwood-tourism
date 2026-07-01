import { Metadata } from "next";

export function generateMetadata(data: any): Metadata {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: data.alternates,
    openGraph: data.openGraph,
    twitter: data.twitter,
  };
}
