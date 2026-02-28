"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";

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
      "Designed scraping and preprocessing pipelines.",
      "Implemented Word2Vec and FastText embeddings.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper
      id="experience"
      className="py-32 px-6 max-w-5xl mx-auto relative"
    >
      <h2 className="text-4xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div ref={ref} className="relative">
        {/* Animated Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 top-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
        />

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative pl-20"
            >
              {/* Pulsing Glowing Dot */}
              <div className="absolute left-[18px] top-6 z-10">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(99,102,241,0.6)",
                      "0 0 25px rgba(139,92,246,0.9)",
                      "0 0 10px rgba(99,102,241,0.6)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 rounded-full bg-indigo-500"
                />
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-[0_0_60px_rgba(99,102,241,0.05)] hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] transition duration-500">
                <h3 className="text-xl font-semibold">
                  {exp.role} —{" "}
                  <span className="text-indigo-400">{exp.company}</span>
                </h3>

                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}