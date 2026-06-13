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
  title: "Noor OS — The First AI-Native Operating System",
  description:
    "Noor OS is the first AI-native operating system. A platform-independent computing experience where AI becomes the primary interface. Local AI, privacy-first, Arabic native, Linux powered.",
  keywords: [
    "AI operating system",
    "Noor OS",
    "Noor Operating System",
    "Noor AI OS",
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
  ],
  openGraph: {
    title: "Noor OS — The First AI-Native Operating System",
    description:
      "Built for a world where humans express intent and computers handle execution. A platform-independent OS experience powered by local AI.",
    type: "website",
    siteName: "Noor OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor OS — The First AI-Native Operating System",
    description:
      "Built for a world where humans express intent and computers handle execution.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Noor OS",
      alternateName: ["Noor Operating System", "Noor AI OS", "AI-Native Operating System"],
      applicationCategory: "OperatingSystem",
      operatingSystem: "Linux, Windows, Cross-platform",
      description:
        "The first AI-native operating system. A platform-independent computing experience where AI becomes the primary interface to computing. Supports local AI, offline AI, Arabic language, and intent-driven computing.",
      keywords:
        "AI operating system, intent-driven computing, local AI, offline AI, Arabic AI, Linux, Ollama, Qwen",
    },
    {
      "@type": "Organization",
      name: "Noor OS",
      description: "Developers of the first AI-native operating system",
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
