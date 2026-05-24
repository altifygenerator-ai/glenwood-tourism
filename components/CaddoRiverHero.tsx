import Link from "next/link";
import { caddoRiverGuide } from "@/data/caddoRiver";

export default function CaddoRiverHero() {
  const { hero } = caddoRiverGuide;

  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--color-accent)]">
        <img
          src={hero.image}
          alt="Caddo River near Glenwood Arkansas"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/20" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/70 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/65">
            {hero.eyebrow}
          </div>

          <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
            {hero.title}
          </h1>

          <div className="max-w-2xl text-lg leading-8 !text-white/78">
            {hero.subtitle}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primaryCta.href} className="btn btn-light">
              {hero.primaryCta.label}
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}