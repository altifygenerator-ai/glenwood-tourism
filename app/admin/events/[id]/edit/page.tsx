import Link from "next/link";
import { notFound } from "next/navigation";
import EventEditForm from "@/components/events/EventEditForm";
import { getEventForAdmin } from "@/lib/events";

type EditEventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EditEventPage({ params }: EditEventPageProps) {
  const { id } = await params;
  const event = await getEventForAdmin(id);

  if (!event) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Admin
          </p>

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            Edit Event
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Clean up the imported details, confirm the date and location, then
            approve when it is ready to publish.
          </p>
        </div>

        <Link href="/admin/events" className="rounded-md border px-6 py-3">
          Back to Events
        </Link>
      </div>

      <EventEditForm event={event} />
    </main>
  );
}
