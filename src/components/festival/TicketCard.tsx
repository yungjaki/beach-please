"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TicketCard({ type }: { type: string }) {
  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card className="bg-neutral-900 border-green-500 p-8 text-center hover:shadow-green-500/20 shadow-xl transition">
        <h3 className="text-2xl font-bold mb-4">{type}</h3>
        <button className="bg-green-500 px-6 py-3 rounded-xl text-black font-bold">
          BUY NOW
        </button>
      </Card>
    </motion.div>
  );
}