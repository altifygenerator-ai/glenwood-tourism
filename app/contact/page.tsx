"use client";

import { useState } from "react";

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

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

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

      setStatus("success");
      setMessage(
        "Thanks! Your request was sent. We’ll get back with you as soon as we can."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-3">
            Local Business Promotion
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Promote Your Business in Glenwood
          </h1>

          <p className="text-lg text-[color:var(--color-muted)] leading-relaxed max-w-2xl">
            Get your business in front of visitors looking for restaurants,
            cabins, river trips, coffee, local shops, services, and things to do
            around Glenwood, the Caddo River, Lake Greeson, and the surrounding
            area.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-sm border border-black/5">
              <h2 className="text-lg font-semibold mb-2">Basic Listing</h2>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                Business name, category, description, contact info, website or
                Facebook link, and directions.
              </p>
            </div>

            <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-sm border border-black/5">
              <h2 className="text-lg font-semibold mb-2">Featured Spot</h2>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                A stronger placement for businesses that want more visibility on
                restaurant, cabin, local guide, or homepage sections.
              </p>
            </div>

            <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-sm border border-black/5">
              <h2 className="text-lg font-semibold mb-2">Visitor Traffic</h2>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                Reach people searching for places to eat, stay, shop, and
                explore near Glenwood.
              </p>
            </div>

            <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-sm border border-black/5">
              <h2 className="text-lg font-semibold mb-2">Local Support</h2>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                Not sure where your business fits? Send the details and we’ll
                help point you toward the best option.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="tel:8702604880"
              className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition hover:scale-[1.02]"
            >
              Call or Text: (870) 260-4880
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[color:var(--bg-card)] rounded-3xl p-6 md:p-8 shadow-sm border border-black/5"
        >
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
              Get Listed
            </p>

            <h2 className="text-3xl font-semibold">Request advertising info</h2>

            <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">
              Send over a few details and we’ll follow up about getting your
              business listed or featured on the Glenwood Arkansas guide.
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
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
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
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Email *</span>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Phone</span>
              <input
                name="phone"
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
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
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
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
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
              >
                <option>Not sure yet</option>
                <option>Basic listing</option>
                <option>Featured placement</option>
                <option>Sponsored feature</option>
                <option>Website / SEO help too</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold">
                Website or Facebook
              </span>
              <input
                name="website"
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
                placeholder="Website or Facebook link"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold">
                Location / service area
              </span>
              <input
                name="location"
                className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none"
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
              className="w-full border border-black/10 p-3 rounded-xl bg-white outline-none min-h-[140px]"
              placeholder="Tell us about your business, what you offer, and what kind of visibility you’re interested in."
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Submit Request"}
          </button>

          {message && (
            <p
              className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${
                status === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}