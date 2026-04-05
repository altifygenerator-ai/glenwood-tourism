import { Attraction, Highlight, ItineraryBlock } from "@/types/tourism";

export const glenwoodSEO = {
  title: "Visit Glenwood Arkansas | Caddo River, Lake Greeson & Outdoor Adventures",
  description:
    "Discover Glenwood Arkansas tourism. Float the Caddo River, explore Lake Greeson, and plan an outdoor getaway in the Ouachita Mountains.",
  openGraph: {
    title: "Visit Glenwood Arkansas",
    description:
      "Explore the Caddo River, Lake Greeson, and outdoor adventures in Glenwood, Arkansas.",
    url: "https://glenwoodtourism.vercel.app/",
    siteName: "Glenwood Tourism",
    images: [
      {
        url: "/images/glenwood/TownSquare.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const glenwoodHero = {
  eyebrow: "Southwest Arkansas • Ouachita Region",
  title: "Visit Glenwood, Arkansas",
  description:
    "A scenic Arkansas town in the foothills of the Ouachita Mountains with direct access to the Caddo River, nearby lakes, and some of the region’s best outdoor recreation.",
  image: "/images/glenwood/river2.webp",
};

export const glenwoodIntro = {
  heading: "An outdoor gateway town in southwest Arkansas",
  text: `
Glenwood, Arkansas is a scenic small town in the Ouachita region and a strong base for river trips, lake days, and mountain drives. The town sits near the Caddo River and is close enough to several of southwest Arkansas’ biggest outdoor draws to make it an easy weekend home base.

Visitors use Glenwood for floating, fishing, hiking, and day trips to nearby destinations like Lake Greeson and Crater of Diamonds State Park. It has the kind of small-town feel that works well for visitors who want to slow down without giving up access to adventure.
`,
};

export const glenwoodHighlights: Highlight[] = [
  { label: "Caddo River access nearby" },
  { label: "Foothills of the Ouachita Mountains" },
  { label: "Close to Lake Greeson" },
  { label: "Easy day trip to Crater of Diamonds" },
];

export const glenwoodAttractions: Attraction[] = [
  {
    title: "Caddo River",
    description:
      "A favorite Arkansas float river for kayaking, tubing, fishing, and scenic weekend trips.",
    image: "/images/glenwood/canoing.jpg",
    alt: "Caddo River near Glenwood Arkansas",
  },
  {
    title: "Lake Greeson",
    description:
      "A large recreation lake for boating, fishing, swimming, and quiet shoreline escapes.",
    image: "/images/glenwood/lagegreeson.jpg",
    alt: "Lake Greeson Arkansas",
  },
  {
    title: "Ouachita Mountains",
    description:
      "Rolling mountain country with scenic drives, forest views, and outdoor recreation throughout the region.",
    image: "/images/glenwood/OuachitaMountains.jpg",
    alt: "Ouachita Mountains near Glenwood Arkansas",
  },
  {
    title: "Crater of Diamonds State Park",
    description:
      "One of Arkansas’ best-known attractions and the only public diamond mine where visitors can keep what they find.",
    image: "/images/glenwood/crater.jpg",
    alt: "Crater of Diamonds State Park Arkansas",
  },
  {
    title: "Hot Springs Day Trip",
    description:
      "A nearby destination for dining, shopping, parks, and extra tourism traffic from the region.",
    image: "/images/glenwood/hotsprings.webp",
    alt: "Hot Springs Arkansas scenic destination",
  },
  {
    title: "DeGray Lake Resort State Park",
    description:
      "A regional lake destination for beaches, boating, golf, camping, and hiking.",
    image: "/images/glenwood/Degray.webp",
    alt: "DeGray Lake Resort State Park Arkansas",
  },
];

export const glenwoodItinerary: ItineraryBlock[] = [
  {
    title: "Half-Day in Glenwood",
    description:
      "Start downtown, then head to the Caddo River for a float, picnic, or quiet afternoon by the water.",
  },
  {
    title: "Weekend Getaway",
    description:
      "Base your stay in Glenwood, spend one day on Lake Greeson, and take another day to visit Crater of Diamonds or explore the Ouachitas.",
  },
  {
    title: "Outdoor Adventure Trip",
    description:
      "Use Glenwood as a central stop for river access, lake time, mountain drives, and nearby southwest Arkansas attractions.",
  },
  { 
    title: "Explore Nearby Towns",
    description:
      "Glenwood’s location makes it a good base for exploring other southwest Arkansas towns and attractions, including Hot Springs, DeGray Lake, and the wider Ouachita region.",
  }
];

export const glenwoodFAQ = [
  {
    question: "What is Glenwood Arkansas known for?",
    answer:
      "Glenwood is known for its Caddo River access, outdoor recreation, and its location in the Ouachita foothills with easy access to lakes and parks.",
  },
  {
    question: "Is Glenwood Arkansas worth visiting?",
    answer:
      "Yes, especially if you enjoy floating, fishing, hiking, and small-town trips with access to bigger outdoor destinations.",
  },
  {
    question: "How far is the Caddo River from Glenwood?",
    answer:
      "The Caddo River flows past Glenwood, making it one of the town’s strongest tourism anchors.",
  },
  {
    question: "What attractions are near Glenwood Arkansas?",
    answer:
      "Nearby attractions include Lake Greeson, Crater of Diamonds State Park, DeGray Lake Resort State Park, the Ouachita Mountains, and the Hot Springs area.",
  },
];

export const glenwoodHistory = {
  hero: {
    title: "History of Glenwood",
    description:
      "A southwest Arkansas town shaped by timber, railroads, and the landscape of the Ouachita region.",
    image: "/images/glenwood/oldglenwood.jpg",
  },

  sections: [
    {
      title: "Early Beginnings",
      text:
        "Glenwood grew as a boomtown tied to railroad development and timber interests in the region, and it was incorporated in 1909.",
      images: [
        "/images/glenwood/oldchurch.jpg",
        "/images/glenwood/oldglenwood2.jpg",
      ],
    },
    {
      title: "A Community Built Around the Region",
      text:
        "The town’s identity has always been tied to its location, with the Caddo River and nearby natural areas helping shape local life and tourism.",
      images: [
        "/images/glenwood/oldbuildings.webp",
        "/images/glenwood/oldmain.jpg",
        "/images/glenwood/womenmain.jpg",
      ],
    },
    {
      title: "Glenwood Today",
      text:
        "Today Glenwood blends small-town Arkansas life with a strong outdoor identity, making it a natural fit for visitors looking for river trips, lake days, and scenic drives.",
      images: [
        "/images/glenwood/rivercanoes.jpg",
        "/images/glenwood/oldtown.jpg",
        "/images/glenwood/oldtown3.jpg",
      ],
    },
  ],
};