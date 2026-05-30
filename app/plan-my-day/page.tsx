import type { Metadata } from "next";
import Link from "next/link";
import PlanMyDayTool from "@/components/PlanMyDayTool";

export const metadata: Metadata = {
  title: "Plan My Glenwood Day | Things To Do, Food, Events & Caddo River Stops",
  description:
    "Build a simple Glenwood, Arkansas day plan with ideas for Caddo River trips, restaurants, cabins, family stops, events, outdoor activities, and nearby things to do.",
};

export default function PlanMyDayPage() {
  return (
    <main>
      <section className="plan-page-hero">
        <div className="container plan-page-hero-grid">
          <div>
            <p className="eyebrow">Plan My Glenwood Day</p>

            <h1>Build a simple local plan before you go.</h1>

            <p>
              Glenwood trips usually come together around a few practical pieces:
              the Caddo River, food, lodging, events, family stops, fishing,
              lake days, and nearby drives. This tool helps you pick a starting
              point without turning the day into a complicated itinerary.
            </p>

            <div className="plan-page-actions">
              <a href="#planner" className="btn">
                Start Planning
              </a>

              <Link href="/events" className="btn btn-light">
                View Events
              </Link>
            </div>
          </div>

          <div className="plan-page-card">
            <span>Local, not generic</span>
            <h2>Built around the actual Glenwood guide.</h2>
            <p>
              Choose the kind of day you want, then use the result to jump into
              Glenwood pages for the Caddo River, restaurants, cabins, events,
              family-friendly stops, and nearby outdoor places.
            </p>
          </div>
        </div>
      </section>

      <section id="planner" className="section plan-tool-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Day Builder</p>
            <h2>What kind of Glenwood day are you planning?</h2>
            <p>
              Choose a trip style, time window, and group type. The result gives
              you a practical local plan with useful guide links and backup ideas.
            </p>
          </div>

          <PlanMyDayTool />
        </div>
      </section>

      <section className="section plan-seo-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Planning Ideas</p>
            <h2>Ways to use this Glenwood day planner.</h2>
            <p>
              Whether you are a visitor planning a weekend or a local trying to
              find something simple to do with family, start with the kind of day
              you want and keep the plan realistic.
            </p>
          </div>

          <div className="plan-seo-grid">
            <article className="card plan-seo-card">
              <h3>Plan a Caddo River day</h3>
              <p>
                Start with the river guide, check conditions, choose food nearby,
                then add cabins, events, or one easy local stop if you have time.
              </p>
              <Link href="/caddo-river">Read the river guide ?</Link>
            </article>

            <article className="card plan-seo-card">
              <h3>Plan a family day</h3>
              <p>
                Keep the day simple with one main stop, a food plan, and a backup
                idea like John Benjamin Pond, Bard Springs, events, or local
                businesses.
              </p>
              <Link href="/explore">View things to do ?</Link>
            </article>

            <article className="card plan-seo-card">
              <h3>Plan a cabin weekend</h3>
              <p>
                Pick lodging first, then build the weekend around the Caddo River,
                Lake Greeson, restaurants, local events, and quiet outdoor time.
              </p>
              <Link href="/glenwood-ar-cabins">Find places to stay ?</Link>
            </article>

            <article className="card plan-seo-card">
              <h3>Plan around local events</h3>
              <p>
                Check what is happening this weekend, then use restaurants, river
                stops, local businesses, and nearby attractions to round out the
                day.
              </p>
              <Link href="/this-weekend">Check this weekend ?</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section plan-community-section">
        <div className="container plan-community-card">
          <div>
            <p className="eyebrow">Community Help</p>
            <h2>Know something visitors should see?</h2>
            <p>
              Local events, seasonal happenings, business updates, and practical
              visitor tips help keep the guide useful for both tourists and locals.
            </p>
          </div>

          <div className="plan-community-actions">
            <Link href="/submit-event" className="btn">
              Submit an Event
            </Link>

            <Link href="/contact" className="btn btn-light">
              Suggest a Local Update
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

