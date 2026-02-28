"use client";

import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper className="py-32 px-6 max-w-6xl mx-auto relative" id="about">
      
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed 
                      bg-white/5 backdrop-blur-2xl 
                      border border-white/10 
                      rounded-2xl p-10 md:p-14
                      shadow-[0_0_80px_rgba(99,102,241,0.08)] 
                      transition duration-500 hover:shadow-[0_0_100px_rgba(99,102,241,0.15)]">
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
      </div>

    </SectionWrapper>
  );
}