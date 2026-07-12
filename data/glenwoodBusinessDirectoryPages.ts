import { byCategory, byNames, glenwoodBusinesses, uniqueByName } from "@/data/glenwoodBusinesses";

const guideLinks = [
  { label: "Local Businesses", href: "/local-business" },
  { label: "Restaurants", href: "/glenwood-ar-restaurants" },
  { label: "Cabins & Stays", href: "/glenwood-ar-cabins" },
  { label: "Caddo River", href: "/caddo-river" },
  { label: "Visitor Essentials", href: "/visitor-essentials-glenwood-ar" },
  { label: "Events", href: "/events" },
  { label: "Search", href: "/search" },
];

const relatedLinks = [
  { label: "Local Businesses", href: "/local-business" },
  { label: "Caddo River", href: "/caddo-river" },
  { label: "Collier Springs & Little Missouri Falls", href: "/collier-springs-little-missouri-falls-day-trip" },
  { label: "Restaurants", href: "/glenwood-ar-restaurants" },
  { label: "Cabins", href: "/glenwood-ar-cabins" },
  { label: "This Weekend", href: "/this-weekend" },
  { label: "Plan My Day", href: "/plan-my-day" },
];

const shoppingNames = [
  "Mercantile on Broadway",
  "John Plyler Home Center",
  "Wright’s Food Center",
  "Glenwood Florist & Gifts",
  "Family Dollar Glenwood",
  "Glenwood Auto Parts",
  "Mercado Restaurant",
  "Arrow 6 Coffee Co.",
  "Flavor-Licious Glenwood",
];

const outdoorNames = [
  "Caddo River Camping & Canoe Rental",
  "Lucky’s Canoe & Kayak Rental",
  "Glenwood Country Club",
  "Bear Creek UTV Rentals & Repair LLC",
  "Swaha Lodge & Marina",
  "John Benjamin Fishing Pond",
  "Bard Springs Recreation Area",
];

const localServiceNames = [
  "John Plyler Home Center",
  "Glenwood Auto Parts",
  "Thomas Renovations, LLC",
  "Bear Creek UTV Rentals & Repair LLC",
  "Southern Bancorp Glenwood",
  "Glenwood Florist & Gifts",
  "Wright’s Food Center",
];

export const shoppingAndSuppliesBusinesses = uniqueByName([
  ...byNames(shoppingNames),
  ...byCategory("Shopping & Supplies"),
]);

export const outdoorBusinessListings = uniqueByName([
  ...byNames(outdoorNames),
  ...byCategory("Outdoor Recreation"),
  ...byCategory("Attraction"),
]);

export const localServiceBusinesses = uniqueByName([
  ...byNames(localServiceNames),
  ...byCategory("Local Service"),
]);

export const allBusinessDirectoryListings = uniqueByName(glenwoodBusinesses);

export const shoppingAndSuppliesPage = {
  metadata: {
    title: "Glenwood Arkansas Shops & Supplies | Gifts, Groceries, Hardware & Trip Stops",
    description:
      "Find Glenwood, Arkansas shops and supplies including gifts, groceries, hardware, flowers, auto parts, coffee, sweets, market stops, and visitor basics near the Caddo River.",
    keywords: [
      "Glenwood Arkansas shopping",
      "Glenwood AR shops",
      "Glenwood Arkansas grocery",
      "Glenwood AR supplies",
      "Glenwood Arkansas gifts",
      "shops near Caddo River",
      "Glenwood AR hardware store",
    ],
    alternates: {
      canonical: "/glenwood-ar-shops-supplies",
    },
  },
  props: {
    eyebrow: "Shopping, Supplies & Local Stops",
    title: "Find local shops, groceries, gifts, hardware, and river-trip basics in Glenwood.",
    description:
      "Use this guide for Glenwood shops and supplies, from downtown gifts and flowers to groceries, hardware, coffee, sweets, auto parts, and practical stops before a river day or cabin stay.",
    heroImage: "/images/glenwood/oldtown.jpg",
    primaryCta: { label: "Browse Shops", href: "#listings" },
    secondaryCta: { label: "Suggest a Stop", href: "/contact" },
    introEyebrow: "Shopping Guide",
    introTitle: "A simple guide for gifts, groceries, hardware, and everyday trip stops.",
    introText:
      "When you are staying near the Caddo River, heading toward Lake Greeson, or passing through town, it helps to know where to grab food, forgotten supplies, flowers, gifts, coffee, sweets, auto parts, hardware, and other simple basics.",
    introNote:
      "Our Pick marks a helpful starting point for visitors who are not sure where to begin. Always check hours, details, and availability before making a special trip.",
    businesses: shoppingAndSuppliesBusinesses,
    featuredNames: ["Mercantile on Broadway", "Wright’s Food Center", "John Plyler Home Center"],
    featuredEyebrow: "Helpful Starting Points",
    featuredTitle: "Start with the stops that help a Glenwood trip come together.",
    featuredText:
      "These stops can help with downtown browsing, groceries, hardware, and the small things visitors often need before a river day, lake trip, cabin stay, or drive through town.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More Glenwood shopping and supply stops.",
    basicText:
      "These listings help visitors find gifts, flowers, coffee, sweets, auto parts, general supplies, and simple local stops around town.",
    infoEyebrow: "Shop By Need",
    infoTitle: "What kind of stop fits the trip?",
    infoText:
      "Some visitors want something local to take home. Others need groceries, forgotten supplies, flowers, coffee, snacks, or a part for a vehicle before getting back on the road.",
    infoCards: [
      {
        title: "Downtown gifts",
        text: "Good for visitors who want local goods, gifts, small-town browsing, or a lighter stop between meals and river plans.",
      },
      {
        title: "Groceries and cabin basics",
        text: "Useful for groups staying in cabins, campgrounds, motels, or Lake Greeson-area stays who need food, drinks, or simple supplies.",
      },
      {
        title: "Hardware and project supplies",
        text: "Helpful for cabin owners, local property owners, contractors, and visitors who need practical items while staying nearby.",
      },
      {
        title: "Coffee, sweets, and quick stops",
        text: "Good for families, kids, river groups, and people passing through town who want something easy before the next stop.",
      },
    ],
    guideLinks,
    relatedLinks: [
      { label: "Local Businesses", href: "/local-business" },
      { label: "Restaurants", href: "/glenwood-ar-restaurants" },
      { label: "Visitor Essentials", href: "/visitor-essentials-glenwood-ar" },
      { label: "Caddo River", href: "/caddo-river" },
      { label: "Suggest a Stop", href: "/contact" },
    ],
    faqs: [
      {
        question: "Where can visitors find shops and supplies in Glenwood?",
        answer:
          "This guide brings together useful Glenwood stops for gifts, groceries, hardware, flowers, coffee, sweets, auto parts, and visitor basics before a river day, lake trip, cabin stay, or drive through town.",
      },
      {
        question: "What should I grab before heading to the Caddo River or Lake Greeson?",
        answer:
          "Most groups are better off grabbing drinks, snacks, sunscreen, towels, ice, basic groceries, and any forgotten supplies before heading out. Check with outfitters or your stay for anything specific to your plans.",
      },
      {
        question: "Can a Glenwood shop be added to this page?",
        answer:
          "Yes. Shops, gift stores, grocery stops, hardware stores, florists, coffee shops, markets, and other local supply stops can request a listing through the contact page.",
      },
    ],
    schemaName: "Shops and Supplies in Glenwood, Arkansas",
    trackingPage: "/glenwood-ar-shops-supplies",
    schemaDescription:
      "Local shops, gift stops, groceries, hardware, flowers, auto parts, coffee, sweets, and visitor supplies in Glenwood, Arkansas.",
  },
};

export const outdoorBusinessesPage = {
  metadata: {
    title: "Glenwood Outdoor Businesses | Caddo River, Golf, UTVs & Lake Greeson Stops",
    description:
      "Find outdoor businesses and recreation stops around Glenwood, Arkansas including Caddo River outfitters, canoe rentals, kayak rentals, golf, UTV rentals, Lake Greeson, and family outdoor stops.",
    keywords: [
      "Glenwood outdoor businesses",
      "Caddo River outfitters",
      "Glenwood canoe rentals",
      "Glenwood kayak rentals",
      "Glenwood Arkansas golf",
      "Lake Greeson outdoor recreation",
      "Glenwood UTV rentals",
    ],
    alternates: {
      canonical: "/glenwood-outdoor-businesses",
    },
  },
  props: {
    eyebrow: "Outdoor Businesses & Recreation",
    title: "Caddo River outfitters, golf, UTV rentals, lake stops, and outdoor places near Glenwood.",
    description:
      "Use this guide to compare canoe and kayak rentals, tube floats, camping, golf, UTV rentals, Lake Greeson stops, and family-friendly outdoor places around Glenwood.",
    heroImage: "/images/glenwood/rivercanoe.jpg",
    primaryCta: { label: "Browse Outdoors", href: "#listings" },
    secondaryCta: { label: "Caddo River Guide", href: "/caddo-river" },
    introEyebrow: "Outdoor Guide",
    introTitle: "Plan river days, lake trips, golf, UTV rides, and easy outdoor stops near Glenwood.",
    introText:
      "Glenwood is built around outside time. This guide helps visitors compare river outfitters, canoe and kayak rentals, camping, golf, UTV rentals, Lake Greeson stops, fishing areas, and family-friendly places to get outside.",
    introNote:
      "Our Pick marks a helpful starting point, but outdoor plans can change fast. Check water levels, weather, hours, rules, and rental availability before heading out.",
    businesses: outdoorBusinessListings,
    featuredNames: [
      "Caddo River Camping & Canoe Rental",
      "Lucky’s Canoe & Kayak Rental",
      "Glenwood Country Club",
    ],
    featuredEyebrow: "Helpful Starting Points",
    featuredTitle: "Start with the outdoor anchors visitors already look for.",
    featuredText:
      "These stops give visitors a practical place to start when comparing float trips, river rentals, golf, UTV rentals, Lake Greeson add-ons, forest areas, and family outdoor ideas.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More Glenwood outdoor businesses and recreation stops.",
    basicText:
      "Use these listings to compare river outfitters, golf, UTV rentals, lake stops, fishing, forest recreation, and other outdoor options around Glenwood and Lake Greeson.",
    infoEyebrow: "Outdoor Planning",
    infoTitle: "Match the outdoor stop to the water, weather, and group.",
    infoText:
      "Some visitors want a full float day. Others need a shorter outdoor stop, a round of golf, a UTV rental, lake time, or a family-friendly place that does not require a full plan.",
    infoCards: [
      {
        title: "River days",
        text: "Canoes, kayaks, tubes, water levels, parking, shuttles, cabins, and camping matter most when the Caddo is the main plan.",
      },
      {
        title: "Golf and slower outdoors",
        text: "A golf day, fishing pond, or nearby recreation area can work better for mixed groups or visitors not floating the river.",
      },
      {
        title: "Lake Greeson add-ons",
        text: "Marinas, lodging, fishing, boating, UTVs, and Kirby-area stops help visitors stretch Glenwood into a bigger lake and cabin trip.",
      },
      {
        title: "Family-friendly options",
        text: "Ponds, picnic areas, easy trails, river access, and simple outdoor stops help families avoid overpacking the day.",
      },
    ],
    guideLinks,
    relatedLinks,
    faqs: [
      {
        question: "What outdoor businesses are around Glenwood?",
        answer:
          "Visitors can find Caddo River canoe, kayak, tube, and camping businesses, golf, UTV rentals, Lake Greeson marina stops, fishing areas, and forest recreation around the Glenwood area.",
      },
      {
        question: "Should I check river conditions before planning a float?",
        answer:
          "Yes. The Caddo can change with weather and water levels, so visitors should check with a local outfitter before planning a float, especially with kids, pets, or first-time floaters.",
      },
      {
        question: "What if my group does not want a full river day?",
        answer:
          "Look at golf, Lake Greeson stops, John Benjamin Fishing Pond, Bard Springs, simple picnic areas, nearby restaurants, or a shorter outdoor stop that fits the weather and your group.",
      },
    ],
    schemaName: "Outdoor Businesses and Recreation in Glenwood, Arkansas",
    trackingPage: "/glenwood-outdoor-businesses",
    schemaDescription:
      "Caddo River outfitters, canoe rentals, kayak rentals, camping, golf, UTV rentals, Lake Greeson stops, and outdoor recreation around Glenwood, Arkansas.",
  },
};

export const localServicesPage = {
  metadata: {
    title: "Glenwood Local Services | Hardware, Auto Parts, Remodeling, Banking & Practical Help",
    description:
      "Find Glenwood, Arkansas local services including hardware, auto parts, remodeling, banking, repairs, gifts, local supplies, and practical businesses for residents, cabin owners, and visitors.",
    keywords: [
      "Glenwood local services",
      "Glenwood AR services",
      "Glenwood Arkansas auto parts",
      "Glenwood Arkansas hardware",
      "Glenwood remodeling",
      "Glenwood AR bank",
      "Glenwood business directory",
    ],
    alternates: {
      canonical: "/glenwood-local-services",
    },
  },
  props: {
    eyebrow: "Local Services & Practical Stops",
    title: "Useful Glenwood services for locals, visitors, cabin owners, and nearby property needs.",
    description:
      "Use this guide to find practical Glenwood stops for hardware, auto parts, remodeling help, banking, repairs, supplies, rental needs, property projects, and everyday local errands.",
    heroImage: "/images/glenwood/oldbuildings.webp",
    primaryCta: { label: "Browse Services", href: "#listings" },
    secondaryCta: { label: "Suggest a Stop", href: "/contact" },
    introEyebrow: "Service Directory",
    introTitle: "Practical stops and useful local help around Glenwood.",
    introText:
      "This guide is for the practical side of town: hardware, auto parts, remodeling help, banking, repairs, supplies, flowers, groceries, and useful local businesses visitors, cabin owners, and nearby property owners may need.",
    introNote:
      "Our Pick marks a helpful starting point for common local needs. For service work, repairs, or project help, contact the business directly to confirm availability, pricing, and service area.",
    businesses: localServiceBusinesses,
    featuredNames: ["John Plyler Home Center", "Glenwood Auto Parts", "Thomas Renovations, LLC"],
    featuredEyebrow: "Helpful Starting Points",
    featuredTitle: "Useful stops when you need practical help nearby.",
    featuredText:
      "These stops are useful for visitors, locals, cabin owners, rental owners, and property owners who need supplies, parts, repairs, or practical help around Glenwood.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More useful Glenwood local services.",
    basicText:
      "Use these listings for hardware, auto parts, property help, repairs, banking, gifts, supplies, and practical businesses around Glenwood.",
    infoEyebrow: "Service Types",
    infoTitle: "Find the right kind of local help for the trip or project.",
    infoText:
      "Some needs are simple, like groceries, flowers, banking, or auto parts. Others are bigger, like cabin upkeep, remodeling, repairs, and property projects around Glenwood and nearby communities.",
    infoCards: [
      {
        title: "Property and cabin needs",
        text: "Hardware, remodeling, exterior work, repairs, and supplies are useful for cabin owners, lake homes, rental owners, and local property projects.",
      },
      {
        title: "Vehicle and road-trip help",
        text: "Auto parts and practical service stops matter when visitors are hauling trailers, driving to cabins, or moving between river and lake areas.",
      },
      {
        title: "Local errands",
        text: "Banking, flowers, gifts, groceries, and other practical stops help people handle normal needs while staying in or passing through Glenwood.",
      },
      {
        title: "Helpful local contacts",
        text: "Contractors, repair shops, rental support, local stores, and service businesses can be useful when something comes up during a stay or property project.",
      },
    ],
    guideLinks,
    relatedLinks: [
      { label: "Local Businesses", href: "/local-business" },
      { label: "Shops & Supplies", href: "/glenwood-ar-shops-supplies" },
      { label: "Outdoor Businesses", href: "/glenwood-outdoor-businesses" },
      { label: "Cabins", href: "/glenwood-ar-cabins" },
      { label: "Suggest a Stop", href: "/contact" },
    ],
    faqs: [
      {
        question: "What counts as a Glenwood local service?",
        answer:
          "Local services can include hardware, auto parts, remodeling, repairs, banking, property help, rental support, supplies, and practical businesses visitors or local owners may need.",
      },
      {
        question: "Who might use this local services guide?",
        answer:
          "Visitors, residents, cabin owners, rental owners, lake-area property owners, and people passing through Glenwood may use this page for hardware, auto parts, repairs, banking, supplies, and practical local help.",
      },
      {
        question: "How do I check whether a service business can help me?",
        answer:
          "Use the listing details to call or visit the business directly. Hours, availability, service areas, and project timelines can change, especially for repair and property work.",
      },
    ],
    schemaName: "Local Services in Glenwood, Arkansas",
    trackingPage: "/glenwood-local-services",
    schemaDescription:
      "Hardware, auto parts, remodeling, repairs, banking, property help, supplies, and local service businesses in Glenwood, Arkansas.",
  },
};
