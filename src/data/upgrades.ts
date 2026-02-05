export type TicketTier =
  | "general"
  | "general_early"
  | "general_plus"
  | "vip"
  | "ultra_vip";

export type Upgrade = {
  from: TicketTier;
  to: TicketTier;
  priceEUR: number;
  availability: "available" | "sold_out";
};

export const upgrades: Upgrade[] = [
  { from: "general", to: "general_plus", priceEUR: 30, availability: "available" },
  { from: "general", to: "vip", priceEUR: 130, availability: "available" },
  { from: "general", to: "ultra_vip", priceEUR: 230, availability: "available" },

  { from: "general_plus", to: "vip", priceEUR: 100, availability: "available" },
  { from: "general_plus", to: "ultra_vip", priceEUR: 200, availability: "available" },

  { from: "general_early", to: "general", priceEUR: 30, availability: "available" },
];
