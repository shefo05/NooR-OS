"use client";

import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ target, suffix = "%", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      animate(motionVal, target, { duration: 1.8, ease: "easeOut" });
    }
  }, [inView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(decimals) + suffix;
      }
    });
  }, [spring, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

const metrics = [
  {
    value: 86,
    suffix: "%",
    decimals: 0,
    label: "Overall Success Rate",
    desc: "Tasks completed without human intervention",
    color: "#00c8ff",
  },
  {
    value: 91.7,
    suffix: "%",
    decimals: 1,
    label: "File Operations",
    desc: "Accuracy on file management tasks",
    color: "#3b82f6",
  },
  {
    value: 90,
    suffix: "%",
    decimals: 0,
    label: "App Management",
    desc: "Application control commands executed correctly",
    color: "#00c8ff",
  },
];

export default function MetricsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,60,140,0.1),transparent)]" />

      {/* Horizontal rule lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(0,200,255,0.5) 0px, rgba(0,200,255,0.5) 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="tag mb-5 inline-flex">Performance</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Built to perform.
              <br />
              <span className="text-[#00c8ff]">Measured to prove it.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-md mx-auto text-[#6b8fb5] text-lg">
              Noor OS is evaluated against real-world task benchmarks.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map(({ value, suffix, decimals, label, desc, color }, i) => (
            <FadeIn key={label} delay={0.1 + i * 0.12}>
              <motion.div
                whileHover={{ y: -6, borderColor: `${color}40` }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.5)] backdrop-blur-sm text-center relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${color}, transparent)`,
                  }}
                />

                <motion.div
                  className="text-6xl sm:text-7xl font-bold mb-2 relative z-10 tabular-nums"
                  style={{ color }}
                >
                  <AnimatedCounter target={value} suffix={suffix} decimals={decimals} />
                </motion.div>
                <h3 className="text-white font-semibold text-lg mb-2 relative z-10">{label}</h3>
                <p className="text-[#6b8fb5] text-sm relative z-10">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
