"use client";

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
  return (
    <SectionWrapper className="py-32 px-6 max-w-5xl mx-auto relative" id="experience">
      
      <h2 className="text-4xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-20">

              <div className="absolute left-[18px] top-6 z-10">
                <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.9)]" />
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-[0_0_60px_rgba(99,102,241,0.05)] hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] transition duration-500">
                <h3 className="text-xl font-semibold">
                  {exp.role} — <span className="text-indigo-400">{exp.company}</span>
                </h3>

                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>

    </SectionWrapper>
  );
}