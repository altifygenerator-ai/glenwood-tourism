export type PlanTripType =
  | "river-day"
  | "family-day"
  | "cabin-weekend"
  | "food-local"
  | "outdoors-fishing"
  | "rainy-low-key"
  | "this-weekend"
  | "nearby-day-trip";

export type PlanTimeOption =
  | "couple-hours"
  | "half-day"
  | "full-day"
  | "weekend";

export type PlanGroupType =
  | "solo"
  | "couple"
  | "family"
  | "group"
  | "slow-pace";

export type PlanLink = {
  label: string;
  href: string;
};

export type PlanStep = {
  label: string;
  title: string;
  text: string;
};

export type PlanOption = {
  id: PlanTripType;
  label: string;
  eyebrow: string;
  shortText: string;
  bestFor: string[];
  steps: PlanStep[];
  links: PlanLink[];
  localTip: string;
  backupIdea: string;
};

export type SelectOption<T extends string> = {
  id: T;
  label: string;
  description: string;
};

