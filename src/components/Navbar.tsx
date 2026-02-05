"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimation } from "@/context/AnimationContext";
import MobileMenu from "./MobileMenu";



const links = [
  { href: "/tickets", label: "Tickets" },
  { href: "/lineup", label: "Lineup" },
  { href: "/schedule", label: "Schedule" },
  { href: "/map", label: "Map" },
  { href: "/info", label: "Info" },
];

export default function Navbar() {
  const { introDone } = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  


const [logoSpin, setLogoSpin] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-[100] px-8 py-6 backdrop-blur-md bg-black/40"
        initial="hidden"
        animate={introDone ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
{/* LOGO + TITLE (CLICKABLE HOME) */}
<Link
  href="/"
  aria-label="Go to homepage"
  className="flex items-center gap-3"
  onClick={() => {
    setLogoSpin(true);
    setTimeout(() => setLogoSpin(false), 300);
  }}
>
  <motion.div
    layoutId="logo"
    className="w-10 h-10 flex items-center justify-center"
    animate={{ rotate: logoSpin ? 360 : 0 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
    }}
    style={{ transformOrigin: "50% 50%" }}
  >
    <img
      src="/logo.svg"
      alt="Beach Please"
      className="w-full h-full object-contain"
      draggable={false}
    />
  </motion.div>

  <span className="font-black tracking-widest hidden sm:block">
    BEACH PLEASE
  </span>
</Link>



          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider hover:text-brand-green transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/tickets"
            className="hidden md:inline-block bg-brand-green text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            Buy Tickets
          </Link>

          {/* MOBILE HAMBURGER */}
<button
  onClick={() => setMenuOpen(true)}
  className="md:hidden relative w-8 h-8"
  aria-label="Open menu"
>
  <motion.span
    className="absolute left-0 top-1/2 w-full h-[2px] bg-white"
    animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 0 : -6 }}
  />
  <motion.span
    className="absolute left-0 top-1/2 w-full h-[2px] bg-white"
    animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? 0 : 6 }}
  />
</button>

        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
