"use client";

import { motion, useInView } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import { useRef } from "react";
import FadeIn from "./FadeIn";

export default function MobileSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const inView = useInView(galleryRef, { once: true, margin: "-80px" });

  const phones = [
    { src: "/screenshots/mobile/ss34-agent.jpg", label: "AI Agent" },
    { src: "/screenshots/mobile/ss35-trackpad.jpg", label: "Trackpad" },
    { src: "/screenshots/mobile/ss38-screen-active.jpg", label: "Screen Mirror" },
    { src: "/screenshots/mobile/ss39-settings.jpg", label: "Settings" },
  ];

  return (
    <section id="mobile" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(0,50,120,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Phone gallery  fixed sizing, no FadeIn wrappers */}
          <div ref={galleryRef}>
            <div className="flex items-end justify-center gap-3 sm:gap-4">
              {phones.map(({ src, label }, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`flex flex-col items-center gap-2 ${
                    i === 0 || i === 3 ? "mb-10" : "mb-0"
                  }`}
                  style={{ width: "calc(25% - 12px)" }}
                >
                  <div className="phone-frame w-full">
                    <LightboxImage
                      src={src}
                      alt={`Noor Mobile - ${label}`}
                      width={375}
                      height={812}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-[#6b8fb5] text-xs">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* QR pair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex justify-center"
            >
              <div className="screen-frame w-[576px]">
                <LightboxImage
                  src="/screenshots/mobile/ss33-pair-qr.png"
                  alt="Pair with QR code"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <div>
            <FadeIn>
              <span className="tag mb-5 inline-flex">Mobile Companion</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Your Noor OS
                <br />
                <span className="text-[#00c8ff]">in your pocket.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6b8fb5] text-lg leading-relaxed mb-8">
                The Noor mobile companion pairs with your Noor OS system seamlessly.
                Control your desktop, run AI commands, and mirror your screen 
                all from your phone.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {[
                { icon: "📱", title: "AI Agent on Mobile", desc: "Run full AI commands from anywhere" },
                { icon: "🖥️", title: "Remote Trackpad", desc: "Use your phone as a precision trackpad" },
                { icon: "🔗", title: "Instant Pairing", desc: "Scan a QR code and you're connected" },
                { icon: "📡", title: "Screen Mirroring", desc: "See your Noor OS display on your phone" },
              ].map(({ icon, title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 p-4 rounded-xl border border-[rgba(0,200,255,0.08)] bg-[rgba(0,200,255,0.02)] hover:border-[rgba(0,200,255,0.18)] transition-colors"
                  >
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-white font-medium text-sm mb-0.5">{title}</p>
                      <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
