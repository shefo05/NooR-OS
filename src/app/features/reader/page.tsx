import type { Metadata } from "next";
import Link from "next/link";
import LightboxImage from "@/components/ui/lightbox-image";

export const metadata: Metadata = {
  title: "Noor Reader  AI PDF & Document Intelligence",
  description:
    "Noor Reader is an AI-powered PDF workspace. Ask questions about documents, get summaries, extract knowledge, run OCR, and create quizzes  all locally with no cloud upload.",
  keywords: [
    "AI PDF reader",
    "AI document analysis",
    "AI document Q&A",
    "local AI PDF",
    "offline document AI",
    "PDF AI assistant desktop",
    "AI document summary",
    "Noor Reader",
  ],
  alternates: { canonical: "https://noor-os.com/features/reader" },
  openGraph: {
    title: "Noor Reader  AI PDF & Document Intelligence",
    description: "Have a conversation with your documents. Locally. Privately.",
    url: "https://noor-os.com/features/reader",
  },
};

export default function ReaderPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "Noor Reader", item: "https://noor-os.com/features/reader" },
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
            <span className="text-white">Noor Reader</span>
          </nav>

          <header className="mb-16">
            <span className="tag mb-5 inline-flex">Noor Reader</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Talk to your<br />
              <span className="text-[#00c8ff]">documents.</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              Open any PDF in Noor Reader and have a conversation with it.
              Ask questions, get instant summaries, extract specific information,
              create quizzes  entirely on your device, with no cloud upload.
            </p>
          </header>

          {/* Definition block */}
          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">What is Noor Reader?</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              <strong className="text-white">Noor Reader</strong> is the document intelligence module of Noor OS.
              It is an AI-powered PDF workspace that allows users to interact with documents through natural language
              rather than reading them linearly.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              Unlike cloud-based PDF AI tools, Noor Reader processes all documents using local AI models.
              No document content is transmitted to external servers. This makes it suitable for sensitive
              documents  legal, medical, financial, academic, and governmental files  where privacy is non-negotiable.
            </p>
          </section>

          {/* Screenshot grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Document intelligence in action</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/screenshots/reader/ss14-ask.png", label: "Ask anything" },
                { src: "/screenshots/reader/ss15-summary.png", label: "AI Summary" },
                { src: "/screenshots/reader/ss16-highlight.png", label: "Smart highlights" },
                { src: "/screenshots/reader/ss17-quiz.png", label: "Auto quiz" },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="screen-frame">
                    <LightboxImage src={src} alt={`Noor Reader  ${label}`} width={600} height={400} className="w-full h-auto" />
                  </div>
                  <p className="text-[#6b8fb5] text-xs text-center">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Document Q&A", desc: "Ask any question about the document in plain language. Get precise, cited answers." },
                { title: "AI Summaries", desc: "Generate executive summaries, section summaries, or key-point extractions instantly." },
                { title: "OCR Support", desc: "Scanned documents, handwritten notes, and image-based PDFs are fully supported via OCR." },
                { title: "Knowledge Quiz", desc: "Automatically generate quiz questions from any document to test or reinforce understanding." },
                { title: "Smart Highlights", desc: "AI identifies and highlights the most important passages across the document." },
                { title: "Arabic Documents", desc: "Full Arabic OCR and AI analysis for Arabic-language documents with RTL rendering." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-5 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.5)]">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Explore more Noor OS features</h2>
            <div className="flex flex-wrap gap-3">
              {[{ slug: "aibar", name: "AI Bar" }, { slug: "vision", name: "Noor Vision" }, { slug: "privacy", name: "Privacy" }].map(({ slug, name }) => (
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
