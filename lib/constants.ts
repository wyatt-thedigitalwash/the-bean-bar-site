export const LOCATIONS = {
  carrollwood: {
    name: "Carrollwood",
    address: "11406 N Dale Mabry Hwy Unit 109, Tampa, FL 33618",
    phone: "(813) 252-4464",
    phoneTel: "tel:+18132524464",
    orderUrl: "https://order.dripos.com/The-Bean-Bar-Co.-+-Carrollwood",
    googleMaps: "https://maps.app.goo.gl/hL4uq1CBSg2KYjpN8",
    neighborhoodNote:
      "Located on N Dale Mabry Hwy in Carrollwood, serving Tampa's northwest neighborhoods.",
    slug: "carrollwood" as const,
  },
  "tampa-palms": {
    name: "Tampa Palms",
    address: "17018 Palm Pointe Dr, Tampa, FL 33647",
    phone: "(813) 442-7699",
    phoneTel: "tel:+18134427699",
    orderUrl: "https://order.dripos.com/The-Bean-Bar-Co.-+-Tampa-Palms",
    googleMaps: "https://maps.app.goo.gl/HB9bi1bYSSbHyURR7",
    neighborhoodNote:
      "Located in Tampa Palms, serving Tampa's northeast communities.",
    slug: "tampa-palms" as const,
  },
} as const;

export const HOURS = {
  weekday: "Monday – Friday: 6 AM – 5 PM",
  weekend: "Saturday – Sunday: 7 AM – 5 PM",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/beanbar_co/",
  facebook: "https://www.facebook.com/thebeanbarco/",
};

export type MenuItem = {
  name: string;
  price: string;
  badge?: "V" | "GF" | "special";
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "coffee-espresso",
    title: "Coffee & Espresso",
    items: [
      { name: "Drip Coffee", price: "$3 / $4" },
      { name: "Cafe Con Leche", price: "$5.50 / $6.50" },
      { name: "Cappuccino", price: "$5 / $6" },
      { name: "Latte", price: "$4.50 / $5.50" },
      { name: "Americano", price: "$3.50 / $4.50" },
      { name: "Iced Coffee", price: "$3.50 / $4.25" },
      { name: "Caramel Macchiato", price: "$5.50 / $6.50" },
      { name: "Iced Latte", price: "$5 / $6" },
    ],
  },
  {
    id: "house-specialties",
    title: "House Specialties",
    items: [
      { name: "Irish Nutcase", price: "$7.50", badge: "special" },
      { name: "Shaken Oat Espresso", price: "$6.50", badge: "special" },
      { name: "Seasonal", price: "$5.75 / $6.75", badge: "special" },
      { name: "Seasonal Coffee Flight", price: "$17", badge: "special" },
    ],
  },
  {
    id: "not-coffee-tea",
    title: "Not Coffee & Tea",
    items: [
      { name: "Lotus Energy", price: "$6.50 / $7.50" },
      { name: "Strawberry Acai", price: "$5 / $6" },
      { name: "Hot Chocolate", price: "$4 / $5" },
      { name: "Smoothie", price: "$6 / $7" },
      { name: "Loose Leaf Selection", price: "$5 / $6" },
      { name: "Matcha", price: "$5.50 / $6.50" },
      { name: "Chai Tea", price: "$6 / $7" },
    ],
  },
  {
    id: "to-eat",
    title: "To Eat",
    items: [
      { name: "Waffle Chicken Sandwich", price: "$11" },
      { name: "Bagel Breakfast Sandwich", price: "$7.50" },
      { name: "Croissant Egg Sandwich", price: "$7.50" },
      { name: "Strawberry Nutella Crepe", price: "$13" },
      { name: "Avocado Toast", price: "$7.50", badge: "V" },
      { name: "Fancy Avocado Toast", price: "$8.50" },
      { name: "Egg Bites", price: "$5", badge: "GF" },
      { name: "Acai Bowl", price: "$12" },
      { name: "Bagel & Cream Cheese", price: "$5" },
      { name: "Chocolate Croissant", price: "$3.50" },
      { name: "Seasonal Bakery Items", price: "Market Price" },
    ],
  },
];

export const FLAVORS = [
  "Caramel (SF available)",
  "Vanilla (SF available)",
  "Hazelnut (SF available)",
  "Irish Cream (SF available)",
  "Pistachio",
  "Lavender",
  "Spiced Brown Sugar",
  "White Mocha",
  "Cookie Butter",
];

export const ALT_MILKS = ["Oat", "Almond", "Coconut"];

export const MENU_TABS = [
  { id: "coffee-espresso", label: "Coffee & Espresso" },
  { id: "not-coffee-tea", label: "Not Coffee & Tea" },
  { id: "to-eat", label: "To Eat" },
];

export const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Community Event",
  "University Function",
  "Grand Opening",
  "Church Event",
  "Festival",
  "Other",
];

export const EVENT_SIZES = [
  "Under 50 guests",
  "50–100 guests",
  "100–200 guests",
  "200–500 guests",
  "500+ guests",
];

export const REQUEST_TYPES = [
  "General Inquiry",
  "Catering Request",
  "Event Booking",
];
