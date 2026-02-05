export type TicketTier =
  | "general"
  | "general_early"
  | "general_plus"
  | "golden_circle"
  | "vip"
  | "ultra_vip";

export type Ticket = {
  id: TicketTier;
  name: string;
  subtitle: string;
  priceEUR: number;
  availability: "available" | "limited" | "sold_out";
  perks: string[];
};

export const tickets: Ticket[] = [
  {
    id: "general",
    name: "General Access",
    subtitle: "5 Days Pass",
    priceEUR: 165,
    availability: "available",
    perks: [
      "Access to festival grounds",
      "All stages",
      "5 days experience",
    ],
  },
  {
    id: "general_early",
    name: "General Access",
    subtitle: "Early Entry • Before 5 PM",
    priceEUR: 150,
    availability: "available",
    perks: [
      "Entry before 17:00",
      "All General Access benefits",
    ],
  },
  {
    id: "general_plus",
    name: "General Access Plus",
    subtitle: "5 Days Pass",
    priceEUR: 197,
    availability: "available",
    perks: [
      "Fast entry lanes",
      "Extra comfort areas",
      "All General Access benefits",
    ],
  },
  {
    id: "golden_circle",
    name: "Golden Circle",
    subtitle: "5 Days Pass",
    priceEUR: 190,
    availability: "sold_out",
    perks: [
      "Front-of-stage access",
      "Limited capacity",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    subtitle: "5 Days Pass",
    priceEUR: 295,
    availability: "available",
    perks: [
      "VIP lounges",
      "Premium bars",
      "Fast entry",
    ],
  },
  {
    id: "ultra_vip",
    name: "Ultra VIP + Golden Circle",
    subtitle: "5 Days Pass",
    priceEUR: 393,
    availability: "available",
    perks: [
      "All-access experience",
      "Golden Circle",
      "Top-tier services",
    ],
  },
];
