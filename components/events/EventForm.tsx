"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type EventFormProps = {
  sourceType?: "submission" | "manual";
  site?: "glenwood" | "mount-ida" | "hot-springs" | "amity";
  defaultCity?: string;
};

export default function EventForm({
  sourceType = "submission",
  site = "glenwood",
  defaultCity = "Glenwood",
}: EventFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      site,
      title: String(formData.get("title") || ""),
      raw_description: String(formData.get("raw_description") || ""),
      description: String(formData.get("raw_description") || ""),
      city: String(formData.get("city") || defaultCity),
      location_name: String(formData.get("location_name") || ""),
      address: String(formData.get("address") || ""),
      start_date: String(formData.get("start_date") || ""),
      end_date: String(formData.get("end_date") || ""),
      start_time: String(formData.get("start_time") || ""),
      end_time: String(formData.get("end_time") || ""),
      category: String(formData.get("category") || ""),
      source_url: String(formData.get("source_url") || ""),
      submitter_name: String(formData.get("submitter_name") || ""),
      submitter_email: String(formData.get("submitter_email") || ""),
      source_type: sourceType,
    };

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Event submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage(
        sourceType === "manual"
          ? "Event saved as pending. You can approve it from the admin events page."
          : "Thanks — your event was submitted for review."
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-2xl bg-[#f7f0e3] p-5">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Events are reviewed before they appear publicly. Add the date,
            time, location, and a source link if you have one.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Event Name *
            </span>
            <input
              name="title"
              required
              placeholder="Example: Caddo River Weekend Market"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Category
            </span>
            <select
              name="category"
              defaultValue=""
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option>Live Music</option>
              <option>Festival</option>
              <option>Family Friendly</option>
              <option>Food & Drink</option>
              <option>Outdoor</option>
              <option>Arts & Culture</option>
              <option>Community</option>
              <option>River Season</option>
              <option>Other</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Start Date *
            </span>
            <input
              name="start_date"
              type="date"
              required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              End Date
            </span>
            <input
              name="end_date"
              type="date"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Start Time
            </span>
            <input
              name="start_time"
              type="time"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              End Time
            </span>
            <input
              name="end_time"
              type="time"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              City
            </span>
            <input
              name="city"
              defaultValue={defaultCity}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Location Name
            </span>
            <input
              name="location_name"
              placeholder="Venue, park, restaurant, river stop, etc."
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Address
            </span>
            <input
              name="address"
              placeholder="Street address if available"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Event Details *
            </span>
            <textarea
              name="raw_description"
              required
              rows={7}
              placeholder="Paste or write the event details here. Times, cost, what to expect, source link, anything helpful."
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Source Link
            </span>
            <input
              name="source_url"
              type="url"
              placeholder="Facebook event, website, ticket link, etc."
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Your Name
            </span>
            <input
              name="submitter_name"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Your Email
            </span>
            <input
              name="submitter_email"
              type="email"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </label>
        </div>

        <button
          className="rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit Event"}
        </button>

        {message && (
          <p
            className={`rounded-xl p-4 text-sm font-medium ${
              status === "success"
                ? "bg-[rgba(63,92,74,0.12)] text-[color:var(--color-accent)]"
                : status === "error"
                  ? "bg-red-50 text-red-800"
                  : ""
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}