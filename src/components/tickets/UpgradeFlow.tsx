"use client";

import { useState } from "react";
import { upgrades } from "@/data/upgrades";

const labels: Record<string, string> = {
  general: "General Access",
  general_early: "General Access (Early Entry)",
  general_plus: "General Access Plus",
  vip: "VIP",
  ultra_vip: "Ultra VIP + Golden Circle",
};

export default function UpgradeFlow() {
  const [from, setFrom] = useState<string>("general");

  const availableUpgrades = upgrades.filter(
    (u) => u.from === from && u.availability === "available"
  );

  return (
    <section className="mt-32 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-8 text-center">
        Upgrade your ticket
      </h2>

      {/* SELECT */}
      <div className="flex justify-center mb-12">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-black border border-white/20 rounded-lg px-4 py-3 text-white"
        >
          {Object.entries(labels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* UPGRADES */}
      <div className="grid gap-6 sm:grid-cols-2">
        {availableUpgrades.length === 0 && (
          <p className="text-white/50 text-center col-span-full">
            No upgrades available for this ticket.
          </p>
        )}

        {availableUpgrades.map((upgrade, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-6 bg-black/60 flex justify-between items-center"
          >
            <div>
              <p className="text-white/60 text-sm">Upgrade to</p>
              <h3 className="text-xl font-bold">
                {labels[upgrade.to]}
              </h3>
            </div>

            <div className="text-right">
              <p className="text-brand-green text-2xl font-black">
                +{upgrade.priceEUR}€
              </p>
              <button className="mt-2 bg-brand-green text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition">
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
