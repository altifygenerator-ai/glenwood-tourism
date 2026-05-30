import type {
  PlanGroupType,
  PlanOption,
  PlanTimeOption,
  SelectOption,
} from "@/types/planMyDay";

export const timeOptions: SelectOption<PlanTimeOption>[] = [
  {
    id: "couple-hours",
    label: "A couple hours",
    description: "Good for passing through, eating local, or making one easy stop.",
  },
  {
    id: "half-day",
    label: "Half day",
    description: "Enough time for one main activity, food, and one nearby add-on.",
  },
  {
    id: "full-day",
    label: "Full day",
    description: "Best for a river day, lake day, family outing, or short day trip loop.",
  },
  {
    id: "weekend",
    label: "Weekend",
    description: "Build around lodging, food, river/lake time, and local events.",
  },
];

export const groupOptions: SelectOption<PlanGroupType>[] = [
  {
    id: "solo",
    label: "Solo",
    description: "Simple stops, scenery, food, and low-pressure exploring.",
  },
  {
    id: "couple",
    label: "Couple",
    description: "Cabins, quiet meals, scenic drives, and relaxed outdoor time.",
  },
  {
    id: "family",
    label: "Family",
    description: "Easy stops, food options, outdoor time, and backup ideas.",
  },
  {
    id: "group",
    label: "Group",
    description: "River trips, cabins, restaurants, events, and shared plans.",
  },
  {
    id: "slow-pace",
    label: "Slower pace",
    description: "Less rushing, easier stops, and practical nearby options.",
  },
];

export const planOptions: PlanOption[] = [
  {
    id: "river-day",
    label: "Caddo River Day",
    eyebrow: "River First",
    shortText:
      "For floating, kayaking, fishing, swimming, or building the day around the Caddo.",
    bestFor: ["River floats", "Warm weather", "Groups", "Families", "Outdoor weekends"],
    steps: [
      {
        label: "Start",
        title: "Start with the Caddo River guide.",
        text:
          "Use the river guide first so you can plan around water, weather, outfitters, and how much time your group actually wants outside.",
      },
      {
        label: "Food",
        title: "Pick an easy meal before or after the river.",
        text:
          "Plan food close to town instead of waiting until everyone is tired, wet, hungry, or ready to get back to the cabin.",
      },
      {
        label: "Add-on",
        title: "Add one simple nearby stop.",
        text:
          "If you still have time, check this weekend's events, John Benjamin Pond, local shops, or a short scenic drive.",
      },
    ],
    links: [
      { label: "Caddo River Guide", href: "/caddo-river" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "This Weekend", href: "/this-weekend" },
      { label: "Events", href: "/events" },
      { label: "Cabins & Places to Stay", href: "/glenwood-ar-cabins" },
    ],
    localTip:
      "For river days, check conditions before you go. Water level, weather, and outfitter availability can change the whole plan.",
    backupIdea:
      "If the river plan does not work out, use the restaurants guide, John Benjamin Pond, Bard Springs, or nearby day trip ideas.",
  },
  {
    id: "family-day",
    label: "Family Day",
    eyebrow: "Easy With Kids",
    shortText:
      "For families who want simple outdoor stops, food, events, and backup options.",
    bestFor: ["Kids", "Visiting family", "Low-stress days", "Shorter stops"],
    steps: [
      {
        label: "Start",
        title: "Choose one main outdoor stop.",
        text:
          "Keep the day simple. Pick the river, John Benjamin Pond, Bard Springs, or a short area outing instead of trying to fit everything in.",
      },
      {
        label: "Food",
        title: "Plan food early.",
        text:
          "Use the restaurant guide before the day gets busy so you know where to go for a casual meal, snack, or easy stop.",
      },
      {
        label: "Backup",
        title: "Have a low-key backup.",
        text:
          "Check events, local businesses, short drives, or quieter attractions in case weather, crowds, or tired kids change the plan.",
      },
    ],
    links: [
      { label: "Things To Do", href: "/explore" },
      { label: "John Benjamin Fishing Pond", href: "/john-benjamin-pond" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Events", href: "/events" },
      { label: "Bard Springs Recreation Area", href: "/bard-springs" },
    ],
    localTip:
      "For families, one good outdoor stop plus food usually works better than a packed schedule.",
    backupIdea:
      "If the weather turns, look at restaurants, local businesses, nearby towns, or the history page for a slower visit.",
  },
  {
    id: "cabin-weekend",
    label: "Cabin Weekend",
    eyebrow: "Stay Awhile",
    shortText:
      "For visitors staying near Glenwood, the Caddo River, Lake Greeson, or nearby outdoor areas.",
    bestFor: ["Couples", "Weekend trips", "Cabins", "River stays", "Lake days"],
    steps: [
      {
        label: "Stay",
        title: "Start with where you are sleeping.",
        text:
          "Cabins, campgrounds, motels, and river-area lodging shape the rest of the weekend because drive time matters around small towns.",
      },
      {
        label: "Plan",
        title: "Build around one anchor activity.",
        text:
          "Choose the Caddo River, Lake Greeson, fishing, hiking, events, or a day trip, then keep the rest of the weekend loose.",
      },
      {
        label: "Local",
        title: "Add food and small-town stops.",
        text:
          "Use the restaurant and local business guides so the trip feels connected to Glenwood instead of just being a place to sleep.",
      },
    ],
    links: [
      { label: "Cabins & Places to Stay", href: "/glenwood-ar-cabins" },
      { label: "Caddo River Guide", href: "/caddo-river" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Local Businesses", href: "/local-business" },
      { label: "Events This Weekend", href: "/this-weekend" },
    ],
    localTip:
      "Book lodging first during busy river weekends, then plan meals and activities around where you are staying.",
    backupIdea:
      "If outdoor plans get rained out, turn it into a food, local business, scenic drive, or nearby town day.",
  },
  {
    id: "food-local",
    label: "Food + Local Stops",
    eyebrow: "Eat Local",
    shortText:
      "For visitors who want restaurants, small businesses, and easy stops around town.",
    bestFor: ["Locals", "Visitors passing through", "Rainy days", "After-river meals"],
    steps: [
      {
        label: "Food",
        title: "Start with the restaurant guide.",
        text:
          "Pick the kind of meal you need first: breakfast, casual lunch, dinner, quick stop, or something easy after the river.",
      },
      {
        label: "Nearby",
        title: "Add one nearby thing to do.",
        text:
          "Pair food with a river stop, local business, event, history stop, or short drive so it feels like a real outing.",
      },
      {
        label: "Community",
        title: "Check what is happening locally.",
        text:
          "Look at the events page and local business guide if you want something current or community-based.",
      },
    ],
    links: [
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Local Businesses", href: "/local-business" },
      { label: "Events", href: "/events" },
      { label: "Things To Do", href: "/explore" },
      { label: "Glenwood History", href: "/history" },
    ],
    localTip:
      "Small-town hours can change. When a stop really matters to your plan, check the business page or call first.",
    backupIdea:
      "If a place is closed, use the local business guide or nearby town links to keep the day moving.",
  },
  {
    id: "outdoors-fishing",
    label: "Fishing + Outdoors",
    eyebrow: "Outside Day",
    shortText:
      "For fishing, lakes, river time, parks, scenic drives, and outdoor exploring.",
    bestFor: ["Fishing", "Lake days", "Scenic drives", "Quiet outdoor stops"],
    steps: [
      {
        label: "Choose",
        title: "Pick the outdoor setting first.",
        text:
          "Decide whether the day is about the Caddo River, fishing, Lake Greeson, Bard Springs, or a scenic regional drive.",
      },
      {
        label: "Pack",
        title: "Plan around conditions.",
        text:
          "Weather, water, season, and drive time matter. Check conditions and keep food or a backup stop in mind.",
      },
      {
        label: "Add",
        title: "Add one easy local stop.",
        text:
          "After the outdoor part, use the restaurant guide, events page, or local business guide to round out the day.",
      },
    ],
    links: [
      { label: "Caddo River Guide", href: "/caddo-river" },
      { label: "John Benjamin Fishing Pond", href: "/john-benjamin-pond" },
      { label: "Bard Springs Recreation Area", href: "/bard-springs" },
      { label: "Things To Do", href: "/explore" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
    ],
    localTip:
      "Outdoor trips around Glenwood are best when you leave room for weather, water levels, and slower back-road timing.",
    backupIdea:
      "If the main outdoor plan falls through, choose a shorter stop and pair it with food or a scenic drive.",
  },
  {
    id: "rainy-low-key",
    label: "Rainy Day / Low-Key",
    eyebrow: "Slow Day",
    shortText:
      "For days when you still want to get out, but not overdo it.",
    bestFor: ["Rainy weather", "Older visitors", "Slow mornings", "Simple local days"],
    steps: [
      {
        label: "Easy",
        title: "Keep the plan close and simple.",
        text:
          "Use restaurants, local businesses, history, and nearby stops instead of depending on a full outdoor day.",
      },
      {
        label: "Check",
        title: "Look for events or indoor-friendly options.",
        text:
          "The events and local business pages are the best places to start when the weather changes the day.",
      },
      {
        label: "Drive",
        title: "Add a short scenic drive if conditions are good.",
        text:
          "If the weather clears, pair a meal with a nearby stop, river view, or easy drive through the area.",
      },
    ],
    links: [
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Local Businesses", href: "/local-business" },
      { label: "This Weekend", href: "/this-weekend" },
      { label: "Glenwood History", href: "/history" },
      { label: "Things To Do", href: "/explore" },
    ],
    localTip:
      "A slower Glenwood day can still work well if you plan around food, short stops, and checking current events.",
    backupIdea:
      "If you want a bigger backup plan, look at nearby towns or regional day trip ideas from the explore page.",
  },
  {
    id: "this-weekend",
    label: "This Weekend",
    eyebrow: "Current Happenings",
    shortText:
      "For events, markets, live music, local gatherings, and weekend trip ideas.",
    bestFor: ["Locals", "Weekend visitors", "Events", "Community updates"],
    steps: [
      {
        label: "Check",
        title: "Start with the weekend page.",
        text:
          "Look for current events first, then build food, river time, local stops, or lodging around what is happening.",
      },
      {
        label: "Build",
        title: "Add one dependable local guide.",
        text:
          "If events are light, use the river, restaurants, cabins, or things-to-do pages to still build a good day.",
      },
      {
        label: "Share",
        title: "Submit events if something is missing.",
        text:
          "Community submissions help the guide stay useful for locals and visitors, especially around busy weekends.",
      },
    ],
    links: [
      { label: "This Weekend", href: "/this-weekend" },
      { label: "Events", href: "/events" },
      { label: "Submit an Event", href: "/submit-event" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Things To Do", href: "/explore" },
    ],
    localTip:
      "If you know about a local event, send it in. The more the community uses the calendar, the more useful it becomes.",
    backupIdea:
      "When events are light, use the page as a weekend idea starter instead of only an event list.",
  },
  {
    id: "nearby-day-trip",
    label: "Nearby Day Trip",
    eyebrow: "Regional Loop",
    shortText:
      "For visitors using Glenwood as a base for nearby Arkansas stops.",
    bestFor: ["Day trips", "Scenic drives", "Cabin weekends", "Regional exploring"],
    steps: [
      {
        label: "Base",
        title: "Use Glenwood as the home base.",
        text:
          "Start with where you are staying or eating, then choose one nearby direction instead of trying to cover the whole region.",
      },
      {
        label: "Choose",
        title: "Pick one larger destination.",
        text:
          "Crater of Diamonds, Lake Greeson, DeGray Lake, Hot Springs, Mount Ida, and the Ouachita region can all work depending on time.",
      },
      {
        label: "Return",
        title: "Come back to something easy.",
        text:
          "After a day trip, keep the evening simple with food, lodging, or a quiet local stop around Glenwood.",
      },
    ],
    links: [
      { label: "Things To Do", href: "/explore" },
      { label: "Cabins & Places to Stay", href: "/glenwood-ar-cabins" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Caddo River Guide", href: "/caddo-river" },
      { label: "Local Businesses", href: "/local-business" },
    ],
    localTip:
      "For regional day trips, pick one main destination and leave time for back roads, meals, and slower small-town timing.",
    backupIdea:
      "If the drive feels like too much, stay close with the Caddo River, restaurants, John Benjamin Pond, or Bard Springs.",
  },
];

export const timeAdvice: Record<PlanTimeOption, string> = {
  "couple-hours":
    "Keep it tight: choose one main stop and one food or local business stop nearby.",
  "half-day":
    "A half day works best with one anchor activity, a meal, and one optional nearby add-on.",
  "full-day":
    "A full day gives you room for an outdoor plan, food, and a backup stop if weather or timing changes.",
  weekend:
    "For a weekend, book lodging first, pick one main activity per day, and leave room for food, events, and slow time.",
};

export const groupAdvice: Record<PlanGroupType, string> = {
  solo:
    "For solo exploring, keep the day flexible and choose easy stops with clear directions and simple timing.",
  couple:
    "For couples, cabins, scenic drives, food stops, and relaxed outdoor time usually make the day feel better than rushing.",
  family:
    "For families, do less and enjoy it more. One main stop, food, and a backup idea is usually enough.",
  group:
    "For groups, plan the anchor activity first, then make food and timing easy so everyone stays together.",
  "slow-pace":
    "For a slower pace, avoid overpacking the day. Choose close stops, easier meals, and flexible timing.",
};

