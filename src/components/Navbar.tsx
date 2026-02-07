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
        className="
          fixed top-0 left-0 w-full z-[100]
          bg-black/40 backdrop-blur-md
          px-4 sm:px-8
          py-4 sm:py-6
        "
        initial={{ opacity: 0, y: -40 }}
        animate={introDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO + TITLE */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-3"
            onClick={() => {
              setLogoSpin(true);
              setTimeout(() => setLogoSpin(false), 350);
            }}
          >
            <motion.div
              layoutId="logo"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
              animate={{ rotate: logoSpin ? 360 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ transformOrigin: "50% 50%" }}
            >
              <img
                src="/logo.svg"
                alt="Beach Please"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>

            <span className="hidden sm:block font-black tracking-widest text-sm">
              BEACH PLEASE
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-xs uppercase tracking-wider
                  text-white/80
                  hover:text-brand-green
                  transition
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/tickets"
            className="
              hidden md:inline-flex
              bg-brand-green text-black
              px-5 py-2
              rounded-full
              font-bold text-sm
              transition
              hover:scale-105
              active:scale-95
            "
          >
            Buy Tickets
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              md:hidden
              relative
              w-10 h-10
              flex items-center justify-center
              rounded-full
              active:scale-95
              transition
            "
            aria-label="Open menu"
          >
            <motion.span
              className="absolute w-6 h-[2px] bg-white"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 0 : -5 }}
            />
            <motion.span
              className="absolute w-6 h-[2px] bg-white"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? 0 : 5 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
