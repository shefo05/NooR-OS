"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,13,26,0)", "rgba(5,13,26,0.92)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Noor OS Logo"
            width={32}
            height={32}
            className="rounded-full object-contain"
          />
          <span className="font-semibold text-white tracking-wider text-sm">
            NOOR
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#6b8fb5]">
          {[
            { label: "Features", href: "#features" },
            { label: "Reader", href: "#reader" },
            { label: "Privacy", href: "#privacy" },
            { label: "Arabic", href: "#arabic" },
            { label: "Roadmap", href: "#roadmap" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <Link href="/support" className="hover:text-white transition-colors duration-200">
            Support
          </Link>
        </nav>

        <a
          href="#download"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#050d1a] bg-[#00c8ff] hover:bg-white transition-colors duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </motion.header>
  );
}
