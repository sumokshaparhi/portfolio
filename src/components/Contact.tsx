"use client";

import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper className="py-32 px-6 max-w-4xl mx-auto text-center" id="contact">

      <h2 className="text-4xl font-semibold mb-8">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        Open to ML / LLM engineering roles, research collaborations,
        and high-impact AI system projects.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:parhisumoksha7327@gmail.com"
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg shadow-lg shadow-blue-600/30 hover:opacity-90 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sumokshaparhi"
          target="_blank"
          className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-lg hover:bg-white/10 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/sumokshaparhi"
          target="_blank"
          className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-lg hover:bg-white/10 transition"
        >
          GitHub
        </a>
      </div>

    </SectionWrapper>
  );
}