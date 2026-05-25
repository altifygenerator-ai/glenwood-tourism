import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bard Springs Recreation Area | What Happened to This Forgotten Arkansas Swimming Spot?",
  description:
    "A local feature on Bard Springs Recreation Area, its CCC history, old swimming and camping memories, storm damage, limited access, and the question of restoration.",
  alternates: {
    canonical: "/bard-springs",
  },
};

const pageLinks = [
  {
    label: "Caddo River Guide",
    href: "/caddo-river",
  },
  {
    label: "Things To Do",
    href: "/explore",
  },
  {
    label: "Glenwood Events",
    href: "/events",
  },
  {
    label: "Restaurants",
    href: "/glenwood-ar-restaurants",
  },
];

const rememberedFeatures = [
  "Swimming along Blaylock Creek",
  "A small campground area",
  "Picnic shelter",
  "CCC-built bathhouse",
  "Stone dams and old rockwork",
  "Quiet Ouachita Mountain setting",
];

const currentNotes = [
  "The campground is listed as closed due to storm damage.",
  "The day-use area is listed as open.",
  "Access is currently walk-in only.",
  "The site is not operating like the campground and swimming area many people remember.",
  "Visitors should check the Forest Service listing before driving out.",
  "Damaged structures, closures, and historic features should be respected.",
];

const whatCanHelp = [
  "Sharing old photos and family memories",
  "Asking the Forest Service about current repair plans",
  "Keeping the site in local tourism and preservation conversations",
  "Connecting with historic preservation groups when possible",
  "Supporting approved cleanup or volunteer efforts if they happen",
  "Visiting respectfully and not making the damage worse",
];

export default function BardSpringsPage() {
  return (
    <main>
      <section className="relative min-h-[82vh] flex items-center overflow-hidden dark-section">
        <div className="absolute inset-0 bg-[color:var(--color-accent)]">
          <img
            src="/images/glenwood/bard-springs-hero.jpg"
            alt="Bard Springs Recreation Area in Arkansas"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/70 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              Arkansas places people still remember
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              What Happened to Bard Springs?
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/80">
              A local look at the history, memories, storm damage, and
              restoration questions around one of Arkansas’s old swimming and
              camping spots.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#story" className="btn btn-light">
                Read the Story
              </a>

              <a
                href="#restoration"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Restoration Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              A place people have not forgotten
            </p>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Some Arkansas places stick with people long after the signs fade
              and the road gets quiet.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Bard Springs seems to be one of those places. Ask around long
                enough, and somebody will remember swimming there, camping
                there, taking their kids there, or hearing stories from family
                about when it was still a regular place to spend the day.
              </p>

              <p>
                It was never the kind of place that needed a big attraction
                wrapped around it. That was part of the appeal. It was water,
                shade, stonework, picnic spots, a campground, and a quiet
                Ouachita Mountain setting. Simple enough to use, but memorable
                enough that people still talk about it years later.
              </p>

              <p>
                That is why seeing Bard Springs in its current state hits a
                little different. People are not just asking about a closed
                campground. They are asking what happened to a place that meant
                something.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                What Bard Springs used to be
              </p>

              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                It was a swimming spot, campground, picnic area, and local
                memory all in one.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Bard Springs Recreation Area sits in the Ouachita National
                  Forest near Blaylock Creek. Older descriptions and local
                  memories point to a place where families could swim, picnic,
                  camp, and spend time outside without needing much more than
                  the water and the woods.
                </p>

                <p>
                  That kind of place matters in Arkansas. Not everything has to
                  be polished or built up to be worth saving. Sometimes the
                  places people remember most are the ones that were just easy
                  to use. A creek. A campsite. A shelter. A place to cool off in
                  the summer.
                </p>

                <p>
                  Bard Springs had that kind of pull. It gave people a simple
                  reason to gather outside, and for a lot of folks, that is
                  enough to make it worth remembering.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <img
                src="/images/glenwood/bard-springs-water.jpg"
                alt="Water and stone features at Bard Springs"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-4 text-2xl">What people remember</h3>

                <div className="grid gap-3">
                  {rememberedFeatures.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/10 bg-[color:var(--color-bg)] px-4 py-3 text-sm font-semibold text-[color:var(--color-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/45 shadow-sm">
              <img
                src="/images/glenwood/bard-springs-stonework.jpg"
                alt="Historic stonework at Bard Springs Recreation Area"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                The history still matters
              </p>

              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Bard Springs is not just an old swimming hole.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Part of what makes Bard Springs worth talking about is the
                  history still tied to the site. The recreation area has
                  Civilian Conservation Corps-era stonework, including the old
                  bathhouse, dams, and picnic shelter that helped shape the site
                  into a public outdoor recreation area.
                </p>

                <p>
                  That matters because those structures were built with purpose.
                  They were part of a time when public recreation areas were
                  created for regular people to actually use. Families could
                  swim, picnic, camp, and gather there. It was not just scenery.
                  It was built as a place for the public.
                </p>

                <p>
                  When a place like that starts slipping away, it is not only a
                  loss of access. It is a loss of local history, old
                  craftsmanship, and a piece of Arkansas outdoor life that is
                  getting harder to replace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              So what happened?
            </p>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              That is the question people keep circling back to.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                The official public answer right now points to storm damage. The
                campground is listed as closed due to storm damage, while the
                day-use area is listed as open with walk-in access.
              </p>

              <p>
                So it would not be fair to say Bard Springs is completely gone.
                It is not. But it is also not the fully usable campground and
                swimming area many people remember. That puts it in a strange
                place — still there, still meaningful, but not really back.
              </p>

              <p>
                And honestly, that might be the saddest part. It is one thing
                when a place disappears completely. It is another thing when it
                is still sitting there, with history and memories attached to
                it, waiting on somebody to decide what happens next.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {currentNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-5 text-sm font-semibold leading-7 text-[color:var(--color-text)]"
                >
                  {note}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Why people still care
              </p>

              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Forgotten places usually do not become forgotten all at once.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  They fade a little at a time. A storm comes through. A
                  campground closes. Repairs get delayed. Budgets get tight.
                  People stop seeing updates. Then years pass, and a place that
                  used to be full of families becomes something people only
                  bring up in comments.
                </p>

                <p>
                  That does not mean people stopped caring. It usually means the
                  place stopped being visible. And once a place is out of sight,
                  it becomes a lot easier for everyone else to move on.
                </p>

                <p>
                  Bard Springs still seems to have people who remember it. That
                  is worth something. Old photos, stories, family memories, and
                  even public questions can keep a place from falling completely
                  out of the conversation.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <img
                src="/images/glenwood/bard-springs-area.jpg"
                alt="Bard Springs Recreation Area in the Ouachita National Forest"
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl">A place worth documenting</h3>
                <p className="text-sm leading-7">
                  If you have old photos, family memories, current updates, or
                  stories from Bard Springs, those details help keep the place
                  from disappearing out of public memory completely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="restoration" className="section bg-white/35">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-8 md:p-12">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                What can be done?
              </p>

              <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
                Bringing attention back to Bard Springs is a start.
              </h2>

              <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Restoring a place like Bard Springs is not as simple as one
                  Facebook post or one person saying something should be fixed.
                  It is public land. There is storm damage involved. Historic
                  structures can come with safety concerns, rules, funding
                  needs, and agency processes.
                </p>

                <p>
                  But awareness still matters. People can share old pictures and
                  stories. They can ask the Forest Service about the current
                  status and whether any repair plans exist. Local tourism and
                  preservation groups can keep the site in the conversation.
                  Cleanup or volunteer help may matter if there is ever an
                  approved effort.
                </p>

                <p>
                  And anyone who visits can do the basic part right now: respect
                  closures, stay out of damaged areas, do not vandalize the
                  stonework, pack out trash, and treat Bard Springs like a place
                  that still means something to people.
                </p>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {whatCanHelp.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-5 text-sm font-semibold leading-7 text-[color:var(--color-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] bg-[color:var(--color-accent)] p-7 md:p-9">
                <h3 className="mb-4 text-3xl leading-tight text-white">
                  The question now is pretty simple:
                </h3>

                <p className="text-xl leading-9 !text-white/85">
                  What will the state, county, Forest Service, local leaders,
                  tourism groups, or preservation partners do to help restore a
                  place that so many Arkansans still remember?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Before you go
              </p>

              <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
                Visit with realistic expectations and some respect for what is
                left.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Bard Springs should not be treated like a normal full-service
                  campground right now. If you go, check the current Forest
                  Service information first, expect limited access, and do not
                  assume the site is repaired or operating like it used to.
                </p>

                <p>
                  Bring water, expect walk-in access, respect posted closures,
                  and be careful around old or damaged structures. The goal
                  should be to appreciate the place without adding to the
                  problems already there.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#2d2a26] p-7 text-white md:p-10">
              <h3 className="mb-4 text-3xl text-white">
                Do you remember Bard Springs?
              </h3>

              <p className="mb-6 text-base leading-8 !text-white/75">
                Old pictures, family memories, and current updates matter here.
                Arkansas places like this should not just quietly disappear
                from memory because nobody is talking about them anymore.
              </p>

              <div className="flex flex-wrap gap-3">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2d2a26]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}