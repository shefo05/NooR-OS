"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <section id="download" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,80,180,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(0,200,255,0.06),transparent)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <motion.div
            className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-8 glow-cyan"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.png"
              alt="Noor OS"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 glow-text">
            From commands to intent.
          </h2>
          <p className="text-[#00c8ff] text-xl font-semibold mb-6">
            Experience the future of computing.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#6b8fb5] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            The future of computing is intent-driven. Smart, private, fast —
            and fully fluent in Arabic. Be among the first to experience it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,200,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 rounded-full bg-[#00c8ff] text-[#050d1a] font-bold text-base"
            >
              Join Waitlist
            </motion.a>
            <motion.a
              href="#mobile"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 rounded-full border border-[rgba(0,200,255,0.3)] text-[#00c8ff] font-medium text-base hover:bg-[rgba(0,200,255,0.07)] transition-colors"
            >
              Mobile Companion
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-[#6b8fb5] text-xs mt-8 opacity-60">
            Platform-independent · Local AI · Privacy-first · Arabic native
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
