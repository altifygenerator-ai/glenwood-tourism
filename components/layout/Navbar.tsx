"use client";

import Link from "next/link";
import { useState } from "react";

const sisterSites = [
  {
    href: "https://amityarkansas.org",
    label: "Visit Amity",
  },
  {
    href: "https://mountidaarkansas.org",
    label: "Visit Mount Ida",
  },
  {
    href: "https://hotspringsarkansas.org",
    label: "Visit Hot Springs",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-wide">
          🌿 Glenwood Arkansas
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/explore" className="hover:opacity-70">
            Things To Do
          </Link>

          <div className="relative group">
            <button className="hover:opacity-70">Plan Your Trip ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md shadow-lg border min-w-[190px] py-2">
              <Link
                href="/glenwood-ar-restaurants"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Restaurants
              </Link>

              <Link
                href="/glenwood-ar-cabins"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Cabins & Places to Stay
              </Link>

              <Link
                href="/history"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Glenwood History
              </Link>
              <Link
  href="/caddo-river"
  className="block px-4 py-2 hover:bg-black/5"
>
  Caddo River
</Link>
            </div>
          </div>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          <div className="relative group">
            <button className="hover:opacity-70">Sister Sites ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md shadow-lg border min-w-[190px] py-2">
              {sisterSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-black/5"
                >
                  {site.label}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded-md font-medium hover:opacity-90"
          >
            Promote Your Business
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-md border border-black/10 px-3 py-2 text-sm font-medium hover:bg-black/5"
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-[color:var(--color-bg)] px-6 pb-6">
          <nav className="max-w-6xl mx-auto flex flex-col gap-2 pt-4 text-sm">
            <Link
              href="/explore"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-black/5"
            >
              Things To Do
            </Link>

            <div className="rounded-md border border-black/5 bg-white/50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/50">
                Plan Your Trip
              </p>

              <div className="flex flex-col gap-1">
                <Link
                  href="/glenwood-ar-restaurants"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-black/5"
                >
                  Restaurants
                </Link>

                <Link
                  href="/glenwood-ar-cabins"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-black/5"
                >
                  Cabins & Places to Stay
                </Link>
                <Link
  href="/caddo-river"
  className="block px-4 py-2 hover:bg-black/5"
>
  Caddo River
</Link>

                <Link
                  href="/history"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-black/5"
                >
                  Glenwood History
                </Link>
              </div>
            </div>

            <Link
              href="/local-business"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-black/5"
            >
              Local Businesses
            </Link>

            <div className="rounded-md border border-black/5 bg-white/50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/50">
                Sister Sites
              </p>

              <div className="flex flex-col gap-1">
                {sisterSites.map((site) => (
                  <a
                    key={site.href}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-3 py-2 hover:bg-black/5"
                  >
                    {site.label}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[color:var(--color-accent)] text-white px-4 py-3 rounded-md font-medium text-center hover:opacity-90"
            >
              Promote Your Business
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}