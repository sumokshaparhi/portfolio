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
  metadataBase: new URL("https://sumoksha-portfolio.vercel.app"),

  title: {
    default: "Sumoksha Parhi | Machine Learning Engineer",
    template: "%s | Sumoksha Parhi",
  },

  description:
    "Machine Learning Engineer building production-grade LLM systems, AI microservices, scalable cloud deployments, and high-performance backend architectures using Python, Go, AWS, Azure, and GCP.",

  keywords: [
    "Sumoksha Parhi",
    "Machine Learning Engineer",
    "LLM Engineer",
    "AI Engineer",
    "Go Backend",
    "Python Developer",
    "MCP Architecture",
    "FastAPI",
    "AWS",
    "Azure",
    "GCP",
  ],

  openGraph: {
    title: "Sumoksha Parhi | Machine Learning Engineer",
    description:
      "Machine Learning Engineer building production-grade LLM systems, AI microservices, scalable cloud deployments, and high-performance backend architectures using Python, Go, AWS, Azure, and GCP.",
    url: "https://sumoksha-portfolio.vercel.app",
    siteName: "Sumoksha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sumoksha Parhi - Machine Learning Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sumoksha Parhi | Machine Learning Engineer",
    description:
      "Production-grade LLM systems • AI microservices • Scalable cloud infrastructure • Go & Python backend engineering.",
    images: ["/og.png"],
  },

  authors: [{ name: "Sumoksha Parhi" }],
  creator: "Sumoksha Parhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}