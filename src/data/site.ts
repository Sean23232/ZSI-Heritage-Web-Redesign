export type BrandId = "volkswagen" | "audi" | "mercedes";

export const CONTACT = {
  name: "Z & S Imports",
  short: "ZSI",
  tagline: "VW / Audi & Mercedes-Benz Specialists Since 1982",
  slogan: "Keeping Classic German Automobiles Alive.",
  phone: "714-316-9962",
  phoneHref: "tel:+17143169962",
  email: "info@zsimports.com",
  emailHref: "mailto:info@zsimports.com",
  location: "Pahrump, NV 89060",
  locationFull: "Pahrump, Nevada 89060 — United States",
  service: "Mail-order parts · Projects by appointment only",
};

/* ------------------------------------------------------------------ */
/*  Parts directory data                                               */
/* ------------------------------------------------------------------ */

export interface PartGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Catalog {
  id: BrandId;
  label: string; // full brand name used in form prefill / breadcrumbs
  shortLabel: string; // tab label
  heading: string;
  sub: string;
  note?: string;
  groups: PartGroup[];
}

export const CATALOGS: Record<BrandId, Catalog> = {
  volkswagen: {
    id: "volkswagen",
    label: "Volkswagen",
    shortLabel: "Volkswagen",
    heading: "Volkswagen Parts & Components",
    sub: "Explore our established VW parts categories and find the components you need for your restoration or repair project.",
    groups: [
      {
        id: "engine-drivetrain",
        label: "Engine & Drivetrain",
        items: [
          "Engines",
          "Rebuilt Engines",
          "Used Engines",
          "Cylinder Heads",
          "Pistons & Rings",
          "Bearings",
          "Camshafts",
          "Crankshafts",
          "Connecting Rods",
          "Oil Pumps",
          "Gaskets & Seals",
          "Engine Mounts",
          "Timing Components",
          "Turbochargers",
          "Engine Conversion Parts",
        ],
      },
      {
        id: "brakes-suspension",
        label: "Brakes & Suspension",
        items: [
          "Brake Components",
          "Suspension Parts",
          "Steering Components",
          "Model-Specific Suspension Parts",
        ],
      },
      {
        id: "body-exterior",
        label: "Body & Exterior",
        items: [
          "Bumpers",
          "Doors",
          "Fenders",
          "Hoods",
          "Grilles",
          "Tailgates & Hatches",
          "Door Handles & Locks",
          "Body Panels",
          "Trim & Emblems",
          "Weatherstripping & Seals",
          "Decals & Striping",
        ],
      },
      {
        id: "electrical",
        label: "Electrical",
        items: [
          "Alternators",
          "Starters",
          "Horns",
          "Lights & Lighting",
          "Relays",
          "Switches & Sensors",
          "Ignition Parts",
        ],
      },
      {
        id: "transmission-clutch",
        label: "Transmission & Clutch",
        items: [
          "Manual Transmissions",
          "Automatic Transmissions",
          "Transmission Components",
          "Clutches & Clutch Parts",
        ],
      },
      {
        id: "cooling-exhaust",
        label: "Cooling & Exhaust",
        items: [
          "Radiators",
          "Water Pumps",
          "Thermostats",
          "Coolant Hoses",
          "Expansion Tanks",
          "Heater Components",
          "Oil Coolers",
          "Exhaust Parts",
        ],
      },
      {
        id: "axles-driveline",
        label: "Axles & Driveline",
        items: ["Axles", "Drive-Line Components", "Model-Specific Parts"],
      },
      {
        id: "model-specific",
        label: "Model-Specific Categories",
        items: [
          "A1 Rabbit / Scirocco / Cabriolet / Caddy / Jetta",
          "A2 Golf / Jetta",
          "A3 Golf / Jetta / Cabrio",
          "B1 Dasher / Audi Fox",
          "B2 Quantum / Fox / Audi 4000",
          "T3 Vanagon / Transporter",
          "T4 Eurovan / Transporter",
        ],
      },
    ],
  },

  audi: {
    id: "audi",
    label: "Audi",
    shortLabel: "Audi",
    heading: "Audi Parts & Components",
    sub: "Specialist parts and components for classic Audi models and European-spec applications.",
    note: "An overview of ZSI's classic Audi sourcing areas. Availability of specific components is confirmed directly with ZSI.",
    groups: [
      {
        id: "engine-drivetrain",
        label: "Engine & Drivetrain",
        items: [
          "Engines & Engine Components",
          "Cylinder Heads",
          "Pistons & Rings",
          "Camshafts & Timing",
          "Gaskets & Seals",
          "Turbocharger Components",
        ],
      },
      {
        id: "brakes-suspension",
        label: "Brakes & Suspension",
        items: ["Brake Components", "Suspension Parts", "Steering Components"],
      },
      {
        id: "body-exterior",
        label: "Body & Exterior",
        items: [
          "Bumpers",
          "Doors",
          "Fenders",
          "Hoods",
          "Grilles",
          "Trim & Emblems",
          "Weatherstripping & Seals",
        ],
      },
      {
        id: "electrical",
        label: "Electrical",
        items: [
          "Alternators",
          "Starters",
          "Lights & Lighting",
          "Switches & Sensors",
          "Ignition Parts",
        ],
      },
      {
        id: "drivetrain",
        label: "Transmission & Driveline",
        items: [
          "Manual Transmissions",
          "Transmission Components",
          "Clutches & Clutch Parts",
          "Axles & Drive-Shaft Components",
        ],
      },
    ],
  },

  mercedes: {
    id: "mercedes",
    label: "Mercedes-Benz",
    shortLabel: "Mercedes-Benz",
    heading: "Mercedes-Benz Parts & Components",
    sub: "Explore specialist parts support for vintage Mercedes-Benz automobiles.",
    note: "An overview of ZSI's classic Mercedes-Benz sourcing areas. Availability of specific components is confirmed directly with ZSI.",
    groups: [
      {
        id: "engine-drivetrain",
        label: "Engine & Drivetrain",
        items: [
          "Engines & Engine Components",
          "Cylinder Heads",
          "Pistons & Rings",
          "Crankshafts & Bearings",
          "Gaskets & Seals",
        ],
      },
      {
        id: "brakes-suspension",
        label: "Brakes & Suspension",
        items: [
          "Brake Components",
          "Suspension Parts",
          "Steering Components",
          "Shock Absorbers & Mounts",
        ],
      },
      {
        id: "body-exterior",
        label: "Body & Exterior",
        items: [
          "Bumpers",
          "Doors",
          "Hoods & Trunks",
          "Grilles",
          "Body Panels",
          "Trim & Emblems",
          "Weatherstripping & Seals",
        ],
      },
      {
        id: "electrical",
        label: "Electrical & Lighting",
        items: [
          "Alternators",
          "Starters",
          "Headlights & Taillights",
          "Switches & Sensors",
          "Wiring & Harnesses",
        ],
      },
      {
        id: "cooling-exhaust",
        label: "Cooling & Exhaust",
        items: ["Radiators", "Water Pumps", "Heater Components", "Exhaust Parts"],
      },
    ],
  },
};

export const BRAND_ORDER: BrandId[] = ["volkswagen", "audi", "mercedes"];

export interface SearchResult {
  brand: BrandId;
  brandLabel: string;
  group: string;
  item: string;
}

export function flattenSearch(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const out: SearchResult[] = [];
  for (const brand of BRAND_ORDER) {
    const cat = CATALOGS[brand];
    for (const group of cat.groups) {
      for (const item of group.items) {
        if (
          item.toLowerCase().includes(q) ||
          group.label.toLowerCase().includes(q) ||
          cat.label.toLowerCase().includes(q)
        ) {
          out.push({ brand: cat.id, brandLabel: cat.label, group: group.label, item });
        }
      }
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export interface NavChild {
  label: string;
  goTo?: { brand: BrandId; group: string | null };
  target?: string;
}

export interface NavItem {
  label: string;
  target: string;
  brand?: BrandId;
  children?: NavChild[];
}

const childrenFor = (brand: BrandId): NavChild[] => [
  { label: `All ${CATALOGS[brand].label} Parts`, goTo: { brand, group: null } },
  ...CATALOGS[brand].groups.map((g) => ({
    label: g.label,
    goTo: { brand, group: g.id } as { brand: BrandId; group: string | null },
  })),
];

export const NAV: NavItem[] = [
  { label: "Home", target: "home" },
  { label: "Volkswagen Parts", target: "parts", brand: "volkswagen", children: childrenFor("volkswagen") },
  { label: "Audi Parts", target: "parts", brand: "audi", children: childrenFor("audi") },
  {
    label: "Mercedes-Benz Parts",
    target: "parts",
    brand: "mercedes",
    children: childrenFor("mercedes"),
  },
  {
    label: "Restoration",
    target: "restoration",
    children: [
      { label: "VW Restoration", target: "restoration" },
      { label: "Vanagon & Eurovan Projects", target: "restoration" },
      { label: "Engine & Drivetrain Conversions", target: "restoration" },
      { label: "Specialist Technical Assistance", target: "restoration" },
    ],
  },
  { label: "About ZSI", target: "about" },
  { label: "Contact", target: "contact" },
];

/* ------------------------------------------------------------------ */
/*  Brand panels                                                       */
/* ------------------------------------------------------------------ */

export interface BrandPanel {
  id: BrandId;
  overline: string;
  title: string;
  desc: string;
  cta: string;
  img: string;
  alt: string;
}

export const BRAND_PANELS: BrandPanel[] = [
  {
    id: "volkswagen",
    overline: "Our Original Specialty",
    title: "Volkswagen Parts",
    desc: "Parts and components for classic water-cooled Volkswagens, from Rabbit and Golf models to Vanagon and Eurovan platforms.",
    cta: "Explore VW Parts",
    img: "https://images.pexels.com/photos/15240809/pexels-photo-15240809.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=750",
    alt: "Classic green Volkswagen van among vintage cars at an outdoor enthusiast meet",
  },
  {
    id: "audi",
    overline: "Euro-Spec Expertise",
    title: "Audi Parts",
    desc: "Specialist parts and components for classic Audi models and European-spec applications.",
    cta: "Explore Audi Parts",
    img: "https://images.pexels.com/photos/24819484/pexels-photo-24819484.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=750",
    alt: "Classic red Audi Quattro at a motorsport event",
  },
  {
    id: "mercedes",
    overline: "Vintage Mercedes Support",
    title: "Mercedes-Benz Parts",
    desc: "Explore specialist parts support for vintage Mercedes-Benz automobiles.",
    cta: "Explore Mercedes Parts",
    img: "https://images.pexels.com/photos/15447328/pexels-photo-15447328.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=750",
    alt: "Classic Mercedes-Benz W123 parked at a vintage car exhibition",
  },
];

/* ------------------------------------------------------------------ */
/*  Trust strip                                                        */
/* ------------------------------------------------------------------ */

export const TRUST_ITEMS = [
  { icon: "flag", title: "Since 1982", text: "Decades of hands-on experience." },
  { icon: "archive", title: "Rare Parts", text: "NLA and NOS specialist sourcing." },
  { icon: "gear", title: "German Engineering", text: "VW, Audi and Mercedes-Benz." },
  { icon: "phone", title: "Personal Service", text: "Knowledgeable assistance and direct contact." },
] as const;

/* ------------------------------------------------------------------ */
/*  Heritage ticker                                                    */
/* ------------------------------------------------------------------ */

export const TICKER_ITEMS = [
  "Volkswagen",
  "Audi",
  "Mercedes-Benz",
  "NOS Parts",
  "NLA Sourcing",
  "Vanagon",
  "Eurovan",
  "Golf",
  "Jetta",
  "Rabbit",
  "Scirocco",
  "Quattro",
  "W123",
  "Engine Conversions",
  "Restoration",
  "Mail-Order Nationwide",
];

/* ------------------------------------------------------------------ */
/*  Rare parts                                                         */
/* ------------------------------------------------------------------ */

export const RARE_PANELS = [
  {
    code: "NLA",
    name: "No Longer Available",
    text: "Looking for a discontinued component? Contact us about sourcing hard-to-find parts.",
  },
  {
    code: "NOS",
    name: "New Old Stock",
    text: "Original new-old-stock components for enthusiasts who value keeping their vehicles as close to original as possible.",
  },
  {
    code: "EURO-SPEC",
    name: "European-Specification Parts",
    text: "Specialist components and European-specification applications for classic German vehicles.",
  },
];

/* ------------------------------------------------------------------ */
/*  Restoration                                                        */
/* ------------------------------------------------------------------ */

export const RESTORATION_SERVICES = [
  {
    icon: "engine",
    title: "VW Restoration",
    text: "Complete and partial Volkswagen restorations, carried out with care.",
  },
  {
    icon: "van",
    title: "Vanagon & Eurovan Projects",
    text: "T3 and T4 platform work, including engine conversions.",
  },
  {
    icon: "swap",
    title: "Engine & Drivetrain Conversions",
    text: "Custom engine and drivetrain conversion builds.",
  },
  {
    icon: "talk",
    title: "Specialist Technical Assistance",
    text: "Parts fitment advice and project guidance from experience.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  How to order                                                       */
/* ------------------------------------------------------------------ */

export const ORDER_STEPS = [
  {
    n: "01",
    title: "Find Your Part",
    text: "Browse the parts directory and identify the component or vehicle application.",
  },
  {
    n: "02",
    title: "Contact ZSI",
    text: "Call or email with the part you need, including your vehicle's year, model, and any relevant details.",
  },
  {
    n: "03",
    title: "Confirm Your Order",
    text: "ZSI will help confirm availability, pricing, and shipping arrangements. Orders are processed directly through the business.",
  },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const FOOTER_NAV: { label: string; target: string; brand?: BrandId }[] = [
  { label: "Home", target: "home" },
  { label: "About ZSI", target: "about" },
  { label: "Volkswagen Parts", target: "parts", brand: "volkswagen" },
  { label: "Audi Parts", target: "parts", brand: "audi" },
  { label: "Mercedes-Benz Parts", target: "parts", brand: "mercedes" },
  { label: "Restoration", target: "restoration" },
  { label: "Contact", target: "contact" },
];

export const FOOTER_SERVICES = [
  { label: "NLA Parts", target: "rare" },
  { label: "NOS Parts", target: "rare" },
  { label: "European-Spec Parts", target: "rare" },
  { label: "Engine Conversions", target: "restoration" },
  { label: "Restoration", target: "restoration" },
];

/* Shared image set (authentic, editorial) */
export const IMAGES = {
  hero: {
    src: "https://images.pexels.com/photos/19762975/pexels-photo-19762975.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1200",
    alt: "Classic Volkswagen Golfs at a vintage car meet, warm film photograph",
  },
  rareDetail: {
    src: "https://images.pexels.com/photos/8651903/pexels-photo-8651903.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640",
    alt: "Cylinder head and camshaft components on a workshop bench",
  },
  restorationMain: {
    src: "https://images.pexels.com/photos/4116228/pexels-photo-4116228.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Old car engine laid out on a workshop bench with hand tools",
  },
  restorationSub: {
    src: "https://images.pexels.com/photos/16135855/pexels-photo-16135855.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=500",
    alt: "Row of used engines stored in a restoration workshop",
  },
  about: {
    src: "https://images.pexels.com/photos/4489758/pexels-photo-4489758.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
    alt: "Mechanics working together on a vehicle in a workshop",
  },
};
