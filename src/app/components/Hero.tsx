"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Star {
  width: number;
  height: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  useEffect(() => {
    setStars(
      Array.from({ length: 60 }).map(() => ({
        width: Math.random() * 1.5 + 0.5,
        height: Math.random() * 1.5 + 0.5,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.4 + 0.1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 4,
      }))
    );
  }, []);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#050d1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,100,200,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(0,200,255,0.04),transparent)]" />

      {/* Star field — client-only to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.width,
              height: star.height,
              left: star.left,
              top: star.top,
              opacity: star.opacity,
            }}
            animate={{ opacity: [null, 0.05, null] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-12">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden relative glow-cyan flex items-center justify-center bg-[rgba(0,200,255,0.06)]">
            <Image
              src="/logo.png"
              alt="Noor OS Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain p-1"
              fetchPriority="high"
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,200,255,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="tag mb-6"
        >
          AI-Native Operating System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[0.15em] text-white glow-text mb-4"
        >
          NOOR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-xl sm:text-2xl font-semibold text-[#00c8ff] mb-4 tracking-wide"
        >
          The First AI-Native Operating System
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-xl text-lg text-[#6b8fb5] leading-relaxed mb-8"
        >
          Built for a world where humans express intent and computers handle execution.
          A platform-independent OS experience where AI becomes the primary interface to computing.
        </motion.p>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {[
            { label: "Local AI", icon: "🔒" },
            { label: "Privacy First", icon: "🛡️" },
            { label: "Arabic Native", icon: "ع" },
            { label: "Linux Powered", icon: "🐧" },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(0,200,255,0.06)] border border-[rgba(0,200,255,0.15)] text-[#6b8fb5]"
            >
              <span>{icon}</span>
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#download"
            className="px-8 py-3.5 rounded-full bg-[#00c8ff] text-[#050d1a] font-semibold text-sm hover:bg-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]"
          >
            Join Waitlist
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full border border-[rgba(0,200,255,0.25)] text-[#00c8ff] font-medium text-sm hover:bg-[rgba(0,200,255,0.07)] transition-all duration-200 flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-[rgba(0,200,255,0.15)] flex items-center justify-center text-[10px]">▶</span>
            Watch Demo
          </a>
        </motion.div>
      </motion.div>

      {/* Hero screenshot */}
      <motion.div
        style={{ scale }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        <div className="screen-frame gradient-fade-bottom">
          <Image
            src="/screenshots/hero/ss03-aibar-overlay.png"
            alt="Noor AI Bar overlay on desktop"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050d1a] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(0,200,255,0.5)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
