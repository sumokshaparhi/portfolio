"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      {/* STATIC Background Glow (NOT animated) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-1/3 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      {/* Animated Content Only */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight 
        bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 
        bg-[length:200%] bg-clip-text text-transparent animate-gradient">
          Sumoksha Parhi
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
          Machine Learning Engineer | LLM Systems | Go & Python
        </p>

        <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
          I build production-grade LLM systems, AI microservices,
          and scalable cloud deployments designed for real-world scale.
        </p>

        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-purple-600 
            px-6 py-3 rounded-lg 
            hover:opacity-90 transition 
            shadow-lg shadow-blue-600/30"
          >
            View Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="backdrop-blur-md bg-white/5 
            border border-white/10 
            px-6 py-3 rounded-lg 
            hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}