"use client";

import { ReactNode } from "react";

export default function InfoNotice({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-yellow-200">
      {children}
    </div>
  );
}
