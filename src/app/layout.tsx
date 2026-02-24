import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientEffects from "../components/ClientEffects";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}