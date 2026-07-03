export type GlenwoodBusiness = {
  name: string;
  category:
    | "Restaurant"
    | "Cabins & Lodging"
    | "Shopping & Supplies"
    | "Outdoor Recreation"
    | "Local Service"
    | "Attraction";
  type: string;
  description: string;
  image: string;
  phone?: string;
  address?: string;
  website?: string;
  directions?: string;
  href?: string;
};

export const glenwoodBusinesses: GlenwoodBusiness[] = [
  {
    name: "Caddo River Camping & Canoe Rental",
    category: "Outdoor Recreation",
    type: "Canoes • Kayaks • Tubes • Camping • Cabins",
    description:
      "A key Glenwood-area river business for visitors planning Caddo River floats, camping, cabins, canoeing, kayaking, tubing, river conditions, and shuttle-style trip help.",
    image: "/images/glenwood/cabins/caddo-river-camping.avif",
    phone: "870-356-5336",
    address: "26 Hwy 8 East, Glenwood, AR 71943",
    website: "https://caddoriver.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Camping+and+Canoe+Rental+26+Hwy+8+East+Glenwood+AR+71943",
    href: "/caddo-river",
  },
  {
    name: "Lucky’s Canoe & Kayak Rental",
    category: "Outdoor Recreation",
    type: "Canoe Rental • Kayak Rental • Tubes • River Camping",
    description:
      "A Caddo River rental and camping business near Glenwood for visitors looking at float trips, tubes, kayaks, canoes, camping, and a river-focused day outside.",
    image: "/images/glenwood/floats.webp",
    phone: "870-356-2772",
    address: "Sweetgum Ln, Glenwood, AR 71943",
    website: "https://caddocanoeandkayak.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lucky%27s+Canoe+and+Kayak+Rental+Glenwood+AR",
    href: "/caddo-river",
  },
  {
    name: "Glenwood Country Club",
    category: "Outdoor Recreation",
    type: "Golf Course • Lodging • Events",
    description:
      "A Glenwood golf course with tee times, course facilities, event information, and lodging options. A good outdoor add-on for visitors wanting something besides the river or lake.",
    image: "/images/glenwood/golf.avif",
    phone: "870-356-4422",
    address: "584 Highway 70 East, Glenwood, AR 71943",
    website: "https://www.glenwoodcountryclub.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Glenwood+Country+Club+584+Highway+70+East+Glenwood+AR+71943",
  },
  {
    name: "Bear Creek UTV Rentals & Repair LLC",
    category: "Outdoor Recreation",
    type: "UTV Rentals • ATV Rentals • Dirt Bike Repair",
    description:
      "A Kirby-area outdoor recreation business offering UTV rentals, ATV rentals, and repair or maintenance for UTVs, ATVs, and dirt bikes near Lake Greeson and Glenwood-area cabin country.",
    image: "/images/glenwood/lake-greeson-2.jpg",
    phone: "870-828-3093",
    address: "337 Kirby Landing Rd, Kirby, AR 71950",
    website: "https://bearcreekutv.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bear+Creek+UTV+Rentals+and+Repair+337+Kirby+Landing+Rd+Kirby+AR+71950",
  },
  {
    name: "Swaha Lodge & Marina",
    category: "Outdoor Recreation",
    type: "Lake Greeson Marina • Cabins • Boat Rentals",
    description:
      "A Lake Greeson lodge and marina near Murfreesboro with cabins, marina access, boat rentals, and lake recreation for visitors adding a lake day to a Glenwood trip.",
    image: "/images/glenwood/cabins/swaha-lodge-marina.jpg",
    phone: "870-285-2272",
    address: "205 Dynamite Hill Road, Murfreesboro, AR 71958",
    website: "https://swahacabins.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Swaha+Lodge+and+Marina+205+Dynamite+Hill+Road+Murfreesboro+AR+71958",
    href: "/lake-greeson-near-glenwood",
  },
  {
    name: "John Benjamin Fishing Pond",
    category: "Attraction",
    type: "Fishing Pond • Family Outdoor Stop",
    description:
      "A simple Glenwood outdoor stop for family fishing, slower afternoons, and easy outside time close to town.",
    image: "/images/glenwood/john-benjamin-pond-hero.jpeg",
    address: "Glenwood, AR",
    href: "/john-benjamin-pond",
    directions:
      "https://www.google.com/maps/search/?api=1&query=John+Benjamin+Fishing+Pond+Glenwood+AR",
  },
  {
    name: "Bard Springs Recreation Area",
    category: "Attraction",
    type: "Forest Recreation • Swimming Holes • Picnics",
    description:
      "A quiet Ouachita National Forest recreation area near Glenwood for creekside time, picnics, swimming holes, forest roads, and a slower outdoor stop.",
    image: "/images/glenwood/bard-springs-hero.webp",
    address: "Ouachita National Forest near Glenwood, AR",
    href: "/bard-springs",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bard+Springs+Recreation+Area+Arkansas",
  },
  {
    name: "Mercantile on Broadway",
    category: "Shopping & Supplies",
    type: "Gift Shop • Local Goods • Downtown Glenwood",
    description:
      "A downtown Glenwood shop with local goods, gifts, market items, and a small-town browsing stop for visitors looking for something local to take home.",
    image: "/images/glenwood/mercantile-broadway.jpg",
    address: "209 E Broadway, Glenwood, AR 71943",
    website: "https://www.facebook.com/p/Mercantile-on-Broadway-61561344606797/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mercantile+on+Broadway+209+E+Broadway+Glenwood+AR+71943",
  },
  {
    name: "John Plyler Home Center",
    category: "Shopping & Supplies",
    type: "Hardware • Lumber • Appliances • Building Supplies",
    description:
      "A long-running Glenwood home center with hardware, lumber, paint, plumbing, electrical, building materials, appliances, and supplies useful for locals, cabin owners, and property projects.",
    image: "/images/glenwood/plylers.jpg",
    address: "Glenwood, AR",
    website: "https://www.johnplylerhomecenter.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=John+Plyler+Home+Center+Glenwood+AR",
  },
  {
    name: "Wright’s Food Center",
    category: "Shopping & Supplies",
    type: "Grocery Store • Food Supplies • Weekly Ad",
    description:
      "A Glenwood grocery stop for food, drinks, supplies, and cabin or river-trip basics before heading toward the Caddo River, Lake Greeson, campgrounds, or local stays.",
    image: "/images/glenwood/wrights.jpg",
    phone: "870-356-2231",
    address: "102 West Broadway, Glenwood, AR 71943",
    website: "https://www.wrightsfoodcenter.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Wright%27s+Food+Center+102+West+Broadway+Glenwood+AR+71943",
  },
  {
    name: "Glenwood Florist & Gifts",
    category: "Shopping & Supplies",
    type: "Florist • Gifts • Local Delivery",
    description:
      "A Glenwood flower and gift shop for arrangements, gifts, home decor items, and local delivery needs around town and nearby communities.",
    image: "/images/glenwood/glenwood-florist.jpg",
    phone: "870-356-3712",
    address: "621 East Broadway, Glenwood, AR 71943",
    website: "https://www.glenwoodfloristandgifts.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Glenwood+Florist+and+Gifts+621+East+Broadway+Glenwood+AR+71943",
  },
  {
    name: "Family Dollar Glenwood",
    category: "Shopping & Supplies",
    type: "General Store • Household Goods • Trip Supplies",
    description:
      "A familiar general store option in Glenwood for household goods, snacks, basic supplies, small trip needs, and items visitors may have forgotten to pack.",
    image: "/images/glenwood/familydollar.webp",
    address: "180 Highway 70 E, Glenwood, AR 71943",
    website: "https://locations.familydollar.com/ar/glenwood/180-highway-70-e",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Family+Dollar+180+Highway+70+E+Glenwood+AR+71943",
  },
  {
    name: "Glenwood Auto Parts",
    category: "Local Service",
    type: "Auto Parts • Vehicle Supplies • Local Parts Store",
    description:
      "A local auto parts store for vehicle supplies, parts, and advice. Useful for locals, travelers, RV visitors, and anyone dealing with a vehicle issue around Glenwood.",
    image: "/images/glenwood/glenwood-auto.jpg",
    address: "Glenwood, AR",
    website: "https://locations.bumpertobumper.com/ar/glenwood/1820362/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Glenwood+Auto+Parts+Glenwood+AR",
  },
  {
    name: "Thomas Renovations, LLC",
    category: "Local Service",
    type: "Exterior Remodeling • Gutters • Siding • Decks • Fencing",
    description:
      "A Glenwood-area exterior remodeling company offering work such as gutters, siding, decks, fencing, fascia, soffits, and practical exterior improvements.",
    image: "/images/glenwood/thomas-renovations.png",
    phone: "870-997-1192",
    address: "Glenwood, AR",
    website: "https://www.thomasrenovations.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Thomas+Renovations+Glenwood+AR",
  },
  {
    name: "Southern Bancorp Glenwood",
    category: "Local Service",
    type: "Bank • Local Financial Services",
    description:
      "A Glenwood branch for banking and financial services, useful for residents, local businesses, and longer-stay visitors needing a nearby bank branch.",
    image: "/images/glenwood/southern-bancorp.jpg",
    phone: "870-356-2299",
    address: "218 Elm Street, Glenwood, AR 71943",
    website: "https://banksouthern.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Southern+Bancorp+218+Elm+Street+Glenwood+AR+71943",
  },
  {
    name: "At Living Water Cabins",
    category: "Cabins & Lodging",
    type: "Cabins • Family Lodge • Ouachita Area Stay",
    description:
      "Cabins and a family lodge near Glenwood, Norman, Mount Ida, Lake Greeson, and the Caddo River area for visitors planning quiet outdoor stays.",
    image: "/images/glenwood/cabins/at-living-water-cabins.jpg",
    address: "Norman, AR",
    href: "/at-living-water-cabins",
    directions:
      "https://www.google.com/maps/search/?api=1&query=At+Living+Water+Cabins+Norman+AR",
  },
  {
    name: "Caddo River Cabins",
    category: "Cabins & Lodging",
    type: "Riverfront Cabins • Caddo River",
    description:
      "Riverfront cabin lodging on the Caddo River in Glenwood, built around fishing, floating, swimming, campfires, and relaxing close to the water.",
    image: "/images/glenwood/cabins/caddo-river-cabins.png",
    phone: "870-718-3072",
    address: "Caddo River, Glenwood, AR",
    href: "/glenwood-ar-cabins",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+River+Cabins+Glenwood+AR",
  },
  {
    name: "Riverwood Inn of Glenwood",
    category: "Cabins & Lodging",
    type: "Motel • Creekside Stay • Glenwood Lodging",
    description:
      "A local motel option in Glenwood with easy highway access near restaurants, the Caddo River, Lake Greeson, and regional day-trip routes.",
    image: "/images/glenwood/cabins/riverwood.webp",
    phone: "870-356-4567",
    address: "363 Hwy 70 E, Glenwood, AR 71943",
    href: "/glenwood-ar-cabins",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Riverwood+Inn+363+Hwy+70+E+Glenwood+AR+71943",
  },
  {
    name: "Caddo Cafe",
    category: "Restaurant",
    type: "Cafe • Breakfast • Comfort Food",
    description:
      "A local Glenwood cafe for breakfast, lunch, Mexican food, American plates, catfish, burgers, and easy meals before or after river and lake time.",
    image: "/images/glenwood/restaurants/caddo-cafe.jpg",
    phone: "870-356-2397",
    address: "53 US-70 Ste. C, Glenwood, AR 71943",
    href: "/glenwood-ar-restaurants",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Caddo+Cafe+53+US-70+Ste+C+Glenwood+AR+71943",
  },
  {
    name: "Fish Nest Family Restaurant",
    category: "Restaurant",
    type: "Seafood • Family Restaurant • Local Favorite",
    description:
      "A long-running Glenwood restaurant known for seafood, fried fish, burgers, steaks, chicken, and family-style meals after time outside.",
    image: "/images/glenwood/restaurants/fishnest.webp",
    phone: "870-356-3875",
    address: "164 US-70, Glenwood, AR 71943",
    href: "/glenwood-ar-restaurants",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fish+Nest+Family+Restaurant+164+US-70+Glenwood+AR+71943",
  },
  {
    name: "Arrow 6 Coffee Co.",
    category: "Restaurant",
    type: "Coffee Shop • Drinks • Morning Stop",
    description:
      "A Glenwood coffee shop for coffee, specialty drinks, seasonal lattes, baked goods, and quick morning stops before river, lake, cabin, or campground plans.",
    image: "/images/glenwood/cabins/arrow-6-coffee-co.jpg",
    address: "3 Caddo Crossing Dr, Glenwood, AR 71943",
    website: "https://arrow6coffeeco.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arrow+6+Coffee+Co+3+Caddo+Crossing+Dr+Glenwood+AR+71943",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Mercado Restaurant",
    category: "Restaurant",
    type: "Mexican Restaurant • Meat Market • Produce",
    description:
      "A Glenwood Mexican restaurant, meat market, and produce stop for tacos, plates, casual meals, and simple local food while passing through town.",
    image: "/images/glenwood/cabins/mercado-restaurant.jpg",
    phone: "870-356-0113",
    address: "240 US-70, Glenwood, AR 71943",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mercado+Restaurant+240+US-70+Glenwood+AR+71943",
    href: "/glenwood-ar-restaurants",
  },
  {
    name: "Flavor-Licious Glenwood",
    category: "Restaurant",
    type: "Ice Cream • Sweets • Snacks",
    description:
      "A Glenwood sweets and ice cream stop for treats, snacks, drinks, and family-friendly dessert stops while passing through or visiting the river area.",
    image: "/images/glenwood/flavor.jpg",
    phone: "870-279-4179",
    address: "804 East Broadway, Glenwood, AR 71943",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Flavor-Licious+Glenwood+804+East+Broadway+Glenwood+AR+71943",
    href: "/glenwood-ar-restaurants",
  },
];

export function byCategory(category: GlenwoodBusiness["category"]) {
  return glenwoodBusinesses.filter((business) => business.category === category);
}

export function byNames(names: string[]) {
  return names
    .map((name) => glenwoodBusinesses.find((business) => business.name === name))
    .filter((business): business is GlenwoodBusiness => Boolean(business));
}

export function uniqueByName(items: GlenwoodBusiness[]) {
  const seen = new Set<string>();

  return items.filter((business) => {
    const key = business.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
