"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Aiverbalyze Technologies",
    period: "May 2025 – Present",
    points: [
      "Designed and implemented production-grade MCP architecture for AI voice agents.",
      "Migrated latency-sensitive backend services from Python to Go for improved concurrency.",
      "Engineered scalable NLP microservices using FastAPI and Go APIs.",
      "Deployed ML inference services across AWS, Azure, and GCP.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Nokia",
    period: "Jan 2024 – Apr 2024",
    points: [
      "Improved telecom data accuracy using KPI analysis.",
      "Automated zero-traffic cell performance monitoring systems.",
      "Optimized network performance through structured audits.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "University of Hyderabad",
    period: "Jul 2023 – Aug 2023",
    points: [
      "Built content-based recommendation system using NLP.",
      "Designed scraping + preprocessing pipelines for large datasets.",
      "Implemented Word2Vec and FastText embeddings.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto relative">
      <motion.h2
        className="text-4xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      {/* Gradient Timeline Line */}
      <div className="relative pl-10 space-y-20 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-indigo-500/40 before:via-purple-500/20 before:to-transparent">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Pulsing Timeline Dot */}
            <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.9)] animate-pulse" />

            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-[0_0_60px_rgba(99,102,241,0.05)] hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] transition duration-500">

              <h3 className="text-xl font-semibold">
                {exp.role} —{" "}
                <span className="text-indigo-400">{exp.company}</span>
              </h3>

              <p className="text-sm text-gray-400 mb-5">
                {exp.period}
              </p>

              <ul className="space-y-3 text-gray-300 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}