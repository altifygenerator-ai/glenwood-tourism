"use client";

import Link from "next/link";
import { useState } from "react";

const planLinks = [
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Cabins & Places to Stay" },
  { href: "/caddo-river", label: "Caddo River" },
  { href: "/history", label: "Glenwood History" },
];

const eventLinks = [
  { href: "/events", label: "Events" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/submit-event", label: "Submit an Event" },
];

const sisterSites = [
  { href: "https://amityarkansas.org", label: "Visit Amity" },
  { href: "https://mountidaarkansas.org", label: "Visit Mount Ida" },
  { href: "https://hotspringsarkansas.org", label: "Visit Hot Springs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          🌿 Glenwood Arkansas
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/explore" className="hover:opacity-70">
            Things To Do
          </Link>

          <div className="group relative">
            <button className="hover:opacity-70">Plan Your Trip ▾</button>
            <div className="absolute left-0 top-full hidden min-w-[220px] rounded-md border bg-white py-2 text-black shadow-lg group-hover:block">
              {planLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-4 py-2 hover:bg-black/5">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="hover:opacity-70">Events ▾</button>
            <div className="absolute left-0 top-full hidden min-w-[190px] rounded-md border bg-white py-2 text-black shadow-lg group-hover:block">
              {eventLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-4 py-2 hover:bg-black/5">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          <Link href="/contact" className="rounded-md bg-[color:var(--color-accent)] px-4 py-2 font-medium text-white hover:opacity-90">
            Promote Your Business
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-black/10 px-3 py-2 text-sm font-medium hover:bg-black/5 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[color:var(--color-bg)] px-6 pb-6 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 pt-4 text-sm">
            <Link href="/explore" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-black/5">
              Things To Do
            </Link>

            <div className="rounded-md border border-black/5 bg-white/50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/50">Plan Your Trip</p>
              {planLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-md border border-black/5 bg-white/50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/50">Events</p>
              {eventLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/local-business" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-black/5">
              Local Businesses
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-[color:var(--color-accent)] px-4 py-3 text-center font-medium text-white hover:opacity-90">
              Promote Your Business
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}