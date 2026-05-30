import Link from "next/link";
import type { PlanGroupType, PlanOption, PlanTimeOption } from "@/types/planMyDay";
import { groupAdvice, timeAdvice } from "@/data/planMyDay";

type PlanResultCardProps = {
  plan: PlanOption;
  time: PlanTimeOption;
  group: PlanGroupType;
};

export default function PlanResultCard({ plan, time, group }: PlanResultCardProps) {
  return (
    <div className="plan-result-card">
      <div className="plan-result-header">
        <p className="plan-pill">{plan.eyebrow}</p>

        <div>
          <h2>Your {plan.label} Plan</h2>
          <p>{plan.shortText}</p>
        </div>
      </div>

      <div className="plan-advice-grid">
        <div>
          <span>Time</span>
          <p>{timeAdvice[time]}</p>
        </div>

        <div>
          <span>Group</span>
          <p>{groupAdvice[group]}</p>
        </div>
      </div>

      <div className="plan-step-list">
        {plan.steps.map((step) => (
          <div key={step.label} className="plan-step">
            <span>{step.label}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="plan-note-grid">
        <div className="plan-note">
          <h3>Local tip</h3>
          <p>{plan.localTip}</p>
        </div>

        <div className="plan-note">
          <h3>Backup idea</h3>
          <p>{plan.backupIdea}</p>
        </div>
      </div>

      <div className="plan-link-section">
        <h3>Useful Glenwood links</h3>

        <div className="plan-link-grid">
          {plan.links.map((link) => (
            <Link key={link.href} href={link.href} className="plan-link-card">
              {link.label}
              <span>?</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

