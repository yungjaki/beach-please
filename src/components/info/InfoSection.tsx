"use client";

import { ReactNode } from "react";

export default function InfoSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="text-5xl font-black mb-10">
        {title}
      </h2>
      <div className="space-y-8 max-w-3xl">
        {children}
      </div>
    </section>
  );
}
