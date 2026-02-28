"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  { title: "Languages", skills: ["Python", "Go"] },
  { title: "AI / ML", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"] },
  { title: "LLM & NLP", skills: ["LLM Fine-Tuning", "MCP Architecture", "Word2Vec", "FastText"] },
  { title: "Backend", skills: ["FastAPI", "REST APIs", "Microservices"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Azure", "GCP", "Docker"] },
  { title: "Data & Tools", skills: ["OpenCV", "Web Scraping", "QGIS"] },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition duration-500"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}