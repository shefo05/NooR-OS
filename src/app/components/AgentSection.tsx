"use client";

import { motion } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

export default function AgentSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,rgba(0,80,180,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="tag mb-5 inline-flex">Noor Agent</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Not just answers 
              <br />
              <span className="text-[#00c8ff]">real actions.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-lg mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Noor Agent doesn&apos;t just respond  it acts. Launch apps,
              run commands, search files, control your system. All from one prompt.
            </p>
          </FadeIn>
        </div>

        {/* Agent welcome big screenshot */}
        <FadeIn delay={0.15}>
          <div className="screen-frame max-w-3xl mx-auto mb-12">
            <LightboxImage
              src="/screenshots/hero/ss06-agent-welcome.png"
              alt="Noor Agent ready"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </FadeIn>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "System Commands",
              desc: "Check RAM, CPU, storage, running processes, network status  just ask.",
              icon: "⚙️",
            },
            {
              title: "App Control",
              desc: "Open, close, and control any application on your system with a sentence.",
              icon: "🖥️",
            },
            {
              title: "File Operations",
              desc: "Find, organize, rename, or move files using natural language.",
              icon: "📂",
            },
            {
              title: "Git & Dev Tools",
              desc: "Run git commands, check build status, tail logs without leaving Noor.",
              icon: "🔧",
            },
            {
              title: "Web Research",
              desc: "Noor browses, reads, and summarizes web content for you.",
              icon: "🌐",
            },
            {
              title: "Multi-step Tasks",
              desc: "Chain complex workflows  Noor handles each step autonomously.",
              icon: "⚡",
            },
          ].map(({ title, desc, icon }, i) => (
            <FadeIn key={title} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(0,200,255,0.3)" }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.6)] backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
