import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Admin Login | Glenwood Arkansas",
};

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Admin Login
      </p>

      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Sign in to manage events
      </h1>

      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
        Admin access is required before reviewing, cleaning, approving, or
        adding Glenwood events.
      </p>

      <LoginForm />
    </main>
  );
}