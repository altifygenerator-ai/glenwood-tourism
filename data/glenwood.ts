import { Attraction, Highlight, ItineraryBlock } from "@/types/tourism";

export const glenwoodSEO = {
  title:
    "Visit Glenwood Arkansas | Caddo River, Cabins, Restaurants & Things to Do",
  description:
    "Plan a Glenwood, Arkansas trip around the Caddo River, Lake Greeson, cabins, restaurants, local events, Crater of Diamonds, DeGray Lake, Hot Springs, and southwest Arkansas outdoor adventures.",
  openGraph: {
    title: "Visit Glenwood Arkansas",
    description:
      "Explore Glenwood, Arkansas with local restaurants, cabins, Caddo River floats, Lake Greeson, events, and nearby southwest Arkansas attractions.",
    url: "https://www.glenwoodarkansas.org/",
    siteName: "Glenwood Arkansas Guide",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glenwood Arkansas tourism guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glenwood Arkansas Guide | Restaurants, Cabins & Things to Do",
    description:
      "Find places to eat, cabins, events, river access, and things to do in Glenwood, Arkansas near the Caddo River and Lake Greeson.",
    images: ["/images/og-image.png"],
  },
};

export const glenwoodHero = {
  eyebrow: "Southwest Arkansas • Caddo River • Ouachita Region",
  title: "Visit Glenwood, Arkansas",
  description:
    "Plan a simple outdoor trip around the Caddo River, local restaurants, cabins, campgrounds, Lake Greeson, nearby day trips, and small-town places worth knowing before you go.",
  image: "/images/glenwood/river2.webp",
};

export const glenwoodIntro = {
  heading:
    "A small-town base for Caddo River days, cabin weekends, and southwest Arkansas exploring",
  text: `
Glenwood, Arkansas is one of those places that makes the most sense when you want an outdoor trip without making the whole thing complicated. It sits along the Caddo River, close to Lake Greeson, and within easy reach of some of southwest Arkansas’ better-known day-trip stops, which makes it a useful home base for visitors who want river time, lake time, and a quiet place to reset between stops.

Most people come through Glenwood for the simple stuff that makes a trip feel worth it: floating the Caddo, fishing, camping, staying in a cabin, grabbing breakfast before a river day, finding a local dinner after being outside, or using town as a starting point for Lake Greeson, Crater of Diamonds, DeGray Lake, Hot Springs, Mount Ida, and the Ouachita foothills.

This guide is built to feel practical instead of polished to death. It is here to help visitors figure out where to eat, where to stay, what to do nearby, what events are happening, and which local businesses are part of the Glenwood trip experience.
`,
};

export const glenwoodHighlights: Highlight[] = [
  { label: "Caddo River floats, fishing, and family-friendly water days" },
  { label: "Cabins, camping, motels, and river-area lodging nearby" },
  { label: "Close to Lake Greeson, DeGray Lake, and Ouachita day trips" },
  { label: "Local restaurants, events, small businesses, and visitor stops" },
];

export const glenwoodAttractions: Attraction[] = [
  {
    title: "Caddo River",
    description:
      "The Caddo River is Glenwood’s biggest outdoor anchor. Visitors come for kayaking, tubing, canoeing, fishing, swimming, and relaxed river days. The Glenwood area works well for families and casual float trips because you can plan the river, food, lodging, and shuttle options close together.",
    image: "/images/glenwood/canoing.jpg",
    alt: "Caddo River near Glenwood Arkansas",
  },
  {
    title: "Lake Greeson",
    description:
      "Lake Greeson is one of the strongest lake-day add-ons for a Glenwood trip. It gives visitors options for boating, fishing, swimming, camping, shoreline time, and quieter outdoor weekends without having to leave southwest Arkansas.",
    image: "/images/glenwood/lagegreeson.jpg",
    alt: "Lake Greeson Arkansas",
  },
  {
    title: "Ouachita Mountains",
    description:
      "The Ouachita Mountains shape the feel of the whole area with pine-covered ridges, winding drives, clear lakes, and outdoor stops spread across southwest Arkansas. Glenwood works well as a small-town base for visitors who want scenery without a crowded resort-town feel.",
    image: "/images/glenwood/OuachitaMountains.jpg",
    alt: "Ouachita Mountains near Glenwood Arkansas",
  },
  {
    title: "Crater of Diamonds State Park",
    description:
      "Crater of Diamonds State Park in nearby Murfreesboro is one of Arkansas’ most unique attractions. Visitors search a plowed diamond field and can keep the rocks, minerals, gems, or diamonds they find, making it an easy day trip from Glenwood for families and curious travelers.",
    image: "/images/glenwood/crater.jpg",
    alt: "Crater of Diamonds State Park Arkansas",
  },
  {
    title: "Hot Springs Day Trip",
    description:
      "Hot Springs makes a strong regional add-on for visitors staying around Glenwood. It adds restaurants, shopping, bathhouse history, trails, lakes, events, and a bigger tourism-town feel while still letting Glenwood stay the quieter outdoor base.",
    image: "/images/glenwood/hotsprings.webp",
    alt: "Hot Springs Arkansas scenic destination",
  },
  {
    title: "DeGray Lake Resort State Park",
    description:
      "DeGray Lake Resort State Park is a good option for visitors who want more than a quick river stop. The park area offers lake views, camping, fishing, swimming, hiking, golf, paddling, horseback riding, lodging, and resort-style amenities within a regional drive.",
    image: "/images/glenwood/Degray.webp",
    alt: "DeGray Lake Resort State Park Arkansas",
  },
];

export const glenwoodItinerary: ItineraryBlock[] = [
  {
    title: "Half-Day in Glenwood",
    description:
      "Keep it simple: grab breakfast or lunch locally, spend time near the Caddo River, then make a short stop downtown or at a local business before heading back out. This works well for travelers passing through, families wanting a lighter day, or anyone who just wants river scenery without planning a full weekend.",
  },
  {
    title: "Caddo River Weekend",
    description:
      "Build the weekend around the river first. Book a cabin, campground, motel, or river-area stay, check float conditions with a local outfitter, plan easy meals in town, and leave room for a slower evening after kayaking, tubing, canoeing, fishing, or swimming.",
  },
  {
    title: "Lake Greeson and Cabin Trip",
    description:
      "Use Glenwood as a base for a quieter cabin or camping weekend, then spend a day around Lake Greeson for boating, fishing, swimming, or shoreline time. Add local restaurants and small-town stops so the trip feels easy instead of overpacked.",
  },
  {
    title: "Southwest Arkansas Day Trip Loop",
    description:
      "Stay or start in Glenwood, then branch out toward Crater of Diamonds, Murfreesboro, DeGray Lake, Hot Springs, Mount Ida, or the wider Ouachita region. This is a good fit for visitors who want one small-town home base with several nearby attractions.",
  },
];

export const glenwoodFAQ = [
  {
    question: "What is Glenwood Arkansas known for?",
    answer:
      "Glenwood is best known as a small southwest Arkansas town connected to the Caddo River, river floats, fishing, camping, cabins, and outdoor recreation. It is also close enough to Lake Greeson, Crater of Diamonds, DeGray Lake, Hot Springs, and the Ouachita region to work well as a weekend base.",
  },
  {
    question: "Is Glenwood Arkansas worth visiting?",
    answer:
      "Yes, especially if you want a simple outdoor trip built around the Caddo River, cabins, camping, lake days, local restaurants, and regional day trips. It is not a big resort town, which is part of why visitors like it for slower weekends and easy outdoor access.",
  },
  {
    question: "Can you float the Caddo River near Glenwood?",
    answer:
      "Yes. The Caddo River is one of the main reasons people visit Glenwood. Local outfitters and river businesses help visitors plan canoeing, kayaking, tubing, shuttles, camping, and float trips depending on water levels and conditions.",
  },
  {
    question: "What attractions are near Glenwood Arkansas?",
    answer:
      "Nearby attractions include the Caddo River, Lake Greeson, Crater of Diamonds State Park, DeGray Lake Resort State Park, the Ouachita Mountains, Hot Springs, Mount Ida, Murfreesboro, and other southwest Arkansas towns and outdoor stops.",
  },
  {
    question: "Where should I start when planning a Glenwood trip?",
    answer:
      "Start with the type of trip you want: river float, cabin weekend, lake day, fishing trip, family day trip, or local event. From there, choose where to stay, where to eat, and which nearby attractions or towns you want to add.",
  },
  {
    question: "Are there restaurants and places to stay in Glenwood?",
    answer:
      "Yes. Glenwood has local restaurants, cafes, lodging, cabins, campgrounds, and river-area stays. Many visitors plan meals around a float trip, lake day, or cabin weekend instead of treating food and lodging as an afterthought.",
  },
];

export const glenwoodHistory = {
  hero: {
    title: "History of Glenwood",
    description:
      "A southwest Arkansas town shaped by railroads, timber, local industry, and life along the Caddo River in the Ouachita foothills.",
    image: "/images/glenwood/oldglenwood.jpg",
  },

  sections: [
    {
      title: "A Railroad and Timber Boomtown",
      text:
        "Glenwood’s early growth was tied closely to railroad expansion and the timber industry rather than the older frontier settlement pattern seen in some Arkansas towns. In the early 1900s, rail access opened the area to lumber operations and helped turn a small community into a working town. Glenwood was officially laid out in the early 1900s near the rail line, and the town’s identity grew around transportation, timber, mills, workers, merchants, and the daily rhythm of a new southwest Arkansas boomtown.",
      images: [
        "/images/glenwood/oldchurch.jpg",
        "/images/glenwood/oldglenwood2.jpg",
      ],
    },
    {
      title: "Growth Along the Caddo River",
      text:
        "The Caddo River was more than scenery for early Glenwood. It was part of the landscape that supported work, travel, recreation, and settlement. As rail connections and lumber operations expanded, Glenwood became a local hub for timber-related activity and commerce. The town’s business district, homes, schools, churches, and community life developed around the same natural setting that still draws visitors today: the river, the foothills, and the roads connecting Glenwood to nearby towns.",
      images: [
        "/images/glenwood/oldbuildings.webp",
        "/images/glenwood/oldmain.jpg",
        "/images/glenwood/womenmain.jpg",
      ],
    },
    {
      title: "From Industry to Outdoor Identity",
      text:
        "Like many timber towns, Glenwood changed as large-scale lumber operations slowed and the local economy shifted. The town did not lose its connection to the land, though. Over time, the same river, lakes, hills, and scenic roads that shaped the area’s working history became the foundation for its outdoor identity. Today, Glenwood is known more for Caddo River floats, cabins, camping, lake weekends, fishing, and regional tourism than for timber shipping, but the older railroad and lumber story still helps explain why the town is here.",
      images: [
        "/images/glenwood/rivercanoes.jpg",
        "/images/glenwood/oldtown.jpg",
        "/images/glenwood/oldtown3.jpg",
      ],
    },
    {
      title: "Glenwood Today",
      text:
        "Modern Glenwood works as both a hometown and a visitor base. Locals know it through schools, churches, restaurants, small businesses, river traffic, summer weekends, and community events. Visitors often discover it through a float trip or cabin stay, then realize it also connects easily to Lake Greeson, Crater of Diamonds, Hot Springs, DeGray Lake, Mount Ida, and other southwest Arkansas stops. That mix of practical town life and outdoor access is what gives Glenwood its current tourism role.",
      images: [
        "/images/glenwood/oldtown.jpg",
        "/images/glenwood/rivercanoes.jpg",
        "/images/glenwood/caddofest.webp",
      ],
    },
  ],
};

export const glenwoodFeaturedLocalSpots = [
  {
    name: "Caddo Cafe",
    type: "Restaurant",
    badge: "Local Favorite",
    description:
      "A familiar Glenwood stop for breakfast, lunch, Mexican food, American plates, catfish, burgers, and casual meals before or after a river day. It has the kind of small-town cafe feel visitors look for when they want something easy, filling, and local.",
    image: "/images/glenwood/restaurants/caddo-cafe.jpg",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Fish Nest Family Restaurant",
    type: "Restaurant",
    badge: "Visitor Favorite",
    description:
      "A casual family restaurant known around the area for seafood, fried fish, and relaxed sit-down meals. It fits well for visitors who want a fuller meal after time on the river, at the lake, or driving through the Glenwood area.",
    image: "/images/glenwood/restaurants/fishnest.webp",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Ari’s Little Italy",
    type: "Restaurant",
    badge: "Pizza & Italian",
    description:
      "A small-town Italian and pizza stop that gives Glenwood visitors another easy dinner option beyond typical river food. Travelers mention it as a pleasant local surprise for pizza, pasta, calzones, bread, and casual family meals.",
    image: "/images/glenwood/restaurants/aris.jpg",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Caddo River Camping & Canoe Rental",
    type: "Cabins & Camping",
    badge: "River Stay",
    description:
      "One of the key river-trip businesses in the Glenwood area, offering float support, canoeing, kayaking, tubing, camping, cabins, and access to the upper Caddo River experience. A strong starting point for visitors planning their trip around the water.",
    image: "/images/glenwood/cabins/caddo-river-camping.avif",
    href: "/glenwood-ar-cabins",
  },
  {
    name: "Arrowhead Cabins and Camping",
    type: "Cabins & Camping",
    badge: "Cabins & Camping",
    description:
      "A lodging and camping option for travelers who want to stay close to the Glenwood outdoor scene. It fits the kind of weekend where the cabin, campground, river, food, and local exploring all work together.",
    image: "/images/glenwood/cabins/arrowhead.webp",
    href: "/glenwood-ar-cabins",
  },
  {
    name: "Riverwood Inn of Glenwood",
    type: "Lodging",
    badge: "Local Stay",
    description:
      "A simple local lodging option for visitors who want to stay near restaurants, shops, river access, and the main roads leading toward Lake Greeson, Murfreesboro, Hot Springs, and other area stops.",
    image: "/images/glenwood/cabins/riverwood.webp",
    href: "/glenwood-ar-cabins",
  },
  {
    name: "Feature Your Business",
    type: "Advertising",
    badge: "Featured Placement",
    description:
      "Get your restaurant, cabin, campground, shop, attraction, event, or local service in front of people who are already planning a Glenwood trip.",
    image: "/images/placeholder.png",
    href: "/contact",
  },
];