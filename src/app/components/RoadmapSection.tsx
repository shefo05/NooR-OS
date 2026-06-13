"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const phases = [
  {
    phase: "Phase 1",
    name: "AI Desktop Assistant",
    status: "completed",
    items: ["AIBar integration", "System command execution", "File management", "App control"],
  },
  {
    phase: "Phase 2",
    name: "AI Workspace Suite",
    status: "completed",
    items: ["Noor Reader (PDF AI)", "Noor Vision (image AI)", "Noor Media (audio/video AI)", "Arabic language support"],
  },
  {
    phase: "Phase 3",
    name: "Voice Assistant",
    status: "active",
    items: ["Wake-word detection", "Continuous voice commands", "Multi-language speech", "Whisper integration"],
  },
  {
    phase: "Phase 4",
    name: "Custom Linux Distribution",
    status: "planned",
    items: ["Noor OS Linux base", "Optimized AI kernel", "Pre-installed AI stack", "First-run AI setup"],
  },
  {
    phase: "Phase 5",
    name: "Accessibility Layer",
    status: "planned",
    items: ["Screen reader AI", "Motion-limited support", "Voice-only mode", "Adaptive interfaces"],
  },
  {
    phase: "Phase 6",
    name: "Full AI Operating System",
    status: "vision",
    items: ["Intent as the primary interface", "Self-healing system", "Predictive computing", "Universal AI OS"],
  },
];

const statusConfig = {
  completed: { label: "Completed", color: "#22c55e", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
  active: { label: "In Progress", color: "#00c8ff", bg: "rgba(0,200,255,0.08)", border: "rgba(0,200,255,0.3)" },
  planned: { label: "Planned", color: "#6b8fb5", bg: "rgba(107,143,181,0.06)", border: "rgba(107,143,181,0.15)" },
  vision: { label: "Vision", color: "#a78bfa", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.2)" },
};

export default function RoadmapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="roadmap" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(0,50,120,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="tag mb-5 inline-flex">Roadmap</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The road to
              <br />
              <span className="text-[#00c8ff]">intent-driven computing.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-lg mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Six phases. Two completed. Each one bringing us closer
              to a world where humans express intent and machines execute.
            </p>
          </FadeIn>
        </div>

        {/* Phase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map(({ phase, name, status, items }, i) => {
            const cfg = statusConfig[status as keyof typeof statusConfig];
            return (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: cfg.border }}
                className="p-6 rounded-2xl border bg-[rgba(10,22,40,0.5)] backdrop-blur-sm relative overflow-hidden transition-colors duration-300"
                style={{ borderColor: cfg.border + "80" }}
              >
                {status === "active" && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cfg.color}10, transparent)` }}
                  />
                )}

                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#6b8fb5] text-xs font-mono">{phase}</span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
                  >
                    {cfg.label}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-4">{name}</h3>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#6b8fb5] text-sm">
                      <span style={{ color: cfg.color }} className="text-xs flex-shrink-0">
                        {status === "completed" ? "✓" : status === "active" ? "◉" : "○"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
