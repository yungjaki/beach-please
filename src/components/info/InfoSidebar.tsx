"use client";

import Link from "next/link";

const links = [
  { id: "getting-there", label: "Getting there" },
  { id: "accommodation", label: "Accommodation" },
  { id: "check-in", label: "Check-in & access" },
  { id: "wristband", label: "Wristband & payments" },
  { id: "rules", label: "Festival rules" },
  { id: "during", label: "During the festival" },
  { id: "after", label: "After the festival" },
];

export default function InfoSidebar() {
  return (
    <aside className="hidden md:block w-72 border-r border-white/10 px-8 py-24 sticky top-0 h-screen">
      <nav className="space-y-6">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className="block text-white/60 hover:text-brand-green transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
