"use client";

import { ReactNode } from "react";

export default function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-white/70 space-y-3 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
