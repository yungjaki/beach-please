"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/tickets", label: "Tickets" },
  { href: "/lineup", label: "Lineup" },
  { href: "/schedule", label: "Schedule" },
  { href: "/map", label: "Map" },
  { href: "/info", label: "Info" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-lg flex flex-col justify-center px-8"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-8"
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <motion.div key={link.href} variants={item}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block text-5xl font-black tracking-tight transition
                      ${
                        active
                          ? "text-green-400"
                          : "text-white hover:text-green-400"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
