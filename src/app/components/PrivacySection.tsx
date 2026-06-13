"use client";

import { motion } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

const shields = [
  { title: "Canvas & WebGL Noise", desc: "Randomized fingerprint data on every render" },
  { title: "Font Enumeration Block", desc: "Prevent websites from detecting your installed fonts" },
  { title: "Media/Device Masking", desc: "Hide audio and video device identifiers" },
  { title: "Navigator Normalization", desc: "Standardize browser environment data" },
  { title: "WebRTC Leak Block", desc: "Prevent IP leakage through WebRTC connections" },
  { title: "Block JavaScript", desc: "Disable JS per-site with one click" },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,40,100,0.15),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="tag mb-5 inline-flex">Privacy Shield</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Your data stays
              <br />
              <span className="text-[#00c8ff]">yours. Always.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-lg mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Noor&apos;s built-in Privacy Shield protects you from tracking,
              fingerprinting, and data leakage at the OS level.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Privacy shield screenshot */}
          <div>
            <FadeIn delay={0.1} direction="left">
              <div className="screen-frame mb-6">
                <LightboxImage
                  src="/screenshots/privacy/ss26-privacy-shield.png"
                  alt="Noor Privacy Shield"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.25} direction="left">
              <div className="screen-frame">
                <LightboxImage
                  src="/screenshots/privacy/ss11-ai-providers.png"
                  alt="Noor AI Providers privacy settings"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>

          {/* Shield features */}
          <div>
            <div className="grid grid-cols-1 gap-3">
              {shields.map(({ title, desc }, i) => (
                <FadeIn key={title} delay={0.1 + i * 0.07}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(0,200,255,0.02)] hover:border-[rgba(0,200,255,0.22)] transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00c8ff] flex-shrink-0 shadow-[0_0_6px_rgba(0,200,255,0.6)]" />
                    <div>
                      <p className="text-white font-medium text-sm">{title}</p>
                      <p className="text-[#6b8fb5] text-xs mt-0.5">{desc}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <div className="w-8 h-4 rounded-full bg-[rgba(0,200,255,0.3)] border border-[rgba(0,200,255,0.4)] flex items-center justify-end pr-0.5">
                        <div className="w-3 h-3 rounded-full bg-[#00c8ff]" />
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.6}>
              <div className="mt-6 p-5 rounded-2xl border border-[rgba(0,200,255,0.15)] bg-[rgba(0,200,255,0.04)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#00c8ff] shadow-[0_0_8px_rgba(0,200,255,0.7)]" />
                  <p className="text-[#00c8ff] font-semibold text-sm">Strong Privacy Active</p>
                </div>
                <p className="text-[#6b8fb5] text-xs leading-relaxed">
                  Your browsing session is protected against fingerprinting
                  and tracking. All AI processing runs on-device by default.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Chat screenshot */}
        <FadeIn delay={0.2} className="mt-12">
          <div className="screen-frame">
            <LightboxImage
              src="/screenshots/privacy/ss31-noor-chat.png"
              alt="Noor private chat"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
