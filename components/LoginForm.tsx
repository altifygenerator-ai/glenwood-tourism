"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

type LoginStatus = "idle" | "loading" | "success" | "error";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<LoginStatus>("idle");
  const [message, setMessage] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${siteUrl}/auth/callback`,
      },
    });

    if (error) {
      setStatus("error");
      setMessage("Could not send login link. Check the email and try again.");
      return;
    }

    setStatus("success");
    setMessage("Check your email for the login link.");
  }

  return (
    <div className="max-w-xl rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <form className="space-y-5" onSubmit={handleLogin}>
        <label className="space-y-2 block">
          <span className="block text-sm font-semibold text-[color:var(--color-text)]">
            Email Address
          </span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
          />
        </label>

        <button
          className="rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Login Link"}
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