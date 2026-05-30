"use client";

import { useMemo, useState } from "react";
import PlanResultCard from "@/components/PlanResultCard";
import { groupOptions, planOptions, timeOptions } from "@/data/planMyDay";
import type { PlanGroupType, PlanTimeOption, PlanTripType } from "@/types/planMyDay";

export default function PlanMyDayTool() {
  const [tripType, setTripType] = useState<PlanTripType>("river-day");
  const [time, setTime] = useState<PlanTimeOption>("half-day");
  const [group, setGroup] = useState<PlanGroupType>("family");

  const selectedPlan = useMemo(() => {
    return planOptions.find((plan) => plan.id === tripType) || planOptions[0];
  }, [tripType]);

  return (
    <section className="plan-tool-shell" aria-label="Plan My Glenwood Day tool">
      <div className="plan-tool-sidebar">
        <p className="eyebrow">Plan My Day</p>

        <h2>Build a simple Glenwood plan.</h2>

        <p>
          Pick the kind of day you are planning, how much time you have, and who
          is coming with you. This gives you a practical local starting point
          using Glenwood guide pages, not a generic travel app.
        </p>

        <div className="plan-best-for">
          <span>Good for</span>
          <div>
            {selectedPlan.bestFor.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
      </div>

      <div className="plan-tool-main">
        <div className="plan-control-group">
          <div className="plan-control-heading">
            <span>Step 1</span>
            <h3>What kind of day are you planning?</h3>
          </div>

          <div className="plan-option-grid">
            {planOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setTripType(option.id)}
                className={`plan-choice ${tripType === option.id ? "active" : ""}`}
              >
                <span>{option.eyebrow}</span>
                <strong>{option.label}</strong>
                <small>{option.shortText}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="plan-control-grid">
          <div className="plan-control-group">
            <div className="plan-control-heading">
              <span>Step 2</span>
              <h3>How much time do you have?</h3>
            </div>

            <div className="plan-small-options">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setTime(option.id)}
                  className={`plan-small-choice ${time === option.id ? "active" : ""}`}
                >
                  <strong>{option.label}</strong>
                  <small>{option.description}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="plan-control-group">
            <div className="plan-control-heading">
              <span>Step 3</span>
              <h3>Who is coming?</h3>
            </div>

            <div className="plan-small-options">
              {groupOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setGroup(option.id)}
                  className={`plan-small-choice ${group === option.id ? "active" : ""}`}
                >
                  <strong>{option.label}</strong>
                  <small>{option.description}</small>
                </button>
              ))}
            </div>
          </div>
        </div>

        <PlanResultCard plan={selectedPlan} time={time} group={group} />
      </div>
    </section>
  );
}

