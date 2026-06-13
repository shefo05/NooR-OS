import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noor-os.com"),
  title: {
    default: "Noor OS",
    template: "%s | Noor OS",
  },
  description:
    "Noor OS is the first AI-native operating system. A platform-independent computing experience where AI becomes the primary interface. Local AI, privacy-first, Arabic native, Linux powered.",
  keywords: [
    "Noor OS",
    "NoorOS",
    "Noor Operating System",
    "Noor AI OS",
    "AI operating system",
    "AI-native operating system",
    "intent-driven computing",
    "local AI",
    "offline AI",
    "Arabic AI",
    "AI desktop",
    "Linux AI",
    "Ollama",
    "Qwen",
    "privacy AI",
    "AI assistant OS",
  ],
  authors: [{ name: "Noor OS" }],
  creator: "Noor OS",
  publisher: "Noor OS",
  category: "Technology",
  openGraph: {
    title: "Noor OS",
    description:
      "Built for a world where humans express intent and computers handle execution. A platform-independent OS experience powered by local AI.",
    type: "website",
    siteName: "Noor OS",
    url: "https://noor-os.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor OS",
    description:
      "Built for a world where humans express intent and computers handle execution.",
    creator: "@noor_os",
    site: "@noor_os",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://noor-os.com",
  },
  verification: {
    google: "noor-os-google-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://noor-os.com/#website",
      url: "https://noor-os.com",
      name: "Noor OS",
      description: "The First AI-Native Operating System",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://noor-os.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://noor-os.com/#software",
      name: "Noor OS",
      alternateName: ["NoorOS", "Noor Operating System", "Noor AI OS"],
      applicationCategory: "OperatingSystem",
      operatingSystem: "Linux, Windows, Cross-platform",
      description:
        "The first AI-native operating system. A platform-independent computing experience where AI is the primary interface. Features intent-driven computing, local AI execution, offline AI, privacy-first architecture, full Arabic language support, and autonomous agent capabilities.",
      url: "https://noor-os.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
      },
      featureList: [
        "AI Bar - intent-driven OS interface",
        "Local AI execution via Ollama and Qwen",
        "Offline AI operation",
        "Privacy-first architecture - no cloud data transfer",
        "Arabic language AI support",
        "Noor Reader - AI PDF workspace",
        "Noor Vision - AI image analysis",
        "Noor Media - AI audio and video intelligence",
        "Autonomous AI agent loop",
        "Mobile companion app",
      ],
      softwareVersion: "2.0",
      releaseNotes: "AI Workspace Suite with Reader, Vision, Media, and Arabic support",
      isAccessibleForFree: true,
    },
    {
      "@type": "Organization",
      "@id": "https://noor-os.com/#organization",
      name: "Noor OS",
      url: "https://noor-os.com",
      logo: {
        "@type": "ImageObject",
        url: "https://noor-os.com/logo.png",
      },
      description:
        "Developers of Noor OS, the first AI-native operating system focused on intent-driven computing, local AI, and Arabic language support.",
      knowsAbout: [
        "Artificial Intelligence",
        "Operating Systems",
        "Local AI",
        "Offline AI",
        "Intent-Driven Computing",
        "Arabic Language AI",
        "Linux",
        "Ollama",
        "Qwen",
        "Computer Vision",
        "Audio Intelligence",
        "Document Intelligence",
      ],
      sameAs: ["https://github.com/shefo05/NooR-OS"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://noor-os.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Noor OS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noor OS is the first AI-native operating system. It is a platform-independent computing experience built on Linux where artificial intelligence serves as the primary interface. Instead of navigating menus and commands, users express intent in natural language and Noor OS executes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Noor OS work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Noor OS runs all AI models locally using Ollama and Qwen. No data is sent to external servers. All AI processing - including natural language understanding, document analysis, image recognition, and audio transcription - happens entirely on your device.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms does Noor OS support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noor OS is platform-independent and built on Linux. It targets Linux desktops, workstations, educational devices, enterprise systems, and edge computing environments. A mobile companion app is also available.",
          },
        },
        {
          "@type": "Question",
          name: "How does Noor OS protect user privacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noor OS uses a privacy-first architecture where all AI models run locally on the device. No user data, documents, images, or conversations are transmitted to cloud servers. Additionally, a human-in-the-loop security layer requires user approval before any sensitive system operation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Noor OS support Arabic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Arabic is a first-class language in Noor OS. The system supports Arabic AI conversations, Arabic OCR, right-to-left (RTL) interface elements, Arabic document analysis, and full Arabic AIBar commands.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models does Noor OS use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Noor OS uses Qwen 2.5 as its primary language model via Ollama for local execution. It also integrates Whisper for speech recognition, and custom OCR and computer vision models for document and image intelligence.",
          },
        },
        {
          "@type": "Question",
          name: "What is intent-driven computing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Intent-driven computing is a new paradigm where users express what they want to accomplish in natural language, and the operating system determines how to execute it. This is the opposite of command-driven computing where users must know specific commands, menus, and procedures.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Noor AI Bar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Noor AI Bar is a system-wide AI interface accessible from any screen with a single keyboard shortcut. Users type or speak commands in natural language to open applications, manage files, run system commands, execute workflows, and control the entire operating system.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
