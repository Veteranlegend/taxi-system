import type { PricingLocation, PriceEstimate, TripType } from "@/types/pricing";

// ---------------------------------------------------------------------------
// Location data — all GPS coordinates are real.
// Road distances for major routes are manually verified; Haversine fallback
// covers the rest with a road-factor multiplier.
// ---------------------------------------------------------------------------

export const PRICING_LOCATIONS: PricingLocation[] = [

  // ── Akkar Governorate ────────────────────────────────────────────────────
  { id: "akkar",         label: "Akkar (Halba)",          lat: 34.5483, lng: 36.0786, isAirport: false },
  { id: "kobayat",       label: "Kobayat",                lat: 34.5700, lng: 36.1400, isAirport: false },
  { id: "bebnine",       label: "Bebnine",                lat: 34.5700, lng: 36.0500, isAirport: false },
  { id: "abdeh",         label: "Abdeh",                  lat: 34.5100, lng: 35.8900, isAirport: false },

  // ── North Lebanon — Tripoli / Mina / Beddawi ─────────────────────────────
  { id: "tripoli",       label: "Tripoli",                lat: 34.4367, lng: 35.8497, isAirport: false },
  { id: "mina",          label: "Mina (Tripoli)",         lat: 34.4397, lng: 35.8237, isAirport: false },
  { id: "beddawi",       label: "Beddawi",                lat: 34.4600, lng: 35.8500, isAirport: false },

  // ── North Lebanon — Dinniyeh / Minieh ────────────────────────────────────
  { id: "dinniyeh",      label: "Dinniyeh",               lat: 34.4200, lng: 36.0900, isAirport: false },
  { id: "minieh",        label: "Minieh / Sir el Denniyeh", lat: 34.3700, lng: 35.9100, isAirport: false },

  // ── North Lebanon — Zgharta caza ─────────────────────────────────────────
  { id: "zgharta",       label: "Zgharta",                lat: 34.3997, lng: 35.8928, isAirport: false },
  { id: "miziara",       label: "Miziara",                lat: 34.3600, lng: 35.9600, isAirport: false },
  { id: "kfarhata",      label: "Kfarhata",               lat: 34.3400, lng: 35.9300, isAirport: false },
  { id: "kousba",        label: "Kousba",                 lat: 34.2700, lng: 35.9100, isAirport: false },

  // ── North Lebanon — Koura caza ───────────────────────────────────────────
  { id: "koura",         label: "Koura",                  lat: 34.2700, lng: 35.7800, isAirport: false },
  { id: "amioun",        label: "Amioun",                 lat: 34.2933, lng: 35.8581, isAirport: false },
  { id: "hamat",         label: "Hamat",                  lat: 34.3100, lng: 35.8200, isAirport: false },
  { id: "enfeh",         label: "Enfeh",                  lat: 34.3632, lng: 35.7267, isAirport: false },
  { id: "deirbalamand",  label: "Deir Balamand",          lat: 34.2800, lng: 35.8000, isAirport: false },

  // ── North Lebanon — Bcharre caza ─────────────────────────────────────────
  { id: "ehden",         label: "Ehden",                  lat: 34.3028, lng: 35.9578, isAirport: false },
  { id: "bcharre",       label: "Bcharre",                lat: 34.2530, lng: 36.0095, isAirport: false },
  { id: "hasroun",       label: "Hasroun",                lat: 34.2706, lng: 35.9703, isAirport: false },
  { id: "bqaakafra",     label: "Bqaa Kafra",             lat: 34.2200, lng: 35.9800, isAirport: false },

  // ── North Lebanon — Batroun caza ─────────────────────────────────────────
  { id: "chekka",        label: "Chekka",                 lat: 34.3150, lng: 35.7350, isAirport: false },
  { id: "batroun",       label: "Batroun",                lat: 34.2569, lng: 35.6600, isAirport: false },
  { id: "tannourine",    label: "Tannourine",             lat: 34.1911, lng: 35.8764, isAirport: false },
  { id: "hardine",       label: "Hardine",                lat: 34.2100, lng: 35.7800, isAirport: false },
  { id: "kfarhelda",     label: "Kfarhelda",              lat: 34.1800, lng: 35.7100, isAirport: false },

  // ── Keserwan caza ────────────────────────────────────────────────────────
  { id: "byblos",        label: "Byblos (Jbeil)",         lat: 34.1217, lng: 35.6486, isAirport: false },
  { id: "tabarja",       label: "Tabarja",                lat: 34.0264, lng: 35.6408, isAirport: false },
  { id: "adma",          label: "Adma",                   lat: 33.9800, lng: 35.6500, isAirport: false },
  { id: "zouk",          label: "Zouk Mikael / Zouk Mosbeh", lat: 33.9740, lng: 35.6157, isAirport: false },
  { id: "haretsakher",   label: "Haret Sakher",           lat: 33.9800, lng: 35.6300, isAirport: false },
  { id: "harissa",       label: "Harissa",                lat: 33.9900, lng: 35.6500, isAirport: false },
  { id: "ghazir",        label: "Ghazir / Sarba",         lat: 33.9800, lng: 35.6300, isAirport: false },
  { id: "jounieh",       label: "Jounieh",                lat: 33.9817, lng: 35.6186, isAirport: false },
  { id: "ajaltoun",      label: "Ajaltoun",               lat: 33.9400, lng: 35.6800, isAirport: false },
  { id: "faraya",        label: "Faraya",                 lat: 34.0028, lng: 35.9039, isAirport: false },
  { id: "faqra",         label: "Faqra",                  lat: 34.0100, lng: 35.9000, isAirport: false },
  { id: "kfardebiane",   label: "Kfardebian",             lat: 34.0100, lng: 35.8500, isAirport: false },
  { id: "laqlouq",       label: "Laqlouq",                lat: 34.0900, lng: 35.8900, isAirport: false },

  // ── Metn caza ────────────────────────────────────────────────────────────
  { id: "bikfaya",       label: "Bikfaya",                lat: 33.9200, lng: 35.6900, isAirport: false },
  { id: "mtayleb",       label: "Mtayleb",                lat: 33.9200, lng: 35.6100, isAirport: false },
  { id: "rabieh",        label: "Rabieh",                 lat: 33.9200, lng: 35.6000, isAirport: false },
  { id: "baabdat",       label: "Baabdat",                lat: 33.8900, lng: 35.6200, isAirport: false },
  { id: "broummana",     label: "Broummana / Beit Mery",  lat: 33.8700, lng: 35.6200, isAirport: false },
  { id: "mansourieh",    label: "Mansourieh",             lat: 33.8800, lng: 35.5900, isAirport: false },
  { id: "naccache",      label: "Naccache",               lat: 33.9000, lng: 35.5900, isAirport: false },
  { id: "zalka",         label: "Zalka",                  lat: 33.9100, lng: 35.5700, isAirport: false },
  { id: "jdeideh",       label: "Jdeideh",                lat: 33.9048, lng: 35.5668, isAirport: false },
  { id: "borjhammoud",   label: "Borj Hammoud",           lat: 33.8884, lng: 35.5380, isAirport: false },
  { id: "dekwaneh",      label: "Dekwaneh",               lat: 33.8660, lng: 35.5480, isAirport: false },
  { id: "sinelfil",      label: "Sin el Fil",             lat: 33.8900, lng: 35.5429, isAirport: false },
  { id: "antelias",      label: "Antelias / Dbayeh",      lat: 33.9000, lng: 35.5800, isAirport: false },

  // ── Beirut ───────────────────────────────────────────────────────────────
  { id: "beirut",        label: "Beirut",                 lat: 33.8886, lng: 35.4955, isAirport: false },
  { id: "airport",       label: "Beirut Airport",         lat: 33.8209, lng: 35.4884, isAirport: true  },

  // ── Baabda caza ──────────────────────────────────────────────────────────
  { id: "baabda",        label: "Baabda",                 lat: 33.8339, lng: 35.5467, isAirport: false },
  { id: "hazmieh",       label: "Hazmieh",                lat: 33.8467, lng: 35.5399, isAirport: false },
  { id: "yarze",         label: "Yarze",                  lat: 33.8300, lng: 35.5600, isAirport: false },
  { id: "hadath",        label: "Hadath",                 lat: 33.8400, lng: 35.5100, isAirport: false },
  { id: "choueifat",     label: "Choueifat",              lat: 33.8055, lng: 35.4831, isAirport: false },
  { id: "kfarshima",     label: "Kfarshima",              lat: 33.7900, lng: 35.5200, isAirport: false },
  { id: "aramoun",       label: "Aramoun",                lat: 33.7800, lng: 35.5300, isAirport: false },
  { id: "bchamoun",      label: "Bchamoun",               lat: 33.7800, lng: 35.5600, isAirport: false },
  { id: "khalde",        label: "Khalde",                 lat: 33.7706, lng: 35.4750, isAirport: false },

  // ── Aley caza ────────────────────────────────────────────────────────────
  { id: "aley",          label: "Aley",                   lat: 33.8100, lng: 35.5900, isAirport: false },
  { id: "souqgharb",     label: "Souq el Gharb",          lat: 33.8200, lng: 35.5900, isAirport: false },
  { id: "bhamdoun",      label: "Bhamdoun",               lat: 33.7900, lng: 35.6472, isAirport: false },
  { id: "sofar",         label: "Sofar",                  lat: 33.7814, lng: 35.6919, isAirport: false },
  { id: "kfarmatta",     label: "Kfar Matta",             lat: 33.7500, lng: 35.5600, isAirport: false },

  // ── Chouf caza ───────────────────────────────────────────────────────────
  { id: "chouf",         label: "Chouf / Deir el Qamar",  lat: 33.6900, lng: 35.5800, isAirport: false },
  { id: "beiteddine",    label: "Beiteddine",             lat: 33.6900, lng: 35.5800, isAirport: false },
  { id: "barouk",        label: "Barouk",                 lat: 33.6600, lng: 35.6500, isAirport: false },
  { id: "damour",        label: "Damour",                 lat: 33.7300, lng: 35.4400, isAirport: false },
  { id: "jezzine",       label: "Jezzine",                lat: 33.5400, lng: 35.5800, isAirport: false },

  // ── South Lebanon — Sidon caza ───────────────────────────────────────────
  { id: "sidon",         label: "Sidon (Saida)",          lat: 33.5633, lng: 35.3706, isAirport: false },
  { id: "sarafand",      label: "Sarafand",               lat: 33.4600, lng: 35.2900, isAirport: false },
  { id: "ghazieh",       label: "Ghazieh",                lat: 33.5200, lng: 35.3500, isAirport: false },
  { id: "maghdouche",    label: "Maghdouche",             lat: 33.5200, lng: 35.3900, isAirport: false },
  { id: "adloun",        label: "Adloun",                 lat: 33.3800, lng: 35.2600, isAirport: false },

  // ── South Lebanon — Tyre caza ────────────────────────────────────────────
  { id: "tyre",          label: "Tyre (Sour)",            lat: 33.2705, lng: 35.2037, isAirport: false },
  { id: "naqoura",       label: "Naqoura",                lat: 33.1100, lng: 35.1500, isAirport: false },
  { id: "tibnin",        label: "Tibnin",                 lat: 33.2200, lng: 35.4000, isAirport: false },
  { id: "aitashaab",     label: "Aita el Shaab",          lat: 33.1800, lng: 35.3700, isAirport: false },
  { id: "bintjbeil",     label: "Bint Jbeil",             lat: 33.1200, lng: 35.4300, isAirport: false },

  // ── South Lebanon — Nabatieh caza ────────────────────────────────────────
  { id: "nabatieh",      label: "Nabatieh",               lat: 33.3778, lng: 35.4839, isAirport: false },
  { id: "kfarroummane",  label: "Kfar Roummane",          lat: 33.3600, lng: 35.4600, isAirport: false },
  { id: "arnoun",        label: "Arnoun",                 lat: 33.3800, lng: 35.4400, isAirport: false },

  // ── South Lebanon — Marjeyoun caza ───────────────────────────────────────
  { id: "marjeyoun",     label: "Marjeyoun",              lat: 33.3600, lng: 35.5900, isAirport: false },
  { id: "iblsaqi",       label: "Ibl el Saqi",            lat: 33.2800, lng: 35.5900, isAirport: false },
  { id: "deirmimas",     label: "Deir Mimas",             lat: 33.3200, lng: 35.5600, isAirport: false },
  { id: "khiam",         label: "Khiam",                  lat: 33.3700, lng: 35.6100, isAirport: false },
  { id: "qlayyaa",       label: "Qlayyaa",                lat: 33.3400, lng: 35.5200, isAirport: false },
  { id: "hasbaya",       label: "Hasbaya",                lat: 33.4000, lng: 35.6900, isAirport: false },

  // ── Bekaa — Zahle caza ───────────────────────────────────────────────────
  { id: "zahle",         label: "Zahle",                  lat: 33.8461, lng: 35.9016, isAirport: false },
  { id: "chtaura",       label: "Chtaura",                lat: 33.8139, lng: 35.8592, isAirport: false },
  { id: "aanjar",        label: "Aanjar",                 lat: 33.7300, lng: 35.9300, isAirport: false },
  { id: "taalabaya",     label: "Taalabaya",              lat: 33.8400, lng: 35.8900, isAirport: false },
  { id: "ablah",         label: "Ablah",                  lat: 33.8600, lng: 35.8900, isAirport: false },
  { id: "ferzol",        label: "Ferzol",                 lat: 33.8200, lng: 35.8700, isAirport: false },
  { id: "saadnayel",     label: "Saadnayel",              lat: 33.8300, lng: 35.9200, isAirport: false },
  { id: "taanayel",      label: "Taanayel",               lat: 33.8100, lng: 35.9600, isAirport: false },
  { id: "barelias",      label: "Bar Elias",              lat: 33.7700, lng: 35.9300, isAirport: false },
  { id: "qabelias",      label: "Qab Elias",              lat: 33.7900, lng: 35.9400, isAirport: false },
  { id: "kherbetqanafar",label: "Kherbet Qanafar",        lat: 33.7600, lng: 35.8900, isAirport: false },

  // ── Bekaa — West Bekaa / Rashaya ─────────────────────────────────────────
  { id: "rachaya",       label: "Rachaya",                lat: 33.5000, lng: 35.8600, isAirport: false },
  { id: "yanta",         label: "Yanta",                  lat: 33.5800, lng: 35.8200, isAirport: false },
  { id: "joubjannine",   label: "Joub Jannine",           lat: 33.6700, lng: 35.9100, isAirport: false },
  { id: "saghbine",      label: "Saghbine",               lat: 33.6100, lng: 35.8500, isAirport: false },
  { id: "lala",          label: "Lala",                   lat: 33.7100, lng: 35.8500, isAirport: false },
  { id: "jdita",         label: "Jdita",                  lat: 33.6600, lng: 35.8500, isAirport: false },

  // ── Bekaa — Baalbek caza ─────────────────────────────────────────────────
  { id: "baalbek",       label: "Baalbek",                lat: 34.0042, lng: 36.2117, isAirport: false },
  { id: "yammouneh",     label: "Yammouneh",              lat: 34.0700, lng: 36.0400, isAirport: false },
  { id: "nabisheet",     label: "Nabi Sheet",             lat: 34.1100, lng: 36.2000, isAirport: false },
  { id: "deirahmar",     label: "Deir el Ahmar",          lat: 34.1500, lng: 36.1700, isAirport: false },
  { id: "younine",       label: "Younine",                lat: 34.0800, lng: 36.1600, isAirport: false },

  // ── Bekaa — Hermel caza ──────────────────────────────────────────────────
  { id: "hermel",        label: "Hermel",                 lat: 34.3900, lng: 36.3800, isAirport: false },
  { id: "qaa",           label: "Qaa",                    lat: 34.5400, lng: 36.4700, isAirport: false },
];

// ---------------------------------------------------------------------------
// Road distance table (km) — curated manually for accuracy.
// Keys are two location IDs joined by "|", sorted alphabetically.
// Haversine is used as fallback for pairs not listed here.
// ---------------------------------------------------------------------------

const ROAD_DISTANCES_KM: Record<string, number> = {
  // North Lebanon internal
  "mina|tripoli":          5,
  "tripoli|zgharta":      12,
  "mina|zgharta":         13,
  "chekka|tripoli":       20,
  "chekka|mina":          21,
  "chekka|zgharta":       25,
  "batroun|chekka":       10,
  "koura|tripoli":        18,
  "koura|mina":           19,
  "chekka|koura":         12,
  "batroun|koura":        20,
  "koura|zgharta":        22,

  // North → Batroun
  "batroun|mina":         29,
  "batroun|tripoli":      30,
  "batroun|zgharta":      35,

  // Mid-Lebanon
  "batroun|byblos":       22,
  "byblos|chekka":        32,
  "byblos|tripoli":       50,
  "byblos|mina":          51,
  "byblos|zgharta":       55,
  "batroun|jounieh":      42,
  "byblos|jounieh":       22,
  "jounieh|tripoli":      68,
  "jounieh|mina":         69,
  "jounieh|zgharta":      72,

  // → Beirut
  "beirut|jounieh":       20,
  "beirut|byblos":        42,
  "beirut|batroun":       62,
  "beirut|chekka":        70,
  "beirut|tripoli":       88,
  "beirut|mina":          88,
  "beirut|zgharta":       93,

  // → Airport
  "airport|beirut":       12,
  "airport|jounieh":      30,
  "airport|byblos":       54,
  "airport|batroun":      74,
  "airport|chekka":       82,
  "airport|tripoli":     105,
  "airport|mina":        105,
  "airport|zgharta":     110,

  // Airport / Beirut → Greater Beirut suburbs
  "airport|khalde":        8,
  "airport|choueifat":    10,
  "airport|aramoun":      12,
  "airport|kfarshima":    13,
  "airport|hadath":       14,
  "airport|baabda":       16,
  "airport|hazmieh":      15,
  "airport|yarze":        17,
  "airport|antelias":     22,
  "airport|sinelfil":     20,
  "airport|dekwaneh":     19,
  "airport|jdeideh":      21,
  "airport|borjhammoud":  18,
  "airport|zalka":        23,
  "airport|naccache":     24,
  "airport|damour":       18,
  "beirut|khalde":        10,
  "beirut|choueifat":     12,
  "beirut|aramoun":       14,
  "beirut|hadath":         8,
  "beirut|baabda":        10,
  "beirut|hazmieh":        8,
  "beirut|antelias":      12,
  "beirut|sinelfil":       8,
  "beirut|dekwaneh":      10,
  "beirut|jdeideh":       11,
  "beirut|borjhammoud":    7,
  "beirut|zalka":         12,
  "beirut|naccache":      13,

  // Mountain routes
  "ehden|zgharta":        35,
  "ehden|tripoli":        47,
  "ehden|mina":           48,
  "batroun|faraya":       55,
  "byblos|faraya":        45,
  "faraya|jounieh":       38,
  "beirut|faraya":        58,
  "faraya|tripoli":       60,
  "faraya|mina":          61,
  "airport|faraya":       65,
  "airport|ehden":       120,
  "beirut|ehden":        100,

  // Akkar
  "akkar|tripoli":        42,
  "akkar|mina":           44,
  "akkar|zgharta":        38,
  "akkar|dinniyeh":       30,
  "akkar|chekka":         58,
  "akkar|batroun":        68,
  "akkar|beirut":        130,
  "akkar|airport":       140,
  "akkar|ehden":          55,

  // Dinniyeh
  "dinniyeh|tripoli":     25,
  "dinniyeh|mina":        27,
  "dinniyeh|zgharta":     20,
  "dinniyeh|chekka":      40,
  "dinniyeh|batroun":     50,
  "dinniyeh|beirut":     115,
  "dinniyeh|airport":    125,
  "dinniyeh|ehden":       30,

  // South Lebanon
  "beirut|sidon":         40,
  "airport|sidon":        45,
  "jounieh|sidon":        58,
  "byblos|sidon":         78,
  "batroun|sidon":       100,
  "tripoli|sidon":       128,
  "mina|sidon":          128,

  "beirut|tyre":          85,
  "airport|tyre":         90,
  "sidon|tyre":           45,
  "jounieh|tyre":        103,
  "tripoli|tyre":        170,

  "beirut|nabatieh":      65,
  "airport|nabatieh":     70,
  "sidon|nabatieh":       28,
  "tyre|nabatieh":        35,

  // Bekaa Valley
  "beirut|zahle":         52,
  "airport|zahle":        60,
  "jounieh|zahle":        65,
  "byblos|zahle":         75,
  "batroun|zahle":        90,
  "tripoli|zahle":        95,
  "mina|zahle":           95,
  "sidon|zahle":          80,

  "beirut|chtaura":       48,
  "airport|chtaura":      55,
  "zahle|chtaura":        10,

  "beirut|baalbek":       86,
  "airport|baalbek":      90,
  "zahle|baalbek":        35,
  "chtaura|baalbek":      42,
  "tripoli|baalbek":      70,
  "mina|baalbek":         72,
  "akkar|baalbek":        85,
  "dinniyeh|baalbek":     55,

  // Mount Lebanon — Metn / Keserwan
  "antelias|beirut":      12,
  "antelias|jounieh":     10,
  "antelias|byblos":      32,
  "antelias|batroun":     52,
  "antelias|tripoli":     78,

  "broummana|beirut":     18,
  "airport|broummana":    28,
  "broummana|jounieh":    15,
  "broummana|zahle":      40,

  "bikfaya|beirut":       28,
  "airport|bikfaya":      38,
  "bikfaya|jounieh":      18,
  "bikfaya|byblos":       28,
  "bikfaya|zahle":        35,

  "ghazir|beirut":        22,
  "airport|ghazir":       30,
  "ghazir|jounieh":        5,
  "byblos|ghazir":        20,

  // Aley / Chouf / Damour
  "aley|beirut":          20,
  "airport|aley":         25,
  "aley|sidon":           40,
  "beirut|damour":        22,
  "damour|sidon":         22,

  "airport|chouf":        48,
  "beirut|chouf":         50,
  "chouf|sidon":          30,
  "aley|chouf":           30,

  "airport|jezzine":      65,
  "beirut|jezzine":       70,
  "jezzine|sidon":        30,
  "chouf|jezzine":        25,
  "jezzine|nabatieh":     28,

  // South Lebanon — additional
  "airport|marjeyoun":   115,
  "beirut|marjeyoun":    120,
  "marjeyoun|nabatieh":   30,
  "marjeyoun|tyre":       50,
  "hasbaya|marjeyoun":    25,
  "airport|hasbaya":     105,
  "beirut|hasbaya":      110,
  "hasbaya|sidon":        65,

  "airport|bintjbeil":   120,
  "beirut|bintjbeil":    125,
  "bintjbeil|tyre":       25,
  "bintjbeil|nabatieh":   35,

  // Bekaa — new
  "airport|aanjar":       62,
  "beirut|aanjar":        55,
  "aanjar|chtaura":       14,
  "aanjar|zahle":         20,

  "airport|rachaya":      90,
  "beirut|rachaya":       95,
  "rachaya|sidon":        80,
  "rachaya|zahle":        50,
  "rachaya|hasbaya":      40,

  "airport|yammouneh":    85,
  "beirut|yammouneh":     88,
  "yammouneh|baalbek":    25,
  "yammouneh|zahle":      30,

  "airport|hermel":      155,
  "beirut|hermel":       160,
  "baalbek|hermel":       68,
  "tripoli|hermel":      100,
};

// ---------------------------------------------------------------------------
// Trip type classification
// ---------------------------------------------------------------------------

const LOCAL_GROUPS: string[][] = [
  ["tripoli", "mina", "zgharta", "beddawi"],
  ["batroun", "chekka"],
  ["beirut", "baabda", "hazmieh", "yarze", "hadath", "antelias", "sinelfil",
   "dekwaneh", "jdeideh", "borjhammoud", "zalka", "naccache", "choueifat",
   "khalde", "aramoun", "kfarshima", "bchamoun", "airport"],
];

function classifyTrip(from: PricingLocation, to: PricingLocation): TripType {
  if (from.isAirport || to.isAirport) return "airport";
  for (const group of LOCAL_GROUPS) {
    if (group.includes(from.id) && group.includes(to.id)) return "local";
  }
  return "intercity";
}

// ---------------------------------------------------------------------------
// Pricing config per trip type
// ---------------------------------------------------------------------------

const PRICING_CONFIG = {
  local: {
    base: 5,
    ratePerKm: 0.80,
    minFare: 7,
    rangePct: 0.20,
    minMargin: 3,
  },
  intercity: {
    base: 5,
    ratePerKm: 0.70,
    minFare: 20,
    rangePct: 0.15,
    minMargin: 5,
  },
  airport: {
    base: 15,
    ratePerKm: 0.60,
    minFare: 35,
    rangePct: 0.13,
    minMargin: 8,
  },
} as const;

// ---------------------------------------------------------------------------
// Distance helpers
// ---------------------------------------------------------------------------

const MOUNTAIN_LOCATIONS = new Set([
  "faraya", "faqra", "kfardebiane", "laqlouq",
  "ehden", "bcharre", "hasroun", "bqaakafra",
  "tannourine", "hardine",
  "broummana", "bikfaya", "baabdat", "ajaltoun",
  "jezzine", "barouk", "kfarmatta",
  "bhamdoun", "sofar",
  "rachaya", "yanta", "yammouneh",
]);

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getRoadDistanceKm(from: PricingLocation, to: PricingLocation): number {
  const key = [from.id, to.id].sort().join("|");
  if (ROAD_DISTANCES_KM[key] !== undefined) return ROAD_DISTANCES_KM[key];

  // Fallback: Haversine + road factor.
  // Mountain routes need a higher factor due to winding altitude roads.
  const isMountain = MOUNTAIN_LOCATIONS.has(from.id) || MOUNTAIN_LOCATIONS.has(to.id);
  const roadFactor = isMountain ? 1.45 : 1.28;
  return haversineKm(from.lat, from.lng, to.lat, to.lng) * roadFactor;
}

// ---------------------------------------------------------------------------
// Pricing calculation
// ---------------------------------------------------------------------------

function roundTo2(n: number): number {
  return Math.round(n / 2) * 2;
}

function calculatePriceRange(
  tripType: TripType,
  distanceKm: number
): { minPrice: number; maxPrice: number } {
  const cfg = PRICING_CONFIG[tripType];
  const center = Math.max(cfg.minFare, cfg.base + distanceKm * cfg.ratePerKm);
  const margin = Math.max(cfg.minMargin, center * cfg.rangePct);
  return {
    minPrice: roundTo2(Math.max(cfg.minFare - cfg.minMargin, center - margin)),
    maxPrice: roundTo2(center + margin),
  };
}

// ---------------------------------------------------------------------------
// Public service
// ---------------------------------------------------------------------------

export const PriceEstimationService = {
  getLocations(): PricingLocation[] {
    return PRICING_LOCATIONS;
  },

  getLocationById(id: string): PricingLocation | undefined {
    return PRICING_LOCATIONS.find((l) => l.id === id);
  },

  estimate(from: PricingLocation, to: PricingLocation): PriceEstimate {
    const tripType = classifyTrip(from, to);
    const distanceKm = Math.round(getRoadDistanceKm(from, to));
    const { minPrice, maxPrice } = calculatePriceRange(tripType, distanceKm);
    return { from, to, tripType, minPrice, maxPrice, distanceKm };
  },
};
