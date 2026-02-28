"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto relative"
    >
      {/* Gradient Glow Behind Panel */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Glass Panel */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed 
                   bg-white/5 backdrop-blur-2xl 
                   border border-white/10 
                   rounded-2xl p-10 md:p-14
                   shadow-[0_0_80px_rgba(99,102,241,0.08)] 
                   transition duration-500 hover:shadow-[0_0_100px_rgba(99,102,241,0.15)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>
          I am a Machine Learning Engineer specializing in production-grade
          LLM systems, AI microservices, and scalable cloud deployments.
          My focus is on building high-performance backend architectures
          that power intelligent, real-world AI applications.
        </p>

        <p>
          I have led backend migrations from Python to Go to improve
          concurrency and real-time performance, designed dynamic MCP
          architectures for AI voice agents, and deployed inference pipelines
          across AWS, Azure, and GCP.
        </p>
      </motion.div>
    </section>
  );
}