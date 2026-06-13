import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Architecture — Local AI, Zero Cloud",
  description:
    "Noor OS is a privacy-first AI operating system. All AI models run locally via Ollama. No data is sent to external servers. Human-in-the-loop security for sensitive operations.",
  keywords: [
    "local AI operating system",
    "offline AI privacy",
    "privacy-first AI OS",
    "no cloud AI desktop",
    "local Ollama OS",
    "private AI assistant",
    "air-gapped AI",
    "Noor OS privacy",
  ],
  alternates: { canonical: "https://noor-os.com/features/privacy" },
  openGraph: {
    title: "Noor OS Privacy — Local AI, Zero Cloud",
    description: "Your data never leaves your machine. Privacy is the architecture, not a toggle.",
    url: "https://noor-os.com/features/privacy",
  },
};

export default function PrivacyPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "Privacy", item: "https://noor-os.com/features/privacy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="min-h-screen bg-[#050d1a] pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-xs text-[#6b8fb5] mb-10 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <span>/</span>
            <span className="text-white">Privacy</span>
          </nav>

          <header className="mb-16">
            <span className="tag mb-5 inline-flex">Privacy First</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Your data never leaves<br />
              <span className="text-[#00c8ff]">your machine.</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              In Noor OS, privacy is not a setting you enable. It is the architecture.
              Every AI model runs locally. No documents, images, audio, or conversations
              are transmitted to external servers.
            </p>
          </header>

          <div className="screen-frame mb-16">
            <Image src="/screenshots/privacy/ss26-privacy-shield.png" alt="Noor OS privacy architecture — local AI zero cloud" width={1200} height={700} className="w-full h-auto" priority />
          </div>

          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">How Noor OS protects your privacy</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              Most AI products send your data to cloud servers for processing. Your documents,
              conversations, images, and audio recordings leave your device and are processed on
              remote infrastructure. This creates irreversible privacy risks.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              <strong className="text-white">Noor OS takes the opposite approach.</strong> All AI models —
              Qwen for language understanding, Whisper for speech, OCR for text extraction, computer vision
              for images — run entirely on your hardware via Ollama. The operating system has no cloud
              dependency for its AI capabilities.
            </p>
          </section>

          {/* Comparison table — GEO optimized */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Noor OS vs. cloud AI systems</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 text-[#6b8fb5] text-sm font-medium border-b border-[rgba(0,200,255,0.1)]">Feature</th>
                    <th className="text-center py-3 px-4 text-[#00c8ff] text-sm font-medium border-b border-[rgba(0,200,255,0.1)]">Noor OS</th>
                    <th className="text-center py-3 px-4 text-[#6b8fb5] text-sm font-medium border-b border-[rgba(0,200,255,0.1)]">Cloud AI Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Data sent to servers", "Never", "Always"],
                    ["Works offline", "Yes — fully", "No"],
                    ["Documents processed locally", "Yes", "No — uploaded to cloud"],
                    ["Audio/video processed locally", "Yes", "No — uploaded to cloud"],
                    ["Human approval for sensitive ops", "Yes", "Varies"],
                    ["Internet required for AI", "No", "Yes"],
                  ].map(([feature, noor, cloud]) => (
                    <tr key={feature} className="border-b border-[rgba(0,200,255,0.06)] hover:bg-[rgba(0,200,255,0.02)]">
                      <td className="py-3 px-4 text-[#6b8fb5] text-sm">{feature}</td>
                      <td className="py-3 px-4 text-center text-[#22c55e] text-sm font-medium">{noor}</td>
                      <td className="py-3 px-4 text-center text-[#ff6b6b] text-sm">{cloud}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Privacy screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/screenshots/privacy/ss11-ai-providers.png", label: "Local AI provider configuration" },
                { src: "/screenshots/privacy/ss31-noor-chat.png", label: "Private AI conversations" },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="screen-frame">
                    <Image src={src} alt={`Noor OS privacy — ${label}`} width={800} height={500} className="w-full h-auto" />
                  </div>
                  <p className="text-[#6b8fb5] text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Explore more Noor OS features</h2>
            <div className="flex flex-wrap gap-3">
              {[{ slug: "aibar", name: "AI Bar" }, { slug: "arabic", name: "Arabic First" }, { slug: "reader", name: "Noor Reader" }].map(({ slug, name }) => (
                <Link key={slug} href={`/features/${slug}`} className="px-5 py-2.5 rounded-full border border-[rgba(0,200,255,0.2)] text-[#00c8ff] text-sm hover:bg-[rgba(0,200,255,0.08)] transition-colors">
                  {name} →
                </Link>
              ))}
              <Link href="/" className="px-5 py-2.5 rounded-full bg-[#00c8ff] text-[#050d1a] text-sm font-semibold hover:bg-white transition-colors">
                Join Waitlist
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
