import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fourth of July in Glenwood, Arkansas 2026 | Fireworks & Caddo River",
  description:
    "Plan Fourth of July in Glenwood, Arkansas with 2026 fireworks notes, Caddo River weekend ideas, family tips, local food, cabins, and nearby things to do.",
  keywords: [
    "Fourth of July Glenwood Arkansas",
    "Glenwood Arkansas fireworks",
    "Glenwood AR July 4 events",
    "Caddo River Fourth of July",
    "Glenwood Arkansas holiday weekend",
    "Glenwood Arkansas family events",
  ],
  alternates: { canonical: "/glenwood-fourth-of-july" },
};

const images = {
  hero: "/images/holiday/glenwood-fourth-of-july-hero.jpg",
  fireworks: "/images/holiday/glenwood-fireworks.webp",
  river: "/images/holiday/caddo-river-summer.webp",
};

const verifiedEvents = [
  {
    name: "7th Annual 4th of July Fireworks Celebration",
    label: "Verified Fireworks Event",
    date: "Friday, July 3, 2026",
    time: "8:00 PM",
    location: "Nightingale at Glenwood / Dougan’s Oak Park",
    address: "615 & 507 Mountain View Rd, Glenwood, AR",
    description:
      "Nightingale at Glenwood and Dougan’s Oak Park are hosting the 7th Annual 4th of July Fireworks Celebration. This is the main verified holiday fireworks listing we found for Glenwood so far, with an evening start time and a community-style fireworks setup close to town.",
    details: [
      "Fireworks celebration scheduled for July 3rd at 8:00 PM",
      "Hosted around Nightingale at Glenwood and Dougan’s Oak Park",
      "Good fit for families looking for a local Glenwood holiday night",
      "Bring chairs, give yourself time to park, and check the host page before heading out",
    ],
    href: "https://www.glenwoodarkansas.org/events/7th-annual-4th-of-july-fireworks-celebration",
    cta: "View Event",
    image: images.fireworks,
  },
];

const weekendIdeas = [
  {
    title: "Make the Caddo River part of the day",
    text: "July in Glenwood usually means hot weather, river time, and slower outdoor plans. If the river is part of your holiday weekend, check water levels, respect private property, and build in time to dry off before evening plans.",
    href: "/caddo-river",
    cta: "Caddo River Guide",
  },
  {
    title: "Plan around food and a cool-down break",
    text: "A holiday weekend works better when you do not try to pack every minute. Use the restaurants guide for breakfast, lunch, dinner, coffee, or a simple meal before or after the fireworks.",
    href: "/glenwood-ar-restaurants",
    cta: "Restaurants",
  },
  {
    title: "Stay close if you are coming in for the weekend",
    text: "Cabins, campgrounds, motels, and nearby lake stays can make Glenwood an easy base for a July 4 weekend around the Caddo River, Lake Greeson, and small-town events.",
    href: "/glenwood-ar-cabins",
    cta: "Cabins & Stays",
  },
];

const dayPlan = [
  {
    time: "Morning",
    title: "Start slow with breakfast or a river plan",
    text: "Grab food, pack water, check the weather, and decide whether the day is going to be a Caddo River day, a Lake Greeson day, or a simple in-town family day.",
  },
  {
    time: "Midday",
    title: "Build in shade, water, and downtime",
    text: "Glenwood is best when you keep the plan simple. If kids are with you, plan around short stops, easy meals, and time to cool off before the evening event.",
  },
  {
    time: "Evening",
    title: "Head toward the fireworks early",
    text: "The verified fireworks listing starts at 8:00 PM on July 3. Give yourself time for parking, chairs, kids, and getting settled before the show.",
  },
];

const tripTips = [
  "Bring chairs or blankets if you are going to the fireworks.",
  "Check the event host before leaving in case weather or details change.",
  "Plan for summer heat, bugs, traffic, and limited parking near event areas.",
  "Keep pets and small kids in mind. Fireworks can be loud and crowded.",
  "If you are floating or swimming, respect private land and use legal access points.",
  "Send in verified local events so this guide can stay current.",
];

const faqs = [
  {
    question: "Are there Fourth of July fireworks in Glenwood, Arkansas in 2026?",
    answer:
      "The verified Glenwood fireworks listing we found is the 7th Annual 4th of July Fireworks Celebration on Friday, July 3, 2026 at 8:00 PM at Nightingale at Glenwood / Dougan’s Oak Park.",
  },
  {
    question: "Why is the Glenwood fireworks event on July 3 instead of July 4?",
    answer:
      "Some local fireworks celebrations happen the night before July 4. The current verified listing for Glenwood is scheduled for Friday, July 3, 2026.",
  },
  {
    question: "What else can families do around Glenwood for July 4 weekend?",
    answer:
      "Families can plan around the Caddo River, John Benjamin Pond, Lake Greeson, local restaurants, cabins, campgrounds, and nearby outdoor stops. Keep the day flexible and check conditions before heading to the river or lake.",
  },
  {
    question: "How can a local event be added to this page?",
    answer:
      "Send the event details through the submit event page. We only add public events once there is enough information to verify the date, time, location, and host.",
  },
];

function EventCard({ event }: { event: (typeof verifiedEvents)[number] }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <a
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-[320px] overflow-hidden bg-[color:var(--color-accent)] lg:min-h-[560px]"
        >
          <Image
            src={event.image}
            alt={event.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
            {event.label}
          </div>
        </a>

        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            {event.date} • {event.time}
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {event.name}
          </h2>

          <p className="mt-4 text-base font-semibold text-[color:var(--color-text)]">
            {event.location}
          </p>

          <p className="mt-2 text-sm font-medium text-[color:var(--color-muted)]">
            {event.address}
          </p>

          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            {event.description}
          </p>

          <ul className="mt-6 grid gap-3">
            {event.details.map((detail) => (
              <li
                key={detail}
                className="rounded-2xl border border-black/10 bg-white/60 p-4 text-sm font-semibold leading-6 text-[color:var(--color-text)]"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={event.href} target="_blank" rel="noopener noreferrer" className="btn">
              {event.cta}
            </a>
            <Link href="/submit-event" className="btn btn-light">
              Submit Another Event
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GlenwoodFourthOfJulyPage() {
  const mainEvent = verifiedEvents[0];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: mainEvent.name,
              description: mainEvent.description,
              startDate: "2026-07-03T20:00:00-05:00",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: mainEvent.location,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "615 & 507 Mountain View Rd",
                  addressLocality: "Glenwood",
                  addressRegion: "AR",
                  addressCountry: "US",
                },
              },
              url: mainEvent.href,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]),
        }}
      />

      <section className="relative overflow-hidden bg-[#2d2a26] text-white">
        <Image
          src={images.hero}
          alt="Fourth of July in Glenwood Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Fourth of July in Glenwood
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Fireworks, river days, and a small-town holiday weekend around Glenwood.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Use this guide to plan July 4 weekend around the verified Glenwood fireworks listing, the Caddo River, local food, cabins, kids, nearby outdoor stops, and simple holiday travel tips.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#verified-event" className="btn btn-light">See Verified Event</a>
              <a href="#weekend-plan" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Plan the Weekend</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["July 3", "Verified fireworks night", "The verified Glenwood fireworks listing we found is scheduled for Friday evening before July 4."],
              ["8 PM", "Event start time", "Arrive early enough for parking, chairs, kids, and getting settled before the fireworks."],
              ["Local", "Events wanted", "More events can be added when the date, time, place, and host can be verified."],
            ].map(([big, title, text]) => (
              <div key={title} className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
                <strong className="block text-4xl leading-none text-[color:var(--color-accent)]">{big}</strong>
                <p className="mt-2 font-semibold text-[color:var(--color-text)]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verified-event" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Verified Event</p>
            <h2>Confirmed Glenwood Fourth of July weekend event.</h2>
            <p>We are keeping this page practical. Only verified public listings get added here, and local maybes can be checked before they are published.</p>
          </div>
          <EventCard event={mainEvent} />
        </div>
      </section>

      <section id="weekend-plan" className="section bg-white/35">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Holiday Weekend Plan</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Build the day around water, food, and an easy evening plan.</h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">Glenwood does not need to be overplanned. A good July 4 weekend can be as simple as a river morning, lunch in town, a break in the heat, and fireworks after dark.</p>
            </div>
            <div className="grid gap-4">
              {dayPlan.map((item) => (
                <div key={item.title} className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">{item.time}</p>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Around Glenwood</p>
            <h2>Helpful guides for a July 4 weekend.</h2>
            <p>These pages help visitors turn one fireworks event into a full river, food, cabin, or family weekend around Glenwood.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {weekendIdeas.map((idea) => (
              <Link key={idea.title} href={idea.href} className="group rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-semibold leading-tight">{idea.title}</h3>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">{idea.text}</p>
                <span className="mt-5 inline-block font-semibold text-[color:var(--color-accent)]">{idea.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[color:var(--color-accent)]">
              <Image src={images.river} alt="Caddo River near Glenwood Arkansas" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">River Weekend Reminder</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">The Caddo is part of the holiday draw, but the river still needs respect.</h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">If you are floating, swimming, fishing, or hanging out around the Caddo River during the holiday weekend, check current river conditions, use legal access points, and remember that not every pretty gravel bar or bank is public land.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/caddo-river" className="btn">Caddo River Guide</Link>
                <Link href="/caddo-river-swimming-access" className="btn btn-light">Swimming Access Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Local Tips</p>
            <h2>Before you go.</h2>
            <p>A small amount of planning makes the holiday weekend easier, especially with kids, heat, parking, river plans, and fireworks.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tripTips.map((tip) => (
              <div key={tip} className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm">
                <p className="font-semibold leading-7 text-[color:var(--color-text)]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Help Keep This Current</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Know another verified Glenwood July 4 event?</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[color:var(--color-muted)]">If a church, business, venue, city group, restaurant, campground, or local organization announces a public Fourth of July event, send it in. We need the event name, host, date, time, location, and a public source before adding it.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/submit-event" className="btn">Submit an Event</Link>
                <Link href="/events" className="btn btn-light">View All Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">Questions</p>
            <h2>Glenwood Fourth of July FAQ</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm">
                <h3 className="text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
