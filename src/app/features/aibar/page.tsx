import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Bar — Intent-Driven OS Interface",
  description:
    "Noor AI Bar is a system-wide AI command interface. One keystroke summons an AI assistant that understands natural language and executes OS commands, opens apps, manages files, and runs workflows.",
  keywords: [
    "AI command bar",
    "AI OS interface",
    "intent-driven interface",
    "AI keyboard shortcut assistant",
    "natural language OS control",
    "AI bar Linux",
    "Noor AIBar",
  ],
  alternates: { canonical: "https://noor-os.com/features/aibar" },
  openGraph: {
    title: "Noor AI Bar — Intent-Driven OS Interface",
    description: "One keystroke. Natural language. Your entire OS at your command.",
    url: "https://noor-os.com/features/aibar",
  },
};

const relatedFeatures = [
  { slug: "reader", name: "Noor Reader" },
  { slug: "privacy", name: "Privacy" },
  { slug: "arabic", name: "Arabic First" },
];

export default function AIBarPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "AI Bar", item: "https://noor-os.com/features/aibar" },
    ],
  };

  const featureLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Noor AI Bar",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Linux",
    description:
      "A system-wide AI command interface in Noor OS. Users invoke it with a single keystroke and control the entire operating system using natural language commands.",
    isPartOf: { "@type": "SoftwareApplication", name: "Noor OS", url: "https://noor-os.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureLd) }} />

      <article className="min-h-screen bg-[#050d1a] pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#6b8fb5] mb-10 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <span>/</span>
            <span className="text-white">AI Bar</span>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="tag mb-5 inline-flex">AI Bar</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              One keystroke.<br />
              <span className="text-[#00c8ff]">Everything executed.</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              The Noor AI Bar is a system-wide intent interface. Press a key.
              Type what you want. Your operating system does the rest — no menus,
              no file paths, no memorized commands.
            </p>
          </header>

          {/* Main screenshot */}
          <div className="screen-frame mb-16">
            <Image src="/screenshots/aibar/ss03-suggestions.png" alt="Noor AI Bar showing intent suggestions" width={1200} height={700} className="w-full h-auto" priority />
          </div>

          {/* Definition block — GEO optimized */}
          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">What is the Noor AI Bar?</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              The <strong className="text-white">Noor AI Bar</strong> is the primary interface layer of Noor OS.
              It is a universal AI command system that replaces application launchers, terminal emulators,
              file managers, and search bars with a single natural language interface.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              Unlike traditional OS launchers, the AI Bar understands <em>context</em> and <em>intent</em>.
              Saying &ldquo;find the project report from last week&rdquo; locates and opens the file.
              Saying &ldquo;check if the server is running&rdquo; executes the appropriate system command.
              All AI processing happens locally — nothing leaves the device.
            </p>
          </section>

          {/* Execution flow screenshots */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/screenshots/aibar/ss06-welcome.png", step: "1. Invoke", desc: "One hotkey summons the AI Bar from anywhere on the OS" },
                { src: "/screenshots/aibar/ss07-executing.png", step: "2. Execute", desc: "Type your intent. Watch the AI understand and act in real time" },
                { src: "/screenshots/aibar/ss08-result.png", step: "3. Result", desc: "Instant output. Task completed — without touching a single menu" },
              ].map(({ src, step, desc }) => (
                <div key={step} className="flex flex-col gap-3">
                  <div className="screen-frame">
                    <Image src={src} alt={`Noor AI Bar — ${step}`} width={600} height={380} className="w-full h-auto" />
                  </div>
                  <p className="text-white text-sm font-semibold">{step}</p>
                  <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Application Control", desc: "Open, close, switch between, and interact with any installed application using natural language." },
                { title: "File Management", desc: "Find, rename, move, copy, or delete files by describing them, not by navigating directory trees." },
                { title: "System Monitoring", desc: "Check CPU, memory, storage, network status, and running processes by asking." },
                { title: "Workflow Execution", desc: "Chain complex multi-step operations into a single intent statement. Noor handles each step." },
                { title: "Arabic Commands", desc: "Full Arabic language support for all AI Bar commands and responses." },
                { title: "Developer Tools", desc: "Run git commands, tail logs, check build status, and execute scripts without leaving Noor." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-5 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.5)]">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Explore more Noor OS features</h2>
            <div className="flex flex-wrap gap-3">
              {relatedFeatures.map(({ slug, name }) => (
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
