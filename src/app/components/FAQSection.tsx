"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What is Noor OS?",
    a: "Noor OS is the first AI-native operating system — a platform-independent computing experience where AI serves as the primary interface. Instead of navigating menus and memorizing commands, users express intent in natural language and Noor OS executes.",
  },
  {
    q: "What is intent-driven computing?",
    a: "Intent-driven computing is the next paradigm after command-driven computing. Rather than learning commands, menus, and procedures, users simply express what they want. The OS understands and executes autonomously. Noor OS is the first operating system built around this model.",
  },
  {
    q: "Does Noor OS work offline?",
    a: "Yes — entirely. All AI models (Qwen, Whisper, OCR, Vision) run locally via Ollama. No data is sent to external servers. Every interaction — language, documents, images, audio — is processed on-device.",
  },
  {
    q: "What platforms does Noor OS support?",
    a: "Noor OS is platform-independent, built on Linux. It targets desktops, workstations, educational devices, enterprise systems, and edge computing environments. A mobile companion app extends the experience to your phone.",
  },
  {
    q: "How does Noor OS protect my privacy?",
    a: "Privacy is architectural, not a feature. All AI runs locally. No user data, documents, images, or conversations ever leave the device. A human-in-the-loop security layer additionally requires explicit approval before sensitive system operations.",
  },
  {
    q: "Does Noor OS support Arabic?",
    a: "Arabic is a first-class language in Noor OS — not an afterthought. The system supports Arabic AI conversations, Arabic OCR, RTL interfaces, Arabic document analysis, and full Arabic commands via the AI Bar.",
  },
  {
    q: "What AI models power Noor OS?",
    a: "Noor OS uses Qwen 2.5 as the primary language model via Ollama, Whisper for speech-to-text transcription, and custom-trained OCR and computer vision models for document and image intelligence.",
  },
  {
    q: "Is Noor OS the same as a Linux desktop with an AI assistant?",
    a: "No. Noor OS is a new computing paradigm. A Linux desktop with an AI assistant bolt-on still forces humans to navigate the traditional OS. Noor OS makes AI the primary interface — the entire system is designed around intent-driven interaction from the ground up.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,40,100,0.08),transparent)]" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="tag mb-5 inline-flex">FAQ</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Common questions
              <br />
              <span className="text-[#00c8ff]">answered.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeIn key={q} delay={0.05 * i}>
              <div className="rounded-2xl border border-[rgba(0,200,255,0.1)] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[rgba(10,22,40,0.5)] hover:bg-[rgba(10,22,40,0.8)] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-white font-medium text-sm sm:text-base leading-snug">{q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#00c8ff] text-xl flex-shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[#6b8fb5] text-sm sm:text-base leading-relaxed border-t border-[rgba(0,200,255,0.06)] pt-4">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
