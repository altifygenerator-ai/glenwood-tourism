import Link from "next/link";

export default function PlanMyDayTeaser() {
  return (
    <section className="section plan-teaser-section">
      <div className="container">
        <div className="plan-teaser-card">
          <div>
            <p className="eyebrow">Plan My Glenwood Day</p>

            <h2>Not sure where to start?</h2>

            <p>
              Pick a river day, family day, cabin weekend, food stop, outdoor
              trip, rainy-day backup, or this-weekend plan and get pointed to
              the right Glenwood guides.
            </p>
          </div>

          <div className="plan-teaser-actions">
            <Link href="/plan-my-day" className="btn">
              Build a Day Plan
            </Link>

            <Link href="/this-weekend" className="btn btn-light">
              Check This Weekend
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

