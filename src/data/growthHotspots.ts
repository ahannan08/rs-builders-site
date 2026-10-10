export type HotspotCategory =
  | "connectivity"
  | "economic"
  | "social"
  | "government";

export type Hotspot = {
  id: string;
  name: string;
  category: HotspotCategory;
  /** [latitude, longitude] */
  position: [number, number];
  blurb: string;
};

export const hotspotCategories: {
  id: HotspotCategory;
  label: string;
  color: string;
}[] = [
  { id: "connectivity", label: "Connectivity", color: "#38bdf8" },
  { id: "economic", label: "Economic Growth", color: "#fbbf24" },
  { id: "social", label: "Social Infrastructure", color: "#4ade80" },
  { id: "government", label: "Government Projects", color: "#f472b6" },
];

/** Approximate centre of Hyderabad used for the ORR / RRR indicative rings. */
export const hyderabadCentre: [number, number] = [17.385, 78.4867];

/** Indicative radii in metres — ORR ≈ 158 km loop, proposed RRR ≈ 340 km loop. */
export const ringRoads = {
  orr: { radius: 25_000, label: "Outer Ring Road (ORR)" },
  rrr: { radius: 54_000, label: "Proposed Regional Ring Road (RRR)" },
};

/**
 * Key growth nodes across the Hyderabad / Telangana region.
 * Coordinates are approximate and intended for orientation, not survey use.
 */
export const hotspots: Hotspot[] = [
  // Connectivity
  {
    id: "rgia",
    name: "RGI Airport, Shamshabad",
    category: "connectivity",
    position: [17.2403, 78.4294],
    blurb:
      "International airport anchoring the southern growth belt — logistics, hospitality and residential demand radiate from here.",
  },
  {
    id: "orr-shamshabad",
    name: "ORR Exit — Shamshabad / Airport",
    category: "connectivity",
    position: [17.26, 78.41],
    blurb:
      "Primary ORR interchange to the airport, Srisailam Highway and Bengaluru Highway corridors.",
  },
  {
    id: "orr-nanakramguda",
    name: "ORR Exit — Nanakramguda",
    category: "connectivity",
    position: [17.406, 78.33],
    blurb:
      "Gateway to the Financial District and Kokapet; among the most sought-after ORR frontages.",
  },
  {
    id: "orr-pedda-amberpet",
    name: "ORR Exit — Pedda Amberpet",
    category: "connectivity",
    position: [17.327, 78.629],
    blurb:
      "Eastern ORR junction towards Vijayawada Highway and the Hayathnagar–Choutuppal growth corridor.",
  },
  {
    id: "rrr-sangareddy",
    name: "Proposed RRR — Sangareddy node",
    category: "connectivity",
    position: [17.6246, 78.0863],
    blurb:
      "North-western anchor of the proposed Regional Ring Road, linking NH-65 and NH-161.",
  },
  {
    id: "rrr-choutuppal",
    name: "Proposed RRR — Choutuppal node",
    category: "connectivity",
    position: [17.255, 78.904],
    blurb:
      "South-eastern RRR anchor on the Vijayawada Highway — an emerging logistics and plotted-development belt.",
  },
  {
    id: "rrr-shadnagar",
    name: "Proposed RRR — Shadnagar node",
    category: "connectivity",
    position: [17.07, 78.205],
    blurb:
      "Southern RRR anchor on the Bengaluru Highway, close to the airport and Pharma City influence zone.",
  },

  // Economic growth
  {
    id: "hitec-city",
    name: "HITEC City",
    category: "economic",
    position: [17.4435, 78.3772],
    blurb:
      "Hyderabad's original IT hub — Cyber Towers, Mindspace and a dense employment base.",
  },
  {
    id: "financial-district",
    name: "Financial District, Gachibowli",
    category: "economic",
    position: [17.416, 78.338],
    blurb:
      "Global capability centres, banks and tech campuses driving premium residential demand westward.",
  },
  {
    id: "pharma-city",
    name: "Hyderabad Pharma City, Mucherla",
    category: "economic",
    position: [17.0, 78.6],
    blurb:
      "Planned pharma and life-sciences cluster south-east of the airport — a long-horizon employment engine.",
  },
  {
    id: "genome-valley",
    name: "Genome Valley, Shamirpet",
    category: "economic",
    position: [17.6, 78.58],
    blurb:
      "Life-sciences and vaccine manufacturing hub to the north, with steady industrial expansion.",
  },
  {
    id: "adibatla",
    name: "Aerospace & Defence SEZ, Adibatla",
    category: "economic",
    position: [17.23, 78.56],
    blurb:
      "TCS campus, aerospace parks and hardware units on the Srisailam Highway growth belt.",
  },
  {
    id: "maheshwaram",
    name: "Fab City & IT Park, Maheshwaram",
    category: "economic",
    position: [17.13, 78.44],
    blurb:
      "Electronics manufacturing cluster south of the airport, supported by new access roads.",
  },

  // Social infrastructure
  {
    id: "aig",
    name: "AIG & Continental Hospitals, Gachibowli",
    category: "social",
    position: [17.436, 78.348],
    blurb:
      "Multi-speciality healthcare cluster serving the western corridor.",
  },
  {
    id: "isb",
    name: "ISB & University Belt",
    category: "social",
    position: [17.435, 78.34],
    blurb:
      "Indian School of Business, University of Hyderabad and international schools within a short radius.",
  },
  {
    id: "iith",
    name: "IIT Hyderabad, Kandi",
    category: "social",
    position: [17.594, 78.123],
    blurb:
      "Premier institute anchoring education-led growth along the Sangareddy corridor.",
  },
  {
    id: "tellapur",
    name: "Tellapur–Kollur residential belt",
    category: "social",
    position: [17.47, 78.29],
    blurb:
      "Fast-growing gated-community zone with new schools, hospitals and ORR access.",
  },
  {
    id: "shamshabad-schools",
    name: "Shamshabad–Jalpally social corridor",
    category: "social",
    position: [17.31, 78.48],
    blurb:
      "Schools, hospitals and retail following the airport-side residential expansion.",
  },

  // Government projects
  {
    id: "kokapet",
    name: "Kokapet Neopolis",
    category: "government",
    position: [17.395, 78.33],
    blurb:
      "State-auctioned high-rise precinct beside the ORR — record land values and planned infrastructure.",
  },
  {
    id: "future-city",
    name: "Future City (Fourth City), Mucherla",
    category: "government",
    position: [17.03, 78.55],
    blurb:
      "Government-planned new city south of the airport with dedicated expressway links.",
  },
  {
    id: "metro-airport",
    name: "Metro Phase II — Airport Corridor",
    category: "government",
    position: [17.347, 78.552],
    blurb:
      "Proposed metro extensions connecting the city core to the airport and eastern suburbs.",
  },
  {
    id: "musi",
    name: "Musi Riverfront Development",
    category: "government",
    position: [17.37, 78.48],
    blurb:
      "City-scale riverfront rejuvenation programme reshaping central and eastern Hyderabad.",
  },
];
