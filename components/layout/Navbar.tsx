import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="font-semibold text-lg tracking-wide">
          🌿 Glenwood Tourism
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/explore" className="hover:opacity-70">
            Things To Do
          </Link>

          <div className="relative group">
            <button className="hover:opacity-70">
              Plan Your Trip ▾
            </button>

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
            </div>
          </div>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          <a
            href="https://amityarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            Visit Amity
          </a>

          <Link
            href="/contact"
            className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded-md font-medium hover:opacity-90"
          >
            Promote Your Business
          </Link>
        </nav>
      </div>
    </header>
  );
}