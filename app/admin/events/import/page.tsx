import Link from "next/link";
import QuickImportForm from "@/components/events/QuickImportForm";

export const dynamic = "force-dynamic";

export default function ImportEventPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Admin
          </p>

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Quick Import Event
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Paste event text from Facebook, a flyer, email, or venue post. It
            saves as pending so you can review it before publishing.
          </p>
        </div>

        <Link href="/admin/events" className="rounded-md border px-6 py-3">
          Back to Events
        </Link>
      </div>

      <QuickImportForm />
    </main>
  );
}
