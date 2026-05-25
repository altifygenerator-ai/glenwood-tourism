"use client";

import Link from "next/link";
import { useState } from "react";

const thingsToDoLinks = [
  { href: "/explore", label: "Things To Do" },
  { href: "/john-benjamin-pond", label: "John Benjamin Fishing Pond" },
];

const planLinks = [
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Places to Stay" },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/history", label: "Glenwood History" },
];

const articleLinks = [
  { href: "/bard-springs", label: "Bard Springs Recreation Area" },
];

const eventLinks = [
  { href: "/events", label: "Events" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/submit-event", label: "Submit an Event" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--color-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-base font-semibold tracking-wide text-[color:var(--color-text)]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-accent)] text-white shadow-sm">
            🌿
          </span>
          <span className="leading-tight">
            Glenwood Arkansas
            <span className="block text-xs font-medium tracking-normal text-[color:var(--color-muted)]">
              Local Tourism Guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          <div className="group relative">
            <button className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]">
              Things To Do ▾
            </button>

            <div className="absolute left-0 top-full hidden min-w-[240px] pt-3 group-hover:block">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-[color:var(--bg-card)] py-2 text-[color:var(--color-text)] shadow-xl">
                {thingsToDoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 transition hover:bg-[color:var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]">
              Plan Your Trip ▾
            </button>

            <div className="absolute left-0 top-full hidden min-w-[230px] pt-3 group-hover:block">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-[color:var(--bg-card)] py-2 text-[color:var(--color-text)] shadow-xl">
                {planLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 transition hover:bg-[color:var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]">
              Articles ▾
            </button>

            <div className="absolute left-0 top-full hidden min-w-[250px] pt-3 group-hover:block">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-[color:var(--bg-card)] py-2 text-[color:var(--color-text)] shadow-xl">
                {articleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 transition hover:bg-[color:var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]">
              Events ▾
            </button>

            <div className="absolute left-0 top-full hidden min-w-[200px] pt-3 group-hover:block">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-[color:var(--bg-card)] py-2 text-[color:var(--color-text)] shadow-xl">
                {eventLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 transition hover:bg-[color:var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/local-business"
            className="font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]"
          >
            Local Businesses
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--color-accent)] px-4 py-2.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Promote Your Business
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-black/10 bg-[color:var(--bg-card)] px-4 py-2 text-sm font-semibold text-[color:var(--color-text)] shadow-sm transition hover:bg-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[color:var(--color-bg)] px-6 pb-6 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 pt-4 text-sm">
            <div className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-3 shadow-sm">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Things To Do
              </p>

              {thingsToDoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-[color:var(--color-bg)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-3 shadow-sm">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Plan Your Trip
              </p>

              {planLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-[color:var(--color-bg)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-3 shadow-sm">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Articles
              </p>

              {articleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-[color:var(--color-bg)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-xl border border-black/10 bg-[color:var(--bg-card)] p-3 shadow-sm">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Events
              </p>

              {eventLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-[color:var(--color-bg)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/local-business"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[color:var(--bg-card)] px-4 py-3 font-medium shadow-sm"
            >
              Local Businesses
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[color:var(--color-accent)] px-4 py-3 text-center font-semibold text-white shadow-sm"
            >
              Promote Your Business
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}