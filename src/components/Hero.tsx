"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Sumoksha Parhi
      </motion.h1>

      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Machine Learning Engineer | LLM Systems | Go & Python
      </motion.p>

      <motion.p
        className="mt-4 text-gray-500 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I build production-grade LLM systems, AI microservices, and scalable cloud deployments.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Scroll to Projects */}
        <motion.a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Work
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href="/resume.pdf"
          download
          className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </motion.section>
  );
}