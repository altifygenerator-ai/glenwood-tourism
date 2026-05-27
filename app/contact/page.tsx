"use client";

import { useState } from "react";
import Link from "next/link";

const businessTypes = [
  "Restaurant / Cafe / Food Truck",
  "Cabin / Airbnb / Vacation Rental",
  "Campground / RV Park",
  "Hotel / Motel / Inn",
  "River Outfitter / Canoe Rental",
  "Local Shop / Boutique",
  "Attraction / Activity",
  "Service Business",
  "Event / Venue",
  "Other",
];

const listingOptions = [
  {
    title: "Basic Listing",
    price: "Free",
    text: "A simple listing for local businesses that should be included in the guide. Includes your business name, category, short description, contact info, website or Facebook link, and directions.",
  },
  {
    title: "Featured Listing",
    price: "$20/month or $200/year",
    text: "A stronger listing with better visibility, a larger card, photo, stronger write-up, and featured placement on relevant Glenwood guide pages when space is available.",
  },
  {
    title: "Business Spotlight",
    price: "$100 one-time",
    text: "Everything included with a Featured Listing, plus a dedicated full spotlight page with more details, images, links, and a direct link from your business listing.",
  },
];

const suggestionTypes = [
  "Business we should add",
  "Restaurant / food suggestion",
  "Cabin / stay suggestion",
  "Caddo River / outdoor tip",
  "Local shop or attraction",
  "Correction or outdated info",
  "Photo idea",
  "Page idea",
  "Other",
];

export default function ContactPage() {
  const [advertiseStatus, setAdvertiseStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [advertiseMessage, setAdvertiseMessage] = useState("");

  const [suggestionStatus, setSuggestionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [suggestionMessage, setSuggestionMessage] = useState("");

  async function handleAdvertiseSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setAdvertiseStatus("loading");
    setAdvertiseMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      businessName: String(formData.get("businessName") || ""),
      contactName: String(formData.get("contactName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      businessType: String(formData.get("businessType") || ""),
      website: String(formData.get("website") || ""),
      location: String(formData.get("location") || ""),
      listingType: String(formData.get("listingType") || ""),
      message: String(formData.get("message") || ""),
      site: "Glenwood Arkansas Guide",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setAdvertiseStatus("success");
      setAdvertiseMessage(
        "Thanks! Your request was sent. We’ll get back with you as soon as we can."
      );
      form.reset();
    } catch (error) {
      setAdvertiseStatus("error");
      setAdvertiseMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  async function handleSuggestionSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSuggestionStatus("loading");
    setSuggestionMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      suggestionType: String(formData.get("suggestionType") || ""),
      placeName: String(formData.get("placeName") || ""),
      location: String(formData.get("location") || ""),
      link: String(formData.get("link") || ""),
      message: String(formData.get("message") || ""),
      site: "Glenwood Arkansas Guide",
    };

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setSuggestionStatus("success");
      setSuggestionMessage(
        "Thanks! Your suggestion was sent. We’ll review it for the guide."
      );
      form.reset();
    } catch (error) {
      setSuggestionStatus("error");
      setSuggestionMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Local Business Promotion
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                Get your Glenwood business in front of visitors.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">
                Glenwood Arkansas Guide helps visitors find places to eat, stay,
                shop, float, explore, and plan time around the Caddo River, Lake
                Greeson, cabins, restaurants, and nearby local stops. Basic
                listings are free so the guide stays useful, and featured
                options are kept affordable for small local businesses that want
                better visibility.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-[color:var(--bg-card)] p-5 shadow-sm">
                  <h2 className="text-lg font-semibold">Built for visitors</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    The guide is organized around what people are already
                    looking for: restaurants, cabins, river trips, local shops,
                    events, and things to do around Glenwood.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-[color:var(--bg-card)] p-5 shadow-sm">
                  <h2 className="text-lg font-semibold">
                    Affordable visibility
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    Start with a free listing, upgrade to featured placement, or
                    add a full Business Spotlight page with more room for photos
                    and details.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:8702604880"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 font-medium text-white shadow transition hover:scale-[1.02] hover:shadow-lg"
                >
                  Call or Text: (870) 260-4880
                </a>

                <Link href="/local-business" className="btn">
                  View Local Businesses
                </Link>
              </div>
            </div>

            <form
              id="advertise-form"
              onSubmit={handleAdvertiseSubmit}
              className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8"
            >
              <div className="mb-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Get Listed
                </p>

                <h2 className="text-3xl font-semibold">
                  Request advertising info
                </h2>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  Send over a few details and we’ll follow up about getting your
                  business listed, featured, or added as a full Business
                  Spotlight on the Glenwood Arkansas guide.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Business name *
                  </span>
                  <input
                    name="businessName"
                    required
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Business name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Your name *
                  </span>
                  <input
                    name="contactName"
                    required
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Email *
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Phone
                  </span>
                  <input
                    name="phone"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Phone number"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Business type *
                  </span>
                  <select
                    name="businessType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Listing interest
                  </span>
                  <select
                    name="listingType"
                    defaultValue="Not sure yet"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                  >
                    <option>Not sure yet</option>
                    <option>Basic listing</option>
                    <option>Featured listing</option>
                    <option>Business Spotlight</option>
                    <option>Website / SEO help too</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Website or Facebook
                  </span>
                  <input
                    name="website"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Website or Facebook link"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Location / service area
                  </span>
                  <input
                    name="location"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Glenwood, Caddo River, Lake Greeson, etc."
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-semibold">
                  What would you like listed or promoted?
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="min-h-[140px] w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                  placeholder="Tell us about your business, what you offer, and what kind of visibility you’re interested in."
                />
              </label>

              <button
                type="submit"
                disabled={advertiseStatus === "loading"}
                className="mt-6 w-full rounded-full bg-[color:var(--color-accent)] px-6 py-3 font-medium text-white shadow transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {advertiseStatus === "loading"
                  ? "Sending..."
                  : "Submit Request"}
              </button>

              {advertiseMessage && (
                <p
                  className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${
                    advertiseStatus === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {advertiseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Simple listing options</h2>
            <p>
              We keep advertising low-cost and straightforward. Local businesses
              can start free, upgrade for more visibility, or add a full
              spotlight page with more details and images.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {listingOptions.map((option) => (
              <div
                key={option.title}
                className="flex h-full flex-col rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold">{option.title}</h3>

                <p className="mt-3 text-2xl font-bold text-[color:var(--color-accent)]">
                  {option.price}
                </p>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  {option.text}
                </p>

                <a
                  href="#advertise-form"
                  className="mt-auto inline-flex pt-6 font-bold text-[color:var(--color-accent)]"
                >
                  Ask about this →
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[color:var(--color-muted)]">
            Featured placement depends on fit, page layout, and available space.
            Business Spotlight pages are best for cabins, restaurants, river
            outfitters, shops, attractions, venues, and visitor-friendly local
            businesses with more to show.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Help Improve the Guide
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                Have a local suggestion, business idea, or update?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">
                This form is for everything that is not a direct advertising
                request: businesses we should add, local restaurants we missed,
                cabin or river tips, page ideas, corrections, photo ideas, or
                places around Glenwood that deserve more attention.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-[color:var(--bg-card)] p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">
                    Business suggestions
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    Restaurants, cabins, Caddo River stops, local shops,
                    attractions, service businesses, and places visitors should
                    know about.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-[color:var(--bg-card)] p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">Guide updates</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    Send missing info, outdated details, local tips, photo
                    ideas, hidden places, or suggestions for future Glenwood
                    guide pages.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSuggestionSubmit}
              className="rounded-3xl border border-black/5 bg-[color:var(--bg-card)] p-6 shadow-sm md:p-8"
            >
              <div className="mb-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Send a Suggestion
                </p>

                <h2 className="text-3xl font-semibold">
                  Suggest a place or update
                </h2>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  Help us make the Glenwood guide more useful for locals,
                  visitors, families, river trips, and people planning weekends
                  around the area.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Your name
                  </span>
                  <input
                    name="name"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Suggestion type *
                  </span>
                  <select
                    name="suggestionType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {suggestionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Place / business name
                  </span>
                  <input
                    name="placeName"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Name of the place"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Location
                  </span>
                  <input
                    name="location"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Glenwood, Amity, Caddo River, nearby area, etc."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Website, Facebook, or link
                  </span>
                  <input
                    name="link"
                    className="w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                    placeholder="Optional link"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-semibold">
                  What should we know?
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="min-h-[140px] w-full rounded-xl border border-black/10 bg-white p-3 outline-none"
                  placeholder="Tell us what should be added, corrected, updated, or looked into for the guide."
                />
              </label>

              <button
                type="submit"
                disabled={suggestionStatus === "loading"}
                className="mt-6 w-full rounded-full bg-[color:var(--color-accent)] px-6 py-3 font-medium text-white shadow transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {suggestionStatus === "loading"
                  ? "Sending..."
                  : "Send Suggestion"}
              </button>

              {suggestionMessage && (
                <p
                  className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${
                    suggestionStatus === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {suggestionMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}