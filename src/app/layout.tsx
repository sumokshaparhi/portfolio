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
    "Machine Learning Engineer specializing in LLM systems, AI microservices, model deployment, and scalable cloud infrastructure using Python, Go, AWS, Azure, and GCP.",

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
  ],

  openGraph: {
    title: "Sumoksha Parhi | Machine Learning Engineer",
    description:
      "Production-grade LLM systems, AI microservices, and scalable cloud deployments.",
    url: "https://sumoksha-portfolio.vercel.app",
    siteName: "Sumoksha Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sumoksha Parhi | Machine Learning Engineer",
    description:
      "LLM Systems • AI Microservices • Scalable Cloud Deployments",
  },

  authors: [{ name: "Sumoksha Parhi" }],
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