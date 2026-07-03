"use client";

import { useState } from "react";
import type { TourismEvent } from "@/lib/events";

type FormStatus = "idle" | "loading" | "success" | "error";

const statuses = ["draft", "pending", "approved", "rejected"];

export default function EventEditForm({ event }: { event: TourismEvent }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function save(form: HTMLFormElement, overrideStatus?: string) {
    setStatus("loading");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      title: String(formData.get("title") || ""),
      slug: String(formData.get("slug") || ""),
      raw_description: String(formData.get("raw_description") || ""),
      description: String(formData.get("description") || ""),
      ai_summary: String(formData.get("ai_summary") || ""),
      city: String(formData.get("city") || "Glenwood"),
      location_name: String(formData.get("location_name") || ""),
      address: String(formData.get("address") || ""),
      start_date: String(formData.get("start_date") || ""),
      end_date: String(formData.get("end_date") || ""),
      start_time: String(formData.get("start_time") || ""),
      end_time: String(formData.get("end_time") || ""),
      category: String(formData.get("category") || ""),
      tags: String(formData.get("tags") || ""),
      image_url: String(formData.get("image_url") || ""),
      source_url: String(formData.get("source_url") || ""),
      status: overrideStatus || String(formData.get("status") || "pending"),
      featured: formData.get("featured") === "on",
      source_type: String(formData.get("source_type") || ""),
      external_id: String(formData.get("external_id") || ""),
      confidence_score: String(formData.get("confidence_score") || ""),
      needs_review: overrideStatus ? overrideStatus !== "approved" : formData.get("needs_review") === "on",
    };

    const res = await fetch(`/api/events/${event.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setStatus("error");
      setMessage(data?.error || "Could not save event.");
      return;
    }

    setStatus("success");
    setMessage(
      overrideStatus === "approved"
        ? "Event saved and approved."
        : overrideStatus === "rejected"
          ? "Event rejected."
          : "Event saved."
    );

    if (overrideStatus) {
      window.location.href = "/admin/events";
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await save(e.currentTarget);
  }

  async function cleanWithAI() {
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/ai/clean-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: event.id }),
    });

    if (!res.ok) {
      setStatus("error");
      setMessage("Could not clean event with AI.");
      return;
    }

    window.location.reload();
  }

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-2xl bg-[#f7f0e3] p-5">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Review imported details before publishing. Imported events stay hidden
            until the status is approved.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Event Name *
            </span>
            <input name="title" required defaultValue={event.title || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Slug
            </span>
            <input name="slug" defaultValue={event.slug || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Status
            </span>
            <select name="status" defaultValue={event.status || "pending"} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3">
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Category
            </span>
            <input name="category" defaultValue={event.category || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Start Date *
            </span>
            <input name="start_date" type="date" required defaultValue={event.start_date || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              End Date
            </span>
            <input name="end_date" type="date" defaultValue={event.end_date || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Start Time
            </span>
            <input name="start_time" type="time" defaultValue={event.start_time || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              End Time
            </span>
            <input name="end_time" type="time" defaultValue={event.end_time || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              City
            </span>
            <input name="city" defaultValue={event.city || "Glenwood"} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Location Name
            </span>
            <input name="location_name" defaultValue={event.location_name || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Address
            </span>
            <input name="address" defaultValue={event.address || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Raw Imported Details
            </span>
            <textarea name="raw_description" rows={5} defaultValue={event.raw_description || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Public Description
            </span>
            <textarea name="description" rows={7} defaultValue={event.description || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Quick Summary
            </span>
            <textarea name="ai_summary" rows={3} defaultValue={event.ai_summary || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Source URL
            </span>
            <input name="source_url" type="url" defaultValue={event.source_url || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Image URL
            </span>
            <input name="image_url" defaultValue={event.image_url || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Tags
            </span>
            <input name="tags" defaultValue={(event.tags || []).join(", ")} placeholder="Live Music, Family Friendly" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Source Type
            </span>
            <input name="source_type" defaultValue={event.source_type || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              External ID
            </span>
            <input name="external_id" defaultValue={event.external_id || ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-[color:var(--color-text)]">
              Confidence Score
            </span>
            <input name="confidence_score" type="number" step="0.01" min="0" max="1" defaultValue={event.confidence_score ?? ""} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
          </label>

          <div className="space-y-3 rounded-xl border border-black/10 p-4">
            <label className="flex items-center gap-3 text-sm font-semibold">
              <input name="featured" type="checkbox" defaultChecked={Boolean(event.featured)} />
              Featured event
            </label>

            <label className="flex items-center gap-3 text-sm font-semibold">
              <input name="needs_review" type="checkbox" defaultChecked={Boolean(event.needs_review)} />
              Needs review
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-md bg-black px-6 py-3 font-medium text-white disabled:opacity-60" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Saving..." : "Save Changes"}
          </button>

          <button type="button" onClick={cleanWithAI} disabled={status === "loading"} className="rounded-md border px-6 py-3 disabled:opacity-60">
            Clean with AI
          </button>

          <button type="button" onClick={(e) => save(e.currentTarget.form!, "approved")} disabled={status === "loading"} className="rounded-md border px-6 py-3 disabled:opacity-60">
            Save & Approve
          </button>

          <button type="button" onClick={(e) => save(e.currentTarget.form!, "rejected")} disabled={status === "loading"} className="rounded-md border border-red-200 px-6 py-3 text-red-700 disabled:opacity-60">
            Reject
          </button>
        </div>

        {message && (
          <p
            className={`rounded-xl p-4 text-sm font-medium ${
              status === "success"
                ? "bg-[rgba(63,92,74,0.12)] text-[color:var(--color-accent)]"
                : status === "error"
                  ? "bg-red-50 text-red-800"
                  : "bg-[#f7f0e3]"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
