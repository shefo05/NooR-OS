"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Reader", href: "/#reader" },
  { label: "Privacy", href: "/#privacy" },
  { label: "Arabic", href: "/#arabic" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Support", href: "/support" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,13,26,0)", "rgba(5,13,26,0.92)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change / resize past md breakpoint
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        />
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Noor OS Logo"
              width={32}
              height={32}
              className="rounded-full object-contain"
            />
            <span className="font-semibold text-white tracking-wider text-sm">NOOR</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6b8fb5]">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#download"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#050d1a] bg-[#00c8ff] hover:bg-white transition-colors duration-200"
          >
            Join Waitlist
          </a>

          {/* Mobile: hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg text-white focus:outline-none"
          >
            <span
              className="block h-0.5 w-5 bg-current transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-0.5 w-5 bg-current transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-5 bg-current transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
            />
          </button>

        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, pointerEvents: "none" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(5,13,26,0.97)", backdropFilter: "blur(16px)" }}
          >
            {/* Spacer for header height */}
            <div className="h-16 shrink-0" />

            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6 pb-12">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full max-w-xs text-center py-4 text-lg font-medium text-[#6b8fb5] hover:text-white transition-colors duration-200 border-b border-[rgba(0,200,255,0.06)] last:border-0"
                >
                  {label}
                </Link>
              ))}

              <a
                href="/#download"
                onClick={() => setMenuOpen(false)}
                className="mt-8 px-8 py-3 rounded-full text-sm font-semibold text-[#050d1a] bg-[#00c8ff] hover:bg-white transition-colors duration-200"
              >
                Join Waitlist
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
