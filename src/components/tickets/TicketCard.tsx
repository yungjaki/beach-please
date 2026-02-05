"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Ticket } from "@/data/tickets";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const isSoldOut = ticket.availability === "sold_out";

  return (
    <motion.div
      whileHover={!isSoldOut ? { y: -6 } : undefined}
      className={clsx(
        "relative rounded-2xl border border-white/10 p-6 flex flex-col justify-between",
        "bg-black/60 backdrop-blur",
        isSoldOut && "opacity-40 grayscale"
      )}
    >
      {/* HEADER */}
      <div>
        <h3 className="text-2xl font-black">{ticket.name}</h3>
        <p className="text-white/60 mt-1">{ticket.subtitle}</p>
      </div>

      {/* PRICE */}
      <div className="my-6">
        <span className="text-4xl font-black text-brand-green">
          {ticket.priceEUR}€
        </span>
      </div>

      {/* PERKS */}
      <ul className="space-y-2 text-sm text-white/70 mb-6">
        {ticket.perks.map((perk, i) => (
          <li key={i}>• {perk}</li>
        ))}
      </ul>

      {/* CTA */}
      <button
        disabled={isSoldOut}
        className={clsx(
          "mt-auto rounded-full py-3 font-bold transition",
          isSoldOut
            ? "bg-white/10 text-white/40 cursor-not-allowed"
            : "bg-brand-green text-black hover:scale-[1.03]"
        )}
      >
        {isSoldOut ? "Sold Out" : "Buy Ticket"}
      </button>

      {/* BADGE */}
      {ticket.availability === "limited" && (
        <span className="absolute top-4 right-4 text-xs text-brand-green">
          Limited
        </span>
      )}
    </motion.div>
  );
}
