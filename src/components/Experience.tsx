"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-16 relative before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-white/10">

        {/* Aiverbalyze */}
        <motion.div
          className="relative pl-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-2 top-2 w-4 h-4 bg-purple-500 rounded-full" />

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">
              Machine Learning Engineer — Aiverbalyze Technologies
            </h3>
            <p className="text-gray-500 mb-4">May 2025 – Present</p>

            <ul className="text-gray-400 space-y-2">
              <li>Designed production-grade MCP architecture for AI voice agents.</li>
              <li>Migrated backend services from Python to Go for concurrency gains.</li>
              <li>Built scalable NLP microservices using FastAPI & Go APIs.</li>
              <li>Deployed ML inference pipelines across AWS, Azure & GCP.</li>
            </ul>
          </div>
        </motion.div>

        {/* Nokia */}
        <motion.div
          className="relative pl-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-2 top-2 w-4 h-4 bg-blue-500 rounded-full" />

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">
              Data Scientist Intern — Nokia
            </h3>
            <p className="text-gray-500 mb-4">Jan 2024 – Apr 2024</p>

            <ul className="text-gray-400 space-y-2">
              <li>Improved telecom KPI accuracy using Golden Parameter extraction.</li>
              <li>Automated zero-traffic monitoring systems.</li>
              <li>Optimized network performance through structured audits.</li>
            </ul>
          </div>
        </motion.div>

        {/* UoH */}
        <motion.div
          className="relative pl-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-2 top-2 w-4 h-4 bg-pink-500 rounded-full" />

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">
              Data Scientist Intern — University of Hyderabad
            </h3>
            <p className="text-gray-500 mb-4">Jul 2023 – Aug 2023</p>

            <ul className="text-gray-400 space-y-2">
              <li>Built NLP-based recommendation system for airline baggage classification.</li>
              <li>Designed web scraping & preprocessing pipelines.</li>
              <li>Implemented Word2Vec & FastText embeddings.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}